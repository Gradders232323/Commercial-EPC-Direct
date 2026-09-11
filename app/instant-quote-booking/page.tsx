import type { Metadata } from "next";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import BookingForm from "./booking-form";

export const metadata: Metadata = {
  title: "Instant Quote & Booking | Commercial EPC Direct",
  description: "Request a tailored commercial property assessment quote and share your preferred timescale with Commercial EPC Direct.",
  alternates: { canonical: "/instant-quote-booking" },
};

const assurances = [
  ["01", "Property-specific price", "A clear quotation based on the building and services required."],
  ["02", "Preferred timescale", "Tell us when you would like the assessment and report completed."],
  ["03", "Direct delivery", "Your enquiry stays with our own commercial property assessment team."],
];

export default function InstantQuoteBookingPage() {
  return (
    <main className="booking-page">
      <SiteNav quoteHref="#booking-form" />
      <section className="booking-hero">
        <div className="booking-intro">
          <span className="kicker">Instant quote &amp; booking request</span>
          <h1>Tell us what the property <em>needs.</em></h1>
          <p>Select your services, share the essentials and tell us your preferred timescale. We’ll review the brief and confirm the right scope, price and next available appointment.</p>
          <div className="booking-assurances">
            {assurances.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><strong>{title}</strong><p>{copy}</p></div></article>)}
          </div>
          <div className="booking-notice"><strong>No order is placed today.</strong><p>Your timing choices show us what you need. A booking only exists after you approve the quotation and we confirm it with you.</p></div>
        </div>
        <BookingForm />
      </section>
      <section className="booking-next">
        <span className="kicker">What happens next</span>
        <div>{[["01","We review the brief","We check the property, services and requested timescale."],["02","We confirm price and availability","You receive a clear scope, quotation and proposed next step."],["03","You decide","Nothing proceeds until you approve the quote and appointment."]].map(([number,title,copy])=><article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</div>
      </section>
      <footer><a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial property assessments, made simple.</p><div className="footer-links"><a href="/services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="/privacy">Privacy</a></div><SocialLinks /><small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small></footer>
    </main>
  );
}
