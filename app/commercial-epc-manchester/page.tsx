import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import IndustryLogos from "../industry-logos";

export const metadata: Metadata = {
  title: "Commercial EPC Manchester | Local Commercial EPC Assessors",
  description: "Commercial EPC assessments in Manchester for offices, shops, warehouses, industrial units and other non-domestic property across Greater Manchester.",
  alternates: { canonical: "/commercial-epc-manchester" },
  openGraph: { title: "Commercial EPC Manchester | Local Commercial EPC Assessors", description: "Commercial energy assessments across Manchester and Greater Manchester.", url: "https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/commercial-epc-manchester", images: [{ url: "https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/og.png", width: 1731, height: 909, alt: "Commercial EPC Direct" }] },
  twitter: { card: "summary_large_image", images: ["https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/og.png"] },
};

const propertyTypes = ["Offices and office buildings", "Retail shops and parade units", "Warehouses", "Industrial units", "Workshops", "Business units", "Restaurants and cafés", "Pubs and hospitality", "Storage facilities", "Trade counters", "Mixed-use developments", "Larger commercial buildings"];
const assessmentFactors = ["Building construction", "Floor area and layout", "Heating systems", "Cooling and air conditioning", "Natural and mechanical ventilation", "Fixed lighting", "Windows and glazing", "Hot water systems", "Building controls"];
const cityCentreAreas = ["Spinningfields", "Deansgate", "King Street", "Mosley Street", "Piccadilly", "Oxford Road", "St Peter's Square", "Northern Quarter", "Ancoats", "New Islington", "Castlefield", "Salford Central", "Greengate", "Manchester Victoria", "First Street"];
const areas = ["Manchester city centre", "Ancoats", "Ardwick", "Hulme", "Moss Side", "Rusholme", "Fallowfield", "Withington", "Didsbury", "Chorlton", "Wythenshawe", "Trafford", "Salford", "Eccles", "Swinton", "Worsley", "Prestwich", "Middleton", "Oldham", "Rochdale", "Ashton-under-Lyne", "Stockport", "Sale", "Altrincham"];
const sectors = [
  { number: "01", title: "Manchester offices", copy: "Commercial EPCs for individual suites, business centres, converted offices and multi-storey buildings across Spinningfields, St Peter's Square, Deansgate, Oxford Road, First Street, Piccadilly and Salford.", items: ["Individual offices", "Office suites", "Business centres", "Mixed developments"] },
  { number: "02", title: "Shops and retail", copy: "Assessments for high-street shops, shopping parade units, showrooms, restaurants, cafés and other customer-facing premises across Manchester and Greater Manchester.", items: ["High-street shops", "Retail units", "Showrooms", "Hospitality premises"] },
  { number: "03", title: "Warehouses", copy: "EPC assessments for warehouses, distribution buildings and storage facilities around Trafford Park, Salford, Eccles, Irlam, Stockport, Wythenshawe and the airport corridor.", items: ["Distribution units", "Storage facilities", "Warehouse and office units", "Logistics property"] },
  { number: "04", title: "Industrial property", copy: "Support for manufacturing premises, workshops, engineering units and trade counters across Greater Manchester's business parks and industrial estates.", items: ["Manufacturing premises", "Workshops", "Engineering units", "Trade counters"] },
];
const audiences = [
  ["Commercial landlords", "Arrange EPC assessments before marketing or reletting commercial premises."],
  ["Property managers", "Coordinate EPC requirements across individual buildings or wider portfolios."],
  ["Commercial agents", "Arrange certificates for Manchester properties being prepared for sale or lease."],
  ["Solicitors & professionals", "Obtain EPC documentation for commercial property transactions."],
  ["Developers & contractors", "Arrange assessments for new or refurbished commercial buildings where applicable."],
];

export default function CommercialEpcManchester() {
  return (
    <main className="location-page manchester-page">
      <SiteNav quoteHref="#manchester-top-enquiry" />
      <section className="location-hero" id="top">
        <div className="location-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations">Locations</a><span>/</span>Commercial EPC Manchester</div>
          <div className="eyebrow"><span></span> Commercial energy assessors in Manchester</div>
          <h1>Commercial EPC<br/><em>Manchester.</em></h1>
          <p className="hero-intro">Gradwell Environmental provides professional Commercial Energy Performance Certificate assessments for offices, shops, warehouses, industrial units and other non-domestic properties throughout Manchester and Greater Manchester.</p>
          <div className="hero-actions"><a className="button" href="#manchester-top-enquiry">Get your Manchester quote <span>→</span></a><a className="text-link" href="#manchester-services">Explore the service <span>↓</span></a></div>
          <div className="location-proof"><span>✓</span> Delivered directly by our accredited in-house assessors</div>
        </div>
        <aside className="manchester-coverage-card" aria-label="Commercial EPC coverage across Greater Manchester">
          <div className="manchester-card-head"><span>GREATER MANCHESTER</span><b>MCR</b></div>
          <div className="manchester-card-main"><small>COMMERCIAL EPC COVERAGE</small><strong>City to<br/>industrial<br/><em>corridor.</em></strong><div className="manchester-route" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></div>
          <div className="manchester-place-list"><span>City Centre</span><span>Trafford Park</span><span>Salford</span><span>Stockport</span><span>Greater Manchester</span></div>
          <a href="#manchester-top-enquiry">Check your postcode <span>→</span></a>
        </aside>
      </section>

      <section className="benefit-strip location-benefits">
        <div className="benefit"><span>01</span><div><strong>Greater Manchester coverage</strong><p>City centre to major industrial areas</p></div></div>
        <div className="benefit"><span>02</span><div><strong>Property-specific pricing</strong><p>Based on size and complexity</p></div></div>
        <div className="benefit"><span>03</span><div><strong>In-house assessors</strong><p>Our accredited commercial specialists</p></div></div>
      </section>
      <IndustryLogos />

      <section className="quote-section enquiry-placement top-enquiry" id="manchester-top-enquiry">
        <div className="quote-copy"><span className="kicker">Quick Manchester EPC enquiry</span><h2>Get a quote for your property.</h2><p>Send the address, approximate floor area and building type. We’ll confirm the scope and prepare a clear quotation.</p><div className="quote-promise"><span>✓</span><div><strong>Fast response</strong><p>Clear next steps from our team.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>No obligation</strong><p>Review your quote before booking.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. M1 1AE" formLabel="Manchester property details" buttonLabel="Get my EPC quote" sourceLabel="Commercial EPC Manchester — top form" />
      </section>

      <section className="section york-introduction">
        <span className="kicker">Commercial Energy Performance Certificates in Manchester</span>
        <div className="introduction-grid"><h2>One service for a remarkably varied property market.</h2><div><p>Manchester combines major office districts, extensive retail areas, converted historic buildings, modern developments, industrial estates, logistics hubs and business parks.</p><p>From individual commercial units to larger buildings with multiple zones, uses and fixed services, the assessment is completed directly by our appropriately qualified in-house team.</p><a className="inline-arrow" href="#manchester-top-enquiry">Request a Manchester quote <span>→</span></a></div></div>
      </section>

      <section className="epc-services" id="manchester-services">
        <div className="services-copy"><span className="kicker light">Commercial EPC services across Manchester</span><h2>Assessments for offices, retail, logistics and industry.</h2><p>An EPC records the calculated energy performance of an applicable non-domestic building and includes recommendations for potential improvement.</p><p>We work with landlords, owners, businesses, agents and property professionals responsible for single properties and portfolios.</p></div>
        <div className="property-checklist">{propertyTypes.map((type, index) => <div key={type}><span>{String(index + 1).padStart(2, "0")}</span><strong>{type}</strong><i>✓</i></div>)}</div>
      </section>

      <section className="section leeds-city-centre manchester-city-centre">
        <div className="leeds-city-copy"><span className="kicker">Commercial EPC assessments in Manchester city centre</span><h2>Modern offices, historic buildings and mixed-use developments.</h2><p>Central Manchester includes Grade A offices, converted warehouses, period commercial buildings, traditional retail premises and major mixed-use schemes.</p><p>Provide the address, approximate floor area and building type and we’ll prepare a quotation for the appropriate assessment.</p><a className="inline-arrow" href="#manchester-mid-enquiry">Request a city-centre quote <span>→</span></a></div>
        <div className="leeds-district-grid">{cityCentreAreas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong></div>)}</div>
      </section>

      <section className="leeds-sector-section manchester-sector-section">
        <div className="leeds-sector-heading"><span className="kicker light">Manchester property expertise</span><h2>From office suites to major logistics buildings.</h2><p>The building's construction, use and installed services determine the scope of the assessment. Our service accommodates both straightforward units and complex properties.</p></div>
        <div className="leeds-sector-grid">{sectors.map(sector => <article key={sector.title}><span>{sector.number}</span><h3>{sector.title}</h3><p>{sector.copy}</p><ul>{sector.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="section manchester-hubs-section">
        <div className="section-heading"><div><span className="kicker">Key commercial locations</span><h2>Trafford Park, Salford and MediaCity.</h2></div><p>Three distinctive property markets with different building types, services and assessment requirements.</p></div>
        <div className="manchester-hub-grid">
          <article><span>01 / TRAFFORD PARK</span><h3>Industrial scale and variety.</h3><p>Commercial EPCs for warehouses, distribution units, manufacturing premises, trade counters, workshops and office-and-warehouse combinations.</p></article>
          <article><span>02 / SALFORD</span><h3>Regeneration and mixed use.</h3><p>Assessments for offices, retail, hospitality, business units, warehouses and mixed-use developments around Salford Central, Greengate and the wider city.</p></article>
          <article><span>03 / MEDIACITY</span><h3>Modern commercial space.</h3><p>EPC assessments for applicable offices, commercial suites, retail and hospitality units within larger MediaCity and Salford Quays developments.</p></article>
        </div>
      </section>

      <section className="assessment-section">
        <div className="assessment-heading"><span className="kicker light">What the assessment includes</span><h2>Building characteristics and fixed services.</h2><p>The assessor gathers the information required to model the building using approved non-domestic EPC methodology.</p></div>
        <div className="factor-grid">{assessmentFactors.map((factor, index) => <div key={factor}><span>{String(index + 1).padStart(2, "0")}</span><strong>{factor}</strong></div>)}</div>
        <p className="method-note">Mixed-use buildings can contain office, warehouse, retail, manufacturing and storage zones with significantly different services and patterns of use.</p>
      </section>

      <section className="section leeds-compliance-section">
        <div className="leeds-compliance-heading"><span className="kicker">Commercial EPC requirements</span><h2>Understand when a certificate may be required.</h2><p>Requirements depend on the building and circumstances, and exemptions can apply. Seek appropriate professional or legal advice where there is uncertainty.</p></div>
        <div className="leeds-compliance-grid">
          <article><span>01</span><h3>Construction, sale or letting</h3><p>An EPC is generally required when an applicable non-domestic property is constructed, sold or let to a new tenant, subject to exemptions.</p><ul><li>New construction</li><li>Commercial sale</li><li>New letting</li></ul></article>
          <article><span>02</span><h3>Normally valid for 10 years</h3><p>A certificate is normally valid for 10 years or until replaced by a newer EPC. Existing certificates can be checked on the government register.</p><a href="https://www.gov.uk/find-energy-certificate" target="_blank" rel="noreferrer">Check the EPC register ↗</a></article>
          <article><span>03</span><h3>Ratings and MEES</h3><p>Commercial EPCs use an A+ to G scale. Privately rented non-domestic properties covered by MEES generally need an E rating or above unless a valid exemption applies.</p><a href="https://www.gov.uk/guidance/non-domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance" target="_blank" rel="noreferrer">Read government guidance ↗</a></article>
        </div>
      </section>

      <section className="leeds-process-section manchester-process-section">
        <div><span className="kicker light">How to get a Commercial EPC in Manchester</span><h2>Four clear steps.</h2><p>Floor plans and existing information are particularly useful for larger warehouses, industrial units and multi-storey buildings.</p></div>
        <ol><li><span>01</span><div><h3>Send the property details</h3><p>Provide the address, approximate floor area, building type, current use and required timescale.</p></div></li><li><span>02</span><div><h3>Receive your quotation</h3><p>We review the property information and confirm the price and assessment scope.</p></div></li><li><span>03</span><div><h3>Arrange site access</h3><p>Access is coordinated for the Non-Domestic Energy Assessor to inspect the property.</p></div></li><li><span>04</span><div><h3>Assessment and lodgement</h3><p>The information is modelled and the Commercial EPC is produced and lodged where required.</p></div></li></ol>
      </section>

      <section className="quote-section enquiry-placement middle-enquiry" id="manchester-mid-enquiry">
        <div className="quote-copy"><span className="kicker">Working to a deadline?</span><h2>Tell us when you need it.</h2><p>If the EPC supports a sale, letting or marketing deadline, include the date with your enquiry and we’ll advise on availability.</p><div className="quote-promise"><span>✓</span><div><strong>Property-specific price</strong><p>Based on the building and scope.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>Portfolio support</strong><p>For one property or several.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. M1 1AE" formLabel="Assessment enquiry" buttonLabel="Request availability" sourceLabel="Commercial EPC Manchester — middle form" />
      </section>

      <section className="professional-section">
        <div className="professional-heading"><span className="kicker light">For landlords and property professionals</span><h2>One Manchester unit or a regional portfolio.</h2><p>We support owners, agents and organisations responsible for commercial property across Manchester and the North West.</p></div>
        <div className="audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="york-areas" id="manchester-areas">
        <div className="areas-copy"><span className="kicker light">Commercial EPC coverage across Manchester</span><h2>Across the city, conurbation and major industrial corridors.</h2><p>Motorway connections including the M60, M62, M56, M602 and M61 support a substantial network of business parks, logistics sites and industrial estates.</p><p>Our in-house team handles individual instructions and multiple properties across Greater Manchester and the wider North West.</p><div className="why-choose"><strong>Why choose Gradwell Environmental?</strong><ul><li>Our own accredited in-house assessors</li><li>No freelance assessor network</li><li>Clear property-specific quotations</li><li>Single and portfolio instructions</li></ul></div><a className="button button-light" href="#manchester-quote">Check your property <span>→</span></a></div>
        <div className="area-list">{areas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong><i>↗</i></div>)}</div>
      </section>

      <section className="quote-section york-quote" id="manchester-quote">
        <div className="quote-copy"><span className="kicker">Get a Commercial EPC quote in Manchester</span><h2>Tell us about your property.</h2><p>Send the address, approximate floor area, building type and timescale. We’ll prepare a quotation for the assessment.</p><div className="quote-promise"><span>✓</span><div><strong>Accurate quotation</strong><p>Based on the property and scope.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>Professional support</strong><p>For straightforward and complex buildings.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. M1 1AE" sourceLabel="Commercial EPC Manchester — bottom form" />
      </section>

      <section className="section faq" id="manchester-faq">
        <div className="faq-title"><span className="kicker">Commercial EPC Manchester FAQs</span><h2>Useful answers before you book.</h2></div>
        <div className="faq-list">
          <details><summary>How much does a Commercial EPC cost in Manchester?<span>+</span></summary><p>The price depends on the property's size, type, construction and complexity. Send the address, approximate floor area and building type for a tailored quotation.</p></details>
          <details><summary>How quickly can an assessment be arranged?<span>+</span></summary><p>Timescales depend on our in-house team’s availability and the building's complexity. Tell us if you are working towards a marketing, sale or letting deadline.</p></details>
          <details><summary>How long is a Commercial EPC valid?<span>+</span></summary><p>Commercial EPCs are generally valid for 10 years, or until replaced by a newer certificate.</p></details>
          <details><summary>Who can produce a Commercial EPC?<span>+</span></summary><p>The assessment must be completed by an appropriately qualified and accredited Non-Domestic Energy Assessor.</p></details>
          <details><summary>Do you assess Manchester warehouses?<span>+</span></summary><p>Yes. Our in-house team assesses warehouses, distribution units, storage facilities and other industrial properties across Greater Manchester.</p></details>
          <details><summary>Do you cover Trafford Park?<span>+</span></summary><p>Yes. We cover warehouses, manufacturing premises, trade units and other commercial buildings throughout Trafford Park.</p></details>
          <details><summary>Do you cover Salford and MediaCity?<span>+</span></summary><p>Yes. Coverage includes Salford, Salford Quays, MediaCity and surrounding commercial areas.</p></details>
          <details><summary>Can you assess shops and offices?<span>+</span></summary><p>Yes. Our in-house assessors cover individual offices, office buildings, shops, retail units, restaurants and other commercial premises.</p></details>
          <details><summary>What information helps with a quotation?<span>+</span></summary><p>The address, approximate floor area, property type, current use, number of floors, available plans and required timescale are all helpful.</p></details>
          <details><summary>Can you coordinate several properties?<span>+</span></summary><p>Yes. Send us the addresses and available property information and we can review a Manchester or regional portfolio.</p></details>
        </div>
      </section>

      <footer><a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial energy assessments, made simple.</p><div className="footer-links"><a href="/">Home</a><a href="#manchester-services">Services</a><a href="#manchester-faq">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="#manchester-quote">Get a quote</a></div><SocialLinks /><small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small></footer>
    </main>
  );
}
