"use client";

import { Home, Palette, Search, CircleDollarSign, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const worries = [
  {
    icon: Home,
    title: "地震や台風の影響が気になる方",
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
            title="はじめての外壁塗装は不安ですよね"
            subtitle="そんな不安を抱えている方はあなただけではありません"
            titleClassName="text-[24px] md:text-[32px]"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-5 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {worries.map((worry, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="card-rich flex flex-col items-center p-6 text-center lg:p-8">
                <div className={`mb-4 flex h-18 w-18 items-center justify-center rounded-full ${worry.bgColor} md:h-20 md:w-20 lg:h-24 lg:w-24`}>
                  <worry.icon
                    size={32}
                    className={`${worry.color} lg:h-9 lg:w-9`}
                  />
                </div>
                <p className="whitespace-pre-line text-sm font-medium leading-relaxed text-text md:text-base">
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
              className="inline-flex items-center gap-2 rounded-full bg-primary-light px-8 py-4 text-base font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-md"
            >
              <span>✋</span>
              私たちはそんな不安にひとつひとつお応えします
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
