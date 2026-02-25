"use client";

import { useCallback } from "react";
import { Phone, MessageCircle, FileText, ShieldCheck, Users, Banknote } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

const decorativeCircles = (
  <>
    <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/8" />
    <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/8" />
  </>
);

export default function FinalCTASection() {
  const handleContactClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("contact");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24 lg:py-28"
    >
      {decorativeCircles}

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white">
              無料お見積もり
            </span>
            <h2 className="mb-4 font-display text-[24px] font-bold text-white md:text-[34px] lg:text-[38px]">
              まずは相場確認からでも大丈夫です
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/80 md:text-lg">
              お住まいのご状態を確認させていただきしっかりとご提案いたします。
              <br className="hidden lg:block" />
              相見積もりも大歓迎です。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-10 py-5 text-xl font-bold text-primary shadow-lg transition-all hover:bg-gray-50 hover:shadow-2xl active:scale-[0.98] sm:w-auto"
            >
              <Phone size={24} />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.lineUrl}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-secondary px-10 py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-secondary-dark hover:shadow-2xl active:scale-[0.98] sm:w-auto"
            >
              <MessageCircle size={22} />
              LINEで相談する
            </a>
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-white/40 bg-white/10 px-10 py-5 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-2xl active:scale-[0.98] sm:w-auto"
            >
              <FileText size={22} />
              無料見積もり
            </Link>
          </div>
        </ScrollReveal>

        {/* Trust signals */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-base text-white/80">
            <span className="flex items-center gap-2">
              <Users size={16} />
              相見積もり歓迎
            </span>
            <span className="flex items-center gap-2">
              <Banknote size={16} />
              お見積もり無料
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} />
              しつこい営業なし
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
