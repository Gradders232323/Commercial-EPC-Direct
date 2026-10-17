"use client";

import { useEffect, useRef, useState } from "react";
import { DOMESTIC_EPC_BOOKING_URL, getDomesticEpcEmbedHeight } from "./embed-config";

export default function DomesticEpcBookingEmbed() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1100);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const nextHeight = getDomesticEpcEmbedHeight(
        event.data,
        event.origin,
        Boolean(frame.current?.contentWindow && event.source === frame.current.contentWindow),
      );
      if (nextHeight !== null) setHeight(nextHeight);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="ced-epc-embed">
      <iframe
        ref={frame}
        src={`${DOMESTIC_EPC_BOOKING_URL}?embed=1`}
        title="Domestic EPC instant quotation and booking request"
        style={{ height }}
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <p className="ced-epc-fallback">
        Having trouble with the form?{" "}
        <a href={DOMESTIC_EPC_BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Open your Domestic EPC quote in a new tab <span aria-hidden="true">↗</span>
        </a>
      </p>
    </div>
  );
}
