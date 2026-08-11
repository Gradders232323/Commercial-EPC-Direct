import type { Metadata } from "next";
import QuoteForm from "../quote-form";

export const metadata: Metadata = {
  title: "Commercial EPC York | Local Accredited Assessors",
  description: "Book a commercial EPC in York with a clear fixed-price quote and an accredited local assessor. Offices, shops, warehouses and hospitality properties covered.",
  alternates: { canonical: "/commercial-epc-york" },
  openGraph: {
    title: "Commercial EPC York | Commercial EPC Direct",
    description: "Local assessors. Straightforward service.",
    url: "https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/commercial-epc-york",
    images: [{ url: "https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/og.png", width: 1731, height: 909, alt: "Commercial EPC York — local assessors, straightforward service" }],
  },
  twitter: { card: "summary_large_image", images: ["https://commercial-epc-direct.gradwell-gro-3352.chatgpt.site/og.png"] },
};

const areas = ["York city centre", "Clifton Moor", "Monks Cross", "Layerthorpe", "Fulford", "Heslington", "Acomb", "Poppleton"];

export default function CommercialEpcYork() {
  return (
    <main className="location-page">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Commercial EPC Direct home">
          <span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span>Commercial EPC <b>Direct</b></span>
        </a>
        <div className="nav-links">
          <a href="#york-service">York service</a>
          <a href="#areas">Areas covered</a>
          <a href="#york-faq">FAQs</a>
        </div>
        <a className="button button-small" href="#york-quote">Get a quote <span>→</span></a>
      </nav>

      <section className="location-hero" id="top">
        <div className="location-hero-copy">
          <div className="breadcrumb"><a href="/">Home</a><span>/</span>Commercial EPC York</div>
          <div className="eyebrow"><span></span> Commercial EPC services in York</div>
          <h1>Commercial EPC<br/><em>York.</em></h1>
          <p className="hero-intro">A clear quote, a local accredited assessor and one helpful team from booking to certificate.</p>
          <div className="hero-actions">
            <a className="button" href="#york-quote">Get a York EPC quote <span>→</span></a>
            <a className="text-link" href="#york-service">Explore the service <span>↓</span></a>
          </div>
          <div className="location-proof"><span>✓</span> Offices, shops, warehouses and hospitality properties covered</div>
        </div>

        <aside className="york-card" aria-label="Commercial EPC service coverage in York">
          <div className="york-card-head"><span>LOCAL COVERAGE</span><b>YORK</b></div>
          <div className="york-map" aria-hidden="true">
            <div className="map-grid"></div>
            <span className="map-ring ring-one"></span><span className="map-ring ring-two"></span>
            <span className="map-pin"><i></i></span>
            <div className="map-label"><small>COMMERCIAL EPC</small><strong>York</strong><span>Local assessor network</span></div>
            <div className="map-road road-one"></div><div className="map-road road-two"></div><div className="map-road road-three"></div>
          </div>
          <div className="york-card-foot"><span><i></i> Appointments available</span><a href="#york-quote">Check your postcode →</a></div>
        </aside>
      </section>

      <section className="benefit-strip location-benefits">
        <div className="benefit"><span>01</span><div><strong>York coverage</strong><p>Assessors working across the city</p></div></div>
        <div className="benefit"><span>02</span><div><strong>Fixed-price quote</strong><p>Clear costs before you book</p></div></div>
        <div className="benefit"><span>03</span><div><strong>Accredited assessors</strong><p>The right expertise for your property</p></div></div>
      </section>

      <section className="section york-service" id="york-service">
        <div className="section-heading">
          <div><span className="kicker">Local when it matters</span><h2>A simpler way to arrange your commercial EPC in York.</h2></div>
          <p>From independent shops inside the city walls to offices, hotels and larger units on York’s business parks, we organise the right assessment without the usual back and forth.</p>
        </div>
        <div className="york-service-grid">
          <article><span>01</span><h3>One clear quote</h3><p>Share the property details and we’ll give you a straightforward, no-obligation price.</p></article>
          <article><span>02</span><h3>A convenient visit</h3><p>We coordinate an appointment with an accredited assessor working in the York area.</p></article>
          <article><span>03</span><h3>Your digital certificate</h3><p>Once complete, your commercial EPC is sent directly to your inbox.</p></article>
        </div>
      </section>

      <section className="york-areas" id="areas">
        <div className="areas-copy">
          <span className="kicker light">Across the city</span>
          <h2>Covering York’s commercial districts and surrounding neighbourhoods.</h2>
          <p>Not sure whether your property is in range? Send us the postcode and we’ll confirm coverage in your quote.</p>
          <a className="button button-light" href="#york-quote">Check your property <span>→</span></a>
        </div>
        <div className="area-list">
          {areas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong><i>↗</i></div>)}
        </div>
      </section>

      <section className="section property-types">
        <div className="compact-heading"><span className="kicker">Commercial property expertise</span><h2>The right assessment for the space.</h2></div>
        <div className="type-row">
          <article><span>OFFICE</span><h3>Offices &amp; workspaces</h3><p>Single floors, managed offices and multi-let buildings.</p></article>
          <article><span>RETAIL</span><h3>Shops &amp; showrooms</h3><p>City-centre units, retail parks and larger stores.</p></article>
          <article><span>INDUSTRIAL</span><h3>Warehouses &amp; units</h3><p>Industrial, trade and storage properties of all scales.</p></article>
          <article><span>HOSPITALITY</span><h3>Hotels &amp; leisure</h3><p>Hotels, restaurants, pubs and visitor spaces.</p></article>
        </div>
      </section>

      <section className="quote-section york-quote" id="york-quote">
        <div className="quote-copy">
          <span className="kicker">Your York quote starts here</span>
          <h2>Tell us about the property.</h2>
          <p>It takes about a minute. We’ll use these details to prepare your clear, no-obligation commercial EPC quote.</p>
          <div className="quote-promise"><span>✓</span><div><strong>No hidden extras</strong><p>Know the cost before you book.</p></div></div>
          <div className="quote-promise"><span>✓</span><div><strong>Local coordination</strong><p>We handle the visit from start to finish.</p></div></div>
        </div>
        <QuoteForm postcodePlaceholder="e.g. YO1 7HD" />
      </section>

      <section className="section faq" id="york-faq">
        <div className="faq-title"><span className="kicker">Commercial EPC York FAQs</span><h2>Useful answers before you book.</h2></div>
        <div className="faq-list">
          <details><summary>How much does a commercial EPC cost in York?<span>+</span></summary><p>The price depends on the size, layout and complexity of the property. Share a few details and we’ll provide a clear fixed-price quote before you commit.</p></details>
          <details><summary>How quickly can an assessor visit?<span>+</span></summary><p>Availability varies by location and property type. We’ll offer the earliest suitable appointment when we respond to your enquiry.</p></details>
          <details><summary>What should I have ready for the assessment?<span>+</span></summary><p>Any plans, previous EPCs and information about heating, cooling or recent improvements can be helpful, but we’ll explain exactly what is needed.</p></details>
          <details><summary>Do you cover areas outside central York?<span>+</span></summary><p>Yes. Our assessor network covers the wider York area and nearby towns. Send us the property postcode and we’ll confirm the right local availability.</p></details>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
        <p>Commercial energy assessments, made simple.</p>
        <div className="footer-links"><a href="/">Home</a><a href="#york-service">York service</a><a href="#areas">Areas covered</a><a href="#york-faq">FAQs</a><a href="#york-quote">Get a quote</a></div>
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
