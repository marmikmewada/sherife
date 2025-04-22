"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const aboutRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = [
        { id: "home", ref: homeRef },
        { id: "services", ref: servicesRef },
        { id: "portfolio", ref: portfolioRef },
        { id: "about", ref: aboutRef },
        { id: "testimonials", ref: testimonialsRef },
        { id: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current && window.scrollY >= section.ref.current.offsetTop - 100) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionRef) => {
    setIsMenuOpen(false)
    sectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      tags: ["Web App", "React", "Node.js"],
    },
    {
      title: "Health & Fitness App",
      description: "Mobile application for tracking workouts, nutrition, and personal health goals.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      tags: ["Mobile App", "React Native", "Firebase"],
    },
    {
      title: "Corporate Website",
      description: "Modern, responsive website for a multinational corporation with multilingual support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tags: ["Website", "Next.js", "CMS"],
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system with virtual tours and agent dashboards.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
      tags: ["Web App", "Vue.js", "MongoDB"],
    },
    {
      title: "Food Delivery App",
      description: "On-demand food delivery application with real-time order tracking and payment processing.",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop",
      tags: ["Mobile App", "Flutter", "AWS"],
    },
    {
      title: "Educational Platform",
      description: "Online learning management system with video courses, quizzes, and student progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
      tags: ["Web App", "Angular", "Django"],
    },
  ]

  const testimonials = [
    {
      name: "Alex Johnson",
      position: "CEO, TechVentures",
      content:
        "Sherife delivered our company website ahead of schedule and exceeded all our expectations. Her attention to detail and technical expertise are outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
    },
    {
      name: "Maria Garcia",
      position: "Founder, StyleHub",
      content:
        "Working with Sherife was a game-changer for our e-commerce platform. She understood our vision perfectly and implemented features that significantly improved our conversion rates.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
    },
    {
      name: "David Kim",
      position: "Product Manager, HealthTech",
      content:
        "Sherife developed our mobile app with exceptional quality. Her knowledge of both iOS and Android ecosystems ensured a smooth experience for all our users.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Sherife
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", ref: homeRef, id: "home" },
              { name: "Services", ref: servicesRef, id: "services" },
              { name: "Portfolio", ref: portfolioRef, id: "portfolio" },
              { name: "About", ref: aboutRef, id: "about" },
              { name: "Testimonials", ref: testimonialsRef, id: "testimonials" },
              { name: "Contact", ref: contactRef, id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className={`font-medium transition-colors hover:text-teal-600 ${activeSection === item.id ? "text-teal-600" : "text-gray-600"}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <span className="block w-6 h-6 relative">
                <span className="block absolute w-6 h-0.5 bg-current transform rotate-45 top-3"></span>
                <span className="block absolute w-6 h-0.5 bg-current transform -rotate-45 top-3"></span>
              </span>
            ) : (
              <span className="block w-6 h-6 relative">
                <span className="block absolute w-6 h-0.5 bg-current top-2"></span>
                <span className="block absolute w-6 h-0.5 bg-current top-3"></span>
                <span className="block absolute w-6 h-0.5 bg-current top-4"></span>
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                { name: "Home", ref: homeRef, id: "home" },
                { name: "Services", ref: servicesRef, id: "services" },
                { name: "Portfolio", ref: portfolioRef, id: "portfolio" },
                { name: "About", ref: aboutRef, id: "about" },
                { name: "Testimonials", ref: testimonialsRef, id: "testimonials" },
                { name: "Contact", ref: contactRef, id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className={`font-medium text-left py-2 transition-colors hover:text-teal-600 ${activeSection === item.id ? "text-teal-600" : "text-gray-600"}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turning{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">Ideas</span>{" "}
              into Digital Reality
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Professional web and mobile app development services tailored to your business needs. Based in Turkey,
              serving clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg transition-all flex items-center justify-center"
              >
                View My Work <span className="ml-2">→</span>
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="px-8 py-3 border-2 border-teal-500 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                alt="Sherife - Web Developer"
                width={600}
                height={600}
                className="relative z-10 rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive development solutions to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Apps */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-teal-600">&lt;/&gt;</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-600 mb-6">
                Custom web applications built with modern frameworks and technologies to solve your business challenges.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">›</span>
                  <span>Responsive SPA & PWA</span>
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">›</span>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">›</span>
                  <span>CRM & ERP Systems</span>
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">›</span>
                  <span>Custom Dashboards</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors flex items-center"
              >
                Learn More <span className="ml-1">›</span>
              </button>
            </div>

            {/* Mobile Apps */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-cyan-600">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Applications</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">›</span>
                  <span>iOS & Android Apps</span>
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">›</span>
                  <span>Cross-platform Solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">›</span>
                  <span>App Store Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">›</span>
                  <span>Maintenance & Updates</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors flex items-center"
              >
                Learn More <span className="ml-1">›</span>
              </button>
            </div>

            {/* Websites */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-blue-600">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Website Development</h3>
              <p className="text-gray-600 mb-6">
                Beautiful, responsive websites that showcase your brand and drive conversions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">›</span>
                  <span>Corporate Websites</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">›</span>
                  <span>Landing Pages</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">›</span>
                  <span>CMS Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">›</span>
                  <span>SEO Optimization</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
              >
                Learn More <span className="ml-1">›</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent projects and the technologies I've worked with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="text-white flex items-center text-sm">
                          View Details <span className="ml-1">↗</span>
                        </button>
                        <button className="text-white">
                          <span className="text-lg">⚙️</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection(contactRef)}
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-3xl opacity-20 -translate-y-10 translate-x-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop"
                  alt="Sherife - About Me"
                  width={600}
                  height={800}
                  className="relative z-10 rounded-2xl shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hello! I'm Sherife, a passionate web and mobile app developer based in Turkey with over 8 years of
                experience in creating digital solutions for clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I specialize in building modern, responsive, and user-friendly applications that help businesses grow
                and succeed in the digital landscape. My approach combines technical expertise with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying the beautiful Turkish coastline.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "React Native",
                      "Flutter",
                      "Vue.js",
                      "Angular",
                      "TypeScript",
                      "MongoDB",
                      "PostgreSQL",
                      "Firebase",
                      "AWS",
                    ].map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Turkish</span>
                      <span>Native</span>
                    </li>
                    <li className="flex justify-between">
                      <span>English</span>
                      <span>Fluent</span>
                    </li>
                    <li className="flex justify-between">
                      <span>German</span>
                      <span>Intermediate</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Spanish</span>
                      <span>Basic</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => scrollToSection(contactRef)}
                className="px-8 py-3 border-2 border-teal-500 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="mr-4">
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="h-10 w-px bg-gray-200 mx-2"></div>
              <div className="mx-4">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="h-10 w-px bg-gray-200 mx-2"></div>
              <div className="ml-4">
                <div className="text-3xl font-bold text-teal-600">30+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-teal-600 mt-1 mr-4 text-xl">✉️</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:contact@sherife.com"
                        className="text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        contact@sherife.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mt-1 mr-4 text-xl">📞</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+905551234567" className="text-gray-600 hover:text-teal-600 transition-colors">
                        +90 555 123 4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mt-1 mr-4 text-xl">📍</span>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Istanbul, Turkey</p>
                      <p className="text-gray-600">Available for remote work worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM (GMT+3)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM (GMT+3)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-600 text-sm">
                  I'm flexible with scheduling calls across different time zones. Feel free to suggest a time that works
                  for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Sherife
              </span>
              <p className="mt-2 text-gray-400 max-w-md">
                Professional web and mobile app development services. Turning ideas into digital reality.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 mb-2">© {new Date().getFullYear()} Sherife. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <span className="text-xl">⌨️</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <span className="text-xl">🔗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrollY > 500 && (
        <button
          onClick={() => scrollToSection(homeRef)}
          className="fixed bottom-6 right-6 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-colors z-50"
        >
          <span className="block transform rotate-270">↑</span>
        </button>
      )}
    </div>
  )
}
