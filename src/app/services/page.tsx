"use client";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronRight,
  UserPlus,
  HeartHandshake,
  Target,
  Users,
  TrendingUp,
  Star,
  Clock,
  Check,
  PieChart,
  BarChart4,
  Briefcase,
  BadgeCheck,
  Building,
  MessageSquare,
  Award,
  CheckCircle,
  Phone,
  Mail,
  X,
  ChevronDown,
  Plus,
  Zap,
  LineChart,
  MousePointer,
} from "lucide-react";

export default function ServicesPage() {
  const [animateHero, setAnimateHero] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("talent-acquisition");
  const [openTestimonial, setOpenTestimonial] = useState(null);
  const testimonialsRef = useRef(null);

  // Services data with expanded details
  const services = [
    {
      id: "talent-acquisition",
      title: "Strategic Talent Acquisition",
      subtitle: "Build high-performing teams that drive business growth",
      description:
        "Our specialized talent acquisition strategies help you identify, attract, and retain top professionals who align with your organization's culture and objectives.",
      icon: UserPlus,
      color: "blue",
      benefits: [
        "Reduce hiring timelines by up to 35%",
        "Decrease recruitment costs by identifying the right talent faster",
        "Improve retention rates with better cultural and skill fit",
        "Build scalable talent pipelines for future growth",
      ],
      approach: [
        {
          title: "Needs Analysis",
          description:
            "We conduct in-depth discussions to understand your business objectives, culture, and talent gaps.",
        },
        {
          title: "Customized Strategy",
          description:
            "Develop a tailored recruiting approach with the right channels and assessment methods.",
        },
        {
          title: "Candidate Experience",
          description:
            "Design an engaging recruitment process that attracts top talent to your organization.",
        },
        {
          title: "Onboarding Excellence",
          description:
            "Create comprehensive onboarding programs that accelerate productivity and integration.",
        },
      ],
      testimonial: {
        content:
          "Forward Biz helped us hire the right leaders quickly and effectively. Their talent-first approach is exactly what we needed.",
        author: "Founder",
        position: "Data Analytics Company, Bangalore",
        rating: 5,
        avatar: "F",
        bgColor: "bg-blue-600",
      },
    },
    {
      id: "sales-leadership",
      title: "Sales & CX Leadership",
      subtitle: "Transform customer experience and boost revenue",
      description:
        "Our sales and customer experience strategies help businesses optimize their customer journey, increase retention, and drive sustainable revenue growth.",
      icon: HeartHandshake,
      color: "purple",
      benefits: [
        "Increase customer retention rates by up to 40%",
        "Boost average transaction value through enhanced sales approaches",
        "Reduce customer acquisition costs through referrals",
        "Create customer advocates who become your growth engine",
      ],
      approach: [
        {
          title: "Customer Journey Mapping",
          description:
            "Analyze every touchpoint to identify optimization opportunities in your sales and service processes.",
        },
        {
          title: "Team Development",
          description:
            "Equip your sales and service teams with the right skills, tools, and mindsets to excel.",
        },
        {
          title: "Process Optimization",
          description:
            "Streamline your sales and CX operations for maximum efficiency and customer satisfaction.",
        },
        {
          title: "Metrics & Measurement",
          description:
            "Implement the right KPIs and feedback systems to continuously improve performance.",
        },
      ],
      testimonial: {
        content:
          "Our conversion rates jumped significantly after working with Forward Biz. They know how to turn leads into real growth.",
        author: "Head of Marketing",
        position: "Top Institute, Chennai",
        rating: 4,
        avatar: "H",
        bgColor: "bg-purple-600",
      },
    },
    {
      id: "lead-conversion",
      title: "Lead Conversion Systems",
      subtitle: "Turn more prospects into loyal customers",
      description:
        "Our data-driven lead conversion strategies help you optimize your sales pipeline, improve closing techniques, and maximize revenue from your existing leads.",
      icon: Target,
      color: "teal",
      benefits: [
        "Increase conversion rates by up to 150%",
        "Shorten sales cycles through optimized processes",
        "Recover lost opportunities through strategic re-engagement",
        "Identify high-value prospects for prioritized attention",
      ],
      approach: [
        {
          title: "Funnel Analysis",
          description:
            "Identify conversion bottlenecks and drop-off points throughout your sales process.",
        },
        {
          title: "Messaging Optimization",
          description:
            "Craft compelling value propositions and communication strategies that resonate with prospects.",
        },
        {
          title: "Technology Integration",
          description:
            "Implement the right tools and automations to nurture leads and track performance.",
        },
        {
          title: "Sales Enablement",
          description:
            "Equip your team with proven frameworks and techniques to close more deals effectively.",
        },
      ],
      testimonial: {
        content:
          "They built our inside sales team from scratch and trained them to deliver results fast. A true partner in growth.",
        author: "Founder & CEO",
        position: "SaaS Company, New Delhi",
        rating: 5,
        avatar: "C",
        bgColor: "bg-teal-600",
      },
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "150% Conversion Growth for EdTech Leader",
      description:
        "Transformed lead nurturing processes and sales training to dramatically increase conversion rates.",
      stats: "150% increase in conversion rates, 30% faster sales cycles",
      category: "lead-conversion",
      icon: TrendingUp,
    },
    {
      title: "Executive Team Built for AI Startup",
      description:
        "Recruited a complete leadership team that helped secure Series B funding within 8 months.",
      stats: "7 key executive roles filled, 92% retention after 18 months",
      category: "talent-acquisition",
      icon: Users,
    },
    {
      title: "Customer Experience Transformation",
      description:
        "Redesigned customer journey for a SaaS provider, leading to significant improvements in renewal rates.",
      stats: "40% increase in customer lifetime value, 28% higher NPS",
      category: "sales-leadership",
      icon: Star,
    },
  ];

  // Industries served with icons
  const industries = [
    { name: "Technology & SaaS", icon: Zap },
    { name: "Education & EdTech", icon: Award },
    { name: "Healthcare & Wellness", icon: Briefcase },
    { name: "Finance & FinTech", icon: PieChart },
    { name: "Retail & E-commerce", icon: BarChart4 },
    { name: "Manufacturing", icon: Building },
  ];

  // FAQ items related to services
  const faqItems = [
    {
      question:
        "How do you measure the success of your talent acquisition services?",
      answer:
        "We establish clear KPIs at the outset of our engagement, which typically include time-to-hire, quality-of-hire, retention rates, and hiring manager satisfaction. We provide regular reporting and analysis on these metrics, along with recommendations for continuous improvement. Our success is ultimately measured by the performance and longevity of the talent we help you acquire.",
    },
    {
      question:
        "Can you support our business if we have limited internal HR resources?",
      answer:
        "Absolutely. Many of our clients engage us specifically because they lack robust internal HR teams. We can function as your end-to-end talent acquisition partner, handling everything from job description development to candidate sourcing, screening, and onboarding support. We also provide knowledge transfer to help build your internal capabilities over time.",
    },
    {
      question:
        "What makes your sales and CX approach different from traditional consultants?",
      answer:
        "Unlike traditional consultants who focus solely on theory or strategy, we emphasize practical implementation and measurable results. Our approach integrates talent development with process optimization, ensuring your people have both the skills and systems needed to excel. Additionally, we customize our strategies to your specific industry, market position, and organizational culture rather than applying one-size-fits-all solutions.",
    },
    {
      question:
        "How quickly can we expect to see results from your lead conversion systems?",
      answer:
        "Most clients see initial improvements within 4-6 weeks of implementation. These early gains typically come from optimizing existing processes and quick-win opportunities. More substantial results emerge over 2-3 months as we refine messaging, implement technology solutions, and upskill your team. For comprehensive transformations, we generally work with clients over 6-12 months to ensure sustainable results.",
    },
  ];

  // Engagement models
  const engagementModels = [
    {
      title: "Strategic Consulting",
      description:
        "Comprehensive assessment and strategy development for specific business challenges.",
      timeline: "4-8 weeks",
      deliverables: [
        "Detailed analysis report",
        "Strategic recommendations",
        "Implementation roadmap",
      ],
      icon: MousePointer,
    },
    {
      title: "Implementation Partnership",
      description:
        "Hands-on execution of recommended strategies with your team.",
      timeline: "3-6 months",
      deliverables: [
        "Process optimization",
        "Team training & development",
        "Regular progress reporting",
      ],
      icon: LineChart,
    },
    {
      title: "Retained Advisory",
      description:
        "Ongoing support and guidance for continuous improvement and adaptation.",
      timeline: "12+ months",
      deliverables: [
        "Monthly strategy sessions",
        "Performance analysis",
        "Responsive troubleshooting",
      ],
      icon: MessageSquare,
    },
  ];

  // Animation and scroll handlers
  useEffect(() => {
    setAnimateHero(true);

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

  // Toggle accordion
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Get filtered case studies based on active tab
  const filteredCaseStudies =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeTab);

  // Scroll to testimonials section
  const scrollToTestimonials = (index) => {
    setOpenTestimonial(index);
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Get color classes based on service color
  const getColorClasses = (color, type) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-600",
        bgOpacity: "bg-blue-900 bg-opacity-30",
        border: "border-blue-800 border-opacity-30",
        text: "text-blue-300",
        hover: "hover:border-blue-500 hover:border-opacity-50",
        fill: "group-hover:fill-blue-500",
        stroke: "group-hover:stroke-blue-500",
      },
      purple: {
        bg: "bg-purple-600",
        bgOpacity: "bg-purple-900 bg-opacity-30",
        border: "border-purple-800 border-opacity-30",
        text: "text-purple-300",
        hover: "hover:border-purple-500 hover:border-opacity-50",
        fill: "group-hover:fill-purple-500",
        stroke: "group-hover:stroke-purple-500",
      },
      teal: {
        bg: "bg-teal-600",
        bgOpacity: "bg-teal-900 bg-opacity-30",
        border: "border-teal-800 border-opacity-30",
        text: "text-teal-300",
        hover: "hover:border-teal-500 hover:border-opacity-50",
        fill: "group-hover:fill-teal-500",
        stroke: "group-hover:stroke-teal-500",
      },
    };

    return colorMap[color]?.[type] || colorMap.blue[type];
  };

  // Get active service
  const activeService = services.find((service) => service.id === activeTab);

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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <CirclePattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span
              className={`inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30 transition-all duration-500 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Our Services
            </span>

            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Specialized Solutions for
              <span className="text-blue-400"> Business Growth</span>
            </h1>

            <p
              className={`text-xl text-gray-300 mb-10 transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              We help businesses build high-performing teams and convert more
              leads into revenue with our integrated talent and sales solutions.
            </p>

            {/* Service Tabs */}
            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === service.id
                      ? `${getColorClasses(
                          service.color,
                          "bg"
                        )} text-white shadow-lg`
                      : "bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-opacity-70"
                  }`}
                >
                  <service.icon size={16} />
                  <span>{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service showcase */}
          <div
            className={`mt-16 transition-all duration-1000 ${
              animateHero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Service details */}
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${getColorClasses(
                      activeService.color,
                      "bgOpacity"
                    )} ${getColorClasses(
                      activeService.color,
                      "border"
                    )} flex items-center justify-center backdrop-blur-sm`}
                  >
                    <activeService.icon
                      size={24}
                      className={getColorClasses(activeService.color, "text")}
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {activeService.title}
                  </h2>
                </div>

                <h3 className="text-xl font-medium text-gray-200 mb-6">
                  {activeService.subtitle}
                </h3>
                <p className="text-gray-300 mb-8">
                  {activeService.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Benefits
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full ${getColorClasses(
                            activeService.color,
                            "bg"
                          )} flex-shrink-0 flex items-center justify-center mt-0.5`}
                        >
                          <Check size={14} className="text-white" />
                        </div>
                        <p className="text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className={`px-6 py-3 ${getColorClasses(
                      activeService.color,
                      "bg"
                    )} hover:bg-opacity-90 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:translate-y-[-2px] group`}
                  >
                    <span>Schedule a Consultation</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:ml-3 transition-all duration-300"
                    />
                  </a>
                  <button
                    onClick={() =>
                      scrollToTestimonials(
                        services.findIndex((s) => s.id === activeTab)
                      )
                    }
                    className="px-6 py-3 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center"
                  >
                    <span>See Success Stories</span>
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Approach/Process */}
              <div className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 border-opacity-50">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Clock
                    size={20}
                    className={`mr-2 ${getColorClasses(
                      activeService.color,
                      "text"
                    )}`}
                  />
                  Our Approach
                </h4>

                <div className="space-y-6">
                  {activeService.approach.map((step, index) => (
                    <div key={index} className="relative pl-12">
                      {/* Connecting line */}
                      {index < activeService.approach.length - 1 && (
                        <div
                          className={`absolute top-8 bottom-0 left-4 w-0.5 ${getColorClasses(
                            activeService.color,
                            "bg"
                          )} bg-opacity-30`}
                        ></div>
                      )}

                      {/* Step number */}
                      <div
                        className={`absolute top-0 left-0 w-8 h-8 rounded-full ${getColorClasses(
                          activeService.color,
                          "bg"
                        )} flex items-center justify-center text-white font-semibold text-sm`}
                      >
                        {index + 1}
                      </div>

                      <div>
                        <h5 className="text-lg font-medium text-white mb-2">
                          {step.title}
                        </h5>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="py-24 relative bg-gray-950 bg-opacity-50"
      >
        <DotPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how our specialized services have helped businesses
              achieve remarkable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => {
              const serviceData = services.find((s) => s.id === study.category);
              const color = serviceData?.color || "blue";

              return (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl border border-gray-700 border-opacity-50 p-8 hover:shadow-lg transition-all duration-300 group animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${getColorClasses(
                      color,
                      "bgOpacity"
                    )} ${getColorClasses(
                      color,
                      "border"
                    )} flex items-center justify-center mb-6`}
                  >
                    <study.icon
                      size={24}
                      className={getColorClasses(color, "text")}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{study.description}</p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full ${getColorClasses(
                      color,
                      "bgOpacity"
                    )} ${getColorClasses(
                      color,
                      "text"
                    )} text-sm backdrop-blur-sm ${getColorClasses(
                      color,
                      "border"
                    )}`}
                  >
                    {study.stats}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 relative">
        <GridPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Working Together
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engagement Models
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible partnership approaches designed to meet your specific
              needs and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl border border-gray-700 border-opacity-50 p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-500 hover:border-opacity-20 animate-on-scroll opacity-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-blue-900 bg-opacity-30 border border-blue-800 border-opacity-30 flex items-center justify-center mb-6">
                  <model.icon size={24} className="text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {model.title}
                </h3>
                <div className="text-sm text-blue-300 mb-4 flex items-center">
                  <Clock size={14} className="mr-1" />
                  {model.timeline}
                </div>
                <p className="text-gray-300 mb-6">{model.description}</p>

                <h4 className="text-sm font-semibold text-white mb-3">
                  Key Deliverables:
                </h4>
                <ul className="space-y-2">
                  {model.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-blue-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative bg-gray-950 bg-opacity-50">
        <DotPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Industries
            </span>
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
              <div
                key={index}
                className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 border-opacity-50 hover:border-blue-500 hover:border-opacity-30 transition-all duration-300 group animate-on-scroll opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900 bg-opacity-30 backdrop-blur-sm flex items-center justify-center mb-4 border border-blue-800 border-opacity-30 group-hover:border-blue-500 group-hover:border-opacity-50 transition-all duration-300">
                    <industry.icon
                      size={24}
                      className="text-blue-300 group-hover:text-blue-400 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        id="testimonials"
        className="py-24 relative"
      >
        <GridPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl border border-gray-700 border-opacity-50 overflow-hidden transition-all duration-500 animate-on-scroll opacity-0 ${
                  openTestimonial === index
                    ? "ring-2 ring-offset-2 ring-offset-gray-900"
                    : ""
                } ${getColorClasses(service.color, "hover")}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`${
                    openTestimonial === index
                      ? getColorClasses(service.color, "bg")
                      : "bg-gray-800"
                  } bg-opacity-50 p-4 flex justify-between items-center transition-colors duration-300`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full ${service.testimonial.bgColor} flex items-center justify-center text-white font-medium mr-3`}
                    >
                      {service.testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">
                        {service.testimonial.author}
                      </div>
                      <div className="text-xs text-gray-400">
                        {service.testimonial.position}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setOpenTestimonial(
                        openTestimonial === index ? null : index
                      )
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {openTestimonial === index ? (
                      <X size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openTestimonial === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6">
                    {/* Star Rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={
                            i < service.testimonial.rating ? "#facc15" : "none"
                          }
                          className={
                            i < service.testimonial.rating
                              ? "text-yellow-400 mr-1"
                              : "text-gray-600 mr-1"
                          }
                        />
                      ))}
                    </div>

                    <p className="text-gray-300">
                      "{service.testimonial.content}"
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-700 border-opacity-30">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    onClick={() =>
                      setOpenTestimonial(
                        openTestimonial === index ? null : index
                      )
                    }
                    className={`mt-4 inline-flex items-center text-sm ${getColorClasses(
                      service.color,
                      "text"
                    )} font-medium transition-all duration-300`}
                  >
                    {openTestimonial === index
                      ? "Show less"
                      : "Read testimonial"}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${
                        openTestimonial === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-gray-950 bg-opacity-50">
        <DotPattern />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 animate-on-scroll opacity-0">
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
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 relative">
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today to discuss how our specialized services can
                help you build high-performing teams and convert more leads into
                revenue.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-800 bg-opacity-50 flex items-center justify-center text-blue-300 border border-blue-700 border-opacity-50 mt-1">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                    <a
                      href="tel:+911234567890"
                      className="text-blue-200 hover:text-white hover:underline"
                    >
                      +91 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-800 bg-opacity-50 flex items-center justify-center text-blue-300 border border-blue-700 border-opacity-50 mt-1">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <a
                      href="mailto:info@forwardbiz.com"
                      className="text-blue-200 hover:text-white hover:underline"
                    >
                      info@forwardbiz.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Request a Free Consultation
                </h3>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 backdrop-blur-sm border border-blue-700 border-opacity-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-blue-300 placeholder-opacity-60"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 backdrop-blur-sm border border-blue-700 border-opacity-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30 focus:outline-none rounded-lg text-white placeholder-blue-300 placeholder-opacity-60"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Service of Interest
                    </label>
                    <select className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 backdrop-blur-sm border border-blue-700 border-opacity-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30 focus:outline-none rounded-lg text-white">
                      <option value="" className="bg-gray-800">
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option
                          key={service.id}
                          value={service.id}
                          className="bg-gray-800"
                        >
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-blue-700 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </form>
              </div>
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
