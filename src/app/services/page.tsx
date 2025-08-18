"use client";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  // Core services data
  const services = [
    {
      id: "talent-acquisition",
      title: "Strategic Talent Acquisition",
      emoji: "👥",
      description:
        "Build high-performing teams aligned with your culture and objectives. Our specialized recruiting strategies help you identify, attract, and retain top talent.",
      color: "blue",
      keyPoints: [
        "Reduce hiring timelines by up to 35%",
        "Improve retention rates with better cultural fit",
        "Build scalable talent pipelines for growth",
        "Design seamless onboarding experiences",
      ],
      results:
        "Over 2,500 successful placements with 92% retention rate after 18 months",
    },
    {
      id: "sales-leadership",
      title: "Sales & CX Leadership",
      emoji: "🤝",
      description:
        "Optimize customer journey and sales operations to increase satisfaction, retention, and revenue growth. Transform your customer experience.",
      color: "purple",
      keyPoints: [
        "Increase customer retention by up to 40%",
        "Enhance team performance with proven frameworks",
        "Create seamless customer journey touchpoints",
        "Implement data-driven improvement systems",
      ],
      results:
        "Average 32% revenue growth and 28% higher NPS scores for clients",
    },
    {
      id: "lead-conversion",
      title: "Lead Conversion Systems",
      emoji: "🎯",
      description:
        "Convert more prospects into customers with data-driven pipeline optimization and proven closing techniques that maximize revenue.",
      color: "teal",
      keyPoints: [
        "Increase conversion rates by up to 150%",
        "Shorten sales cycles and improve efficiency",
        "Recover lost opportunities through re-engagement",
        "Identify and prioritize high-value prospects",
      ],
      results:
        "Helped clients achieve 42% lead recovery and 30% faster sales cycles",
    },
  ];

  // Success stories/case studies
  const successStories = [
    {
      client: "Tech Startup, Bangalore",
      service: "talent-acquisition",
      challenge:
        "Needed to build a leadership team capable of securing Series B funding",
      solution:
        "Implemented a comprehensive executive search and integration program",
      results: [
        "7 key executive roles filled in 10 weeks",
        "Series B funding secured within 6 months",
        "92% retention after 18 months",
      ],
      quote:
        "Forward Biz transformed our hiring from chaotic to strategic. The leadership team they helped us build has been fundamental to our growth trajectory.",
      author: "Founder & CEO",
    },
    {
      client: "SaaS Provider, Mumbai",
      service: "sales-leadership",
      challenge: "Faced declining renewal rates despite product improvements",
      solution:
        "Reimagined their customer journey with our integrated Sales-CX methodology",
      results: [
        "40% increase in customer lifetime value",
        "28% improvement in Net Promoter Score",
        "65% increase in referral-based acquisitions",
      ],
      quote:
        "The difference in our customer experience is night and day. They helped us see blind spots in our approach and build a customer-obsessed culture.",
      author: "Head of Marketing",
    },
    {
      client: "EdTech Company, Chennai",
      service: "lead-conversion",
      challenge: "Only 3% of prospects converting with long sales cycles",
      solution:
        "Implemented our multi-touchpoint conversion framework with messaging optimization",
      results: [
        "Conversion rate increased from 3% to 7.5%",
        "Sales cycle reduced by 30% on average",
        "42% of previously lost leads recovered",
      ],
      quote:
        "Forward Biz's conversion system transformed our business model. We're now converting leads we previously thought were impossible to close.",
      author: "Growth Director",
    },
  ];

  // Industries served
  const industries = [
    {
      name: "Technology & SaaS",
      icon: "⚡",
      description: "From startups to established platforms",
    },
    {
      name: "Education & EdTech",
      icon: "🎓",
      description: "Traditional and digital learning companies",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description: "Providers, services, and health tech",
    },
    {
      name: "Financial Services",
      icon: "💰",
      description: "FinTech, banking, and insurance",
    },
    {
      name: "E-commerce",
      icon: "🛒",
      description: "Online retail and marketplaces",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Production and industrial services",
    },
  ];

  // Our methodology steps
  const methodology = [
    {
      title: "Discover",
      description:
        "We analyze your current systems, team structure, and business goals to identify key opportunities.",
      icon: "🔍",
    },
    {
      title: "Design",
      description:
        "Our experts create tailored strategies built specifically for your unique business context.",
      icon: "📐",
    },
    {
      title: "Develop",
      description:
        "We build your customized systems, processes, and team capabilities with proven frameworks.",
      icon: "🛠️",
    },
    {
      title: "Deploy",
      description:
        "Implementation with continuous monitoring, optimization, and refinement for maximum impact.",
      icon: "🚀",
    },
  ];

  // Client transformation examples
  const transformations = [
    { from: "Reactive hiring", to: "Strategic talent acquisition", icon: "👥" },
    {
      from: "Transactional sales",
      to: "Value-based relationships",
      icon: "🤝",
    },
    {
      from: "Fragmented customer journey",
      to: "Seamless experience",
      icon: "🌟",
    },
    {
      from: "Low conversion rates",
      to: "Optimized revenue pipeline",
      icon: "📈",
    },
    { from: "Team silos", to: "Cross-functional excellence", icon: "🔄" },
    { from: "Static processes", to: "Adaptive growth systems", icon: "⚙️" },
  ];

  // Get color classes based on service color
  const getColorClass = (color, type) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-600/10",
        bgMedium: "bg-blue-600/20",
        text: "text-blue-500",
        textLight: "text-blue-300",
        border: "border-blue-500/30",
        shadow: "shadow-blue-500/20",
        gradient: "bg-gradient-to-br from-blue-600 to-blue-700",
      },
      purple: {
        bg: "bg-purple-600",
        bgLight: "bg-purple-600/10",
        bgMedium: "bg-purple-600/20",
        text: "text-purple-500",
        textLight: "text-purple-300",
        border: "border-purple-500/30",
        shadow: "shadow-purple-500/20",
        gradient: "bg-gradient-to-br from-purple-600 to-purple-700",
      },
      teal: {
        bg: "bg-teal-600",
        bgLight: "bg-teal-600/10",
        bgMedium: "bg-teal-600/20",
        text: "text-teal-500",
        textLight: "text-teal-300",
        border: "border-teal-500/30",
        shadow: "shadow-teal-500/20",
        gradient: "bg-gradient-to-br from-teal-600 to-teal-700",
      },
    };

    return colorMap[color][type];
  };

  // Handle intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Toggle expanded card
  const toggleExpandedCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased text-gray-200 overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border-r border-b border-gray-300"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Specialized Solutions for
              <span className="text-blue-400"> Business Growth</span>
            </h1>
            <p className="text-xl text-gray-300">
              We help businesses build high-performing teams and convert more
              leads into revenue with our integrated talent and sales solutions.
            </p>
          </div>

          {/* Featured Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:${getColorClass(
                  service.color,
                  "border"
                )} transition-all duration-500 group transform hover:-translate-y-1 ${getColorClass(
                  service.color,
                  "shadow"
                )}`}
              >
                <div
                  className={`h-2 ${getColorClass(service.color, "bg")}`}
                ></div>
                <div className="p-8">
                  <div className="flex items-center mb-5">
                    <div
                      className={`w-14 h-14 rounded-xl ${getColorClass(
                        service.color,
                        "bgLight"
                      )} flex items-center justify-center text-3xl mr-4`}
                    >
                      {service.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <span
                          className={`text-sm ${getColorClass(
                            service.color,
                            "text"
                          )} mr-2`}
                        >
                          ✓
                        </span>
                        <p className="text-gray-300 text-sm">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`p-4 rounded-lg ${getColorClass(
                      service.color,
                      "bgLight"
                    )} ${getColorClass(service.color, "textLight")}`}
                  >
                    <p className="text-sm font-medium">{service.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section id="methodology" className="relative py-24 bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Growth Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured approach ensures consistent results and exceptional
              service delivery.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-16 md:left-1/2 w-1 bg-blue-600/20 hidden sm:block"></div>

            <div className="space-y-16 sm:space-y-0">
              {methodology.map((step, index) => (
                <div
                  key={index}
                  className="relative sm:grid sm:grid-cols-2 gap-8 items-center mb-16"
                >
                  {/* Step number + visual */}
                  <div
                    className={`${
                      index % 2 === 1 ? "sm:order-2" : ""
                    } relative z-10 sm:pl-0`}
                  >
                    <div
                      className={`flex items-start gap-6 ${
                        index % 2 === 1 ? "sm:justify-end" : ""
                      }`}
                    >
                      <div className="flex flex-col items-center sm:order-1">
                        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl relative z-10">
                          {index + 1}
                        </div>
                        <div className="w-1 h-16 bg-blue-500/20 sm:hidden"></div>
                      </div>

                      <div
                        className={`${
                          index % 2 === 1 ? "sm:text-right" : ""
                        } sm:order-2`}
                      >
                        <div className="w-16 h-16 rounded-xl bg-blue-600/10 flex items-center justify-center text-3xl mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={`${index % 2 === 1 ? "sm:order-1" : ""}`}>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="relative py-24">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Client Success
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transformational Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our services have helped businesses achieve remarkable
              growth.
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => {
              const service = services.find((s) => s.id === story.service);
              const isExpanded = expandedCard === index;

              return (
                <div
                  key={index}
                  className={`bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-500 ${
                    isExpanded
                      ? `${getColorClass(
                          service.color,
                          "border"
                        )} shadow-lg ${getColorClass(service.color, "shadow")}`
                      : ""
                  }`}
                >
                  <div
                    className={`py-6 px-8 cursor-pointer flex justify-between items-center ${
                      isExpanded
                        ? getColorClass(service.color, "gradient")
                        : "bg-gray-800/50"
                    }`}
                    onClick={() => toggleExpandedCard(index)}
                  >
                    <div>
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{service.emoji}</span>
                        <h3 className="text-xl font-bold text-white">
                          {story.client}
                        </h3>
                      </div>
                      <p
                        className={`text-sm ${
                          isExpanded ? "text-white/80" : "text-gray-400"
                        }`}
                      >
                        {service.title}
                      </p>
                    </div>
                    <div className="text-white">{isExpanded ? "−" : "+"}</div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? "max-h-[600px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-8 border-t border-gray-700/30">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="mb-6">
                            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                              Challenge
                            </h4>
                            <p className="text-gray-200">{story.challenge}</p>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                              Solution
                            </h4>
                            <p className="text-gray-200">{story.solution}</p>
                          </div>
                        </div>

                        <div>
                          <div
                            className={`bg-gray-900/50 rounded-xl p-6 border ${getColorClass(
                              service.color,
                              "border"
                            )}`}
                          >
                            <h4 className="text-white font-semibold mb-4 flex items-center">
                              <span className="text-xl mr-2">📈</span> Results
                            </h4>

                            <div className="space-y-3">
                              {story.results.map((result, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span
                                    className={`text-sm ${getColorClass(
                                      service.color,
                                      "text"
                                    )} mr-2`}
                                  >
                                    ✓
                                  </span>
                                  <p className="text-gray-300">{result}</p>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-700/50">
                              <div className="flex items-start">
                                <span className="text-3xl mr-3">💬</span>
                                <div>
                                  <p className="italic text-gray-300 mb-2">
                                    "{story.quote}"
                                  </p>
                                  <p className="text-sm text-white">
                                    {story.author}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section id="transformations" className="relative py-24 bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Business Evolution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From... To... Transformations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our clients evolve with our strategic partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/30 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-900/50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <span className="mr-2">From:</span>
                    <span className="text-gray-300 line-through decoration-red-500/50">
                      {item.from}
                    </span>
                  </div>

                  <div className="flex items-center text-blue-300">
                    <span className="mr-2">To:</span>
                    <span className="text-white font-semibold">{item.to}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="relative py-24">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Industries
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sectors We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, with specialized
              approaches for each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 backdrop-blur-sm flex items-center justify-center mb-4 border border-blue-800/30 group-hover:border-blue-500/50 transition-all duration-300">
                    <span className="text-3xl text-blue-300 group-hover:text-blue-400 transition-all duration-300">
                      {industry.icon}
                    </span>
                  </div>
                  <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Forward Biz */}
      <section id="why-us" className="relative py-24 bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Forward Biz Difference
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What sets our services apart from traditional consultancies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
              <div className="h-2 bg-blue-600"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Our Commitment
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-xl mr-4 mt-1">
                      🎯
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Results Focused
                      </h4>
                      <p className="text-gray-300">
                        We measure our success through the tangible business
                        outcomes we help you achieve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-xl mr-4 mt-1">
                      🔄
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Integrated Approach
                      </h4>
                      <p className="text-gray-300">
                        We connect talent, sales, and customer experience
                        instead of treating them as separate functions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-xl mr-4 mt-1">
                      📊
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Data-Driven
                      </h4>
                      <p className="text-gray-300">
                        All our recommendations and strategies are backed by
                        robust data and analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 mb-8">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">💡</span>
                    <h3 className="text-xl font-bold text-white">
                      Beyond Consulting
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Unlike traditional consultants who deliver strategies and
                    leave, we partner with you throughout implementation,
                    ensuring real change happens.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚀</span>
                    <h3 className="text-xl font-bold text-white">
                      Speed to Value
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Our proven frameworks and methodologies allow us to deliver
                    measurable results within weeks, not months or years.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Start Your Growth Journey</span>
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
