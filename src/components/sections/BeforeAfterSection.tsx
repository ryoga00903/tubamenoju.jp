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
    before: "/images/before-after/wall-before.png",
    after: "/images/before-after/wall-after.png",
  },
  {
    id: 3,
    location: "船橋市 M様邸",
    description: "屋根カバー工法",
    before: "/images/before-after/slate-before.png",
    after: "/images/before-after/slate-after.png",
  },
  {
    id: 4,
    location: "松戸市 K様邸",
    description: "金属屋根塗装",
    before: "/images/before-after/metal-roof-before.png",
    after: "/images/before-after/metal-roof-after.png",
  },
];

function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
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
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <span className="text-sm text-gray-400">準備中</span>
            </div>
          )}
          <div className="absolute top-3 left-3 rounded-md bg-text/70 px-3 py-1 text-xs font-bold text-white">
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
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-accent-light">
              <span className="text-sm text-accent">準備中</span>
            </div>
          )}
          <div className="absolute top-3 left-3 rounded-md bg-accent px-3 py-1 text-xs font-bold text-white">
            施工後
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-1 text-sm font-bold text-text">
          <MapPin size={14} className="text-primary" />
          {work.location}
        </div>
        <p className="mt-0.5 text-xs text-text-muted">{work.description}</p>
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
            {/* モバイル: 1つ表示 */}
            <div className="lg:hidden">
              <WorkCard work={works[currentIndex]} />
            </div>

            {/* PC: 2つ並べて表示 */}
            <div className="hidden gap-6 lg:grid lg:grid-cols-2">
              <WorkCard work={works[currentIndex]} />
              <WorkCard work={works[nextIndex]} />
            </div>

            {/* Navigation */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goToPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-muted transition-colors hover:bg-bg-warm"
                aria-label="前の事例"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {works.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-border"
                    }`}
                    aria-label={`事例 ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-muted transition-colors hover:bg-bg-warm"
                aria-label="次の事例"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
