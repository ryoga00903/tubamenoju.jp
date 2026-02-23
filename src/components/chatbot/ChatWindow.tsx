"use client";

import { useCallback, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessageList from "./ChatMessageList";
import { CHATBOT_STEPS, CHATBOT_CONFIG } from "@/lib/chatbot-config";
import type { ChatbotState, ChatbotAction } from "./chatbotTypes";

interface ChatWindowProps {
  state: ChatbotState;
  dispatch: React.Dispatch<ChatbotAction>;
}

export default function ChatWindow({ state, dispatch }: ChatWindowProps) {
  const currentStep =
    state.currentStepIndex < CHATBOT_STEPS.length
      ? CHATBOT_STEPS[state.currentStepIndex]
      : null;

  // タイピングインジケーター後にBotメッセージを表示
  useEffect(() => {
    if (!state.isTyping) return;
    const timer = setTimeout(() => {
      if (currentStep) {
        dispatch({ type: "ADD_BOT_MESSAGE", payload: currentStep.botMessage });
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [state.isTyping, currentStep, dispatch]);

  // ステップ回答ハンドラ
  const handleAnswer = useCallback(
    (displayText: string, value?: string | string[]) => {
      if (!currentStep) return;
      dispatch({
        type: "ANSWER_STEP",
        payload: {
          fieldKey: currentStep.fieldKey,
          value: value ?? displayText,
          displayText,
        },
      });
    },
    [currentStep, dispatch]
  );

  // 送信ハンドラ
  const handleSubmit = useCallback(async () => {
    dispatch({ type: "SUBMIT_START" });
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "送信に失敗しました");
      dispatch({
        type: "SUBMIT_SUCCESS",
        payload: CHATBOT_CONFIG.completionMessage,
      });
    } catch (err) {
      dispatch({
        type: "SUBMIT_ERROR",
        payload:
          err instanceof Error ? err.message : "送信に失敗しました",
      });
    }
  }, [state.formData, dispatch]);

  // リセットハンドラ
  const handleReset = useCallback(() => {
    dispatch({ type: "RESET" });
    // リセット後すぐに開き直す
    setTimeout(() => dispatch({ type: "OPEN" }), 100);
  }, [dispatch]);

  // モバイルでbodyスクロールを防止
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, []);

  // ESCキーで閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "CLOSE" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);

  return (
    <div
      role="dialog"
      aria-label="お問い合わせチャット"
      className="flex h-full w-full flex-col overflow-hidden bg-white md:rounded-2xl md:shadow-2xl"
    >
      <ChatHeader dispatch={dispatch} />
      <ChatMessageList
        state={state}
        currentStep={currentStep}
        onAnswer={handleAnswer}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </div>
  );
}
