import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, phone, purpose, area, buildingType, services } =
      await request.json();

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

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("RESEND_API_KEY または CONTACT_EMAIL が設定されていません");
      return NextResponse.json(
        {
          error:
            "メール送信の設定が完了していません。管理者にお問い合わせください。",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const serviceList =
      Array.isArray(services) && services.length > 0
        ? services.join("、")
        : "指定なし";

    const { error } = await resend.emails.send({
      from: "株式会社G.S.C お問い合わせ <onboarding@resend.dev>",
      to: contactEmail,
      subject: `【チャットボット】${name.trim()}様より`,
      text: [
        "━━━━━━━━━━━━━━━━━━━━",
        "  チャットボットからのお問い合わせ",
        "━━━━━━━━━━━━━━━━━━━━",
        "",
        `■ ご用件: ${purpose || "未選択"}`,
        `■ お住まいの地域: ${area || "未選択"}`,
        `■ 建物の種類: ${buildingType || "未選択"}`,
        `■ ご希望サービス: ${serviceList}`,
        `■ お名前: ${name.trim()}`,
        `■ 電話番号: ${phone.trim()}`,
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "このメールはチャットボットから自動送信されました。",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend送信エラー:", error);
      return NextResponse.json(
        {
          error:
            "メール送信に失敗しました。しばらくしてからお試しください。",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("チャットボットAPI エラー:", err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
