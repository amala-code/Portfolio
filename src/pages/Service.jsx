

"use client"

import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicesSection from "../components/ServicesSection"
import Testimonials from "../components/Testimonials"
import "../styles/Home.css"

function Service() {
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

      
      </main>

      <Footer />
    </div>
  )
}

export default Service