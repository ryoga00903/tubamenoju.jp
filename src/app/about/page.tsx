import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFixedCTA from "@/components/layout/MobileFixedCTA";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import GreetingSection from "@/components/sections/about/GreetingSection";
import CompanyInfoSection from "@/components/sections/about/CompanyInfoSection";
import BusinessSection from "@/components/sections/about/BusinessSection";
import StaffSection from "@/components/sections/about/StaffSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "会社概要｜つばめの住｜つばめの住",
  description:
    "つばめの住の会社概要。千葉県市川市を拠点に、内装解体工事・建物解体工事・アスベスト除去工事・リフォームなど幅広い建設事業を展開しています。",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHeroSection />
        <GreetingSection />
        <CompanyInfoSection />
        <BusinessSection />
        <StaffSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileFixedCTA />
    </>
  );
}
