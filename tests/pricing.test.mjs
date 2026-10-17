import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const source = await readSource("app/pricing/price-data.ts");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022 },
}).outputText;
const { publishedDate, pricingPeriod, domesticPrices, tm44Prices, incVat } =
  await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("pricing publication is fixed to 17 October, for October–December 2026", () => {
  assert.equal(publishedDate, "2026-10-17");
  assert.equal(pricingPeriod, "October–December 2026");
  assert.doesNotMatch(source, /new Date\(\)|Date\.now\(/);
});

test("domestic prices contain exactly the 11 agreed property combinations", () => {
  const expected = [
    ["flat", 1, 75], ["flat", 2, 80], ["flat", 3, 85],
    ["semi-detached", 2, 75], ["semi-detached", 3, 80], ["semi-detached", 4, 80],
    ["detached", 2, 75], ["detached", 3, 80], ["detached", 4, 85],
    ["detached", 5, 90], ["detached", 6, 90],
  ];
  const normalise = (rows) => rows.map(([type, bedrooms, price]) =>
    [type.toLowerCase(), bedrooms, price]).sort(([a, n], [b, m]) => a.localeCompare(b) || n - m);
  assert.deepEqual(normalise(domesticPrices.map(({ propertyType, bedrooms, priceExVat }) =>
    [propertyType, bedrooms, priceExVat])), normalise(expected));
  assert.equal(new Set(domesticPrices.map(({ propertyType, bedrooms }) => `${propertyType}:${bedrooms}`)).size, 11);
});

test("TM44 prices cover every external unit count from 2 to 30 at £15 increments", () => {
  assert.equal(tm44Prices.length, 29);
  assert.deepEqual(tm44Prices.map(({ externalUnits }) => externalUnits),
    Array.from({ length: 29 }, (_, index) => index + 2));
  for (const { externalUnits, priceExVat } of tm44Prices) {
    assert.equal(priceExVat, 350 + (externalUnits - 2) * 15, `${externalUnits} external units`);
  }
  assert.equal(tm44Prices.at(-1).priceExVat, 770);
});

test("VAT-inclusive totals preserve the agreed net prices and show 20% VAT", () => {
  for (const [net, gross] of [[75, 90], [80, 96], [85, 102], [90, 108], [350, 420], [365, 438], [770, 924]]) {
    assert.equal(incVat(net), gross, `VAT-inclusive price for £${net}`);
  }
  for (const { priceExVat } of [...domesticPrices, ...tm44Prices]) {
    assert.equal(incVat(priceExVat), Math.round(priceExVat * 120) / 100);
  }
});

test("pricing page has dedicated search metadata and an accessible publication marker", async () => {
  const page = await readSource("app/pricing/page.tsx");
  assert.match(page, /export const metadata\s*:/);
  assert.match(page, /title\s*:[^\n]*(?:Pricing|Prices)/i);
  assert.match(page, /canonical\s*:\s*["']\/pricing["']/);
  assert.match(page, /<time\b[^>]*dateTime=\{publishedDate\}/);
  assert.match(page, /17 October 2026/);
  assert.match(page, /Published/);
  assert.match(page, /\{pricingPeriod\}/);
  assert.match(page, /domesticPrices/);
  assert.match(page, /tm44Prices/);
  assert.match(page, /incVat\(/);
  assert.match(page, /including VAT|inc(?:l)?\.? VAT/i);
  assert.match(page, /excluding VAT|ex(?:cl)?\.? VAT/i);
  assert.match(page, /20%/);
  assert.match(page, /href=["']\/instant-quote-booking/);
});

test("pricing is linked from both desktop and mobile navigation", async () => {
  const nav = await readSource("app/site-nav.tsx");
  assert.equal((nav.match(/href=["']\/pricing["']/g) || []).length, 2);
  const mobileStart = nav.indexOf('className="mobile-nav-panel"');
  assert.ok(mobileStart > 0);
  for (const section of [nav.slice(0, mobileStart), nav.slice(mobileStart)]) {
    assert.match(section, /href=["']\/pricing["'][^>]*>Pricing<\/a>/);
  }
});

test("pricing is listed in the HTML and XML sitemaps", async () => {
  const html = await readSource("app/sitemap/page.tsx");
  const xml = await readSource("app/sitemap.xml/route.ts");
  assert.match(html, /\[["'](?:Pricing|Prices)["'],\s*["']\/pricing["']\]/);
  assert.match(xml, /path:\s*["']\/pricing["']/);
});
