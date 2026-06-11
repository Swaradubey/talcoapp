"use client";

import { useState } from "react";

const freePlanFeatures = [
  "Limited CSV uploads",
  "Basic contact management",
  "Manual calling workflow",
  "Basic lead status tracking",
  "Basic dashboard access",
  "Standard support",
  "Free forever for testing",
];

export default function FreePlanCard() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full max-w-xl glass-card gradient-border rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl pricing-card">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)]" />

      <div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
          <div>
            <span className="inline-flex items-center text-[10px] font-mono font-bold tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-3 py-1 rounded-full uppercase pricing-card-badge">
              STARTER
            </span>
            <h2 className="pricing-card-title mt-4 text-[var(--text)]">
              Free Package
            </h2>
          </div>
          <div className="sm:text-right shrink-0">
            <span className="pricing-card-price block">
              {"\u20B9"}0
            </span>
            <span className="text-xs text-[var(--sub)] font-medium pricing-card-billing">
              / forever
            </span>
          </div>
        </div>

        <p className="text-xs text-[var(--sub)] mb-6 leading-relaxed pricing-card-desc">
          For basic CSV calling workflows, testing, and small teams.
        </p>

        <div className="h-px bg-white/10 my-6" />

        <ul className="space-y-3.5 mb-8">
          {freePlanFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-xs sm:text-sm text-[var(--sub)]"
            >
              <div className="w-5 h-5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <svg
                  width="9"
                  height="7"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M9 1L3.5 6.5L1 4"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-medium pricing-card-feature">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {selected ? (
          <div
            role="status"
            className="text-center py-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-xl font-bold text-xs sm:text-sm animate-fade-in-up"
          >
            Free plan selected successfully.
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setSelected(true)}
            className="btn-primary w-full py-4 text-center justify-center shadow-lg font-bold rounded-2xl flex text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Continue with Free Plan
          </button>
        )}

        <p className="text-center text-[10px] sm:text-xs text-[var(--muted)] mt-4 font-medium">
          No payment details required.
        </p>
      </div>
    </div>
  );
}
