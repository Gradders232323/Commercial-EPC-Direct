"use client";

import { FormEvent, useRef, useState } from "react";
import { trackQuoteEvent } from "./tracking";

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY = "9742b464-842e-4a46-be0d-9dfe4761011e";

type QuoteFormProps = {
  postcodePlaceholder?: string;
  formLabel?: string;
  buttonLabel?: string;
  sourceLabel?: string;
  accessKey?: string;
  businessKey?: string;
  formId?: string;
  city?: string;
};

export default function QuoteForm({
  postcodePlaceholder = "e.g. SW1A 1AA",
  formLabel = "Property details",
  buttonLabel = "Request my quote",
  sourceLabel = "Commercial EPC Direct website",
  accessKey = WEB3FORMS_ACCESS_KEY,
  businessKey,
  formId,
  city,
}: QuoteFormProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);

  function startTracking() {
    if (started.current) return;
    started.current = true;
    trackQuoteEvent("form_start", sourceLabel);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const pageUrl = new URL(window.location.href);
    const addressLine = String(formData.get("address_line_1") || "").trim();
    const postcode = String(formData.get("postcode") || "").trim();
    const details = String(formData.get("details") || "").trim();

    formData.set("access_key", accessKey);
    formData.set("subject", `New enquiry â ${sourceLabel}`);
    formData.set("from_name", city ? `${city} Commercial EPC website` : "Commercial EPC Direct");
    formData.set("Source", sourceLabel);
    formData.set("Page URL", pageUrl.href);
    formData.set("page_url", pageUrl.href);
    formData.set("submitted_at", new Date().toISOString());
    formData.set("property_address", [addressLine, postcode].filter(Boolean).join(", "));
    if (details) formData.set("message", details);
    if (businessKey) formData.set("business_key", businessKey);
    if (formId) formData.set("form_id", formId);
    if (city) formData.set("city", city);

    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid"]) {
      const value = pageUrl.searchParams.get(key);
      if (value) formData.set(key, value);
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const result = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !result.success) throw new Error(result.message || "The enquiry could not be sent.");

      form.reset();
      trackQuoteEvent("generate_lead", sourceLabel);
      if (formId) {
        (window as TrackingWindow).gtag?.("event", "generate_lead", {
          form_id: formId,
          service: "Commercial EPC",
          city,
        });
      }
      setSent(true);
    } catch {
      trackQuoteEvent("form_error", sourceLabel);
      setError("We couldnât send your enquiry just now. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return <div className="quote-form success" role="status"><span>â</span><h3>Thanks â we have your details.</h3><p>A member of the Commercial EPC Direct team will be in touch with your quote.</p><button className="text-link" onClick={() => setSent(false)}>Submit another property</button></div>;
  }

  return (
    <form className="quote-form" onSubmit={submit} onFocus={startTracking}>
      <div className="form-step"><span>QUICK ENQUIRY</span><b>{formLabel}</b></div>
      <input type="checkbox" name="botcheck" className="form-botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>Property postcode<input name="postcode" autoComplete="postal-code" placeholder={postcodePlaceholder} required /></label>
      <label>First line of address<input name="address_line_1" autoComplete="address-line1" placeholder="Building number and street" required /></label>
      <div className="field-row">
        <label>Your name<input name="name" autoComplete="name" placeholder="Full name" required /></label>
        <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
      </div>
      <div className="field-row">
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="0113 ..." required /></label>
      </div>
      <label>Property details or required timescale<textarea name="details" placeholder="Property type, approximate floor area and when the EPC is needed" style={{ display: "block", width: "100%", minHeight: 92, marginTop: 8, border: "1px solid #cbd5d0", background: "#fbfcfb", padding: "14px 15px", borderRadius: 3, color: "var(--ink)", font: "inherit", resize: "vertical" }} /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button form-button" type="submit" disabled={sending}>{sending ? "Sending enquiryâ¦" : buttonLabel} <span>{sending ? "Â·" : "â"}</span></button>
      <small>By continuing, you agree that we may contact you about this enquiry. <a href="/privacy">Read our privacy notice.</a></small>
    </form>
  );
}
