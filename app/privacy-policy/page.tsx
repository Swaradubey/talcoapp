import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Talco",
};

const sections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed">
          We collect information that you provide directly to us when you create an account, update your profile, or contact us for support. This may include your name, email address, and phone number.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mt-3">
          We may also collect app usage data generated through your use of Talco, including call history, call logs, user preferences, and app settings required to provide our dialing services.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mt-3">
          When you import a CSV file to make calls, the file is processed using Android&rsquo;s Storage Access Framework. CSV files are used only for the purpose of reading phone numbers selected by you for dialing. We do not sell your CSV data.
        </p>
      </>
    ),
  },
  {
    title: "Device Permissions",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          To provide the core auto-dialing functionality, Talco may request the following device permissions:
        </p>
        <div className="space-y-3">
          {[
            {
              name: "CALL_PHONE",
              desc: "This permission is required to initiate phone calls from the phone numbers imported by the user through a CSV file or entered inside the app.",
            },
            {
              name: "READ_PHONE_STATE",
              desc: "This permission is used to monitor the current call state, such as detecting when a call has ended, so the app can continue the dialing workflow as expected.",
            },
            {
              name: "FOREGROUND_SERVICE",
              desc: "This permission is used to keep the auto-dialing process running smoothly while the app is active or while a call-related process is running.",
            },
          ].map((perm) => (
            <div key={perm.name} className="flex items-start gap-3">
              <code className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-md px-2 py-1 shrink-0 mt-0.5">
                {perm.name}
              </code>
              <p className="text-[var(--sub)] text-sm leading-relaxed">{perm.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[var(--sub)] text-sm leading-relaxed mt-3">
          We use these permissions only for the functionality described above. We do not record phone conversations. We do not use these permissions to access unrelated personal data.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          We use the information we collect to:
        </p>
        <ul className="space-y-1.5 mb-3">
          {[
            "Provide, maintain, and improve our auto-dialing services.",
            "Create and authenticate your account.",
            "Secure your account and app data.",
            "Maintain your call history, call logs, and app settings.",
            "Provide customer support and respond to your questions.",
            "Improve app performance, reliability, and user experience.",
            "Comply with legal, security, and platform requirements.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="text-amber-400/70 text-xs mt-0.5 shrink-0">*</span>
              <span className="text-[var(--sub)] text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Sharing of Information",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          We do not sell, trade, or rent your personally identifiable information to third parties.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          We may share limited information with trusted third-party service providers who help us operate our platform, store data securely, authenticate users, or provide app functionality. These providers may include services such as Google Firebase or similar cloud infrastructure providers.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed">
          These third-party providers are required to protect your information and use it only for the services they provide to us.
        </p>
      </>
    ),
  },
  {
    title: "Data Retention and Account Deletion",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          We retain your personal information, account details, call logs, and related cloud data for as long as your account remains active or as needed to provide our services.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          You have the right to delete your account and associated data at any time.
        </p>
        <p className="text-[var(--text)] text-xs font-extrabold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
          In-App Account Deletion:
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          You can permanently delete your account directly inside the app by navigating to:
        </p>
        <code className="block text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2 mb-3">
          Settings &gt; Account &gt; Delete Account
        </code>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          After confirmation, your account credentials, profile data, call history, user settings, and associated database records will be permanently deleted.
        </p>
        <p className="text-[var(--text)] text-xs font-extrabold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
          Email Deletion Request:
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed">
          If you no longer have access to the app, you may request data deletion by emailing our support team at{" "}
          <a href="mailto:support@talco.app" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
            support@talco.app
          </a>.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mt-3">
          Please send the request from your registered email address with the subject:{" "}
          <span className="text-[var(--text)] font-semibold">Account Deletion Request</span>.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mt-3">
          After verification, we will process your deletion request within 30 days.
        </p>
      </>
    ),
  },
  {
    title: "Security",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          We use commercially reasonable security measures to protect your personal information. This may include encrypted communication, secure cloud storage, authentication controls, and access restrictions.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          Some security features may be provided by our cloud infrastructure partner, such as Google Firebase.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed">
          However, no method of transmission over the Internet or electronic storage is completely secure. While we work to protect your data, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    title: "Children&rsquo;s Privacy",
    content: (
      <p className="text-[var(--sub)] text-sm leading-relaxed">
        Talco is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child without appropriate consent, we will take steps to delete that information.
      </p>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page or inside the app with an updated &ldquo;Last updated&rdquo; date.
        </p>
        <p className="text-[var(--sub)] text-sm leading-relaxed">
          Your continued use of Talco after changes are posted means you accept the updated Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p className="text-[var(--sub)] text-sm leading-relaxed mb-3">
          If you have questions about this Privacy Policy, your data, or account deletion, you can contact us at:
        </p>
        <a
          href="mailto:support@talco.app"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-500/20 hover:bg-amber-500/20 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          support@talco.app
        </a>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      badge="Legal"
      badgeColor="text-amber-400"
      title="Privacy"
      titleAccent="Policy"
      subtitle="We take your privacy seriously. This Privacy Policy explains how Talco collects, uses, stores, and protects your personal information when you use our mobile application and related services."
      glowColor="#F59E0B"
    >
      {/* Last updated banner */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-10">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <p className="text-amber-400/80 text-sm" style={{fontFamily:'DM Mono, monospace'}}>
          Last updated: June 2026
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, i) => (
          <div key={section.title} className="gradient-border rounded-2xl p-6 bg-[var(--card)]">
            <div className="flex items-start gap-4">
              <span
                className="text-xs font-mono text-[var(--muted)] bg-[var(--border)] rounded-md px-2 py-1 mt-0.5 shrink-0"
                style={{fontFamily:'DM Mono, monospace'}}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-[var(--text)] font-semibold mb-3" style={{fontFamily:'Syne, sans-serif'}}>
                  {section.title}
                </h2>
                {section.content}
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
          href="mailto:support@talco.app"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-500/20 hover:bg-amber-500/20 transition-all"
        >
          Contact Privacy Team
        </a>
      </div>
    </PageShell>
  );
}
