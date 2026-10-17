import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../app/instant-quote-booking/embed-config.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022 } }).outputText;
const { SERVICE_QUOTE_URL, SERVICE_QUOTE_ORIGIN, serviceFrameMessage } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
test("all selections use the shared quotation funnel", () => {
  assert.equal(SERVICE_QUOTE_URL, `${SERVICE_QUOTE_ORIGIN}/ced-service-quote`);
});
test("only the exact booking frame and origin may communicate", () => {
  const ready = { type: "ced:service-quote:ready" };
  assert.deepEqual(serviceFrameMessage(ready, SERVICE_QUOTE_ORIGIN, true), ready);
  assert.equal(serviceFrameMessage(ready, "https://example.com", true), null);
  assert.equal(serviceFrameMessage(ready, `${SERVICE_QUOTE_ORIGIN}.evil.test`, true), null);
  assert.equal(serviceFrameMessage(ready, SERVICE_QUOTE_ORIGIN, false), null);
  for (const data of [null, [], "ready", { type: "unknown" }, { type: "ced:service-quote:submitted", kind: "fake" }]) assert.equal(serviceFrameMessage(data, SERVICE_QUOTE_ORIGIN, true), null);
});
test("resize accepts only finite bounded heights", () => {
  for (const height of [-1,0,479,6001,Infinity,NaN,"1200"]) assert.equal(serviceFrameMessage({ type: "ced:service-quote:resize", height }, SERVICE_QUOTE_ORIGIN, true), null);
  assert.equal(serviceFrameMessage({ type: "ced:service-quote:resize", height: 800.1 }, SERVICE_QUOTE_ORIGIN, true).height, 801);
});
test("page offers a working fallback and retains paid campaign attribution", async () => {
  const form = await readFile(new URL("../app/instant-quote-booking/booking-form.tsx", import.meta.url), "utf8");
  assert.match(form, /event\.source === frame\.current\.contentWindow/);
  assert.match(form, /applyPaidAttribution\(context/);
  assert.match(form, /removeEventListener\("message", onMessage\)/);
  assert.match(form, /href=\{quoteUrl\} target="_blank" rel="noopener noreferrer"/);
  assert.doesNotMatch(form, /access_key|customer\.email|customer\.phone/);
});
