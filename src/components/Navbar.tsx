"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this useEffect to handle body scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "py-3 bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group relative z-10">
            <div className="mr-3">
              <img
                src="/biz-logo.png"
                alt="ForwardBiz Logo"
                className="h-10 w-auto"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {[
              { url: "/", label: "Home" },
              { url: "/services", label: "Services" },
              { url: "/about", label: "About" },
              { url: "/clients", label: "Clients" },
              { url: "/contact", label: "Contact" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={`text-sm font-medium relative group ${
                  pathname === item.url
                    ? "text-white"
                    : "text-gray-300 hover:text-white hover:scale-105"
                } transition-all duration-300`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform ${
                    pathname === item.url
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } transition-transform duration-300`}
                ></span>
              </Link>
            ))}

            <a
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-900/20"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-200 hover:text-white transition-colors p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-xl"></div>

        {/* Menu Content */}
        <div className="relative h-full overflow-auto">
          {/* Header */}
          <div className="px-6 py-6 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-gray-900 bg-opacity-95 backdrop-blur-xl">
            <a href="/" className="flex items-center">
              <div className="mr-3">
                <img
                  src="/biz-logo.png"
                  alt="ForwardBiz Logo"
                  className="h-10 w-auto"
                />
              </div>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors p-2 bg-gray-800 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-8">
            <nav className="flex flex-col space-y-6">
              {[
                { url: "/", label: "Home" },
                { url: "/services", label: "Services" },
                { url: "/about", label: "About" },
                { url: "/clients", label: "Clients" },
                { url: "/contact", label: "Contact" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-left text-lg font-medium text-gray-300 hover:text-white transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-8">
              <a
                href="/contact"
                className="block w-full px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 text-center shadow-lg shadow-blue-900/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
