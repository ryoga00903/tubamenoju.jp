"use client";

import { useState } from "react";
import { Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "外壁・屋根診断",
  "雨漏り無料診断",
  "無料資料請求",
  "お見積もり依頼",
  "ご来店予約",
  "その他のご相談",
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, services }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "送信に失敗しました");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setServices([]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "送信に失敗しました"
      );
    }
  };

  return (
    <section id="contact" className="section-padding bg-bg-warm">
      <div className="container-main">
        <SectionHeading
          engLabel="SIMPLE CONTACT"
          title="簡単10秒お問い合わせ"
          subtitle="お気軽にお問い合わせください。担当者より折り返しご連絡いたします。"
        />

        <ScrollReveal>
          <div className="mx-auto max-w-2xl">
            {/* フォームカード */}
            <div className="card-elevated border-2 border-accent/30 p-6 md:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle size={48} className="text-secondary" />
                  <h3 className="text-xl font-bold text-text">
                    送信が完了しました
                  </h3>
                  <p className="text-sm text-text-muted">
                    お問い合わせありがとうございます。
                    <br />
                    担当者より折り返しご連絡いたします。
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dark"
                  >
                    別のお問い合わせをする
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* お名前 */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 flex items-center gap-2 text-sm font-bold text-text"
                    >
                      お名前
                      <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold text-white">
                        必須
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="例：山田 太郎"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text outline-none transition-colors placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 flex items-center gap-2 text-sm font-bold text-text"
                    >
                      電話番号
                      <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold text-white">
                        必須
                      </span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="例：090-1234-5678"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text outline-none transition-colors placeholder:text-text-light focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  {/* ご希望内容 */}
                  <div>
                    <p className="mb-3 text-sm font-bold text-text">
                      ご希望内容
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {SERVICE_OPTIONS.map((service) => (
                        <label
                          key={service}
                          className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                            services.includes(service)
                              ? "border-accent bg-accent-light font-medium text-accent-dark"
                              : "border-border bg-white text-text-muted hover:border-accent/40"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={services.includes(service)}
                            onChange={() => toggleService(service)}
                            className="sr-only"
                          />
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                              services.includes(service)
                                ? "border-accent bg-accent text-white"
                                : "border-border bg-white"
                            }`}
                          >
                            {services.includes(service) && (
                              <svg
                                viewBox="0 0 12 12"
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M2 6l3 3 5-5" />
                              </svg>
                            )}
                          </span>
                          <span className="leading-tight">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* エラーメッセージ */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      <AlertCircle size={16} className="shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  {/* 送信ボタン */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-accent-dark hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={22} className="animate-spin" />
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        無料で相談する
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* 電話CTA */}
            <ScrollReveal delay={0.2}>
              <div className="mt-6 text-center">
                <p className="mb-2 text-sm text-text-muted">
                  お急ぎの方はお電話でもお気軽にどうぞ
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 text-2xl font-bold text-primary transition-colors hover:text-primary-dark md:text-3xl"
                >
                  <Phone size={24} className="text-accent" />
                  {COMPANY.phone}
                </a>
                <p className="mt-1 text-xs text-text-muted">{COMPANY.hours}</p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
