import "../styles/ServicesSection.css"

function ServicesSection() {
  const services = [
    {
      icon: "/images/w.png",
      title: "Blog Writing",
      description: "Writing SEO-friendly blog posts to drive website traffic.",
    },
    {
      icon: "/images/wb.png",
      title: "Website Content",
      description: "Crafting clear and engaging content for web pages.",
    },
    {
      icon: "/images/seo.png",
      title: "SEO Content Writing",
      description: "Creating content optimized for search engine ranking.",
    },
    {
      icon: "/images/cp.png",
      title: "Copywriting",
      description: "Writing persuasive content for ads, emails, and sales pages.",
    },
    {
      icon: "/images/t.png",
      title: "Technical Writing",
      description: "Developing user manuals, guides, and documentation.",
    },
    {
      icon: "/images/sm.png",
      title: "Social Media Content",
      description: "Creating engaging posts for social media platforms.",
    },



    {
      icon: "/images/str.png",
      title: "Content Strategy Consultation",
      description: "Offering advice on content planning and SEO.",
    },



    {
      icon: "/images/st.png",
      title: "Scriptwriting for Videos",
      description: "Writing scripts for promotional or explainer videos.",
    },

  ];

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card hidden">
          <div className="service-icon">
            <img src={service.icon || "/placeholder.svg"} alt={service.title} />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesSection

