import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 relative">
      {/* Developer: Anshul Sharma (https://anshul.lol) */}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 z-0"></div>
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="h-full w-full grid grid-cols-10 grid-rows-10">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border-r border-b border-gray-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center group relative z-10 mb-4">
              <div className="mr-3">
                <img
                  src="/biz-logo.png"
                  alt="ForwardBiz Logo"
                  className="h-10 w-auto group-hover:opacity-80 transition-all duration-300"
                />
              </div>
            </a>
            <p className="text-gray-400 mb-6">
              Forward Business Solutions helps companies build high-performing
              teams and optimize lead conversion with specialized talent
              acquisition and sales strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 bg-opacity-60 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:bg-opacity-60 hover:text-white transition-all duration-300 backdrop-blur-sm border border-gray-700 border-opacity-50 hover:border-blue-500 hover:border-opacity-50 group"
              >
                <span className="sr-only">LinkedIn</span>
                <span>in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 bg-opacity-60 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:bg-opacity-60 hover:text-white transition-all duration-300 backdrop-blur-sm border border-gray-700 border-opacity-50 hover:border-blue-500 hover:border-opacity-50 group"
              >
                <span className="sr-only">Twitter</span>
                <span>𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 bg-opacity-60 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:bg-opacity-60 hover:text-white transition-all duration-300 backdrop-blur-sm border border-gray-700 border-opacity-50 hover:border-blue-500 hover:border-opacity-50 group"
              >
                <span className="sr-only">Facebook</span>
                <span>f</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/talent-acquisition"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  Strategic Talent Acquisition
                </a>
              </li>
              <li>
                <a
                  href="/services/sales-enablement"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  Sales Enablement & Lead Conversion Excellence
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Business Avenue</li>
              <li>Chennai, 171001</li>
              <li className="pt-2">
                <a
                  href="mailto:info@forwardbiz.com"
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300"
                >
                  info@forwardbiz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 border-opacity-50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} forwardbiz. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="/terms"
              className="text-gray-500 hover:text-white transition-all duration-300 text-sm"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="text-gray-500 hover:text-white transition-all duration-300 text-sm"
            >
              Privacy
            </a>
            <a
              href="/cookies"
              className="text-gray-500 hover:text-white transition-all duration-300 text-sm"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
