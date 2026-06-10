import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Package — Go Pro with CSV Auto Dialer",
  description: "Upgrade from the free plan and unlock powerful calling automation tools designed for faster lead management.",
};

export default function ProPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
