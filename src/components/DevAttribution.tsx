import React from "react";

export default function DevAttribution() {
  return (
    <>
      {/* Hidden component for SEO purposes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ForwardBiz",
            url: "https://forwardbiz.in",
            creator: {
              "@type": "Person",
              name: "Anshul Sharma",
              url: "https://anshul.lol",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://linkedin.com/in/thisisanshul",
                "https://github.com/cehanshul",
              ],
            },
          }),
        }}
      />
      <div className="hidden">
        <meta itemProp="author" content="Anshul Sharma" />
        <meta itemProp="creator" content="Anshul Sharma" />
        <link rel="author" href="https://anshul.lol" />
        <a href="/digital-signature.txt" className="hidden">
          Digital Signature
        </a>
      </div>
    </>
  );
}
