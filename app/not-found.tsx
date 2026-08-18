import SiteNav from "./site-nav";
import SocialLinks from "./social-links";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <SiteNav quoteHref="/#quote" />
      <section className="not-found-hero" aria-labelledby="not-found-title">
        <div className="not-found-mark" aria-hidden="true"><strong>404</strong><span></span><span></span><span></span></div>
        <div>
          <div className="eyebrow"><span></span>Page not found</div>
          <h1 id="not-found-title">This route has<br /><em>gone off-plan.</em></h1>
          <p>The page you’re looking for may have moved, or the address may be incorrect. Use one of the links below to get back to the right place.</p>
          <div className="not-found-actions"><a className="button" href="/">Back to homepage <span>→</span></a><a className="text-link" href="/services">Explore our services <span>→</span></a></div>
        </div>
      </section>
      <section className="not-found-links" aria-label="Helpful links">
        <a href="/locations"><span>01</span><strong>Find your location</strong><small>Commercial EPC coverage across the UK</small><i>→</i></a>
        <a href="/guides"><span>02</span><strong>Read our guides</strong><small>Practical property assessment advice</small><i>→</i></a>
        <a href="/#quote"><span>03</span><strong>Get a quote</strong><small>Tell us about your commercial property</small><i>→</i></a>
      </section>
      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
        <p>Commercial property assessments, made simple.</p>
        <div className="footer-links"><a href="/services">Services</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">Locations</a><a href="/sitemap">Sitemap</a><a href="/#quote">Get a quote</a></div>
        <SocialLinks />
        <small>© {new Date().getFullYear()} Commercial EPC Direct. All rights reserved.</small>
      </footer>
    </main>
  );
}
