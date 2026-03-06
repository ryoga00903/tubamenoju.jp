"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, FileText, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-white/95 backdrop-blur-sm"
          : "bg-white"
      }`}
    >
      <div className="container-main">
        <div className="flex h-16 items-center justify-between md:h-18 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="G.S.C Co.,Ltd."
              width={241}
              height={212}
              className="h-10 w-auto lg:h-12"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => {
              const isPage = link.href.startsWith("/") && !link.href.includes("#");
              const Component = isPage ? Link : "a";
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-text-muted transition-colors hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Component>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-1.5 text-lg font-bold text-accent"
            >
              <Phone size={18} className="text-accent" />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.lineUrl}
              className="inline-flex items-center gap-1.5 rounded-xl bg-secondary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-secondary-dark"
            >
              <MessageCircle size={16} />
              LINE
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 rounded-xl border-2 border-primary px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <FileText size={16} />
              無料見積もり
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="メニュー"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container-main py-4">
            {NAV_LINKS.map((link) => {
              const isPage = link.href.startsWith("/") && !link.href.includes("#");
              const Component = isPage ? Link : "a";
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-base font-medium text-text-muted transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Component>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
