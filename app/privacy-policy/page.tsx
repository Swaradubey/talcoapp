import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Talco",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, update your profile, use our services, or contact us for support. This includes your name, email address, username, password, and any other information you choose to provide. We also collect information automatically when you use Talco, including usage data, device information, and log data.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to provide, maintain, and improve our services; process transactions and send related information; send technical notices, updates, security alerts, and support messages; respond to comments and questions; and send marketing communications (with your consent where required by law).`,
  },
  {
    title: "Sharing of Information",
    content: `We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except to provide our services, comply with the law, or protect our rights. We may share information with trusted third-party vendors who assist us in operating our platform, subject to confidentiality agreements.`,
  },
  {
    title: "Data Retention",
    content: `We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required by law to retain it for longer.`,
  },
  {
    title: "Cookies & Tracking",
    content: `We use cookies and similar tracking technologies to track activity on our platform and to hold certain information. Cookies are files with a small amount of data sent to your browser. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`,
  },
  {
    title: "Security",
    content: `We implement industry-standard security measures including TLS encryption in transit and AES-256 encryption at rest. We conduct regular security audits and employ a dedicated security team. However, no method of transmission over the Internet or method of electronic storage is 100% secure.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data; the right to data portability; the right to object to processing; and the right to withdraw consent. To exercise any of these rights, please contact us at privacy@talco.app.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by sending an email to the address associated with your account or by posting a prominent notice on our platform. Your continued use of Talco after the effective date of the revised policy constitutes your acceptance.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      badge="Legal"
      badgeColor="text-amber-400"
      title="Privacy"
      titleAccent="Policy"
      subtitle="We take your privacy seriously. This policy describes how Talco collects, uses, and protects your personal information."
      glowColor="#F59E0B"
    >
      {/* Last updated banner */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-10">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <p className="text-amber-400/80 text-sm" style={{fontFamily:'DM Mono, monospace'}}>
          Last updated: January 15, 2025 · Effective: February 1, 2025
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, i) => (
          <div key={section.title} className="gradient-border rounded-2xl p-6 bg-[var(--card)]">
            <div className="flex items-start gap-4">
              <span className="text-xs font-mono text-[var(--muted)] bg-[var(--border)] rounded-md px-2 py-1 mt-0.5 shrink-0"
                style={{fontFamily:'DM Mono, monospace'}}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-[var(--text)] font-semibold mb-3" style={{fontFamily:'Syne, sans-serif'}}>
                  {section.title}
                </h2>
                <p className="text-[var(--sub)] text-sm leading-relaxed">{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-10 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center">
        <p className="text-[var(--sub)] text-sm mb-4">
          Questions about this policy? Our privacy team is here to help.
        </p>
        <a
          href="mailto:privacy@talco.app"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-500/20 hover:bg-amber-500/20 transition-all"
        >
          Contact Privacy Team
        </a>
      </div>
    </PageShell>
  );
}
