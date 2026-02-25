"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

const heroBackground = (
  <>
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute -right-24 top-20 h-[400px] w-[400px] rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-gold/8 blur-3xl" />
    </div>
    <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-full lg:h-64">
      <div
        className="absolute inset-0 bg-bg-warm"
        style={{ clipPath: "polygon(100% 30%, 100% 100%, 0 100%)" }}
      />
    </div>
  </>
);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg pt-16 md:pt-18 lg:pt-20">
      {heroBackground}

      <div className="container-main relative z-10">
        <div className="flex flex-col items-center py-12 md:py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
          {/* Left Content — 55% */}
          <div className="flex-[55] text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              <span className="inline-flex items-center rounded-full bg-gold/10 px-5 py-2 text-sm font-bold text-gold shadow-sm">
                ✦ 千葉県No.1の施工実績
              </span>
            </motion.div>

            {/* Sub headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-3 text-base font-semibold tracking-wide text-primary md:text-lg"
            >
              千葉県を中心に外壁塗装･屋根塗装･リフォーム専門
            </motion.p>

            {/* Main Heading — font-display */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-2 font-display text-[32px] font-bold leading-[1.25] text-text sm:text-[38px] md:text-[42px] lg:text-[48px]"
            >
              はじめてでも
              <br />
              わかりやすく
              <wbr />
              ご案内します
            </motion.h1>

            {/* Accent underline decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mx-auto mb-6 h-[3px] w-16 origin-left rounded-full bg-accent lg:mx-0"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 text-base leading-relaxed text-text-muted md:text-lg lg:max-w-lg"
            >
              「どこに頼めばいいの？」「どのくらい費用がかかるの？」
              <br className="hidden lg:block" />
              そんな不安をお持ちの方も
              <br className="hidden lg:block" />
              私たちが丁寧にわかりやすくご案内いたします。
            </motion.p>

            {/* CTA Buttons — phone(accent) > LINE(green) > estimate(outline) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl active:scale-[0.98]"
              >
                <Phone size={20} />
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.lineUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-secondary-dark hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle size={20} />
                LINEで相談する
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-4 text-base font-bold text-primary transition-all hover:bg-primary hover:text-white active:scale-[0.98]"
              >
                <FileText size={20} />
                無料見積もり
              </a>
            </motion.div>
          </div>

          {/* Right — 施工実績画像コラージュ (PC only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.3, bounce: 0.3 }}
            className="relative mt-12 hidden w-full max-w-lg lg:mt-0 lg:block lg:flex-[45]"
          >
            <div className="relative mx-auto w-full max-w-[460px]">
              {/* メイン画像（大きく） */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  src="/images/hero/work-1.jpg"
                  alt="外壁塗装 施工実績"
                  fill
                  className="object-cover"
                  sizes="460px"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-8">
                  <p className="text-xs font-bold text-white/90">外壁塗装リフォーム</p>
                </div>
              </motion.div>

              {/* サブ画像2枚（下に並べる） */}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src="/images/hero/work-2.jpg"
                    alt="外壁塗装 施工実績"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-2 pt-6">
                    <p className="text-[10px] font-bold text-white/90">外壁塗装</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src="/images/hero/work-4.jpg"
                    alt="屋根カバー工法 施工実績"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-2 pt-6">
                    <p className="text-[10px] font-bold text-white/90">屋根カバー工法</p>
                  </div>
                </motion.div>
              </div>

              {/* フローティング実績バッジ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -top-4 -right-4 rounded-xl bg-white px-5 py-4 shadow-xl ring-1 ring-primary/10"
              >
                <p className="font-display text-3xl font-bold text-primary">
                  3,000<span className="text-sm">件+</span>
                </p>
                <p className="text-[10px] font-bold text-text-muted">累計施工実績</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
