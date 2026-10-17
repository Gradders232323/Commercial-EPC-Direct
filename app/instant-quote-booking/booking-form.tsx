"use client";

import { useEffect, useRef, useState } from "react";
import { applyPaidAttribution } from "../attribution";
import { trackQuoteEvent } from "../tracking";
import { SERVICE_QUOTE_ORIGIN, SERVICE_QUOTE_URL, serviceFrameMessage } from "./embed-config";

/** All services share one form. Customer details stay inside the booking frame. */
export default function BookingForm({ initialService = "" }: { initialService?: "" | "domestic-epc" }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1120);
  const [ready, setReady] = useState(false);
  const tracked = useRef(false);
  const quoteUrl = `${SERVICE_QUOTE_URL}${initialService ? `?service=${initialService}` : ""}`;

  function sendContext() {
    const context = new FormData();
    applyPaidAttribution(context, new URL(window.location.href));
    context.set("page_url", window.location.href);
    context.set("referrer", document.referrer);
    frame.current?.contentWindow?.postMessage({
      type: "ced:service-quote:context",
      attribution: Object.fromEntries(context.entries()),
    }, SERVICE_QUOTE_ORIGIN);
  }

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const message = serviceFrameMessage(event.data, event.origin,
        Boolean(frame.current?.contentWindow && event.source === frame.current.contentWindow));
      if (!message) return;
      if (message.type === "ced:service-quote:resize") setHeight(message.height);
      if (message.type === "ced:service-quote:ready") { setReady(true); sendContext(); }
      if (message.type === "ced:service-quote:step") frame.current?.scrollIntoView({ behavior: "auto", block: "start" });
      if (message.type === "ced:service-quote:submitted" && !tracked.current) {
        tracked.current = true;
        trackQuoteEvent("generate_lead", "Instant quote and booking page");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="ced-shared-funnel" id="booking-form">
      {!ready && <p className="ced-funnel-loading" role="status">Loading your quotation form…</p>}
      <iframe ref={frame} src={`${quoteUrl}${initialService ? "&" : "?"}embed=1`}
        title="Choose services and build your property quotation"
        style={{ height }} onLoad={sendContext}
        referrerPolicy="strict-origin-when-cross-origin" />
      <p className="ced-funnel-fallback">Form not loading? <a href={quoteUrl} target="_blank" rel="noopener noreferrer">Open the quotation form in a new tab ↗</a></p>
    </div>
  );
}
