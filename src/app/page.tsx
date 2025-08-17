"use client";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Users,
  Target,
  BarChart4,
  Star,
  Globe,
  TrendingUp,
  Zap,
  Award,
  Activity,
  Briefcase,
  PieChart,
  LineChart,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Plus,
  ChevronDown,
  UserPlus,
  Building,
  HeartHandshake,
  MessageSquare,
  MousePointer,
  Clock,
  Layers,
} from "lucide-react";
import Lottie from "lottie-react";

export default function ForwardBizHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedService, setSelectedService] = useState("Select a service");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  // Reference for Lottie animation
  const lottieRef = useRef<HTMLDivElement>(null);

  // Services data - updated with new services
  const services = [
    {
      id: "talent-acquisition",
      title: "HR Hiring & Strategic Talent Acquisition",
      description:
        "Building the right teams from scratch, ensuring organizations attract, retain, and grow top talent with our specialized recruitment methodologies.",
      icon: UserPlus,
      color: "blue",
      metrics: [
        { label: "Successful Placements", value: "2,500+" },
        { label: "Candidate Retention", value: "94%" },
        { label: "Hiring Time Reduction", value: "40%" },
      ],
    },
    {
      id: "team-building",
      title: "High-Impact Team Building",
      description:
        "Creating resilient, performance-driven teams aligned with business vision through strategic planning, culture development, and leadership training.",
      icon: Users,
      color: "purple",
      metrics: [
        { label: "Teams Built", value: "350+" },
        { label: "Performance Increase", value: "65%" },
        { label: "Team Cohesion", value: "92%" },
      ],
    },
    {
      id: "sales-leadership",
      title: "Sales & CX Leadership",
      description:
        "Shaping strong sales and customer experience functions to drive retention and expansion with proven methodologies and frameworks.",
      icon: HeartHandshake,
      color: "teal",
      metrics: [
        { label: "Revenue Growth", value: "85%" },
        { label: "Customer Retention", value: "76%" },
        { label: "Teams Transformed", value: "200+" },
      ],
    },
    {
      id: "lead-conversion",
      title: "Lead Conversion (B2B & B2C)",
      description:
        "Designing sales pipelines and closure strategies that maximize conversion rates and revenue through data-driven approaches.",
      icon: Target,
      color: "amber",
      metrics: [
        { label: "Conversion Increase", value: "120%" },
        { label: "Revenue Impact", value: "₹250Cr+" },
        { label: "Deals Optimized", value: "1,800+" },
      ],
    },
    {
      id: "closure-management",
      title: "Closure Management",
      description:
        "Ensuring leads aren't just generated, they're converted into long-term success with our specialized closure techniques and follow-up systems.",
      icon: MousePointer,
      color: "rose",
      metrics: [
        { label: "Closure Rate", value: "87%" },
        { label: "Average Deal Size", value: "+45%" },
        { label: "Client Retention", value: "92%" },
      ],
    },
  ];

  // Service options for dropdown
  const serviceOptions = [
    "HR Hiring & Strategic Talent Acquisition",
    "High-Impact Team Building",
    "Sales & CX Leadership",
    "Lead Conversion (B2B & B2C)",
    "Closure Management",
  ];

  // Approach steps
  const approachSteps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by deeply understanding your business challenges and objectives.",
      icon: Target,
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "Our experts develop a tailored approach to address your specific needs.",
      icon: LineChart,
    },
    {
      number: "03",
      title: "Execute",
      description:
        "We implement solutions with precision and continuous communication.",
      icon: Zap,
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "We measure results and continually refine our approach for maximum impact",
      icon: TrendingUp,
    },
  ];

  // Stats for visual appeal
  const businessStats = [
    { value: "200+", label: "Businesses Transformed", icon: Building },
    { value: "2.5K+", label: "Successful Placements", icon: Users },
    { value: "150%", label: "Average Conversion Growth", icon: TrendingUp },
    { value: "₹500Cr+", label: "Revenue Impact", icon: BarChart4 },
  ];

  // Client Logos - represented as abstract shapes in dark mode
  const clientLogos = [
    { name: "Tech Leaders", icon: Activity },
    { name: "Ed-Tech", icon: Award },
    { name: "SaaS", icon: Zap },
    { name: "AI Startups", icon: Briefcase },
    { name: "E-commerce", icon: Globe },
  ];

  // Updated testimonials based on the new content
  const testimonials = [
    {
      content:
        "Forward Biz helped us hire the right leaders quickly and effectively. Their talent-first approach is exactly what we needed.",
      author: "Founder",
      position: "Data Analytics Company, Bangalore",
      rating: 5,
      avatar: "F",
      bgColor: "bg-blue-600",
    },
    {
      content:
        "Our conversion rates jumped significantly after working with Forward Biz. They know how to turn leads into real growth.",
      author: "Head of Marketing",
      position: "Top Institute, Chennai",
      rating: 5,
      avatar: "H",
      bgColor: "bg-purple-600",
    },
    {
      content:
        "They built our inside sales team from scratch and trained them to deliver results fast. A true partner in growth.",
      author: "Founder & CEO",
      position: "SaaS Company, New Delhi",
      rating: 5,
      avatar: "C",
      bgColor: "bg-teal-600",
    },
    {
      content:
        "Forward Biz combines hiring expertise with sales conversion strategies. They scaled our team and boosted our B2B outcomes.",
      author: "CEO",
      position: "AI Startup, Mumbai & New Jersey, US",
      rating: 5,
      avatar: "A",
      bgColor: "bg-amber-600",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question:
        "How long does it typically take to see results from your talent acquisition services?",
      answer:
        "Most clients see initial results within 4-6 weeks. Our strategic talent acquisition process begins with a thorough understanding of your organization's needs, followed by targeted sourcing and rigorous vetting. While we can fill urgent positions quickly, building a sustainable talent pipeline and implementing retention strategies typically shows optimal results in 2-3 months.",
    },
    {
      question:
        "What makes your lead conversion strategies different from others?",
      answer:
        "Our conversion strategies are data-driven and tailored to your specific business context. Unlike generic approaches, we analyze your entire funnel, identify conversion bottlenecks, and implement targeted improvements. We combine behavioral psychology, sales process optimization, and CX improvements to create holistic solutions that address both B2B and B2C scenarios.",
    },
    {
      question:
        "Can you support businesses that operate in multiple locations across India?",
      answer:
        "Absolutely. We have experience working with businesses across all major Indian metros and beyond. Our methodologies are designed to be location-agnostic, and we have the capability to implement solutions remotely or on-site as needed. For multi-location businesses, we can develop standardized yet locally adaptable approaches.",
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer:
        "We work with businesses at all stages of growth, from early-stage startups to established enterprises. For startups, we focus on building foundational talent and sales processes that can scale, while for established businesses, we often concentrate on optimization and transformation of existing teams and systems. Our solutions are always tailored to your specific stage, industry, and goals.",
    },
  ];

  // Trigger animation on load
  useEffect(() => {
    setAnimateHero(true);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceDropdownOpen && !event.target.closest(".relative")) {
        setServiceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [serviceDropdownOpen]);

  // Toggle accordion
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // SVG pattern generators
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

  // Abstract geometric decorations
  const AbstractShapes = () => (
    <>
      {/* Top right decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 border-2 border-blue-300 rounded-lg transform rotate-45"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-purple-300 rounded-lg transform rotate-15"></div>
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-teal-300 rounded-lg transform -rotate-15"></div>
      </div>

      {/* Bottom left decoration */}
      <div className="absolute bottom-20 left-20 w-64 h-64 opacity-10">
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-8 h-8 bg-teal-500 rounded-full"></div>
      </div>
    </>
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
            <div className="mr-2 w-10 h-10 bg-blue-600 bg-opacity-20 rounded-lg flex items-center justify-center border border-blue-500 border-opacity-30">
              <TrendingUp size={20} className="text-blue-400" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-blue-400 group-hover:text-blue-300 transition-all duration-300">
                forward
              </span>
              <span className="text-white">biz</span>
            </span>
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
              <a
                key={index}
                href={item.url}
                className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-xl z-50 lg:hidden">
            <div className="px-6 py-6 flex justify-between items-center border-b border-gray-800">
              <a href="/" className="flex items-center">
                <div className="mr-2 w-10 h-10 bg-blue-600 bg-opacity-20 rounded-lg flex items-center justify-center border border-blue-500 border-opacity-30">
                  <TrendingUp size={20} className="text-blue-400" />
                </div>
                <span className="text-lg font-bold">
                  <span className="text-blue-400">forward</span>
                  <span className="text-white">biz</span>
                </span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

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
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <CirclePattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
                Business Growth Specialists
              </span>

              <h1
                className={`text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6 transition-all duration-1000 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Building Talent.{" "}
                <span className="text-blue-400">Driving Conversions.</span>{" "}
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Moving Businesses Forward.
                </span>
              </h1>

              <p
                className={`text-xl text-gray-300 mb-8 max-w-lg transition-all duration-1000 delay-300 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                We help businesses build high-performing teams and convert more
                leads into revenue with our specialized talent and sales
                solutions.
              </p>

              <div
                className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                  animateHero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="/services"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:translate-y-[-2px] group"
                >
                  <span>Hire Right. Convert More. Grow Forward.</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:ml-3 transition-all duration-300"
                  />
                </a>
                {/* 
                <a
                  href="/contact"
                  className="px-6 py-4 bg-gray-800 bg-opacity-50 text-gray-200 rounded-lg transition-all duration-300 inline-flex items-center border border-gray-700 border-opacity-50 hover:bg-gray-700 hover:bg-opacity-30 backdrop-blur-sm hover:text-white hover:translate-y-[-2px]"
                >
                  Talk to Our Experts
                </a> */}
              </div>

              {/* Key Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                {businessStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800 bg-opacity-30 rounded-lg p-4 backdrop-blur-sm border border-gray-700 border-opacity-30 transition-all duration-1000 hover:border-blue-700 hover:border-opacity-40 ${
                      animateHero
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 mb-3 text-blue-300 border border-blue-800 border-opacity-30">
                      <stat.icon size={18} />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-20 transform">
                <div
                  className={`relative z-10 bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-700 border-opacity-50 hover:border-gray-600 hover:border-opacity-50 transition-all duration-300 group transform ${
                    animateHero
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <Lottie
                    ref={lottieRef}
                    animationData="/Superhero.lottie"
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                  />
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

        {/* Trusted clients logos section */}
        <div className="max-w-screen-xl mx-auto mt-16 px-6 relative z-10">
          <p className="text-sm text-gray-400 mb-6 text-center">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clientLogos.map((client, index) => (
              <div key={index} className="group relative">
                <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-gray-700 border-opacity-50 flex items-center justify-center group-hover:border-blue-500 group-hover:border-opacity-50 transition-all duration-300">
                    <client.icon
                      size={24}
                      className="text-gray-400 group-hover:text-blue-400 transition-all duration-300"
                    />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 group-hover:text-gray-300 transition-all duration-300">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 relative">
        <GridPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Where Talent Meets Conversion
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              In today's competitive landscape, businesses need both exceptional
              talent and optimized conversion systems to thrive. At forwardbiz,
              we bridge this gap by providing integrated solutions that build
              high-performing teams while maximizing lead conversion and revenue
              growth.
            </p>

            {/* Visual element */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-4 py-3 px-5 bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-full border border-gray-700 border-opacity-30">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-gray-700 bg-gray-800 flex items-center justify-center overflow-hidden"
                    >
                      <div
                        className={`w-full h-full ${
                          [
                            "bg-blue-500",
                            "bg-purple-500",
                            "bg-teal-500",
                            "bg-amber-500",
                          ][i]
                        } bg-opacity-30 flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-bold">
                          {["T", "C", "S", "G"][i]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="text-gray-300">
                  Partner with our specialists
                </span>
                <ArrowRight size={16} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-gray-950 bg-opacity-50">
        <CirclePattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Specialized Business Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver tailored strategies to build your team and boost your
              business growth.
            </p>
          </div>

          {/* Service Tabs - Scrollable on mobile */}
          <div className="flex overflow-x-auto mb-10 pb-4 lg:justify-center">
            <div className="inline-flex p-1 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-inner border border-gray-700 border-opacity-50">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? service.color === "blue"
                        ? "bg-blue-600 text-white shadow-lg"
                        : service.color === "purple"
                        ? "bg-purple-600 text-white shadow-lg"
                        : service.color === "teal"
                        ? "bg-teal-600 text-white shadow-lg"
                        : service.color === "amber"
                        ? "bg-amber-600 text-white shadow-lg"
                        : "bg-rose-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700 hover:bg-opacity-30"
                  }`}
                >
                  <div className="flex items-center">
                    <service.icon size={16} className="mr-2" />
                    <span className="truncate">
                      {service.title.split(" ")[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <div className="relative z-10">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeTab === index ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${
                        service.color === "blue"
                          ? "bg-blue-900 bg-opacity-30 border-blue-800"
                          : service.color === "purple"
                          ? "bg-purple-900 bg-opacity-30 border-purple-800"
                          : service.color === "teal"
                          ? "bg-teal-900 bg-opacity-30 border-teal-800"
                          : service.color === "amber"
                          ? "bg-amber-900 bg-opacity-30 border-amber-800"
                          : "bg-rose-900 bg-opacity-30 border-rose-800"
                      } flex items-center justify-center mb-6 backdrop-blur-sm border border-opacity-30`}
                    >
                      <service.icon
                        size={24}
                        className={
                          service.color === "blue"
                            ? "text-blue-300"
                            : service.color === "purple"
                            ? "text-purple-300"
                            : service.color === "teal"
                            ? "text-teal-300"
                            : service.color === "amber"
                            ? "text-amber-300"
                            : "text-rose-300"
                        }
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-8">{service.description}</p>

                    <h4 className="text-lg font-semibold mb-4 text-gray-200">
                      Key Performance Indicators
                    </h4>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {service.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className={`bg-gray-800 bg-opacity-40 backdrop-blur-md p-4 rounded-lg shadow-md border border-gray-700 border-opacity-50 hover:border-gray-600 hover:border-opacity-50 transition-all duration-300 group hover:transform hover:translate-y-[-2px] hover:shadow-lg relative overflow-hidden`}
                        >
                          <div
                            className={
                              service.color === "blue"
                                ? "text-blue-400"
                                : service.color === "purple"
                                ? "text-purple-400"
                                : service.color === "teal"
                                ? "text-teal-400"
                                : service.color === "amber"
                                ? "text-amber-400"
                                : "text-rose-400"
                            }
                            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                          >
                            {metric.value}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {metric.label}
                          </div>

                          {/* Background decoration */}
                          <div
                            className={`absolute -right-4 -bottom-4 w-12 h-12 rounded-full ${
                              service.color === "blue"
                                ? "bg-blue-400"
                                : service.color === "purple"
                                ? "bg-purple-400"
                                : service.color === "teal"
                                ? "bg-teal-400"
                                : service.color === "amber"
                                ? "bg-amber-400"
                                : "bg-rose-400"
                            } bg-opacity-10 transition-all duration-300 group-hover:bg-opacity-20`}
                          ></div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`/services/${service.id}`}
                      className={`inline-flex items-center ${
                        service.color === "blue"
                          ? "text-blue-400"
                          : service.color === "purple"
                          ? "text-purple-400"
                          : service.color === "teal"
                          ? "text-teal-400"
                          : service.color === "amber"
                          ? "text-amber-400"
                          : "text-rose-400"
                      } hover:text-white font-medium transition-all duration-300 group`}
                    >
                      Learn More About {service.title}{" "}
                      <ChevronRight
                        size={16}
                        className="ml-1 group-hover:ml-2 transition-all duration-300"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeTab === index ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    <div className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg border border-gray-700 border-opacity-50 group hover:border-gray-600 hover:border-opacity-50 transition-all duration-300 relative">
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute right-0 bottom-0 w-40 h-40">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute inset-0 border-2 ${
                                service.color === "blue"
                                  ? "border-blue-300"
                                  : service.color === "purple"
                                  ? "border-purple-300"
                                  : service.color === "teal"
                                  ? "border-teal-300"
                                  : service.color === "amber"
                                  ? "border-amber-300"
                                  : "border-rose-300"
                              } rounded-full`}
                              style={{
                                transform: `scale(${0.5 + i * 0.25})`,
                                opacity: 0.5 - i * 0.15,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`${
                          service.color === "blue"
                            ? "bg-blue-600"
                            : service.color === "purple"
                            ? "bg-purple-600"
                            : service.color === "teal"
                            ? "bg-teal-600"
                            : service.color === "amber"
                            ? "bg-amber-600"
                            : "bg-rose-600"
                        } p-5 text-white relative`}
                      >
                        <h3 className="text-xl font-bold flex items-center">
                          <service.icon size={20} className="mr-2" />
                          Why Choose Our {service.title.split("&")[0]}
                        </h3>
                      </div>
                      <div className="p-6 relative">
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                          {/* Feature cards for each service */}
                          {service.id === "talent-acquisition" && (
                            <>
                              <FeatureCard
                                title="Deep Industry Knowledge"
                                description="Specialized recruiters who understand your industry needs"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Quality Screening"
                                description="Multi-stage vetting process ensures top talent"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Strategic Planning"
                                description="Long-term talent acquisition roadmaps"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Retention Focus"
                                description="Strategies to keep your best talent engaged"
                                color={service.color}
                              />
                            </>
                          )}

                          {service.id === "team-building" && (
                            <>
                              <FeatureCard
                                title="Culture Development"
                                description="Build teams with aligned values and vision"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Performance Systems"
                                description="Establish metrics and accountability frameworks"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Team Dynamics"
                                description="Optimize collaboration and communication"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Leadership Training"
                                description="Develop your next generation of leaders"
                                color={service.color}
                              />
                            </>
                          )}

                          {service.id === "sales-leadership" && (
                            <>
                              <FeatureCard
                                title="Sales Frameworks"
                                description="Proven methodologies that drive revenue"
                                color={service.color}
                              />
                              <FeatureCard
                                title="CX Excellence"
                                description="Customer-centric approaches that boost retention"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Team Coaching"
                                description="Performance enhancement for existing teams"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Revenue Planning"
                                description="Strategic roadmaps for predictable growth"
                                color={service.color}
                              />
                            </>
                          )}

                          {service.id === "lead-conversion" && (
                            <>
                              <FeatureCard
                                title="Funnel Optimization"
                                description="Identify and remove conversion blockers"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Sales Scripts"
                                description="High-converting messaging frameworks"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Analytics Focus"
                                description="Data-driven decisions for optimal results"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Multichannel Approach"
                                description="Integrated B2B and B2C conversion strategies"
                                color={service.color}
                              />
                            </>
                          )}

                          {service.id === "closure-management" && (
                            <>
                              <FeatureCard
                                title="Objection Handling"
                                description="Advanced techniques to overcome resistance"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Deal Structure"
                                description="Optimize pricing and terms for higher close rates"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Follow-up Systems"
                                description="Never lose a prospect with systematic approaches"
                                color={service.color}
                              />
                              <FeatureCard
                                title="Revenue Expansion"
                                description="Strategies to increase deal size and retention"
                                color={service.color}
                              />
                            </>
                          )}
                        </div>

                        <div className="mt-6 text-center relative z-10">
                          <a
                            href={`/services/${service.id}`}
                            className={`inline-flex items-center px-5 py-2 ${
                              service.color === "blue"
                                ? "bg-blue-600 hover:bg-blue-500"
                                : service.color === "purple"
                                ? "bg-purple-600 hover:bg-purple-500"
                                : service.color === "teal"
                                ? "bg-teal-600 hover:bg-teal-500"
                                : service.color === "amber"
                                ? "bg-amber-600 hover:bg-amber-500"
                                : "bg-rose-600 hover:bg-rose-500"
                            } text-white rounded-lg font-medium transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:translate-y-[-2px]`}
                          >
                            View {service.title.split("&")[0]} Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 relative">
        <DotPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured approach ensures consistent results and exceptional
              service delivery.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl border border-gray-700 border-opacity-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-600 hover:border-opacity-50 hover:translate-y-[-2px] group relative overflow-hidden">
                    {/* Background illustration */}
                    <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
                      <div className="w-full h-full relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg mr-4">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 backdrop-blur-sm flex items-center justify-center border border-blue-800 border-opacity-30">
                        <step.icon size={18} className="text-blue-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 relative z-10">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < approachSteps.length - 1 && (
                    <div className="flex justify-center lg:hidden my-4">
                      <ArrowRight size={24} className="text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-gray-950 bg-opacity-50">
        <GridPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't take our word for it — hear what our clients have to say
              about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg p-8 border border-gray-700 border-opacity-50 transition-all duration-300 hover:border-gray-600 hover:border-opacity-50 hover:shadow-xl hover:translate-y-[-2px] group relative overflow-hidden"
              >
                {/* Quote mark decoration */}
                <div className="absolute top-4 right-4 text-4xl text-gray-700 opacity-20 font-serif">
                  "
                </div>
                <div className="absolute bottom-4 left-4 text-4xl text-gray-700 opacity-20 font-serif transform rotate-180">
                  "
                </div>

                {/* Make the content height consistent with min-height */}
                <p className="text-gray-300 mb-6 relative z-10 min-h-[80px]">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold mr-3 shadow-lg flex-shrink-0`}
                  >
                    <span className="text-center">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position}
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-600 opacity-5 group-hover:opacity-10 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <DotPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Find answers to common questions about our services.
              </p>

              {/* Visual element */}
              <div className="hidden lg:block mb-8">
                <div className="relative">
                  <div className="w-40 h-40 border-2 border-gray-700 rounded-xl transform rotate-12 opacity-30"></div>
                  <div className="absolute top-5 left-5 w-40 h-40 border-2 border-blue-700 rounded-xl transform -rotate-3 opacity-40"></div>
                  <div className="absolute top-10 left-10 w-40 h-40 border-2 border-purple-700 rounded-xl transform rotate-6 opacity-50"></div>
                </div>
              </div>

              <div className="hidden lg:block">
                <a
                  href="/faq"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
                >
                  View All FAQs{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:ml-3 transition-all duration-300"
                  />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 border-opacity-50 hover:border-gray-600 hover:border-opacity-50 rounded-xl overflow-hidden transition-all duration-300 bg-gray-800 bg-opacity-40 backdrop-blur-md"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-700 hover:bg-opacity-30 transition-all duration-300"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-semibold text-white flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-700 bg-opacity-50 flex items-center justify-center mr-3 text-gray-300">
                          Q
                        </div>
                        {item.question}
                      </span>
                      <span
                        className={`text-blue-400 transition-transform duration-300 ${
                          activeAccordion === index ? "rotate-45" : ""
                        }`}
                      >
                        <Plus size={20} />
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeAccordion === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-6 pt-0 text-gray-300 border-t border-gray-700 border-opacity-30 flex">
                        <div className="w-8 h-8 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center mr-3 text-blue-300 flex-shrink-0 mt-1">
                          A
                        </div>
                        <div>{item.answer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 lg:hidden">
                <a
                  href="/faq"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All FAQs <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
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
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Let's work together to build your dream team and optimize your
              conversion systems.
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
                href="/services"
                className="px-8 py-4 bg-blue-600 bg-opacity-40 hover:bg-opacity-50 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center backdrop-blur-sm border border-blue-400 border-opacity-30 hover:border-opacity-50 hover:translate-y-[-2px] relative group overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <GridPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions or ready to start? Contact us today to discuss
                how we can help your business succeed.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group hover:translate-y-[-2px] transition-all duration-300">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 group-hover:bg-blue-800 group-hover:bg-opacity-40 transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white mb-1">
                      Our Location
                    </h3>
                    <address className="not-italic text-gray-300">
                      123 Business Avenue
                      <br />
                      New Delhi, 110001
                      <br />
                      India
                    </address>
                  </div>
                </div>

                <div className="flex items-start group hover:translate-y-[-2px] transition-all duration-300">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 group-hover:bg-blue-800 group-hover:bg-opacity-40 transition-all duration-300">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <a
                      href="mailto:info@forwardbiz.com"
                      className="text-blue-400 hover:text-blue-300 group-hover:underline"
                    >
                      info@forwardbiz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group hover:translate-y-[-2px] transition-all duration-300">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 group-hover:bg-blue-800 group-hover:bg-opacity-40 transition-all duration-300">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                    <a
                      href="tel:+911234567890"
                      className="text-blue-400 hover:text-blue-300 group-hover:underline"
                    >
                      +91 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              {/* Visual decoration */}
              <div className="mt-12 hidden lg:block relative">
                <div className="w-48 h-48 border-2 border-blue-600 border-opacity-20 rounded-full absolute"></div>
                <div
                  className="w-48 h-48 border-2 border-purple-600 border-opacity-20 rounded-full absolute"
                  style={{ transform: "translateX(20px) translateY(20px)" }}
                ></div>
                <div
                  className="w-48 h-48 border-2 border-teal-600 border-opacity-20 rounded-full absolute"
                  style={{ transform: "translateX(40px) translateY(40px)" }}
                ></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl border border-gray-700 border-opacity-50 shadow-xl p-8 hover:border-gray-600 hover:border-opacity-50 transition-all duration-300 group relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 border-2 border-blue-400 border-opacity-10 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 border-2 border-blue-400 border-opacity-10 rounded-full"></div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Mail size={20} className="mr-2 text-blue-400" /> Send Us a
                  Message
                </h3>

                {/* Contact Form */}
                <div className="grid md:grid-cols-2 gap-6 mb-6 relative z-10">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 border-opacity-50 focus:border-blue-500 focus:border-opacity-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 border-opacity-50 focus:border-blue-500 focus:border-opacity-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6 relative z-10">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Service of Interest
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setServiceDropdownOpen(!serviceDropdownOpen)
                      }
                      className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 border-opacity-50 focus:border-blue-500 focus:border-opacity-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none text-white text-left flex items-center justify-between"
                    >
                      <span
                        className={
                          selectedService === "Select a service"
                            ? "text-gray-400"
                            : "text-white"
                        }
                      >
                        {selectedService}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-blue-400 transition-transform duration-300 ${
                          serviceDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {serviceDropdownOpen && (
                      <div className="absolute z-20 w-full mt-1 bg-gray-800 border border-gray-600 border-opacity-50 rounded-lg shadow-2xl backdrop-blur-xl">
                        {serviceOptions.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setSelectedService(option);
                              setServiceDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-700 hover:bg-opacity-50 focus:bg-gray-700 focus:bg-opacity-50 focus:outline-none first:rounded-t-lg last:rounded-b-lg text-gray-200"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6 relative z-10">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 border-opacity-50 focus:border-blue-500 focus:border-opacity-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none text-white placeholder-gray-400"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <a
                  href="/contact/submit"
                  className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:translate-y-[-2px] relative z-10"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-16 pb-8 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 z-0"></div>
        <DotPattern />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <a
                href="/"
                className="flex items-center group relative z-10 mb-4"
              >
                <div className="mr-2 w-10 h-10 bg-blue-600 bg-opacity-20 rounded-lg flex items-center justify-center border border-blue-500 border-opacity-30 group-hover:bg-opacity-30 transition-all duration-300">
                  <TrendingUp size={20} className="text-blue-400" />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-blue-400 group-hover:text-blue-300 transition-all duration-300">
                    forward
                  </span>
                  <span className="text-white">biz</span>
                </span>
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
              <h3 className="text-lg font-semibold mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services/talent-acquisition"
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                  >
                    Talent Acquisition
                  </a>
                </li>
                <li>
                  <a
                    href="/services/team-building"
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                  >
                    Team Building
                  </a>
                </li>
                <li>
                  <a
                    href="/services/sales-leadership"
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                  >
                    Sales Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="/services/lead-conversion"
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 inline-block"
                  >
                    Lead Conversion
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
                <li>New Delhi, 110001</li>
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
    </div>
  );
}

// Reusable feature card component
function FeatureCard({ title, description, color }) {
  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-900 bg-opacity-10 border-blue-800",
          icon: "bg-blue-900 bg-opacity-30 border-blue-800",
          text: "text-blue-300",
        };
      case "purple":
        return {
          bg: "bg-purple-900 bg-opacity-10 border-purple-800",
          icon: "bg-purple-900 bg-opacity-30 border-purple-800",
          text: "text-purple-300",
        };
      case "teal":
        return {
          bg: "bg-teal-900 bg-opacity-10 border-teal-800",
          icon: "bg-teal-900 bg-opacity-30 border-teal-800",
          text: "text-teal-300",
        };
      case "amber":
        return {
          bg: "bg-amber-900 bg-opacity-10 border-amber-800",
          icon: "bg-amber-900 bg-opacity-30 border-amber-800",
          text: "text-amber-300",
        };
      case "rose":
        return {
          bg: "bg-rose-900 bg-opacity-10 border-rose-800",
          icon: "bg-rose-900 bg-opacity-30 border-rose-800",
          text: "text-rose-300",
        };
      default:
        return {
          bg: "bg-blue-900 bg-opacity-10 border-blue-800",
          icon: "bg-blue-900 bg-opacity-30 border-blue-800",
          text: "text-blue-300",
        };
    }
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      className={`${colorClasses.bg} rounded-lg p-4 backdrop-blur-sm border border-opacity-30 transition-all duration-300 hover:shadow-lg relative overflow-hidden group`}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full ${colorClasses.icon} mb-3 border border-opacity-30`}
      >
        <CheckCircle size={16} className={colorClasses.text} />
      </div>
      <h4 className="text-base font-semibold mb-1 text-white">{title}</h4>
      <p className="text-gray-300 text-sm">{description}</p>

      {/* Background decoration */}
      <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-white opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
    </div>
  );
}
