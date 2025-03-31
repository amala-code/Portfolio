

"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ClientLogos from "../components/ClientLogos"
import ServicesSection from "../components/ServicesSection"
import Testimonials from "../components/Testimonials"
import "../styles/Home.css"

function Home() {
  useEffect(() => {
    // Animation for elements to fade in on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.1 },
    )

    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="home-container">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="profile-container hidden">
            <div className="profile-image">
              <img src="/images/nn.png" alt="Profile" />
            </div>
            <div className="name-tag">
              <span>Nikhil Joseph</span>
            </div>
          </div>

          <div className="hero-content hidden">
            <h1>
              Weaving words that touch hearts,              <br />
              build brands, and               <br />
              leave a mark.            </h1>
            <Link to="/blogs" className="cta-button">
              Latest Blogs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>

        {/* Client Logos Section */}
        <ClientLogos />

        {/* Collaborate Section */}
        <section className="collaborate-section hidden">
          <h2>
            Collaborate with brands and agencies
            <br />
            to create impactful results.
          </h2>

          <div className="services-tag">
            <span>Services</span>
          </div>

          <ServicesSection />
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <section className="contact-section hidden">
          <div className="handshake-icon">
            <img src="/images/hd.png" alt="Handshake" />
          </div>

          <h2>
            Tell me about your next
            <br />
            project
          </h2>

          <div className="contact-buttons">
            {/* <a href="mailto:nikhiljoseph.writes@gmail.com" className="email-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email Me
            </a> */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=workss.nikhiljoseph@gmail.com" 
              target="_blank" 
              className="email-button gmail-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
Email Me            </a>
            <a href="https://wa.me/7441110371" target="_blank" className="whatsapp-button">
              WhatsApp
            </a>
          </div>
          {/* <p className="disclaimer">
            Note: Clicking "Open in Gmail" will open a new Gmail compose window in your browser,
            but this demo won't actually send an email or store any information.
          </p> */}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home