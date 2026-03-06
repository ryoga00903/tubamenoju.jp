import { COMPANY, FAQ_ITEMS } from "./constants";
import { BASE_URL } from "./config";

// LocalBusiness 構造化データ
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY.name,
    description:
      "千葉県を中心に外壁塗装・屋根塗装・リフォームを行う「株式会社G.S.C」。累計施工実績3,000件以上。",
    url: BASE_URL,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "北方町4丁目1828-1",
      addressLocality: "市川市",
      addressRegion: "千葉県",
      postalCode: "272-0811",
      addressCountry: "JP",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "State",
      name: "千葉県",
    },
    priceRange: "¥600,000〜¥1,700,000",
    image: `${BASE_URL}/images/logo.png`,
  };
}

// FAQPage 構造化データ
export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// BreadcrumbList 構造化データ
export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
