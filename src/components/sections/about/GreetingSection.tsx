"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { GREETING_MESSAGE, COMPANY } from "@/lib/constants";

export default function GreetingSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            label="代表挨拶"
            engLabel="GREETING"
            title={GREETING_MESSAGE.title}
            titleClassName="text-[22px] md:text-[32px] lg:text-[36px]"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <div className="card-elevated p-8 md:p-12 lg:p-16">
              {/* キーフレーズ */}
              <p className="mb-8 text-center font-display text-base font-bold leading-relaxed text-primary md:mb-10 md:text-lg">
                「０をつくり、０から築く」
                <br className="sm:hidden" />
                <span className="text-text-muted">
                  ── 何もないところから新たな可能性を創り出すこと
                </span>
              </p>

              <div className="space-y-6 md:space-y-8">
                {GREETING_MESSAGE.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] leading-[2] text-text-muted md:text-base md:leading-[2.1]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 flex items-end justify-end gap-4 border-t border-border pt-8 md:mt-14">
                <div className="text-right">
                  <p className="text-sm text-text-muted">
                    {COMPANY.corporateName}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold tracking-wide text-text">
                    代表取締役
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
