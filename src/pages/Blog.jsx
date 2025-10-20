import { motion } from 'framer-motion'

function Blog() {
  const blogPosts = [
    {
      title: 'The Future of AI in Australian Healthcare',
      excerpt: 'Explore how artificial intelligence is transforming patient care and clinic operations across Australia.',
      date: 'October 15, 2024',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
    },
    {
      title: 'Medicare Integration Best Practices',
      excerpt: 'Learn how to optimize your Medicare billing and claims process with our comprehensive guide.',
      date: 'October 10, 2024',
      category: 'Billing & Compliance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
    },
    {
      title: 'Reducing No-Shows: Proven Strategies',
      excerpt: 'Discover effective tactics to minimize missed appointments and improve clinic efficiency.',
      date: 'October 5, 2024',
      category: 'Practice Management',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-hero-content"
          >
            <h1 className="page-title">
              Healthcare <span className="gradient-text">Insights</span>
            </h1>
            <p className="page-description">
              Stay updated with the latest trends, best practices, and innovations in healthcare technology
              and practice management.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="blog-card"
              >
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content-inner">
                  <div className="blog-date">{post.date}</div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button className="btn-text">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="blog-cta">
            <p>More articles coming soon! Subscribe to our newsletter to stay updated.</p>
            <button className="btn btn-primary">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
