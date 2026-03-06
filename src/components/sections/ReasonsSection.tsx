"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  { title: "累計施工実績", description: "確かな実績に裏付けられた\n技術力と対応力" },
  { title: "職人直営店", description: "自社施工による\n一貫した品質管理" },
  { title: "有資格者在籍", description: "施工管理技士などの\n国家資格保有者が対応" },
  { title: "アフターサービス", description: "最長15年保証で\n施工後も責任を持って対応" },
  { title: "地域密着対応", description: "千葉県を中心に\n迅速かつ丁寧に対応" },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="section-padding relative bg-bg-warm">
      {/* Dot pattern overlay */}
      <div className="pattern-dots pointer-events-none absolute inset-0" />

      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeading
            engLabel="REASONS"
            title="私たちが選ばれる5つの理由"
            titleClassName="text-[24px] md:text-[32px] lg:text-[36px]"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-7">
          {reasons.map((reason, index) => (
              <ScrollReveal key={index} delay={index * 0.06}>
                <div className="card-rich flex flex-col items-center p-6 text-center lg:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 text-base font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-text">
                    {reason.title}
                  </h3>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-text-muted">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
