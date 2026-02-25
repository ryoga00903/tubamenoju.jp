"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface StepTextInputProps {
  placeholder: string;
  inputType: "text" | "tel";
  validation?: (value: string | string[]) => string | null;
  onSubmit: (displayText: string) => void;
}

export default function StepTextInput({
  placeholder,
  inputType,
  validation,
  onSubmit,
}: StepTextInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (validation) {
      const err = validation(value);
      if (err) {
        setError(err);
        return;
      }
    }
    setError(null);
    onSubmit(value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
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
        <input
          type={inputType}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(null);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          autoFocus
        />
        {error ? (
          <p className="mt-2 text-xs text-red-600">{error}</p>
        ) : null}
        <button
          onClick={handleNext}
          disabled={value.trim().length === 0}
          className="mt-3 w-full rounded-xl bg-accent py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          次へ
        </button>
      </div>
    </motion.div>
  );
}
