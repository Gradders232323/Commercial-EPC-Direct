"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm({ postcodePlaceholder = "e.g. SW1A 1AA" }: { postcodePlaceholder?: string }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <div className="quote-form success" role="status"><span>✓</span><h3>Thanks — we have your details.</h3><p>A member of the Commercial EPC Direct team will be in touch with your quote.</p><button className="text-link" onClick={() => setSent(false)}>Submit another property</button></div>;
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-step"><span>STEP 1 OF 1</span><b>Property details</b></div>
      <label>Property postcode<input name="postcode" autoComplete="postal-code" placeholder={postcodePlaceholder} required /></label>
      <label>Property type<select name="type" required defaultValue=""><option value="" disabled>Select property type</option><option>Office</option><option>Retail</option><option>Industrial / warehouse</option><option>Hospitality / leisure</option><option>Other commercial property</option></select></label>
      <div className="field-row">
        <label>Your name<input name="name" autoComplete="name" placeholder="Full name" required /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@company.co.uk" required /></label>
      </div>
      <button className="button form-button" type="submit">Request my quote <span>→</span></button>
      <small>By continuing, you agree that we may contact you about this enquiry.</small>
    </form>
  );
}
