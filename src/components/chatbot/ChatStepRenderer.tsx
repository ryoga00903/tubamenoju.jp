"use client";

import StepButtons from "./steps/StepButtons";
import StepDropdown from "./steps/StepDropdown";
import StepCheckboxes from "./steps/StepCheckboxes";
import StepTextInput from "./steps/StepTextInput";
import StepConfirmation from "./steps/StepConfirmation";
import type { ChatStep, ChatFormData } from "./chatbotTypes";

interface ChatStepRendererProps {
  step: ChatStep;
  formData: ChatFormData;
  isSubmitting: boolean;
  error: string | null;
  onAnswer: (displayText: string, value?: string | string[]) => void;
  onSubmit: () => void;
  onReset: () => void;
}

export default function ChatStepRenderer({
  step,
  formData,
  isSubmitting,
  error,
  onAnswer,
  onSubmit,
  onReset,
}: ChatStepRendererProps) {
  switch (step.type) {
    case "buttons":
      return <StepButtons options={step.options ?? []} onSelect={onAnswer} />;
    case "dropdown":
      return (
        <StepDropdown
          options={step.options ?? []}
          placeholder={step.placeholder ?? "選択してください"}
          onSelect={onAnswer}
        />
      );
    case "checkboxes":
      return (
        <StepCheckboxes options={step.options ?? []} onSelect={onAnswer} />
      );
    case "text-input":
      return (
        <StepTextInput
          placeholder={step.placeholder ?? ""}
          inputType={step.inputType ?? "text"}
          validation={step.validation}
          onSubmit={onAnswer}
        />
      );
    case "confirmation":
      return (
        <StepConfirmation
          formData={formData}
          isSubmitting={isSubmitting}
          error={error}
          onSubmit={onSubmit}
          onReset={onReset}
        />
      );
    default:
      return null;
  }
}
