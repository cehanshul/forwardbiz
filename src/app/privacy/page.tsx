"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function PrivacyPage() {
  const [animateContent, setAnimateContent] = useState(false);

  // Animate on page load
  useEffect(() => {
    setAnimateContent(true);

    // Add animation classes for scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible =
          elementTop < window.innerHeight - 100 && elementBottom > 0;

        if (isVisible) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  // Grid Pattern for background
  const GridPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <div className="h-full w-full grid grid-cols-10 grid-rows-10">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="border-r border-b border-gray-400"></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased text-gray-200">
      {/* Ambient background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <GridPattern />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div
              className={`inline-block px-4 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-4 transition-all duration-500 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Privacy Policy
            </div>

            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Your Privacy Is Our{" "}
              <span className="text-blue-400">Priority</span>
            </h1>

            <p
              className={`text-lg text-gray-300 max-w-2xl mx-auto mb-4 transition-all duration-700 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Last updated: August 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 relative">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg border border-gray-700 p-6 animate-on-scroll opacity-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-4">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-300 mb-4">
                This Privacy Policy explains how Forward Biz ("we", "us", "our")
                collects, uses, and protects your personal information when you
                visit our website, use our services, or interact with us in any
                way.
              </p>
              <p className="text-gray-300">
                By accessing our website or using our services, you agree to the
                terms outlined in this Privacy Policy. If you disagree with any
                part of this policy, please discontinue use of our website and
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-8 relative">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg border border-gray-700 p-6 animate-on-scroll opacity-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                We collect information when you submit forms on our website,
                contact us via email or phone, subscribe to our newsletter, or
                apply for positions at Forward Biz. This may include your name,
                email address, phone number, company details, job title, and any
                information you voluntarily provide in messages to us.
              </p>
              <p className="text-gray-300 mb-6">
                We also automatically collect certain technical data including
                log information (IP address, browser type, referring/exit
                pages), device information (hardware model, operating system),
                and usage data (visit duration, page views, site interactions).
                This information helps us improve your experience and our
                services.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use collected information to deliver and improve our
                services, respond to inquiries, provide customer support, and
                send important updates. We may also use your data to share
                relevant content about our services, customize your experience
                on our website, analyze usage patterns, and protect against
                unauthorized activity.
              </p>
              <p className="text-gray-300 mb-6">
                We process your data based on legitimate business interests,
                contractual necessity, and with your consent where required by
                law. Forward Biz never sells your personal information to third
                parties and only shares data with trusted service providers who
                help us operate our business.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                Data Security
              </h2>
              <p className="text-gray-300 mb-4">
                We implement industry-standard security measures to protect your
                information, including encryption for data transmission and
                storage, regular security assessments, access controls limiting
                data access to authorized personnel only, and secure data
                storage with regular backups.
              </p>
              <p className="text-gray-300 mb-6">
                While we take all reasonable precautions, no online data
                transmission or storage system can be guaranteed 100% secure. We
                retain personal information only as long as necessary to provide
                our services, comply with legal obligations, resolve disputes,
                and enforce our agreements.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                Cookies & Tracking
              </h2>
              <p className="text-gray-300 mb-4">
                Our website uses cookies and similar technologies to enhance
                functionality and analyze usage patterns. These technologies
                help us remember your preferences, understand how visitors
                interact with our website, improve performance, and protect
                against automated abuse.
              </p>
              <p className="text-gray-300 mb-6">
                We use both session cookies (temporary) and persistent cookies
                (remain until deleted). You can manage cookie preferences
                through your browser settings, though disabling certain cookies
                may limit website functionality. We may also use analytics
                services like Google Analytics to help us understand how users
                engage with our site.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have the right to access
                personal information we hold about you, correct inaccurate
                information, request deletion of your data, restrict certain
                processing, receive your data in a portable format, object to
                processing, and withdraw consent.
              </p>
              <p className="text-gray-300 mb-6">
                To exercise these rights, please contact us using the details
                provided at the end of this policy. We'll respond to all
                legitimate requests within the timeframes required by applicable
                law. We do not engage in automated decision-making or profiling
                that produces legal or similarly significant effects.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or for legal, operational, or
                regulatory reasons. The date at the top of this page indicates
                when the policy was last revised.
              </p>
              <p className="text-gray-300">
                For significant changes, we'll provide notice by posting a
                prominent notice on our website, updating the "Last updated"
                date, and sending email notifications when appropriate. We
                encourage you to review our Privacy Policy regularly. Your
                continued use of our website after changes indicates your
                acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 mb-8">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 p-6 animate-on-scroll opacity-0">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold text-white mb-4">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns regarding your privacy,
                please don't hesitate to contact us.
              </p>
              <a
                href="/contact"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md inline-flex items-center group"
              >
                <span>Contact Our Privacy Team</span>
                <ArrowRight
                  className="ml-2 group-hover:ml-3 transition-all duration-300"
                  size={16}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
