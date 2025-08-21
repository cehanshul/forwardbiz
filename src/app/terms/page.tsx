"use client";
import React, { useState, useEffect } from "react";

export default function TermsPage() {
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
              Legal
            </div>

            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Terms of <span className="text-blue-400">Service</span>
            </h1>

            <p
              className={`text-lg text-gray-300 max-w-2xl mx-auto mb-4 transition-all duration-700 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Last updated: June 1, 2023
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
                Introduction
              </h2>
              <p className="text-gray-300 mb-4">
                Welcome to Forward Biz. These Terms of Service govern your use
                of our website, services, and any other interactions with
                Forward Biz ("we", "us", "our"). By accessing or using our
                services, you agree to be bound by these terms. If you disagree
                with any part of the terms, you do not have permission to access
                our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-8 relative">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg border border-gray-700 p-6 animate-on-scroll opacity-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 mb-6">
                By accessing our website, contacting us for services, or
                otherwise engaging with Forward Biz, you acknowledge that you
                have read, understood, and agree to be bound by these Terms of
                Service. If you are entering into this agreement on behalf of a
                company or other legal entity, you represent that you have the
                authority to bind such entity to these terms.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                2. Description of Services
              </h2>
              <p className="text-gray-300 mb-6">
                Forward Biz provides business growth services including but not
                limited to talent acquisition, sales enablement, lead conversion
                strategies, and related consulting services. The specific
                services to be provided will be detailed in separate agreements
                or statements of work between Forward Biz and clients.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                3. Client Responsibilities
              </h2>
              <p className="text-gray-300 mb-6">
                Clients agree to provide accurate, current, and complete
                information as required for the provision of services. Clients
                are responsible for maintaining the confidentiality of any
                account information and passwords provided by Forward Biz.
                Clients are also responsible for all activities that occur under
                their account and agree to notify Forward Biz immediately of any
                unauthorized use.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                4. Intellectual Property Rights
              </h2>
              <p className="text-gray-300 mb-6">
                All content included on the Forward Biz website, including text,
                graphics, logos, images, audio clips, digital downloads, data
                compilations, and software, is the property of Forward Biz or
                its content suppliers and is protected by international
                copyright laws. The compilation of all content on this site is
                the exclusive property of Forward Biz and is protected by
                international copyright laws.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                5. Use License
              </h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of the
                materials on Forward Biz's website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not: modify or
                copy the materials; use the materials for any commercial
                purpose; attempt to decompile or reverse engineer any software
                contained on Forward Biz's website; remove any copyright or
                other proprietary notations from the materials; or transfer the
                materials to another person or "mirror" the materials on any
                other server.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                6. Disclaimer
              </h2>
              <p className="text-gray-300 mb-6">
                The materials on Forward Biz's website are provided on an 'as
                is' basis. Forward Biz makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights. Further, Forward Biz does not warrant or make any
                representations concerning the accuracy, likely results, or
                reliability of the use of the materials on its website or
                otherwise relating to such materials or on any sites linked to
                this site.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                7. Limitations
              </h2>
              <p className="text-gray-300 mb-6">
                In no event shall Forward Biz or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Forward Biz's website,
                even if Forward Biz or a Forward Biz authorized representative
                has been notified orally or in writing of the possibility of
                such damage.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                8. Revisions and Errata
              </h2>
              <p className="text-gray-300 mb-6">
                The materials appearing on Forward Biz's website could include
                technical, typographical, or photographic errors. Forward Biz
                does not warrant that any of the materials on its website are
                accurate, complete, or current. Forward Biz may make changes to
                the materials contained on its website at any time without
                notice. Forward Biz does not, however, make any commitment to
                update the materials.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">9. Links</h2>
              <p className="text-gray-300 mb-6">
                Forward Biz has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Forward Biz of the site. Use of any such linked
                website is at the user's own risk.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                10. Modifications to Terms of Service
              </h2>
              <p className="text-gray-300 mb-6">
                Forward Biz may revise these terms of service for its website at
                any time without notice. By using this website, you are agreeing
                to be bound by the then current version of these terms of
                service.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-300 mb-6">
                These terms and conditions are governed by and construed in
                accordance with the laws of India and you irrevocably submit to
                the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                12. Contact Information
              </h2>
              <p className="text-gray-300">
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:raji@forwardbiz.in"
                  className="text-blue-400 hover:text-blue-300"
                >
                  raji@forwardbiz.in
                </a>{" "}
                or via our{" "}
                <a
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300"
                >
                  contact page
                </a>
                .
              </p>
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
