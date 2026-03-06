"use client";

import { useRef, useState, useEffect } from "react";
import { Phone, MessageCircle, FileText, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

const AFTER_IMAGES = [
  { src: "/images/before-after/wall-after.jpg", label: "外壁塗装リフォーム" },
  { src: "/images/before-after/metal-roof-after.jpg", label: "金属屋根塗装" },
  { src: "/images/before-after/slate-after.jpg", label: "屋根カバー工法" },
  { src: "/images/before-after/roof-after.jpg", label: "屋上防水塗装リフォーム" },
] as const;

const BEFORE_AFTER_PAIRS = [
  { before: "/images/before-after/wall-before.jpg", after: "/images/before-after/wall-after.jpg" },
  { before: "/images/before-after/metal-roof-before.jpg", after: "/images/before-after/metal-roof-after.jpg" },
  { before: "/images/before-after/slate-before.jpg", after: "/images/before-after/slate-after.jpg" },
  { before: "/images/before-after/roof-before.jpg", after: "/images/before-after/roof-after.jpg" },
] as const;

function shuffleAndPick<T>(arr: readonly T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

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

const AREA_CITIES = ["市川市", "松戸市", "流山市"] as const;

const DEFAULT_IMAGES = AFTER_IMAGES.slice(0, 3);

/* 月桂冠SVG（満足度バッジ用） */
function LaurelWreath() {
  return (
    <svg viewBox="0 0 140 140" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {/* 左の月桂冠 */}
      <g fill="#C9A84C" opacity="0.95">
        <ellipse cx="32" cy="110" rx="5" ry="11" transform="rotate(45 32 110)" />
        <ellipse cx="24" cy="98" rx="4.5" ry="10" transform="rotate(35 24 98)" />
        <ellipse cx="18" cy="84" rx="4.5" ry="9.5" transform="rotate(24 18 84)" />
        <ellipse cx="14" cy="70" rx="4" ry="9" transform="rotate(12 14 70)" />
        <ellipse cx="14" cy="56" rx="4" ry="9" transform="rotate(0 14 56)" />
        <ellipse cx="18" cy="43" rx="4" ry="8.5" transform="rotate(-14 18 43)" />
        <ellipse cx="25" cy="32" rx="3.5" ry="8" transform="rotate(-28 25 32)" />
        <ellipse cx="35" cy="23" rx="3" ry="7" transform="rotate(-42 35 23)" />
      </g>
      {/* 右の月桂冠 */}
      <g fill="#C9A84C" opacity="0.95">
        <ellipse cx="108" cy="110" rx="5" ry="11" transform="rotate(-45 108 110)" />
        <ellipse cx="116" cy="98" rx="4.5" ry="10" transform="rotate(-35 116 98)" />
        <ellipse cx="122" cy="84" rx="4.5" ry="9.5" transform="rotate(-24 122 84)" />
        <ellipse cx="126" cy="70" rx="4" ry="9" transform="rotate(-12 126 70)" />
        <ellipse cx="126" cy="56" rx="4" ry="9" transform="rotate(0 126 56)" />
        <ellipse cx="122" cy="43" rx="4" ry="8.5" transform="rotate(14 122 43)" />
        <ellipse cx="115" cy="32" rx="3.5" ry="8" transform="rotate(28 115 32)" />
        <ellipse cx="105" cy="23" rx="3" ry="7" transform="rotate(42 105 23)" />
      </g>
    </svg>
  );
}

export default function HeroSection() {
  const shuffled = useRef(false);
  const [heroImages, setHeroImages] = useState(DEFAULT_IMAGES);
  const [baPair, setBaPair] = useState<{ before: string; after: string }>(BEFORE_AFTER_PAIRS[0]);

  useEffect(() => {
    if (!shuffled.current) {
      shuffled.current = true;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeroImages(shuffleAndPick(AFTER_IMAGES, 3));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBaPair(shuffleAndPick(BEFORE_AFTER_PAIRS, 1)[0]);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg pt-16 md:pt-18 lg:pt-20">
      {/* PC用の背景 */}
      <div className="hidden lg:block">{heroBackground}</div>

      {/* ===== SP専用ヒーロー ===== */}
      <div className="lg:hidden">
        <div className="px-4 pt-8 pb-10">
          {/* 黄色枠 */}
          <div className="rounded-2xl border-[3px] border-gold/60 p-2">
            {/* 青い背景カード */}
            <div className="rounded-xl bg-primary px-5 pt-6 pb-7">
              {/* 上部: 満足度バッジ + エリアタグ */}
              <div className="mb-5 flex items-start gap-4">
                {/* 満足度バッジ */}
                <div className="relative flex h-[160px] w-[160px] shrink-0 items-center justify-center">
                  <LaurelWreath />
                  <div className="relative z-10 text-center">
                    <p className="text-[12px] font-bold leading-tight text-white">お客様満足度</p>
                    <p className="mt-1.5 font-display text-[42px] font-bold leading-none text-gold">
                      94.8<span className="text-[20px]">%</span>
                    </p>
                    <p className="mt-1.5 text-[11px] font-bold text-gold/90">おかげさまで</p>
                  </div>
                </div>

                {/* メインエリア */}
                <div className="flex-1 pt-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-px flex-1 bg-white/30" />
                    <span className="text-[11px] font-bold tracking-wider text-white/90">メインエリア</span>
                    <span className="h-px flex-1 bg-white/30" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {AREA_CITIES.map((city) => (
                      <span
                        key={city}
                        className="rounded border border-white/60 px-2.5 py-0.5 text-[11px] font-bold text-white"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* メイン見出し */}
              <h1 className="mb-2">
                <span className="block font-display text-[30px] font-bold leading-tight text-white">
                  屋根塗装
                </span>
                <span className="block font-display text-[26px] font-bold leading-tight text-white">
                  外壁塗装リフォーム
                </span>
                <span className="mt-1 block font-display text-[28px] font-bold leading-tight">
                  <span className="text-gold">お得</span>
                  <span className="text-white">にできます!!</span>
                </span>
              </h1>

              {/* Before / After 画像 */}
              <div className="relative mx-auto mt-4 h-[210px]">
                {/* Before画像 (左下・少し傾き) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-0 left-0 z-10 w-[58%] -rotate-3 rounded-lg border-[3px] border-white bg-white shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[5px]">
                    <Image
                      src={baPair.before}
                      alt="施工前"
                      fill
                      className="object-cover"
                      sizes="200px"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 rounded bg-text/80 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
                    BEFORE
                  </div>
                </motion.div>

                {/* After画像 (右上) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute top-0 right-0 z-20 w-[58%] rotate-1 rounded-lg border-[3px] border-white bg-white shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[5px]">
                    <Image
                      src={baPair.after}
                      alt="施工後"
                      fill
                      className="object-cover"
                      sizes="200px"
                      priority
                    />
                  </div>
                  <div className="absolute top-2 right-2 rounded bg-accent px-2 py-0.5 text-[10px] font-bold tracking-wider text-white shadow">
                    AFTER
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 青カードの下: 説明文とCTA */}
            <div className="rounded-b-lg bg-white px-5 pt-6 pb-5">
              <p className="mb-5 text-[14px] leading-relaxed text-text">
                千葉県市川市の屋根・外壁塗装リフォームなら{COMPANY.name}！おすすめプランやリフォームの流れをご紹介します。
              </p>
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-base font-bold text-white shadow-lg transition-all active:scale-[0.98]"
              >
                <Mail size={20} />
                <span>メール相談・見積もり</span>
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PC用ヒーロー（既存） ===== */}
      <div className="container-main relative z-10 hidden lg:block">
        <div className="flex items-center gap-16 py-24">
          {/* Left Content — 55% */}
          <div className="flex-[55] text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex flex-wrap justify-start gap-2"
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
              className="mb-3 text-lg font-semibold tracking-wide text-primary"
            >
              千葉県を中心に外壁塗装･屋根塗装･リフォーム専門
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-2 font-display text-[48px] font-bold leading-[1.25] text-text"
            >
              40年住むから考える、
              <br />
              リフォームを
              <wbr />
              ご案内します
            </motion.h1>

            {/* Accent underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mb-6 h-[3px] w-16 origin-left rounded-full bg-accent"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-text-muted"
            >
              お住まいの状況をしっかり診断し、
              <br />
              建物に最適なプランをご提案。
              <br />
              施工から完了まで責任を持って対応いたします。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3"
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

          {/* Right — 施工実績画像コラージュ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.3, bounce: 0.3 }}
            className="relative w-full max-w-lg flex-[45]"
          >
            <div className="relative mx-auto w-full max-w-[460px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  src={heroImages[0].src}
                  alt={`${heroImages[0].label} 施工実績`}
                  fill
                  className="object-cover"
                  sizes="460px"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-8">
                  <p className="text-xs font-bold text-white/90">{heroImages[0].label}</p>
                </div>
              </motion.div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={heroImages[1].src}
                    alt={`${heroImages[1].label} 施工実績`}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-2 pt-6">
                    <p className="text-[10px] font-bold text-white/90">{heroImages[1].label}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={heroImages[2].src}
                    alt={`${heroImages[2].label} 施工実績`}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-2 pt-6">
                    <p className="text-[10px] font-bold text-white/90">{heroImages[2].label}</p>
                  </div>
                </motion.div>
              </div>

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
