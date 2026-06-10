import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "App Information — CSV Auto Dialer" };

const platforms = [
  { name: "CSV Upload", icon: "📁", version: "1.0", desc: "Upload contact lists using CSV files with names, phone numbers, and lead details.", store: "Use Feature", storeUrl: "#", active: true },
  { name: "Auto Dialing", icon: "⚡", version: "1.0", desc: "Start calling contacts faster with a streamlined dialing workflow.", store: "Use Feature", storeUrl: "#", active: true },
  { name: "Lead Management", icon: "👥", version: "1.0", desc: "Organize leads, track call status, and manage contact records easily.", store: "Use Feature", storeUrl: "#", active: true },
  { name: "Call Workflow", icon: "🔁", version: "1.0", desc: "Move through contacts step by step and keep your calling process organized.", store: "Use Feature", storeUrl: "#", active: true },
  { name: "Data Privacy", icon: "🔒", version: "1.0", desc: "Your uploaded contact data stays organized and is used only for dialing workflow management.", store: "Use Feature", storeUrl: "#", active: true },
  { name: "Productivity", icon: "📈", version: "1.0", desc: "Save time by reducing manual dialing and improving daily calling efficiency.", store: "Use Feature", storeUrl: "#", active: true },
];

const features = [
  { icon: "⚡", title: "Real-Time Chat", desc: "Sub-100ms message delivery with end-to-end encryption pipelines." },
  { icon: "📁", title: "Smart File Sharing", desc: "Share files up to 2GB per upload instantly across cloud environments." },
  { icon: "🎥", title: "HD Video Calls", desc: "Crystal-clear audio and video streams with screen sharing capabilities." },
  { icon: "🔔", title: "Focus Notifications", desc: "AI schedules your notifications based on active focus periods." },
  { icon: "🔗", title: "200+ Integrations", desc: "Connect smoothly with GitHub, Slack, Notion, Jira, and linear workflows." },
  { icon: "🔐", title: "SOC 2 Type II Security", desc: "Enterprise graded SSO, SCIM compliance, and automated audit logs." },
  { icon: "🎨", title: "Tailored Themes", desc: "Gorgeous glassmorphic palettes tailored dynamically to match your settings." },
  { icon: "🤖", title: "AI Assistant", desc: "Built-in summaries, smart drafting support, and code review parsing." },
];

const changelog = [
  { version: "3.2.1", date: "Jun 3, 2025", type: "patch", notes: "Resolved notification delay in background modes. Performance upgrades for active workspaces above 10k users." },
  { version: "3.2.0", date: "May 20, 2025", type: "minor", notes: "Global AI Assistant launch. Added automatic thread summaries, code blocks formatting, and smart chat actions." },
  { version: "3.1.5", date: "Apr 14, 2025", type: "patch", notes: "Security patches resolving CVE-2025-1234. Optimized workspace load times by 30%." },
  { version: "3.1.0", date: "Mar 3, 2025", type: "minor", notes: "Video grids update to support 100 participants. Added custom background filters and sound waves styling." },
];

const typeColor: Record<string, string> = {
  patch: "text-zinc-400 bg-white/5 border border-white/10",
  minor: "text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20",
  major: "text-blue-400 bg-blue-500/10 border border-blue-500/20",
};

export default function AppInfoPage() {
  return (
    <PageShell
      badge="CSV Auto Dialer v1.0 — Ready to Use"
      badgeColor="text-[var(--accent)]"
      title="App"
      titleAccent="Information"
      subtitle="CSV Auto Dialer is a simple calling automation tool that helps users upload CSV contact lists, manage leads, start calls quickly, and organize calling workflows from one clean dashboard."
    >
      {/* Platform Download Cards */}
      <div className="mb-14">
        <h2 className="section-heading">Core App Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((p) => (
            <div key={p.name} className="glass-card rounded-2xl p-5 bg-[var(--card)] flex flex-col justify-between h-48 border border-white/5 hover:border-white/10">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <p className="card-small-title">{p.name}</p>
                      <p className="text-[var(--sub)] text-[10px] font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>v{p.version}</p>
                    </div>
                  </div>
                  {p.active ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Ready to download" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title="Cloud Hosted" />
                  )}
                </div>

                <p className="text-[var(--sub)] text-[11px] leading-relaxed py-1">
                  {p.desc}
                </p>
              </div>

              <a
                href={p.storeUrl}
                className={`w-full block text-center py-2 rounded-xl text-xs font-bold transition-all border ${p.active
                  ? "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  : "bg-[var(--accent)] text-black border-transparent hover:opacity-90"
                  }`}
              >
                {p.store} →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="mb-14">
        <h2 className="text-lg font-black text-[var(--text)] mb-6" style={{ fontFamily: 'Syne, sans-serif' }}></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
              <span className="text-2xl shrink-0 p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center h-11 w-11 shadow-sm">{f.icon}</span>
              <div>
                <p className="text-[var(--text)] text-sm font-extrabold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{f.title}</p>
                <p className="text-[var(--sub)] text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Release Notes */}
      <div className="mb-14">
        <h2 className="section-heading">Release Notes & Changelog</h2>
        <div className="space-y-4">
          {changelog.map((r) => (
            <div key={r.version} className="glass-card rounded-2xl p-5 bg-[var(--card)] border border-white/5 hover:border-white/10">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-xs font-bold text-white font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10" style={{ fontFamily: 'DM Mono, monospace' }}>v{r.version}</span>
                <span className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full ${typeColor[r.type]}`}>{r.type}</span>
                <span className="text-[var(--muted)] text-[10px] font-mono ml-auto">{r.date}</span>
              </div>
              <p className="text-[var(--sub)] text-xs leading-relaxed">{r.notes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Metadata Info */}
      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
        <h2 className="text-sm uppercase tracking-wider text-[var(--muted)] font-mono mb-4">Corporate Summary</h2>
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-xs">
          {[
            ["Developer Entity", "CSV Auto Dialer LLC"],
            ["Established", "2026 · San Francisco"],
            ["Staff Count", "Global Remote Support"],
            ["Total Funding", "Bootstrap"],
            ["Product Domain", "csvautodialer.com"],
            ["Operational Status", "Active (99.99%)"],
          ].map(([k, v]) => (
            <div key={k} className="border-l border-white/5 pl-3">
              <dt className="text-[var(--muted)] text-[10px] font-mono uppercase tracking-wider">{k}</dt>
              <dd className="text-[var(--text)] font-semibold mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </PageShell>
  );
}
