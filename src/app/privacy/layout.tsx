import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ForwardBiz",
  description:
    "ForwardBiz privacy policy details how we collect, use, and protect your personal information when you use our services or visit our website.",
  keywords: [
    "ForwardBiz privacy",
    "data protection",
    "privacy policy",
    "information security",
    "user data policy",
    "GDPR compliance",
  ],
  alternates: {
    canonical: "https://forwardbiz.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy - ForwardBiz",
    description: "Our commitment to protecting your privacy and data",
    url: "https://forwardbiz.in/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
