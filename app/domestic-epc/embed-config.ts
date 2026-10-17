export const DOMESTIC_EPC_BOOKING_ORIGIN =
  "https://gradwell-inspection-booking.info512176.chatgpt.site";
export const DOMESTIC_EPC_BOOKING_URL =
  `${DOMESTIC_EPC_BOOKING_ORIGIN}/domestic-epc-direct`;

/** Only resize for a valid message from this exact booking frame. */
export function getDomesticEpcEmbedHeight(
  data: unknown,
  origin: string,
  isBookingFrame: boolean,
): number | null {
  if (!isBookingFrame || origin !== DOMESTIC_EPC_BOOKING_ORIGIN) return null;
  if (!data || typeof data !== "object") return null;
  const message = data as Record<string, unknown>;
  if (message.type !== "ced:domestic-epc:resize") return null;
  if (typeof message.height !== "number" || !Number.isFinite(message.height)) return null;
  if (message.height < 480 || message.height > 6000) return null;
  return Math.ceil(message.height);
}
