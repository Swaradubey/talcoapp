import Link from "next/link";

interface PageShellProps {
  badge?: string;
  badgeColor?: string;
  badgeBg?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  children: React.ReactNode;
  glowColor?: string;
}

export default function PageShell({
  badge,
  badgeColor = "text-[var(--accent)]",
  badgeBg = "bg-white/5",
  title,
  titleAccent,
  subtitle,
  children,
  glowColor = "var(--accent)",
}: PageShellProps) {
  return (
    <div className="relative min-h-[calc(100vh-16rem)]">
      {/* Multi-layered background ambient glowing lights */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full blur-[130px] pointer-events-none z-0"
        style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`, opacity: 0.12 }}
      />
      <div
        className="absolute top-[20%] left-[10%] w-[350px] h-[250px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: `radial-gradient(circle, var(--accent2) 0%, transparent 70%)`, opacity: 0.05 }}
      />

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-14 text-center relative z-10">
        {badge && (
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/5 ${badgeBg} ${badgeColor} text-xs font-mono mb-6 animate-fade-up shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {badge}
          </div>
        )}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--text)] tracking-[-0.04em] mb-5 animate-fade-up-delay-1"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1 }}
        >
          {title}{" "}
          {titleAccent && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" style={{ textShadow: "0 0 40px rgba(139,92,246,0.15)" }}>
              {titleAccent}
            </span>
          )}
        </h1>
        <p
          className="mt-4 text-[var(--sub)] text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-fade-up-delay-2"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 relative z-10 animate-fade-up-delay-3">
        {children}
      </div>
    </div>
  );
}
