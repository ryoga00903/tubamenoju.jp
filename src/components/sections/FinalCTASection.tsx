"use client";

import { useCallback } from "react";
import { Phone, MessageCircle, FileText, ShieldCheck, Users, Banknote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

export default function FinalCTASection() {
  const handleContactClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("contact");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
    // ページ内に#contactがなければ /#contact へ通常遷移
  }, []);

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary py-16 md:py-18 lg:py-20"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold text-white">
              無料お見積もり
            </span>
            <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl lg:text-[32px]">
              まずは相場確認からでも大丈夫です
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/80 md:text-base">
              お住まいのご状態を確認させていただき、しっかりとご提案いたします。
              <br className="hidden lg:block" />
              相見積もりも大歓迎です。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl active:scale-[0.98] sm:w-auto"
            >
              <Phone size={22} />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.lineUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-secondary-dark hover:shadow-xl active:scale-[0.98] sm:w-auto"
            >
              <MessageCircle size={20} />
              LINEで相談する
            </a>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-xl active:scale-[0.98] sm:w-auto"
            >
              <FileText size={20} />
              無料見積もり
            </a>
          </div>
        </ScrollReveal>

        {/* Trust signals */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Users size={14} />
              相見積もり歓迎
            </span>
            <span className="flex items-center gap-1.5">
              <Banknote size={14} />
              お見積もり無料
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} />
              しつこい営業なし
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
