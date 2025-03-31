import "../styles/ClientLogos.css"

function ClientLogos() {
  const clients = [
    { name: "Creative Storytelling", logo: "/placeholder.svg?height=50&width=120" },
    { name: "Persuasive Writing", logo: "/placeholder.svg?height=50&width=120" },
    // { name: "Brand Voice Development", logo: "/placeholder.svg?height=50&width=120" },
    { name: "Research Excellence", logo: "/placeholder.svg?height=50&width=120" },
    // { name: "Clarity & Brevity", logo: "/placeholder.svg?height=50&width=120" },
    { name: "SEO Mastery", logo: "/placeholder.svg?height=50&width=120" },
    // { name: "Grammar Precision", logo: "/placeholder.svg?height=50&width=120" },
    { name: "Engaging Content Creation", logo: "/placeholder.svg?height=50&width=120" },



  ]

  // "Creative Storytelling",
  // "SEO Mastery",
  // "Persuasive Writing",
  // "Brand Voice Development",
  // "Emotional Connection",
  // "Engaging Content Creation",
  // "Grammar Precision",
  // "Research Excellence",
  // "Adaptability",
  // "Clarity & Brevity",
  // "Audience Awareness",

  return (
    <section className="client-logos hidden">
      <div className="logos-container">
        {clients.map((client, index) => (
          <div key={index} className="logo-item">
            {/* <img src={client.logo || "/placeholder.svg"} alt={client.name} /> */}
            <p className="ClientName-txt">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientLogos

