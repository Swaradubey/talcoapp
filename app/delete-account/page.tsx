"use client";
import { useState } from "react";
import PageShell from "@/components/PageShell";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required.";
    if (!re.test(value)) return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(email);
    setEmailError(err);
    if (err || !confirmed) return;
    // TODO: Connect to backend/email API to submit the deletion ticket.
    // Example: await fetch("/api/delete-account", { method: "POST", body: JSON.stringify({ email, reason }) });
    setSubmitted(true);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) setEmailError("");
  };

  return (
    <PageShell
      badge="Account Management"
      badgeColor="text-red-400"
      badgeBg="bg-red-500/10"
      title="Account Deletion &"
      titleAccent="Data Removal"
      subtitle="Request permanent removal of your user records and associated data from the Talco servers."
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
            Removing your account is a complete database delete. There are no backups or restoration tools available.
          </p>
        </div>
      </div>

      {/* Database Impacts */}
      <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5 mb-6">
        <h2 className="text-sm font-extrabold uppercase tracking-wider text-red-400 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Impacts of Database Erasure
        </h2>
        <ul className="grid grid-cols-1 gap-3">
          {[
            "Profile identity, including your name, email, and phone number, are erased from our database.",
            "Call history logs and user settings associated with your account are permanently wiped.",
            "Your authentication credentials are completely revoked and destroyed.",
            "This operation is final and cannot be reversed or retrieved.",
          ].map((item) => (
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
        <div className="grid grid-cols-1 gap-3">
          {[
            { step: "01", title: "Open Settings", desc: "Navigate to the Settings menu inside the Talco app." },
            { step: "2", title: "Account Section", desc: "Scroll down to the bottom of the Settings page to find the Account section." },
            { step: "3", title: "Select Deletion", desc: "Tap on the \u201CDelete Account\u201D button." },
            { step: "4", title: "Confirm Deletion", desc: "When prompted, type \u201CDELETE\u201D in the text box to authorize. Your account and all associated data will be deleted instantly and permanently." },
          ].map((s) => (
            <div key={s.step + s.title} className="flex gap-3 p-4 rounded-xl bg-white/[0.01] border border-white/5">
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
      <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5 mb-6">
        <h2 className="text-sm font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
          Alternative: Email Deletion Request Form
        </h2>
        <p className="text-[var(--muted)] text-[11px] mb-5">
          If you lack access to the Talco application, you can submit an administrative deletion ticket. The process is validated and completed within 5\u20137 business days.
        </p>

        {submitted ? (
          <div className="text-center py-8 animate-fade-in-up">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="text-base font-extrabold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Ticket Submitted</h3>
            <p className="text-[var(--sub)] text-xs max-w-xs mx-auto">
              Your administrative deletion ticket has been submitted successfully. Our team will validate and process your request within 5\u20137 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>
                Account Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Enter your registered email address"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm placeholder:text-[var(--muted)] focus:outline-none focus:bg-white/[0.08] transition-all ${
                  emailError ? "border-red-500/50" : "border-white/10 focus:border-red-500/50"
                }`}
              />
              {emailError && (
                <p className="text-red-400 text-[10px] mt-1.5 font-medium">{emailError}</p>
              )}
            </div>
            <div>
              <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>
                Feedback or Reason <span className="text-[var(--muted)]">(Optional)</span>
              </label>
              <textarea
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
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
                I explicitly verify that deleting this account is permanent. All database tables, user records, call histories, and profile data matching this identifier will be deleted with zero recovery methods.
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

      {/* Manual Email Request */}
      <div className="glass-card rounded-2xl p-6 bg-[var(--card)] border border-white/5">
        <h2 className="text-sm font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
          Manual Email Request
        </h2>
        <p className="text-[var(--muted)] text-[11px] leading-relaxed">
          For manual requests, you can also directly email your deletion request to{" "}
          <a href="mailto:support@talco.app" className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors">
            support@talco.app
          </a>{" "}
          from your registered email address.
        </p>
      </div>
    </PageShell>
  );
}
