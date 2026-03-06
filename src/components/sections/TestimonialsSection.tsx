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
            title="お客様の声"
          />
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className={`relative overflow-hidden rounded-2xl border border-border-light bg-white p-7 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 border-l-4 ${borderColors[index % borderColors.length]} lg:p-8`}>
                {/* Large quote mark */}
                <div className="pointer-events-none absolute top-3 right-4 font-display text-6xl leading-none text-primary/15">
                  &ldquo;
                </div>

                {/* Header */}
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-sm">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-base font-bold text-text">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base leading-relaxed text-text-muted">
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
