"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO_TABLE } from "@/lib/constants";

export default function CompanyInfoSection() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            label="会社情報"
            engLabel="COMPANY"
            title="会社概要"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-md">
            <dl>
              {COMPANY_INFO_TABLE.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col border-b border-border last:border-b-0 md:flex-row"
                >
                  <dt className="shrink-0 bg-primary-light px-5 py-3 text-sm font-bold text-primary md:w-48 md:px-6 md:py-4">
                    {item.label}
                  </dt>
                  <dd className="px-5 py-3 text-sm text-text md:px-6 md:py-4">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
