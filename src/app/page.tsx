import HeroBanner from "@/components/home/HeroBanner";
import PressStrip from "@/components/home/PressStrip";
import ActionCards from "@/components/home/ActionCards";
import TrustBar from "@/components/home/TrustBar";
import FeaturedServices from "@/components/home/FeaturedServices";
import HoneyDoSpotlight from "@/components/home/HoneyDoSpotlight";
import AboutIntro from "@/components/home/AboutIntro";
import Gallery from "@/components/home/Gallery";
import Reviews from "@/components/home/Reviews";
import ProjectsStrip from "@/components/home/ProjectsStrip";
import FAQSection from "@/components/home/FAQSection";
import OurLocation from "@/components/home/OurLocation";
import SchemaInjector from "@/components/shared/SchemaInjector";
import { businessSchema, faqSchema, webPageSchema } from "@/data/schema";
import { FAQS } from "@/data/faqs";
import { BUSINESS } from "@/data/business";

const HOME_FAQS = FAQS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <SchemaInjector
        schema={[
          businessSchema(),
          faqSchema(HOME_FAQS),
          webPageSchema({
            url: "/",
            name: `${BUSINESS.name} | ${BUSINESS.tagline}`,
            description: BUSINESS.shortDescription,
            primaryImage: "/Images/hero.webp",
            hasBreadcrumb: false,
          }),
        ]}
      />
      <HeroBanner />
      <PressStrip />
      <ActionCards />
      <TrustBar />
      <FeaturedServices />
      <HoneyDoSpotlight />
      <AboutIntro />
      <Gallery />
      <Reviews />
      <ProjectsStrip />
      <FAQSection faqs={HOME_FAQS} />
      <OurLocation />
    </>
  );
}
