"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/BlogPost.css"

// Sample blog data (same as in Blogs.jsx)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Design",
    excerpt: "Exploring upcoming trends in UI/UX design and how they will shape user experiences.",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Design",
    content: `
      <p>The digital design landscape is constantly evolving, with new trends and technologies emerging at a rapid pace. As we look to the future, several key trends are poised to reshape how we approach design and user experience.</p>
      
      <h2>1. Immersive Experiences</h2>
      <p>Virtual and augmented reality are becoming more accessible, allowing designers to create fully immersive experiences. This shift from 2D to 3D thinking requires a new approach to interaction design and spatial awareness.</p>
      
      <h2>2. Voice User Interfaces</h2>
      <p>As voice assistants become more sophisticated, designing for voice interactions will become increasingly important. This means considering conversation flows, natural language processing, and audio feedback in the design process.</p>
      
      <h2>3. Ethical and Inclusive Design</h2>
      <p>There's a growing awareness of the importance of designing products that are accessible to all users, regardless of ability or background. This includes considerations for color contrast, screen reader compatibility, and cultural sensitivity.</p>
      
      <h2>4. Micro-interactions</h2>
      <p>Small, subtle animations and feedback mechanisms can significantly enhance the user experience by providing context and guidance. These micro-interactions make interfaces feel more responsive and intuitive.</p>
      
      <p>As designers, it's essential to stay ahead of these trends while maintaining a focus on user needs and business goals. The future of digital design is not just about aesthetics but about creating meaningful, accessible, and engaging experiences for all users.</p>
    `,
  },
  {
    id: 2,
    title: "Building Responsive Websites in 2023",
    excerpt: "Best practices for creating websites that work flawlessly across all devices.",
    date: "February 28, 2023",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Development",
    content: `
      <p>Responsive web design has evolved significantly since its inception. In 2023, creating truly responsive websites requires more than just flexible grids and media queries.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Starting with the mobile experience forces designers and developers to focus on the essential elements of a website. This approach ensures that the core functionality works well on smaller screens before being enhanced for larger ones.</p>
      
      <h2>Performance Optimization</h2>
      <p>Page speed is crucial for user experience and SEO. Techniques like lazy loading, code splitting, and image optimization are essential for responsive websites that load quickly on all devices.</p>
      
      <h2>Fluid Typography</h2>
      <p>Using viewport units and calc() functions allows text to scale smoothly between screen sizes, eliminating the need for numerous breakpoints.</p>
      
      <h2>Container Queries</h2>
      <p>While media queries base styles on the viewport size, container queries allow styles to be applied based on the size of a parent container. This provides more flexibility for component-based design systems.</p>
      
      <p>Building responsive websites in 2023 is about creating adaptable, performant experiences that work well across an increasingly diverse range of devices and contexts.</p>
    `,
  },
  // Add more detailed blog posts here
  {
    id: 3,
    title: "The Psychology of Brand Colors",
    excerpt: "How color choices influence user perception and brand recognition.",
    date: "January 20, 2023",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Branding",
    content: `
      <p>Colors evoke emotions and associations that can significantly impact how users perceive a brand. Understanding color psychology is essential for creating effective visual identities.</p>
      
      <h2>Emotional Responses to Colors</h2>
      <p>Different colors trigger different emotional responses. Blue often conveys trust and reliability, while red can evoke excitement or urgency. Green is associated with growth and nature, and purple with luxury and creativity.</p>
      
      <h2>Cultural Considerations</h2>
      <p>Color associations vary across cultures. For example, while white represents purity in Western cultures, it's associated with mourning in some Eastern cultures. These cultural differences must be considered for global brands.</p>
      
      <h2>Color Harmony and Contrast</h2>
      <p>The relationships between colors in a brand palette can create harmony or tension. Complementary colors create vibrant contrasts, while analogous colors create a more harmonious feel.</p>
      
      <p>When developing a brand color strategy, it's important to consider not just aesthetic preferences but also the psychological impact of colors and how they align with the brand's values and messaging.</p>
    `,
  },
]

function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find((post) => post.id === Number.parseInt(id))
    setPost(currentPost)

    // Find related posts (same category, excluding current)
    if (currentPost) {
      const related = blogPosts
        .filter((p) => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3)
      setRelatedPosts(related)
    }

    // Scroll to top when post changes
    window.scrollTo(0, 0)
  }, [id])

  if (!post) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="blog-post-container">
      <Header />

      <main className="blog-post-main">
        <div className="blog-post-header">
          <span className="blog-post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <span className="blog-post-date">{post.date}</span>
        </div>

        <div className="blog-post-image">
          <img src={post.image || "/placeholder.svg"} alt={post.title} />
        </div>

        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <h3>Related Articles</h3>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <Link to={`/blogs/${relatedPost.id}`} key={relatedPost.id} className="related-post-card">
                  <div className="related-post-image">
                    <img src={relatedPost.image || "/placeholder.svg"} alt={relatedPost.title} />
                  </div>
                  <h4>{relatedPost.title}</h4>
                  <span className="related-post-date">{relatedPost.date}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default BlogPost

