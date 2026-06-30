export const BUSINESS = {
  name: "CD Garrett Handyman Services",
  legalName: "CD Garrett Handyman Services LLC",
  tagline: "Expert Handyman & Honey-Do Services in Midlothian, TX",
  slogan: "We Do What Your Honey Can't Do",
  shortDescription:
    "Family-owned handyman in Midlothian, TX with 35+ years of experience serving Ellis and Dallas counties. Plumbing, electrical, carpentry, drywall, ceiling fans, door hanging, bathroom and kitchen remodeling, and honey-do lists. Free estimates, honest pricing, satisfaction guaranteed.",
  longDescription:
    "CD Garrett Handyman Services has been the trusted name for home repairs and improvements across Ellis and Dallas counties for over 35 years. Owner Cedric Garrett built the company on extreme professionalism, attention to detail, and a simple promise: we don't leave until the job is done right and you're completely satisfied. From a dripping faucet or a ceiling fan that needs hanging to a full bathroom or kitchen remodel, our experienced team handles plumbing, electrical, carpentry, drywall, painting, door installation, and the whole honey-do list, all with upfront pricing and free estimates. One call gets it all done.",
  footerDescription:
    "A family-owned handyman company in the heart of Midlothian, Texas, serving homeowners across Ellis and Dallas counties for more than 35 years. From plumbing and electrical repairs to drywall, carpentry, door hanging, ceiling fans, painting, and full bathroom and kitchen remodels, we tackle the whole honey-do list with extreme professionalism and attention to detail. Free estimates, honest upfront pricing, and a promise that we won't leave until the job is done right. When your honey can't, we can.",

  address: {
    street: "414 Calvert Dr",
    city: "Midlothian",
    state: "TX",
    zip: "76065",
    country: "US",
    full: "414 Calvert Dr, Midlothian, TX 76065",
  },

  geo: {
    latitude: 32.4734,
    longitude: -96.9883,
  },

  phone: process.env.NEXT_PUBLIC_PHONE ?? "(214) 356-1871",
  phoneRaw: process.env.NEXT_PUBLIC_PHONE_RAW ?? "+12143561871",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@cdgarretthandyman.com",
  url: "https://cdgarretthandyman.com",

  priceRange: "$$",
  serviceType: ["Handyman", "Home Repair", "Remodeling", "General Contractor"],
  paymentAccepted: "Cash, Check, Credit Card",
  currenciesAccepted: "USD",

  founded: "1989",
  yearsExperience: "35+",
  owner: "Cedric Garrett",

  hours: [
    { day: "Monday",    open: "07:00", close: "19:00" },
    { day: "Tuesday",   open: "07:00", close: "19:00" },
    { day: "Wednesday", open: "07:00", close: "19:00" },
    { day: "Thursday",  open: "07:00", close: "19:00" },
    { day: "Friday",    open: "07:00", close: "19:00" },
    { day: "Saturday",  open: "08:00", close: "14:00" },
    { day: "Sunday",    open: "Closed", close: "Closed" },
  ],

  hoursNote: "Available by appointment. After-hours and emergency calls welcome.",

  ratingValue: 4.8,
  reviewCount: 23,

  socials: {
    googleBusinessProfile:
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ??
      "https://maps.app.goo.gl/v844G7DFsjvvitEK6",
    googleReview:
      process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ??
      "https://maps.app.goo.gl/v844G7DFsjvvitEK6",
    googlePhotos:
      process.env.NEXT_PUBLIC_GOOGLE_PHOTOS_URL ??
      "https://photos.app.goo.gl/6GRwXzCrCuJ3zF7W9",
  },

  // Primary call-to-action target. Handyman has no online ordering; the CTA
  // routes to the free-quote request page.
  quoteUrl: "/get-a-quote/",

  features: [
    "35+ Years of Experience",
    "Family Owned & Operated",
    "Free Estimates",
    "Honest, Upfront Pricing",
    "Satisfaction Guaranteed",
    "Serving Ellis & Dallas Counties",
    "Residential & Commercial",
    "Insured",
    "Locally Owned in Midlothian, TX",
    "One Call Does It All",
  ],

  areasServed: [
    "Midlothian",
    "Waxahachie",
    "Ennis",
    "Red Oak",
    "Ovilla",
    "Cedar Hill",
    "DeSoto",
    "Duncanville",
    "Mansfield",
    "Grand Prairie",
    "Lancaster",
    "Dallas",
    "Glenn Heights",
    "Ferris",
    "Maypearl",
  ],

  serviceAreasLabel:
    "Midlothian, Waxahachie, Ennis, Red Oak, Cedar Hill, DeSoto, Mansfield, and the greater Ellis & Dallas County area",

  pressQuote: {
    text: "Incredibly professional and efficient, very reasonable, honest, and conscientious.",
    source: "Verified Customer Reviews",
  },
} as const;

export type BusinessHours = (typeof BUSINESS.hours)[number];
