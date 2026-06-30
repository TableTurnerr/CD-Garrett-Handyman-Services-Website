export type Neighborhood = {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroHeadline: string;
  heroSubheadline: string;
  driveTime: string;
  intro: string;
  body: string;
  /** Names of headline services to highlight for this city. */
  popularServices: string[];
};

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: "waxahachie-tx",
    city: "Waxahachie",
    state: "TX",
    metaTitle: "Handyman in Waxahachie, TX — Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Trusted handyman serving Waxahachie, TX. Plumbing, electrical, drywall, carpentry, door hanging and bathroom remodels. 35+ years, free estimates, satisfaction guaranteed.",
    keywords: [
      "handyman waxahachie tx",
      "handyman services waxahachie",
      "plumbing repair waxahachie",
      "drywall repair waxahachie tx",
      "bathroom remodel waxahachie",
      "home repair waxahachie tx",
      "honey do waxahachie",
    ],
    heroHeadline: "Your Trusted Handyman in Waxahachie, TX",
    heroSubheadline:
      "12 minutes from our Midlothian shop. Plumbing, electrical, drywall, doors and remodels, with free estimates.",
    driveTime: "12 minutes from Midlothian",
    intro:
      "Waxahachie homeowners have trusted CD Garrett Handyman Services for years to handle the repairs and improvements that keep a home running. We're a short drive away and treat every Waxahachie job with the same professionalism and attention to detail.",
    body: "From the historic homes around the square to the newer neighborhoods off Highway 287, Waxahachie has a little of everything, and so do we. Plumbing and electrical repairs, drywall patching and texture matching, carpentry, door hanging, ceiling fans, painting, and full bathroom and kitchen remodels, all from one trusted local crew with 35+ years of experience. Every job comes with a free estimate, honest pricing, and our promise that we won't leave until you're satisfied.",
    popularServices: ["Plumbing Repair", "Drywall Repair", "Bathroom Remodeling", "Door Installation"],
  },
  {
    slug: "ennis-tx",
    city: "Ennis",
    state: "TX",
    metaTitle: "Handyman in Ennis, TX — Home Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Reliable handyman serving Ennis, TX. Plumbing, electrical, carpentry, drywall, painting and remodeling. 35+ years of experience, free estimates, Ellis County.",
    keywords: [
      "handyman ennis tx",
      "handyman services ennis",
      "plumbing repair ennis tx",
      "drywall repair ennis",
      "home repair ennis tx",
      "carpentry ennis tx",
      "honey do ennis",
    ],
    heroHeadline: "Handyman Services for Ennis, TX",
    heroSubheadline:
      "Repairs, remodels and the whole honey-do list, handled by a trusted Ellis County crew.",
    driveTime: "20 minutes from Midlothian",
    intro:
      "Ennis residents call CD Garrett Handyman Services when they want the job done right the first time. We bring 35+ years of experience and a satisfaction guarantee to every home in Ennis.",
    body: "Whether it's a leaky faucet, a ceiling fan that needs hanging, drywall to patch or a full bathroom remodel, we handle the whole list so you only make one call. Our team covers plumbing, electrical, carpentry, drywall, painting, doors and remodeling across Ennis, all with free estimates and honest, upfront pricing. We don't leave until it's done right.",
    popularServices: ["Plumbing Repair", "Electrical & Lighting", "Carpentry & Woodwork", "Handyman & Honey-Do"],
  },
  {
    slug: "red-oak-tx",
    city: "Red Oak",
    state: "TX",
    metaTitle: "Handyman in Red Oak, TX — Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Local handyman serving Red Oak, TX. Plumbing, electrical, drywall, doors, ceiling fans and remodels. 35+ years, free estimates, satisfaction guaranteed.",
    keywords: [
      "handyman red oak tx",
      "handyman services red oak",
      "plumbing repair red oak tx",
      "ceiling fan installation red oak",
      "home repair red oak tx",
      "drywall repair red oak",
      "honey do red oak",
    ],
    heroHeadline: "Red Oak's Go-To Handyman",
    heroSubheadline:
      "Just up the road from Midlothian. Fast, friendly repairs and remodels with free estimates.",
    driveTime: "10 minutes from Midlothian",
    intro:
      "Red Oak is right in our backyard, and homeowners here count on CD Garrett Handyman Services for everything from quick fixes to full remodels. We're close by and ready to help.",
    body: "Our Red Oak neighbors call us for plumbing and electrical repairs, drywall patching, ceiling fan and light fixture installation, door hanging, carpentry, painting and bathroom and kitchen remodels. With 35+ years of experience and a promise to finish the job right, we make home maintenance simple. One call does it all, and every estimate is free.",
    popularServices: ["Ceiling Fan Installation", "Plumbing Repair", "Door Installation", "Drywall Repair"],
  },
  {
    slug: "ovilla-tx",
    city: "Ovilla",
    state: "TX",
    metaTitle: "Handyman in Ovilla, TX — Home Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Trusted handyman serving Ovilla, TX. Carpentry, plumbing, electrical, drywall, doors and remodeling. 35+ years of experience, free estimates, satisfaction guaranteed.",
    keywords: [
      "handyman ovilla tx",
      "handyman services ovilla",
      "home repair ovilla tx",
      "carpentry ovilla tx",
      "remodeling ovilla tx",
      "drywall repair ovilla",
      "honey do ovilla",
    ],
    heroHeadline: "Handyman Services for Ovilla, TX",
    heroSubheadline:
      "Minutes from Midlothian. Skilled repairs, remodels and outdoor builds, with free estimates.",
    driveTime: "8 minutes from Midlothian",
    intro:
      "Ovilla homeowners trust CD Garrett Handyman Services for craftsmanship they can count on. We're practically neighbors, and we treat every Ovilla home like our own.",
    body: "From custom trim and shelving to plumbing and electrical repairs, drywall, doors, painting, and bathroom and kitchen remodels, our crew handles it all. Ovilla's larger lots also mean we get plenty of calls for decks, fences and covered patios, which happen to be some of our favorite projects. 35+ years of experience, free estimates and a satisfaction guarantee on every job.",
    popularServices: ["Carpentry & Woodwork", "Patio Covers & Outdoor Living", "Bathroom Remodeling", "Plumbing Repair"],
  },
  {
    slug: "cedar-hill-tx",
    city: "Cedar Hill",
    state: "TX",
    metaTitle: "Handyman in Cedar Hill, TX — Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Reliable handyman serving Cedar Hill, TX. Plumbing, electrical, drywall, carpentry, painting and remodels. 35+ years, free estimates, Dallas County.",
    keywords: [
      "handyman cedar hill tx",
      "handyman services cedar hill",
      "plumbing repair cedar hill tx",
      "bathroom remodel cedar hill",
      "home repair cedar hill tx",
      "painting cedar hill tx",
      "honey do cedar hill",
    ],
    heroHeadline: "Cedar Hill's Trusted Handyman",
    heroSubheadline:
      "Serving Cedar Hill with plumbing, electrical, drywall, doors, painting and remodels.",
    driveTime: "15 minutes from Midlothian",
    intro:
      "Cedar Hill homeowners rely on CD Garrett Handyman Services for honest, professional work. We've served the Dallas County community for over 35 years and treat every home with care.",
    body: "Plumbing and electrical repairs, drywall patching and texture matching, carpentry, door hanging, ceiling fans, interior and exterior painting, and full bathroom and kitchen remodels, we do it all across Cedar Hill. One trusted crew, free estimates, and the same promise every time: we don't leave until the work is done right and you're happy with it.",
    popularServices: ["Plumbing Repair", "Interior & Exterior Painting", "Bathroom Remodeling", "Drywall Repair"],
  },
  {
    slug: "desoto-tx",
    city: "DeSoto",
    state: "TX",
    metaTitle: "Handyman in DeSoto, TX — Home Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Local handyman serving DeSoto, TX. Plumbing, electrical, drywall, doors, ceiling fans and remodeling. 35+ years of experience, free estimates, satisfaction guaranteed.",
    keywords: [
      "handyman desoto tx",
      "handyman services desoto",
      "plumbing repair desoto tx",
      "electrical repair desoto",
      "home repair desoto tx",
      "drywall repair desoto",
      "honey do desoto",
    ],
    heroHeadline: "Handyman Services for DeSoto, TX",
    heroSubheadline:
      "Repairs, installations and remodels for DeSoto homes, with free estimates and honest pricing.",
    driveTime: "18 minutes from Midlothian",
    intro:
      "DeSoto residents choose CD Garrett Handyman Services for dependable repairs and remodels. With 35+ years of experience, we get it done right and treat your home with respect.",
    body: "Our DeSoto customers call on us for plumbing and electrical fixes, drywall repair, ceiling fan and light installation, door hanging, carpentry, painting and bathroom and kitchen remodels. We bundle the whole honey-do list into one organized visit, give you a free estimate up front, and stand behind every job with our satisfaction guarantee.",
    popularServices: ["Electrical & Lighting", "Plumbing Repair", "Door Installation", "Handyman & Honey-Do"],
  },
  {
    slug: "duncanville-tx",
    city: "Duncanville",
    state: "TX",
    metaTitle: "Handyman in Duncanville, TX — Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Trusted handyman serving Duncanville, TX. Plumbing, electrical, drywall, carpentry, doors and remodels. 35+ years, free estimates, Dallas County.",
    keywords: [
      "handyman duncanville tx",
      "handyman services duncanville",
      "plumbing repair duncanville tx",
      "drywall repair duncanville",
      "home repair duncanville tx",
      "remodeling duncanville tx",
      "honey do duncanville",
    ],
    heroHeadline: "Duncanville's Dependable Handyman",
    heroSubheadline:
      "Plumbing, electrical, drywall, doors and remodels, handled by a 35-year Dallas County crew.",
    driveTime: "20 minutes from Midlothian",
    intro:
      "Duncanville homeowners trust CD Garrett Handyman Services for professional, on-time work. We've built a reputation across Dallas County on doing the job right.",
    body: "From small repairs to full remodels, our Duncanville customers get one trusted crew for plumbing, electrical, drywall, carpentry, doors, ceiling fans, painting and bathroom and kitchen updates. Every job starts with a free estimate and ends with work we're proud to put our name on. We don't leave until you're satisfied.",
    popularServices: ["Plumbing Repair", "Drywall Repair", "Carpentry & Woodwork", "Kitchen Remodeling"],
  },
  {
    slug: "mansfield-tx",
    city: "Mansfield",
    state: "TX",
    metaTitle: "Handyman in Mansfield, TX — Home Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Reliable handyman serving Mansfield, TX. Plumbing, electrical, drywall, carpentry, painting and remodeling. 35+ years of experience, free estimates.",
    keywords: [
      "handyman mansfield tx",
      "handyman services mansfield",
      "plumbing repair mansfield tx",
      "bathroom remodel mansfield",
      "home repair mansfield tx",
      "carpentry mansfield tx",
      "honey do mansfield",
    ],
    heroHeadline: "Handyman Services for Mansfield, TX",
    heroSubheadline:
      "Skilled repairs, remodels and outdoor builds for Mansfield homes, with free estimates.",
    driveTime: "25 minutes from Midlothian",
    intro:
      "Mansfield homeowners count on CD Garrett Handyman Services for craftsmanship and reliability. We bring 35+ years of experience to every project, big or small.",
    body: "Mansfield's mix of established and growing neighborhoods keeps us busy with plumbing and electrical repairs, drywall, carpentry, door hanging, painting, covered patios and full bathroom and kitchen remodels. One call gets the whole list handled, with a free estimate up front and our satisfaction guarantee behind every job.",
    popularServices: ["Bathroom Remodeling", "Carpentry & Woodwork", "Patio Covers & Outdoor Living", "Plumbing Repair"],
  },
  {
    slug: "midlothian-tx",
    city: "Midlothian",
    state: "TX",
    metaTitle: "Handyman in Midlothian, TX — Repairs & Remodeling | CD Garrett",
    metaDescription:
      "Your hometown handyman in Midlothian, TX. Plumbing, electrical, drywall, carpentry, doors, ceiling fans and remodels. 35+ years, free estimates, satisfaction guaranteed.",
    keywords: [
      "handyman midlothian tx",
      "handyman services midlothian",
      "plumbing repair midlothian tx",
      "drywall repair midlothian",
      "bathroom remodel midlothian tx",
      "home repair midlothian tx",
      "honey do midlothian",
    ],
    heroHeadline: "Your Hometown Handyman in Midlothian, TX",
    heroSubheadline:
      "Based right here in Midlothian. The whole honey-do list handled, with free estimates and honest pricing.",
    driveTime: "Based in Midlothian",
    intro:
      "CD Garrett Handyman Services is proud to call Midlothian home. Our shop is right here on Calvert Drive, and we've served our Midlothian neighbors for over 35 years.",
    body: "As your local, family-owned handyman, we handle plumbing, electrical, drywall, carpentry, door hanging, ceiling fans, painting, covered patios and full bathroom and kitchen remodels right here in Midlothian. Being local means we're quick to respond, easy to reach, and personally invested in doing right by our neighbors. Free estimates on every job, and we don't leave until you're satisfied.",
    popularServices: ["Plumbing Repair", "Bathroom Remodeling", "Drywall Repair", "Handyman & Honey-Do"],
  },
];

export const NEIGHBORHOOD_SLUGS = NEIGHBORHOODS.map((n) => n.slug);
