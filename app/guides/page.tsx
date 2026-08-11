import type { Metadata } from "next";
import SiteNav from "../site-nav";
import QuoteForm from "../quote-form";
import SocialLinks from "../social-links";

export const metadata: Metadata = {
  title: "Commercial EPC Guides | Requirements, Costs, Ratings and MEES",
  description: "Straightforward commercial EPC guidance for landlords, agents and businesses: requirements, validity, costs, ratings, MEES and assessment preparation.",
  alternates: { canonical: "/guides" },
  openGraph: { title: "Commercial EPC Guides", description: "Practical guidance for commercial property owners, landlords and agents.", url: "https://www.commercialepcdirect.co.uk/guides", images: [{ url: "https://www.commercialepcdirect.co.uk/og.png", width: 1731, height: 909, alt: "Commercial EPC Direct" }] },
};

const guideCards = [
  ["01", "Do I need a Commercial EPC?", "When an EPC is generally required and the circumstances that may need closer consideration.", "requirements", "ESSENTIAL"],
  ["02", "How long does an EPC last?", "Validity, checking the register and deciding whether a new assessment may be useful.", "validity", "4 MIN READ"],
  ["03", "What affects EPC cost?", "The property factors that influence the assessment scope and quotation.", "cost", "PRICING"],
  ["04", "Commercial EPC ratings explained", "The A+ to G scale, recommendation reports and what the rating represents.", "ratings", "5 MIN READ"],
  ["05", "MEES for commercial landlords", "A clear introduction to the minimum standard and the role of valid exemptions.", "mees", "LANDLORD GUIDE"],
  ["06", "Preparing for an assessment", "The information, plans and access arrangements that help the process run smoothly.", "preparation", "CHECKLIST"],
];

const assessmentItems = ["Building construction and thermal elements", "Windows and glazing", "Heating and hot-water systems", "Cooling and air conditioning", "Natural and mechanical ventilation", "Fixed lighting", "Building controls", "Layout, use and zoning"];

export default function GuidesPage() {
  return <main className="guides-page">
    <SiteNav quoteHref="#guides-enquiry" />
    <section className="guides-hero">
      <div>
        <div className="breadcrumb"><a href="/">Home</a><span>/</span>Guides</div>
        <div className="eyebrow"><span></span> Commercial property knowledge</div>
        <h1>Commercial EPC<br/><em>guides.</em></h1>
        <p>Clear, practical information for landlords, property owners, agents and businesses responsible for non-domestic buildings.</p>
        <a className="button" href="#guide-library">Explore the guides <span>↓</span></a>
      </div>
      <aside className="guides-index-card">
        <div className="guides-card-head"><span>GUIDE LIBRARY</span><b>06 TOPICS</b></div>
        <div className="guides-card-main"><small>START HERE</small><strong>Know what<br/><em>your property needs.</em></strong><div>{guideCards.map(([number, title]) => <a key={number} href={`#${guideCards.find(card => card[0] === number)?.[3]}`}><span>{number}</span>{title}<i>→</i></a>)}</div></div>
      </aside>
    </section>

    <section className="guides-notice"><span>IMPORTANT</span><p>These guides provide general information, not legal advice. Requirements depend on the building and circumstances; seek appropriate professional or legal advice where there is uncertainty.</p></section>

    <section className="section guide-library" id="guide-library">
      <div className="section-heading"><div><span className="kicker">Commercial EPC guide library</span><h2>Start with the question you need answered.</h2></div><p>Plain-English guidance backed by links to official government information.</p></div>
      <div className="guide-card-grid">{guideCards.map(([number, title, copy, anchor, tag]) => <a key={anchor} href={`#${anchor}`}><span>{number}</span><small>{tag}</small><h3>{title}</h3><p>{copy}</p><i>Read guide →</i></a>)}</div>
    </section>

    <section className="guide-article guide-article-light" id="requirements">
      <div className="guide-article-index"><span>01</span><small>REQUIREMENTS</small></div>
      <div className="guide-article-body"><span className="kicker">Do I need a Commercial EPC?</span><h2>Commonly required for construction, sale or letting.</h2><p>A Commercial Energy Performance Certificate is generally needed when an applicable non-domestic building is constructed, sold or let. The EPC provides an energy-efficiency rating and must be produced by an accredited non-domestic energy assessor.</p><p>There are exemptions and building-specific circumstances to consider. Do not assume that a building is exempt based only on its age, use or listed status.</p><div className="guide-key-points"><strong>Common trigger points</strong><ul><li>A newly constructed commercial building</li><li>A commercial property being sold</li><li>Applicable premises being let to a new tenant</li><li>A certificate required for wider compliance or transaction work</li></ul></div><a className="inline-arrow" href="https://www.gov.uk/energy-performance-certificate-commercial-property" target="_blank" rel="noreferrer">Read the official GOV.UK guidance <span>↗</span></a></div>
      <aside><strong>Quick check</strong><p>Search the official register first. A valid certificate may already exist for the property.</p><a href="https://www.gov.uk/find-energy-certificate" target="_blank" rel="noreferrer">Check the EPC register →</a></aside>
    </section>

    <section className="guide-article guide-article-dark" id="validity">
      <div className="guide-article-index"><span>02</span><small>VALIDITY</small></div>
      <div className="guide-article-body"><span className="kicker light">How long does a Commercial EPC last?</span><h2>Normally valid for 10 years.</h2><p>A Commercial EPC is normally valid for 10 years, or until it is replaced by a newer certificate. A new EPC is not automatically required every time a tenant changes or the property is sold if a suitable valid certificate already exists.</p><p>Where a building has been substantially altered or its fixed services have changed, a new assessment may give a more current view of its calculated energy performance.</p><div className="guide-key-points"><strong>Before arranging a new assessment</strong><ul><li>Search for the address on the official register</li><li>Check the certificate’s expiry date</li><li>Confirm that it covers the correct building or unit</li><li>Review whether significant changes have been made</li></ul></div></div>
      <aside><strong>10 years</strong><p>The standard validity period stated in current government guidance.</p></aside>
    </section>

    <section className="guide-article guide-article-warm" id="cost">
      <div className="guide-article-index"><span>03</span><small>PRICING</small></div>
      <div className="guide-article-body"><span className="kicker">What affects Commercial EPC cost?</span><h2>The building determines the work involved.</h2><p>There is no single price for every commercial EPC. A small shop or office suite usually presents a different assessment scope from a multi-storey office, mixed-use property, large warehouse or industrial building.</p><div className="guide-key-points"><strong>Factors that can affect the quotation</strong><ul><li>Floor area, number of storeys and layout</li><li>Building type, construction and current use</li><li>Heating, cooling, ventilation and controls</li><li>Number of zones and different uses</li><li>Availability of floor plans and building information</li><li>Location, access and required timescale</li></ul></div><p>Providing the postcode, first line of the address and any available plans helps our team review the property before quoting.</p><a className="button" href="#guides-enquiry">Request a property-specific quote <span>→</span></a></div>
      <aside><strong>Useful details</strong><p>Address, approximate floor area, current use, number of floors, plans and deadline.</p></aside>
    </section>

    <section className="guide-article guide-article-light" id="ratings">
      <div className="guide-article-index"><span>04</span><small>RATINGS</small></div>
      <div className="guide-article-body"><span className="kicker">Commercial EPC ratings explained</span><h2>An energy-performance scale from A+ to G.</h2><p>The rating is calculated from the building’s characteristics and fixed services using approved non-domestic methodology. A higher rating represents better calculated energy performance within the scale.</p><p>The assessment does not simply measure current utility bills. It models the building using information such as construction, heating, cooling, ventilation, lighting, controls, layout and activity zones.</p><div className="guides-energy-bars" aria-label="Commercial EPC rating scale"><i>A+</i><i>A</i><i>B</i><i>C</i><i>D</i><i>E</i><i>F</i><i>G</i></div><p>The certificate can be accompanied by a recommendation report identifying potential improvements. Recommendations should be reviewed in the context of the building and any planned work.</p></div>
      <aside><strong>Not an energy bill</strong><p>The EPC is a standardised calculation of the building’s energy performance.</p></aside>
    </section>

    <section className="guide-article guide-article-lime" id="mees">
      <div className="guide-article-index"><span>05</span><small>LANDLORD GUIDE</small></div>
      <div className="guide-article-body"><span className="kicker">MEES for commercial landlords</span><h2>Understand the current minimum standard.</h2><p>In England and Wales, privately rented non-domestic properties covered by the Minimum Energy Efficiency Standard generally need an EPC rating of E or above unless a valid exemption applies.</p><p>The rules, exemptions and evidence requirements are property-specific. Landlords should review the current official guidance and seek appropriate advice before making compliance decisions.</p><div className="guide-key-points"><strong>Questions to consider</strong><ul><li>Is the property within the scope of the regulations?</li><li>Does it have a valid current EPC?</li><li>Is the rating E or above?</li><li>Could a valid exemption apply?</li><li>Has any exemption been correctly registered?</li></ul></div><a className="inline-arrow" href="https://www.gov.uk/guidance/non-domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance" target="_blank" rel="noreferrer">Read the current landlord guidance <span>↗</span></a></div>
      <aside><strong>E or above</strong><p>The current general minimum for covered privately rented non-domestic properties, unless a valid exemption applies.</p></aside>
    </section>

    <section className="guide-article guide-article-dark" id="preparation">
      <div className="guide-article-index"><span>06</span><small>CHECKLIST</small></div>
      <div className="guide-article-body"><span className="kicker light">Preparing for a Commercial EPC assessment</span><h2>Good information helps the visit run smoothly.</h2><p>The assessor must inspect the building and gather the information needed for the energy model. Clear access and existing documentation can reduce uncertainty, particularly in larger or more complex properties.</p><div className="guide-key-points"><strong>Helpful items to prepare</strong><ul><li>Floor plans and measured areas</li><li>Details of extensions or refurbishment</li><li>Heating and cooling system information</li><li>Lighting and control specifications where available</li><li>Access to plant rooms, lofts and relevant areas</li><li>A contact who understands the building</li></ul></div></div>
      <aside><strong>Access matters</strong><p>Make sure the assessor can inspect all relevant parts of the property safely.</p></aside>
    </section>

    <section className="section guides-assessment"><div className="section-heading"><div><span className="kicker">What the assessor reviews</span><h2>Building fabric, services, use and layout.</h2></div><p>The precise scope depends on the property and its complexity.</p></div><div>{assessmentItems.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i><strong>{item}</strong></span>)}</div></section>

    <section className="quote-section guides-enquiry" id="guides-enquiry"><div className="quote-copy"><span className="kicker">Still unsure what your property needs?</span><h2>Ask our in-house team.</h2><p>Send the postcode and first line of the address. We’ll review the property and explain the next step.</p><div className="quote-promise"><span>✓</span><div><strong>Direct advice</strong><p>From our own assessment team.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>Clear quotation</strong><p>Based on the property and scope.</p></div></div></div><QuoteForm formLabel="Property guidance enquiry" buttonLabel="Ask about my property" sourceLabel="Guides page enquiry" /></section>

    <footer><a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial property guidance, made clear.</p><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="#guides-enquiry">Get a quote</a></div><SocialLinks /><small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small></footer>
  </main>;
}
