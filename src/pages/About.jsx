import { motion } from 'framer-motion'

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-hero-content"
          >
            <h1 className="page-title">
              About <span className="gradient-text">GP Director</span>
            </h1>
            <p className="page-description">
              We're on a mission to revolutionize Australian healthcare with AI-powered solutions
              that empower clinics to deliver exceptional patient care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-section"
          >
            <h2>Our Story</h2>
            <p>
              Founded by healthcare professionals and technology innovators, GP Director was born
              from a simple observation: Australian healthcare practices needed better tools to manage
              the increasing complexity of modern medicine while maintaining the personal touch that
              defines quality care.
            </p>
            <p>
              Today, we serve over 500 clinics across Australia, helping them streamline operations,
              reduce administrative burden, and focus on what matters most—their patients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-section"
          >
            <h2>Our Mission</h2>
            <p>
              To empower Australian healthcare providers with intelligent, user-friendly technology
              that enhances patient care, streamlines operations, and supports the wellbeing of
              healthcare professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-section"
          >
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🏥</div>
                <h3>Patient-Centric</h3>
                <p>Every feature we build is designed with patient care and safety at its core.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Partnership</h3>
                <p>We work closely with healthcare providers to understand and solve real challenges.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔒</div>
                <h3>Security</h3>
                <p>We maintain the highest standards of data security and privacy compliance.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3>Innovation</h3>
                <p>We continuously evolve our solutions with the latest AI and healthcare technology.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2 className="cta-title">Join Our Growing Community</h2>
            <p className="cta-description">
              Become part of the 500+ Australian clinics transforming healthcare delivery with GP Director.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-secondary btn-large">
                Get Started →
              </button>
              <button className="btn btn-outline-white btn-large">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
