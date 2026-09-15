import assert from "node:assert/strict";
import test from "node:test";

const canonicalOrigin = "https://commercialepcleeds.co.uk";

function runtime() {
  return {
    env: {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    ctx: {
      waitUntil() {},
      passThroughOnException() {},
    },
  };
}

async function loadWorker(label) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(label, `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

async function request(path = "/", init = {}) {
  const worker = await loadWorker("test");
  const { env, ctx } = runtime();
  return worker.fetch(new Request(new URL(path, canonicalOrigin), init), env, ctx);
}

test("renders the Leeds homepage with its canonical URL", async () => {
  const response = await request();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Commercial EPC Leeds \| Local Commercial EPC Assessors<\/title>/i,
  );
  assert.match(
    html,
    /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/commercialepcleeds\.co\.uk\/?["']/i,
  );
  assert.doesNotMatch(html, /commercial-epc-direct\.info512176\.chatgpt\.site/i);
  assert.doesNotMatch(
    html,
    /href=["']\/commercial-epc-(birmingham|bristol|london|manchester|york)\/?["']/i,
  );
});

test("redirects www and insecure requests to the HTTPS apex", async () => {
  const worker = await loadWorker("redirect-test");
  const { env, ctx } = runtime();

  const wwwResponse = await worker.fetch(
    new Request("https://www.commercialepcleeds.co.uk/about?source=test"),
    env,
    ctx,
  );
  assert.equal(wwwResponse.status, 308);
  assert.equal(
    wwwResponse.headers.get("location"),
    "https://commercialepcleeds.co.uk/about?source=test",
  );

  const insecureResponse = await worker.fetch(
    new Request("http://commercialepcleeds.co.uk/quote"),
    env,
    ctx,
  );
  assert.equal(insecureResponse.status, 308);
  assert.equal(
    insecureResponse.headers.get("location"),
    "https://commercialepcleeds.co.uk/quote",
  );
});

test("redirects the duplicate Leeds route to the homepage", async () => {
  const response = await request("/commercial-epc-leeds?source=internal");
  assert.equal(response.status, 308);
  assert.equal(
    response.headers.get("location"),
    "https://commercialepcleeds.co.uk/?source=internal",
  );
});

test("redirects copied city pages to the Leeds locations directory", async () => {
  const response = await request("/commercial-epc-manchester?source=old-link");
  assert.equal(response.status, 308);
  assert.equal(
    response.headers.get("location"),
    "https://commercialepcleeds.co.uk/locations?source=old-link",
  );

  const worker = await loadWorker("single-hop-city-redirect");
  const { env, ctx } = runtime();
  const wwwResponse = await worker.fetch(
    new Request("http://www.commercialepcleeds.co.uk/commercial-epc-london"),
    env,
    ctx,
  );
  assert.equal(wwwResponse.status, 308);
  assert.equal(
    wwwResponse.headers.get("location"),
    "https://commercialepcleeds.co.uk/locations",
  );
});

test("publishes a same-host XML sitemap", async () => {
  const response = await request("/sitemap.xml");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^application\/xml\b/i);

  const xml = await response.text();
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );
  assert.equal(locations.length, 14);
  assert.ok(
    locations.every(
      (location) =>
        location === canonicalOrigin || location.startsWith(`${canonicalOrigin}/`),
    ),
  );
  assert.equal(new Set(locations).size, locations.length);
  assert.doesNotMatch(xml, /commercialepcdirect\.co\.uk/i);

  const worker = await loadWorker("sitemap-targets");
  const { env, ctx } = runtime();
  for (const location of locations) {
    const pageResponse = await worker.fetch(new Request(location), env, ctx);
    assert.equal(pageResponse.status, 200, location);
    const html = await pageResponse.text();
    const canonicalTag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
    assert.ok(canonicalTag, `missing canonical: ${location}`);
    const canonicalHref = canonicalTag.match(/href=["']([^"']+)["']/i)?.[1];
    assert.ok(canonicalHref, `missing canonical href: ${location}`);
    assert.equal(
      new URL(canonicalHref).href.replace(/\/$/, ""),
      new URL(location).href.replace(/\/$/, ""),
      location,
    );
  }
});

test("points robots.txt at the Leeds sitemap", async () => {
  const response = await request("/robots.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/plain\b/i);

  const robots = await response.text();
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(
    robots,
    /^Sitemap: https:\/\/commercialepcleeds\.co\.uk\/sitemap\.xml$/m,
  );
  assert.doesNotMatch(robots, /commercialepcdirect\.co\.uk/i);
});

test("uses Leeds Open Graph URLs on core content pages", async () => {
  for (const path of ["/about", "/guides", "/privacy"]) {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(
      html,
      new RegExp(
        `<meta[^>]+property=["']og:url["'][^>]+content=["']${canonicalOrigin.replaceAll(".", "\\.")}${path}["']`,
        "i",
      ),
      path,
    );
    assert.doesNotMatch(html, /https:\/\/www\.commercialepcdirect\.co\.uk\/(about|guides|privacy)/i, path);
  }
});
