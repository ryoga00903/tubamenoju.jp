import { SERVICE_AREAS } from "@/lib/constants";
import type { ChatStep } from "@/components/chatbot/chatbotTypes";

// 日本の電話番号形式（固定電話・携帯電話）
const PHONE_PATTERN = /^0\d{1,4}-?\d{1,4}-?\d{3,4}$/;

export const CHATBOT_STEPS: ChatStep[] = [
  {
    id: "purpose",
    type: "buttons",
    botMessage:
      "こんにちは！「株式会社G.S.C」です。\nお問い合わせありがとうございます。\n\nどのようなご用件でしょうか？",
    fieldKey: "purpose",
    options: ["見積もりを取りたい", "相談したい", "その他"],
  },
  {
    id: "area",
    type: "dropdown",
    botMessage: "ありがとうございます！\nお住まいの地域を教えてください。",
    fieldKey: "area",
    options: [...SERVICE_AREAS, "その他"],
    placeholder: "地域を選択してください",
  },
  {
    id: "buildingType",
    type: "dropdown",
    botMessage: "建物の種類を教えてください。",
    fieldKey: "buildingType",
    options: ["戸建て", "アパート", "マンション", "ビル", "その他"],
    placeholder: "建物の種類を選択してください",
  },
  {
    id: "services",
    type: "checkboxes",
    botMessage: "ご検討中のサービスを選択してください。\n（複数選択可）",
    fieldKey: "services",
    options: [
      "外壁塗装",
      "屋根工事",
      "防水工事",
      "シーリング工事",
      "リフォーム工事",
      "修理・補修",
      "その他",
    ],
  },
  {
    id: "name",
    type: "text-input",
    botMessage: "お名前を教えてください。",
    fieldKey: "name",
    placeholder: "例：山田 太郎",
    inputType: "text",
    validation: (value) => {
      if (typeof value === "string" && value.trim().length === 0)
        return "お名前を入力してください";
      return null;
    },
  },
  {
    id: "phone",
    type: "text-input",
    botMessage:
      "お電話番号を教えてください。\n担当者より折り返しご連絡いたします。",
    fieldKey: "phone",
    placeholder: "例：090-1234-5678",
    inputType: "tel",
    validation: (value) => {
      if (typeof value === "string" && value.trim().length === 0)
        return "電話番号を入力してください";
      if (typeof value === "string" && !PHONE_PATTERN.test(value.trim()))
        return "電話番号の形式が正しくありません";
      return null;
    },
  },
  {
    id: "confirmation",
    type: "confirmation",
    botMessage: "以下の内容でお問い合わせを送信いたします。\nよろしいですか？",
    fieldKey: "name",
  },
];

export const CHATBOT_CONFIG = {
  botName: "株式会社G.S.C",
  botSubtitle: "お問い合わせアシスタント",
  completionMessage:
    "お問い合わせありがとうございます！\n担当者より折り返しご連絡いたします。\nお急ぎの場合は 047-338-7011 までお電話ください。",
} as const;
