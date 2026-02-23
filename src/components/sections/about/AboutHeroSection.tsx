"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

      <div className="container-main relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="パンくず"
        >
          <ol className="mb-6 flex items-center gap-1 text-sm text-white/60">
            <li>
              <a href="/" className="transition-colors hover:text-white">
                ホーム
              </a>
            </li>
            <li>
              <ChevronRight size={14} />
            </li>
            <li className="text-white">会社概要</li>
          </ol>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50"
        >
          ABOUT US
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-3xl font-bold text-white md:text-4xl"
        >
          会社概要
        </motion.h1>
      </div>
    </section>
  );
}
