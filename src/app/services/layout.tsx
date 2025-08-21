import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Strategic Talent Acquisition & Sales Enablement",
  description:
    "ForwardBiz offers specialized business growth services including talent acquisition and sales enablement solutions that drive measurable results for your organization.",
  keywords: [
    "talent acquisition",
    "sales enablement",
    "lead conversion",
    "team building",
    "sales optimization",
    "hiring solutions",
    "India business growth",
  ],
  alternates: {
    canonical: "https://forwardbiz.in/services",
  },
  openGraph: {
    title: "Services - Strategic Talent Acquisition & Sales Enablement",
    description:
      "Specialized business growth services for organizations across India",
    url: "https://forwardbiz.in/services",
    images: [
      {
        url: "https://forwardbiz.in/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "ForwardBiz Services",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
