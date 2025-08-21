"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronRight,
  Users,
  Target,
  Star,
  Globe,
  TrendingUp,
  Zap,
  Award,
  Activity,
  Briefcase,
  LineChart,
  Mail,
  Phone,
  MapPin,
  Plus,
  UserPlus,
  Building,
  ChevronLeft,
  Check,
  AlertCircle,
} from "lucide-react";
import Lottie from "lottie-react";
import {
  LocalBusinessJsonLd,
  OrganizationJsonLd,
} from "@/components/seo/JsonLd";
import Link from "next/link";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null);

  // Testimonials data
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
      rating: 4,
      avatar: "H",
      bgColor: "bg-blue-600",
    },
    {
      content:
        "They built our inside sales team from scratch and trained them to deliver results fast. A true partner in growth.",
      author: "Founder & CEO",
      position: "SaaS Company, New Delhi",
      rating: 5,
      avatar: "C",
      bgColor: "bg-blue-600",
    },
    {
      content:
        "Forward Biz combines hiring expertise with sales conversion strategies. They scaled our team and boosted our B2B outcomes.",
      author: "CEO",
      position: "AI Startup, Mumbai & New Jersey, US",
      rating: 5,
      avatar: "A",
      bgColor: "bg-blue-600",
    },
    {
      content:
        "Their strategic approach to talent acquisition saved us months of trial and error. Top talent, faster growth.",
      author: "CTO",
      position: "FinTech Company, Hyderabad",
      rating: 5,
      avatar: "D",
      bgColor: "bg-blue-600",
    },
    {
      content:
        "When it comes to sales optimization, Forward Biz delivers exceptional results. Our pipeline is now stronger than ever.",
      author: "Sales Director",
      position: "Enterprise Software, Pune",
      rating: 5,
      avatar: "S",
      bgColor: "bg-blue-600",
    },
  ];

  // Calculate how many testimonials to show based on screen width
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation functions - smoother transitions with controlled timing
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotation with improved cleanup and transition handling
  useEffect(() => {
    // Clear any existing interval first to prevent multiple intervals
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current);
    }

    testimonialInterval.current = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, [currentIndex, cardsToShow]); // Depend on currentIndex to reset interval after manual navigation

  // Get visible testimonials - improved with modulo operation to ensure smooth cycling
  const visibleTestimonials = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="py-24 relative bg-gray-950 bg-opacity-50">
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="h-full w-full grid grid-cols-10 grid-rows-10">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border-r border-b border-gray-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't take our word for it — hear what our clients have to say about
            working with us.
          </p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="relative">
          {/* Mobile/Tablet/Desktop Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={`testimonial-${currentIndex}-${idx}`}
                className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl p-8 border border-gray-700 border-opacity-50 h-full flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Star Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < testimonial.rating ? "#facc15" : "transparent"}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 mr-1"
                          : "text-gray-600 mr-1"
                      }
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-200 text-lg mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center mt-auto">
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-medium mr-3`}
                  >
                    {testimonial.avatar}
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
              </div>
            ))}
          </div>

          {/* Navigation Controls - Arrows next to dots */}
          <div className="mt-10 flex justify-center items-center">
            {/* Arrow and Dots in one row */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-gray-800 bg-opacity-50 border border-gray-700 border-opacity-50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} />
              </button>
              {/* Indicator Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: testimonials.length }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "bg-blue-500 w-6" : "bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial group ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gray-800 bg-opacity-50 border border-gray-700 border-opacity-50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ForwardBizHomepage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [animateHero, setAnimateHero] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  const [quickContactForm, setQuickContactForm] = useState({
    name: "",
    email: "",
  });
  const [formStatus, setFormStatus] = useState(null); // null, "submitting", "success", "error"

  const services = [
    {
      id: "talent-acquisition",
      title: "Strategic Talent Acquisition",
      description:
        "Build high-performing teams with our specialized recruiting strategies that attract, retain, and develop top talent.",
      icon: UserPlus,
    },
    {
      id: "sales-enablement",
      title: "Sales Enablement & Lead Conversion Excellence",
      description:
        "Transform your customer experience and sales operations with strategies that increase conversions, retention, and revenue.",
      icon: Target,
    },
  ];

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
    { value: "150%", label: "Conversion Growth", icon: TrendingUp },
  ];

  // Client Logos - represented as abstract shapes in dark mode
  const clientLogos = [
    { name: "Tech Leaders", icon: Activity },
    { name: "Ed-Tech", icon: Award },
    { name: "SaaS", icon: Zap },
    { name: "AI Startups", icon: Briefcase },
    { name: "E-commerce", icon: Globe },
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

  interface ToggleAccordionFn {
    (index: number): void;
  }

  const toggleAccordion: ToggleAccordionFn = (index) => {
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

  // Add this useEffect to fetch the animation data
  useEffect(() => {
    fetch("/hero-boi.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  // Add a function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuickContactForm({
      ...quickContactForm,
      [name]: value,
    });
  };

  const handleQuickContactSubmit = async (e) => {
    e.preventDefault();

    if (!quickContactForm.name || !quickContactForm.email) {
      // Simple validation
      return;
    }

    setFormStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...quickContactForm,
          company: "Not provided", // Add required fields for API
          inquiryType: "Quick Contact",
          message: "This is a quick contact request from the homepage.",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setFormStatus("success");

      // Reset form after success
      setTimeout(() => {
        setQuickContactForm({
          name: "",
          email: "",
        });
        setFormStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");

      // Reset error status after a few seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }
  };

  return (
    <>
      <LocalBusinessJsonLd />
      <OrganizationJsonLd />

      <div className="min-h-screen  bg-gray-900 font-sans antialiased text-gray-200 overflow-x-hidden">
        {/* Ambient background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

          {/* Subtle grid pattern overlay */}
          <GridPattern />
        </div>

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <CirclePattern />
          <div className="max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
                  Business Growth Specialists
                </span>

                <div
                  className={`transition-all duration-1000 ${
                    animateHero
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <TypewriterText />
                </div>

                <p
                  className={`text-xl text-gray-300 mb-8 max-w-lg transition-all duration-1000 delay-300 ${
                    animateHero
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Our core: Strategic hiring and team building.
                  <br />
                  Our edge: Sales leadership and conversion excellence.
                </p>

                <div
                  className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                    animateHero
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:translate-y-[-2px] group"
                  >
                    <span>Hire Right. Convert More. Grow Forward.</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:ml-3 transition-all duration-300"
                    />
                  </Link>
                </div>

                {/* Key Stats */}
                <div className="mt-16 grid grid-cols-3 gap-3 lg:gap-6">
                  {businessStats.map((stat, index) => (
                    <CountUpStat
                      key={index}
                      stat={stat}
                      animateHero={animateHero}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative z-20 transform">
                  <div
                    className={`relative z-10 rounded-2xl overflow-hidden transition-all duration-300 group transform ${
                      animateHero
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{ height: "400px" }}
                  >
                    {animationData && (
                      <Lottie
                        animationData={animationData}
                        loop={true}
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
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
                We focus on what drives growth
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                building exceptional teams and optimizing sales performance.
                These are distinct services with one mission: sustainable
                success.
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

        {/* Services Section - REDESIGNED */}
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

            {/* Clean, cohesive 3-column services layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-xl border border-gray-700 border-opacity-50 p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-600 hover:border-opacity-50 hover:translate-y-[-2px] group relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-800 border-opacity-30 flex items-center justify-center mb-6 backdrop-blur-sm">
                    <service.icon size={24} className="text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <Link
                    href={`/services`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 group"
                  >
                    Learn More{" "}
                    <ChevronRight
                      size={16}
                      className="ml-1 group-hover:ml-2 transition-all duration-300"
                    />
                  </Link>

                  {/* Subtle background decoration */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500 opacity-5 rounded-full"></div>
                </div>
              ))}
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
                Our structured approach ensures consistent results and
                exceptional service delivery.
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

        {/* Testimonials Section - UPDATED MULTI-CARD CAROUSEL */}
        <TestimonialCarousel />

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
                  <Link
                    href="/faq"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
                  >
                    View All FAQs{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:ml-3 transition-all duration-300"
                    />
                  </Link>
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
                  <Link
                    href="/faq"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View All FAQs <ArrowRight size={16} className="ml-2" />
                  </Link>
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
                We specialize in helping businesses attract, hire, and retain
                exceptional talent. And with our sales expertise, we also help
                you turn leads into lasting customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center hover:translate-y-[-2px] relative group overflow-hidden"
                >
                  <span className="relative z-10">
                    Let's Build Growth Together
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-blue-600 bg-opacity-40 hover:bg-opacity-50 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center backdrop-blur-sm border border-blue-400 border-opacity-30 hover:border-opacity-50 hover:translate-y-[-2px] relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - REDESIGNED */}
        <section className="py-24 relative">
          <GridPattern />
          <div className="max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Info Column */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Have questions or ready to start? Contact us today to discuss
                  how we can help your business succeed.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white mb-1">
                        Our Location
                      </h3>
                      <address className="not-italic text-gray-300">
                        123 Business Avenue
                        <br />
                        Chennai, 171001
                        <br />
                        India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 mt-1">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white mb-1">
                        Email Us
                      </h3>
                      <Link
                        href="mailto:info@forwardbiz.com"
                        className="text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        info@forwardbiz.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 mt-1">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white mb-1">Call Us</h3>
                      <Link
                        href="tel:+911234567890"
                        className="text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        +91 (123) 456-7890
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Column */}
              <div>
                <div className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl border border-gray-700 border-opacity-50 p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Mail size={18} className="mr-2 text-blue-400" /> Send Us a
                    Message
                  </h3>

                  {/* Simplified Form */}
                  <form
                    className="space-y-6"
                    onSubmit={handleQuickContactSubmit}
                  >
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={quickContactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 border-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-gray-400"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={quickContactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 border-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-gray-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={
                        formStatus === "submitting" || formStatus === "success"
                      }
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : formStatus === "success" ? (
                        <>
                          <Check size={18} className="mr-2" />
                          Message Sent!
                        </>
                      ) : formStatus === "error" ? (
                        <>
                          <AlertCircle size={18} className="mr-2" />
                          Failed! Try Again
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Typewriter text component

function TypewriterText() {
  const phrases = [
    { text: "Building Talent.", className: "text-white" },
    { text: "Driving Growth.", className: "text-white" },
    { text: "Advancing Business.", className: "text-white" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Main typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentIndex].text;

    const typeNextChar = () => {
      setDisplayText(currentPhrase.substring(0, displayText.length + 1));
    };

    const deleteLastChar = () => {
      setDisplayText(currentPhrase.substring(0, displayText.length - 1));
    };

    const moveToNextPhrase = () => {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setDisplayText("");
      setTypingSpeed(100); // Reset typing speed
    };

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentPhrase.length) {
      // Typing the current phrase
      timeout = setTimeout(typeNextChar, typingSpeed);
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      // Finished typing, pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50); // Faster when deleting
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting the current phrase
      timeout = setTimeout(deleteLastChar, typingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next phrase
      timeout = setTimeout(moveToNextPhrase, 500);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentIndex, isDeleting, displayText.length, typingSpeed]); // Remove displayText from dependencies

  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
      <span className={phrases[currentIndex].className}>
        {displayText}
        <span
          className={`${
            showCursor ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
        >
          |
        </span>
      </span>
    </h1>
  );
}

// CountUpStat component for animated statistics
interface CountUpStatProps {
  stat: {
    value: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>;
  };
  animateHero: boolean;
  index: number;
}

function CountUpStat({ stat, animateHero, index }: CountUpStatProps) {
  const { value, label, icon: Icon } = stat;

  // Parse the string to extract numeric value and suffix
  const parseValueAndSuffix = () => {
    if (value.includes("K+")) {
      const numPart = parseFloat(value.replace("K+", ""));
      return {
        number: numPart * 1000, // Convert K to actual thousands
        displayFunc: (num: number): string => {
          const inK = (num / 1000).toFixed(1).replace(/\.0$/, "");
          return `${inK}K+`;
        },
      };
    } else if (value.includes("+")) {
      const numPart = parseInt(value.replace("+", ""));
      return {
        number: numPart,
        displayFunc: (num: number): string => `${Math.round(num)}+`,
      };
    } else if (value.includes("%")) {
      const numPart = parseInt(value.replace("%", ""));
      return {
        number: numPart,
        displayFunc: (num: number): string => `${Math.round(num)}%`,
      };
    } else {
      return {
        number: parseInt(value),
        displayFunc: (num: number): string => `${Math.round(num)}%`,
      };
    }
  };

  const { number: targetNumber, displayFunc } = parseValueAndSuffix();
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!animateHero) return;

    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();

    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const newValue = targetNumber * easedProgress;

      setCurrentNumber(newValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [animateHero, targetNumber]);

  return (
    <div
      className={`bg-gray-800 bg-opacity-30 rounded-lg p-4 backdrop-blur-sm border border-gray-700 border-opacity-30 transition-all duration-1000 hover:border-blue-700 hover:border-opacity-40 ${
        animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${700 + index * 100}ms` }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 mb-3 text-blue-300 border border-blue-800 border-opacity-30">
        <Icon size={18} />
      </div>
      <div className="text-xl md:text-2xl font-bold text-white">
        {displayFunc(currentNumber)}
      </div>
      <div className="text-xs md:text-sm text-gray-400">{label}</div>
    </div>
  );
}
