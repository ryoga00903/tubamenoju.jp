"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border bg-white transition-all hover:shadow-sm ${isOpen ? "border-l-4 border-primary shadow-sm" : "border-border"}`}>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left lg:px-6 lg:py-5"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            Q
          </span>
          <span className="text-sm font-bold text-text md:text-base">
            {question}
          </span>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-border px-5 py-4 lg:px-6 lg:py-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  A
                </span>
                <p className="text-sm leading-relaxed text-text-muted">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            label="よくあるご質問"
            engLabel="FAQ"
            title="よくいただくご質問"
          />
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
