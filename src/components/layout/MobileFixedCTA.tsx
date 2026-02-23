"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function MobileFixedCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 px-3 py-2 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <a
          href={COMPANY.phoneHref}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent px-2 py-2.5 text-xs font-bold text-white"
        >
          <Phone size={14} />
          電話
        </a>
        <a
          href={COMPANY.lineUrl}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-secondary px-2 py-2.5 text-xs font-bold text-white"
        >
          <MessageCircle size={14} />
          LINE
        </a>
        <a
          href="/#contact"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-primary bg-white px-2 py-2.5 text-xs font-bold text-primary"
        >
          <FileText size={14} />
          無料見積もり
        </a>
      </div>
    </div>
  );
}
