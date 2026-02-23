"use client";

import { motion } from "framer-motion";
import type { ChatMessage } from "./chatbotTypes";

interface ChatBubbleProps {
  message: ChatMessage;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isBot = message.sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, x: isBot ? -10 : 10, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex items-start gap-2 ${isBot ? "" : "justify-end"}`}
    >
      {/* Botアバター */}
      {isBot && (
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
      )}

      <div className={`max-w-[80%] ${isBot ? "" : "text-right"}`}>
        {/* メッセージバブル */}
        <div
          className={`inline-block rounded-xl px-4 py-3 text-sm leading-relaxed ${
            isBot
              ? "rounded-tl-sm border border-border bg-white text-text"
              : "rounded-tr-sm bg-primary text-white"
          }`}
        >
          {message.text.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < message.text.split("\n").length - 1 && <br />}
            </span>
          ))}
        </div>
        {/* タイムスタンプ */}
        <div
          className={`mt-1 text-[10px] text-text-light ${
            isBot ? "" : "text-right"
          }`}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>
    </motion.div>
  );
}
