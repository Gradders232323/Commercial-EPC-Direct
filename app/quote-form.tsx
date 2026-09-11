"use client";

import { FormEvent, useRef, useState } from "react";
import { trackQuoteEvent } from "./tracking";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY = "9742b464-842e-4a46-be0d-9dfe4761011e";

type QuoteFormProps = {
  postcodePlaceholder?: string;
  formLabel?: string;
  buttonLabel?: string;
  sourceLabel?: string;
};

export default function QuoteForm({ postcodePlaceholder = "e.g. SW1A 1AA", formLabel = "Property details", buttonLabel = "Request my quote", sourceLabel = "Commercial EPC Direct website" }: QuoteFormProps) {
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

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New enquiry — ${sourceLabel}`);
    formData.append("from_name", "Commercial EPC Direct");
    formData.append("Source", sourceLabel);
    formData.append("Page URL", window.location.href);

    setSending(true);
    setError("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const result = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !result.success) throw new Error(result.message || "The enquiry could not be sent.");

      form.reset();
      trackQuoteEvent("generate_lead", sourceLabel);
      setSent(true);
    } catch {
      trackQuoteEvent("form_error", sourceLabel);
      setError("We couldn’t send your enquiry just now. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return <div className="quote-form success" role="status"><span>✓</span><h3>Thanks — we have your details.</h3><p>A member of the Commercial EPC Direct team will be in touch with your quote.</p><button className="text-link" onClick={() => setSent(false)}>Submit another property</button></div>;
  }

  return (
    <form className="quote-form" onSubmit={submit} onFocus={startTracking}>
      <div className="form-step"><span>QUICK ENQUIRY</span><b>{formLabel}</b></div>
      <input type="checkbox" name="botcheck" className="form-botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>Property postcode<input name="postcode" autoComplete="postal-code" placeholder={postcodePlaceholder} required /></label>
      <label>First line of address<input name="address_line_1" autoComplete="address-line1" placeholder="Building number and street" required /></label>
      <div className="field-row">
        <label>Your name<input name="name" autoComplete="name" placeholder="Full name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button form-button" type="submit" disabled={sending}>{sending ? "Sending enquiry…" : buttonLabel} <span>{sending ? "·" : "→"}</span></button>
      <small>By continuing, you agree that we may contact you about this enquiry. <a href="/privacy">Read our privacy notice.</a></small>
    </form>
  );
}
