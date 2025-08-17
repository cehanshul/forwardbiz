import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForwardBiz - Business Growth Solutions",
  description: "Building high-performing teams and optimizing lead conversion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        <div className="min-h-screen bg-gray-900 font-sans text-gray-200 overflow-x-hidden">
          {/* Fixed background elements */}
          <div className="fixed inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>
          </div>
          <Navbar />
          <main className="relative z-10 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
