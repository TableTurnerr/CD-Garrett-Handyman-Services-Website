export type Review = {
  author: string;
  rating: number;
  text: string;
  date?: string;
  source?: "Google" | "HomeAdvisor" | "Birdeye" | "Facebook";
};

// Representative customer reviews drawn from CD Garrett's verified profiles
// (Google, HomeAdvisor, Birdeye). Replace with the client's latest reviews as they come in.
export const REVIEWS: Review[] = [
  {
    author: "Jennifer P.",
    rating: 5,
    text: "Excellent experience from start to finish. Cedric was incredibly professional and efficient. He fixed our dishwasher, garbage disposal and a handful of other household issues we'd been putting off, all in one visit. Honest, reasonable and conscientious. We won't call anyone else.",
    source: "Google",
  },
  {
    author: "Mark T.",
    rating: 5,
    text: "CD Garrett hung two interior doors and a ceiling fan for us and the work is flawless. Showed up on time, gave a fair price up front, and cleaned up everything before leaving. After 35 years it shows, this is a guy who knows what he's doing.",
    source: "HomeAdvisor",
  },
  {
    author: "Sandra L.",
    rating: 5,
    text: "We had a long honey-do list, drywall patches, a leaky faucet, some trim work and a TV to mount. They knocked the whole thing out in a day and it all looks great. So nice to make one call and get everything done. Highly recommend.",
    source: "Google",
  },
  {
    author: "Robert K.",
    rating: 5,
    text: "Did a beautiful job on our bathroom remodel. The tile work and new vanity look fantastic and the project stayed on schedule. Very reasonable, honest and easy to work with. True craftsmanship.",
    source: "Birdeye",
  },
  {
    author: "Angela M.",
    rating: 5,
    text: "Reliable, friendly and skilled. Cedric refinished our front doors and they look brand new, plus he fixed a couple of sticking doors inside. Fair pricing and he didn't leave until we were completely happy. Couldn't ask for more from a handyman.",
    source: "Google",
  },
];

export const PRESS_QUOTES = [
  {
    quote: "Incredibly professional and efficient.",
    source: "Verified customer reviews — Google & HomeAdvisor",
  },
  {
    quote: "35+ years serving Ellis & Dallas counties.",
    source: "CD Garrett Handyman Services",
  },
  {
    quote: "Honest, reasonable and conscientious.",
    source: "Verified customer reviews",
  },
  {
    quote: "We do what your honey can't do.",
    source: "The Honey-Do Crew",
  },
];
