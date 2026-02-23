"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface StepDropdownProps {
  options: string[];
  placeholder: string;
  onSelect: (displayText: string) => void;
}

export default function StepDropdown({
  options,
  placeholder,
  onSelect,
}: StepDropdownProps) {
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (selected) {
      onSelect(selected);
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
        <div className="relative">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full appearance-none rounded-lg border border-border bg-white px-4 py-3 pr-10 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>
        <button
          onClick={handleNext}
          disabled={!selected}
          className="mt-3 w-full rounded-xl bg-accent py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          次へ
        </button>
      </div>
    </motion.div>
  );
}
