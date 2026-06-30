export type Specialty = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroEyebrow?: string;
  heroHeadline: string;
  heroSubheadline?: string;
  primaryBlock: { heading: string; body: string };
  image?: string;
  /** Names of items in SERVICE_CATEGORIES (services.ts) to surface as related services. */
  relatedServiceNames?: string[];
  /** Optional per-specialty FAQs. Rendered inline on the topic page and injected as FAQPage JSON-LD. */
  faqs?: { question: string; answer: string }[];
};

// Every specialty slug has a matching photo at /Images/specialties/<slug>.webp.
export const SPECIALTIES: Specialty[] = [
  {
    slug: "plumbing",
    name: "Plumbing Repair",
    metaTitle: "Plumbing Repair in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Trusted handyman plumbing repair in Midlothian, TX. Faucets, toilets, garbage disposals, leaks and fixtures fixed fast. Free estimates across Ellis & Dallas counties.",
    keywords: [
      "plumbing repair midlothian tx",
      "handyman plumber midlothian",
      "faucet repair midlothian tx",
      "toilet repair midlothian",
      "garbage disposal installation midlothian",
      "leak repair ellis county",
      "plumbing handyman waxahachie",
      "sink repair midlothian tx",
    ],
    heroEyebrow: "STOP THE DRIP",
    heroHeadline: "Plumbing Repair in Midlothian, TX",
    heroSubheadline:
      "Faucets, toilets, disposals and leaks fixed right the first time, with free estimates and upfront pricing.",
    primaryBlock: {
      heading: "Handyman Plumbing Done Right",
      body: "A dripping faucet or running toilet wastes water and money every day it waits, and a small leak under the sink can quietly turn into real damage. CD Garrett Handyman Services has been handling residential plumbing repairs across Ellis and Dallas counties for over 35 years. We repair and replace faucets, toilets, garbage disposals, supply lines and shut-off valves, and we stop leaks before they spread. Every job comes with a free estimate and honest, upfront pricing, and we don't leave until it's working the way it should.",
    },
    image: "/Images/specialties/plumbing.webp",
    relatedServiceNames: [
      "Faucet & Sink Repair / Replacement",
      "Toilet Repair & Installation",
      "Garbage Disposal Repair & Install",
      "Leak & Pipe Repair",
    ],
    faqs: [
      {
        question: "Do you handle small plumbing jobs like a single leaky faucet?",
        answer:
          "Absolutely. No job is too small. A leaky faucet, a running toilet or a jammed garbage disposal are exactly the kind of quick repairs we knock out in a single visit. Hand us the whole [honey-do list](/specialties/handyman/) while we're there.",
      },
      {
        question: "Can you replace a toilet or garbage disposal, not just repair it?",
        answer:
          "Yes. We remove and replace toilets with a fresh wax ring and seal, and we install new garbage disposals wired and tested. If you've bought the fixture, we'll install it; if not, we'll help you choose the right one.",
      },
      {
        question: "Is the estimate really free?",
        answer:
          "Yes. We provide free estimates on plumbing repairs across Midlothian, [Waxahachie](/near/waxahachie-tx/), [Cedar Hill](/near/cedar-hill-tx/) and the surrounding area. You'll know the price before we start.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical & Lighting",
    metaTitle: "Electrical & Lighting Repair in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Handyman electrical and lighting in Midlothian, TX. Outlets, switches, light fixtures, recessed lighting and troubleshooting. Free estimates, Ellis & Dallas counties.",
    keywords: [
      "electrical repair midlothian tx",
      "handyman electrician midlothian",
      "light fixture installation midlothian",
      "outlet repair midlothian tx",
      "recessed lighting installation ellis county",
      "switch replacement midlothian",
      "electrical troubleshooting waxahachie",
    ],
    heroEyebrow: "SAFE & BRIGHT",
    heroHeadline: "Electrical & Lighting in Midlothian, TX",
    primaryBlock: {
      heading: "Light Fixtures, Outlets & Switches Done Safely",
      body: "Electrical work is no place for guesswork. From a dead outlet or a worn-out switch to a new chandelier, recessed cans or under-cabinet lighting, CD Garrett Handyman Services handles the everyday electrical jobs that make a home safer and more comfortable. With 35+ years of experience across Ellis and Dallas counties, we install and replace fixtures, troubleshoot tripping breakers and dead circuits, and leave the work clean, tested and code-conscious. Free estimates on every job.",
    },
    image: "/Images/specialties/electrical.webp",
    relatedServiceNames: [
      "Light Fixture Installation",
      "Outlet & Switch Repair",
      "Recessed & Under-Cabinet Lighting",
      "Electrical Troubleshooting",
    ],
    faqs: [
      {
        question: "Can you install a chandelier or light fixture I already bought?",
        answer:
          "Yes. We install chandeliers, pendants, flush mounts and vanity lights you've purchased, including swapping out old fixtures and hauling the old one away. We'll mount it level, wire it safely and test it before we go.",
      },
      {
        question: "Do you add recessed or under-cabinet lighting?",
        answer:
          "We do. Recessed can lights and under-cabinet lighting are popular upgrades for kitchens, living rooms and home offices, and they make a big difference. Ask for a free estimate.",
      },
      {
        question: "Why does my breaker keep tripping?",
        answer:
          "It usually means a circuit is overloaded or there's a fault on the line. We troubleshoot the cause, whether it's a bad outlet, an overloaded circuit or a failing device, and fix it safely.",
      },
    ],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    metaTitle: "Drywall Repair & Texture in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Seamless drywall repair, patching and texture matching in Midlothian, TX. Holes, cracks and water damage made to disappear. Free estimates, Ellis & Dallas counties.",
    keywords: [
      "drywall repair midlothian tx",
      "drywall patching midlothian",
      "texture matching midlothian tx",
      "sheetrock repair ellis county",
      "drywall installation midlothian",
      "ceiling repair midlothian tx",
      "hole in wall repair waxahachie",
    ],
    heroEyebrow: "MAKE IT DISAPPEAR",
    heroHeadline: "Drywall Repair in Midlothian, TX",
    primaryBlock: {
      heading: "Holes, Cracks & Texture Matched to Vanish",
      body: "A doorknob hole, a settling crack or a water-stained ceiling can make a whole room feel neglected. The secret to drywall that looks like it was never touched is in the patching and the texture match, and that's where 35+ years of experience shows. CD Garrett Handyman Services cuts out the damage, patches it solid, and matches knockdown, orange-peel or hand textures so the repair blends right in. We also hang and finish new drywall for additions, garage conversions and remodels. Free estimates on every job.",
    },
    image: "/Images/specialties/drywall-repair.webp",
    relatedServiceNames: [
      "Drywall Repair & Patching",
      "Drywall Installation",
      "Texture Matching",
      "Interior Painting",
    ],
    faqs: [
      {
        question: "Can you match the texture on my existing walls?",
        answer:
          "Yes, and it's what makes a patch invisible. We match knockdown, orange-peel, smooth and hand textures to the surrounding wall or ceiling so the repair disappears. Add [interior painting](/specialties/painting/) and you'd never know there was a hole.",
      },
      {
        question: "Do you repair water-damaged drywall and ceilings?",
        answer:
          "We do. Once the leak is fixed, we cut out the stained or sagging drywall, replace it, re-texture and prep it for paint. We can handle the [plumbing leak](/specialties/plumbing/) too.",
      },
      {
        question: "Is a small hole worth calling about?",
        answer:
          "Definitely. Small drywall patches are quick and inexpensive, and they're a perfect add-on to the rest of your honey-do list. We'll take care of it in one trip.",
      },
    ],
  },
  {
    slug: "carpentry",
    name: "Carpentry & Woodwork",
    metaTitle: "Carpentry & Trim Work in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Skilled handyman carpentry in Midlothian, TX. Trim, molding, shelving, cabinets, decks and fence repair. Free estimates across Ellis & Dallas counties.",
    keywords: [
      "carpentry midlothian tx",
      "trim installation midlothian",
      "crown molding midlothian tx",
      "baseboard installation ellis county",
      "deck repair midlothian tx",
      "fence repair midlothian",
      "wood rot repair waxahachie",
      "custom shelving midlothian",
    ],
    heroEyebrow: "BUILT TO LAST",
    heroHeadline: "Carpentry & Woodwork in Midlothian, TX",
    primaryBlock: {
      heading: "Trim, Shelving, Decks & Repairs Done Cleanly",
      body: "Good carpentry is the difference between a room that feels finished and one that feels almost done. CD Garrett Handyman Services brings 35+ years of woodworking experience to crown molding, baseboards and casing, custom shelving and built-ins, cabinet repairs, and deck and fence fixes. We also cut out and replace rotten fascia, soffit and trim before the damage spreads. Tight joints, clean lines and solid work, with a free estimate up front.",
    },
    image: "/Images/specialties/carpentry.webp",
    relatedServiceNames: [
      "Trim, Molding & Baseboards",
      "Shelving & Storage",
      "Cabinet Repair & Hardware",
      "Deck & Fence Repair",
    ],
    faqs: [
      {
        question: "Do you install crown molding and baseboards?",
        answer:
          "Yes. Crown molding, baseboards, casing and decorative trim are some of our most requested upgrades. We measure, miter and install for tight, clean corners that make a room look custom.",
      },
      {
        question: "Can you repair my deck or fence?",
        answer:
          "We do. Rotten boards, wobbly rails, sagging gates and loose pickets are all repairable. We replace the bad material and re-secure the structure so it's solid and safe again.",
      },
      {
        question: "Do you build custom shelving and built-ins?",
        answer:
          "Yes. From a simple set of garage shelves to built-in storage and closet systems, we design and install woodwork that fits your space and your needs.",
      },
    ],
  },
  {
    slug: "ceiling-fan-installation",
    name: "Ceiling Fan Installation",
    metaTitle: "Ceiling Fan Installation in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Ceiling fan installation and replacement in Midlothian, TX. New fans hung, balanced and wired, even on high ceilings. Free estimates, Ellis & Dallas counties.",
    keywords: [
      "ceiling fan installation midlothian tx",
      "ceiling fan replacement midlothian",
      "install ceiling fan ellis county",
      "ceiling fan repair midlothian tx",
      "high ceiling fan installation waxahachie",
      "handyman ceiling fan midlothian",
    ],
    heroEyebrow: "COOL IT DOWN",
    heroHeadline: "Ceiling Fan Installation in Midlothian, TX",
    primaryBlock: {
      heading: "New Fans Hung, Balanced & Wired",
      body: "A ceiling fan keeps a room comfortable year-round and cuts your energy bill, but installing one safely, especially on a tall or sloped ceiling, is a job worth handing to a pro. CD Garrett Handyman Services installs new ceiling fans, replaces old fans and light kits, and mounts fan-rated boxes where there wasn't a fan before. We hang it level, balance it so it runs quiet and wobble-free, and wire the switch the way you want it. Free estimates and clean, careful work.",
    },
    image: "/Images/specialties/ceiling-fan-installation.webp",
    relatedServiceNames: [
      "Ceiling Fan Installation",
      "Light Fixture Installation",
      "Outlet & Switch Repair",
    ],
    faqs: [
      {
        question: "Can you install a fan where there's only a light right now?",
        answer:
          "Yes. We install a fan-rated mounting box that can safely carry the weight and motion of a ceiling fan, then mount and wire the new fan. If a new switch leg is needed for separate fan and light control, we can handle that too.",
      },
      {
        question: "Can you reach high or vaulted ceilings?",
        answer:
          "We can. High and sloped ceilings are routine for us. We bring the right equipment to install and balance the fan safely so it runs quiet.",
      },
      {
        question: "Will the fan wobble?",
        answer:
          "Not when it's installed right. We mount it to a solid, fan-rated box and balance the blades so it runs smooth and quiet. A wobbling fan almost always means a loose or wrong mount, which is exactly what we fix.",
      },
    ],
  },
  {
    slug: "door-installation",
    name: "Door Installation",
    metaTitle: "Door Installation & Repair in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Interior and exterior door installation and repair in Midlothian, TX. Doors hung true, locks set, drafts sealed. Free estimates across Ellis & Dallas counties.",
    keywords: [
      "door installation midlothian tx",
      "door hanging midlothian",
      "interior door installation ellis county",
      "exterior door installation midlothian tx",
      "door repair midlothian",
      "storm door installation waxahachie",
      "lock replacement midlothian tx",
    ],
    heroEyebrow: "HUNG TRUE",
    heroHeadline: "Door Installation & Repair in Midlothian, TX",
    primaryBlock: {
      heading: "Interior & Exterior Doors That Swing & Latch Right",
      body: "A door that sticks, drags or won't latch is a daily frustration, and a poorly hung exterior door lets in drafts, water and worry. CD Garrett Handyman Services installs interior and exterior doors, pre-hung and slab, plus storm doors and patio doors, and we hang them plumb so they swing smooth and latch every time. We also repair sticking doors, replace worn hinges and strike plates, install deadbolts and smart locks, and seal drafts with fresh weatherstripping. Free estimates on every door.",
    },
    image: "/Images/specialties/door-installation.webp",
    relatedServiceNames: [
      "Interior Door Hanging",
      "Exterior & Storm Door Installation",
      "Door Repair & Adjustment",
      "Lock & Handle Replacement",
    ],
    faqs: [
      {
        question: "Can you fix a door that sticks or won't close?",
        answer:
          "Yes. Sticking and dragging doors usually come down to settling, worn hinges or a misaligned strike plate. We diagnose the cause and adjust, plane or re-hang the door so it closes cleanly.",
      },
      {
        question: "Do you install exterior and storm doors?",
        answer:
          "We do. Front, patio and storm doors are installed plumb, sealed and weatherstripped for security and energy efficiency, and we'll set the new lock and deadbolt too.",
      },
      {
        question: "Can you replace just the locks or handles?",
        answer:
          "Yes. We install and replace deadbolts, knobs, levers and smart locks, and rekey where needed, so every entry is secure.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    metaTitle: "Bathroom Remodeling in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Bathroom remodeling in Midlothian, TX. Vanities, tile, showers, fixtures and full updates by a 35-year handyman team. Free estimates across Ellis & Dallas counties.",
    keywords: [
      "bathroom remodeling midlothian tx",
      "bathroom remodel midlothian",
      "shower remodel midlothian tx",
      "tile installation ellis county",
      "vanity installation midlothian",
      "bathroom renovation waxahachie",
      "bathroom contractor midlothian tx",
    ],
    heroEyebrow: "REFRESH THE ROOM",
    heroHeadline: "Bathroom Remodeling in Midlothian, TX",
    primaryBlock: {
      heading: "From a Quick Refresh to a Full Remodel",
      body: "The bathroom is one of the most-used rooms in the house, and an update pays you back every single day. Whether you want to swap a dated vanity and fixtures or fully remodel with new tile, a walk-in shower, lighting and flooring, CD Garrett Handyman Services brings 35+ years of craftsmanship to the job, with one trusted crew from demo to the final caulk line. We set tile clean, seal it to last, and sweat the details that make a bathroom feel finished. Free estimates and honest pricing.",
    },
    image: "/Images/specialties/bathroom-remodeling.webp",
    relatedServiceNames: [
      "Bathroom Remodeling",
      "Tile & Backsplash",
      "Vanity & Fixture Upgrades",
      "Toilet Repair & Installation",
    ],
    faqs: [
      {
        question: "Do you do full bathroom remodels or just updates?",
        answer:
          "Both. We handle quick refreshes, like a new vanity, faucet, mirror and lighting, and full remodels with new tile, walk-in showers, flooring and fixtures. One crew handles the whole project.",
      },
      {
        question: "Can you install a walk-in or tiled shower?",
        answer:
          "Yes. Tiled walk-in showers, tub-to-shower conversions, built-in benches and niches are some of our most popular bathroom projects. We waterproof and set the tile so it lasts.",
      },
      {
        question: "Will you help me pick fixtures and tile?",
        answer:
          "We're glad to. We'll talk through layout, tile, vanities and fixtures so the finished bathroom fits your style and your budget. It all starts with a free estimate.",
      },
    ],
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    metaTitle: "Kitchen Remodeling in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Kitchen remodeling in Midlothian, TX. Cabinets, countertops, backsplash, sinks and fixtures refreshed or fully remodeled. Free estimates, Ellis & Dallas counties.",
    keywords: [
      "kitchen remodeling midlothian tx",
      "kitchen remodel midlothian",
      "cabinet installation midlothian tx",
      "backsplash installation ellis county",
      "countertop installation midlothian",
      "kitchen renovation waxahachie",
      "kitchen contractor midlothian tx",
    ],
    heroEyebrow: "THE HEART OF THE HOME",
    heroHeadline: "Kitchen Remodeling in Midlothian, TX",
    primaryBlock: {
      heading: "Cabinets, Counters & Backsplash, Refreshed or Remodeled",
      body: "The kitchen is where everyone gathers, so it's worth getting right. CD Garrett Handyman Services updates kitchens at every level, from refreshing cabinet doors, hardware and a new faucet to a full remodel with cabinets, countertops, backsplash, sink, lighting and fixtures. With 35+ years of experience, we keep the project organized and the work clean, and we sweat the trim and tile details that make a kitchen look custom. Free estimates and upfront pricing.",
    },
    image: "/Images/specialties/kitchen-remodeling.webp",
    relatedServiceNames: [
      "Kitchen Remodeling",
      "Cabinet Repair & Hardware",
      "Tile & Backsplash",
      "Faucet & Sink Repair / Replacement",
    ],
    faqs: [
      {
        question: "Can you install a tile backsplash?",
        answer:
          "Yes. A new backsplash is one of the highest-impact, lowest-cost kitchen upgrades there is. We set it clean and grout it tight for a finished, custom look.",
      },
      {
        question: "Do you refinish or replace cabinets?",
        answer:
          "Both. We repair and rehang cabinet doors, replace hinges and slides, swap hardware, and install new cabinets in a full remodel. We'll recommend what makes sense for your budget.",
      },
      {
        question: "Can you handle the plumbing and electrical too?",
        answer:
          "We can. New sinks, faucets, disposals, [under-cabinet lighting](/specialties/electrical/) and fixtures are all part of what we do, so one crew handles your kitchen from start to finish.",
      },
    ],
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    metaTitle: "Painting in Midlothian, TX | CD Garrett Handyman Services",
    metaDescription:
      "Interior and exterior painting in Midlothian, TX. Rooms, trim, doors, ceilings and touch-ups with careful prep and clean lines. Free estimates, Ellis & Dallas counties.",
    keywords: [
      "painting midlothian tx",
      "interior painting midlothian",
      "exterior painting midlothian tx",
      "house painter ellis county",
      "trim painting midlothian",
      "cabinet painting waxahachie",
      "handyman painter midlothian tx",
    ],
    heroEyebrow: "FRESH & CLEAN",
    heroHeadline: "Interior & Exterior Painting in Midlothian, TX",
    primaryBlock: {
      heading: "Crisp Lines, Careful Prep, Clean Results",
      body: "Nothing refreshes a home faster than a fresh coat of paint, but the result is only as good as the prep. CD Garrett Handyman Services patches, sands, caulks and primes before the brush ever touches the wall, then paints rooms, trim, doors, ceilings and accent walls with crisp, clean lines. We also refresh exterior trim, doors and fascia, and handle touch-ups that blend right in. Furniture and floors stay protected, and we leave the space tidy. Free estimates on every project.",
    },
    image: "/Images/specialties/painting.webp",
    relatedServiceNames: [
      "Interior Painting",
      "Exterior Painting & Touch-Up",
      "Drywall Repair & Patching",
      "Trim, Molding & Baseboards",
    ],
    faqs: [
      {
        question: "Do you prep and patch before painting?",
        answer:
          "Always. Good prep is the whole job. We patch holes, sand, caulk gaps and prime so the finish goes on smooth and lasts. We can fold in any [drywall repair](/specialties/drywall-repair/) the room needs.",
      },
      {
        question: "Can you paint cabinets, trim and doors?",
        answer:
          "Yes. Cabinets, trim, doors and accent walls are some of the highest-impact paint projects, and the detail work is where careful brushwork pays off.",
      },
      {
        question: "Do you do exterior painting and touch-ups?",
        answer:
          "We do. Trim, doors, fascia and full touch-ups are refreshed to protect and brighten your home's exterior. Ask for a free estimate.",
      },
    ],
  },
  {
    slug: "patio-covers",
    name: "Patio Covers & Outdoor Living",
    metaTitle: "Patio Covers & Outdoor Living in Midlothian, TX | CD Garrett Handyman",
    metaDescription:
      "Custom patio covers, outdoor fireplaces and backyard living spaces in Midlothian, TX. Built by a 35-year handyman team. Free estimates, Ellis & Dallas counties.",
    keywords: [
      "patio cover midlothian tx",
      "covered patio builder midlothian",
      "outdoor living space ellis county",
      "outdoor fireplace midlothian tx",
      "patio construction midlothian",
      "backyard remodel waxahachie",
      "patio builder midlothian tx",
    ],
    heroEyebrow: "LIVE OUTSIDE",
    heroHeadline: "Patio Covers & Outdoor Living in Midlothian, TX",
    primaryBlock: {
      heading: "Covered Patios, Fireplaces & Backyard Builds",
      body: "A great backyard adds living space you'll actually use, and it's one of the things we love to build. CD Garrett Handyman Services designs and builds custom covered patios with gabled roofs and decorative trusses, stamped-concrete patios, outdoor stone fireplaces, and the finishing touches that turn a backyard into a destination. With 35+ years of carpentry and masonry experience, we build it solid and build it to last. Free estimates and a clear plan before we start.",
    },
    image: "/Images/specialties/patio-covers.webp",
    relatedServiceNames: [
      "Deck & Fence Repair",
      "Trim, Molding & Baseboards",
      "Rot & Wood Replacement",
      "Pressure Washing",
    ],
    faqs: [
      {
        question: "Do you build covered patios from scratch?",
        answer:
          "Yes. Custom covered patios, gabled patio roofs with decorative trusses and stamped-concrete slabs are some of our favorite projects. We'll design it to match your home and build it solid.",
      },
      {
        question: "Can you build an outdoor fireplace?",
        answer:
          "We can. Natural-stone outdoor fireplaces with timber mantels are a showpiece for any backyard, and we've built several across Ellis and Dallas counties.",
      },
      {
        question: "Do outdoor projects need a free estimate first?",
        answer:
          "Yes, and we recommend it. Outdoor builds vary a lot in scope, so we'll walk the space, talk through the design and give you a clear, free estimate before any work begins.",
      },
    ],
  },
  {
    slug: "handyman",
    name: "Handyman & Honey-Do",
    metaTitle: "Handyman & Honey-Do Services in Midlothian, TX | CD Garrett",
    metaDescription:
      "Your whole honey-do list, knocked out in one visit. Trusted handyman in Midlothian, TX for repairs, mounting, assembly and odd jobs. Free estimates, Ellis & Dallas counties.",
    keywords: [
      "handyman midlothian tx",
      "honey do list midlothian",
      "handyman services ellis county",
      "tv mounting midlothian tx",
      "furniture assembly midlothian",
      "odd jobs handyman waxahachie",
      "home repair midlothian tx",
      "handyman near me midlothian",
    ],
    heroEyebrow: "WE DO WHAT YOUR HONEY CAN'T",
    heroHeadline: "Handyman & Honey-Do Services in Midlothian, TX",
    primaryBlock: {
      heading: "Hand Us the Whole List",
      body: "Everybody has a honey-do list, the little repairs and to-dos that never quite get done. That's our specialty. CD Garrett Handyman Services mounts TVs, hangs pictures and mirrors, assembles furniture, re-caulks tubs and counters, pressure-washes driveways and fences, and knocks out the odd jobs you've been meaning to get to. One call, one trip, one tidy list of done. With 35+ years of experience and a satisfaction guarantee, we do what your honey can't, so you can have your weekend back.",
    },
    image: "/Images/specialties/handyman.webp",
    relatedServiceNames: [
      "Honey-Do List & Odd Jobs",
      "TV Mounting & Picture Hanging",
      "Furniture & Equipment Assembly",
      "Caulking & Sealing",
    ],
    faqs: [
      {
        question: "What is a honey-do list, and can I really hand you the whole thing?",
        answer:
          "Yes, please do. A honey-do list is all those small home tasks that pile up, mounting a TV, hanging shelves, fixing a wobbly rail, assembling furniture, re-caulking the tub. We knock out the whole list in one organized visit so you don't have to chase a different person for each job.",
      },
      {
        question: "Is there a job too small to call about?",
        answer:
          "No such thing. Small jobs are our bread and butter, and combining several into one visit is the most cost-effective way to get them all done. One call does it all.",
      },
      {
        question: "Do you charge by the hour or by the job?",
        answer:
          "We provide a free estimate up front so you know the price before we start. For a list of small tasks, we'll quote the whole visit so there are no surprises.",
      },
    ],
  },
];

export const SPECIALTY_SLUGS = SPECIALTIES.map((s) => s.slug);
