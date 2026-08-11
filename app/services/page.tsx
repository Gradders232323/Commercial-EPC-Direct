import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import IndustryLogos from "../industry-logos";
import { services } from "../service-data";

export const metadata: Metadata = {
  title: "Commercial Property Services | Commercial EPC Direct",
  description: "Commercial EPCs, TM44 inspections, EICRs, floor plans, Legionella risk assessments and Display Energy Certificates across the UK.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <SiteNav quoteHref="#services-enquiry" />
      <section className="services-hero">
        <div className="eyebrow"><span></span>Commercial property compliance services</div>
        <h1>One direct route to the <em>right specialist.</em></h1>
        <p>Clear quotes, accredited professionals and one helpful team across a focused range of commercial property assessments.</p>
      </section>
      <IndustryLogos />
      <section className="section services-hub">
        <div className="section-heading"><div><span className="kicker">Our services</span><h2>What does your property need?</h2></div><p>Choose a service to see what it covers, who it is for and how our in-house team completes the assessment.</p></div>
        <div>{services.map((service, index) => <a key={service.slug} href={`/services/${service.slug}`}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.menuCopy}</p><i>→</i></a>)}</div>
      </section>
      <section className="quote-section" id="services-enquiry">
        <div className="quote-copy"><span className="kicker">Not sure which service?</span><h2>Tell us about the property.</h2><p>Share the address and what you are trying to achieve. We’ll help identify the right assessment.</p></div>
        <QuoteForm formLabel="Service enquiry" buttonLabel="Ask our team" sourceLabel="Services hub enquiry" />
      </section>
      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
        <p>Commercial property assessments, made simple.</p>
        <div className="footer-links"><a href="/services">Services</a><a href="/#faq">Guides</a><a href="/about">About</a><a href="/locations">Locations</a></div>
        <SocialLinks />
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
