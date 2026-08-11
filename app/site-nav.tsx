import { locationRegions, locationSlug, popularLocations } from "./location-data";

export default function SiteNav({ quoteHref = "/#quote" }: { quoteHref?: string }) {
  return (
    <nav className="nav site-nav" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="Commercial EPC Direct home"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
      <div className="nav-links nav-structured">
        <a href="/#services">Services</a>
        <a href="/#faq">Guides</a>
        <a href="/#process">About</a>
        <details className="locations-nav">
          <summary>Locations <span>⌄</span></summary>
          <div className="locations-mega">
            <div className="mega-intro"><span className="kicker">Nationwide coverage</span><strong>Find your local commercial EPC assessor.</strong><a href="/locations">Search all locations <span>→</span></a></div>
            <div className="mega-column"><small>POPULAR LOCATIONS</small>{popularLocations.map(city => <a key={city} href={city === "York" ? "/commercial-epc-york" : `/locations#${locationSlug(city)}`}>{city}<span>↗</span></a>)}</div>
            <div className="mega-regions"><small>BROWSE BY REGION</small><div>{locationRegions.map(region => <a key={region.slug} href={`/locations#${region.slug}`}>{region.name}</a>)}</div></div>
          </div>
        </details>
      </div>
      <div className="nav-actions">
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><i></i><i></i><i></i></summary>
          <div className="mobile-nav-panel"><a href="/#services">Services</a><a href="/#faq">Guides</a><a href="/#process">About</a><a href="/locations">All locations</a><a href="/commercial-epc-york">Commercial EPC York</a><div><small>REGIONS</small>{locationRegions.slice(0,6).map(region => <a key={region.slug} href={`/locations#${region.slug}`}>{region.name}</a>)}</div></div>
        </details>
        <a className="button button-small" href={quoteHref}>Get a quote <span>→</span></a>
      </div>
    </nav>
  );
}
