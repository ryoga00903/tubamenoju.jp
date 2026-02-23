"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface StepCheckboxesProps {
  options: string[];
  onSelect: (displayText: string, value: string[]) => void;
}

export default function StepCheckboxes({
  options,
  onSelect,
}: StepCheckboxesProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    if (selected.length > 0) {
      onSelect(selected.join("、"), selected);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="ml-10"
    >
      <div className="rounded-xl border border-border bg-white p-4">
        <div className="flex flex-wrap gap-2">
          {options.map((option) => {
            const isSelected = selected.includes(option);
            return (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm transition-colors ${
                  isSelected
                    ? "border-accent bg-accent-light font-medium text-accent-dark"
                    : "border-border bg-white text-text hover:border-primary hover:bg-primary-light"
                }`}
              >
                {isSelected && <Check size={14} />}
                {option}
              </button>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          disabled={selected.length === 0}
          className="mt-3 w-full rounded-xl bg-accent py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          次へ
        </button>
      </div>
    </motion.div>
  );
}
