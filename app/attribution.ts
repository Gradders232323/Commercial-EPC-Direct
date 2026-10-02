type PaidAttribution = {
  capturedAt: string;
  landingPage: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
};

const ATTRIBUTION_STORAGE_KEY = "commercial_epc_paid_attribution_v1";
const PARAMETER_NAMES = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

function isGooglePaidTraffic(attribution: Pick<PaidAttribution, "utm_source" | "utm_medium" | "gclid" | "gbraid" | "wbraid">) {
  if (attribution.gclid || attribution.gbraid || attribution.wbraid) return true;
  return (
    attribution.utm_source.toLowerCase() === "google" &&
    ["cpc", "ppc", "paidsearch"].includes(attribution.utm_medium.toLowerCase())
  );
}

function attributionFromUrl(url: URL): PaidAttribution {
  const value = (name: (typeof PARAMETER_NAMES)[number]) =>
    url.searchParams.get(name)?.trim() ?? "";

  return {
    capturedAt: new Date().toISOString(),
    landingPage: url.href,
    referrer: document.referrer,
    utm_source: value("utm_source"),
    utm_medium: value("utm_medium"),
    utm_campaign: value("utm_campaign"),
    utm_term: value("utm_term"),
    utm_content: value("utm_content"),
    gclid: value("gclid"),
    gbraid: value("gbraid"),
    wbraid: value("wbraid"),
  };
}

function readSavedAttribution(): PaidAttribution | null {
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<PaidAttribution>;
    if (!parsed.landingPage || !isGooglePaidTraffic({
      utm_source: parsed.utm_source ?? "",
      utm_medium: parsed.utm_medium ?? "",
      gclid: parsed.gclid ?? "",
      gbraid: parsed.gbraid ?? "",
      wbraid: parsed.wbraid ?? "",
    })) {
      return null;
    }

    return {
      capturedAt: parsed.capturedAt ?? "",
      landingPage: parsed.landingPage,
      referrer: parsed.referrer ?? "",
      utm_source: parsed.utm_source ?? "",
      utm_medium: parsed.utm_medium ?? "",
      utm_campaign: parsed.utm_campaign ?? "",
      utm_term: parsed.utm_term ?? "",
      utm_content: parsed.utm_content ?? "",
      gclid: parsed.gclid ?? "",
      gbraid: parsed.gbraid ?? "",
      wbraid: parsed.wbraid ?? "",
    };
  } catch {
    return null;
  }
}

/**
 * Captures a paid Google landing visit for the current browser session.
 * This record contains campaign and click identifiers only; contact details
 * are never added to the attribution record or passed to Google Ads.
 */
export function capturePaidAttribution() {
  if (typeof window === "undefined") return;

  const incoming = attributionFromUrl(new URL(window.location.href));
  if (!isGooglePaidTraffic(incoming) || readSavedAttribution()) return;

  try {
    window.sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(incoming),
    );
  } catch {
    // The current page's query parameters can still be sent with the form.
  }
}

/**
 * Adds paid-click data and the original paid landing details to an enquiry.
 * The OS uses the captured Google click ID only when a lead is later marked
 * quotable. It does not send enquiry contact details to Google Ads.
 */
export function applyPaidAttribution(formData: FormData, pageUrl: URL) {
  const current = attributionFromUrl(pageUrl);
  capturePaidAttribution();

  const saved = readSavedAttribution();
  const attribution = saved ?? (isGooglePaidTraffic(current) ? current : null);
  if (!attribution) return;

  for (const name of PARAMETER_NAMES) {
    const value = attribution[name];
    if (value) formData.set(name, value);
  }

  formData.set("first_touch_landing_page", attribution.landingPage);
  if (attribution.referrer) formData.set("first_touch_referrer", attribution.referrer);

  for (const name of ["source", "medium", "campaign", "term", "content"] as const) {
    const value = attribution[`utm_${name}`];
    if (value) formData.set(`first_touch_${name}`, value);
  }

}
