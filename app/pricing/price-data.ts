// Published price guide, separate from the live quote's saved price snapshot.
// Only explicitly agreed property types and unit counts are listed.
export const publishedDate = "2026-10-17";
export const pricingPeriod = "October–December 2026";

export const domesticPrices = [
  { propertyType: "Flat", bedrooms: 1, priceExVat: 75 },
  { propertyType: "Flat", bedrooms: 2, priceExVat: 80 },
  { propertyType: "Flat", bedrooms: 3, priceExVat: 85 },
  { propertyType: "Semi-detached", bedrooms: 2, priceExVat: 75 },
  { propertyType: "Semi-detached", bedrooms: 3, priceExVat: 80 },
  { propertyType: "Semi-detached", bedrooms: 4, priceExVat: 80 },
  { propertyType: "Detached", bedrooms: 2, priceExVat: 75 },
  { propertyType: "Detached", bedrooms: 3, priceExVat: 80 },
  { propertyType: "Detached", bedrooms: 4, priceExVat: 85 },
  { propertyType: "Detached", bedrooms: 5, priceExVat: 90 },
  { propertyType: "Detached", bedrooms: 6, priceExVat: 90 },
] as const;

export const tm44Prices = Array.from({ length: 29 }, (_, index) => ({
  externalUnits: index + 2,
  priceExVat: 350 + index * 15,
}));

export function incVat(priceExVat: number) {
  return Math.round(priceExVat * 120) / 100;
}

export function pounds(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency", currency: "GBP", maximumFractionDigits: 0,
  }).format(amount);
}
