"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const works = [
  {
    id: 1,
    location: "千葉市稲毛区 S様邸",
    description: "屋上防水塗装リフォーム",
    before: "/images/before-after/roof-before.jpg",
    after: "/images/before-after/roof-after.jpg",
  },
  {
    id: 2,
    location: "千葉市中央区 T様邸",
    description: "外壁塗装リフォーム",
    before: "/images/before-after/wall-before.jpg",
    after: "/images/before-after/wall-after.jpg",
  },
  {
    id: 3,
    location: "船橋市 M様邸",
    description: "屋根カバー工法",
    before: "/images/before-after/slate-before.jpg",
    after: "/images/before-after/slate-after.jpg",
  },
  {
    id: 4,
    location: "松戸市 K様邸",
    description: "金属屋根塗装",
    before: "/images/before-after/metal-roof-before.jpg",
    after: "/images/before-after/metal-roof-after.jpg",
  },
];

function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
      <div className="grid grid-cols-2">
        {/* Before */}
        <div className="relative aspect-[4/3]">
          {work.before ? (
            <Image
              src={work.before}
              alt={`${work.location} 施工前`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              loading="eager"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <span className="text-sm text-gray-400">準備中</span>
            </div>
          )}
          <div className="absolute top-3 left-3 rounded-lg bg-text/80 px-4 py-1.5 text-xs font-bold tracking-wide text-white">
            施工前
          </div>
        </div>

        {/* After */}
        <div className="relative aspect-[4/3]">
          {work.after ? (
            <Image
              src={work.after}
              alt={`${work.location} 施工後`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              loading="eager"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-accent-light">
              <span className="text-sm text-accent">準備中</span>
            </div>
          )}
          <div className="absolute top-3 left-3 rounded-lg bg-accent px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-sm">
            施工後
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="border-t border-border p-5">
        <div className="flex items-center gap-1.5 text-base font-bold text-text">
          <MapPin size={16} className="text-primary" />
          {work.location}
        </div>
        <p className="mt-1 text-sm text-text-muted">{work.description}</p>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  // PC用: 現在と次のインデックス
  const nextIndex = (currentIndex + 1) % works.length;

  return (
    <section id="works" className="section-padding bg-bg-warm">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            engLabel="WORKS"
            title="Before / After 施工事例"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-5xl">
            {/* モバイル: 全スライドを常にレンダリングし、opacityで切り替え */}
            <div className="relative lg:hidden">
              {works.map((work, index) => (
                <div
                  key={work.id}
                  className={`transition-opacity duration-300 ${
                    index === currentIndex
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                  aria-hidden={index !== currentIndex}
                >
                  <WorkCard work={work} />
                </div>
              ))}
            </div>

            {/* PC: 全ペアを常にレンダリングし、opacityで切り替え */}
            <div className="relative hidden lg:block">
              {works.map((work, index) => {
                const pairNext = (index + 1) % works.length;
                const isActive = index === currentIndex;
                return (
                  <div
                    key={work.id}
                    className={`grid gap-8 lg:grid-cols-2 transition-opacity duration-300 ${
                      isActive
                        ? "relative opacity-100"
                        : "pointer-events-none absolute inset-0 opacity-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <WorkCard work={work} />
                    <WorkCard work={works[pairNext]} />
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goToPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-text-muted shadow-sm transition-all hover:shadow-md hover:bg-bg-warm"
                aria-label="前の事例"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="flex gap-2">
                {works.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-10 bg-accent"
                        : "w-3 bg-border"
                    }`}
                    aria-label={`事例 ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-text-muted shadow-sm transition-all hover:shadow-md hover:bg-bg-warm"
                aria-label="次の事例"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
