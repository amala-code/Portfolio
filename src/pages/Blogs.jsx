"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Blogs.css"

// Sample blog data with actual links
const blogPosts = [
  {
    id: 1,
    title: "How is AI shaping revenue cycle management in the USA?",
    excerpt: "AI is revolutionizing revenue cycle management in the USA by automating billing, reducing denials, and enhancing financial efficiency.",
    date: "March 1, 2025",
    image: "/images/ai.png",
    category: "AI",
    link: "https://medium.com/@Nikhil.works/how-is-ai-shaping-revenue-cycle-management-in-the-usa-0fb6f83a95dd"
  },
  {
    id: 2,
    title: "Decarbonizing Manufacturing — ESG Audits for a Greener Future",
    excerpt: "Decarbonizing manufacturing through ESG audits helps companies reduce their environmental impact and adopt sustainable practices.",
    date: "March 1, 2025",
    image: "/images/esg.png",
    category: "ESG",
    link: "https://medium.com/@Nikhil.works/decarbonizing-manufacturing-esg-audits-for-a-greener-future-98f0b0197d4d"
  },
  {
    id: 3,
    title: "The Bench That Heard Everything",
    excerpt: "The Bench That Heard Everything—silent, weathered, and witness to countless untold stories.",
    date: "Mar 6, 2025",
    image: "/images/bench.png",
    category: "Life Lessons",
    link: "https://medium.com/@Nikhil.works/the-bench-that-heard-everything-44068d656268"
  },
  {
    id: 4,
    title: "The Sun, The Moon & Me",
    excerpt: "The Sun, The Moon & Me—a journey of light, shadow, and the self caught in between.",
    date: "Mar 6, 2025",
    image: "/images/sun.png",
    category: "Life Lessons",
    link: "https://medium.com/@Nikhil.works/the-sun-the-moon-me-e3f3372392a1"
  },
  {
    id: 5,
    title: "What My Physics Professor Taught Me?",
    excerpt: "What My Physics Professor Taught Me About Authentic Writing—where precision meets creativity, and truth is found in both equations and words.",
    date: "March 20, 2025",
    image: "/images/p.png",
    category: "Writing",
    link: "https://www.linkedin.com/posts/nikhil-joseph-5b8888191_authenticity-in-writing-isnt-just-about-activity-7303449002392350720-d-CK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYpbSsBoLyHNgvFXRfSIeeOsLDWF7yFYBg"
  },
  {
    id: 6,
    title: "Not all advises work!",
    excerpt: "Not All Advice Works!—what guides one person to success might lead another astray, reminding us that wisdom is only as good as its relevance to our journey.",
    date: "March 29, 2025",
    image: "/images/a.png",
    category: "Life Lessons",
    link: "https://www.linkedin.com/posts/nikhil-joseph-5b8888191_careeradvice-personalgrowth-worklifebalance-activity-7309897019064524803-QEfD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYpbSsBoLyHNgvFXRfSIeeOsLDWF7yFYBg"
  },
]

function Blogs() {
  const [filter, setFilter] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const categories = ["All", "ESG", "AI", "Writing", "Life Lessons"]

  useEffect(() => {
    if (filter === "All") {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === filter))
    }
  }, [filter])

  useEffect(() => {
    // Animation for blog cards
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

    const hiddenElements = document.querySelectorAll(".blog-card")
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [filteredPosts])

  // Handle external link clicks
  const handleBlogClick = (e, link) => {
    // If link exists, prevent default behavior and redirect to external link
    if (link) {
      e.preventDefault()
      window.open(link, "_blank") // Opens in a new tab
    }
  }

  return (
    <div className="blogs-container">
      <Header />

      <main className="blogs-main">
        <section className="blogs-hero">
          <h1>Blog & Articles</h1>
          <p>Thoughts, ideas, and insights on design, development, and digital experiences.</p>
        </section>

        <section className="blogs-filter">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="blogs-grid">
          {filteredPosts.map((post) => (
            <Link 
              to={post.link || `/blogs/${post.id}`} 
              key={post.id} 
              className="blog-card"
              onClick={(e) => handleBlogClick(e, post.link)}
            >
              <div className="blog-image">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-date">{post.date}</span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Blogs