export type MessageSender = "bot" | "user";

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  text: string;
  timestamp: Date;
}

export type StepType = "buttons" | "dropdown" | "checkboxes" | "text-input" | "confirmation";

export interface ChatStep {
  id: string;
  type: StepType;
  botMessage: string;
  fieldKey: keyof ChatFormData;
  options?: string[];
  placeholder?: string;
  inputType?: "text" | "tel";
  validation?: (value: string | string[]) => string | null;
}

export interface ChatFormData {
  purpose: string;
  area: string;
  buildingType: string;
  services: string[];
  name: string;
  phone: string;
}

export interface ChatbotState {
  isOpen: boolean;
  isMinimized: boolean;
  currentStepIndex: number;
  messages: ChatMessage[];
  formData: ChatFormData;
  isSubmitting: boolean;
  isCompleted: boolean;
  isTyping: boolean;
  error: string | null;
}

export type ChatbotAction =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "MINIMIZE" }
  | { type: "RESTORE" }
  | { type: "ADD_BOT_MESSAGE"; payload: string }
  | { type: "SET_TYPING"; payload: boolean }
  | { type: "ANSWER_STEP"; payload: { fieldKey: keyof ChatFormData; value: string | string[]; displayText: string } }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS"; payload: string }
  | { type: "SUBMIT_ERROR"; payload: string }
  | { type: "RESET" };
