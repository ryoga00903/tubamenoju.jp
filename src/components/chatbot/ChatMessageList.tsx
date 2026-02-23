"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ChatBubble from "./ChatBubble";
import ChatStepRenderer from "./ChatStepRenderer";
import type { ChatbotState, ChatStep, ChatFormData } from "./chatbotTypes";

interface ChatMessageListProps {
  state: ChatbotState;
  currentStep: ChatStep | null;
  onAnswer: (displayText: string, value?: string | string[]) => void;
  onSubmit: () => void;
  onReset: () => void;
}

// タイピングインジケーター
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-2"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
      <div className="inline-block rounded-xl rounded-tl-sm border border-border bg-white px-4 py-3">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-2 w-2 rounded-full bg-text-light"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ChatMessageList({
  state,
  currentStep,
  onAnswer,
  onSubmit,
  onReset,
}: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // メッセージ追加時にスクロール
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages, state.isTyping]);

  return (
    <div className="flex-1 overflow-y-auto bg-bg-gray px-4 py-4">
      <div className="flex flex-col gap-4">
        {state.messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}

        {/* タイピングインジケーター */}
        {state.isTyping && <TypingIndicator />}

        {/* インタラクティブステップ入力 */}
        {!state.isTyping && !state.isCompleted && currentStep && (
          <ChatStepRenderer
            step={currentStep}
            formData={state.formData}
            isSubmitting={state.isSubmitting}
            error={state.error}
            onAnswer={onAnswer}
            onSubmit={onSubmit}
            onReset={onReset}
          />
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
