import "../styles/Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="copyright">© {currentYear} All rights reserved.</div>

        <div className="footer-links">
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
      </div>
    </footer>
  )
}

export default Footer

