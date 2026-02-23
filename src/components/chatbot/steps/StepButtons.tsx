"use client";

import { motion } from "framer-motion";

interface StepButtonsProps {
  options: string[];
  onSelect: (displayText: string) => void;
}

export default function StepButtons({ options, onSelect }: StepButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="ml-10 flex flex-col gap-2"
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-left text-sm font-medium text-text transition-colors hover:border-primary hover:bg-primary-light"
        >
          {option}
        </button>
      ))}
    </motion.div>
  );
}
