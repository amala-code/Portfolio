"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/Testimonials.css"

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Yash Verma",
      position: "Senior Cloud Platform Engineer",
      image: "/placeholder.svg?height=60&width=60",
      text: "Working with you has been an absolute pleasure. Your ability to craft compelling narratives, develop authentic characters, and structure a screenplay that holds an audience’s attention is truly remarkable. Every script you write is not just well-paced and engaging but also deeply thoughtful, making it easy for directors and actors to bring your vision to life. Your professionalism, creativity, and attention to detail set you apart, and I look forward to collaborating on future projects.",
    },
    {
      id: 2,
      name: "BRIC International",
      position: "Content Director",
      image: "/placeholder.svg?height=60&width=60",
      text: "I thought I knew what my brand was about—until you put it into words. Your copy wasn’t just persuasive; it felt like me speaking at my absolute best. You understood my audience, my message, and my values in a way I never could, and you transformed them into words that work. Because of you, my brand has a voice that connects, sells, and truly resonates. Your gift for storytelling isn’t just creative—it’s powerful.",
    },
    {
      id: 3,
      name: "Praful Kothawale",
      position: "Computer Engineer",
      image: "/placeholder.svg?height=60&width=60",
      text: "Your blog has been my quiet guide through so many ups and downs. Whether you’re breaking down complex topics, sharing personal insights, or making me laugh on a tough day, your writing always feels like a conversation with a trusted friend. You have a way of making even the simplest ideas feel profound, and I leave every post feeling like I’ve learned something—not just about the topic, but about life. Keep writing. The world needs your words.",
    },
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
                  {/* <div className="author-image">
                    <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  </div> */}
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

