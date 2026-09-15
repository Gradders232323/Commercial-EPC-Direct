import { locationRegions, locationSlug, popularLocations } from "./location-data";
import { services } from "./service-data";

export default function SiteNav({ quoteHref = "/#quote" }: { quoteHref?: string }) {
  const bookingHref = quoteHref === "#booking-form" ? quoteHref : "/instant-quote-booking";
  return (
    <>
    <div className="contact-bar">
      <span>Nationwide commercial property assessments</span>
      <div><a href="tel:01827488063"><i aria-hidden="true">☎</i> 01827 488063</a><a href="mailto:admin@commercialepcdirect.co.uk"><i aria-hidden="true">Email</i> admin@commercialepcdirect.co.uk</a></div>
    </div>
    <nav className="nav site-nav" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="Commercial EPC Direct home"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Commercial EPC <b>Direct</b></span></a>
      <div className="nav-links nav-structured">
        <details className="service-nav">
          <summary>Services <span>⌄</span></summary>
          <div className="services-mega"><div className="service-mega-intro"><span className="kicker">Commercial property services</span><strong>What does your property need?</strong><p>Clear assessments, reports and plans from the right specialist.</p><a href="/services">View all services →</a></div><div className="service-mega-grid">{services.map((service,index)=><a key={service.slug} href={`/services/${service.slug}`}><span>0{index+1}</span><strong>{service.title}</strong><small>{service.menuCopy}</small><i>→</i></a>)}</div></div>
        </details>
        <a href="/guides">Guides</a>
        <a href="/about">About</a>
        <details className="locations-nav">
          <summary>Locations <span>⌄</span></summary>
          <div className="locations-mega">
            <div className="mega-intro"><span className="kicker">Nationwide coverage</span><strong>Our in-house commercial EPC team, across the UK.</strong><a href="/locations">Search all locations <span>→</span></a></div>
            <div className="mega-column"><small>POPULAR LOCATIONS</small>{popularLocations.map(city => <a key={city} href={city === "Leeds" ? "/" : `/locations#${locationSlug(city)}`}>{city}<span>↗</span></a>)}</div>
            <div className="mega-regions"><small>BROWSE BY REGION</small><div>{locationRegions.map(region => <a key={region.slug} href={`/locations#${region.slug}`}>{region.name}</a>)}</div></div>
          </div>
        </details>
      </div>
      <div className="nav-actions">
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><i></i><i></i><i></i></summary>
          <div className="mobile-nav-panel"><a className="mobile-quote-action" href={bookingHref}>Instant Quote &amp; Booking <span>→</span></a><a href="/services">All services</a>{services.map(service=><a key={service.slug} href={`/services/${service.slug}`}>{service.title}</a>)}<a href="/guides">Guides</a><a href="/about">About</a><a href="/locations">All locations</a><a href="/">Commercial EPC Leeds</a><div><small>REGIONS</small>{locationRegions.slice(0,6).map(region => <a key={region.slug} href={`/locations#${region.slug}`}>{region.name}</a>)}</div></div>
        </details>
        <a className="button button-small instant-quote-button" href={bookingHref}>Instant Quote &amp; Booking <span>→</span></a>
      </div>
    </nav>
    </>
  );
}
