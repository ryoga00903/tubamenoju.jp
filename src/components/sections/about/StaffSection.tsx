"use client";

import { HardHat, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: HardHat,
    title: "統一した作業服",
    description:
      "作業スタッフは、統一したヘルメットと作業服・ポロシャツを着用しております。プロフェッショナルとしての責任ある対応を心がけています。",
  },
  {
    icon: Users,
    title: "日本人スタッフ配属",
    description:
      "弊社は、日本人の作業スタッフを配属しております。お客様との円滑なコミュニケーションで安心の施工をお届けします。",
  },
];

export default function StaffSection() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            label="スタッフの特徴"
            engLabel="STAFF"
            title="安心の作業体制"
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-elevated h-full p-6 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-text md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
