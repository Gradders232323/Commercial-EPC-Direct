import type { Metadata } from "next";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import BookingForm from "./booking-form";

export const metadata: Metadata = {
  title: "Instant Quote & Booking | Commercial EPC Direct",
  description: "Select one or more property assessment services in one simple quotation journey. Domestic EPC, Commercial EPC, TM44, DEC, EICR, floor plans and Legionella assessments.",
  alternates: { canonical: "/instant-quote-booking" },
};

export default function InstantQuoteBookingPage() {
  return (
    <main className="booking-page">
      <SiteNav quoteHref="#booking-form" />
      <section className="ced-funnel-intro">
        <span className="kicker">Your property. One simple quotation.</span>
        <h1>Choose what you need.<br /><em>We’ll take it from here.</em></h1>
        <p>Select one service or several for the same property. Tell us the details once, then review your price or request a combined quotation.</p>
      </section>
      <section className="ced-funnel-section" aria-label="Property services quotation">
        <BookingForm />
      </section>
      <section className="booking-next">
        <span className="kicker">What happens next</span>
        <div>{[["01","One property, one request","Your chosen services and property details stay together."],["02","Clear pricing","Eligible Domestic EPCs have an instant price. Other services and bundles receive a tailored quotation."],["03","A date that works for you","Suggest a date now or arrange it later. Appointments are confirmed separately, and no online payment is taken."]].map(([number,title,copy])=><article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</div>
      </section>
      <footer><a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial property assessments, made simple.</p><div className="footer-links"><a href="/services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="/privacy">Privacy</a></div><SocialLinks /><small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small></footer>
    </main>
  );
}
