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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
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
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <nav className="max-w-6xl mx-auto glass-card rounded-2xl bg-[var(--card)] backdrop-blur-xl border border-white/5 shadow-2xl">
        <div className="px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center glow-accent transition-all duration-300 group-hover:scale-105">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L7 12L13 4" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-[var(--text)] transition-colors group-hover:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              CSV  Auto Dialer
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${isActive
                    ? "text-[var(--accent)] bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    : "text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/5 border border-transparent"
                    }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--accent)] opacity-80" />
                  )}
                </Link>
              );
            })}
            <div className="w-px h-5 bg-white/10 mx-2" />

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/10 active:scale-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] focus:outline-none mr-2 shrink-0"
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            <Link
              href="/delete-account"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === "/delete-account"
                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                : "text-red-400/90 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
                }`}
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Delete Account
            </Link>
          </div>

          {/* Mobile nav controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/10 active:scale-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] focus:outline-none shrink-0"
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-[var(--sub)] transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[var(--sub)] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[var(--sub)] transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/5 bg-[var(--surface)] px-6 py-4 flex flex-col gap-1.5 rounded-b-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${pathname === link.href
                  ? "bg-white/5 text-[var(--accent)] border border-white/10"
                  : "text-[var(--sub)] hover:text-[var(--text)] hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/5 my-1" />
            <Link
              href="/delete-account"
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${pathname === "/delete-account"
                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                : "text-red-400 hover:bg-red-500/10"
                }`}
            >
              Delete Account
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
