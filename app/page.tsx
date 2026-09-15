import type { Metadata } from "next";
import CommercialEpcLeeds from "./commercial-epc-leeds/page";

export const metadata: Metadata = {
  title: "Commercial EPC Leeds | Local Commercial EPC Assessors",
  description:
    "Need a Commercial EPC in Leeds? Arrange an accredited commercial energy assessment for offices, shops, warehouses, industrial units and other non-domestic property.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Commercial EPC Leeds | Local Commercial EPC Assessors",
    description: "Commercial energy assessments across Leeds and West Yorkshire.",
    url: "https://commercialepcleeds.co.uk",
    images: [
      {
        url: "https://commercialepcleeds.co.uk/og.png",
        width: 1731,
        height: 909,
        alt: "Commercial EPC Leeds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial EPC Leeds | Local Commercial EPC Assessors",
    description: "Commercial energy assessments across Leeds and West Yorkshire.",
    images: ["https://commercialepcleeds.co.uk/og.png"],
  },
};

export default CommercialEpcLeeds;
