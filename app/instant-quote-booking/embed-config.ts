export const SERVICE_QUOTE_ORIGIN = "https://gradwell-inspection-booking.info512176.chatgpt.site";
export const SERVICE_QUOTE_URL = `${SERVICE_QUOTE_ORIGIN}/ced-service-quote`;

type FrameMessage = { type: "ced:service-quote:resize"; height: number }
  | { type: "ced:service-quote:ready" | "ced:service-quote:step" }
  | { type: "ced:service-quote:submitted"; kind: "enquiry" | "booking" };

export function serviceFrameMessage(data: unknown, origin: string, isFrame: boolean): FrameMessage | null {
  if (!isFrame || origin !== SERVICE_QUOTE_ORIGIN || !data || typeof data !== "object" || Array.isArray(data)) return null;
  const message = data as Record<string, unknown>;
  if (message.type === "ced:service-quote:resize") {
    if (typeof message.height !== "number" || !Number.isFinite(message.height) || message.height < 480 || message.height > 6000) return null;
    return { type: message.type, height: Math.ceil(message.height) };
  }
  if (message.type === "ced:service-quote:ready" || message.type === "ced:service-quote:step") return { type: message.type };
  if (message.type === "ced:service-quote:submitted" && (message.kind === "enquiry" || message.kind === "booking")) return { type: message.type, kind: message.kind };
  return null;
}
