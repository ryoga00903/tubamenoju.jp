"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICE_AREAS } from "@/lib/constants";

export default function AreaSection() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            engLabel="AREA"
            title="千葉県を中心に対応しています"
            titleClassName="text-[24px] md:text-[32px] lg:text-[36px]"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-2xl">
            <div className="card-rich p-8 lg:p-10">
              <p className="mb-6 text-center text-base font-medium text-text-muted">
                主な対応エリア
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-white px-5 py-2.5 text-base font-medium text-text shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-0.5"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-text-light">
                上記以外のエリアもお気軽にご相談ください
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
