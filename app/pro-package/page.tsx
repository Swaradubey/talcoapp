"use client";

import { useState } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function ProPackagePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [upgraded, setUpgraded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const handleUpgrade = () => {
    if (loading || upgraded) return;
    setLoading(true);
    setLoadingStep(1);

    // Simulate checkout steps
    setTimeout(() => {
      setLoadingStep(2);
    }, 850);

    setTimeout(() => {
      setLoading(false);
      setUpgraded(true);
    }, 1800);
  };

  const faqs = [
    {
      id: 1,
      q: "Who is Pro for?",
      a: "Pro is ideal for users who manage large lead lists and need faster calling workflows.",
    },
    {
      id: 2,
      q: "Can free users upgrade?",
      a: "Yes, free users can upgrade to Pro anytime.",
    },
    {
      id: 3,
      q: "Is it mobile responsive?",
      a: "Yes, the Pro Package page works smoothly on all devices.",
    },
  ];

  return (
    <PageShell
      badge="Upgrade Premium"
      badgeColor="text-[var(--accent)]"
      title="Go Pro with"
      titleAccent="CSV Auto Dialer"
      subtitle="Upgrade from the free plan and unlock powerful calling automation tools designed for faster lead management."
      glowColor="var(--accent)"
    >
      <div className="flex flex-col items-center gap-16 w-full">
        {/* Pricing Cards Grid */}
        <div className="pricing-grid px-4 w-full">
          {/* Free Package Card */}
          <div className="w-full glass-card border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300 pricing-card">
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center text-[10px] font-mono font-bold tracking-wider text-[var(--sub)] bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase pricing-card-badge">
                    STARTER
                  </span>
                  <h3 className="pricing-card-title mt-4 text-[var(--text)]">
                    Free Package
                  </h3>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="pricing-card-price block">
                    ₹0
                  </span>
                  <span className="text-xs text-[var(--sub)] font-medium pricing-card-billing">/ forever</span>
                </div>
              </div>

              <p className="text-xs text-[var(--sub)] mb-6 leading-relaxed pricing-card-desc">
                For basic CSV calling workflow and testing.
              </p>

              <div className="h-px bg-white/10 my-6" />

              {/* Features list */}
              <ul className="space-y-3.5 mb-8">
                {[
                  "Limited CSV uploads",
                  "Basic contact management",
                  "Manual calling workflow",
                  "Standard support",
                  "Basic dashboard access",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[var(--sub)]">
                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L3.5 6.5L1 4" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-medium pricing-card-feature">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* CTA Button */}
              <Link
                href="/free-plan"
                className="btn-primary w-full py-3.5 text-center justify-center shadow-lg font-bold rounded-xl flex text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Start Free Plan
              </Link>

              {/* Footer note under CTA */}
              <p className="text-center text-[10px] sm:text-xs text-[var(--muted)] mt-4 font-medium">
                Free forever plan layout.
              </p>
            </div>
          </div>

          {/* Pro Package Card */}
          <div className="w-full glass-card gradient-border rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300 pricing-card">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)]" />

            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center text-[10px] font-mono font-bold tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-3 py-1 rounded-full uppercase pricing-card-badge">
                    BEST FOR GROWING TEAMS
                  </span>
                  <h3 className="pricing-card-title mt-4 text-[var(--text)]">
                    Pro Package
                  </h3>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="pricing-card-price block">
                    ₹999
                  </span>
                  <span className="text-xs text-[var(--sub)] font-medium pricing-card-billing">/ month</span>
                </div>
              </div>

              <p className="text-xs text-[var(--sub)] mb-6 leading-relaxed pricing-card-desc">
                For advanced CSV calling automation and growing teams.
              </p>

              <div className="h-px bg-white/10 my-6" />

              {/* Features list */}
              <ul className="space-y-3.5 mb-8">
                {[
                  "Unlimited CSV uploads",
                  "Smart auto dialing workflow",
                  "Priority support",
                  "Advanced lead management",
                  "Call tracking dashboard",
                  "Faster contact processing",
                  "Premium automation tools",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[var(--sub)]">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                      <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L3.5 6.5L1 4" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-medium pricing-card-feature">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* CTA Upgrade Button / Interactive State */}
              {upgraded ? (
                <div className="text-center py-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-xl font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-2 animate-fade-in-up">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-extrabold text-white">Payment Successful!</span>
                  <span className="text-[11px] text-emerald-400/90 font-medium">Welcome to CSV Auto Dialer Pro!</span>
                </div>
              ) : (
                <button
                  onClick={handleUpgrade}
                  disabled={loading}
                  className="btn-primary w-full py-4 text-center justify-center shadow-lg font-bold rounded-2xl flex items-center gap-2 text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>{loadingStep === 1 ? "Initiating checkout..." : "Processing payment..."}</span>
                    </>
                  ) : (
                    "Upgrade to Pro"
                  )}
                </button>
              )}

              {/* Footer note under CTA */}
              <p className="text-center text-[10px] sm:text-xs text-[var(--muted)] mt-4 font-medium">
                Free users can upgrade anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits & FAQ Section */}
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: "DM sanes, sans-serif" }}>
              Benefits & FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[var(--sub)]">
              Got questions about upgrading? Find answers to commonly asked questions below.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? "border-[var(--accent)]/30 bg-white/[0.03]" : "border-white/5"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.01]"
                  >
                    <span className="text-[var(--text)] text-xs sm:text-sm font-bold pr-4" style={{ fontFamily: "DM sanes, sans-serif" }}>
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-[var(--accent)]/10 border-[var(--accent)]/20" : ""}`}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? "var(--accent)" : "var(--muted)"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-3 border-t border-white/5 animate-fade-in-up">
                      <p className="text-[var(--sub)] text-[11px] sm:text-xs leading-relaxed font-medium">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
