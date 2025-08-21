import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevAttribution from "@/components/DevAttribution";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forwardbiz.in"),
  title: {
    default: "ForwardBiz - Business Growth Solutions",
    template: "%s | ForwardBiz",
  },
  description:
    "ForwardBiz specializes in strategic talent acquisition and sales enablement to help businesses build high-performing teams and optimize lead conversion.",
  keywords: [
    "business growth",
    "talent acquisition",
    "sales enablement",
    "India",
    "Chennai",
    "recruitment",
    "lead conversion",
  ],
  authors: [
    { name: "ForwardBiz" },
    { name: "Anshul Sharma", url: "https://anshul.lol" },
  ],
  creator: "Anshul Sharma",

  publisher: "ForwardBiz",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    other: {
      "developer-verification": "anshul-sharma-developer-verification",
      portfolio: "https://anshul.lol",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      {/* Website designed and developed by Anshul Sharma (https://anshul.lol) */}
      <body className="bg-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DevAttribution />
      </body>
    </html>
  );
}
