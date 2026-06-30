import { BUSINESS } from "./business";

export type FAQ = { question: string; answer: string };

// Inline links use markdown-style syntax: [anchor text](/url/).
// FAQSection renders these as <Link> elements; faqSchema strips them to plain text.
export const FAQS: FAQ[] = [
  {
    question: "What areas do you serve?",
    answer:
      `We're based in Midlothian and serve homeowners across Ellis and Dallas counties, including [Waxahachie](/near/waxahachie-tx/), [Red Oak](/near/red-oak-tx/), [Ovilla](/near/ovilla-tx/), [Ennis](/near/ennis-tx/), [Cedar Hill](/near/cedar-hill-tx/), [DeSoto](/near/desoto-tx/) and [Mansfield](/near/mansfield-tx/). Not sure if you're in our area? Just call ${BUSINESS.phone}.`,
  },
  {
    question: "Are estimates really free?",
    answer:
      `Yes. Every estimate is free, with no obligation. We'll look at the job, talk through your options, and give you honest, upfront pricing before any work starts. [Request a free estimate](/get-a-quote/) or call ${BUSINESS.phone}.`,
  },
  {
    question: "What kinds of jobs do you do?",
    answer:
      "Just about anything around the house: [plumbing](/specialties/plumbing/), [electrical and lighting](/specialties/electrical/), [drywall repair](/specialties/drywall-repair/), [carpentry](/specialties/carpentry/), [ceiling fans](/specialties/ceiling-fan-installation/), [door installation](/specialties/door-installation/), [painting](/specialties/painting/), and full [bathroom](/specialties/bathroom-remodeling/) and [kitchen remodels](/specialties/kitchen-remodeling/). If it's on your honey-do list, we can probably handle it.",
  },
  {
    question: "Is there a job too small to call about?",
    answer:
      "Never. Small jobs are our specialty. In fact, the most cost-effective way to use us is to save up a list of small repairs and have us knock them all out in one visit. One call does it all.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "CD Garrett Handyman Services has more than 35 years of experience in the handyman trade. We're a family-owned company built on professionalism, craftsmanship and treating customers right. Read [our story](/our-story/).",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "We do. We don't leave until the job is done right and you're completely satisfied. That's been our promise from day one, and it's why so much of our work comes from repeat customers and referrals. See our [satisfaction guarantee](/satisfaction-guarantee/).",
  },
  {
    question: "How do I schedule a handyman?",
    answer:
      `It's easy. Call or text us at ${BUSINESS.phone}, or [request a free estimate online](/get-a-quote/). Tell us what you need done and we'll set up a time that works for you.`,
  },
  {
    question: "Do you charge by the hour or by the job?",
    answer:
      "We give you a free estimate up front so you know the price before we begin. For a list of smaller tasks, we'll quote the whole visit, so there are no surprises when the work is done.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes, we carry insurance and treat every home with care and respect. We protect your floors and furniture, clean up when we're finished, and leave the space better than we found it.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check and major credit cards. We'll go over payment details along with your free estimate so everything is clear before work begins.",
  },
  {
    question: "Do you do bathroom and kitchen remodels?",
    answer:
      "Yes. From a quick refresh of fixtures and paint to a full [bathroom](/specialties/bathroom-remodeling/) or [kitchen remodel](/specialties/kitchen-remodeling/) with new tile, cabinets and lighting, one trusted crew handles the whole project.",
  },
  {
    question: "Can you handle a long list of repairs in one visit?",
    answer:
      "That's exactly what we love to do. Hand us the whole [honey-do list](/specialties/handyman/), TV mounting, a sticky door, a leaky faucet, a wobbly fence, and we'll knock it all out in one organized trip.",
  },
  {
    question: "Do you do emergency or after-hours work?",
    answer:
      `For urgent repairs, give us a call at ${BUSINESS.phone}. We'll do our best to get to you quickly. We're available by appointment and welcome after-hours and emergency calls when we can help.`,
  },
  {
    question: "Where are you located?",
    answer:
      `Our shop is at ${BUSINESS.address.full}, right here in Midlothian. We come to you, serving homes throughout Ellis and Dallas counties.`,
  },
];
