import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ForwardBiz - Get in Touch for Business Growth Solutions",
  description:
    "Reach out to ForwardBiz to discuss your talent acquisition and sales enablement needs. Located in Velachery, Chennai with services available across India.",
  keywords: [
    "contact ForwardBiz",
    "business consultation",
    "Chennai office",
    "talent acquisition inquiry",
    "sales enablement services",
    "hire ForwardBiz",
    "business growth solutions",
  ],
  alternates: {
    canonical: "https://forwardbiz.in/contact",
  },
  openGraph: {
    title: "Contact ForwardBiz - Get in Touch",
    description: "Connect with our business growth specialists in Chennai",
    url: "https://forwardbiz.in/contact",
    images: [
      {
        url: "https://forwardbiz.in/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ForwardBiz",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
