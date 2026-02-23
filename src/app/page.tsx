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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WorriesSection />
        <ReasonsSection />
        <PromisesSection />
        <PricingSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FlowSection />
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
