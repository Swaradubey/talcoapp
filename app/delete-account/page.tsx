"use client";
import { useState } from "react";
import PageShell from "@/components/PageShell";

const steps = [
  { step: "01", title: "Open Settings", desc: "Navigate to your profile menu → Settings inside the Talco app." },
  { step: "02", title: "Account & Privacy", desc: "Select the Account & Privacy submenu in your workspace dashboard." },
  { step: "03", title: "Select Deletion", desc: "Scroll down to the bottom options and select 'Delete My Account'." },
  { step: "04", title: "Confirm Password", desc: "Enter credentials to authorize. Your data is deleted in 30 days." },
];

const impacts = [
  "All workspace message threads and logs are permanently purged",
  "Profile identity, handles, and custom permissions are erased",
  "All attached files, media, database tables, and backups are wiped",
  "Any running premium team subscriptions are immediately terminated",
  "API tokens, webhooks, and active app connections are revoked",
  "This operation is final and cannot be reversed or retrieved",
];

export default function DeleteAccountPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed || !email) return;
    setSubmitted(true);
  };

  return (
    <PageShell
      badge="Account Management"
      badgeColor="text-red-400"
      badgeBg="bg-red-500/10"
      title="Delete"
      titleAccent="Account"
      subtitle="Request permanent removal of your user records and collaborative data from the Talco servers."
      glowColor="#EF4444"
    >
      {/* Warning Banner */}
      <div className="flex gap-4 p-5 rounded-2xl bg-red-500/[0.03] border border-red-500/20 mb-10 shadow-lg shadow-red-950/5 animate-fade-up">
        <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 border border-red-500/20">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <div>
          <h4 className="text-red-400 text-sm font-extrabold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Critical Deletion Safeguard</h4>
          <p className="text-red-400/80 text-[11px] leading-relaxed">
            Removing your account is a complete database delete. There are no backups or restoration tools available. Please export workspace logs or attachments prior to execution.
          </p>
        </div>
      </div>

      {/* Database Impacts */}
      <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5 mb-6">
        <h2 className="text-sm font-extrabold uppercase tracking-wider text-red-400 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Impacts of Database Erasure
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {impacts.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              <span className="text-[var(--sub)] text-[11px] leading-relaxed font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* In-App Deletion Steps */}
      <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5 mb-6">
        <h2 className="text-sm font-extrabold text-[var(--text)] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Recommended: Delete in-app for instant purge
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-3 p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg h-7 w-7 flex items-center justify-center shrink-0" style={{ fontFamily: 'DM Mono, monospace' }}>
                {s.step}
              </span>
              <div>
                <p className="text-[var(--text)] text-xs font-extrabold mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>{s.title}</p>
                <p className="text-[var(--muted)] text-[10px] leading-normal">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request Form */}
      <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5">
        <h2 className="text-sm font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
          Alternative: Email Deletion Request Form
        </h2>
        <p className="text-[var(--muted)] text-[11px] mb-5">
          If you lack access to the client applications, you can submit an administrative deletion ticket. Process is validated and completed within 5 business days.
        </p>

        {submitted ? (
          <div className="text-center py-8 animate-fade-in-up">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="text-base font-extrabold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Ticket Logged</h3>
            <p className="text-[var(--sub)] text-xs max-w-xs mx-auto">We've received your request and will reach out to verify account ownership details shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>Account Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-red-500/50 focus:bg-white/[0.08] transition-all"
              />
            </div>
            <div>
              <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>Feedback or Reason (Optional)</label>
              <textarea
                rows={3}
                placeholder="Help us improve. Why are you requesting data deletion?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-red-500/50 focus:bg-white/[0.08] transition-all resize-none"
              />
            </div>
            
            <label className="flex items-start gap-3.5 cursor-pointer bg-white/[0.01] border border-white/5 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 accent-red-500 w-4 h-4 cursor-pointer shrink-0"
              />
              <span className="text-[var(--sub)] text-[11px] leading-relaxed font-medium">
                I explicitly verify that deleting this account is permanent. All database tables, user records, messages, and uploaded files matching this identifier will be deleted with zero recovery methods.
              </span>
            </label>

            <button
              type="submit"
              disabled={!confirmed || !email}
              className="w-full py-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-bold hover:bg-red-500/20 hover:border-red-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-md shadow-red-500/5"
            >
              Submit Administrative Deletion Ticket
            </button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
