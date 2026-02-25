"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRICING } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            engLabel="PRICING"
            title="外壁塗装の価格目安"
            subtitle="お住まいの大きさや状態により異なります。まずはお気軽にお見積もりをご依頼ください。"
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {PRICING.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className={`relative overflow-hidden rounded-2xl border-2 p-8 text-center transition-all hover:shadow-xl hover:-translate-y-2 lg:p-10 ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl ring-2 ring-gold/20"
                    : "border-border bg-white shadow-md"
                }`}
              >
                {/* Popular badge */}
                {plan.highlighted ? (
                  <div className="absolute -right-8 top-4 rotate-45 bg-gold px-10 py-1 text-xs font-bold text-white shadow-sm">
                    人気
                  </div>
                ) : null}

                {/* Label */}
                <div
                  className={`mb-6 inline-block rounded-full px-5 py-2 text-sm font-bold ${
                    plan.highlighted
                      ? "bg-white/20 text-white"
                      : "bg-primary-light text-primary"
                  }`}
                >
                  {plan.label}
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span
                    className={`text-base ${
                      plan.highlighted ? "text-white/80" : "text-text-muted"
                    }`}
                  >
                    ¥
                  </span>
                  <span className="font-display text-5xl font-bold md:text-[3rem] lg:text-[3.5rem]">
                    {plan.priceRange}
                  </span>
                  <span
                    className={`text-base ${
                      plan.highlighted ? "text-white/80" : "text-text-muted"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>

                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-white/70" : "text-text-light"
                  }`}
                >
                  （{plan.tax}・{plan.note}）
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-4 text-base font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-lg active:scale-[0.98]"
            >
              施工費用について詳しく見る
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
