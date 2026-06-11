import Link from "next/link";

export default function ProPackageSection() {
  return (
    <section className="py-20 relative overflow-hidden" aria-labelledby="pro-heading">
      {/* Background Ambient Glows */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full blur-[100px] sm:blur-[130px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.08) 50%, transparent 100%)",
        }}
      />
      <div className="page-container relative z-10">
        {/* Section Header */}
        <div className="home-section-header text-center mb-12 animate-fade-up">
          <p className="home-section-eyebrow uppercase font-mono tracking-wider text-[var(--accent)] mb-2 text-xs font-semibold">Premium Upgrade</p>
          <h2 id="pro-heading" className="demo-section-heading mb-4 text-3xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight">
            Upgrade to Pro Package
          </h2>
          <p className="home-section-sub max-w-2xl mx-auto text-sm sm:text-base text-[var(--sub)] leading-relaxed">
            Free customers can unlock advanced CSV calling automation, faster workflows, and premium tools with the Pro Package.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid px-4 animate-fade-in-up">
          {/* Free Package Card */}
          <div className="w-full glass-card border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300 pricing-card">
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center text-[10px] font-mono font-bold tracking-wider text-[var(--sub)] bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase pricing-card-badge">
                    STARTER
                  </span>
                  <h3 className="pricing-card-title mt-4">
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
                  <h3 className="pricing-card-title mt-4">
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
              {/* CTA Button */}
              <Link
                href="/pro-package"
                className="btn-primary w-full py-3.5 text-center justify-center shadow-lg font-bold rounded-xl block text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Upgrade to Pro
              </Link>

              {/* Footer note under CTA */}
              <p className="text-center text-[10px] sm:text-xs text-[var(--muted)] mt-4 font-medium">
                Free users can upgrade anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
