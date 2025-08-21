"use client";
import React, { useState, useEffect } from "react";
import {
  UserPlus,
  HeartHandshake,
  Target,
  ArrowRight,
  ChevronRight,
  Check,
  PieChart,
  LineChart,
  BarChart4,
  Users,
  Building,
  Phone,
  Mail,
  Zap,
  Rocket,
} from "lucide-react";
import { ServicesJsonLd } from "@/components/seo/JsonLd";

export default function ServicesPage() {
  const [animatePage, setAnimatePage] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  // Updated core services data (2 instead of 3)
  const services = [
    {
      id: "talent-acquisition",
      title: "Strategic Talent Acquisition",
      subtitle: "Build exceptional teams",
      description:
        "Transform your hiring process with our comprehensive talent acquisition strategies. We help you identify, attract, and retain top performers who drive your business forward.",
      icon: UserPlus,
      color: "blue",
      keyPoints: [
        "Executive search and leadership hiring",
        "Technical and specialized role recruitment",
        "Employer branding and talent attraction",
        "Interview process optimization",
        "Onboarding and retention strategies",
      ],
      metrics: [
        { label: "Successful Placements", value: "94%" },
        { label: "Time-to-Hire Reduction", value: "45%" },
        { label: "Candidate Quality Score", value: "9.2/10" },
      ],
    },
    {
      id: "sales-enablement",
      title: "Sales Enablement & Lead Conversion",
      subtitle: "Maximize revenue potential",
      description:
        "Accelerate your sales performance with data-driven strategies that convert prospects into customers. We optimize every stage of your sales funnel for maximum impact.",
      icon: Rocket,
      color: "purple",
      keyPoints: [
        "Sales process design and optimization",
        "Lead nurturing and conversion strategies",
        "Sales team training and development",
        "CRM implementation and automation",
        "Performance analytics and reporting",
      ],
      metrics: [
        { label: "Revenue Growth", value: "63%" },
        { label: "Lead Conversion Rate", value: "52%" },
        { label: "Sales Cycle Reduction", value: "31%" },
      ],
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We conduct a comprehensive assessment of your current challenges and define clear objectives for success.",
      icon: PieChart,
    },
    {
      number: "02",
      title: "Custom Strategy Design",
      description:
        "Our experts develop a tailored action plan based on your industry, company size, and specific requirements.",
      icon: LineChart,
    },
    {
      number: "03",
      title: "Expert Implementation",
      description:
        "We execute the strategy with precision, providing ongoing support and guidance throughout the process.",
      icon: BarChart4,
    },
    {
      number: "04",
      title: "Results & Optimization",
      description:
        "We track performance metrics and continuously refine our approach to ensure maximum return on investment.",
      icon: Target,
    },
  ];

  // Results showcases
  const results = [
    {
      company: "Technology Startup",
      highlight: "300% Growth",
      description:
        "Scaled from 12 to 45 employees in 18 months while maintaining 95% retention rate through strategic talent acquisition.",
    },
    {
      company: "Educational Institute",
      highlight: "52% Conversion",
      description:
        "Increased enrollment conversions from 29% to 52% through optimized lead nurturing and sales process improvements.",
    },
    {
      company: "Financial Services",
      highlight: "85% Retention",
      description:
        "Improved team retention from 60% to 85% through better hiring practices and enhanced onboarding processes.",
    },
  ];

  // Animate on page load
  useEffect(() => {
    setAnimatePage(true);

    // Add animation classes on scroll
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

  // Handle form submission
  const handleSubmit = () => {
    console.log("Form submitted:", { name, email, service });
    // In a real implementation, this would send the data to a server

    // Reset form
    setName("");
    setEmail("");
    setService("");

    // Show success message or redirect
    alert("Thank you for your interest! We'll contact you shortly.");
  };

  // Get color classes for services
  const getColorClasses = (serviceId) => {
    const colors = {
      "talent-acquisition": {
        bg: "bg-blue-600",
        bgLight: "bg-blue-500/10",
        bgMedium: "bg-blue-600/30",
        bgDark: "bg-blue-900/20",
        border: "border-blue-500/20",
        text: "text-blue-400",
        hover: "hover:bg-blue-500",
        shadow: "shadow-blue-500/10",
        gradient: "from-blue-600 to-blue-800",
      },
      "sales-enablement": {
        bg: "bg-purple-600",
        bgLight: "bg-purple-500/10",
        bgMedium: "bg-purple-600/30",
        bgDark: "bg-purple-900/20",
        border: "border-purple-500/20",
        text: "text-purple-400",
        hover: "hover:bg-purple-500",
        shadow: "shadow-purple-500/10",
        gradient: "from-purple-600 to-purple-800",
      },
    };

    return colors[serviceId] || colors["talent-acquisition"];
  };

  return (
    <>
      <ServicesJsonLd />

      <div className="bg-gray-900  font-sans antialiased text-gray-200">
        {/* Fixed background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full grid grid-cols-10 grid-rows-10">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="border-r border-b border-gray-400"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-36 pb-16">
          <div className="max-w-screen-xl mx-auto px-6 relative z-10 w-full">
            <div className="flex flex-col items-center text-center">
              <div
                className={`inline-block px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-800/30 transition-all duration-500 ${
                  animatePage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Our Expertise
              </div>

              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-700 ${
                  animatePage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Professional services for <br />
                <span className="text-blue-400">business growth</span>
              </h1>

              <p
                className={`text-xl text-gray-300 max-w-5xl mb-12 transition-all duration-700 ${
                  animatePage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                We offer two specialized services designed to address your most
                critical business challenges: building outstanding teams and
                driving sales success. Each service delivers measurable results
                that fuel sustainable growth.
              </p>

              <div
                className={`transition-all duration-700 ${
                  animatePage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <button
                  onClick={() => {
                    const servicesSection = document.getElementById("services");
                    servicesSection.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl font-medium transition-all duration-300 inline-flex items-center hover:translate-y-[-2px] group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight
                    className="ml-2 group-hover:ml-3 transition-all duration-300"
                    size={16}
                  />
                </button>
              </div>
            </div>

            {/* Abstract visual element */}
            <div
              className={`mt-16 relative max-w-3xl mx-auto transition-all duration-1000 ${
                animatePage
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="relative h-24 md:h-32">
                <div className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-600/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-600/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-600/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    <UserPlus size={12} />
                  </div>
                </div>

                <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Rocket size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - REDESIGNED FOR TWO SERVICES */}
        <section id="services" className="py-24 relative">
          <div className="max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800/30">
                Core Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Choose Your Growth Path
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Select the service that aligns with your current business
                priorities and objectives.
              </p>
            </div>

            {/* Services Container - PREMIUM DESIGN FOR TWO SERVICES */}
            <div className="relative space-y-40">
              {services.map((service, index) => {
                const colorClasses = getColorClasses(service.id);

                return (
                  <div
                    key={service.id}
                    className={`relative animate-on-scroll opacity-0`}
                  >
                    {/* Service Card */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center relative">
                      {/* Service Visual Side */}
                      <div
                        className={`order-2 ${
                          index % 2 === 0 ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <div className="relative">
                          {/* Main service visual */}
                          <div
                            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClasses.gradient}`}
                          >
                            <div className="aspect-[4/3] p-8 flex flex-col justify-center items-center text-center">
                              <div className="absolute inset-0 opacity-20">
                                {/* Abstract pattern */}
                                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                                  {[...Array(24)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="border border-white/10"
                                    ></div>
                                  ))}
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-md"></div>
                                <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-md"></div>
                              </div>

                              {/* Icon and content */}
                              <div className="relative z-10">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                  <service.icon
                                    size={36}
                                    className="text-white"
                                  />
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-3">
                                  {service.title}
                                </h3>
                                <p className="text-white/80 text-lg max-w-xs mx-auto">
                                  {service.subtitle}
                                </p>

                                {/* Metrics display */}
                                <div className="mt-10 grid grid-cols-3 gap-2">
                                  {service.metrics.map((metric, idx) => (
                                    <div
                                      key={idx}
                                      className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl"
                                    >
                                      <div className="text-2xl font-bold text-white">
                                        {metric.value}
                                      </div>
                                      <div className="text-xs text-white/70">
                                        {metric.label}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Floating elements */}
                          <div
                            className={`absolute -top-5 -right-5 w-16 h-16 ${colorClasses.bgLight} backdrop-blur-md rounded-xl border ${colorClasses.border} rotate-12`}
                          ></div>
                          <div
                            className={`absolute -bottom-5 -left-5 w-16 h-16 ${colorClasses.bgLight} backdrop-blur-md rounded-full border ${colorClasses.border}`}
                          ></div>
                        </div>
                      </div>

                      {/* Service Content Side */}
                      <div
                        className={`order-1 ${
                          index % 2 === 0 ? "md:order-2" : "md:order-1"
                        }`}
                      >
                        <div
                          className={`inline-block px-3 py-1 rounded-full ${colorClasses.bgLight} ${colorClasses.text} text-sm font-medium mb-6 backdrop-blur-sm ${colorClasses.border}`}
                        >
                          {service.id === "talent-acquisition"
                            ? "Talent"
                            : "Sales & Conversion"}
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {service.title}
                        </h3>

                        <p className="text-xl text-gray-300 mb-8">
                          {service.description}
                        </p>

                        {/* Key points */}
                        <div className="space-y-4 mb-10">
                          {service.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start">
                              <div
                                className={`w-6 h-6 rounded-full ${colorClasses.bgMedium} flex items-center justify-center mt-0.5 mr-3 flex-shrink-0`}
                              >
                                <Check size={14} className="text-white" />
                              </div>
                              <p className="text-gray-300">{point}</p>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button
                          onClick={() => {
                            const contactSection =
                              document.getElementById("contact");
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className={`inline-flex items-center px-6 py-3 ${colorClasses.bg} ${colorClasses.hover} text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group`}
                        >
                          <span>Get Started</span>
                          <ChevronRight
                            className="ml-1 group-hover:ml-2 transition-all duration-300"
                            size={18}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Connector Line (except for last item) */}
                    {index < services.length - 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4rem] h-20 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integration Section - REDESIGNED FOR TWO SERVICES */}
        <section className="py-24 relative bg-gray-950/50">
          <div className="max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll opacity-0">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800/30">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Expertise That Delivers Results
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our specialized approach ensures you get the right solution
                  for your specific business needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Talent Acquisition Excellence
                      </h3>
                      <p className="text-gray-300">
                        We connect you with exceptional talent that matches your
                        company culture and drives performance from day one.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Sales Performance Optimization
                      </h3>
                      <p className="text-gray-300">
                        We transform your sales operations with proven
                        strategies that increase conversions and accelerate
                        revenue growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Element - REDESIGNED FOR TWO SERVICES */}
              <div className="animate-on-scroll opacity-0">
                <div className="relative">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-blue-900/20 backdrop-blur-md rounded-full border border-blue-500/20 flex items-center justify-center z-20">
                    <div className="text-center">
                      <p className="text-xs text-blue-300 uppercase tracking-wider">
                        Expert
                      </p>
                      <p className="text-white font-bold">Solutions</p>
                      <p className="text-white font-bold">Provider</p>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full max-w-md max-h-md relative">
                      {/* Two outer circles - positioned horizontally across from each other */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-28 h-28 bg-blue-600/10 backdrop-blur-md rounded-full border border-blue-500/20 flex items-center justify-center z-10">
                        <div className="text-center">
                          <UserPlus
                            size={20}
                            className="text-blue-400 mx-auto mb-1"
                          />
                          <p className="text-xs text-white">Talent</p>
                        </div>

                        {/* Connection line */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                      </div>

                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-28 h-28 bg-purple-600/10 backdrop-blur-md rounded-full border border-purple-500/20 flex items-center justify-center z-10">
                        <div className="text-center">
                          <Rocket
                            size={20}
                            className="text-purple-400 mx-auto mb-1"
                          />
                          <p className="text-xs text-white">Sales</p>
                        </div>

                        {/* Connection line */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Outer ring */}
                  <div className="relative mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                    <div className="absolute inset-0 rounded-full border border-gray-500/20 animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute inset-2 rounded-full border border-gray-500/10 animate-[spin_40s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-4 rounded-full border border-gray-500/5"></div>

                    {/* Decorative elements */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500/50 rounded-full"
                        style={{
                          top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                          left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-20 animate-on-scroll opacity-0">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800/30">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Systematic Process for Results
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Our methodology is designed to deliver consistent, measurable
                outcomes through a structured approach.
              </p>
            </div>

            <div className="relative animate-on-scroll opacity-0">
              {/* Process timeline line - visible on medium+ screens */}
              <div className="hidden md:block absolute left-0 right-0 top-[85px] h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step number and icon - desktop */}
                    <div className="hidden md:flex flex-col items-center mb-8">
                      <div className="w-16 h-16 rounded-full bg-blue-900/30 backdrop-blur-md border border-blue-500/30 flex items-center justify-center text-white text-xl font-bold mb-4 z-10">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                        <step.icon size={24} className="text-blue-400" />
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="bg-gray-800/30 backdrop-blur-md rounded-xl border border-gray-700/30 p-6 hover:border-blue-500/20 transition-all duration-300 h-full">
                      {/* Step number and icon - mobile */}
                      <div className="flex md:hidden items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-900/30 backdrop-blur-md border border-blue-500/30 flex items-center justify-center text-white font-bold text-lg mr-4">
                          {step.number}
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                          <step.icon size={20} className="text-blue-400" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>

                    {/* Mobile connector */}
                    {index < processSteps.length - 1 && (
                      <div className="md:hidden flex justify-center my-4">
                        <div className="h-8 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 relative bg-gray-950/50">
          <div className="max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-20 animate-on-scroll opacity-0">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800/30">
                Client Success
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real Results for Real Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                See how our services have transformed organizations across
                industries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-on-scroll opacity-0">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-700/30 overflow-hidden group hover:border-blue-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400"></div>

                  <div className="p-8">
                    <div className="bg-blue-900/20 backdrop-blur-md rounded-lg inline-block px-3 py-1 text-sm text-blue-300 mb-6">
                      {result.company}
                    </div>

                    <div className="text-4xl font-bold text-white mb-4">
                      {result.highlight}
                    </div>

                    <p className="text-gray-300">{result.description}</p>
                  </div>
                </div>
              ))}
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
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Drive Your Business Forward?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                Whether you need exceptional talent or want to boost your sales
                performance, we have the expertise to help you achieve your
                goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center hover:translate-y-[-2px] relative group overflow-hidden"
                >
                  <span className="relative z-10">
                    Start Your Growth Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 bg-blue-600 bg-opacity-40 hover:bg-opacity-50 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center backdrop-blur-sm border border-blue-400 border-opacity-30 hover:border-opacity-50 hover:translate-y-[-2px] relative group overflow-hidden"
                >
                  <span className="relative z-10">
                    Learn About Our Approach
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

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
    </>
  );
}
