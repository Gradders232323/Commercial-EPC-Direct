import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../app/domestic-epc/embed-config.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022 } }).outputText;
const { getDomesticEpcEmbedHeight, DOMESTIC_EPC_BOOKING_ORIGIN, DOMESTIC_EPC_BOOKING_URL } =
  await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const valid = { type: "ced:domestic-epc:resize", height: 1200.3 };

test("booking uses the dedicated Domestic EPC Direct flow, not the pay-on-completion flow", () => {
  assert.equal(DOMESTIC_EPC_BOOKING_URL, `${DOMESTIC_EPC_BOOKING_ORIGIN}/domestic-epc-direct`);
  assert.equal(getDomesticEpcEmbedHeight(valid, DOMESTIC_EPC_BOOKING_ORIGIN, true), 1201);
});

test("frame resize rejects other origins, other frames and malformed data", () => {
  assert.equal(getDomesticEpcEmbedHeight(valid, "https://example.com", true), null);
  assert.equal(getDomesticEpcEmbedHeight(valid, `${DOMESTIC_EPC_BOOKING_ORIGIN}.example.com`, true), null);
  assert.equal(getDomesticEpcEmbedHeight(valid, DOMESTIC_EPC_BOOKING_ORIGIN, false), null);
  for (const data of [null, "1200", [], { height: 1200 }, { ...valid, type: "gradwell:domestic-epc:resize" }]) {
    assert.equal(getDomesticEpcEmbedHeight(data, DOMESTIC_EPC_BOOKING_ORIGIN, true), null);
  }
});

test("frame resize only accepts finite bounded numbers", () => {
  for (const height of [undefined, null, "1200", -1, 0, 479, 6001, Infinity, NaN]) {
    assert.equal(getDomesticEpcEmbedHeight({ ...valid, height }, DOMESTIC_EPC_BOOKING_ORIGIN, true), null);
  }
  assert.equal(getDomesticEpcEmbedHeight({ ...valid, height: 480 }, DOMESTIC_EPC_BOOKING_ORIGIN, true), 480);
  assert.equal(getDomesticEpcEmbedHeight({ ...valid, height: 6000 }, DOMESTIC_EPC_BOOKING_ORIGIN, true), 6000);
});

test("embed checks the exact window and offers a safe standalone fallback", async () => {
  const embed = await readFile(new URL("../app/domestic-epc/booking-embed.tsx", import.meta.url), "utf8");
  assert.match(embed, /event\.source === frame\.current\.contentWindow/);
  assert.match(embed, /removeEventListener\("message", onMessage\)/);
  assert.match(embed, /\?embed=1/);
  assert.match(embed, /title="Domestic EPC instant quotation and booking request"/);
  assert.match(embed, /target="_blank" rel="noopener noreferrer"/);
});

test("entry copy preserves payment and appointment boundaries without hard-coded prices", async () => {
  const page = await readFile(new URL("../app/domestic-epc/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Start with the address/);
  assert.match(page, /Online payment is not available yet/);
  assert.match(page, /full payment before the inspection/);
  assert.match(page, /appointment is confirmed separately/);
  assert.match(page, /price including VAT/);
  assert.doesNotMatch(page, /£\d|payment successful|appointment confirmed|pay on completion/i);
});

test("domestic route is discoverable while commercial links remain available", async () => {
  const nav = await readFile(new URL("../app/site-nav.tsx", import.meta.url), "utf8");
  assert.equal((nav.match(/href="\/domestic-epc"/g) || []).length, 2);
  assert.match(nav, /"\/instant-quote-booking"/);
  for (const path of ["app/page.tsx", "app/services/page.tsx"]) {
    const content = await readFile(new URL(`../${path}`, import.meta.url), "utf8");
    assert.match(content, /<DomesticEpcCallout \/>/);
  }
  for (const path of ["app/sitemap/page.tsx", "app/sitemap.xml/route.ts"]) {
    const content = await readFile(new URL(`../${path}`, import.meta.url), "utf8");
    assert.match(content, /"\/domestic-epc"/);
  }
});

test("quote page uses the service selector instead of a separate Domestic EPC banner", async () => {
  const page = await readFile(new URL("../app/instant-quote-booking/page.tsx", import.meta.url), "utf8");
  const form = await readFile(new URL("../app/instant-quote-booking/booking-form.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(page, /DomesticEpcCallout|Get a Domestic EPC quote/);
  assert.match(form, /Choose your service/);
  assert.match(form, /<a className="booking-service-link" href="\/domestic-epc#domestic-epc-quote">/);
  assert.match(form, /<strong>Domestic EPC<\/strong>/);
  // Domestic EPC must use its OS-backed acceptance flow, not the commercial enquiry POST.
  const commercialOptions = form.slice(form.indexOf("const serviceOptions ="), form.indexOf("export default"));
  assert.doesNotMatch(commercialOptions, /Domestic EPC/);
  assert.match(form, /selectedServices\.join/);
  assert.match(form, /aria-pressed=\{selected\}/);
});

test("Domestic EPC funnel lets customers return to the service selector", async () => {
  const page = await readFile(new URL("../app/domestic-epc/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/domestic-epc.css", import.meta.url), "utf8");
  assert.match(page, /href="\/instant-quote-booking#booking-form"/);
  assert.match(page, /id="domestic-epc-quote"/);
  assert.match(css, /\.booking-service-link:focus-visible/);
});
