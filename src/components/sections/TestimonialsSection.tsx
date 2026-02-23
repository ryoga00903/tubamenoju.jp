"use client";

import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

const borderColors = ["border-primary", "border-accent", "border-gold"];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            engLabel="VOICE"
            title="たくさんのお喜びの声をいただいています"
          />
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className={`relative rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md border-l-4 ${borderColors[index % borderColors.length]}`}>
                {/* Large quote mark */}
                <div className="pointer-events-none absolute top-3 right-4 font-display text-5xl leading-none text-primary/10">
                  &ldquo;
                </div>

                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-text-muted">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed text-text-muted">
                  {testimonial.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
