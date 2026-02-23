"use client";

import { useReducer, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import ChatWindow from "./ChatWindow";
import { CHATBOT_STEPS } from "@/lib/chatbot-config";
import type {
  ChatbotState,
  ChatbotAction,
  ChatFormData,
  ChatMessage,
} from "./chatbotTypes";

let messageId = 0;
function createMessage(
  sender: "bot" | "user",
  text: string
): ChatMessage {
  return {
    id: `msg-${++messageId}`,
    sender,
    text,
    timestamp: new Date(),
  };
}

const initialFormData: ChatFormData = {
  purpose: "",
  area: "",
  buildingType: "",
  services: [],
  name: "",
  phone: "",
};

const initialState: ChatbotState = {
  isOpen: false,
  isMinimized: false,
  currentStepIndex: 0,
  messages: [],
  formData: initialFormData,
  isSubmitting: false,
  isCompleted: false,
  isTyping: false,
  error: null,
};

function chatbotReducer(
  state: ChatbotState,
  action: ChatbotAction
): ChatbotState {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        isOpen: true,
        isMinimized: false,
        messages:
          state.messages.length === 0
            ? [createMessage("bot", CHATBOT_STEPS[0].botMessage)]
            : state.messages,
      };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "MINIMIZE":
      return { ...state, isMinimized: true };
    case "RESTORE":
      return { ...state, isMinimized: false };
    case "ADD_BOT_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, createMessage("bot", action.payload)],
        isTyping: false,
      };
    case "SET_TYPING":
      return { ...state, isTyping: action.payload };
    case "ANSWER_STEP": {
      const { fieldKey, value, displayText } = action.payload;
      const newFormData = { ...state.formData, [fieldKey]: value };
      const userMessage = createMessage("user", displayText);
      const nextIndex = state.currentStepIndex + 1;
      return {
        ...state,
        formData: newFormData,
        currentStepIndex: nextIndex,
        messages: [...state.messages, userMessage],
        isTyping: true,
      };
    }
    case "SUBMIT_START":
      return { ...state, isSubmitting: true, error: null };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        isCompleted: true,
        messages: [
          ...state.messages,
          createMessage("bot", action.payload),
        ],
      };
    case "SUBMIT_ERROR":
      return { ...state, isSubmitting: false, error: action.payload };
    case "RESET": {
      messageId = 0;
      return { ...initialState };
    }
    default:
      return state;
  }
}

export default function ChatbotWidget() {
  const [state, dispatch] = useReducer(chatbotReducer, initialState);

  const handleToggle = useCallback(() => {
    if (state.isOpen) {
      dispatch({ type: "CLOSE" });
    } else {
      dispatch({ type: "OPEN" });
    }
  }, [state.isOpen]);

  return (
    <>
      {/* チャットウィンドウ */}
      <AnimatePresence>
        {state.isOpen && !state.isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[60] md:inset-auto md:bottom-24 md:right-6 md:h-[520px] md:w-[380px]"
          >
            <ChatWindow state={state} dispatch={dispatch} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 浮動ボタン */}
      <AnimatePresence>
        {!state.isOpen && (
          <motion.button
            onClick={handleToggle}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-20 right-3 z-50 md:bottom-6 md:right-6"
            aria-label="チャットで相談する"
          >
            <div className="relative">
              {/* メインバナー */}
              <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-amber-500 px-5 py-3 shadow-[0_4px_20px_rgba(196,117,59,0.4)]">
                {/* テキスト */}
                <div className="whitespace-nowrap text-[15px] font-black text-white drop-shadow-sm">
                  チャットで相談
                </div>
              </div>

              {/* パルスアニメーション（注目を引く） */}
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-accent/30"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ zIndex: -1 }}
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 閉じるボタン（チャット開いている時） */}
      <AnimatePresence>
        {state.isOpen && !state.isMinimized && (
          <motion.button
            onClick={handleToggle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-20 right-4 z-[61] flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg md:bottom-6 md:right-6"
            aria-label="チャットを閉じる"
          >
            <X size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
