import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ForwardBiz",
  description:
    "Read the terms and conditions that govern your use of ForwardBiz services and website. Understanding our terms helps ensure a positive working relationship.",
  keywords: [
    "ForwardBiz terms",
    "terms of service",
    "legal agreement",
    "service conditions",
    "business terms",
  ],
  alternates: {
    canonical: "https://forwardbiz.in/terms",
  },
  openGraph: {
    title: "Terms of Service - ForwardBiz",
    description: "Terms and conditions for using ForwardBiz services",
    url: "https://forwardbiz.in/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
