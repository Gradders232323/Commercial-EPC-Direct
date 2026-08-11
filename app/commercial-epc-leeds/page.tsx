import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import IndustryLogos from "../industry-logos";

export const metadata: Metadata = {
  title: "Commercial EPC Leeds | Local Commercial EPC Assessors",
  description: "Need a Commercial EPC in Leeds? Arrange an accredited commercial energy assessment for offices, shops, warehouses, industrial units and other non-domestic property.",
  alternates: { canonical: "/commercial-epc-leeds" },
  openGraph: { title: "Commercial EPC Leeds | Local Commercial EPC Assessors", description: "Commercial energy assessments across Leeds and West Yorkshire.", url: "https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/commercial-epc-leeds", images: [{ url: "https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/og.png", width: 1731, height: 909, alt: "Commercial EPC Direct" }] },
  twitter: { card: "summary_large_image", images: ["https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/og.png"] },
};

const propertyTypes = ["Offices", "Retail units and shops", "Warehouses", "Industrial units", "Restaurants and cafés", "Hotels and accommodation", "Healthcare premises", "Commercial developments", "Mixed-use buildings", "Other non-domestic properties"];
const assessmentFactors = ["Building construction", "Floor area and layout", "Heating systems", "Cooling and ventilation", "Lighting", "Windows and glazing", "Insulation", "Hot water systems", "Building controls"];
const areas = ["Leeds city centre", "Holbeck", "Hunslet", "Headingley", "Roundhay", "Armley", "Kirkstall", "Chapel Allerton", "Pudsey", "Morley", "Garforth", "West Yorkshire"];
const audiences = [
  ["Commercial landlords", "Arrange EPC assessments before marketing or reletting commercial premises."],
  ["Property managers", "Manage EPC requirements across individual buildings or wider portfolios."],
  ["Commercial agents", "Arrange certificates for properties being prepared for sale or lease."],
  ["Solicitors & professionals", "Obtain EPC documentation for commercial property transactions."],
  ["Developers & contractors", "Arrange assessments for new or refurbished commercial buildings where applicable."],
];

export default function CommercialEpcLeeds() {
  return (
    <main className="location-page leeds-page">
      <SiteNav quoteHref="#leeds-top-enquiry" />
      <section className="location-hero" id="top">
        <div className="location-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations">Locations</a><span>/</span>Commercial EPC Leeds</div>
          <div className="eyebrow"><span></span> Commercial energy assessors in Leeds</div>
          <h1>Commercial EPC<br/><em>Leeds.</em></h1>
          <p className="hero-intro">Arrange a professional Commercial Energy Performance Certificate for an office, shop, warehouse, industrial unit or other non-domestic property in Leeds and the surrounding area.</p>
          <div className="hero-actions"><a className="button" href="#leeds-top-enquiry">Get your Leeds EPC quote <span>→</span></a><a className="text-link" href="#leeds-services">View the service <span>↓</span></a></div>
          <div className="location-proof"><span>✓</span> Accredited commercial energy assessors across Leeds and West Yorkshire</div>
        </div>
        <aside className="york-card" aria-label="Commercial EPC service coverage in Leeds">
          <div className="york-card-head"><span>LOCAL COVERAGE</span><b>LEEDS</b></div>
          <div className="york-map" aria-hidden="true"><div className="map-grid"></div><span className="map-ring ring-one"></span><span className="map-ring ring-two"></span><span className="map-pin"><i></i></span><div className="map-label"><small>COMMERCIAL EPC</small><strong>Leeds</strong><span>Local assessor network</span></div><div className="map-road road-one"></div><div className="map-road road-two"></div><div className="map-road road-three"></div></div>
          <div className="york-card-foot"><span><i></i> Appointments available</span><a href="#leeds-top-enquiry">Request a quote →</a></div>
        </aside>
      </section>
      <section className="benefit-strip location-benefits">
        <div className="benefit"><span>01</span><div><strong>Leeds coverage</strong><p>Across the city and surrounding area</p></div></div>
        <div className="benefit"><span>02</span><div><strong>Property-specific quotes</strong><p>Based on size and complexity</p></div></div>
        <div className="benefit"><span>03</span><div><strong>Accredited assessors</strong><p>Commercial energy specialists</p></div></div>
      </section>
      <IndustryLogos />
      <section className="quote-section enquiry-placement top-enquiry" id="leeds-top-enquiry">
        <div className="quote-copy"><span className="kicker">Quick Leeds EPC enquiry</span><h2>Get a quote for your property.</h2><p>Share the address, property type and approximate floor area. We’ll confirm the assessment and prepare a clear quotation.</p><div className="quote-promise"><span>✓</span><div><strong>Fast response</strong><p>Clear next steps from our team.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>No obligation</strong><p>Review your quote before booking.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. LS1 4AP" formLabel="Leeds property details" buttonLabel="Get my EPC quote" sourceLabel="Commercial EPC Leeds — top form" />
      </section>
      <section className="section york-introduction">
        <span className="kicker">Commercial energy performance certificate Leeds</span>
        <div className="introduction-grid"><h2>Your commercial EPC, handled from enquiry to certificate.</h2><div><p>A Commercial EPC records the energy efficiency of a non-domestic building on a scale from A+ to G and includes recommendations for potential improvements.</p><p>Whether you are selling, letting, developing or managing a commercial property, we can arrange the right assessor and keep the process straightforward.</p><a className="inline-arrow" href="#leeds-top-enquiry">Request a Leeds quote <span>→</span></a></div></div>
      </section>
      <section className="epc-services" id="leeds-services">
        <div className="services-copy"><span className="kicker light">Commercial EPC services in Leeds</span><h2>Assessments for every kind of commercial property.</h2><p>Commercial EPCs are commonly required when a non-domestic building is constructed, sold or let. The assessment considers the building fabric and fixed services before the certificate is produced and lodged where required.</p><p>We match the property with an appropriately qualified commercial energy assessor and provide one point of contact throughout.</p></div>
        <div className="property-checklist">{propertyTypes.map((type, index) => <div key={type}><span>{String(index + 1).padStart(2, "0")}</span><strong>{type}</strong><i>✓</i></div>)}</div>
      </section>
      <section className="assessment-section">
        <div className="assessment-heading"><span className="kicker light">Commercial EPC assessors in Leeds</span><h2>A thorough inspection, completed correctly.</h2><p>The assessor gathers the information needed to model the building’s energy performance using the approved commercial EPC methodology.</p></div>
        <div className="factor-grid">{assessmentFactors.map((factor, index) => <div key={factor}><span>{String(index + 1).padStart(2, "0")}</span><strong>{factor}</strong></div>)}</div>
        <p className="method-note">The scope and price depend on the building’s size, construction, services and complexity. Send us the property details for an accurate quotation.</p>
      </section>
      <section className="quote-section enquiry-placement middle-enquiry" id="leeds-mid-enquiry">
        <div className="quote-copy"><span className="kicker">Working to a deadline?</span><h2>Tell us when you need it.</h2><p>If the EPC is required for a sale, new lease or other deadline, include the date with your enquiry and we’ll advise on availability.</p><div className="quote-promise"><span>✓</span><div><strong>Property-specific price</strong><p>Based on the building and scope.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>Deadline support</strong><p>Availability confirmed clearly.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. LS1 4AP" formLabel="Assessment enquiry" buttonLabel="Request availability" sourceLabel="Commercial EPC Leeds — middle form" />
      </section>
      <section className="professional-section">
        <div className="professional-heading"><span className="kicker light">For landlords and property professionals</span><h2>One Leeds property or an entire portfolio.</h2><p>We support individual owners and organisations responsible for multiple commercial buildings.</p></div>
        <div className="audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="york-areas" id="leeds-areas">
        <div className="areas-copy"><span className="kicker light">Commercial EPCs across Leeds</span><h2>City-wide coverage, with support across West Yorkshire.</h2><p>We arrange Commercial EPC assessments throughout Leeds and surrounding locations. Send us the postcode and we’ll confirm local assessor coverage.</p><div className="why-choose"><strong>Why choose Commercial EPC Direct?</strong><ul><li>Accredited energy assessors</li><li>Clear quotations</li><li>Convenient appointments</li><li>Support for complex buildings</li></ul></div><a className="button button-light" href="#leeds-quote">Check your property <span>→</span></a></div>
        <div className="area-list">{areas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong><i>↗</i></div>)}</div>
      </section>
      <section className="quote-section york-quote" id="leeds-quote">
        <div className="quote-copy"><span className="kicker">Get a Commercial EPC quote in Leeds</span><h2>Tell us about your property.</h2><p>Send the address, approximate floor area and property type, and we’ll prepare a quotation for the assessment.</p><div className="quote-promise"><span>✓</span><div><strong>Accurate quotation</strong><p>Based on the property and scope.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>Professional support</strong><p>For straightforward and complex buildings.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. LS1 4AP" sourceLabel="Commercial EPC Leeds — bottom form" />
      </section>
      <section className="section faq" id="leeds-faq">
        <div className="faq-title"><span className="kicker">Commercial EPC Leeds FAQs</span><h2>Useful answers before you book.</h2></div>
        <div className="faq-list">
          <details><summary>How long is a Commercial EPC valid for?<span>+</span></summary><p>A Commercial EPC is generally valid for 10 years, although a new assessment can be commissioned earlier.</p></details>
          <details><summary>What properties can you assess in Leeds?<span>+</span></summary><p>We arrange assessments for offices, shops, warehouses, industrial units, hospitality premises and many other non-domestic buildings.</p></details>
          <details><summary>How much does a Commercial EPC cost in Leeds?<span>+</span></summary><p>The price depends on the building’s size, layout, services and complexity. Send us the address and basic property information for a tailored quote.</p></details>
          <details><summary>How quickly can an assessment be arranged?<span>+</span></summary><p>Availability varies, but we will confirm the likely appointment and turnaround when quoting. Tell us if you are working towards a deadline.</p></details>
          <details><summary>What details do you need for a quote?<span>+</span></summary><p>The address, approximate floor area, property type and reason the EPC is required will help us price the work accurately.</p></details>
          <details><summary>Do you cover areas outside Leeds?<span>+</span></summary><p>Yes. Coverage is available across West Yorkshire and beyond. Send the postcode and we’ll confirm availability.</p></details>
        </div>
      </section>
      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial energy assessments, made simple.</p>
        <div className="footer-links"><a href="/">Home</a><a href="#leeds-services">Services</a><a href="#leeds-faq">Guides</a><a href="/#process">About</a><a href="/locations">Locations</a><a href="#leeds-quote">Get a quote</a></div>
        <SocialLinks />
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
