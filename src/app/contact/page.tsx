"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  AlertCircle,
  Linkedin,
  Twitter,
  Instagram,
  ChevronRight,
  MessageSquare,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const [animateContent, setAnimateContent] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Hiring",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // null, "submitting", "success", "error"
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Office location data
  const office = {
    location: "Velachery, Chennai",
    phone: "+91 63692 07955",
    email: "raji@forwardbiz.in",
    linkedin: "https://www.linkedin.com/in/rajeswari-saravanamurthy-29618816/",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    mapUrl:
      "https://maps.google.com/maps?q=velachery+chennai&t=&z=13&ie=UTF8&iwloc=&output=embed",
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);
  // Animate on page load
  useEffect(() => {
    setAnimateContent(true);

    // Add animation classes for scroll
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null,
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!formState.name.trim()) errors.name = "Name is required";

    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      errors.email = "Email is invalid";
    }

    if (!formState.company.trim()) errors.company = "Company is required";

    if (!formState.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      // Simulate successful submission
      setFormStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          company: "",
          inquiryType: "Hiring",
          message: "",
        });
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  // Grid Pattern for background
  const GridPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <div className="h-full w-full grid grid-cols-10 grid-rows-10">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="border-r border-b border-gray-400"></div>
        ))}
      </div>
    </div>
  );

  // Circle Pattern for background
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <CirclePattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div
              className={`inline-block px-4 py-1.5 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30 transition-all duration-500 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Contact Us
            </div>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Let's Build Your{" "}
              <span className="text-blue-400">Growth Story</span> Together
            </h1>

            <p
              className={`text-xl text-gray-300 max-w-2xl mx-auto mb-8 transition-all duration-700 ${
                animateContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Whether you're looking to hire smarter, build stronger teams, or
              accelerate conversions, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 relative">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Column */}
            <div className="animate-on-scroll opacity-0">
              {/* Office Information Card */}
              <div className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl border border-gray-700 border-opacity-50 p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MapPin size={24} className="mr-3 text-blue-400" />
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white mb-1">
                        Location
                      </h4>
                      <address className="not-italic text-gray-300">
                        {office.location}
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white mb-1">
                        Phone / WhatsApp
                      </h4>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-30 flex items-center justify-center text-blue-300 border border-blue-800 border-opacity-30 flex-shrink-0">
                      <Linkedin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white mb-1">
                        LinkedIn
                      </h4>
                      <a
                        href={office.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        ForwardBiz LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl border border-gray-700 border-opacity-50 overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src={office.mapUrl}
                  title={`Map to ${office.location}`}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href={office.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 bg-opacity-60 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-700 border-opacity-50"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a
                    href="https://wa.me/916369207955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 bg-opacity-60 flex items-center justify-center text-blue-400 hover:bg-green-600 hover:text-white transition-all duration-300 border border-gray-700 border-opacity-50"
                    aria-label="WhatsApp"
                  >
                    <Phone size={20} />
                  </a>

                  <a
                    href={`mailto:${office.email}`}
                    className="w-12 h-12 rounded-full bg-gray-800 bg-opacity-60 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-700 border-opacity-50"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="animate-on-scroll opacity-0">
              <div className="bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl border border-gray-700 border-opacity-50 p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare size={24} className="mr-3 text-blue-400" />
                  Get in Touch
                </h2>

                <p className="text-gray-300 mb-6">
                  Fill out the form below and our team will connect with you
                  shortly.
                </p>

                {/* Contact Form */}
                <div className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Name <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 bg-gray-700 bg-opacity-50 backdrop-blur-sm border ${
                          formErrors.name ? "border-red-500" : "border-gray-600"
                        } border-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-gray-400`}
                        placeholder="Your name"
                      />
                      {formErrors.name && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                          <AlertCircle size={16} />
                        </div>
                      )}
                    </div>
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-400">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 bg-gray-700 bg-opacity-50 backdrop-blur-sm border ${
                          formErrors.email
                            ? "border-red-500"
                            : "border-gray-600"
                        } border-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-gray-400`}
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                          <AlertCircle size={16} />
                        </div>
                      )}
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Company/Organization Field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Company / Organization{" "}
                      <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 bg-gray-700 bg-opacity-50 backdrop-blur-sm border ${
                          formErrors.company
                            ? "border-red-500"
                            : "border-gray-600"
                        } border-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-gray-400`}
                        placeholder="Your company name"
                      />
                      {formErrors.company && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                          <AlertCircle size={16} />
                        </div>
                      )}
                    </div>
                    {formErrors.company && (
                      <p className="mt-1 text-sm text-red-400">
                        {formErrors.company}
                      </p>
                    )}
                  </div>

                  {/* Inquiry Type Field - Custom Dropdown */}
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Inquiry Type
                    </label>

                    {/* Custom Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full px-4 py-2.5 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 border-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none rounded-lg text-white flex justify-between items-center"
                      >
                        {formState.inquiryType}
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-300 ${
                            dropdownOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute z-10 w-full mt-1 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
                        >
                          {["Hiring", "Sales Support", "General"].map(
                            (option) => (
                              <div
                                key={option}
                                className={`px-4 py-2.5 cursor-pointer hover:bg-gray-700 ${
                                  option === formState.inquiryType
                                    ? "bg-gray-700 text-blue-400"
                                    : "text-white"
                                } ${
                                  option === "General" ? "rounded-b-lg" : ""
                                } ${option === "Hiring" ? "rounded-t-lg" : ""}`}
                                onClick={() => {
                                  setFormState({
                                    ...formState,
                                    inquiryType: option,
                                  });
                                  setDropdownOpen(false);
                                }}
                              >
                                {option}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-2.5 bg-gray-700 bg-opacity-50 backdrop-blur-sm border ${
                          formErrors.message
                            ? "border-red-500"
                            : "border-gray-600"
                        } border-opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-gray-400 resize-none`}
                        placeholder="Tell us about your business needs..."
                      ></textarea>
                      {formErrors.message && (
                        <div className="absolute right-3 top-6 text-red-500">
                          <AlertCircle size={16} />
                        </div>
                      )}
                    </div>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={
                      formStatus === "submitting" || formStatus === "success"
                    }
                    className={`w-full py-3 px-6 rounded-lg font-medium text-white flex items-center justify-center transition-all duration-300 ${
                      formStatus === "success"
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-blue-600 hover:bg-blue-500"
                    } shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed hover:translate-y-[-2px] mt-2`}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <Check size={18} className="mr-2" />
                        Inquiry Submitted!
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 relative mt-8">
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
          <div className="text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to scale? Let's connect.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step toward growing your business with our expert
              team.
            </p>

            <a
              href={`tel:${office.phone}`}
              className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-100 text-blue-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium hover:translate-y-[-2px] group"
            >
              <Phone size={18} className="mr-2" />
              <span className="relative z-10">Call Us Now</span>
              <ArrowRight
                size={16}
                className="ml-2 group-hover:ml-3 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Animation styles */}
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
