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
import { getLocalBusinessJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonld";

const BASE_URL = "https://tubamenoju.jp";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社G.S.Cの会社概要。千葉県市川市を拠点に、内装解体工事・建物解体工事・アスベスト除去工事・リフォームなど幅広い建設事業を展開しています。",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "会社概要｜株式会社G.S.C",
    description:
      "株式会社G.S.Cの会社概要。千葉県市川市を拠点に、外壁塗装・屋根塗装・リフォームなど幅広い建設事業を展開しています。",
    url: `${BASE_URL}/about`,
    siteName: "株式会社G.S.C",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "株式会社G.S.C 会社概要",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "会社概要｜株式会社G.S.C",
    description:
      "株式会社G.S.Cの会社概要。千葉県市川市を拠点に、外壁塗装・屋根塗装・リフォームなど幅広い建設事業を展開しています。",
    images: [`${BASE_URL}/images/og-image.png`],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "ホーム", url: BASE_URL },
    { name: "会社概要", url: `${BASE_URL}/about` },
  ];

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
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />
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
