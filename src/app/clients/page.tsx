"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Star,
  Globe,
  TrendingUp,
  Zap,
  Award,
  Activity,
  Briefcase,
  Building,
  Users,
  ChevronDown,
  ExternalLink,
  MessageSquare,
  BarChart4,
  CheckCircle,
  LineChart,
  Target,
} from "lucide-react";

export default function ClientsPage() {
  const [animateHero, setAnimateHero] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const caseStudyInterval = useRef(null);

  // Client logos data - organized by industry
  const clientsData = {
    all: [
      { name: "TechNova Solutions", industry: "Tech Leaders", icon: Activity },
      { name: "Learn Smart Institute", industry: "Ed-Tech", icon: Award },
      { name: "CloudSphere Systems", industry: "SaaS", icon: Zap },
      { name: "Neural Dynamics", industry: "AI Startups", icon: Briefcase },
      { name: "ShopEase", industry: "E-commerce", icon: Globe },
      { name: "FinEdge Capital", industry: "FinTech", icon: TrendingUp },
      { name: "HealthVital", industry: "Healthcare", icon: Activity },
      { name: "Construct Prime", industry: "Manufacturing", icon: Building },
      { name: "DataViz Analytics", industry: "Tech Leaders", icon: BarChart4 },
      { name: "Edu Connect", industry: "Ed-Tech", icon: Award },
      { name: "TaskFlow Pro", industry: "SaaS", icon: Zap },
      { name: "Insight AI", industry: "AI Startups", icon: Briefcase },
    ],
    tech: [
      { name: "TechNova Solutions", industry: "Tech Leaders", icon: Activity },
      { name: "CloudSphere Systems", industry: "SaaS", icon: Zap },
      { name: "Neural Dynamics", industry: "AI Startups", icon: Briefcase },
      { name: "DataViz Analytics", industry: "Tech Leaders", icon: BarChart4 },
      { name: "TaskFlow Pro", industry: "SaaS", icon: Zap },
      { name: "Insight AI", industry: "AI Startups", icon: Briefcase },
    ],
    education: [
      { name: "Learn Smart Institute", industry: "Ed-Tech", icon: Award },
      { name: "Edu Connect", industry: "Ed-Tech", icon: Award },
      { name: "Learning Tree Academy", industry: "Ed-Tech", icon: Award },
    ],
    ecommerce: [
      { name: "ShopEase", industry: "E-commerce", icon: Globe },
      { name: "Market Central", industry: "E-commerce", icon: Globe },
      { name: "RetailConnect", industry: "E-commerce", icon: Globe },
    ],
    finance: [
      { name: "FinEdge Capital", industry: "FinTech", icon: TrendingUp },
      { name: "WealthGuard", industry: "FinTech", icon: TrendingUp },
    ],
  };

  // Success metrics
  const successMetrics = [
    {
      value: "73%",
      label: "Average Talent Retention",
      description: "Higher retention rates among teams we've built",
    },
    {
      value: "120%",
      label: "Average Conversion Increase",
      description: "Growth in lead-to-customer conversion rates",
    },
    {
      value: "18+",
      label: "Industries Served",
      description: "Diverse expertise across business sectors",
    },
    {
      value: "94%",
      label: "Client Satisfaction",
      description: "Businesses that rate our services as exceptional",
    },
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Growing EdTech Leader's Sales Team",
      client: "Learn Smart Institute",
      industry: "Education Technology",
      challenge:
        "Rapidly scaling their inside sales team to meet demand surge while maintaining quality.",
      solution:
        "Implemented our strategic talent acquisition model with specialized training programs.",
      results: [
        "180% increase in conversion rates",
        "32 key hires in 90 days",
        "Reduced onboarding time by 40%",
      ],
      testimonial: {
        quote:
          "ForwardBiz didn't just help us hire - they transformed our approach to sales talent. Our new team achieved profitability in half the expected time.",
        author: "Vikram Mehta",
        role: "Director of Growth, Learn Smart Institute",
      },
      logo: Award,
      bgColor: "bg-blue-600",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    },
    {
      title: "SaaS Company's Lead Conversion Overhaul",
      client: "CloudSphere Systems",
      industry: "Software as a Service",
      challenge:
        "High quality lead generation but poor conversion rates causing revenue shortfalls.",
      solution:
        "Rebuilt sales processes and implemented our conversion optimization framework.",
      results: [
        "215% growth in deal closure rate",
        "Average deal size increased by 37%",
        "Reduced sales cycle from 62 to 28 days",
      ],
      testimonial: {
        quote:
          "The ForwardBiz team identified conversion bottlenecks we'd missed for years. Their systematic approach and leadership transformed our pipeline economics.",
        author: "Aditya Sharma",
        role: "CEO, CloudSphere Systems",
      },
      logo: Zap,
      bgColor: "bg-purple-600",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    },
    {
      title: "AI Startup's Talent & Growth Strategy",
      client: "Neural Dynamics",
      industry: "Artificial Intelligence",
      challenge:
        "Building a specialized technical sales team capable of explaining complex AI solutions.",
      solution:
        "Comprehensive talent strategy combining technical and sales expertise with custom training.",
      results: [
        "300% increase in enterprise client acquisition",
        "Successful expansion into 3 new markets",
        "Reduced time-to-productivity by 50%",
      ],
      testimonial: {
        quote:
          "ForwardBiz understood our unique challenge at the intersection of deep tech and sales. They found talent we couldn't and built systems that directly accelerated our growth trajectory.",
        author: "Priya Venkatesh",
        role: "Founder, Neural Dynamics",
      },
      logo: Briefcase,
      bgColor: "bg-teal-600",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop",
    },
  ];

  // Industry partners (for "Partner Ecosystem" section)
  const industryPartners = [
    { name: "TalentForce Network", category: "Recruitment" },
    { name: "SalesTrack Academy", category: "Training" },
    { name: "Growth Metrics Institute", category: "Analytics" },
    { name: "LeadGen Alliance", category: "Marketing" },
    { name: "Business Excellence Council", category: "Certification" },
    { name: "Enterprise Connect Forum", category: "Business Network" },
  ];

  // Trigger animation on load
  useEffect(() => {
    setAnimateHero(true);

    // Add animation classes to elements
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
    // Initial check
    animateOnScroll();

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  // Case study carousel controls
  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  // Automatic case study rotation
  useEffect(() => {
    caseStudyInterval.current = setInterval(() => {
      nextCaseStudy();
    }, 10000); // 10 seconds

    return () => {
      if (caseStudyInterval.current) {
        clearInterval(caseStudyInterval.current);
      }
    };
  }, []);

  // Pattern generators - reused from existing pages
  const CirclePattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <div className="absolute -top-24 -left-24 w-96 h-96">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-white rounded-full"
            style={{
              transform: `scale(${0.2 + i * 0.15})`,
              opacity: 1 - i * 0.15,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-white rounded-full"
            style={{
              transform: `scale(${0.2 + i * 0.15})`,
              opacity: 1 - i * 0.15,
            }}
          ></div>
        ))}
      </div>
    </div>
  );

  const GridPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <div className="h-full w-full grid grid-cols-10 grid-rows-10">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="border-r border-b border-gray-400"></div>
        ))}
      </div>
    </div>
  );

  const DotPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <div className="h-full w-full grid grid-cols-20 grid-rows-20">
        {[...Array(400)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased text-gray-200 overflow-x-hidden">
      {/* Ambient background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern overlay */}
        <GridPattern />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <CirclePattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span
                className={`inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30 transition-all duration-500 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Our Clients
              </span>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Success stories from <br />
                <span className="text-blue-400">
                  businesses we've transformed
                </span>
              </h1>

              <p
                className={`text-xl text-gray-300 mb-8 max-w-lg transition-all duration-700 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                We've helped companies across India build exceptional teams and
                implement powerful conversion systems that drive measurable
                growth.
              </p>

              <div
                className={`flex flex-wrap gap-4 transition-all duration-1000 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <a
                  href="#case-studies"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:translate-y-[-2px] group"
                >
                  <span>View Success Stories</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:ml-3 transition-all duration-300"
                  />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center border border-gray-700 border-opacity-50 hover:border-blue-500 hover:border-opacity-50 shadow-lg hover:translate-y-[-2px]"
                >
                  <span>Become Our Client</span>
                </a>
              </div>

              {/* Key Stats */}
              <div
                className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 transition-all duration-1000 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                {successMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-30 rounded-lg p-4 backdrop-blur-sm border border-gray-700 border-opacity-30 transition-all duration-300 hover:border-blue-700 hover:border-opacity-40"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-blue-300 mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div
                className={`relative z-10 transition-all duration-1000 ${
                  animateHero
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                {/* Abstract visual representation of client success */}
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900/50 to-purple-900/80"></div>

                  {/* Background image */}
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                    alt="Client success"
                    className="w-full h-full object-cover object-center opacity-40"
                  />

                  {/* Overlaid elements */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="flex space-x-3 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className="text-yellow-400"
                          fill="#facc15"
                        />
                      ))}
                    </div>

                    <div className="text-center mb-6">
                      <span className="bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-blue-300 text-sm border border-blue-400/30">
                        Client Satisfaction
                      </span>
                    </div>

                    <div className="flex -space-x-4 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600"
                        >
                          <span className="font-bold text-white">
                            {["C", "S", "T", "N", "E"][i]}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-white text-center italic text-lg">
                      "Forward Biz transformed our approach to growth."
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl z-0"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-3xl z-0"></div>

              {/* Floating shapes */}
              <div className="absolute -top-10 -left-10 z-0 w-20 h-20 border-2 border-blue-400 border-opacity-20 rounded-xl transform rotate-45 animate-float"></div>
              <div className="absolute bottom-10 right-0 z-0 w-16 h-16 border-2 border-purple-400 border-opacity-20 rounded-full animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Cloud Section */}
      <section className="py-24 relative bg-gray-950 bg-opacity-50">
        <CirclePattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by industry leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've partnered with forward-thinking companies across industries
              to deliver exceptional results.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0">
            {Object.keys({
              all: "All Clients",
              tech: "Technology",
              education: "Education",
              ecommerce: "E-commerce",
              finance: "Finance",
            }).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {
                  {
                    all: "All Clients",
                    tech: "Technology",
                    education: "Education",
                    ecommerce: "E-commerce",
                    finance: "Finance",
                  }[tab]
                }
              </button>
            ))}
          </div>

          {/* Client logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-on-scroll opacity-0">
            {clientsData[activeTab].map((client, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl border border-gray-700 border-opacity-50 p-6 hover:border-blue-500 hover:border-opacity-30 transition-all duration-300 hover:translate-y-[-2px] overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 bg-opacity-50 flex items-center justify-center mb-4">
                    <client.icon size={30} className="text-blue-300" />
                  </div>
                  <h3 className="font-medium text-white mb-2">{client.name}</h3>
                  <p className="text-sm text-blue-300">{client.industry}</p>

                  {/* Hidden hover content */}
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                    <div className="text-center">
                      <p className="text-white mb-3">
                        Success partner since 2021
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-200 hover:text-white text-sm font-medium"
                      >
                        View Success Story{" "}
                        <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500 opacity-5 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 relative">
        <DotPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How we've driven transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our partnerships with forward-thinking
              businesses across India.
            </p>
          </div>

          {/* Case Study Carousel */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl border border-gray-700 border-opacity-50 overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>
                  <img
                    src={caseStudies[currentCaseStudy].image}
                    alt={caseStudies[currentCaseStudy].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Client info overlay */}
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <div className="flex items-center mb-3">
                      <div
                        className={`w-10 h-10 rounded-full ${caseStudies[currentCaseStudy].bgColor} flex items-center justify-center mr-3`}
                      >
                        {React.createElement(
                          caseStudies[currentCaseStudy].logo,
                          { size: 20, className: "text-white" }
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          {caseStudies[currentCaseStudy].client}
                        </h4>
                        <p className="text-sm text-gray-300">
                          {caseStudies[currentCaseStudy].industry}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {caseStudies[currentCaseStudy].title}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="text-red-400 text-sm">C</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          Challenge
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {caseStudies[currentCaseStudy].challenge}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start mb-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="text-blue-400 text-sm">S</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          Solution
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {caseStudies[currentCaseStudy].solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="text-green-400 text-sm">R</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Results</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {caseStudies[currentCaseStudy].results.map(
                            (result, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle
                                  size={14}
                                  className="text-green-400 mr-2 mt-1 flex-shrink-0"
                                />
                                <span>{result}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial quote */}
                  <div className="border-t border-gray-700/30 pt-4 mt-6">
                    <div className="relative italic text-gray-300 text-sm pl-6">
                      <span className="absolute top-0 left-0 text-blue-500 text-2xl">
                        "
                      </span>
                      {caseStudies[currentCaseStudy].testimonial.quote}
                      <span className="text-blue-500 text-2xl">"</span>
                      <div className="mt-3 text-white font-medium not-italic">
                        {caseStudies[currentCaseStudy].testimonial.author},{" "}
                        <span className="text-blue-400 font-normal">
                          {caseStudies[currentCaseStudy].testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevCaseStudy}
                className="w-10 h-10 rounded-full bg-gray-800 bg-opacity-50 border border-gray-700 border-opacity-50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                aria-label="Previous case study"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Indicator Dots */}
              <div className="flex space-x-2">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCaseStudy(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentCaseStudy === idx
                        ? "bg-blue-500 w-6"
                        : "bg-gray-600"
                    }`}
                    aria-label={`Go to case study ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextCaseStudy}
                className="w-10 h-10 rounded-full bg-gray-800 bg-opacity-50 border border-gray-700 border-opacity-50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                aria-label="Next case study"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* View all link */}
            <div className="text-center mt-8">
              <a
                href="/case-studies"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300"
              >
                View All Case Studies{" "}
                <ChevronRight size={16} className="ml-1 group-hover:ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem Section */}
      <section className="py-24 relative bg-gray-950 bg-opacity-50">
        <GridPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Partner Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our trusted partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with these industry-leading organizations to
              deliver comprehensive growth solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-on-scroll opacity-0">
            {industryPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 border border-gray-700 border-opacity-30 hover:border-blue-500 hover:border-opacity-30 transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mb-3">
                  <span className="text-blue-300 font-bold">
                    {partner.name[0]}
                  </span>
                </div>
                <h3 className="text-white text-sm font-medium mb-1">
                  {partner.name}
                </h3>
                <p className="text-gray-400 text-xs">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients choose us section */}
      <section className="py-24 relative">
        <DotPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What sets our approach apart
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our integrated talent and conversion strategy delivers
                sustainable business growth that others can't match.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Integrated Growth Approach",
                    description:
                      "We align talent acquisition with sales processes for a cohesive growth strategy.",
                    icon: Target,
                  },
                  {
                    title: "India-Focused Expertise",
                    description:
                      "Deep understanding of regional business challenges and opportunities across India.",
                    icon: Globe,
                  },
                  {
                    title: "Data-Driven Methodology",
                    description:
                      "We measure everything to ensure decisions are based on metrics, not assumptions.",
                    icon: LineChart,
                  },
                  {
                    title: "Long-Term Partnership",
                    description:
                      "We focus on sustainable growth, not quick fixes that don't last.",
                    icon: Users,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-12 h-12 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-800 border-opacity-30 flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual representation */}
            <div className="relative animate-on-scroll opacity-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700 border-opacity-30">
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop"
                    alt="Client success framework"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Client Success Framework
                  </h3>

                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { step: "01", label: "Assess", color: "bg-blue-600" },
                      {
                        step: "02",
                        label: "Strategize",
                        color: "bg-purple-600",
                      },
                      { step: "03", label: "Implement", color: "bg-teal-600" },
                      { step: "04", label: "Optimize", color: "bg-amber-600" },
                    ].map((phase, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`w-10 h-10 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                        >
                          <span className="text-white font-bold text-sm">
                            {phase.step}
                          </span>
                        </div>
                        <p className="text-white text-sm">{phase.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 z-0 w-32 h-32 border-2 border-blue-400 border-opacity-20 rounded-xl transform -rotate-12"></div>
              <div className="absolute -top-10 -left-10 z-0 w-24 h-24 border-2 border-purple-400 border-opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-90 z-0"></div>

        {/* Background pattern */}
        <div className="absolute inset-0 bg-opacity-10 z-0">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="h-full w-full grid grid-cols-10 grid-rows-6">
              {[...Array(60)].map((_, i) => (
                <div key={i} className="border-r border-b border-white"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 z-0"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to join our success stories?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Let's discuss how our talent acquisition and conversion strategies
              can accelerate your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center hover:translate-y-[-2px] relative group overflow-hidden"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 bg-blue-600 bg-opacity-40 hover:bg-opacity-50 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center backdrop-blur-sm border border-blue-400 border-opacity-30 hover:border-opacity-50 hover:translate-y-[-2px] relative group overflow-hidden"
              >
                <span className="relative z-10">
                  Explore More Success Stories
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
        /* Float animation for decorative elements */
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
          100% {
            transform: translateY(0px) rotate(45deg);
          }
        }

        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        /* Fade in animation for scroll elements */
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
