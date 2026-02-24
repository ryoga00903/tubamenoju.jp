import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

const BASE_URL = "https://tubamenoju.jp";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "つばめの住｜千葉県の外壁塗装・屋根塗装・リフォーム専門",
    template: "%s｜つばめの住",
  },
  description:
    "千葉県を中心に外壁塗装・屋根塗装・リフォームを行う「つばめの住」。はじめてでもわかりやすくご案内します。無料見積もり受付中。",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "つばめの住｜千葉県の外壁塗装・屋根塗装・リフォーム専門",
    description:
      "千葉県を中心に外壁塗装・屋根塗装・リフォームを行う「つばめの住」。はじめてでもわかりやすくご案内します。",
    url: BASE_URL,
    siteName: "つばめの住",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "つばめの住｜千葉県の外壁塗装・屋根塗装・リフォーム専門",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "つばめの住｜千葉県の外壁塗装・屋根塗装・リフォーム専門",
    description:
      "千葉県を中心に外壁塗装・屋根塗装・リフォームを行う「つばめの住」。はじめてでもわかりやすくご案内します。",
    images: [`${BASE_URL}/images/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${shipporiMincho.variable} font-sans antialiased`}>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
