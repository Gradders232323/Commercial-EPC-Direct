import type { Metadata } from "next";
import SiteNav from "../site-nav";
import SocialLinks from "../social-links";
import { services } from "../service-data";

export const metadata: Metadata = {
  title: "HTML Sitemap | Commercial EPC Direct",
  description: "Browse all Commercial EPC Direct services, guides and location pages.",
  alternates: { canonical: "/sitemap" },
};

const locations = [
  ["London", "commercial-epc-london"],
  ["Birmingham", "commercial-epc-birmingham"],
  ["Manchester", "commercial-epc-manchester"],
  ["Leeds", "commercial-epc-leeds"],
  ["York", "commercial-epc-york"],
  ["Bristol", "commercial-epc-bristol"],
] as const;

const corePages = [
  ["Home", "/"],
  ["Instant Quote & Booking", "/instant-quote-booking"],
  ["Services", "/services"],
  ["Guides", "/guides"],
  ["Locations", "/locations"],
  ["About Commercial EPC Direct", "/about"],
  ["Privacy notice", "/privacy"],
] as const;

function LinkList({ links }: { links: readonly (readonly [string, string])[] }) {
  return <ul className="html-sitemap-list">{links.map(([label, href]) => <li key={href}><a href={href}>{label}<span aria-hidden="true">→</span></a></li>)}</ul>;
}

export default function SitemapPage() {
  return (
    <main className="html-sitemap-page">
      <SiteNav quoteHref="/#quote" />
      <section className="html-sitemap-hero">
        <div className="eyebrow"><span></span>Browse Commercial EPC Direct</div>
        <h1>Site map.<br /><em>Find your route.</em></h1>
        <p>Explore our commercial property assessment services, practical guides and local coverage pages.</p>
      </section>
      <section className="section html-sitemap-content">
        <div className="section-heading"><div><span className="kicker">All pages</span><h2>Everything in one place.</h2></div><p>Choose a page below to learn about our in-house assessment team, services and coverage across the UK.</p></div>
        <div className="html-sitemap-grid">
          <section><h2>Core pages</h2><LinkList links={corePages} /></section>
          <section><h2>Services</h2><LinkList links={services.map(service => [service.title, `/services/${service.slug}`] as const)} /></section>
          <section><h2>Locations</h2><LinkList links={locations.map(([name, slug]) => [name, `/${slug}`] as const)} /></section>
        </div>
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
