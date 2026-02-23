"use client";

import { CircleDollarSign, Sparkles, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROMISES } from "@/lib/constants";

const icons = [CircleDollarSign, Sparkles, Zap];

export default function PromisesSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="rounded-2xl bg-primary px-4 py-12 md:px-8 md:py-14 lg:px-12 lg:py-16">
          <ScrollReveal>
            <SectionHeading
              label="お客様へのお約束"
              engLabel="PROMISE"
              title="私たちの3つの約束"
              dark
            />
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {PROMISES.map((promise, index) => {
              const Icon = icons[index];
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="rounded-xl border-t-4 border-accent bg-white/10 p-6 backdrop-blur-sm transition-shadow hover:bg-white/15 lg:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {promise.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/80">
                      {promise.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
