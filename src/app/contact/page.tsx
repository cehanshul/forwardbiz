"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Users,
  Briefcase,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [animateHero, setAnimateHero] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Services for dropdown
  const services = [
    { value: "", label: "Select a service" },
    { value: "talent-acquisition", label: "Strategic Talent Acquisition" },
    { value: "sales-leadership", label: "Sales & CX Leadership" },
    { value: "lead-conversion", label: "Lead Conversion Systems" },
    { value: "custom", label: "Custom Business Solution" },
  ];

  // Office locations
  const officeLocations = [
    {
      city: "New Delhi (HQ)",
      address: "123 Business Avenue, New Delhi, 110001, India",
      phone: "+91 (123) 456-7890",
      email: "delhi@forwardbiz.com",
      hours: "Mon-Fri: 9:30 AM - 6:00 PM",
    },
    {
      city: "Mumbai",
      address: "456 Growth Tower, Bandra, Mumbai, 400050, India",
      phone: "+91 (987) 654-3210",
      email: "mumbai@forwardbiz.com",
      hours: "Mon-Fri: 9:30 AM - 6:00 PM",
    },
    {
      city: "Bangalore",
      address: "789 Tech Park, Whitefield, Bangalore, 560066, India",
      phone: "+91 (456) 789-0123",
      email: "bangalore@forwardbiz.com",
      hours: "Mon-Fri: 9:30 AM - 6:00 PM",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What information should I include in my inquiry?",
      answer:
        "To help us serve you better, please include your business name, industry, team size, and specific challenges you're facing. The more details you provide, the more tailored our response will be.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "We typically respond to all inquiries within 24 business hours. For urgent matters, please mention the urgency in your message or call our office directly.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer:
        "Yes, we offer both in-person and virtual consultations depending on your preference and location. Our virtual consultations are conducted via secure video conferencing platforms.",
    },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
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

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (!formData.service) {
      errors.service = "Please select a service";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormError(true);
      // Scroll to the top of the form where errors are displayed
      document
        .getElementById("contact-form")
        .scrollIntoView({ behavior: "smooth" });
      return;
    }

    // In a real implementation, you would send the form data to your backend here
    // For now, we'll just simulate a successful submission
    console.log("Form submitted:", formData);

    // Show success message
    setFormSubmitted(true);
    setFormError(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  // Trigger animation on load
  useEffect(() => {
    setAnimateHero(true);

    // Add animation classes for scroll animations
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

  return (
    <div className="bg-gray-900 font-sans antialiased text-gray-200 min-h-screen">
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
      <section className="relative pt-24 pb-16">
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
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div
              className={`inline-block px-4 py-1.5 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-800 border-opacity-30 transition-all duration-500 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Get In Touch
            </div>

            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Let's Grow <span className="text-blue-400">Together</span>
            </h1>

            <p
              className={`text-xl text-gray-300 max-w-3xl mx-auto mb-12 transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Have questions or ready to transform your business? Our team is
              here to help you build the right talent and sales strategies for
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-16">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form Column */}
            <div className="lg:col-span-7 animate-on-scroll opacity-0">
              <div className="bg-gray-800/20 backdrop-blur-md rounded-xl border border-gray-700/20 overflow-hidden shadow-xl">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <MessageSquare size={22} className="mr-3 text-blue-400" />
                    Send Us a Message
                  </h2>

                  {/* Form success message */}
                  {formSubmitted && (
                    <div className="mb-8 p-4 bg-green-900/30 border border-green-500/30 rounded-lg flex items-start">
                      <CheckCircle
                        size={24}
                        className="text-green-400 mr-3 flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <h3 className="font-semibold text-green-300 mb-1">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-green-200/80">
                          Thank you for contacting us. We'll get back to you
                          within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Form error message */}
                  {formError && Object.keys(formErrors).length > 0 && (
                    <div className="mb-8 p-4 bg-red-900/30 border border-red-500/30 rounded-lg flex items-start">
                      <AlertCircle
                        size={24}
                        className="text-red-400 mr-3 flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <h3 className="font-semibold text-red-300 mb-1">
                          Please fix the following errors:
                        </h3>
                        <ul className="text-red-200/80 list-disc ml-5">
                          {Object.values(formErrors).map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full Name <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border ${
                            formErrors.name
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-gray-600/50 focus:border-blue-500"
                          } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300`}
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border ${
                            formErrors.email
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-gray-600/50 focus:border-blue-500"
                          } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300`}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 focus:border-blue-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Company Field */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 focus:border-blue-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Service of Interest{" "}
                        <span className="text-blue-400">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border ${
                          formErrors.service
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-600/50 focus:border-blue-500"
                        } rounded-lg text-white focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300 appearance-none`}
                      >
                        {services.map((service) => (
                          <option
                            key={service.value}
                            value={service.value}
                            className="bg-gray-800"
                          >
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Message <span className="text-blue-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border ${
                          formErrors.message
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-600/50 focus:border-blue-500"
                        } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-300`}
                        placeholder="Tell us about your business needs and how we can help..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
                      >
                        <span>Send Message</span>
                        <Send
                          size={18}
                          className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </button>
                    </div>

                    <p className="text-sm text-gray-400 mt-4">
                      Fields marked with{" "}
                      <span className="text-blue-400">*</span> are required
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {/* Quick Contact Info */}
                <div className="bg-gray-800/20 backdrop-blur-md rounded-xl border border-gray-700/20 p-8 animate-on-scroll opacity-0">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Quick Contact
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 backdrop-blur-sm border border-blue-800/30 flex items-center justify-center mr-4">
                        <Phone size={18} className="text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Phone</h3>
                        <a
                          href="tel:+911234567890"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          +91 (123) 456-7890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 backdrop-blur-sm border border-blue-800/30 flex items-center justify-center mr-4">
                        <Mail size={18} className="text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Email</h3>
                        <a
                          href="mailto:info@forwardbiz.com"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          info@forwardbiz.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 backdrop-blur-sm border border-blue-800/30 flex items-center justify-center mr-4">
                        <Clock size={18} className="text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">
                          Business Hours
                        </h3>
                        <p className="text-gray-300">
                          Monday - Friday: 9:30 AM - 6:00 PM
                        </p>
                        <p className="text-gray-300">Weekends: Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-8 pt-6 border-t border-gray-700/30">
                    <h3 className="text-white font-medium mb-4">
                      Connect With Us
                    </h3>
                    <div className="flex space-x-3">
                      <a
                        href="https://linkedin.com/company/forwardbiz"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-blue-600/50 flex items-center justify-center text-white transition-all duration-300 border border-gray-600/50 hover:border-blue-500/50"
                      >
                        <LinkedinIcon size={18} />
                      </a>
                      <a
                        href="https://twitter.com/forwardbiz"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-blue-600/50 flex items-center justify-center text-white transition-all duration-300 border border-gray-600/50 hover:border-blue-500/50"
                      >
                        <TwitterIcon size={18} />
                      </a>
                      <a
                        href="https://instagram.com/forwardbiz"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-blue-600/50 flex items-center justify-center text-white transition-all duration-300 border border-gray-600/50 hover:border-blue-500/50"
                      >
                        <InstagramIcon size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Schedule Meeting Button */}
                <div className="bg-blue-900/40 backdrop-blur-md rounded-xl p-6 border border-blue-800/30 animate-on-scroll opacity-0 hover:bg-blue-900/50 transition-all duration-300 group">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mr-4">
                      <Users size={18} className="text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Prefer a meeting?
                    </h3>
                  </div>
                  <p className="text-blue-100 mb-5">
                    Schedule a personalized consultation with our business
                    growth experts.
                  </p>
                  <a
                    href="https://calendly.com/forwardbiz/consultation"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-white text-blue-700 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                  >
                    <Briefcase size={18} className="mr-2" />
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="relative py-20 bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Visit Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices across major Indian cities, we're never far away from
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gray-800/20 backdrop-blur-md rounded-xl border border-gray-700/20 overflow-hidden h-full hover:border-blue-500/30 transition-all duration-300 group">
                  {/* Office Map Placeholder - In a real implementation, you might use Google Maps */}
                  <div className="h-48 bg-gray-800/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/20 opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin size={32} className="text-blue-400" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-600/50 backdrop-blur-sm text-white text-sm font-medium border border-blue-500/30">
                        {office.city}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin
                          size={18}
                          className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                        />
                        <p className="text-gray-300">{office.address}</p>
                      </div>

                      <div className="flex items-start">
                        <Phone
                          size={18}
                          className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                        />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-start">
                        <Mail
                          size={18}
                          className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                        />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
                        >
                          {office.email}
                        </a>
                      </div>

                      <div className="flex items-start">
                        <Clock
                          size={18}
                          className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                        />
                        <p className="text-gray-300">{office.hours}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-700/30">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          office.address
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                      >
                        Get Directions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contact FAQ
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about contacting and working with us
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/20 backdrop-blur-md rounded-xl border border-gray-700/20 p-6 animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
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
          <div className="text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's work together to build your dream team and optimize your
              conversion systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center hover:translate-y-[-2px] relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-blue-600 bg-opacity-40 hover:bg-opacity-50 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-center backdrop-blur-sm border border-blue-400 border-opacity-30 hover:border-opacity-50 hover:translate-y-[-2px] relative overflow-hidden group"
              >
                <span className="relative z-10">About Our Team</span>
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
