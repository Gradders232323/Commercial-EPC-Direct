import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import IndustryLogos from "../industry-logos";

export const metadata: Metadata = {
  title: "Commercial EPC York | Fast Commercial EPC Certificates",
  description: "Need a Commercial EPC in York? Our accredited commercial energy assessors provide fast, professional EPC surveys for offices, shops, warehouses and commercial properties.",
  alternates: { canonical: "/commercial-epc-york" },
  openGraph: {
    title: "Commercial EPC York | Fast Commercial EPC Certificates",
    description: "Local assessors. Straightforward service.",
    url: "https://www.commercialepcdirect.co.uk/commercial-epc-york",
    images: [{ url: "https://www.commercialepcdirect.co.uk/og.png", width: 1731, height: 909, alt: "Commercial EPC York — local assessors, straightforward service" }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.commercialepcdirect.co.uk/og.png"] },
};

const propertyTypes = ["Offices", "Retail units and shops", "Warehouses", "Industrial units", "Restaurants and cafés", "Hotels and guest accommodation", "Healthcare premises", "Commercial developments", "Mixed-use buildings", "Other non-domestic properties"];
const assessmentFactors = ["Building construction", "Floor area and layout", "Heating systems", "Cooling and ventilation", "Lighting", "Windows and glazing", "Insulation", "Hot water systems", "Building controls"];
const areas = ["York city centre", "Clifton", "Fulford", "Holgate", "Acomb", "Huntington", "Haxby", "Rawcliffe", "Heworth", "Osbaldwick", "Bishopthorpe", "North Yorkshire"];
const audiences = [
  ["Commercial landlords", "Arrange EPC assessments before marketing or reletting commercial premises."],
  ["Property managers", "Manage EPC requirements across individual buildings or property portfolios."],
  ["Commercial agents", "Arrange certificates for properties being prepared for sale or lease."],
  ["Solicitors & professionals", "Obtain EPC documentation for commercial property transactions."],
  ["Developers & contractors", "Arrange assessments for new or refurbished commercial buildings where applicable."],
];

export default function CommercialEpcYork() {
  return (
    <main className="location-page">
      <SiteNav quoteHref="#top-enquiry" />

      <section className="location-hero" id="top">
        <div className="location-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>/</span>Commercial EPC York</div>
          <div className="eyebrow"><span></span> Commercial energy assessors in York</div>
          <h1>Commercial EPC<br/><em>York.</em></h1>
          <p className="hero-intro">Need a Commercial EPC in York? Commercial EPC Direct provides professional Energy Performance Certificates for commercial and non-domestic properties throughout York and the surrounding area.</p>
          <div className="hero-actions"><a className="button" href="#top-enquiry">Get your York EPC quote <span>→</span></a><a className="text-link" href="#services">View our service <span>↓</span></a></div>
          <div className="location-proof"><span>✓</span> Delivered directly by our accredited in-house assessors</div>
        </div>

        <aside className="york-card" aria-label="Commercial EPC service coverage in York">
          <div className="york-card-head"><span>LOCAL COVERAGE</span><b>YORK</b></div>
          <div className="york-map" aria-hidden="true">
            <div className="map-grid"></div><span className="map-ring ring-one"></span><span className="map-ring ring-two"></span><span className="map-pin"><i></i></span>
            <div className="map-label"><small>COMMERCIAL EPC</small><strong>York</strong><span>Our in-house assessor team</span></div>
            <div className="map-road road-one"></div><div className="map-road road-two"></div><div className="map-road road-three"></div>
          </div>
          <div className="york-card-foot"><span><i></i> Appointments available</span><a href="#top-enquiry">Request a quote →</a></div>
        </aside>
      </section>

      <section className="benefit-strip location-benefits">
        <div className="benefit"><span>01</span><div><strong>York coverage</strong><p>Across the city and surrounding area</p></div></div>
        <div className="benefit"><span>02</span><div><strong>Competitive quotes</strong><p>Priced for your specific property</p></div></div>
        <div className="benefit"><span>03</span><div><strong>In-house assessors</strong><p>Our accredited commercial specialists</p></div></div>
      </section>

      <IndustryLogos />

      <section className="quote-section enquiry-placement top-enquiry" id="top-enquiry">
        <div className="quote-copy"><span className="kicker">Quick York EPC enquiry</span><h2>Get a quote for your property.</h2><p>Share a few basic details and we’ll prepare a quotation for your Commercial EPC assessment.</p><div className="quote-promise"><span>✓</span><div><strong>Fast response</strong><p>Clear next steps from our team.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>No obligation</strong><p>Review your quote before you book.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. YO1 7HD" formLabel="York property details" buttonLabel="Get my EPC quote" sourceLabel="Commercial EPC York — top form" />
      </section>

      <section className="section york-introduction">
        <span className="kicker">Commercial energy performance certificate York</span>
        <div className="introduction-grid"><h2>The certificate you need, handled from start to finish.</h2><div><p>Whether you’re selling or letting a commercial property, renewing an existing EPC or need advice on your building’s energy rating, our own commercial energy assessors complete the assessment and provide the required EPC certificate.</p><p>We do not pass instructions to a freelance network. Tell us about your property and our in-house team will provide a quotation for your Commercial EPC in York.</p><a className="inline-arrow" href="#top-enquiry">Get a quote today <span>→</span></a></div></div>
      </section>

      <section className="epc-services" id="services">
        <div className="services-copy">
          <span className="kicker light">Commercial EPC services in York</span>
          <h2>Energy assessments for every kind of non-domestic property.</h2>
          <p>A Commercial Energy Performance Certificate provides an energy efficiency rating for a non-domestic building from A+ to G.</p>
          <p>Commercial EPCs are commonly required when a commercial property is constructed, sold or let. The certificate also provides recommendations showing potential improvements that could increase the building’s energy efficiency.</p>
        </div>
        <div className="property-checklist">
          {propertyTypes.map((type, index) => <div key={type}><span>{String(index + 1).padStart(2, "0")}</span><strong>{type}</strong><i>✓</i></div>)}
        </div>
      </section>

      <section className="section requirement-section">
        <div className="requirement-card">
          <span className="kicker">Do I need a Commercial EPC in York?</span>
          <h2>A clear answer for your building.</h2>
          <p>In many circumstances, a valid EPC is required before a commercial property can be marketed for sale or rent.</p>
          <p>The exact requirements can depend on the building, how it is occupied and whether any exemptions apply.</p>
          <p>If you’re unsure whether your property requires an EPC, speak to our team and we can help establish what type of assessment is required.</p>
          <a className="button" href="#mid-enquiry">Ask about your property <span>→</span></a>
        </div>
        <div className="requirement-note" aria-hidden="true"><small>COMMERCIAL PROPERTY</small><div className="energy-scale"><i>A+</i><i>A</i><i>B</i><i>C</i><i>D</i><i>E</i><i>F</i><i>G</i></div><strong>Energy<br/>performance,<br/><em>made clear.</em></strong></div>
      </section>

      <section className="assessment-section" id="assessors">
        <div className="assessment-heading"><span className="kicker light">Commercial EPC assessors in York</span><h2>A thorough inspection, completed correctly.</h2><p>Our assessors visit commercial properties throughout York to gather the information needed to calculate the property’s energy performance.</p></div>
        <div className="factor-grid">{assessmentFactors.map((factor, index) => <div key={factor}><span>{String(index + 1).padStart(2, "0")}</span><strong>{factor}</strong></div>)}</div>
        <p className="method-note">Following the assessment, the building is modelled using approved commercial EPC methodology and the EPC is lodged where required.</p>
      </section>

      <section className="section practical-section">
        <div className="section-heading practical-heading"><div><span className="kicker">Planning your assessment</span><h2>Commercial EPC York cost and timescales.</h2></div><p>Every commercial building is different. We price the work around the property and help you plan around any sale, lease or other deadline.</p></div>
        <div className="practical-grid">
          <article><span>01 / COST</span><h3>How much does a Commercial EPC cost in York?</h3><p>The cost depends on the size and complexity of the building. A small retail unit or office will typically require less assessment work than a large warehouse, industrial building or multi-storey commercial property.</p><p>Send us the property address and basic building information for an accurate quotation.</p><a href="#mid-enquiry">Request your quote →</a></article>
          <article><span>02 / TIMING</span><h3>How long does a Commercial EPC take?</h3><p>Straightforward commercial buildings can usually be surveyed relatively quickly, while larger properties with multiple heating, cooling or ventilation systems can require a more detailed assessment.</p><p>If you’re working towards a deadline, tell us when requesting your quotation so we can advise on availability.</p><a href="#mid-enquiry">Tell us your deadline →</a></article>
        </div>
      </section>

      <section className="quote-section enquiry-placement middle-enquiry" id="mid-enquiry">
        <div className="quote-copy"><span className="kicker">Ready to arrange your assessment?</span><h2>Tell us what you need.</h2><p>Send the property details and let us know about any sale, lease or compliance deadline. We’ll confirm the right assessment and availability.</p><div className="quote-promise"><span>✓</span><div><strong>Property-specific price</strong><p>Based on size and complexity.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>Deadline support</strong><p>Tell us when you need it.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. YO1 7HD" formLabel="Assessment enquiry" buttonLabel="Request availability" sourceLabel="Commercial EPC York — middle form" />
      </section>

      <section className="professional-section">
        <div className="professional-heading"><span className="kicker light">Commercial EPCs for landlords and property professionals</span><h2>One property or an entire portfolio.</h2><p>We work with individual commercial property owners as well as organisations responsible for larger portfolios.</p></div>
        <div className="audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="york-areas" id="areas">
        <div className="areas-copy">
          <span className="kicker light">Commercial EPCs across York</span><h2>York-wide coverage, with support beyond the city.</h2>
          <p>We provide Commercial EPC assessments throughout York and surrounding North Yorkshire locations. If your property is outside York, send us the postcode and we can confirm coverage.</p>
          <div className="why-choose"><strong>Why choose Commercial EPC Direct?</strong><ul><li>Our own accredited in-house assessors</li><li>No freelance assessor network</li><li>Fast appointment availability</li><li>Support for complex commercial properties</li></ul></div>
          <a className="button button-light" href="#york-quote">Check your property <span>→</span></a>
        </div>
        <div className="area-list">{areas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong><i>↗</i></div>)}</div>
      </section>

      <section className="quote-section york-quote" id="york-quote">
        <div className="quote-copy"><span className="kicker">Get a Commercial EPC quote in York</span><h2>Tell us about your property.</h2><p>Send us the address, approximate floor area and property type, and we’ll provide a quotation for your assessment.</p><div className="quote-promise"><span>✓</span><div><strong>Accurate quotation</strong><p>Based on the property and scope.</p></div></div><div className="quote-promise"><span>✓</span><div><strong>Professional support</strong><p>For simple and complex buildings.</p></div></div></div>
        <QuoteForm postcodePlaceholder="e.g. YO1 7HD" sourceLabel="Commercial EPC York — bottom form" />
      </section>

      <section className="section faq" id="york-faq">
        <div className="faq-title"><span className="kicker">Commercial EPC York FAQs</span><h2>Useful answers before you book.</h2></div>
        <div className="faq-list">
          <details><summary>How long is a Commercial EPC valid for?<span>+</span></summary><p>A Commercial EPC is generally valid for 10 years, although a new assessment can be carried out earlier if required.</p></details>
          <details><summary>Can you provide an EPC for a shop in York?<span>+</span></summary><p>Yes. We can assess retail premises and other commercial properties throughout York.</p></details>
          <details><summary>Can you provide EPCs for offices?<span>+</span></summary><p>Yes. Commercial offices are one of the property types that can require a non-domestic EPC when being sold or let.</p></details>
          <details><summary>Can you assess warehouses and industrial units?<span>+</span></summary><p>Yes. Our in-house team completes EPC assessments for warehouses, industrial units and other larger commercial buildings.</p></details>
          <details><summary>What information do you need for a quote?<span>+</span></summary><p>The property address, approximate floor area, property type and reason the EPC is required will normally help us provide an accurate quotation.</p></details>
          <details><summary>Do you cover areas outside York?<span>+</span></summary><p>Yes. Coverage is available beyond York. Contact us with the property postcode to confirm availability.</p></details>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a><p>Commercial energy assessments, made simple.</p>
        <div className="footer-links"><a href="/">Home</a><a href="#services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="#york-quote">Get a quote</a></div>
        <SocialLinks />
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
