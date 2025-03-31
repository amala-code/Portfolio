"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/Testimonials.css"

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)

  const testimonials = [
    {
      "id": 1,
      "name": "Yash Verma",
      "position": "Senior Cloud Platform Engineer",
      "image": "/placeholder.svg?height=60&width=60",
      "text": "Working with you has been a true pleasure. Your skill in crafting compelling narratives, developing authentic characters, and structuring a screenplay that captivates an audience is remarkable."
  },
  {
      "id": 2,
      "name": "BRIC International",
      "position": "Content Director",
      "image": "/placeholder.svg?height=60&width=60",
      "text": "I thought I understood my brand—until you put it into words. Your copy wasn’t just persuasive; it sounded like me at my absolute best. You truly grasped my audience."
  },
  {
      "id": 3,
      "name": "Praful Kothawale",
      "position": "Computer Engineer",
      "image": "/placeholder.svg?height=60&width=60",
      "text": "Your blog has been my quiet guide through countless ups and downs. Whether breaking down complex topics, sharing personal insights, or making me laugh on a tough day, you always resonate."
  }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="testimonials-section hidden">
      <h2>What Clients Say</h2>

      <div className="testimonials-container">
        <div className="testimonials-slider" ref={slideRef}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-slide ${index === currentSlide ? "active" : ""}`}>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
               
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-controls">
          <button className="prev-button" onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
          <button className="next-button" onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

