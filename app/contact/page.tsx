"use client";
import { useState } from "react";
import PageShell from "@/components/PageShell";

const channels = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: "Email Support",
    desc: "We reply within 24 hours",
    value: "support@talco.app",
    href: "mailto:support@talco.app",
    color: "text-[var(--accent)]",
    bg: "bg-[var(--accent)]/10",
    border: "border-[var(--accent)]/20",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Live Chat Support",
    desc: "Mon–Fri, 9am–6pm EST",
    value: "Start a conversation",
    href: "#",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Partnerships",
    desc: "Enterprise & press channels",
    value: "partners@talco.app",
    href: "mailto:partners@talco.app",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

const subjects = ["General Inquiry", "Bug Report", "Feature Request", "Billing", "Partnership", "Press", "Other"];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell
      badge="Get Connected"
      badgeColor="text-violet-400"
      title="Get in"
      titleAccent="Touch"
      subtitle="Have a question or custom solution proposal? Our team replies within one business day."
      glowColor="#8B5CF6"
    >
      {/* Contact Channels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {channels.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="glass-card rounded-2xl p-5 bg-[var(--card)] hover:-translate-y-0.5 border border-white/5 hover:border-white/10 group"
          >
            <div className={`w-9 h-9 rounded-xl ${c.bg} ${c.color} border ${c.border} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-sm`}>
              {c.icon}
            </div>
            <p className="text-[var(--text)] text-sm font-extrabold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{c.title}</p>
            <p className="text-[var(--sub)] text-xs mb-3">{c.desc}</p>
            <p className={`${c.color} text-xs font-bold font-mono`} style={{ fontFamily: 'DM Mono, monospace' }}>{c.value}</p>
          </a>
        ))}
      </div>

      {/* Form Card */}
      <div className="glass-card rounded-3xl p-8 bg-[var(--card)] border border-white/5 relative">
        <h2 className="text-xl font-extrabold text-[var(--text)] mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
          Send a Workspace Message
        </h2>

        {sent ? (
          <div className="text-center py-10 animate-fade-in-up">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-violet-500/10">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Message Dispatch Successful!</h3>
            <p className="text-[var(--sub)] text-sm max-w-sm mx-auto leading-relaxed">Your message has been parsed by our systems. Support staff will respond within 24 hours.</p>
            <button
              onClick={() => {
                setSent(false);
                setForm({ name: "", email: "", subject: subjects[0], message: "" });
              }}
              className="mt-6 px-6 py-2.5 rounded-xl border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-all"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handle} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all"
                />
              </div>
              <div>
                <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>Message Subject</label>
              <div className="relative">
                <select
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text)] text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                >
                  {subjects.map(s => (
                    <option key={s} value={s} className="bg-[var(--surface)] text-[var(--text)]">
                      {s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--sub)]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[var(--sub)] text-xs font-bold uppercase tracking-wider mb-2 font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>Message Body</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us what's on your mind..."
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-bold hover:bg-violet-500/20 hover:border-violet-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md shadow-violet-500/5"
            >
              Send Secure Message →
            </button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
