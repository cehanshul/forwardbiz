import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients & Success Stories - ForwardBiz",
  description:
    "Discover how ForwardBiz has helped 200+ businesses across India build high-performing teams and optimize sales conversion through strategic partnerships.",
  keywords: [
    "ForwardBiz clients",
    "business case studies",
    "talent acquisition results",
    "sales enablement success",
    "client testimonials",
    "India business growth stories",
  ],
  alternates: {
    canonical: "https://forwardbiz.in/clients",
  },
  openGraph: {
    title: "Our Clients & Success Stories - ForwardBiz",
    description:
      "See how we've helped 200+ businesses across India achieve growth",
    url: "https://forwardbiz.in/clients",
    images: [
      {
        url: "https://forwardbiz.in/clients-og.jpg",
        width: 1200,
        height: 630,
        alt: "ForwardBiz Client Success Stories",
      },
    ],
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
