"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleLanguage = () => {
    // Placeholder: chức năng đổi ngôn ngữ sẽ được bổ sung sau.
  };

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        borderColor: "rgb(var(--border))",
        backgroundColor: "rgb(var(--background) / 0.8)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo + tên */}
        <a href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Logo" width={40} height={40} className="h-10 w-10" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold sm:text-base">
              {content.name}
            </span>
            <span
              className="text-[10px] font-semibold tracking-widest sm:text-xs"
              style={{ color: "rgb(var(--muted))" }}
            >
              {content.subtitle}
            </span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {content.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={handleLanguage}
            aria-label="Đổi ngôn ngữ"
            className="inline-flex h-10 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors hover:border-cyan-400 hover:text-cyan-400"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            {content.languageLabel}
          </button>
          <a href="#programs" className="btn-primary px-5 py-2.5 text-sm">
            {content.ctaLabel}
          </a>
        </div>

        {/* Actions mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Mở menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-cyan-400 hover:text-cyan-400"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 12h16" />
                  <path d="M4 6h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Panel mobile */}
      {menuOpen && (
        <div
          className="border-t lg:hidden"
          style={{
            borderColor: "rgb(var(--border))",
            backgroundColor: "rgb(var(--background))",
          }}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {content.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handleLanguage}
                aria-label="Đổi ngôn ngữ"
                className="inline-flex h-10 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors hover:border-cyan-400 hover:text-cyan-400"
                style={{ borderColor: "rgb(var(--border))" }}
              >
                {content.languageLabel}
              </button>
              <a
                href="#programs"
                onClick={closeMenu}
                className="btn-primary flex-1 px-5 py-2.5 text-sm"
              >
                {content.ctaLabel}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
