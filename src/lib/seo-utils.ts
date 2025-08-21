export const DEFAULT_OG_IMAGE = "https://forwardbiz.in/og-image.jpg";

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
}

export type ServiceType = "talent-acquisition" | "sales-enablement";

export function getServiceMetadata(type: ServiceType) {
  const baseUrl = "https://forwardbiz.in";

  const services = {
    "talent-acquisition": {
      title: "Strategic Talent Acquisition | ForwardBiz",
      description:
        "Build high-performing teams with our specialized recruiting strategies that attract, retain, and develop top talent across India.",
      canonical: `${baseUrl}/services/talent-acquisition`,
      ogImage: `${baseUrl}/images/talent-acquisition-og.jpg`,
      keywords: [
        "talent acquisition",
        "recruitment",
        "hiring",
        "team building",
        "HR",
        "India",
      ],
    },
    "sales-enablement": {
      title: "Sales Enablement & Lead Conversion | ForwardBiz",
      description:
        "Transform your customer experience and sales operations with strategies that increase conversions, retention, and revenue.",
      canonical: `${baseUrl}/services/sales-enablement`,
      ogImage: `${baseUrl}/images/sales-enablement-og.jpg`,
      keywords: [
        "sales enablement",
        "lead conversion",
        "sales strategy",
        "customer acquisition",
        "India",
      ],
    },
  };

  return services[type];
}
