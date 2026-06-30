export type ServiceItem = {
  name: string;
  description: string;
  /** Optional pricing hint shown on the card. Most jobs are quoted after a free estimate. */
  price?: string;
  image?: string;
  popular?: boolean;
};

export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  /** Slug of the matching /specialties/[topic] deep-dive page, if one exists. */
  specialtySlug?: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "plumbing",
    name: "Plumbing Repairs",
    description:
      "Leaks, drips, clogs and fixture swaps handled fast. We fix the everyday plumbing problems that turn into big ones if they wait.",
    image: "/Images/services/plumbing.webp",
    specialtySlug: "plumbing",
    items: [
      {
        name: "Faucet & Sink Repair / Replacement",
        description:
          "Dripping, leaking or worn-out faucets repaired or swapped for a new fixture in kitchen, bath or laundry.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Toilet Repair & Installation",
        description:
          "Running, leaking or rocking toilets fixed, plus full toilet removal and new install with a fresh wax ring and seal.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Garbage Disposal Repair & Install",
        description:
          "Jammed, humming or leaking disposals repaired or replaced with a new unit, wired and tested.",
        price: "Free Estimate",
      },
      {
        name: "Leak & Pipe Repair",
        description:
          "Under-sink leaks, supply-line drips and exposed pipe repairs stopped before they cause water damage.",
        price: "Free Estimate",
      },
      {
        name: "Water Heater Service",
        description:
          "Troubleshooting, minor repairs and replacement help for tank water heaters that won't keep up.",
        price: "Free Estimate",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical & Lighting",
    description:
      "Safe, code-conscious electrical work for the home, from a flickering light to a full set of new fixtures.",
    image: "/Images/services/electrical.webp",
    specialtySlug: "electrical",
    items: [
      {
        name: "Ceiling Fan Installation",
        description:
          "New ceiling fans hung, balanced and wired, plus replacement of old fans and light kits, even on tall ceilings.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Light Fixture Installation",
        description:
          "Chandeliers, pendants, flush mounts and vanity lights mounted, wired and tested.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Outlet & Switch Repair",
        description:
          "Dead outlets, worn switches, dimmers and USB outlets replaced for safer, more convenient power.",
        price: "Free Estimate",
      },
      {
        name: "Recessed & Under-Cabinet Lighting",
        description:
          "Add bright, modern recessed cans or under-cabinet lighting to kitchens, living rooms and offices.",
        price: "Free Estimate",
      },
      {
        name: "Electrical Troubleshooting",
        description:
          "Tracking down the cause of tripping breakers, dead circuits and fixtures that won't power on.",
        price: "Free Estimate",
      },
    ],
  },
  {
    id: "drywall-painting",
    name: "Drywall & Painting",
    description:
      "Holes patched, walls textured and rooms repainted so your home looks finished and cared for.",
    image: "/Images/services/drywall.webp",
    specialtySlug: "drywall-repair",
    items: [
      {
        name: "Drywall Repair & Patching",
        description:
          "Holes, cracks, dents and water-stained drywall cut out, patched and blended so the repair disappears.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Drywall Installation",
        description:
          "New drywall hung and finished for additions, garage conversions, closets and remodels.",
        price: "Free Estimate",
      },
      {
        name: "Texture Matching",
        description:
          "Knockdown, orange-peel and hand textures matched to the surrounding wall or ceiling.",
        price: "Free Estimate",
      },
      {
        name: "Interior Painting",
        description:
          "Clean, crisp repaints for rooms, trim, doors and ceilings with careful prep and tidy lines.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Exterior Painting & Touch-Up",
        description:
          "Trim, doors, fascia and touch-ups refreshed to protect and brighten your home's exterior.",
        price: "Free Estimate",
      },
    ],
  },
  {
    id: "carpentry",
    name: "Carpentry & Woodwork",
    description:
      "Skilled carpentry for repairs and finishing touches, from trim and shelving to decks and fences.",
    image: "/Images/services/carpentry.webp",
    specialtySlug: "carpentry",
    items: [
      {
        name: "Trim, Molding & Baseboards",
        description:
          "Crown molding, baseboards, casing and trim installed, repaired or replaced for a finished look.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Shelving & Storage",
        description:
          "Custom shelves, closet systems and built-ins designed and installed to fit your space.",
        price: "Free Estimate",
      },
      {
        name: "Cabinet Repair & Hardware",
        description:
          "Loose doors, broken hinges, drawer slides and new knobs and pulls repaired and replaced.",
        price: "Free Estimate",
      },
      {
        name: "Deck & Fence Repair",
        description:
          "Rotten boards, wobbly rails, gates and pickets repaired to keep decks and fences solid and safe.",
        price: "Free Estimate",
      },
      {
        name: "Rot & Wood Replacement",
        description:
          "Damaged fascia, soffit, trim and framing members cut out and replaced with sound material.",
        price: "Free Estimate",
      },
    ],
  },
  {
    id: "doors-windows",
    name: "Doors & Windows",
    description:
      "Interior and exterior doors hung true, plus window and weatherproofing fixes that seal out drafts.",
    image: "/Images/services/doors.webp",
    specialtySlug: "door-installation",
    items: [
      {
        name: "Interior Door Hanging",
        description:
          "Pre-hung and slab interior doors installed, planed and adjusted to swing and latch perfectly.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Exterior & Storm Door Installation",
        description:
          "Front, patio and storm doors installed and sealed for security and energy efficiency.",
        price: "Free Estimate",
      },
      {
        name: "Door Repair & Adjustment",
        description:
          "Sticking, dragging or misaligned doors, hinges and strike plates repaired and realigned.",
        price: "Free Estimate",
      },
      {
        name: "Lock & Handle Replacement",
        description:
          "Deadbolts, knobs, levers and smart locks installed and rekeyed for peace of mind.",
        price: "Free Estimate",
      },
      {
        name: "Weatherstripping & Caulking",
        description:
          "Drafty doors and windows sealed with fresh weatherstripping and caulk to cut energy bills.",
        price: "Free Estimate",
      },
    ],
  },
  {
    id: "remodeling",
    name: "Bathroom & Kitchen Remodeling",
    description:
      "Update the rooms that matter most, from a quick refresh to a full remodel, with one trusted crew.",
    image: "/Images/services/bathroom-remodel.webp",
    specialtySlug: "bathroom-remodeling",
    items: [
      {
        name: "Bathroom Remodeling",
        description:
          "Vanities, toilets, tubs, tile, lighting and fixtures updated for a fresh, functional bathroom.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Kitchen Remodeling",
        description:
          "Cabinets, countertops, backsplash, sinks, lighting and fixtures refreshed or fully remodeled.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Tile & Backsplash",
        description:
          "Floor, shower, tub-surround and backsplash tile set clean and sealed to last.",
        price: "Free Estimate",
      },
      {
        name: "Vanity & Fixture Upgrades",
        description:
          "New vanities, faucets, mirrors, towel bars and fixtures installed for an instant upgrade.",
        price: "Free Estimate",
      },
    ],
  },
  {
    id: "general-repairs",
    name: "General Repairs & Honey-Do",
    description:
      "The whole list of small jobs around the house, knocked out in one visit. If your honey can't, we can.",
    image: "/Images/services/honey-do.webp",
    specialtySlug: "handyman",
    items: [
      {
        name: "TV Mounting & Picture Hanging",
        description:
          "Flat-screens, mirrors, art and shelves mounted level and secure, with cords hidden on request.",
        price: "Free Estimate",
        popular: true,
      },
      {
        name: "Furniture & Equipment Assembly",
        description:
          "Flat-pack furniture, shelving, grills and exercise equipment assembled and set in place.",
        price: "Free Estimate",
      },
      {
        name: "Caulking & Sealing",
        description:
          "Tubs, sinks, counters and trim re-caulked clean to keep out water and look sharp.",
        price: "Free Estimate",
      },
      {
        name: "Pressure Washing",
        description:
          "Driveways, patios, fences and siding washed clean of dirt, mildew and grime.",
        price: "Free Estimate",
      },
      {
        name: "Honey-Do List & Odd Jobs",
        description:
          "Hand us the whole list. We knock out the small repairs and to-dos you never get around to, in one trip.",
        price: "Free Estimate",
        popular: true,
      },
    ],
  },
];
