"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/app-info", label: "App Info" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("light", newTheme === "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full" style={{ paddingTop: '16px', paddingBottom: '8px' }}>
      <div className="page-container">
        <nav
          className="glass-nav rounded-2xl transition-all duration-300"
          style={{
            borderRadius: '22px',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.08)'
              : '0 4px 24px rgba(0,0,0,0.35)',
          }}
        >
          <div className="px-5 sm:px-6 flex items-center justify-between" style={{ height: '68px' }}>

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="CSV Auto Dialer home">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center glow-accent transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shrink-0">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8L7 12L13 4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                className="font-bold text-[15px] tracking-tight text-[var(--text)] transition-colors group-hover:text-white hidden xs:block sm:block"
                style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.01em' }}
              >
                CSV Auto Dialer
              </span>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 relative whitespace-nowrap ${
                      isActive
                        ? "text-[var(--accent)] bg-[var(--accent)]/8 border border-[var(--accent)]/15"
                        : "text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/5 border border-transparent"
                    }`}
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-[var(--accent)] opacity-80" />
                    )}
                  </Link>
                );
              })}

              <div className="w-px h-4 bg-white/10 mx-1.5 shrink-0" />

              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/10 active:scale-95 transition-all focus:outline-none shrink-0"
              >
                {theme === "dark" ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

              <div className="w-px h-4 bg-white/10 mx-1.5 shrink-0" />

              <Link
                href="/delete-account"
                className={`px-3.5 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 whitespace-nowrap ${
                  pathname === "/delete-account"
                    ? "bg-red-500/15 text-red-300 border border-red-500/30"
                    : "text-red-400/80 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/15"
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Delete Account
              </Link>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
              >
                {theme === "dark" ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

              <button
                className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-white/8 transition border border-transparent hover:border-white/10"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span className={`block w-[18px] h-[1.5px] bg-[var(--sub)] transition-all duration-200 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block w-[18px] h-[1.5px] bg-[var(--sub)] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
                <span className={`block w-[18px] h-[1.5px] bg-[var(--sub)] transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </button>
            </div>
          </div>

          {/* ── Mobile Menu ── */}
          {open && (
            <div className="md:hidden border-t border-white/5 px-4 py-3 flex flex-col gap-1 rounded-b-2xl bg-[var(--surface)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    pathname === link.href
                      ? "bg-white/5 text-[var(--accent)] border border-white/10"
                      : "text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-1" />
              <Link
                href="/delete-account"
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  pathname === "/delete-account"
                    ? "bg-red-500/15 text-red-300 border border-red-500/30"
                    : "text-red-400 hover:bg-red-500/10 border border-transparent"
                }`}
              >
                Delete Account
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
