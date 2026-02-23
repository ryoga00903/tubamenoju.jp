"use client";

import { ArrowRight } from "lucide-react";
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

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {PRICING.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className={`relative overflow-hidden rounded-2xl border-2 p-6 text-center transition-shadow hover:shadow-lg lg:p-8 ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg"
                    : "border-border bg-white"
                }`}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -right-8 top-4 rotate-45 bg-gold px-10 py-1 text-[10px] font-bold text-white shadow-sm">
                    人気
                  </div>
                )}

                {/* Label */}
                <div
                  className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold ${
                    plan.highlighted
                      ? "bg-white/20 text-white"
                      : "bg-primary-light text-primary"
                  }`}
                >
                  {plan.label}
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/80" : "text-text-muted"
                    }`}
                  >
                    ¥
                  </span>
                  <span className="font-display text-4xl font-bold md:text-[2.5rem] lg:text-5xl">
                    {plan.priceRange}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/80" : "text-text-muted"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>

                <p
                  className={`text-xs ${
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white active:scale-[0.98]"
            >
              施工費用について詳しく見る
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
