import QuoteForm from "./quote-form";
import SiteNav from "./site-nav";
import SocialLinks from "./social-links";
import IndustryLogos from "./industry-logos";

const benefits = [
  ["Nationwide", "Our in-house assessors across the UK"],
  ["Fixed price", "A clear quote with no hidden extras"],
  ["Direct support", "One team from booking to certificate"],
];

const services = [
  ["Offices", "From single floors to multi-let buildings"],
  ["Retail", "High street units, shops and showrooms"],
  ["Industrial", "Warehouses, workshops and trade units"],
  ["Hospitality", "Hotels, pubs, restaurants and leisure"],
];

export default function Home() {
  return (
    <main>
      <SiteNav quoteHref="#quote" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> Commercial energy certificates, sorted.</div>
          <h1>Your commercial EPC.<br/><em>Without the runaround.</em></h1>
          <p className="hero-intro">Fast, fixed-price commercial energy assessments delivered directly by our own accredited, in-house team.</p>
          <div className="hero-actions">
            <a className="button" href="#quote">Get your instant quote <span>→</span></a>
            <a className="text-link" href="#process">See how it works <span>↓</span></a>
          </div>
          <div className="trust-row" aria-label="Service highlights">
            <div className="stars" aria-label="Five star service">★★★★★</div>
            <span>Trusted by landlords, agents and businesses</span>
          </div>
        </div>

        <aside className="hero-card" aria-label="Commercial EPC quote preview">
          <div className="card-top">
            <span>COMMERCIAL EPC</span>
            <span className="status"><i></i> Taking bookings</span>
          </div>
          <div className="certificate-graphic" aria-hidden="true">
            <div className="energy-bars">
              <i className="a">A</i><i className="b">B</i><i className="c">C</i><i className="d">D</i><i className="e">E</i><i className="f">F</i><i className="g">G</i>
            </div>
            <div className="rating-panel">
              <small>YOUR ASSESSMENT</small>
              <strong>Simple.</strong>
              <strong>Clear.</strong>
              <strong>Complete.</strong>
            </div>
          </div>
          <div className="card-footer">
            <div><small>01</small><strong>Tell us about the property</strong></div>
            <span>About 60 seconds</span>
          </div>
        </aside>
      </section>

      <section className="benefit-strip">
        {benefits.map(([title, copy], index) => (
          <div className="benefit" key={title}>
            <span>0{index + 1}</span><div><strong>{title}</strong><p>{copy}</p></div>
          </div>
        ))}
      </section>

      <IndustryLogos />

      <section className="section services" id="services">
        <div className="section-heading">
          <div><span className="kicker">Built for business</span><h2>Every kind of commercial space.</h2></div>
          <p>Whether you manage one shop or a national portfolio, your assessment is handled by our own appropriately qualified in-house team from start to finish.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, copy], index) => (
            <article className="service-card" key={title}>
              <span className="service-number">0{index + 1}</span>
              <div className={`building building-${index + 1}`} aria-hidden="true"><i></i><i></i><i></i><i></i></div>
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-copy">
          <span className="kicker light">Refreshingly straightforward</span>
          <h2>From quote to certificate in three clear steps.</h2>
          <p>No chasing different suppliers. No unclear fees. Just one team taking care of the details.</p>
          <a className="button button-light" href="#quote">Start your quote <span>→</span></a>
        </div>
        <ol className="steps">
          <li><span>01</span><div><h3>Share your property</h3><p>Answer a few quick questions so we can price the right assessment.</p></div></li>
          <li><span>02</span><div><h3>Book your visit</h3><p>Choose a convenient time for one of our accredited in-house assessors to visit.</p></div></li>
          <li><span>03</span><div><h3>Receive your EPC</h3><p>We send your completed digital certificate straight to your inbox.</p></div></li>
        </ol>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-copy">
          <span className="kicker">Your quote starts here</span>
          <h2>Tell us about your property.</h2>
          <p>It takes about a minute. We’ll use these details to prepare a clear, no-obligation quote.</p>
          <div className="quote-promise"><span>✓</span><div><strong>No hidden extras</strong><p>The price we agree is the price you pay.</p></div></div>
          <div className="quote-promise"><span>✓</span><div><strong>Friendly human support</strong><p>Real help whenever you need it.</p></div></div>
        </div>
        <QuoteForm />
      </section>

      <section className="section faq" id="faq">
        <div className="faq-title"><span className="kicker">Good to know</span><h2>Common questions, clear answers.</h2></div>
        <div className="faq-list">
          <details><summary>What is a commercial EPC?<span>+</span></summary><p>A commercial Energy Performance Certificate shows how energy efficient a non-domestic property is and includes recommendations for improvement.</p></details>
          <details><summary>When might I need one?<span>+</span></summary><p>An EPC is commonly needed when a commercial property is built, sold or let. Some properties may be exempt, so we’ll help you establish what applies.</p></details>
          <details><summary>What happens during the assessment?<span>+</span></summary><p>The assessor surveys features such as the building fabric, heating, cooling, lighting and ventilation before producing the rating.</p></details>
          <details><summary>Can you help with multiple properties?<span>+</span></summary><p>Yes. We can coordinate assessments across a portfolio and give you one clear point of contact throughout.</p></details>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
        <p>Commercial energy assessments, made simple.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#faq">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="/commercial-epc-york">Commercial EPC York</a><a href="#quote">Get a quote</a></div>
        <SocialLinks />
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
