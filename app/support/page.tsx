"use client";
import { useState } from "react";
import PageShell from "@/components/PageShell";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Topics" },
  { id: "account", label: "Account Setup" },
  { id: "billing", label: "Billing & Plans" },
  { id: "features", label: "Capabilities" },
  { id: "technical", label: "Troubleshooting" },
];

const faqs = [
  { id: 1, cat: "account", q: "How do I reset my account password?", a: "Go to the login screen and tap 'Forgot Password'. Enter your email and we'll dispatch a secure reset link within a few minutes. Check your spam folder if you do not receive it." },
  { id: 2, cat: "account", q: "Can I change my username in the workspace?", a: "Yes. Go to Settings → Profile → Edit Username. You can modify your username once every 30 days. Your old username remains reserved for your account for 14 days." },
  { id: 3, cat: "account", q: "How do I configure two-factor authentication?", a: "Navigate to Settings → Security → Two-Factor Authentication and follow the setup wizard. We support auth apps (TOTP protocols) and mobile SMS." },
  { id: 4, cat: "billing", q: "What plans does Talco offer for teams?", a: "We offer Free (up to 5 users), Pro ($12/user/month), Business ($20/user/month), and Enterprise (custom quoting). Choosing annual billing saves 20% flat." },
  { id: 5, cat: "billing", q: "How do I cancel my team subscription?", a: "Navigate to Settings → Billing → Cancel Subscription. Your plan remains active until the end of the current billing cycle. No partial refunds are issued." },
  { id: 6, cat: "billing", q: "Can I request a refund?", a: "We provide a 14-day money-back guarantee on all premium plans. Reach out to billing@talco.app within 14 days of your invoice date to process your refund." },
  { id: 7, cat: "features", q: "How do I share files inside a channel?", a: "Drag and drop any file directly into a channel canvas, or click the 📎 attachment icon. Files up to 2GB are supported with automated previews." },
  { id: 8, cat: "features", q: "Does Talco support offline operations?", a: "Yes. Talco caches message threads locally. You can read, search, and draft messages offline; they will be synced immediately when connection is restored." },
  { id: 9, cat: "technical", q: "Why am I failing to receive push notifications?", a: "Verify notifications are enabled in your OS system settings for Talco. In-app, check Settings → Notifications. Ensure background sync is enabled." },
  { id: 10, cat: "technical", q: "The desktop application keeps crashing. How do I fix it?", a: "Try force quitting and reopening. If it persists, clear workspace cache via Settings → Advanced → Clear Cache, or reinstall. Contact tech support if it fails." },
];

export default function SupportPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [openId, setOpenId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter(f => {
    const matchesCat = activeCat === "all" || f.cat === activeCat;
    const matchesSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <PageShell
      badge="Help Center"
      badgeColor="text-blue-400"
      title="Support &"
      titleAccent="Help"
      subtitle="Find documentation, search answers to common queries, or get in touch with our technical operations team."
      glowColor="#3B82F6"
    >
      {/* Search Input Box */}
      <div className="relative mb-8 group">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] group-focus-within:text-blue-400 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search help articles, guides, or issues..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-[var(--text)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all shadow-md focus:shadow-blue-500/5"
        />
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => {
              setActiveCat(c.id);
              setOpenId(null);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${activeCat === c.id
              ? "bg-blue-500/10 text-blue-300 border-blue-500/35 shadow-md shadow-blue-500/5"
              : "bg-white/5 text-[var(--sub)] border-white/5 hover:text-white hover:bg-white/10"
              }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      {filtered.length > 0 ? (
        <div className="space-y-3 mb-10">
          {filtered.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl overflow-hidden border transition-all ${isOpen ? 'border-blue-500/30 bg-white/[0.03]' : 'border-white/5'
                  }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.01]"
                >
                  <span className="text-[var(--text)] text-sm font-bold pr-4 group-hover:text-white" style={{ fontFamily: 'DM sanes, sans-serif' }}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-blue-500/10 border-blue-500/20' : ''}`}>
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "var(--accent2)" : "var(--muted)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-3 border-t border-white/5 animate-fade-in-up">
                    <p className="text-[var(--sub)] text-xs leading-relaxed font-medium">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 glass-card rounded-2xl border border-white/5 mb-10">
          <p className="text-[var(--sub)] text-sm mb-2">No matching topics found for "{search}"</p>
          <button
            onClick={() => { setSearch(""); setActiveCat("all"); }}
            className="text-blue-400 text-xs font-bold hover:underline"
          >
            Clear Search Filter
          </button>
        </div>
      )}

      {/* Support Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5 text-center flex flex-col justify-between h-48">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3 text-blue-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-[var(--text)] text-sm font-extrabold mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Still Stuck?</h3>
            <p className="text-[var(--sub)] text-[11px] leading-relaxed max-w-[200px] mx-auto">Open a direct ticket. Support replies average 24 hours.</p>
          </div>
          <Link href="/contact" className="w-full block py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold hover:bg-blue-500/20 transition-all">
            Contact Support
          </Link>
        </div>

        <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5 text-center flex flex-col justify-between h-48">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-3 text-[var(--accent)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="text-[var(--text)] text-sm font-extrabold mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Documentation</h3>
            <p className="text-[var(--sub)] text-[11px] leading-relaxed max-w-[200px] mx-auto">In-depth API guides, SDK configuration, and setup wikis.</p>
          </div>
          <a href="#" className="w-full block py-2 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-bold hover:bg-[var(--accent)]/20 transition-all">
            Open Documentation
          </a>
        </div>
      </div>
    </PageShell>
  );
}
