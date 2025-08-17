"use client";
import React, { useState, useEffect } from "react";

export default function FinalAboutUsPage() {
  const [animateHero, setAnimateHero] = useState(false);

  // Team members data with profile images and contact info
  const team = [
    {
      name: "Rajeswari Saravanamurthy",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60",
      avatar: "AS",
      linkedin: "#",
    },
    {
      name: "Priya Mehta",
      role: "Head of Talent Acquisition",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60",
      avatar: "PM",
      linkedin: "#",
    },
    {
      name: "Rohan Verma",
      role: "Lead Sales Strategist",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60",
      avatar: "RV",
      linkedin: "#",
    },
    {
      name: "Neha Kapoor",
      role: "Team Building Specialist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
      avatar: "NK",
      linkedin: "#",
    },
  ];

  // Company values
  const values = [
    {
      title: "Growth-Focused",
      description:
        "We measure our success through the tangible growth of our clients' businesses.",
    },
    {
      title: "Integrity-Driven",
      description:
        "We build relationships on trust, honesty, and transparency in all our dealings.",
    },
    {
      title: "Results-Oriented",
      description:
        "We're obsessed with delivering measurable, impactful results for every client.",
    },
    {
      title: "Future-Ready",
      description:
        "We anticipate trends and prepare businesses for tomorrow's challenges.",
    },
  ];

  // Stats for top section
  const stats = [
    { value: "200+", label: "Businesses Transformed" },
    { value: "2.5K+", label: "Successful Placements" },
    { value: "85%", label: "Average Growth Rate" },
    { value: "92%", label: "Client Retention" },
  ];

  // Industries we serve
  const industries = [
    { name: "Technology & SaaS" },
    { name: "Education & EdTech" },
    { name: "Healthcare & Wellness" },
    { name: "Finance & FinTech" },
    { name: "Retail & E-commerce" },
    { name: "Manufacturing" },
    { name: "Professional Services" },
    { name: "Real Estate" },
  ];

  // Journey milestones (simplified)
  const journey = [
    {
      year: "2017",
      title: "Foundation",
      description:
        "Launched with a vision to bridge talent acquisition and sales conversion.",
    },
    {
      year: "2021",
      title: "Growth",
      description:
        "Expanded nationwide with 100+ transformed businesses across India.",
    },
    {
      year: "2025",
      title: "Leadership",
      description: "Recognized as India's leading business growth consultancy.",
    },
  ];

  // Trigger animation on load
  useEffect(() => {
    setAnimateHero(true);

    // Add animation classes
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
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
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

        <div className="max-w-screen-xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <div
              className={`inline-block px-4 py-1.5 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-800 border-opacity-30 transition-all duration-500 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Our Story
            </div>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              The team <span className="text-blue-400">transforming</span>{" "}
              <br />
              India's business landscape
            </h1>

            <p
              className={`text-xl text-gray-300 max-w-3xl mb-12 transition-all duration-700 ${
                animateHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              We bridge the gap between talent acquisition and business growth,
              building high-performing teams that convert more opportunities
              into revenue.
            </p>
          </div>

          {/* Fullwidth hero image with overlay */}
          <div
            className={`w-full h-[60vh] mt-12 relative rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${
              animateHero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/50 to-purple-900/80"></div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Forward Biz Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-xl max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-100">
                  "To create a new standard for business growth in India by
                  transforming how companies build teams and drive revenue,
                  ensuring talent and sales work as one cohesive system."
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
                  >
                    <span className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center text-xs">
                      ▶
                    </span>
                    <span>Watch our story</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 relative bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From vision to market leader
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Founded in 2017, forwardbiz has grown from a small Delhi-based
              team to a nationwide consultancy transforming how businesses
              approach talent and sales.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-900/50 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0">
              {journey.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row animate-on-scroll opacity-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ transitionDelay: `${200 * index}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-blue-600 transform md:translate-x-[-50%] hidden md:block"></div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    } pl-8 md:pl-0`}
                  >
                    <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/20 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold md:hidden">
                          {milestone.year}
                        </div>
                        <div className="hidden md:block text-blue-400 text-xl font-bold">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white ml-4 md:ml-6">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Profile Photos & LinkedIn */}
      <section id="team" className="py-24 relative">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet the experts
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our specialized team brings decades of combined experience in
              talent acquisition, sales leadership, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group animate-on-scroll opacity-0"
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-800/30 border border-gray-700/20 hover:border-blue-500/30 h-full">
                  {/* Profile photo with gradient overlay */}
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                    {/* LinkedIn icon */}
                    <a
                      href={member.linkedin}
                      className="absolute top-4 right-4 w-8 h-8 bg-blue-600/80 hover:bg-blue-500 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>

                  <div className="p-6 relative">
                    {/* Name and role */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 relative bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Values that drive our success
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our core beliefs shape every aspect of our work and relationships
              with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0"
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:bg-gray-800/30 border border-gray-700/20 hover:border-blue-500/30 h-full group">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 backdrop-blur-sm flex items-center justify-center border border-blue-800/30 mb-6 transition-all duration-300 group-hover:bg-blue-800/40">
                    <span className="text-blue-300 text-xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 relative">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-800 border-opacity-30">
              Industries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who we work with
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expertise spans across multiple sectors, with specialized
              approaches for each industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0"
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/20 hover:border-blue-500/30 transition-all duration-300 h-full group">
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-blue-500/30">
                      <span className="text-blue-400 font-bold">
                        {industry.name[0]}
                      </span>
                    </div>
                    <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats with subtle separator */}
          {/* <div className="mt-20 pt-16 border-t border-gray-800/50 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll opacity-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0"
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="py-24 relative bg-gray-950/50">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-700/20 overflow-hidden animate-on-scroll opacity-0">
            <div className="max-w-3xl mx-auto text-center relative">
              <div className="absolute -top-4 left-0 text-7xl text-blue-500/20">
                "
              </div>
              <div className="absolute -bottom-16 right-0 text-7xl text-blue-500/20">
                "
              </div>

              <p className="text-xl md:text-2xl text-white font-light italic mb-8 relative z-10">
                Working with forwardbiz transformed not just our talent
                acquisition strategy, but our entire approach to growth. Our
                conversion rates increased by 120% in just six months.
              </p>

              <div className="flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                  SK
                </div>
                <div className="text-left">
                  <div className="font-medium text-white">Sanjay Kumar</div>
                  <div className="text-blue-300 text-sm">
                    CEO, TechNova Solutions
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
