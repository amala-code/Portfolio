
"use client"

import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/Home.css"

function Contact() {
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
      

        <section className="contact-section-page hidden">
          <div className="handshake-icon">
            <img src="/images/hd.png" alt="Handshake" />
          </div>

          <h2 className="contact-section-page h2">
            Tell me about your next
            <br />
            project
          </h2>

          <div className="contact-buttons">

            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhiljoseph.writes@gmail.com" 
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
        
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact