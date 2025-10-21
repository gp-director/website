import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  const stats = [
    { number: 'AI', label: 'Powered' },
    { number: '99.9%', label: 'Uptime' },
    { number: '60%', label: 'Admin Reduction' },
    { number: '24/7', label: 'AI Support' }
  ]

  const products = [
    {
      title: 'Appointment Booking',
      description: 'Seamless online booking system that integrates with your clinic workflow.',
      icon: '📅',
      features: ['Online Booking', 'SMS Reminders', 'Calendar Sync']
    },
    {
      title: 'AI Receptionist',
      description: '24/7 AI-powered receptionist that handles calls, bookings, and patient inquiries.',
      icon: '📞',
      features: ['24/7 Availability', 'Natural Language', 'Call Handling']
    },
    {
      title: 'Roster Management',
      description: 'Intelligent staff scheduling and resource allocation for optimal clinic operations.',
      icon: '👥',
      features: ['Smart Scheduling', 'Resource Allocation', 'Staff Optimization']
    },
    {
      title: 'IT Support',
      description: 'Comprehensive IT support services to keep clinic systems running smoothly 24/7.',
      icon: '🔧',
      features: ['24/7 Support', 'System Monitoring', 'Security Updates']
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'General Practitioner',
      clinic: 'Melbourne Family Clinic',
      content: 'GP Director has transformed our practice. The EHR system is intuitive and the AI receptionist has reduced our admin workload by 60%.',
      rating: 5
    },
    {
      name: 'Mark Thompson',
      role: 'Practice Manager',
      clinic: 'Sydney Medical Centre',
      content: 'The booking system is fantastic. Our patients love the convenience and we\'ve seen a 40% reduction in no-shows.',
      rating: 5
    },
    {
      name: 'Dr. James Chen',
      role: 'Specialist',
      clinic: 'Brisbane Health Hub',
      content: 'The roster management system has optimized our staff scheduling. We\'re now operating at peak efficiency.',
      rating: 5
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1 className="hero-title">
                The Future of <span className="gradient-text">Clinic Management</span> AI-Driven & Medicare-Ready
              </h1>
              <p className="hero-description">
                Transform your healthcare practice with our comprehensive AI-powered solutions.
                From intelligent patient communication to intelligent scheduling, we're revolutionising Australian healthcare delivery.
              </p>
              <div className="hero-buttons">
                <a href="/contact" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary btn-large">
                 Contact Us →
                </button>
                </a>
              </div>
              <div className="hero-trust">
                <div className="stars">
                  {'★'.repeat(5)}
                </div>
                <span>Trusted by Leading Australian clinics</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image"
            >
              <img
                src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=800&h=600&fit=crop"
                alt="Healthcare Technology Dashboard"
                className="dashboard-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="stat-card"
              >
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Comprehensive Healthcare Solutions</h2>
            <p className="section-description">
              Our integrated platform provides everything your clinic needs to deliver exceptional
              patient care while streamlining operations.
            </p>
          </motion.div>

          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="product-card"
              >
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-cta"
          >
            <Link to="/products" className="btn btn-primary btn-large">
              Explore All Products →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="testimonials">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Trusted by Healthcare Professionals</h2>
            <p className="section-description">
              See what our clinic partners are saying about our solutions
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="testimonial-stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-clinic">{testimonial.clinic}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2 className="cta-title">Ready to Transform Your Practice?</h2>
            <p className="cta-description">
              Join hundreds of Australian clinics already using our AI-powered solutions to
              improve patient care and streamline operations.
            </p>
            <div className="cta-buttons">
            <a href="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn btn-secondary btn-large">
              Book Your Demo Today →
            </button>
            </a>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
