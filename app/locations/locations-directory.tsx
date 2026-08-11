"use client";

import { useMemo, useState } from "react";
import { locationRegions, locationSlug } from "../location-data";

export default function LocationsDirectory() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return locationRegions;
    return locationRegions.map(region => ({ ...region, cities: region.cities.filter(city => city.toLowerCase().includes(term) || region.name.toLowerCase().includes(term)) })).filter(region => region.cities.length);
  }, [query]);
  const count = filtered.reduce((total, region) => total + region.cities.length, 0);

  return (
    <div className="locations-directory" id="find-location">
      <div className="location-search">
        <label htmlFor="location-search">Find a town or city</label>
        <div><span aria-hidden="true">⌕</span><input id="location-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try York, Manchester or Bristol" autoComplete="off" /><small>{count} {count === 1 ? "location" : "locations"}</small></div>
      </div>
      <div className="region-jumps" aria-label="Jump to region">{locationRegions.map(region => <a key={region.slug} href={`#${region.slug}`}>{region.name}</a>)}</div>
      <div className="region-results" aria-live="polite">
        {filtered.map((region, regionIndex) => (
          <section className="directory-region" id={region.slug} key={region.slug}>
            <header><span>{String(regionIndex + 1).padStart(2, "0")}</span><h2>{region.name}</h2><small>{region.cities.length} locations</small></header>
            <div className="city-grid">{region.cities.map(city => {
              const liveHref = city === "York" ? "/commercial-epc-york" : city === "Leeds" ? "/commercial-epc-leeds" : null;
              return <a id={locationSlug(city)} key={city} className={liveHref ? "city-live" : ""} href={liveHref ?? "#locations-enquiry"}><span>{city}</span><small>{liveHref ? "View location page" : "Check coverage"}</small><i>→</i></a>;
            })}</div>
          </section>
        ))}
        {!filtered.length && <div className="no-locations"><strong>No exact match yet.</strong><p>Send us the postcode and we’ll confirm assessor availability.</p><a className="button" href="#locations-enquiry">Check your postcode <span>→</span></a></div>}
      </div>
    </div>
  );
}
