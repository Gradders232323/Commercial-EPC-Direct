"use client";

import { useEffect, useState } from "react";

type ConsentChoice = "granted" | "denied";
type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
};

const STORAGE_KEY = "commercial_epc_consent_v1";

function pushEvent(event: Record<string, unknown>) {
  const trackingWindow = window as TrackingWindow;
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push(event);
}

function updateConsent(choice: ConsentChoice) {
  const trackingWindow = window as TrackingWindow;
  trackingWindow.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });

  pushEvent({
    event: "consent_update",
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });

}

export default function Tracking() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
    if (savedChoice) updateConsent(savedChoice);
    else window.setTimeout(() => setShowConsent(true), 0);

    function trackContactClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("tel:")) pushEvent({ event: "click_phone", link_type: "phone" });
      if (href.startsWith("mailto:")) pushEvent({ event: "click_email", link_type: "email" });
    }

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  function choose(choice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    updateConsent(choice);
    setShowConsent(false);
  }

  if (!showConsent) return null;

  return (
    <aside className="consent-banner" aria-label="Cookie choices">
      <div>
        <strong>Your privacy choices</strong>
        <p>
          We use optional analytics and advertising measurement to understand enquiries and improve our service. You can accept or reject non-essential cookies. See our <a href="/privacy#cookies">privacy notice</a>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="consent-reject" onClick={() => choose("denied")}>Reject non-essential</button>
        <button type="button" className="button consent-accept" onClick={() => choose("granted")}>Accept all</button>
      </div>
    </aside>
  );
}

export function trackQuoteEvent(event: string, sourceLabel: string) {
  pushEvent({
    event,
    form_name: "quick_enquiry",
    service: sourceLabel,
    page_path: window.location.pathname,
  });
}
