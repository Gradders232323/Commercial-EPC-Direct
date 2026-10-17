"use client";

import { useState } from "react";
import { incVat, pounds, tm44Prices } from "./price-data";

export default function Tm44Calculator() {
  const [externalUnits, setExternalUnits] = useState(2);
  const price = tm44Prices.find(row => row.externalUnits === externalUnits)!;

  return (
    <div className="pricing-calculator">
      <label htmlFor="tm44-external-units">Number of external units</label>
      <select id="tm44-external-units" value={externalUnits} onChange={event => setExternalUnits(Number(event.target.value))}>
        {tm44Prices.map(row => <option key={row.externalUnits} value={row.externalUnits}>{row.externalUnits} external units</option>)}
      </select>
      <div className="pricing-calculator-total" aria-live="polite" aria-atomic="true">
        <span>TM44 inspection price</span>
        <strong>{pounds(price.priceExVat)} <small>ex VAT</small></strong>
        <p>{pounds(incVat(price.priceExVat))} including VAT</p>
      </div>
      <a className="button" href="/instant-quote-booking#booking-form">Request a TM44 quote <span aria-hidden="true">→</span></a>
      <p className="pricing-small">Select TM44 Inspection in the service selector. We’ll confirm the scope and appointment availability.</p>
    </div>
  );
}
