import type { Metadata } from "next";
import SiteNav from "../site-nav";
import QuoteForm from "../quote-form";
import IndustryLogos from "../industry-logos";
import SocialLinks from "../social-links";

export const metadata: Metadata = {
  title: "About Commercial EPC Direct | Our In-House Assessment Team",
  description: "Meet the in-house team behind Commercial EPC Direct and learn how we deliver straightforward commercial property assessments across the UK.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Commercial EPC Direct", description: "Commercial property assessments delivered directly by our own in-house team.", url: "https://commercialepcleeds.co.uk/about", images: [{ url: "https://commercialepcleeds.co.uk/og.png", width: 1731, height: 909, alt: "Commercial EPC Direct" }] },
};

const services = [
  ["01", "Commercial EPC", "Energy Performance Certificates for offices, retail, warehouses, industrial units and other non-domestic property."],
  ["02", "TM44 inspections", "Energy assessments for qualifying commercial air-conditioning systems."],
  ["03", "EICR", "Electrical Installation Condition Reports for commercial premises."],
  ["04", "Floor plans", "Clear measured plans for sales, lettings, management and property documentation."],
  ["05", "Legionella", "Practical water-hygiene risk assessments with clear findings and actions."],
  ["06", "Display Energy Certificates", "Operational energy certification and advisory reports for qualifying public buildings."],
];

const principles = [
  ["Direct", "Your instruction stays with our own team. We do not pass assessment work to a freelance network."],
  ["Clear", "Property-specific quotations, practical communication and a straightforward route from enquiry to report."],
  ["Qualified", "Work is completed by the appropriately qualified and accredited member of our in-house team."],
  ["Responsive", "We understand that sales, lettings and compliance work often come with real deadlines."],
];

export default function AboutPage() {
  return <main className="about-page">
    <SiteNav quoteHref="#about-enquiry" />
    <section className="about-hero">
      <div>
        <div className="breadcrumb"><a href="/">Home</a><span>/</span>About</div>
        <div className="eyebrow"><span></span> About Commercial EPC Direct</div>
        <h1>Commercial property assessments,<br/><em>handled in-house.</em></h1>
        <p>Commercial EPC Direct helps landlords, businesses, agents and property professionals obtain the reports and certificates their commercial buildings require.</p>
        <div className="hero-actions"><a className="button" href="#about-enquiry">Discuss your property <span>→</span></a><a className="text-link" href="#our-approach">How we work <span>↓</span></a></div>
      </div>
      <aside className="about-team-card">
        <div className="about-card-head"><span>THE TEAM BEHIND THE SERVICE</span><b>IN-HOUSE</b></div>
        <div className="about-card-mark" aria-hidden="true"><i></i><i></i><i></i><strong>ONE<br/>TEAM</strong></div>
        <div className="about-card-copy"><span>From first enquiry</span><i>→</i><span>Site assessment</span><i>→</i><span>Final documentation</span></div>
      </aside>
    </section>

    <section className="about-trust-strip"><div><span>01</span><strong>Our own assessors</strong><small>No freelance network</small></div><div><span>02</span><strong>Nationwide coverage</strong><small>Single sites and portfolios</small></div><div><span>03</span><strong>One point of contact</strong><small>Enquiry through to completion</small></div><div><span>04</span><strong>Commercial specialists</strong><small>Across property types</small></div></section>
    <IndustryLogos />

    <section className="section about-story" id="our-approach">
      <div><span className="kicker">Who we are</span><h2>A practical team for commercial property compliance.</h2></div>
      <div><p>We created Commercial EPC Direct to make commercial property assessments easier to arrange and easier to understand. Our clients need clear answers, realistic timescales and documentation they can rely on.</p><p>Every assessment is handled by the Commercial EPC Direct in-house team. That gives you a direct relationship with the people responsible for reviewing the property, arranging access, completing the work and providing the finished documentation.</p><p>Whether the instruction is for one shop, a multi-storey office, a large industrial building or a portfolio across several locations, we start by understanding the property and the required outcome.</p></div>
    </section>

    <section className="about-principles">
      <div className="about-principles-heading"><span className="kicker light">What guides us</span><h2>Direct, clear and properly qualified.</h2><p>Good service is not simply producing a certificate. It is making the entire process dependable.</p></div>
      <div className="about-principle-grid">{principles.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="section about-services">
      <div className="section-heading"><div><span className="kicker">What we do</span><h2>Six services, one accountable team.</h2></div><p>Commercial assessments, reports and plans for individual buildings and multi-property portfolios.</p></div>
      <div className="about-service-list">{services.map(([number, title, copy]) => <a key={title} href={`/services/${title === "Commercial EPC" ? "commercial-epc" : title === "TM44 inspections" ? "tm44-inspection" : title === "EICR" ? "eicr" : title === "Floor plans" ? "floor-plans" : title === "Legionella" ? "legionella" : "display-energy-certificate"}`}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i>→</i></a>)}</div>
    </section>

    <section className="about-process">
      <div><span className="kicker light">How we work</span><h2>From property details to completed report.</h2><p>We keep ownership of the instruction at every stage and give you one clear point of contact.</p><a className="button" href="#about-enquiry">Start an enquiry <span>→</span></a></div>
      <ol><li><span>01</span><div><h3>Understand the property</h3><p>We review the address, building type, available information and required timescale.</p></div></li><li><span>02</span><div><h3>Confirm the scope</h3><p>You receive a clear, property-specific quotation before deciding to proceed.</p></div></li><li><span>03</span><div><h3>Complete the assessment</h3><p>The appropriately qualified member of our in-house team visits and assesses the property.</p></div></li><li><span>04</span><div><h3>Provide the documentation</h3><p>We complete the report, certificate or plan and lodge it where the service requires.</p></div></li></ol>
    </section>

    <section className="section about-clients">
      <div className="section-heading"><div><span className="kicker">Who we work with</span><h2>Support at every point in the property lifecycle.</h2></div><p>From a first commercial letting to an established national portfolio.</p></div>
      <div className="about-client-grid"><article><span>01</span><h3>Landlords & owners</h3><p>Clear assessment support before a sale, letting, renewal or planned property work.</p></article><article><span>02</span><h3>Commercial agents</h3><p>Responsive documentation for properties being prepared for marketing and transactions.</p></article><article><span>03</span><h3>Property managers</h3><p>Coordinated instructions for individual buildings, managed estates and wider portfolios.</p></article><article><span>04</span><h3>Businesses</h3><p>Practical assessments for occupied workplaces, retail, hospitality and industrial premises.</p></article></div>
    </section>

    <section className="about-coverage">
      <div><span className="kicker light">Nationwide coverage</span><h2>Local property knowledge. One national standard.</h2><p>Our in-house team supports commercial properties across the UK, from city-centre offices and high-street retail to business parks, warehouses and industrial estates.</p><div className="about-city-links"><a href="/locations#london">London</a><a href="/locations#birmingham">Birmingham</a><a href="/locations#manchester">Manchester</a><a href="/">Leeds</a><a href="/locations#york">York</a><a href="/locations#bristol">Bristol</a></div><a className="button button-light" href="/locations">Explore all locations <span>→</span></a></div>
      <div className="about-coverage-graphic" aria-hidden="true"><strong>UK</strong><span>12 regions</span><div><i></i><i></i><i></i><i></i><i></i></div><small>One Commercial EPC Direct team</small></div>
    </section>

    <section className="quote-section about-enquiry" id="about-enquiry"><div className="quote-copy"><span className="kicker">Tell us about your property</span><h2>Speak directly to our team.</h2><p>Send the postcode, first line of the address and your contact details. We’ll review what you need and come back with clear next steps.</p><div className="quote-promise"><span>✓</span><div><strong>In-house specialists</strong><p>Your enquiry stays with our team.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>No obligation</strong><p>Review the quotation before booking.</p></div></div></div><QuoteForm formLabel="Property assessment enquiry" buttonLabel="Send my enquiry" sourceLabel="About page enquiry" /></section>

    <footer><a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial property assessments, made simple.</p><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="#about-enquiry">Get a quote</a></div><SocialLinks /><small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small></footer>
  </main>;
}
