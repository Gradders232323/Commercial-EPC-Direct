"use client";

import { useEffect, useState } from "react";

const STANDARD_LINE = {
  display: "0330 190 1259",
  href: "tel:+443301901259",
};

const GOOGLE_ADS_LINE = {
  display: "0330 190 0257",
  href: "tel:+443301900257",
};

function isPaidGoogleVisit() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("gclid") || params.has("gbraid") || params.has("wbraid")) {
    return true;
  }
  const source = (params.get("utm_source") || "").toLowerCase();
  const medium = (params.get("utm_medium") || "").toLowerCase();
  return (
    ["google", "googleads", "adwords"].includes(source) &&
    ["cpc", "ppc", "paid", "paidsearch", "paid_search"].includes(medium)
  );
}

function usePhoneLine() {
  const [line, setLine] = useState(STANDARD_LINE);

  useEffect(() => {
    // Deliberately do not persist the click ID or use a marketing cookie here.
    // The dedicated Allo line is shown only during the paid landing-page visit.
    if (isPaidGoogleVisit()) setLine(GOOGLE_ADS_LINE);
  }, []);

  return line;
}

export function HeaderPhoneLink() {
  const line = usePhoneLine();
  return (
    <a href={line.href} data-call-source={line === GOOGLE_ADS_LINE ? "google_ads" : "organic"}>
      <i aria-hidden="true">☎</i> {line.display}
    </a>
  );
}

export function FooterPhoneLink() {
  const line = usePhoneLine();
  return (
    <a href={line.href} data-call-source={line === GOOGLE_ADS_LINE ? "google_ads" : "organic"}>
      <i aria-hidden="true">☎</i>
      <span><small>Call our team</small>{line.display}</span>
    </a>
  );
}
