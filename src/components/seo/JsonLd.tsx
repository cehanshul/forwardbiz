import React from "react";

export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Local Business Schema
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ForwardBiz",
    image: "https://forwardbiz.in/logo-white.png",
    url: "https://forwardbiz.in",
    telephone: "+91 63692 07955",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Velachery",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600042",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9828, // Replace with actual coordinates
      longitude: 80.2492, // Replace with actual coordinates
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.linkedin.com/in/rajeswari-saravanamurthy-29618816/"],
  };

  return <JsonLd data={data} />;
}

// Service Schema for Services Page
export function ServicesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ForwardBiz Business Growth Solutions",
    provider: {
      "@type": "Organization",
      name: "ForwardBiz",
      url: "https://forwardbiz.in",
    },
    serviceType: ["Talent Acquisition", "Sales Enablement"],
    areaServed: "India",
    description:
      "Strategic talent acquisition and sales enablement solutions to help businesses build high-performing teams and optimize lead conversion.",
  };

  return <JsonLd data={data} />;
}

// Organization Schema
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ForwardBiz",
    url: "https://forwardbiz.in",
    logo: "https://forwardbiz.in/logo-white.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 63692 07955",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
    sameAs: ["https://www.linkedin.com/in/rajeswari-saravanamurthy-29618816/"],
  };

  return <JsonLd data={data} />;
}

// FAQ Schema for FAQ sections
export function FAQJsonLd({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
