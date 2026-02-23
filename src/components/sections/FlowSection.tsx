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

        {/* PC: Horizontal Flow */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 gap-3">
            {steps.map((step, index) => {
              const Icon = icons[index];
              const isLast = index === steps.length - 1;
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full shadow-md ${isLast ? "bg-accent text-white" : "border-2 border-dashed border-primary/30 bg-primary/10 text-primary"}`}>
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-1/2 left-full h-0 w-6 -translate-y-1/2 border-t-2 border-dashed border-primary/30" />
                      )}
                    </div>
                    <Icon size={20} className={`mb-2 ${isLast ? "text-accent" : "text-primary"}`} />
                    <h3 className="mb-1 text-sm font-bold text-text">
                      {step.title}
                    </h3>
                    <p className="whitespace-pre-line text-xs leading-relaxed text-text-muted">
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
          <div className="relative ml-8 border-l-2 border-dashed border-primary/30 pl-8">
            {steps.map((step, index) => {
              const Icon = icons[index];
              const isLast = index === steps.length - 1;
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="relative mb-8 last:mb-0">
                    {/* Number Circle */}
                    <div className={`absolute -left-[calc(2rem+1px+1.25rem)] flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-md ${isLast ? "bg-accent text-white" : "border-2 border-dashed border-primary/30 bg-primary/10 text-primary"}`}>
                      {index + 1}
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon size={20} className={`mt-0.5 shrink-0 ${isLast ? "text-accent" : "text-primary"}`} />
                      <div>
                        <h3 className="text-sm font-bold text-text">
                          {step.title}
                        </h3>
                        <p className="mt-0.5 text-xs leading-relaxed text-text-muted">
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
