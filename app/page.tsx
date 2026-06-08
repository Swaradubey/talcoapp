"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const quickLinks = [
  {
    href: "/app-info",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "App Information",
    description: "Version details, features, system requirements, and platform availability.",
    color: "text-[var(--accent)]",
    bg: "bg-[var(--accent)]/10",
  },
  {
    href: "/support",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Support & Help",
    description: "FAQs, troubleshooting guides, and articles to get you unstuck fast.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    href: "/contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Contact Us",
    description: "Reach our team directly for partnership inquiries or custom solutions.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    href: "/privacy-policy",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy Policy",
    description: "How we collect, store, and protect your personal information.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    href: "/delete-account",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
    title: "Delete Account",
    description: "Permanently remove your Talco account and all associated data.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("messaging");

  // Messaging Tab State & Simulation
  const [messages, setMessages] = useState<Array<{
    sender: string;
    role: string;
    text: string;
    time: string;
    avatar: string;
    system?: boolean;
  }>>([
    { sender: "Sarah Chen", role: "Product Lead", text: "Team, we need to push the v3.2.1 build to staging today. Ready?", time: "10:24 AM", avatar: "👩🏻‍💻" },
    { sender: "Alex Rivera", role: "Tech Lead", text: "Code is fully tested. Merged the final security patches.", time: "10:25 AM", avatar: "👨🏼‍💻" },
  ]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (activeTab === "messaging") {
      setMessages([
        { sender: "Sarah Chen", role: "Product Lead", text: "Team, we need to push the v3.2.1 build to staging today. Ready?", time: "10:24 AM", avatar: "👩🏻‍💻" },
        { sender: "Alex Rivera", role: "Tech Lead", text: "Code is fully tested. Merged the final security patches.", time: "10:25 AM", avatar: "👨🏼‍💻" },
      ]);
      setTyping(false);

      const t1 = setTimeout(() => {
        setTyping(true);
        const t2 = setTimeout(() => {
          setTyping(false);
          setMessages(prev => [
            ...prev,
            { sender: "Talco Bot", role: "Automation", text: "🚀 Build #1482 compiled successfully. All staging tests passed (148/148). Ready to deploy.", time: "10:26 AM", avatar: "🤖", system: true }
          ]);
        }, 2000);
        return () => clearTimeout(t2);
      }, 3000);

      return () => clearTimeout(t1);
    }
  }, [activeTab]);

  // Files Tab State & Simulation
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([
    { name: "talco-branding-kit.pdf", size: "4.2 MB", type: "PDF", status: "completed" },
    { name: "staging-db-config.json", size: "12 KB", type: "JSON", status: "completed" },
  ]);

  const startUpload = () => {
    if (uploading) return;
    setUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setUploading(false);
            setFiles(prev => [
              ...prev,
              { name: "v3.2.1-release-notes.md", size: "1.4 MB", type: "MD", status: "completed" }
            ]);
          }, 800);
          return 100;
        }
        return p + 20;
      });
    }, 250);
  };

  // Workflow Automation Tab State & Simulation
  const [runningWorkflow, setRunningWorkflow] = useState(false);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([]);

  const runWorkflow = () => {
    if (runningWorkflow) return;
    setRunningWorkflow(true);
    setWorkflowLogs(["⚡ Webhook received from GitHub", "🔍 Parsing payload...", "🤖 AI summary generated: 'Fixed notification bugs in v3.2.1'"]);
    setTimeout(() => {
      setWorkflowLogs(prev => [...prev, "💬 Message sent to channel #general"]);
      setRunningWorkflow(false);
    }, 2500);
  };

  // Video Tab State & Simulation
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(true);

  return (
    <div className="relative w-full max-w-full overflow-x-hidden min-h-screen">
      {/* Background glow graphics */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] opacity-[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] left-[-10%] w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-24 sm:pt-32 pb-16 text-center relative z-10 overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-[var(--accent)] text-xs font-mono mb-8 animate-fade-up shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Version 3.2.1 is officially live
        </div>

        <h1 className="text-[clamp(1.8rem,7vw,5rem)] font-black tracking-tight text-[var(--text)] mb-6 animate-fade-up-delay-1 leading-[1.03] break-words"
          style={{ fontFamily: 'Syne, sans-serif' }}>
          Connect.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] text-glow">
            Create.
          </span>
          <br />Collaborate.
        </h1>

        <p className="text-[var(--sub)] text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2 font-medium px-2 sm:px-0">
          Talco is the next-generation canvas built for engineering and design teams who move fast.
          Real-time channels, file workflows, and custom nodes — unified.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3 px-4 sm:px-0">
          <Link
            href="/app-info"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-black font-bold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all glow-accent text-center"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Explore the App
          </Link>
          <Link
            href="/support"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-[var(--text)] font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all text-center"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Get Help
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-card max-w-3xl mx-auto rounded-3xl p-4 sm:p-6 grid grid-cols-3 gap-3 sm:gap-6 border border-white/5 animate-fade-up-delay-4 shadow-xl">
          {[
            { value: "500K+", label: "Active Users", desc: "Collaborating daily" },
            { value: "99.99%", label: "Uptime SLA", desc: "Enterprise graded" },
            { value: "4.8★", label: "App Store", desc: "Highest user rating" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--sub)]" style={{ fontFamily: 'Syne, sans-serif' }}>
                {s.value}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-[var(--text)] mt-1.5">{s.label}</span>
              <span className="text-[10px] text-[var(--muted)] mt-0.5 hidden sm:block">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Platform Preview Widget */}
      <section className="max-w-5xl mx-auto px-6 pb-24 relative z-10 animate-fade-up-delay-4">
        <div className="text-center mb-8">
          <h2 className="text-xs uppercase tracking-widest text-[var(--accent)] font-mono mb-2">Live Demo</h2>
          <p className="text-2xl font-bold text-[var(--text)]" style={{ fontFamily: 'Syne, sans-serif' }}>Experience the Talco Hub</p>
        </div>

        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/40">
          {/* Widget Navigation Tabs */}
          <div className="flex border-b border-white/5 bg-white/[0.02] p-2 gap-1 overflow-x-auto">
            {[
              { id: "messaging", label: "💬 Chat Feed", color: "hover:text-purple-400" },
              { id: "files", label: "📁 Share Files", color: "hover:text-blue-400" },
              { id: "workflows", label: "⚡ Automation Node", color: "hover:text-amber-400" },
              { id: "video", label: "🎥 HD Video", color: "hover:text-cyan-400" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? "bg-white/10 text-white border border-white/10 shadow-lg"
                    : `text-[var(--sub)] ${tab.color} hover:bg-white/5`
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="p-6 min-h-[300px] flex flex-col justify-between">
            {/* Messaging Tab */}
            {activeTab === "messaging" && (
              <div className="space-y-4 animate-fade-in-up flex-1 flex flex-col justify-end">
                <div className="space-y-3.5">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex gap-3.5 items-start ${msg.system ? 'bg-white/[0.02] border border-white/5 p-3 rounded-2xl' : ''}`}>
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-lg shadow-md shrink-0 border border-white/5">
                        {msg.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-0.5">
                          <span className="text-xs font-bold text-[var(--text)]">{msg.sender}</span>
                          <span className="text-[10px] text-[var(--muted)] font-mono">{msg.role}</span>
                          <span className="text-[9px] text-[var(--muted)] ml-auto font-mono">{msg.time}</span>
                        </div>
                        <p className={`text-xs leading-relaxed ${msg.system ? 'text-purple-300 font-mono' : 'text-[var(--sub)]'}`}>
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  ))}
                  {typing && (
                    <div className="flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-xs text-[var(--muted)] border border-white/5">🤖</div>
                      <div className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-white/5 border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Files Tab */}
            {activeTab === "files" && (
              <div className="animate-fade-in-up space-y-5 flex-1 flex flex-col justify-center">
                <div className="border border-dashed border-white/10 rounded-2xl p-6 text-center bg-white/[0.01] hover:bg-white/[0.02] transition-colors relative">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3 border border-blue-500/20 text-blue-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">Drag and drop file to upload</h4>
                  <p className="text-[10px] text-[var(--muted)] mb-4">Max file size 2GB (PDF, JSON, PNG, ZIP, MP4)</p>

                  {uploading ? (
                    <div className="max-w-xs mx-auto space-y-2">
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 transition-all duration-300" style={{ width: `${progress}%` }} />
                      </div>
                      <p className="text-[10px] font-mono text-blue-300">Uploading v3.2.1-release-notes.md... {progress}%</p>
                    </div>
                  ) : (
                    <button
                      onClick={startUpload}
                      className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold hover:bg-blue-500/30 transition-all"
                    >
                      Trigger Demo File Upload
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[var(--muted)]">Uploaded Workspace Files</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {files.map((file, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xs font-bold bg-white/5 px-1.5 py-0.5 rounded text-[var(--muted)] font-mono">{file.type}</span>
                          <span className="text-xs font-medium text-[var(--text)] truncate">{file.name}</span>
                        </div>
                        <span className="text-[9px] font-mono text-[var(--muted)] shrink-0">{file.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Workflows Tab */}
            {activeTab === "workflows" && (
              <div className="animate-fade-in-up space-y-6 flex-1 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
                  {/* Webhook Card */}
                  <div className="w-44 glass-card p-4 rounded-2xl border border-white/10 text-center relative z-10">
                    <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono font-medium">Trigger</span>
                    <h5 className="text-xs font-bold text-white mt-2">GitHub Webhook</h5>
                    <p className="text-[9px] text-[var(--muted)] mt-0.5">Push Event</p>
                  </div>

                  {/* Flow Arrow Line */}
                  <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-amber-500/30 to-violet-500/30 relative">
                    <span className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 ${runningWorkflow ? 'animate-ping left-full transition-all duration-2000' : 'left-0'}`} />
                  </div>

                  {/* AI Assistant Card */}
                  <div className="w-44 glass-card p-4 rounded-2xl border border-white/10 text-center relative z-10">
                    <span className="text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full font-mono font-medium">AI Node</span>
                    <h5 className="text-xs font-bold text-white mt-2">Summarize Thread</h5>
                    <p className="text-[9px] text-[var(--muted)] mt-0.5">AI LLM Engine</p>
                  </div>

                  {/* Flow Arrow Line */}
                  <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-violet-500/30 to-emerald-500/30 relative">
                    <span className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 ${runningWorkflow ? 'animate-ping left-full transition-all duration-2000' : 'left-0'}`} />
                  </div>

                  {/* Final Destination Card */}
                  <div className="w-44 glass-card p-4 rounded-2xl border border-white/10 text-center relative z-10">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono font-medium">Action</span>
                    <h5 className="text-xs font-bold text-white mt-2">Post to #general</h5>
                    <p className="text-[9px] text-[var(--muted)] mt-0.5">Workspace Channels</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={runWorkflow}
                    className="px-6 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold hover:bg-amber-500/20 transition-all flex items-center gap-2"
                  >
                    {runningWorkflow ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        Running Automation test...
                      </>
                    ) : (
                      "▶ Trigger Webhook Event"
                    )}
                  </button>

                  {workflowLogs.length > 0 && (
                    <div className="w-full max-w-xl bg-black/60 border border-white/5 rounded-xl p-3 font-mono text-[9px] text-zinc-400 space-y-1 text-left">
                      {workflowLogs.map((log, i) => (
                        <p key={i}>{log}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Video Tab */}
            {activeTab === "video" && (
              <div className="animate-fade-in-up space-y-5 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {/* User 1 */}
                  <div className="relative aspect-video rounded-xl bg-white/5 border border-purple-500/40 overflow-hidden flex items-center justify-center group shadow-md">
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 bg-black/60 rounded-md text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      Sarah Chen (Speaker)
                    </span>
                    <span className="text-2xl animate-float">👩🏻‍💻</span>
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      <span className="w-5 h-5 rounded-md bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px]">🎙️</span>
                    </div>
                  </div>

                  {/* User 2 */}
                  <div className="relative aspect-video rounded-xl bg-white/5 border border-white/5 overflow-hidden flex items-center justify-center group">
                    <span className="absolute top-2 left-2 text-[10px] font-medium px-1.5 py-0.5 bg-black/60 rounded-md text-zinc-300">Alex Rivera</span>
                    <span className="text-2xl">👨🏼‍💻</span>
                  </div>

                  {/* User 3 */}
                  <div className="relative aspect-video rounded-xl bg-white/5 border border-white/5 overflow-hidden flex items-center justify-center group">
                    <span className="absolute top-2 left-2 text-[10px] font-medium px-1.5 py-0.5 bg-black/60 rounded-md text-zinc-300">Elena Rostova</span>
                    <span className="text-2xl">👩🏼‍🚀</span>
                  </div>

                  {/* User 4 */}
                  <div className="relative aspect-video rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center group">
                    <span className="absolute top-2 left-2 text-[10px] font-medium px-1.5 py-0.5 bg-black/60 rounded-md text-zinc-300">You</span>
                    {videoActive ? (
                      <span className="text-2xl">🚀</span>
                    ) : (
                      <span className="text-xs text-[var(--muted)]">Camera Off</span>
                    )}

                    <div className="absolute bottom-2 right-2 flex gap-1">
                      {!micActive && (
                        <span className="w-5 h-5 rounded-md bg-red-500/20 border border-red-500/40 flex items-center justify-center text-[9px] text-red-400">🔇</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => setMicActive(!micActive)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${micActive
                        ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                        : "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
                      }`}
                  >
                    {micActive ? "🎙️ Mute Microphone" : "🔇 Unmute Microphone"}
                  </button>
                  <button
                    onClick={() => setVideoActive(!videoActive)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${videoActive
                        ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                        : "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
                      }`}
                  >
                    {videoActive ? "🎥 Turn Video Off" : "📹 Turn Video On"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick links grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24 relative z-10">
        <h2 className="text-2xl font-black text-[var(--text)] mb-8 text-center"
          style={{ fontFamily: 'Syne, sans-serif' }}>
          Explore the Hub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group glass-card rounded-2xl p-6 bg-[var(--card)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md`}>
                {item.icon}
              </div>
              <h3 className="text-[var(--text)] font-extrabold mb-2 text-base group-hover:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-[var(--sub)] text-xs leading-relaxed">{item.description}</p>
              <div className={`mt-4 flex items-center gap-1 ${item.color} text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                View page
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-y-0.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
