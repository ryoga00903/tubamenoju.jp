"use client";

import { Home, Palette, Search, CircleDollarSign, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const worries = [
  {
    icon: Home,
    title: "地震や台風の影響が\n気になる方",
    color: "text-accent",
    bgColor: "bg-accent-light",
  },
  {
    icon: Palette,
    title: "色選びが\n不安",
    color: "text-primary",
    bgColor: "bg-primary-light",
  },
  {
    icon: Search,
    title: "業者選びが\n難しい",
    color: "text-gold",
    bgColor: "bg-gold-light",
  },
  {
    icon: CircleDollarSign,
    title: "見積もりが高いんじゃ\nないか不安",
    color: "text-accent",
    bgColor: "bg-accent-light",
  },
];

export default function WorriesSection() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            engLabel="WORRIES"
            title="はじめての外壁塗装、不安ですよね"
            subtitle="そんな不安を抱えている方、あなただけではありません"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {worries.map((worry, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center rounded-xl border border-border-light bg-white p-5 text-center">
                <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full ${worry.bgColor} md:h-18 md:w-18 lg:h-20 lg:w-20`}>
                  <worry.icon
                    size={28}
                    className={`${worry.color} lg:h-8 lg:w-8`}
                  />
                </div>
                <p className="whitespace-pre-line text-xs font-medium leading-relaxed text-text md:text-sm">
                  {worry.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="#reasons"
              className="inline-flex items-center gap-2 rounded-full bg-primary-light px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <span>✋</span>
              私たちは、そんな不安にひとつひとつお応えします
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
