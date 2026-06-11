import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Plan - Start Free with CSV Calling",
  description:
    "Start free and manage basic CSV calling workflows for testing and small teams.",
};

export default function FreePlanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
