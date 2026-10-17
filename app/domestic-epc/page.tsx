import type { Metadata } from "next";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import DomesticEpcBookingEmbed from "./booking-embed";

export const metadata: Metadata = {
  title: "Domestic EPC Instant Quote & Booking | Commercial EPC Direct",
  description: "Get a Domestic EPC quote for an existing home. Enter the address, select the property type and bedrooms, then review your price including VAT and request your assessment.",
  alternates: { canonical: "/domestic-epc" },
};

export default function DomesticEpcPage() {
  return (
    <main className="ced-epc-page">
      <SiteNav />
      <section className="ced-epc-intro" aria-labelledby="domestic-epc-title">
        <div>
          <a className="ced-epc-back" href="/services">Services <span aria-hidden="true">/</span> Domestic EPC</a>
          <span className="kicker">Domestic EPC instant quote</span>
          <h1 id="domestic-epc-title">Your home EPC.<br /><em>A clear price, upfront.</em></h1>
          <p>Start with the address, choose the property type and bedrooms, then review your quote. For existing homes, flats and residential rental properties.</p>
        </div>
        <aside className="ced-epc-expectations" aria-label="Before you start">
          <strong>Simple from the first step.</strong>
          <ul>
            <li><span aria-hidden="true">✓</span> Total price including VAT shown before you accept</li>
            <li><span aria-hidden="true">✓</span> Suggest a visit date, or arrange one later</li>
            <li><span aria-hidden="true">✓</span> Manual quote if your property is not priced yet</li>
          </ul>
          <p>Online payment is not available yet. Our team will arrange full payment before the inspection. Your appointment is confirmed separately.</p>
        </aside>
      </section>

      <section className="ced-epc-quote" id="domestic-epc-quote" aria-labelledby="domestic-epc-quote-title">
        <div className="ced-epc-quote-heading">
          <div><span className="kicker">Start here</span><h2 id="domestic-epc-quote-title">Get your Domestic EPC quote.</h2></div>
          <p>No card details needed at this stage.</p>
        </div>
        <DomesticEpcBookingEmbed />
      </section>

      <section className="ced-epc-help" aria-labelledby="domestic-epc-help-title">
        <div><span className="kicker">The right service for your property</span><h2 id="domestic-epc-help-title">Looking after a shop, office or warehouse?</h2><p>This quote is for Domestic EPCs. For a commercial or mixed-use property, send our team the details so we can confirm the right assessment.</p></div>
        <a className="button" href="/instant-quote-booking">Request a commercial quote <span aria-hidden="true">→</span></a>
      </section>
      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
        <p>Property assessments, made simple.</p>
        <div className="footer-links"><a href="/services">Services</a><a href="/domestic-epc">Domestic EPC</a><a href="/instant-quote-booking">Commercial quote</a><a href="/about">About</a><a href="/privacy">Privacy</a></div>
        <SocialLinks />
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
