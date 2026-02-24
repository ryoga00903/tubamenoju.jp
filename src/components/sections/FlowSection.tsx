"use client";

import {
  Phone,
  Search,
  FileText,
  Handshake,
  PaintBucket,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Phone, Search, FileText, Handshake, PaintBucket, ShieldCheck];

const steps = [
  { title: "お問い合わせ", description: "お電話・LINE・メールで\nお気軽にご連絡ください" },
  { title: "現地調査", description: "専門スタッフが無料で\n現地調査にお伺いします" },
  { title: "お見積もり", description: "調査結果をもとに\n詳細なお見積もりをご提示" },
  { title: "ご契約", description: "内容にご納得\nいただけましたらご契約" },
  { title: "施工", description: "熟練の職人が\n丁寧に施工いたします" },
  { title: "施工・完成", description: "完了後、一緒に\n最終確認を行います" },
];

export default function FlowSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            label="ご利用の流れ"
            engLabel="FLOW"
            title="お問い合わせから完成までの流れ"
            subtitle="丁寧にご案内いたしますのでご安心ください"
          />
        </ScrollReveal>

        {/* PC: 3列グリッド */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-x-8 gap-y-10">
            {steps.map((step, index) => {
              const Icon = icons[index];
              const isLast = index === steps.length - 1;
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className={`flex h-20 w-20 items-center justify-center rounded-full shadow-lg ${isLast ? "bg-accent text-white" : "border-2 border-primary/20 bg-white text-primary"}`}>
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <Icon size={24} className={`mb-3 ${isLast ? "text-accent" : "text-primary"}`} />
                    <h3 className="mb-2 text-base font-bold text-text">
                      {step.title}
                    </h3>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* SP: Vertical Flow */}
        <div className="md:hidden">
          <div className="relative ml-8 border-l-2 border-dashed border-primary/40 pl-8">
            {steps.map((step, index) => {
              const Icon = icons[index];
              const isLast = index === steps.length - 1;
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="relative mb-10 last:mb-0">
                    {/* Number Circle */}
                    <div className={`absolute -left-[calc(2rem+1px+1.375rem)] flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold shadow-md ${isLast ? "bg-accent text-white" : "border-2 border-dashed border-primary/40 bg-primary/10 text-primary"}`}>
                      {index + 1}
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon size={22} className={`mt-0.5 shrink-0 ${isLast ? "text-accent" : "text-primary"}`} />
                      <div>
                        <h3 className="text-base font-bold text-text">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-muted">
                          {step.description.replace(/\n/g, "")}
                        </p>
                      </div>
                    </div>
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
