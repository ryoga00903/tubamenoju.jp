import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

interface FlowStep {
  title: string;
  sections: {
    heading: string;
    description: string;
    checks?: string[];
    highlight?: { label: string; value: string };
  }[];
}

const steps: FlowStep[] = [
  {
    title: "お問い合わせ",
    sections: [
      {
        heading: "ご相談受付",
        description:
          "お電話・LINE・メールにてお問い合わせを承ります。現在のお住まいのお悩みやご要望をお聞かせください。",
        checks: [
          "ご相談だけでも対応いたします",
          "お見積もりまで費用は一切かかりません",
        ],
      },
    ],
  },
  {
    title: "現地調査",
    sections: [
      {
        heading: "建物の状態を徹底診断",
        description:
          "専門スタッフがお住まいに伺い、屋根・外壁の状態を細かく調査いたします。",
        checks: [
          "屋根・外壁の劣化状況を写真で記録",
          "調査結果を報告書としてお渡し",
        ],
        highlight: {
          label: "株式会社G.S.Cの現地調査",
          value: "有資格者による建物診断",
        },
      },
    ],
  },
  {
    title: "ご提案",
    sections: [
      {
        heading: "最適なプランをご提案",
        description:
          "調査結果をもとに、建物の状態やご予算に合わせた最適な施工プランをご提案いたします。塗料の種類や色味も丁寧にご説明します。",
        checks: [
          "建物に最適な塗料グレードをご提案",
          "カラーシミュレーションにも対応",
        ],
        highlight: {
          label: "お客様の建物に合わせた提案",
          value: "シリコン・フッ素・無機など多彩な塗料",
        },
      },
    ],
  },
  {
    title: "ご契約",
    sections: [
      {
        heading: "ご納得いただいた上でのご契約",
        description:
          "施工内容・お見積もり金額にご納得いただけましたらご契約となります。不明点は何でもお尋ねください。",
        checks: [
          "施工内容を書面で明確にご提示",
          "追加費用が発生しない明朗会計",
        ],
      },
    ],
  },
  {
    title: "着工準備",
    sections: [
      {
        heading: "工事前の準備・ご説明",
        description:
          "工事のスケジュール・作業内容を事前にご説明いたします。ご近隣への挨拶回りも弊社が責任を持って行います。",
        checks: [
          "近隣住宅へ事前にご挨拶",
          "工事スケジュールを書面でお渡し",
        ],
      },
    ],
  },
  {
    title: "施工",
    sections: [
      {
        heading: "近隣宅への配慮",
        description:
          "工事中はトラブルが発生しないよう、徹底的な配慮を行います。",
        checks: [
          "車の養生などで塗装の飛散を防止",
          "高圧洗浄時の飛散防止措置を徹底",
        ],
      },
      {
        heading: "丁寧な施工",
        description:
          "経験豊富な職人が、下地処理から仕上げまで一つひとつの工程を丁寧に施工いたします。",
        checks: [
          "施工の進捗を随時ご報告",
          "自社職人による一貫した品質管理",
        ],
      },
    ],
  },
  {
    title: "完工・お引渡し",
    sections: [
      {
        heading: "最終確認・お引渡し",
        description:
          "施工完了後、お客様と一緒に仕上がりを確認いたします。ご納得いただいた上で足場を解体し、お引渡しとなります。",
        checks: [
          "施工箇所を一緒に最終チェック",
          "完工報告書をお渡し",
        ],
        highlight: {
          label: "施工後のサポート",
          value: "最長15年のアフター保証",
        },
      },
    ],
  },
];

export default function FlowSection() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            engLabel="FLOW"
            title="お問い合わせから完成までの流れ"
            subtitle="各工程で担当者が責任を持って対応いたします"
            titleClassName="text-[24px] md:text-[32px] lg:text-[36px]"
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-3xl gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                {/* ダークヘッダー */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>

                {/* 白カード */}
                <div className="space-y-6 bg-white p-6 md:p-8">
                  {step.sections.map((section, sIdx) => (
                    <div key={sIdx}>
                      {/* サブ見出し */}
                      <h4 className="mb-3 border-b-2 border-gray-800 pb-2 text-base font-bold text-text">
                        {section.heading}
                      </h4>

                      {/* 説明文 */}
                      <p className="mb-4 text-sm leading-[1.9] text-text-muted">
                        {section.description}
                      </p>

                      {/* チェックリスト */}
                      {section.checks ? (
                        <div className="mb-4 space-y-2">
                          {section.checks.map((item, cIdx) => (
                            <div
                              key={cIdx}
                              className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3"
                            >
                              <Check
                                size={18}
                                className="mt-0.5 shrink-0 text-primary"
                              />
                              <span className="text-sm font-medium text-text">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {/* ハイライト */}
                      {section.highlight ? (
                        <div className="rounded-xl bg-gray-900 px-5 py-4 text-center">
                          <p className="text-xs text-white/60">
                            {section.highlight.label}
                          </p>
                          <p className="mt-1 font-display text-base font-bold text-white">
                            {section.highlight.value}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
