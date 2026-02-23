"use client";

import {
  Hammer,
  PaintBucket,
  ShieldAlert,
  Building2,
  TreePine,
  Recycle,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS_CATEGORIES } from "@/lib/constants";

const icons = [Hammer, PaintBucket, ShieldAlert, Building2, TreePine, Recycle];

export default function BusinessSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            label="事業内容"
            engLabel="BUSINESS"
            title="幅広い建設サービスを展開"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {BUSINESS_CATEGORIES.map((category, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="card-elevated h-full p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-text md:text-lg">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
