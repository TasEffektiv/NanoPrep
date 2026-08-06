import { buildMetadata } from "@/lib/metadata";
import HomeHero from "@/components/home/HomeHero";
import AboutTeaser from "@/components/home/AboutTeaser";
import ProcessSection from "@/components/home/ProcessSection";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import VideoPreview from "@/components/home/VideoPreview";
import NewsPreview from "@/components/home/NewsPreview";
import Testimonials from "@/components/home/Testimonials";
import WhySection from "@/components/home/WhySection";
import ContactSection from "@/components/home/ContactSection";

export const metadata = buildMetadata({
  title: "NanoPrep — Corrosion Protection Without Blasting",
  description:
    "NanoPrep is an environmentally friendly rust primer and anticorrosive industrial coating that reacts with rusted, painted and exposed steel. No grit blasting required!",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutTeaser />
      <ProcessSection />
      <CaseStudiesPreview />
      <VideoPreview />
      <Testimonials />
      <WhySection />
      <NewsPreview />
      <ContactSection />
    </>
  );
}
