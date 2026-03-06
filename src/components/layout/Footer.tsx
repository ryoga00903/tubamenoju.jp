import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-footer py-12 text-white">
      <div className="container-main">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="G.S.C Co.,Ltd."
              width={241}
              height={212}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="mt-2 text-sm text-gray-400">
              千葉県・外壁塗装・屋根塗装・リフォーム
            </p>
            <p className="mt-1 text-sm text-gray-400">{COMPANY.address}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-bold">メニュー</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isPage = link.href.startsWith("/") && !link.href.includes("#");
                const Component = isPage ? Link : "a";
                return (
                  <Component
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Component>
                );
              })}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-bold">お問い合わせ</h3>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 text-lg font-bold text-white"
            >
              <Phone size={18} />
              {COMPANY.phone}
            </a>
            <p className="mt-1 text-sm text-gray-400">
              営業時間: {COMPANY.hours}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {COMPANY.name} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
