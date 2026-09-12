import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import IndustryLogos from "../industry-logos";

export const metadata: Metadata = {
  title: "Commercial EPC Leeds | Local Commercial EPC Assessors",
  description: "Need a Commercial EPC in Leeds? Arrange an accredited commercial energy assessment for offices, shops, warehouses, industrial units and other non-domestic property.",
  alternates: { canonical: "/commercial-epc-leeds" },
  openGraph: { title: "Commercial EPC Leeds | Local Commercial EPC Assessors", description: "Commercial energy assessments across Leeds and West Yorkshire.", url: "https://www.commercialepcdirect.co.uk/commercial-epc-leeds", images: [{ url: "https://www.commercialepcdirect.co.uk/og.png", width: 1731, height: 909, alt: "Commercial EPC Direct" }] },
  twitter: { card: "summary_large_image", images: ["https://www.commercialepcdirect.co.uk/og.png"] },
};

const propertyTypes = ["Offices and office buildings", "Retail shops and parade units", "Warehouses", "Industrial units", "Workshops", "Business units", "Restaurants and cafÃ©s", "Pubs and hospitality premises", "Storage facilities", "Trade counters", "Mixed-use developments", "Larger commercial buildings"];
const assessmentFactors = ["Building construction", "Floor area and layout", "Heating systems", "Cooling and ventilation", "Lighting", "Windows and glazing", "Insulation", "Hot water systems", "Building controls"];
const areas = ["Leeds city centre", "Holbeck", "Hunslet", "Stourton", "Cross Green", "Beeston", "Wortley", "Armley", "Kirkstall", "Headingley", "Hyde Park", "Chapel Allerton", "Roundhay", "Harehills", "Seacroft", "Cross Gates", "Garforth", "Rothwell", "Morley", "Pudsey", "Horsforth", "Yeadon", "West Yorkshire", "Surrounding areas"];
const cityCentreAreas = ["Wellington Place", "Wellington Street", "Park Row", "East Parade", "The Headrow", "Briggate", "Boar Lane", "Call Lane", "New Station Street", "Great George Street", "Queen Street", "Holbeck", "Leeds Dock", "South Bank"];
const sectorDetails = [
  { number: "01", title: "Leeds offices", copy: "From individual suites and converted offices to multi-storey buildings, business centres and mixed office-and-retail developments across the traditional business district, Wellington Place, Holbeck and South Bank.", items: ["Individual offices", "Office suites", "Business centres", "Multi-storey offices"] },
  { number: "02", title: "Shops and retail", copy: "Assessments for high-street shops, retail units, showrooms, restaurants, cafÃ©s and other customer-facing premises across central Leeds and suburban commercial centres.", items: ["High-street shops", "Retail units", "Showrooms", "Restaurants and cafÃ©s"] },
  { number: "03", title: "Warehouses", copy: "Commercial EPCs for warehouse, logistics, distribution and storage properties around southern and eastern Leeds, including the M621 corridor.", items: ["Distribution units", "Storage facilities", "Warehouse and office units", "Trade counters"] },
  { number: "04", title: "Industrial property", copy: "Support for light industrial units, manufacturing premises, workshops, engineering units and standalone buildings on Leeds business parks and industrial estates.", items: ["Manufacturing premises", "Workshops", "Engineering units", "Industrial estates"] },
];
const audiences = [
  ["Commercial landlords", "Arrange EPC sessments before marketing or reletting commercial premises."],
  ["Property managers", "Manage EPC requirements across individual buildings or wider portfolio."],
  ["Commercial agents", "Arrange certificates for properties being prepared for sale or lease."],
  ["Solicitors & professionals", "Obtain EPC documentation for commercial property transactions."],
  ["Developers & contractors", "Arrange assessments for new or refurbished commercial buildings where applicable."],
];
const leedsFormIntegration = {
  accessKey: "6062d364-f875-4e54-8ed9-0d719963a903",
  businessKey: "commercial_epc",
  formId: "leeds_commercial_epc_quote",
  city: "Leeds",
} as const;

export default function CommercialEpcLeeds() {
  return (
    <main className="location-page leeds-page">
      <SiteNav quoteHref="#leeds-top-enquiry" />
      <section className="location-hero" id="top">
        <div className="location-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations">Locations</a><span>/</span>Commercial EPC Leeds</div>
          <div className="eyebrow"><span></span> Commercial energy assessors in Leeds</div>
          <h1>Commercial EPC<br/><em>Leeds.</em></h1>
          <p className="hero-intro">Need a Commercial EPC in Leeds? Commercial EPC Direct provides professional Commercial Energy Performance Certificate assessments for offices, shops, warehouses, industrial units and other non-domestic properties across Leeds and West Yorkshire.</p>
          <div className="hero-actions"><a className="button" href="#leeds-top-enquiry">Get your Leeds EPC quote <span>â</span></a><a className="text-link" href="#leeds-services">View the service <span>â</span></a></div>
          <div className="location-proof"><span>â</span> Our accredited in-house assessors across Leeds and West Yorkshire</div>
        </div>
        <aside className="york-card" aria-label="Commercial EPC service coverage in Leeds">
          <div className="york-card-head"><span>LOCAL COVERAGE</span><b>LEEDS</b></div>
          <div className="york-map" aria-hidden="true"><div className="map-grid"></div><span className="map-ring ring-one"></span><span className="map-ring ring-two"></span><span className="map-pin"><i></i></span><div className="map-label"><small>COMMERCIAL EPC</small><strong>Leeds</strong><span>Our in-house assessor team</span></div><div className="map-road road-one"></div><div className="map-road road-two"></div><div className="map-road road-three"></div></div>
          <div className="york-card-foot"><span><i></i> Appointments available</span><a href="#leeds-top-enquiry">Request a quote â</a></div>
        </aside>
      </section>
      <section className="benefit-strip location-benefits">
        <div className="benefit"><span>01</span><div><strong>Leeds coverage</strong><p>Across the city and surrounding area</p></div></div>
        <div className="benefit"><span>02</span><div><strong>Property-specific quotes</strong><p>Based on size and complexity</p></div></div>
        <div className="benefit"><span>03</span><div><strong>In-house assessors</strong><p>Our accredited commercial specialists</p></div></div>
      </section>
      <IndustryLogos />
      <section className="quote-section enquiry-placement top-enquiry" id="leeds-top-enquiry">
        <div className="quote-copy"><span className="kicker">Quick Leeds EPC enquiry</span><h2>Get a quote for your property.</h2><p>Share the address, property type and approximate floor area. Weâll confirm the assessment and prepare a clear quotation.</p><div className="quote-promise"><span>â</span><div><strong>Fast response</strong><p>Clear next steps from our team.</p></div></div><div className="quote-promise"><span>â</span><div><strong>No obligation</strong><p>Review your quote before booking.</p></div></div></div>
        <QuoteForm {...leedsFormIntegration} postcodePlaceholder="e.g. LS1 4AP" formLabel="Leeds property details" buttonLabel="Get my EPC quote" sourceLabel="Commercial EPC Leeds â top form" />
      </section>
      <section className="section york-introduction">
        <span className="kicker">Commercial energy performance certificate Leeds</span>
        <div className="introduction-grid"><h2>Your commercial EPC, handled from enquiry to certificate.</h2><div><p>A Commercial EPC records the energy efficiency of a non-domestic building on a scale from A+ to G and includes recommendations for potential improvements.</p><p>Whether you are selling, letting, developing or managing a commercial property, the work is completed directly by our own accredited in-house assessors.</p><a className="inline-arrow" href="#leeds-top-enquiry">Request a Leeds quote <span>â</span></a></div></div>
      </section>
      <section className="epc-services" id="leeds-services">
        <div className="services-copy"><span className="kicker light">Commercial EPC services across Leeds</span><h2>Assessments for a varied commercial property market.</h2><p>Leeds contains everything from modern city-centre offices and traditional retail units to converted buildings, business parks, warehouses and large industrial properties.</p><p>Commercial EPCs are commonly required when an applicable non-domestic building is constructed, sold or let. An appropriately qualified member of our in-house team completes the work, with one point of contact throughout.</p></div>
        <div className="property-checklist">{propertyTypes.map((type, index) => <div key={type}><span>{String(index + 1).padStart(2, "0")}</span><strong>{type}</strong><i>â</i></div>)}</div>
      </section>

      <section className="section leeds-city-centre">
        <div className="leeds-city-copy"><span className="kicker">Commercial EPC assessments in Leeds city centre</span><h2>Central Leeds buildings, from single units to complex developments.</h2><p>Leeds city centre combines modern commercial developments with older buildings that have been refurbished, converted or divided into multiple commercial units. Assessments can range from individual shops and office suites to substantially larger office buildings.</p><p>Send us the address, approximate floor area and building type and weâll prepare a property-specific quotation.</p><a className="inline-arrow" href="#leeds-mid-enquiry">Request a city-centre quote <span>â</span></a></div>
        <div className="leeds-district-grid">{cityCentreAreas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong></div>)}</div>
      </section>

      <section className="leeds-sector-section">
        <div className="leeds-sector-heading"><span className="kicker light">Commercial property expertise</span><h2>Offices, retail, warehouse and industrial EPCs.</h2><p>The building use, construction and installed services all affect the scope of a commercial assessment. Our Leeds service accommodates straightforward units and larger mixed-use buildings.</p></div>
        <div className="leeds-sector-grid">{sectorDetails.map(sector => <article key={sector.title}><span>{sector.number}</span><h3>{sector.title}</h3><p>{sector.copy}</p><ul>{sector.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>
      <section className="assessment-section">
        <div className="assessment-heading"><span className="kicker light">Commercial EPC assessors in Leeds</span><h2>A thorough inspection, completed correctly.</h2><p>The assessor gathers the information needed to model the buildingâs energy performance using the approved commercial EPC methodology.</p></div>
        <div className="factor-grid">{assessmentFactors.map((factor, index) => <div key={factor}><span>{String(index + 1).padStart(2, "0")}</span><strong>{factor}</strong></div>)}</div>
        <p className="method-note">The scope and price depend on the buildingâs size, construction, services and complexity. Send us the property details for an accurate quotation.</p>
      </section>

      <section className="section leeds-compliance-section">
        <div className="leeds-compliance-heading"><span className="kicker">Commercial EPC requirements</span><h2>Understand the certificate, rating and letting requirements.</h2><p>Requirements depend on the particular building and circumstances, and exemptions can apply. Where there is uncertainty, obtain appropriate professional or legal advice.</p></div>
        <div className="leeds-compliance-grid">
          <article><span>01</span><h3>When might an EPC be needed?</h3><p>An EPC is generally required when an applicable non-domestic building is constructed, sold or let to a new tenant, subject to the relevant exemptions.</p><ul><li>New construction</li><li>Commercial sale</li><li>New letting</li></ul></article>
          <article><span>02</span><h3>How long does it last?</h3><p>A Commercial EPC is normally valid for 10 years, or until it is replaced by a newer certificate. Existing certificates can be checked on the official government register.</p><a href="https://www.gov.uk/find-energy-certificate" target="_blank" rel="noreferrer">Check the EPC register â</a></article>
          <article><span>03</span><h3>Ratings and MEES</h3><p>Commercial EPCs use an A+ to G scale. Privately rented non-domestic properties covered by MEES generally need an E rating or above unless a valid exemption applies.</p><a href="https://www.gov.uk/guidance/non-domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance" target="_blank" rel="noreferrer">Read government guidance â</a></article>
        </div>
      </section>

      <section className="leeds-process-section">
        <div><span className="kicker light">How to get a Commercial EPC in Leeds</span><h2>Four straightforward steps.</h2><p>For larger buildings, floor plans and existing property information can help us establish the scope more quickly.</p></div>
        <ol>
          <li><span>01</span><div><h3>Send the property details</h3><p>Provide the address, approximate floor area, building type, current use and required timescale.</p></div></li>
          <li><span>02</span><div><h3>Receive your EPC quote</h3><p>We review the information and provide a quotation based on the building and assessment requirements.</p></div></li>
          <li><span>03</span><div><h3>Arrange site access</h3><p>Once instructed, access is coordinated for the Non-Domestic Energy Assessor to inspect the property.</p></div></li>
          <li><span>04</span><div><h3>Assessment and lodgement</h3><p>The collected information is used to complete the energy assessment and produce the EPC for lodgement where required.</p></div></li>
        </ol>
      </section>
      <section className="quote-section enquiry-placement middle-enquiry" id="leeds-mid-enquiry">
        <div className="quote-copy"><span className="kicker">Working to a deadline?</span><h2>Tell us when you need it.</h2><p>If the EPC is required for a sale, new lease or other deadline, include the date with your enquiry and weâll advise on availability.</p><div className="quote-promise"><span>â</span><div><strong>Property-specific price</strong><p>Based on the building and scope.</p></div></div><div className="quote-promise"><span>â</span><div><strong>Deadline support</strong><p>Availability confirmed clearly.</p></div></div></div>
        <QuoteForm {...leedsFormIntegration} postcodePlaceholder="e.g. LS1 4AP" formLabel="Assessment enquiry" buttonLabel="Request availability" sourceLabel="Commercial EPC Leeds â middle form" />
      </section>
      <section className="professional-section">
        <div className="professional-heading"><span className="kicker light">For landlords and property professionals</span><h2>One Leeds property or an entire portfolio.</h2><p>We support individual owners and organisations responsible for multiple commercial buildings.</p></div>
        <div className="audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="york-areas" id="leeds-areas">
        <div className="areas-copy"><span className="kicker light">Commercial EPC coverage across Leeds</span><h2>City-wide coverage, with support across West Yorkshire.</h2><p>From city-centre offices and retail premises to warehouses near Hunslet, Stourton, Cross Green and the M621 corridor, our team completes assessments throughout the Leeds commercial property market.</p><p>Our service suits single-property owners as well as landlords, investors and agents responsible for portfolios across multiple locations.</p><div className="why-choose"><strong>Why choose Commercial EPC Direct?</strong><ul><li>Our own accredited in-house assessors</li><li>No freelance assessor network</li><li>Clear property-specific quotations</li><li>Single and portfolio instructions</li></ul></div><a className="button button-light" href="#leeds-quote">Check your property <span>â</span></a></div>
        <div className="area-list">{areas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong><i>â</i></div>)}</div>
      </section>
      <section className="quote-section york-quote" id="leeds-quote">
        <div className="quote-copy"><span className="kicker">Get a Commercial EPC quote in Leeds</span><h2>Tell us about your property.</h2><p>Send the address, approximate floor area and property type, and weâll prepare a quotation for the assessment.</p><div className="quote-promise"><span>â</span><div><strong>Accurate quotation</strong><p>Based on the property and scope.</p></div></div><div className="quote-promise"><span>â</span><div><strong>Professional support</strong><p>For straightforward and complex buildings.</p></div></div></div>
        <QuoteForm {...leedsFormIntegration} postcodePlaceholder="e.g. LS1 4AP" sourceLabel="Commercial EPC Leeds â bottom form" />
      </section>
      <section className="section faq" id="leeds-faq">
        <div className="faq-title"><span className="kicker">Commercial EPC Leeds FAQs</span><h2>Useful answers before you book.</h2></div>
        <div className="faq-list">
          <details><summary>How long is a Commercial EPC valid for?<span>+</span></summary><p>A Commercial EPC is generally valid for 10 years, although a new assessment can be commissioned earlier.</p></details>
          <details><summary>What properties can you assess in Leeds?<span>+</span></summary><p>Our in-house team assesses offices, shops, warehouses, industrial units, hospitality premises and many other non-domestic buildings.</p></details>
          <details><summary>How much does a Commercial EPC cost in Leeds?<span>+</span></summary><p>The price depends on the buildingâs size, layout, services and complexity. Send us the address and basic property information for a tailored quote.</p></details>
          <details><summary>How quickly can an assessment be arranged?<span>+</span></summary><p>Availability varies, but we will confirm the likely appointment and turnaround when quoting. Tell us if you are working towards a deadline.</p></details>
          <details><summary>What details do you need for a quote?<span>+</span></summary><p>The address, approximate floor area, property type and reason the EPC is required will help us price the work accurately.</p></details>
          <details><summary>Who can produce a Commercial EPC?<span>+</span></summary><p>The assessment must be completed by an appropriately qualified and accredited Non-Domestic Energy Assessor.</p></details>
          <details><summary>Can you assess warehouses in Leeds?<span>+</span></summary><p>Yes. Our in-house team completes Commercial EPC assessments for warehouses, distribution units, storage facilities and other industrial properties throughout Leeds.</p></details>
          <details><summary>Do you cover Hunslet, Stourton and Cross Green?<span>+</span></summary><p>Yes. Our Leeds coverage includes these major commercial and industrial areas as well as Holbeck, Beeston, Wortley and other districts.</p></details>
          <details><summary>Can you provide an EPC for a Leeds office?<span>+</span></summary><p>Yes. Our in-house assessors cover individual offices, office suites, business centres and larger office buildings throughout Leeds.</p></details>
          <details><summary>Can you coordinate several properties?<span>+</span></summary><p>Yes. Send us the addresses and available property information and we can review the requirements for a commercial portfolio.</p></details>
          <details><summary>Do you cover areas outside Leeds?<span>+</span></summary><p>Yes. Coverage is available across West Yorkshire and beyond. Send the postcode and weâll confirm availability.</p></details>
        </div>
      </section>
      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial energy assessments, made simple.</p>
        <div className="footer-links"><a href="/">Home</a><a href="#leeds-services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="#leeds-quote">Get a quote</a></div>
        <SocialLinks />
        <small>Â© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
