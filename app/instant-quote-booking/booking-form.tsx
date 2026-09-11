"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "../quote-form";
import { trackQuoteEvent } from "../tracking";

const serviceOptions = [
  ["Commercial EPC", "Energy rating and recommendation report", "EPC"],
  ["TM44 Inspection", "Air-conditioning energy assessment", "TM44"],
  ["Display Energy Certificate", "Operational rating for public buildings", "DEC"],
  ["EICR", "Commercial electrical condition report", "EICR"],
  ["Floor Plans", "Measured plans for commercial property", "PLAN"],
  ["Legionella Risk Assessment", "Water hygiene risk assessment", "LRA"],
] as const;

export default function BookingForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Commercial EPC"]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function toggleService(service: string) {
    setSelectedServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  }

  function startTracking() {
    if (started.current) return;
    started.current = true;
    trackQuoteEvent("form_start", "Instant quote and booking page");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedServices.length) {
      setError("Please select at least one service.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Instant quote request — ${selectedServices.join(", ")}`);
    formData.append("from_name", "Commercial EPC Direct");
    formData.append("Services", selectedServices.join(", "));
    formData.append("Source", "Instant quote and booking page");
    formData.append("Page URL", window.location.href);

    setSending(true);
    setError("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const result = await response.json() as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message || "The request could not be sent.");
      form.reset();
      trackQuoteEvent("generate_lead", "Instant quote and booking page");
      setSent(true);
    } catch {
      trackQuoteEvent("form_error", "Instant quote and booking page");
      setError("We couldn’t send your request just now. Please try again or call 01827 488063.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="booking-success" role="status">
        <span>✓</span>
        <small>REQUEST RECEIVED</small>
        <h2>Thanks — we have your details.</h2>
        <p>Our team will review the property, services and timescale, then contact you to confirm the scope, price and next available appointment.</p>
        <p className="booking-success-note">Nothing has been booked or ordered until you approve the quotation and we confirm the appointment.</p>
        <button type="button" className="button" onClick={() => setSent(false)}>Submit another property <span>→</span></button>
      </div>
    );
  }

  return (
    <form id="booking-form" className="booking-form" onSubmit={submit} onFocus={startTracking}>
      <input type="checkbox" name="botcheck" className="form-botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <fieldset className="booking-step">
        <legend><span>01</span><strong>Choose one or more services</strong></legend>
        <div className="booking-service-grid">
          {serviceOptions.map(([service, detail, code]) => {
            const selected = selectedServices.includes(service);
            return (
              <button key={service} type="button" aria-pressed={selected} onClick={() => toggleService(service)} className={selected ? "selected" : ""}>
                <i>{code}</i><span><strong>{service}</strong><small>{detail}</small></span><b aria-hidden="true">{selected ? "✓" : "+"}</b>
              </button>
            );
          })}
        </div>
        {!selectedServices.length && <p className="booking-inline-error" role="alert">Select at least one service to continue.</p>}
      </fieldset>

      <fieldset className="booking-step">
        <legend><span>02</span><strong>Tell us about the property</strong></legend>
        <div className="booking-field-grid">
          <label>Property postcode<input name="postcode" autoComplete="postal-code" placeholder="e.g. SW1A 1AA" required /></label>
          <label>First line of address<input name="address_line_1" autoComplete="address-line1" placeholder="Building number and street" required /></label>
          <label>Property type<select name="property_type" defaultValue="" required><option value="" disabled>Select property type</option><option>Office</option><option>Retail</option><option>Industrial / warehouse</option><option>Hospitality</option><option>Education / public building</option><option>Mixed use</option><option>Other</option></select></label>
          <label>Approximate floor area<input name="floor_area" placeholder="e.g. 1,500 m² or unknown" /></label>
          <label className="booking-field-wide">Anything else we should know?<textarea name="property_details" placeholder="Building use, access arrangements, existing certificate or portfolio details…" /></label>
        </div>
      </fieldset>

      <fieldset className="booking-step">
        <legend><span>03</span><strong>Your preferred timescale</strong></legend>
        <p className="booking-step-copy">This helps us assess availability and turnaround time. It does not create a booking or place an order.</p>
        <div className="booking-field-grid">
          <label>When would you like the assessment?<select name="assessment_timing" defaultValue="Next available"><option>Next available</option><option>Within two weeks</option><option>Within one month</option><option>Flexible</option></select></label>
          <label>Report needed by <em>Optional</em><input name="report_deadline" type="date" min={minDate} /></label>
        </div>
      </fieldset>

      <fieldset className="booking-step">
        <legend><span>04</span><strong>Where should we send the quote?</strong></legend>
        <div className="booking-field-grid">
          <label>Your name<input name="name" autoComplete="name" placeholder="Full name" required /></label>
          <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
          <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label>
        </div>
      </fieldset>

      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button booking-submit" type="submit" disabled={sending || !selectedServices.length}>{sending ? "Sending request…" : "Request my quote & availability"}<span>{sending ? "·" : "→"}</span></button>
      <small className="booking-privacy">By continuing, you agree that we may contact you about this enquiry. <a href="/privacy">Read our privacy notice.</a> This is a request for a quote, not an order or confirmed booking.</small>
    </form>
  );
}
