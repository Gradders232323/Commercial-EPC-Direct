"use client";

import { useEffect, useRef, useState } from "react";

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

function sendPageView() {
  const trackingWindow = window as TrackingWindow;
  trackingWindow.gtag?.("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
  });
}

export default function Tracking() {
  const [showConsent, setShowConsent] = useState(false);
  const [consentReady, setConsentReady] = useState(false);
  const pageViewConsent = useRef<ConsentChoice | null>(null);

  useEffect(() => {
    let storedChoice: string | null = null;
    try {
      storedChoice = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Keep consent denied if this browser does not allow local storage.
    }
    const savedChoice =
      storedChoice === "granted" || storedChoice === "denied"
        ? storedChoice
        : null;

    if (savedChoice) {
      updateConsent(savedChoice);
      sendPageView();
      pageViewConsent.current = savedChoice;
    } else {
      window.setTimeout(() => setShowConsent(true), 0);
    }
    window.setTimeout(() => setConsentReady(true), 0);

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
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Apply the choice for this page even if it cannot be persisted.
    }
    updateConsent(choice);
    if (pageViewConsent.current !== choice) {
      sendPageView();
      pageViewConsent.current = choice;
    }
    setShowConsent(false);
  }

  if (!consentReady) return null;

  if (!showConsent) {
    return (
      <button
        type="button"
        className="consent-manage"
        style={{
          position: "fixed",
          zIndex: 900,
          left: 14,
          bottom: 14,
          border: "1px solid rgba(13,45,37,.22)",
          background: "rgba(255,255,255,.96)",
          color: "#0d2d25",
          borderRadius: 4,
          padding: "8px 10px",
          font: "inherit",
          fontSize: 10,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(5,25,19,.12)",
        }}
        onClick={() => setShowConsent(true)}
      >
        Cookie settings
      </button>
    );
  }

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
