import type { Metadata } from "next";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import { services } from "../service-data";
import { domesticPrices, incVat, pounds, pricingPeriod, publishedDate, tm44Prices } from "./price-data";
import Tm44Calculator from "./tm44-calculator";

export const metadata: Metadata = {
  title: "Service Prices | October–December 2026 | Commercial EPC Direct",
  description: "View Domestic EPC and TM44 inspection prices for October–December 2026, published 17 October 2026. Clear prices excluding and including VAT, with tailored quotes for other services.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <SiteNav />
      <header className="pricing-hero">
        <div className="pricing-publication">
          <span>Prices for {pricingPeriod}</span>
          <span>Published: <time dateTime={publishedDate}>17 October 2026</time></span>
        </div>
        <div className="pricing-hero-copy">
          <div><span className="kicker">Our service price guide</span><h1>Clear prices.<br /><em>No guesswork.</em></h1></div>
          <div><p>Find your property or system below, then start your quotation. Need more than one service? You can choose them together in the same form.</p><p className="pricing-vat-note">Prices are shown excluding VAT, with the total including 20% VAT alongside.</p></div>
        </div>
        <nav className="pricing-jump-links" aria-label="Pricing sections">
          <a href="#domestic-epc-prices">Domestic EPC <span aria-hidden="true">↓</span></a>
          <a href="#tm44-prices">TM44 inspections <span aria-hidden="true">↓</span></a>
          <a href="#other-service-prices">Other services <span aria-hidden="true">↓</span></a>
        </nav>
      </header>

      <section className="pricing-section" id="domestic-epc-prices" aria-labelledby="domestic-prices-heading">
        <div className="pricing-section-heading"><div><span className="kicker">01 / Homes &amp; landlords</span><h2 id="domestic-prices-heading">Domestic EPC</h2></div><p>Choose your property type and bedroom count. Your total is shown again in the quotation before you accept.</p></div>
        <div className="pricing-domestic-grid">
          {(["Flat", "Semi-detached", "Detached"] as const).map(propertyType => (
            <div className="pricing-property" key={propertyType}>
              <h3>{propertyType === "Flat" ? "Flats" : `${propertyType} houses`}</h3>
              <table>
                <caption className="pricing-sr-only">{propertyType} Domestic EPC prices</caption>
                <thead><tr><th scope="col">Bedrooms</th><th scope="col">Ex VAT</th><th scope="col">Inc VAT</th></tr></thead>
                <tbody>{domesticPrices.filter(row => row.propertyType === propertyType).map(row => <tr key={row.bedrooms}><th scope="row">{row.bedrooms} bed</th><td>{pounds(row.priceExVat)}</td><td>{pounds(incVat(row.priceExVat))}</td></tr>)}</tbody>
              </table>
            </div>
          ))}
        </div>
        <div className="pricing-section-action"><p><strong>Can’t see your property?</strong> Terraced houses, bungalows and bedroom counts not listed need a tailored quote. Choose your property in the form and we’ll review the details.</p><a className="button" href="/domestic-epc#domestic-epc-quote">Get a Domestic EPC quote <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="pricing-section pricing-tm44" id="tm44-prices" aria-labelledby="tm44-prices-heading">
        <div className="pricing-tm44-copy"><span className="kicker">02 / Air-conditioning assessments</span><h2 id="tm44-prices-heading">TM44 inspections</h2><p>A straightforward price based on the number of external units, from 2 to 30.</p><dl className="pricing-rate"><div><dt>2 external units</dt><dd>£350 <span>ex VAT</span></dd></div><div><dt>Each additional external unit</dt><dd>+£15 <span>ex VAT</span></dd></div></dl><p className="pricing-small">One external unit, more than 30 units or a system that needs a different scope? Request a tailored quote.</p><details className="pricing-schedule"><summary>View the full 2–30 unit price list</summary><div className="pricing-schedule-table"><table><caption className="pricing-sr-only">Full TM44 external unit price schedule</caption><thead><tr><th scope="col">External units</th><th scope="col">Ex VAT</th><th scope="col">Inc VAT</th></tr></thead><tbody>{tm44Prices.map(row => <tr key={row.externalUnits}><th scope="row">{row.externalUnits}</th><td>{pounds(row.priceExVat)}</td><td>{pounds(incVat(row.priceExVat))}</td></tr>)}</tbody></table></div></details></div>
        <Tm44Calculator />
      </section>

      <section className="pricing-section" id="other-service-prices" aria-labelledby="other-prices-heading">
        <div className="pricing-section-heading"><div><span className="kicker">03 / Priced for your property</span><h2 id="other-prices-heading">Other services</h2></div><p>These services need a tailored quotation. Tell us about the property and we’ll confirm the scope and price before you go ahead.</p></div>
        <div className="pricing-other-grid">{services.filter(service => service.slug !== "tm44-inspection").map(service => <a key={service.slug} href="/instant-quote-booking#booking-form"><h3>{service.title}</h3><p>{service.menuCopy}</p><span>Request a quote <i aria-hidden="true">↗</i></span></a>)}</div>
      </section>

      <aside className="pricing-next">
        <div><span className="kicker">Your next step</span><h2>Choose your services.<br />We’ll take it from there.</h2></div>
        <div><p>Enter the address, add your property details and choose a preferred inspection date and morning or afternoon. We’ll confirm availability before the appointment is booked.</p><p className="pricing-small">Online payment is not available yet. For Domestic EPC, our team will arrange full payment before the inspection. Existing accepted quotations are unchanged by this published guide.</p><a className="button" href="/instant-quote-booking#booking-form">Start your quotation <span aria-hidden="true">→</span></a></div>
      </aside>
      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
        <p>Commercial property assessments, made simple.</p>
        <div className="footer-links"><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/domestic-epc">Domestic EPC</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/sitemap">Sitemap</a></div>
        <SocialLinks />
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
