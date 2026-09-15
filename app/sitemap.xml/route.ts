import { services } from "../service-data";

const baseUrl = "https://commercialepcleeds.co.uk";

const coreRoutes = [
  { path: "", priority: "1.0", changeFrequency: "weekly" },
  { path: "/instant-quote-booking", priority: "0.9", changeFrequency: "monthly" },
  { path: "/services", priority: "0.9", changeFrequency: "monthly" },
  { path: "/guides", priority: "0.9", changeFrequency: "monthly" },
  { path: "/locations", priority: "0.9", changeFrequency: "weekly" },
  { path: "/sitemap", priority: "0.4", changeFrequency: "monthly" },
  { path: "/about", priority: "0.7", changeFrequency: "monthly" },
  { path: "/privacy", priority: "0.3", changeFrequency: "yearly" },
];

export function GET() {
  const serviceRoutes = services.map(service => ({
    path: `/services/${service.slug}`,
    priority: service.slug === "commercial-epc" ? "0.9" : "0.8",
    changeFrequency: "monthly",
  }));

  const urls = [...coreRoutes, ...serviceRoutes]
    .map(route => `  <url>\n    <loc>${baseUrl}${route.path}</loc>\n    <changefreq>${route.changeFrequency}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
