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
            <div className="card-elevated p-6 md:p-10 lg:p-12">
              <div className="space-y-5 border-l-4 border-accent pl-5 md:pl-8">
                {GREETING_MESSAGE.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-[1.9] text-text-muted md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 text-right">
                <p className="font-display text-sm text-text-muted">
                  {COMPANY.corporateName}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-text">
                  代表取締役
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
