import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at ForwardBiz - Join Our Talent Network",
  description:
    "Join the ForwardBiz talent network to access opportunities across multiple industries and organizations throughout India. One application, endless opportunities.",
  keywords: [
    "ForwardBiz careers",
    "jobs in talent acquisition",
    "sales enablement jobs",
    "Chennai job opportunities",
    "recruitment careers",
    "work at ForwardBiz",
    "India HR jobs",
  ],
  alternates: {
    canonical: "https://forwardbiz.in/career",
  },
  openGraph: {
    title: "Careers at ForwardBiz - Join Our Talent Network",
    description:
      "Access opportunities across multiple industries with a single application",
    url: "https://forwardbiz.in/career",
    images: [
      {
        url: "https://forwardbiz.in/careers-og.jpg",
        width: 1200,
        height: 630,
        alt: "ForwardBiz Careers",
      },
    ],
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
