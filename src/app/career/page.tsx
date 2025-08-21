"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Rocket,
  Globe,
  Zap,
  Star,
  Building,
} from "lucide-react";

export default function CareersPage() {
  const [animatePage, setAnimatePage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  // Industries we connect talent with
  const industries = [
    { name: "IT & Tech", icon: Zap },
    { name: "SaaS", icon: Globe },
    { name: "AI & ML", icon: Rocket },
    { name: "EdTech", icon: Star },
    { name: "Consumer", icon: Users },
    { name: "Enterprise", icon: Building },
  ];

  // Animate on page load
  useEffect(() => {
    setAnimatePage(true);

    // Animate elements on scroll
    const handleScroll = () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        const position = element.getBoundingClientRect();

        // If element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add("is-visible");
        }
      });
    };

    // Initial check
    setTimeout(handleScroll, 100);

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));

      // Clear error
      if (formErrors.resume) {
        setFormErrors((prev) => ({
          ...prev,
          resume: null,
        }));
      }
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.resume) {
      errors.resume = "Resume is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        resume: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full grid grid-cols-10 grid-rows-10">
            {Array(100)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="border-r border-b border-gray-400"
                ></div>
              ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`transform transition-all duration-700 ${
                animatePage
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm font-medium mb-6">
                Careers
              </div>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transform transition-all duration-700 delay-100 ${
                animatePage
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Grow with <span className="text-blue-400">Forward Biz. </span>
              Shape the Future of Work.
            </h1>

            <p
              className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
                animatePage
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              One application. Endless opportunities. With Forward Biz, you gain
              access to multiple roles across our client network — from
              technology and sales to support and strategy.
            </p>

            <div
              className={`transform transition-all duration-700 delay-300 ${
                animatePage
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("apply-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5"
              >
                <span>Join Our Talent Network</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Connect With Leading Organizations
            </h2>
            <p className="text-lg text-gray-300">
              Join our exclusive talent network and get matched with leading
              organizations in IT, SaaS, AI, EdTech, Consumer, and more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-4"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-4">
                    <industry.icon size={20} />
                  </div>
                  <div className="font-medium text-white">{industry.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-4">
              <div className="max-w-lg">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm font-medium mb-6">
                  Why Join Us
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  One Application, Multiple Opportunities
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  Our unique talent network opens doors to diverse roles across
                  industries, giving you more options and opportunities for
                  growth.
                </p>

                <ul className="space-y-5">
                  {[
                    {
                      title: "Career Flexibility",
                      description:
                        "Explore multiple industries and roles without submitting multiple applications.",
                    },
                    {
                      title: "Personalized Matching",
                      description:
                        "Our experts match your skills and preferences with the right opportunities.",
                    },
                    {
                      title: "Access to Hidden Opportunities",
                      description:
                        "Get connected to roles that aren't advertised on public job boards.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1 mr-3">
                        <CheckCircle size={14} />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div
              id="apply-form"
              className="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-4"
            >
              <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl">
                {isSubmitted ? (
                  <div className="p-8 md:p-10 text-center">
                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-6">
                      <CheckCircle size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      Application Submitted
                    </h3>

                    <p className="text-gray-300 mb-6">
                      Thank you for joining our talent network. Our team will
                      review your profile and be in touch soon with relevant
                      opportunities.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center px-5 py-2.5 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <div className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-white">
                        Join Our Talent Network
                      </h3>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Users size={18} />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-900/50 border ${
                            formErrors.name
                              ? "border-red-500"
                              : "border-gray-700"
                          } focus:border-blue-500 focus:ring focus:ring-blue-500/20 rounded-lg text-white placeholder-gray-500 outline-none transition-all duration-200`}
                          placeholder="Enter your full name"
                        />
                        {formErrors.name && (
                          <p className="mt-1.5 text-sm text-red-400">
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-900/50 border ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-gray-700"
                          } focus:border-blue-500 focus:ring focus:ring-blue-500/20 rounded-lg text-white placeholder-gray-500 outline-none transition-all duration-200`}
                          placeholder="you@example.com"
                        />
                        {formErrors.email && (
                          <p className="mt-1.5 text-sm text-red-400">
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label
                          htmlFor="resume"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Resume/CV
                        </label>
                        <div
                          className={`relative rounded-lg overflow-hidden ${
                            formErrors.resume ? "ring-2 ring-red-500" : ""
                          }`}
                        >
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            accept=".pdf,.doc,.docx"
                          />
                          <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300">
                            <span className="truncate">
                              {formData.resume
                                ? formData.resume.name
                                : "Upload your resume (PDF, DOC, DOCX)"}
                            </span>
                            <div className="ml-2 flex-shrink-0 bg-gray-800 rounded-md p-1.5">
                              <svg
                                className="w-5 h-5 text-blue-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3m0 0l3 3m-3-3v12"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {formErrors.resume && (
                          <p className="mt-1.5 text-sm text-red-400">
                            {formErrors.resume}
                          </p>
                        )}
                        <p className="mt-1.5 text-xs text-gray-500">
                          Max file size: 5MB
                        </p>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>Join Our Talent Network</>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting, you agree to be considered for relevant
                        opportunities across our network.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full grid grid-cols-10 grid-rows-6">
            {Array(60)
              .fill()
              .map((_, i) => (
                <div key={i} className="border-r border-b border-white"></div>
              ))}
          </div>
        </div>

        {/* Top & bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join our exclusive talent network today and connect with
            opportunities that align with your skills and career goals.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("apply-form")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center px-6 py-3.5 bg-white hover:bg-gray-100 text-blue-700 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
          >
            <span>Apply Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

      <style jsx global>{`
        .animate-on-scroll {
          transition-duration: 700ms;
        }

        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
