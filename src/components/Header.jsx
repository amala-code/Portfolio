"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="email">workss.nikhiljoseph@gmail.com</span>
          </Link>
        </div>

        <div className="header-actions">
          <button className="copy-email" onClick={() => navigator.clipboard.writeText("kamran.v.design@gmail.com")}>
            Copy
          </button>

          <button className="cv-button"><a href="/images/cv.pdf" download >

CV</a></button>

          <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
          <Link to="/services">Services</Link>
          </li>
          <li>
          <Link to="/contact">Contact </Link>
          </li>
        </ul>

        <div className="social-links">
        <a href="https://www.linkedin.com/in/nikhil-joseph-5b8888191/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://medium.com/@Nikhil.works" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
          <a href="https://www.instagram.com/insinex_writer08?igsh=MXAzZzd6NDAxMWo1Mg==" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          
        </div>
      </nav>
    </header>
  )
}

export default Header

