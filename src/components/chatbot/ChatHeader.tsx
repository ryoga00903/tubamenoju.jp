"use client";

import { Minus, X } from "lucide-react";
import Image from "next/image";
import { CHATBOT_CONFIG } from "@/lib/chatbot-config";
import type { ChatbotAction } from "./chatbotTypes";

interface ChatHeaderProps {
  dispatch: React.Dispatch<ChatbotAction>;
}

export default function ChatHeader({ dispatch }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-primary px-4 py-3 text-white md:rounded-t-2xl">
      <div className="flex items-center gap-3">
        {/* アバター */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 overflow-hidden">
          <Image src="/images/logo.png" alt="つばめの住" width={32} height={32} className="h-7 w-7 object-contain brightness-0 invert" />
        </div>
        <div>
          <div className="text-sm font-bold leading-tight">
            {CHATBOT_CONFIG.botName}
          </div>
          <div className="text-[11px] leading-tight text-white/70">
            {CHATBOT_CONFIG.botSubtitle}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => dispatch({ type: "MINIMIZE" })}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/20"
          aria-label="最小化"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={() => dispatch({ type: "CLOSE" })}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/20"
          aria-label="閉じる"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
