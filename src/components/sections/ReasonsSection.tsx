"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  { title: "豊富な実績", description: "累計施工実績\n3,000件以上" },
  { title: "押し売りしない", description: "しつこい営業は\n一切しません" },
  { title: "地域密着", description: "千葉県に根ざして\n15年" },
  { title: "有資格者", description: "一級塗装技能士が\n在籍" },
  { title: "徹底管理", description: "施工管理を\n徹底しています" },
  { title: "下請無し", description: "自社施工で\n中間マージン0" },
  { title: "アフターお任せ", description: "最長10年の\n保証付き" },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="section-padding relative bg-bg-warm">
      {/* Dot pattern overlay */}
      <div className="pattern-dots pointer-events-none absolute inset-0" />

      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeading
            label="私たちが選ばれる理由"
            engLabel="REASONS"
            title="私たちが選ばれる7つの理由"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-7 lg:gap-6">
          {reasons.map((reason, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="card-elevated flex flex-col items-center p-4 text-center lg:p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-text">
                    {reason.title}
                  </h3>
                  <p className="whitespace-pre-line text-xs leading-relaxed text-text-muted">
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
