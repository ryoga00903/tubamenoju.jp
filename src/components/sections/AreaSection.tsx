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
            label="対応エリア"
            engLabel="AREA"
            title="千葉県を中心に対応しています"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-2xl">
            <p className="mb-6 text-center text-sm text-text-muted">
              主な対応エリア
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-text-light">
              上記以外のエリアもお気軽にご相談ください
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
