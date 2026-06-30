/**
 * Service axis for the future service × city mesh route (`/[service]-in-[city]/`).
 *
 * This list is DORMANT SEO infrastructure. The mesh route is gated by an empty
 * MATRIX_ALLOWLIST in matrix.ts, so nothing renders from it yet. When the client
 * is ready to expand local landing pages (e.g. "drywall-repair-in-waxahachie-tx"),
 * populate `intro`/`keywords` per service and add allowlist entries.
 *
 * The authoritative service list lives in services.ts; these entries are
 * SEO/content surfaces only and map back to a /specialties/[topic] page.
 */

export type Dish = {
  slug: string;
  name: string;
  /** Alternate phrasings — used in copy and JSON-LD `alternateName`. */
  aliases: string[];
  heroImage: string;
  /** Long-tail keywords, city-agnostic. Combined with the city axis at render time. */
  keywords: string[];
  /** Short paragraph used as the meta description seed and intro lede. */
  intro: string;
  /** Slug of the canonical `/specialties/[topic]/` page this service maps to. */
  relatedSpecialtySlug?: string;
  /** Names of related services in services.ts. */
  relatedMenuItemNames?: string[];
};

export const DISHES: Dish[] = [
  {
    slug: "plumbing-repair",
    name: "Plumbing Repair",
    aliases: ["Plumbing", "Faucet Repair", "Toilet Repair"],
    heroImage: "/Images/specialties/plumbing.webp",
    keywords: [],
    intro: "",
    relatedSpecialtySlug: "plumbing",
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    aliases: ["Sheetrock Repair", "Drywall Patching", "Texture Matching"],
    heroImage: "/Images/specialties/drywall-repair.webp",
    keywords: [],
    intro: "",
    relatedSpecialtySlug: "drywall-repair",
  },
  {
    slug: "ceiling-fan-installation",
    name: "Ceiling Fan Installation",
    aliases: ["Ceiling Fan Install", "Fan Replacement"],
    heroImage: "/Images/specialties/ceiling-fan-installation.webp",
    keywords: [],
    intro: "",
    relatedSpecialtySlug: "ceiling-fan-installation",
  },
  {
    slug: "door-installation",
    name: "Door Installation",
    aliases: ["Door Hanging", "Interior Door Install", "Exterior Door Install"],
    heroImage: "/Images/specialties/door-installation.webp",
    keywords: [],
    intro: "",
    relatedSpecialtySlug: "door-installation",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    aliases: ["Bathroom Remodel", "Bathroom Renovation"],
    heroImage: "/Images/specialties/bathroom-remodeling.webp",
    keywords: [],
    intro: "",
    relatedSpecialtySlug: "bathroom-remodeling",
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    aliases: ["Kitchen Remodel", "Kitchen Renovation"],
    heroImage: "/Images/specialties/kitchen-remodeling.webp",
    keywords: [],
    intro: "",
    relatedSpecialtySlug: "kitchen-remodeling",
  },
  {
    slug: "painting",
    name: "Painting",
    aliases: ["Interior Painting", "Exterior Painting", "House Painting"],
    heroImage: "/Images/specialties/painting.webp",
    keywords: [],
    intro: "",
    relatedSpecialtySlug: "painting",
  },
];

export const DISH_SLUGS = DISHES.map((d) => d.slug);
