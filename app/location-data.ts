export type LocationRegion = { name: string; slug: string; cities: string[] };

export const locationRegions: LocationRegion[] = [
  { name: "Yorkshire & the Humber", slug: "yorkshire-and-the-humber", cities: ["York", "Leeds", "Sheffield", "Bradford", "Hull", "Harrogate", "Huddersfield", "Wakefield", "Doncaster", "Barnsley"] },
  { name: "North East", slug: "north-east", cities: ["Newcastle", "Sunderland", "Durham", "Middlesbrough", "Darlington", "Gateshead", "Hartlepool"] },
  { name: "North West", slug: "north-west", cities: ["Manchester", "Liverpool", "Chester", "Preston", "Warrington", "Blackpool", "Lancaster", "Stockport", "Bolton"] },
  { name: "West Midlands", slug: "west-midlands", cities: ["Birmingham", "Coventry", "Wolverhampton", "Solihull", "Walsall", "Worcester", "Stoke-on-Trent", "Telford"] },
  { name: "East Midlands", slug: "east-midlands", cities: ["Nottingham", "Leicester", "Derby", "Northampton", "Lincoln", "Chesterfield", "Mansfield"] },
  { name: "East of England", slug: "east-of-england", cities: ["Cambridge", "Norwich", "Ipswich", "Peterborough", "Chelmsford", "Luton", "Watford", "Colchester"] },
  { name: "London", slug: "london", cities: ["London", "Central London", "Croydon", "Enfield", "Kingston", "Romford", "Bromley", "Ealing", "Harrow"] },
  { name: "South East", slug: "south-east", cities: ["Brighton", "Reading", "Oxford", "Southampton", "Portsmouth", "Guildford", "Milton Keynes", "Canterbury", "Maidstone"] },
  { name: "South West", slug: "south-west", cities: ["Bristol", "Bath", "Exeter", "Plymouth", "Bournemouth", "Swindon", "Gloucester", "Cheltenham", "Truro"] },
  { name: "Wales", slug: "wales", cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor", "Aberystwyth"] },
  { name: "Scotland", slug: "scotland", cities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness", "Stirling", "Perth"] },
  { name: "Northern Ireland", slug: "northern-ireland", cities: ["Belfast", "Derry", "Lisburn", "Newry", "Bangor NI"] },
];

export const popularLocations = ["York", "Leeds", "Manchester", "Birmingham", "London", "Bristol"];

export function locationSlug(location: string) {
  return location.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
