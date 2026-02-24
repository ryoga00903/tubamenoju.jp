import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFixedCTA from "@/components/layout/MobileFixedCTA";
import HeroSection from "@/components/sections/HeroSection";
import WorriesSection from "@/components/sections/WorriesSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import PromisesSection from "@/components/sections/PromisesSection";
import PricingSection from "@/components/sections/PricingSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FlowSection from "@/components/sections/FlowSection";
import FAQSection from "@/components/sections/FAQSection";
import AreaSection from "@/components/sections/AreaSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { getLocalBusinessJsonLd, getFaqJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd()),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <WorriesSection />
        <div className="section-divider" />
        <ReasonsSection />
        <PromisesSection />
        <PricingSection />
        <BeforeAfterSection />
        <div className="section-divider" />
        <TestimonialsSection />
        <FlowSection />
        <div className="section-divider" />
        <FAQSection />
        <AreaSection />
        <ContactFormSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileFixedCTA />
    </>
  );
}
