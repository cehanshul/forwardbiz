"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  MessageSquare,
  CheckCircle,
  Globe,
  Monitor,
  Cpu,
  GraduationCap,
  Coffee,
  BarChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ClientsPage() {
  const [animateHero, setAnimateHero] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Industry data with percentages
  const industries = [
    {
      name: "IT & SaaS",
      percentage: 40,
      icon: Monitor,
      color: "#3B82F6",
    },
    {
      name: "AI & Emerging Tech",
      percentage: 25,
      icon: Cpu,
      color: "#8B5CF6",
    },
    {
      name: "EdTech & Institutions",
      percentage: 15,
      icon: GraduationCap,
      color: "#14B8A6",
    },
    {
      name: "Lifestyle & Consumer Brands",
      percentage: 10,
      icon: Coffee,
      color: "#F59E0B",
    },
    {
      name: "Professional Services & Enterprises",
      percentage: 10,
      icon: BarChart,
      color: "#EC4899",
    },
  ];

  // Client testimonials - anonymized
  const testimonials = [
    {
      quote:
        "Working with Forward Biz transformed our approach to talent acquisition. They understood our needs perfectly and helped us build a team truly aligned with our goals.",
      position: "Founder",
      company: "Data Analytics Company, Bangalore",
      industry: "IT & SaaS",
      color: "#3B82F6",
      rating: 5,
    },
    {
      quote:
        "Forward Biz helped us strengthen our inside sales process and improve lead conversions. Their strategies delivered measurable results within months.",
      position: "Head of Marketing",
      company: "EdTech Institute, Chennai",
      industry: "EdTech & Institutions",
      color: "#14B8A6",
      rating: 5,
    },
    {
      quote:
        "What sets Forward Biz apart is their ability to bridge hiring and performance. They don't just place people — they ensure every hire contributes to business growth.",
      position: "CEO",
      company: "SaaS Company, New Delhi",
      industry: "IT & SaaS",
      color: "#8B5CF6",
      rating: 5,
    },
    {
      quote:
        "Partnering with Forward Biz gave us confidence in scaling. From building resilient teams to optimizing sales closures, their support has been invaluable to our growth journey.",
      position: "CEO",
      company: "AI Startup, Mumbai & New Jersey, US",
      industry: "AI & Emerging Tech",
      color: "#EC4899",
      rating: 5,
    },
  ];

  // Partnership benefits
  const benefits = [
    {
      title: "Strategic Talent Acquisition",
      description:
        "We help you identify, attract, and retain the right talent for your specific business needs and culture to build high-performing teams.",
    },
    {
      title: "Sales Enablement & Lead Conversion Excellence",
      description:
        "Our experts transform your sales capabilities and lead conversion processes with data-driven strategies that increase retention, revenue, and conversion rates.",
    },
  ];

  // Handle testimonial navigation
  const navigateTestimonial = (direction) => {
    if (direction === "next") {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    } else {
      setActiveTestimonial((current) =>
        current === 0 ? testimonials.length - 1 : current - 1
      );
    }
  };

  // Trigger animation on load and auto-rotate testimonials
  useEffect(() => {
    setAnimateHero(true);

    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-gray-900 font-sans antialiased text-gray-200">
      {/* Fixed background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full grid grid-cols-10 grid-rows-10">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="border-r border-b border-gray-400"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <div
              className={`inline-block px-4 py-1.5 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-800 border-opacity-30 transition-all duration-500 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Trusted by 200+ Businesses Nationwide
            </div>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Empowering <span className="text-blue-400">growth</span> across{" "}
              <br />
              industries and regions
            </h1>

            <p
              className={`text-xl text-gray-300 max-w-3xl mb-12 transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              At Forward Biz, we've had the privilege of working with
              organizations at every stage — from ambitious startups to industry
              leaders. Our expertise in strategic talent acquisition and sales
              enablement empowers clients to scale with confidence, delivering
              measurable results and sustainable growth.
            </p>
          </div>

          {/* Industry Distribution Section */}
          <div
            className={`transition-all duration-1000 ${
              animateHero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="bg-gray-800/30 backdrop-blur-md rounded-xl border border-gray-700/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-medium text-white mb-8 text-center">
                Driving growth across industries, nationwide
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/40 backdrop-blur-md rounded-xl border border-gray-700/30 p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-800/50 flex flex-col items-center text-center h-56 justify-between"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${industry.color}25` }}
                    >
                      <industry.icon
                        className="text-2xl"
                        style={{ color: industry.color }}
                        size={28}
                      />
                    </div>

                    <div className="flex flex-col items-center flex-grow justify-center ">
                      <h4 className="text-white font-medium text-center h-12 flex items-center">
                        {industry.name}
                      </h4>
                    </div>

                    {/* <div className="w-full mt-6">
                      <div className="w-full bg-gray-700/30 h-2 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: animateHero
                              ? `${industry.percentage}%`
                              : "0%",
                            backgroundColor: industry.color,
                            transitionDelay: `${900 + index * 100}ms`,
                          }}
                        ></div>
                      </div>
                      <p className="text-blue-300 font-semibold mt-2">
                        {industry.percentage}%
                      </p>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Modern carousel */}
      <section className="relative py-24 bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't take our word for it—hear directly from the businesses we've
              partnered with.
            </p>
          </div>

          {/* Enhanced testimonial carousel with navigation controls */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-auto overflow-hidden">
              <div
                className="transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/30 h-full">
                        {/* Star Rating */}
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              fill={
                                i < testimonial.rating
                                  ? "#facc15"
                                  : "transparent"
                              }
                              className={
                                i < testimonial.rating
                                  ? "text-yellow-400 mr-1"
                                  : "text-gray-600 mr-1"
                              }
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="relative mb-8">
                          <div className="text-6xl absolute -top-6 -left-2 text-blue-500/10">
                            "
                          </div>
                          <p className="text-gray-200 text-lg relative z-10 leading-relaxed">
                            {testimonial.quote}
                          </p>
                          <div className="text-6xl absolute -bottom-10 -right-2 text-blue-500/10">
                            "
                          </div>
                        </div>

                        {/* Author */}
                        <div className="flex items-center">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                            style={{ backgroundColor: testimonial.color }}
                          >
                            {testimonial.position[0]}
                          </div>
                          <div>
                            <div className="font-medium text-white">
                              {testimonial.position}
                            </div>
                            <div className="text-sm text-gray-400">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2">
              <button
                onClick={() => navigateTestimonial("prev")}
                className="w-12 h-12 rounded-full bg-gray-800/70 border border-gray-700/50 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-600/70 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2">
              <button
                onClick={() => navigateTestimonial("next")}
                className="w-12 h-12 rounded-full bg-gray-800/70 border border-gray-700/50 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-600/70 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-blue-500 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="relative py-24">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
                Why Forward Biz
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partner With Us For Sustainable Growth
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We believe in building meaningful partnerships that deliver
                measurable results and long-term value for your business.
              </p>

              {/* Benefits */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400">
                        <CheckCircle size={14} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg transition-all duration-300 group"
                >
                  <span>Become Our Next Success Story</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:ml-3 transition-all duration-300"
                  />
                </a>
              </div>
            </div>

            {/* Visual element - Industry reach stats */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/20 p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/5 blur-xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/5 blur-xl"></div>

              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Globe size={20} className="mr-2 text-blue-400" />
                Our Nationwide Impact
              </h3>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <div className="text-4xl font-bold text-white mb-2">200+</div>
                  <div className="text-blue-300">Businesses Transformed</div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <div className="text-4xl font-bold text-white mb-2">85%</div>
                  <div className="text-blue-300">Client Retention Rate</div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <div className="text-4xl font-bold text-white mb-2">
                    2.5K+
                  </div>
                  <div className="text-blue-300">Successful Placements</div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <div className="text-4xl font-bold text-white mb-2">150%</div>
                  <div className="text-blue-300">Avg. Growth Increase</div>
                </div>
              </div>

              {/* Map of India representation */}
              <div className="relative h-40 border border-gray-700/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-semibold text-white mb-2">
                      Pan-India Presence
                    </div>
                    <p className="text-gray-300">
                      Serving businesses in all major cities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-90 z-0"></div>
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
              Ready to join our success stories?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's work together to build your dream team and optimize your
              sales processes for sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center hover:translate-y-[-2px] relative overflow-hidden group"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-blue-600 bg-opacity-40 hover:bg-opacity-50 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center backdrop-blur-sm border border-blue-400 border-opacity-30 hover:border-opacity-50 hover:translate-y-[-2px] relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Our Services</span>
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
  );
}
