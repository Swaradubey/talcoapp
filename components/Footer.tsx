"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="border-t border-white/5 bg-[var(--surface)] mt-24 relative overflow-hidden">
      {/* Background glow in footer */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[var(--accent)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L7 12L13 4" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display font-bold text-base text-[var(--text)] transition-colors group-hover:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                talco
              </span>
            </Link>
            <p className="text-[var(--sub)] text-sm leading-relaxed max-w-sm">
              Connect, create, and collaborate — all in one seamless, lightning-fast platform designed for modern teams.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-5 gap-6">
            <div>
              <h4 className="text-[var(--text)] text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Product</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/app-info", label: "App Info" },
                  { href: "/support", label: "Support & Help" },
                  { href: "/contact", label: "Contact Us" },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[var(--sub)] text-sm hover:text-[var(--accent)] transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[var(--text)] text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Legal</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/delete-account", label: "Delete Account" },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[var(--sub)] text-sm hover:text-[var(--accent)] transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[var(--text)] text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:hello@talco.app" className="text-[var(--sub)] text-sm hover:text-[var(--accent)] transition-colors duration-200">
                    hello@talco.app
                  </a>
                </li>
                <li>
                  <a href="mailto:support@talco.app" className="text-[var(--sub)] text-sm hover:text-[var(--accent)] transition-colors duration-200">
                    support@talco.app
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[var(--text)] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: 'Syne, sans-serif' }}>Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <p className="text-[var(--sub)] text-xs leading-relaxed">Subscribe to get major software release notes and tips.</p>
              {subscribed ? (
                <div className="py-2 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium animate-fade-in-up flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Successfully subscribed!
                </div>
              ) : (
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]/50 focus:bg-white/[0.07] transition-all pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 w-8 h-8 rounded-lg bg-[var(--accent)] text-black flex items-center justify-center hover:scale-105 hover:bg-white transition-all shadow-md"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--muted)] text-xs">
            © {new Date().getFullYear()} Talco Inc. All rights reserved. Made for  hexerve modern collaboration.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-[var(--muted)] text-xs hover:text-[var(--sub)] transition-colors duration-200">Privacy</Link>
            <span className="text-white/10">·</span>
            <Link href="/contact" className="text-[var(--muted)] text-xs hover:text-[var(--sub)] transition-colors duration-200">Contact</Link>
            <span className="text-white/10">·</span>
            <Link href="/delete-account" className="text-[var(--muted)] text-xs hover:text-red-400 transition-colors duration-200">Delete Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
