import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import IndustryLogos from "../industry-logos";
import LocationsDirectory from "./locations-directory";

export const metadata: Metadata = {
  title: "Commercial EPC Locations | Find a Local Assessor",
  description: "Find commercial EPC assessors across the UK. Search by town, city or region and request a clear quote for your commercial property assessment.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <main className="locations-page">
      <SiteNav quoteHref="#locations-enquiry" />
      <section className="locations-hero">
        <div><div className="eyebrow"><span></span> Nationwide commercial EPC coverage</div><h1>Local assessors.<br/><em>One direct service.</em></h1><p>Find commercial EPC coverage in your area, browse by region or send us the postcode and we’ll match your property with the right accredited assessor.</p><a className="button" href="#find-location">Find your location <span>↓</span></a></div>
        <div className="coverage-card" aria-hidden="true"><div className="coverage-top"><span>UK ASSESSOR NETWORK</span><i></i></div><strong>12</strong><p>regions covered</p><div className="coverage-lines"><i></i><i></i><i></i><i></i><i></i></div><small>Commercial EPCs for offices, retail, industrial and hospitality properties.</small></div>
      </section>
      <section className="directory-intro"><div><span className="kicker">Browse all locations</span><h2>Commercial EPC coverage across the UK.</h2></div><p>Our location directory is organised by region so you can reach the right local service quickly. New dedicated location guides are added as local coverage information is verified.</p></section>
      <IndustryLogos />
      <LocationsDirectory />
      <section className="quote-section locations-quote" id="locations-enquiry"><div className="quote-copy"><span className="kicker">Can’t find your location?</span><h2>Send us the postcode.</h2><p>We work nationwide. Share the property details and we’ll confirm local assessor coverage, availability and a clear quotation.</p><div className="quote-promise"><span>✓</span><div><strong>Nationwide network</strong><p>Local commercial energy specialists.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>One helpful team</strong><p>From enquiry to certificate.</p></div></div></div><QuoteForm postcodePlaceholder="Enter the property postcode" formLabel="Location enquiry" buttonLabel="Check coverage" sourceLabel="Locations directory enquiry" /></section>
      <footer><a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial energy assessments, made simple.</p><div className="footer-links"><a href="/#services">Services</a><a href="/#faq">Guides</a><a href="/#process">About</a><a href="/locations">Locations</a><a href="#locations-enquiry">Get a quote</a></div><SocialLinks /><small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small></footer>
    </main>
  );
}
