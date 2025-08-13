"use client";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Users,
  Briefcase,
  BookOpen,
  BarChart4,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ExternalLink,
  Plus,
  ChevronDown,
  Star,
} from "lucide-react";

export default function ForwardBizHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedService, setSelectedService] = useState("Select a service");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  // Services data
  const services = [
    {
      id: "recruitment",
      title: "Recruitment Services",
      description:
        "Forward Business Solutions brings together the expertise of recruitment specialists to assess and identify the best talent for various positions in the corporate hierarchy.",
      icon: Users,
      color: "blue",
      metrics: [
        { label: "Positions Filled", value: "1,000+" },
        { label: "Time-to-Hire Reduction", value: "40%" },
        { label: "Retention Rate", value: "94%" },
      ],
    },
    {
      id: "tax",
      title: "TAX Support",
      description:
        "Forward Business Solutions backed by a team of dedicated professional provides TAX Support services such as GST Registration, PAN Registration, PF, ESI.",
      icon: BarChart4,
      color: "purple",
      metrics: [
        { label: "Clients Served", value: "500+" },
        { label: "Compliance Rate", value: "100%" },
        { label: "Average Savings", value: "₹8L+" },
      ],
    },
    {
      id: "training",
      title: "Training & Placement",
      description:
        "Forward Business Solutions trains candidates according to the Companies specific requirements. We provided training to many of corporate Clients, in a wide range of subjects.",
      icon: BookOpen,
      color: "teal",
      metrics: [
        { label: "Professionals Trained", value: "2,500+" },
        { label: "Placement Rate", value: "92%" },
        { label: "Companies Partnered", value: "120+" },
      ],
    },
  ];

  // Service options for dropdown
  const serviceOptions = [
    "Recruitment Services",
    "TAX Support",
    "Training & Placement",
  ];

  // Approach steps
  const approachSteps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by deeply understanding your business challenges and objectives.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "Our experts develop a tailored approach to address your specific needs.",
    },
    {
      number: "03",
      title: "Execute",
      description:
        "We implement solutions with precision and continuous communication.",
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "We measure results and refine our approach for maximum impact.",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What industries do you specialize in for recruitment?",
      answer:
        "We specialize in recruitment across multiple industries including Technology, Finance, Healthcare, Manufacturing, and Retail. Our specialized recruitment teams understand the unique talent requirements in each sector.",
    },
    {
      question: "How does your TAX support service work?",
      answer:
        "Our TAX support services include GST Registration, PAN Registration, PF, and ESI administration. We provide end-to-end management from initial registration to ongoing compliance and optimization, backed by a team of tax professionals.",
    },
    {
      question:
        "Can you create customized training programs for our specific needs?",
      answer:
        "Yes, we design training programs tailored to your companys specific requirements. We analyze your needs, develop customized curriculum, and deliver training through industry experts, followed by comprehensive assessment and placement support.",
    },
    {
      question:
        "What makes forwardbiz different from other business solution providers?",
      answer:
        "Our integrated approach combining recruitment, tax support, and training under one roof provides seamless business solutions. We focus on understanding your unique challenges and developing customized strategies rather than offering one-size-fits-all solutions.",
    },
  ];

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

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "py-4 bg-white/90 backdrop-blur-md shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              <span className="text-blue-600">forward</span>biz
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
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <div className="px-6 py-6 flex justify-between items-center border-b border-gray-100">
              <a href="/" className="text-lg font-bold text-gray-900">
                <span className="text-blue-600">forward</span>biz
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2"
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
                    className="text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="block w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
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
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                Business Solutions Provider
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                Business solutions{" "}
                <span className="text-blue-600">that deliver results</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                We provide comprehensive business services designed to optimize
                your operations and accelerate growth in today's dynamic market.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all inline-flex items-center"
                >
                  Explore Our Services <ArrowRight size={16} className="ml-2" />
                </a>

                <a
                  href="/contact"
                  className="px-6 py-3 bg-white text-gray-700 rounded-lg transition-all inline-flex items-center border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow"
                >
                  Contact Us
                </a>
              </div>

              {/* Clients */}
              <div className="mt-16">
                <p className="text-sm text-gray-500 mb-4">
                  Trusted by leading companies
                </p>
                <div className="flex flex-wrap items-center gap-8">
                  {["Infosys", "Microsoft", "Google", "Apple"].map(
                    (company, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                          <span className="text-gray-500 font-medium">
                            {company}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
                  <h3 className="font-bold">Business Impact Dashboard</h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                    <div>
                      <span className="text-gray-500 text-sm">
                        Total Impact
                      </span>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-gray-900">
                          94%
                        </span>
                        <span className="text-green-500 text-sm">+2.5%</span>
                      </div>
                    </div>
                    <div className="w-24 h-12 bg-gray-100 rounded-lg"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users size={14} className="text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-800">
                          Recruitment
                        </span>
                      </div>
                      <span className="text-gray-900 font-semibold">
                        1,000+
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <BarChart4 size={14} className="text-purple-600" />
                        </div>
                        <span className="font-medium text-gray-800">
                          TAX Support
                        </span>
                      </div>
                      <span className="text-gray-900 font-semibold">500+</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                          <BookOpen size={14} className="text-teal-600" />
                        </div>
                        <span className="font-medium text-gray-800">
                          Training
                        </span>
                      </div>
                      <span className="text-gray-900 font-semibold">
                        2,500+
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="/case-studies"
                      className="block w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-center text-gray-700 transition-colors"
                    >
                      View Case Studies
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 z-0"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Navigating Business Challenges
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The emergence of knowledge economy and the technological
              advancement have transformed the dynamics of business world over.
              The companies today had to face unprecedented competition and
              insurmountable pressure to deliver value at every touch point. At
              forwardbiz, we help you navigate these challenges with our
              specialized services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Completely Redesigned */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide tailored services to address your specific business
              needs and challenges.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex overflow-x-auto mb-10 pb-4 lg:justify-center">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg shadow-inner">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === index
                      ? `bg-white text-${service.color}-600 shadow`
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {service.title}
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
                    className={`transition-all duration-300 ${
                      activeTab === index ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-6`}
                    >
                      <service.icon
                        size={24}
                        className={`text-${service.color}-600`}
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-8">{service.description}</p>

                    <h4 className="text-lg font-semibold mb-4 text-gray-800">
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {service.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-white p-4 rounded-lg shadow-sm"
                        >
                          <div
                            className={`text-${service.color}-600 text-xl font-bold`}
                          >
                            {metric.value}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`/services/${service.id}`}
                      className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700 font-medium`}
                    >
                      Learn More About {service.title}{" "}
                      <ChevronRight size={16} className="ml-1" />
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
                    className={`transition-all duration-300 ${
                      activeTab === index ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                      <div className={`bg-${service.color}-600 p-5 text-white`}>
                        <h3 className="text-xl font-bold">
                          Why Choose Our {service.title}
                        </h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div
                            className={`bg-${service.color}-50 rounded-lg p-4`}
                          >
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-full bg-${service.color}-100 mb-3`}
                            >
                              <CheckCircle
                                size={16}
                                className={`text-${service.color}-600`}
                              />
                            </div>
                            <h4 className="text-base font-semibold mb-1 text-gray-900">
                              Expertise
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Our team brings years of specialized experience
                            </p>
                          </div>

                          <div
                            className={`bg-${service.color}-50 rounded-lg p-4`}
                          >
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-full bg-${service.color}-100 mb-3`}
                            >
                              <CheckCircle
                                size={16}
                                className={`text-${service.color}-600`}
                              />
                            </div>
                            <h4 className="text-base font-semibold mb-1 text-gray-900">
                              Tailored Approach
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Customized solutions for your needs
                            </p>
                          </div>

                          <div
                            className={`bg-${service.color}-50 rounded-lg p-4`}
                          >
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-full bg-${service.color}-100 mb-3`}
                            >
                              <CheckCircle
                                size={16}
                                className={`text-${service.color}-600`}
                              />
                            </div>
                            <h4 className="text-base font-semibold mb-1 text-gray-900">
                              Proven Results
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Track record of measurable impact
                            </p>
                          </div>

                          <div
                            className={`bg-${service.color}-50 rounded-lg p-4`}
                          >
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-full bg-${service.color}-100 mb-3`}
                            >
                              <CheckCircle
                                size={16}
                                className={`text-${service.color}-600`}
                              />
                            </div>
                            <h4 className="text-base font-semibold mb-1 text-gray-900">
                              Ongoing Support
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Continuous assistance for success
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 text-center">
                          <a
                            href={`/services/${service.id}`}
                            className={`inline-flex items-center px-5 py-2 bg-${service.color}-600 hover:bg-${service.color}-700 text-white rounded-lg font-medium transition-colors text-sm`}
                          >
                            View {service.title} Details
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

      {/* Approach Section - Visual Process */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures consistent results and exceptional
              service delivery.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg transition-all hover:shadow-xl">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-6 mx-auto lg:mx-0">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < approachSteps.length - 1 && (
                    <div className="flex justify-center lg:hidden my-4">
                      <ArrowRight size={24} className="text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it — hear what our clients have to say
              about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content:
                  "Forward Business Solutions transformed our hiring process. Their recruitment team understood our technical requirements perfectly and delivered quality candidates consistently.",
                author: "Rajesh Kumar",
                position: "CTO, TechDynamics",
                rating: 5,
              },
              {
                content:
                  "Their tax support services saved us both time and money. The team's expertise in GST and compliance matters has been invaluable for our growing business.",
                author: "Priya Sharma",
                position: "Finance Director, Global Retail",
                rating: 5,
              },
              {
                content:
                  "The training program forwardbiz developed for our team was exceptional. It addressed our specific needs and the post-training support helped ensure successful implementation.",
                author: "Amit Patel",
                position: "HR Manager, InnovateNow",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions about our services.
              </p>

              <div className="hidden lg:block">
                <a
                  href="/faq"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  View All FAQs <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-semibold text-gray-900">
                        {item.question}
                      </span>
                      <span
                        className={`text-blue-600 transition-transform duration-200 ${
                          activeAccordion === index ? "rotate-45" : ""
                        }`}
                      >
                        <Plus size={20} />
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeAccordion === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 lg:hidden">
                <a
                  href="/faq"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  View All FAQs <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Contact us today to discuss how our services can help address your
              specific business challenges and drive sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all font-medium text-center"
              >
                Schedule a Consultation
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-medium text-center border border-blue-400"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions or ready to start? Contact us today to discuss
                how we can help your business succeed.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Our Location
                    </h3>
                    <address className="not-italic text-gray-600">
                      123 Business Avenue
                      <br />
                      New Delhi, 110001
                      <br />
                      India
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@forwardbiz.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      info@forwardbiz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <a
                      href="tel:+911234567890"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +91 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>

                {/* Contact Form - No actual form elements since they're not supported */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setServiceDropdownOpen(!serviceDropdownOpen)
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 text-left flex items-center justify-between"
                    >
                      <span
                        className={
                          selectedService === "Select a service"
                            ? "text-gray-500"
                            : "text-gray-900"
                        }
                      >
                        {selectedService}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform duration-200 ${
                          serviceDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {serviceDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {serviceOptions.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setSelectedService(option);
                              setServiceDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-lg last:rounded-b-lg text-gray-900"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <a
                  href="/contact/submit"
                  className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <a href="/" className="text-xl font-bold inline-block mb-4">
                <span className="text-blue-400">forward</span>biz
              </a>
              <p className="text-gray-400 mb-6">
                Forward Business Solutions provides comprehensive business
                services including recruitment, TAX support, and training &
                placement to help businesses thrive.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <span>in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <span>𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <span>f</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services/recruitment"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Recruitment
                  </a>
                </li>
                <li>
                  <a
                    href="/services/tax-support"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    TAX Support
                  </a>
                </li>
                <li>
                  <a
                    href="/services/training-placement"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Training
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/clients"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Business Avenue</li>
                <li>New Delhi, 110001</li>
                <li className="pt-2">
                  <a
                    href="mailto:info@forwardbiz.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    info@forwardbiz.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} forwardbiz. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="/cookies"
                className="text-gray-500 hover:text-white transition-colors text-sm"
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
