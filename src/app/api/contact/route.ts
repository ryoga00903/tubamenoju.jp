import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { sendEmail } from "@/lib/send-email";

export async function POST(request: Request) {
  const { success } = rateLimit(request);
  if (!success) {
    return NextResponse.json(
      { error: "リクエストが多すぎます。しばらくしてからお試しください。" },
      { status: 429 }
    );
  }

  try {
    const { name, phone, services } = await request.json();

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "お名前は必須です" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
      return NextResponse.json(
        { error: "電話番号は必須です" },
        { status: 400 }
      );
    }

    const serviceList =
      Array.isArray(services) && services.length > 0
        ? services.join("、")
        : "指定なし";

    await sendEmail({
      subject: `【お問い合わせ】${name.trim()}様より`,
      text: [
        "━━━━━━━━━━━━━━━━━━━━",
        "  ホームページからのお問い合わせ",
        "━━━━━━━━━━━━━━━━━━━━",
        "",
        `■ お名前: ${name.trim()}`,
        `■ 電話番号: ${phone.trim()}`,
        `■ ご希望内容: ${serviceList}`,
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "このメールはホームページのお問い合わせフォームから自動送信されました。",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("お問い合わせAPI エラー:", err);
    const message =
      err instanceof Error && err.message.includes("設定されていません")
        ? "メール送信の設定が完了していません。管理者にお問い合わせください。"
        : "メール送信に失敗しました。しばらくしてからお試しください。";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
