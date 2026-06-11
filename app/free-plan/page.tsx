import PageShell from "@/components/PageShell";
import FreePlanCard from "@/components/FreePlanCard";

export default function FreePlanPage() {
  return (
    <PageShell
      badge="Free Plan"
      badgeColor="text-[var(--accent)]"
      title="Start Free with"
      titleAccent="CSV Calling"
      subtitle="Begin with the free plan and manage basic CSV calling workflows for testing and small teams."
      glowColor="var(--accent)"
    >
      <div className="flex justify-center w-full">
        <FreePlanCard />
      </div>
    </PageShell>
  );
}
