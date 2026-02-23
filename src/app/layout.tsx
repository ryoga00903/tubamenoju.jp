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

export const metadata: Metadata = {
  title: "つばめの住｜千葉県の外壁塗装・屋根塗装・リフォーム専門",
  description:
    "千葉県を中心に外壁塗装・屋根塗装・リフォームを行う「つばめの住」。はじめてでもわかりやすくご案内します。無料見積もり受付中。",
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
    type: "website",
    locale: "ja_JP",
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
