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
        <div className="rounded-2xl bg-primary px-4 py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
          <ScrollReveal>
            <SectionHeading
              label="お客様へのお約束"
              engLabel="PROMISE"
              title="私たちの3つの約束"
              dark
            />
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
            {PROMISES.map((promise, index) => {
              const Icon = icons[index];
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="rounded-xl border-t-4 border-accent bg-white/10 p-7 backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-1 lg:p-10">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {promise.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-white/80">
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
