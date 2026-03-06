import { Resend } from "resend";

interface SendEmailOptions {
  subject: string;
  text: string;
}

// 共通メール送信ユーティリティ
export async function sendEmail({ subject, text }: SendEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail =
    process.env.FROM_EMAIL || "株式会社G.S.C <onboarding@resend.dev>";

  if (!apiKey || !contactEmail) {
    throw new Error(
      "RESEND_API_KEY または CONTACT_EMAIL が設定されていません"
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: contactEmail,
    subject,
    text,
  });

  if (error) {
    throw new Error(`メール送信エラー: ${error.message}`);
  }
}
