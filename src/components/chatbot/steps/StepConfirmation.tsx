"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import type { ChatFormData } from "../chatbotTypes";

interface StepConfirmationProps {
  formData: ChatFormData;
  isSubmitting: boolean;
  error: string | null;
  onSubmit: () => void;
  onReset: () => void;
}

const LABELS: Record<keyof ChatFormData, string> = {
  purpose: "ご用件",
  area: "お住まいの地域",
  buildingType: "建物の種類",
  services: "ご希望サービス",
  name: "お名前",
  phone: "電話番号",
};

export default function StepConfirmation({
  formData,
  isSubmitting,
  error,
  onSubmit,
  onReset,
}: StepConfirmationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="ml-10"
    >
      <div className="rounded-xl border border-border bg-white p-4">
        {/* 入力内容一覧 */}
        <div className="space-y-2">
          {(Object.keys(LABELS) as Array<keyof ChatFormData>).map((key) => {
            const value = formData[key];
            const displayValue = Array.isArray(value)
              ? value.join("、")
              : value;
            if (!displayValue) return null;
            return (
              <div key={key} className="text-sm">
                <span className="font-bold text-text">{LABELS[key]}：</span>
                <span className="text-text-muted">{displayValue}</span>
              </div>
            );
          })}
        </div>

        {/* エラーメッセージ */}
        {error ? (
          <div className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
            {error}
          </div>
        ) : null}

        {/* ボタン */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={onReset}
            disabled={isSubmitting}
            className="flex-1 rounded-xl border border-border bg-white py-3 text-sm font-bold text-text transition-colors hover:bg-bg-gray disabled:opacity-40"
          >
            やり直す
          </button>
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                送信中...
              </>
            ) : (
              "送信する"
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
