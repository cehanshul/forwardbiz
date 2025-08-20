"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Star, MessageSquare, CheckCircle } from "lucide-react";

export default function ClientsPage() {
  const [animateHero, setAnimateHero] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Our clients - simple list with just essential information
  const clients = [
    {
      name: "TechNova Solutions",
      logo: "TN",
      color: "#3B82F6",
      industry: "Technology",
      location: "Bangalore",
      relationship: "Strategic talent acquisition and sales leadership",
      year: 2022,
    },
    {
      name: "EduLearn Institute",
      logo: "EL",
      color: "#8B5CF6",
      industry: "Education",
      location: "Chennai",
      relationship: "Recruitment and team building",
      year: 2023,
    },
    {
      name: "HealthPlus Care",
      logo: "HC",
      color: "#14B8A6",
      industry: "Healthcare",
      location: "Mumbai",
      relationship: "Sales process optimization",
      year: 2022,
    },
    {
      name: "FinSecure Analytics",
      logo: "FA",
      color: "#F59E0B",
      industry: "Finance",
      location: "Hyderabad",
      relationship: "Sales team development",
      year: 2023,
    },
  ];

  // Client testimonials
  const testimonials = [
    {
      quote:
        "Working with Forward Biz transformed our approach to talent acquisition. They understood our needs perfectly and helped us build a team that's truly aligned with our goals.",
      name: "Sanjay Kumar",
      position: "CEO, TechNova Solutions",
      logo: "TN",
      color: "#3B82F6",
      rating: 5,
    },
    {
      quote:
        "We struggled with admissions and retention until Forward Biz helped us rebuild our team. Their approach was methodical and results-oriented.",
      name: "Priya Sharma",
      position: "Managing Director, EduLearn Institute",
      logo: "EL",
      color: "#8B5CF6",
      rating: 5,
    },
    {
      quote:
        "The team at Forward Biz understands that healthcare requires a unique approach to sales. They respected our patient-first philosophy while helping us grow.",
      name: "Dr. Rahul Verma",
      position: "Director, HealthPlus Care",
      logo: "HC",
      color: "#14B8A6",
      rating: 5,
    },
  ];

  // Partnership benefits
  const benefits = [
    {
      title: "Strategic Talent Acquisition",
      description:
        "We help you identify, attract, and retain the right talent for your specific business needs and culture.",
    },
    {
      title: "Sales Leadership",
      description:
        "Our experts optimize your sales processes and help build high-performing revenue teams.",
    },
    {
      title: "Growth Consultation",
      description:
        "Get customized strategies to overcome your unique business challenges and accelerate growth.",
    },
  ];

  // Industry expertise areas
  const industries = [
    "Technology & SaaS",
    "Education & EdTech",
    "Healthcare & Wellness",
    "Finance & FinTech",
  ];

  // Trigger animation on load
  useEffect(() => {
    setAnimateHero(true);

    // Auto-rotate testimonials
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
              Our Partnerships
            </div>

            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Working with <span className="text-blue-400">ambitious</span>{" "}
              <br />
              businesses across India
            </h1>

            <p
              className={`text-xl text-gray-300 max-w-3xl mb-12 transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              We partner with forward-thinking organizations to build
              high-performing teams and optimize sales processes that drive
              sustainable growth.
            </p>
          </div>

          {/* Client Logos Section - Clean, modern grid with subtle animations */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 ${
              animateHero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-md rounded-xl border border-gray-700/30 p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-800/40 flex flex-col items-center text-center hover:translate-y-[-4px]"
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{ backgroundColor: client.color }}
                >
                  {client.logo}
                </div>
                <h3 className="text-white font-medium mb-1">{client.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{client.industry}</p>
                <div className="mt-auto pt-3 border-t border-gray-700/30 w-full">
                  <p className="text-xs text-gray-400">
                    Partner since {client.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Simplified, elegant design */}
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

          {/* Modern testimonial carousel with elegant transitions */}
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
                      <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/30">
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
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold mr-4"
                            style={{ backgroundColor: testimonial.color }}
                          >
                            {testimonial.logo}
                          </div>
                          <div>
                            <div className="font-medium text-white">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

            {/* Visual element - Statistics with modern design */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/20 p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/5 blur-xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/5 blur-xl"></div>

              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageSquare size={20} className="mr-2 text-blue-400" />
                Industry Expertise
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05))`,
                        border: `1px solid rgba(59,130,246,0.1)`,
                      }}
                    >
                      <span className="text-blue-400 font-medium text-xl">
                        {industry.charAt(0)}
                      </span>
                    </div>
                    <h4 className="text-white font-medium">{industry}</h4>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">4+</div>
                    <div className="text-sm text-gray-400">
                      Industries Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">85%</div>
                    <div className="text-sm text-gray-400">
                      Client Retention
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2022</div>
                    <div className="text-sm text-gray-400">Founded</div>
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
              Ready to join our client roster?
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
