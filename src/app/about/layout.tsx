import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ForwardBiz - Our Story & Vision",
  description:
    "Learn how ForwardBiz has transformed India's business landscape through strategic talent acquisition and sales enablement solutions since 2018.",
  keywords: [
    "ForwardBiz history",
    "Rajeswari founder",
    "talent acquisition company",
    "sales enablement experts",
    "Chennai business solutions",
    "India recruitment experts",
  ],
  alternates: {
    canonical: "https://forwardbiz.in/about",
  },
  openGraph: {
    title: "About ForwardBiz - Our Story & Vision",
    description:
      "How ForwardBiz is transforming talent acquisition and sales enablement across India",
    url: "https://forwardbiz.in/about",
    images: [
      {
        url: "https://forwardbiz.in/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "The ForwardBiz team and leadership",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
