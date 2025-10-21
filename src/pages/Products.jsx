import { motion } from 'framer-motion'

function Products() {
  const products = [
    {
      id: 'booking',
      title: 'Appointment Booking System',
      subtitle: 'Seamless Patient Scheduling',
      description: 'Transform your appointment management with our intelligent booking system that integrates seamlessly with your existing workflow and provides patients with 24/7 booking convenience.',
      icon: '📅',
      color: 'green',
      features: [
        'Online Patient Portal',
        'Real-time Availability',
        'Automated SMS Reminders',
        'Waitlist Management',
        'Multi-provider Scheduling',
        'Recurring Appointments',
        'Patient Self-Service',
        'Calendar Integration',
        'No-show Prediction',
        'Flexible Time Slots'
      ],
      benefits: [
        '40% reduction in no-shows',
        '24/7 booking availability',
        'Reduced admin workload',
        'Improved patient satisfaction'
      ]
    },
    {
      id: 'ai-receptionist',
      title: 'AI Receptionist',
      subtitle: '24/7 Intelligent Call Handling',
      description: 'Our AI receptionist handles patient calls, schedules appointments, and answers common inquiries using natural language processing, providing round-the-clock support for your practice.',
      icon: '📞',
      color: 'purple',
      features: [
        'Natural Language Processing',
        '24/7 Availability',
        'Appointment Scheduling',
        'Patient Inquiry Handling',
        'Multi-language Support',
        'Call Routing & Transfer',
        'Emergency Call Detection',
        'Patient Authentication',
        'Prescription Refill Requests',
        'Integration with EHR'
      ],
      benefits: [
        'Never miss a patient call',
        'Reduce staff workload',
        'Improve patient experience',
        'Lower operational costs'
      ]
    },
    {
      id: 'roster',
      title: 'Roster Management System',
      subtitle: 'Intelligent Staff Scheduling',
      description: 'Optimize your clinic operations with our AI-powered roster management system that automatically schedules staff, manages resources, and ensures optimal coverage for patient care.',
      icon: '👥',
      color: 'orange',
      features: [
        'AI-Powered Scheduling',
        'Staff Availability Tracking',
        'Skill-Based Assignments',
        'Shift Swapping & Coverage',
        'Compliance Monitoring',
        'Overtime Management',
        'Mobile Staff App',
        'Real-time Notifications',
        'Performance Analytics',
        'Integration with Payroll'
      ],
      benefits: [
        'Optimize staff utilization',
        'Reduce scheduling conflicts',
        'Ensure compliance',
        'Improve work-life balance'
      ]
    }
  ]

  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-hero-content"
          >
            <h1 className="page-title">
              Comprehensive Healthcare <span className="gradient-text">Solutions</span>
            </h1>
            <p className="page-description">
              Discover our complete suite of AI-powered tools designed to transform your clinic operations,
              enhance patient care, and streamline healthcare delivery across Australia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="products-detail">
        <div className="container">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`product-detail ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="product-detail-content">
                <div className={`product-detail-icon ${product.color}`}>
                  <span>{product.icon}</span>
                </div>
                <h2 className="product-detail-title">{product.title}</h2>
                <p className="product-detail-subtitle">{product.subtitle}</p>
                <p className="product-detail-description">{product.description}</p>

                <div className="product-benefits">
                  <h3>Key Benefits:</h3>
                  <div className="benefits-grid">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="benefit-item">
                        <span className="checkmark">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="product-detail-features">
                <div className="features-card">
                  <h3>Features & Capabilities:</h3>
                  <div className="features-list">
                    {product.features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <span className="checkmark">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="integration-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Seamless Integration & Compliance</h2>
            <p className="section-description">
              Our solutions are built to work together seamlessly while maintaining the highest
              standards of security and compliance.
            </p>
          </motion.div>

          <div className="integration-grid">
            {[
              { icon: '🛡️', title: 'Data Compliant', description: 'Built for Australian healthcare standards' },
              { icon: '🔄', title: 'Real-time Sync', description: 'Instant data synchronization across all platforms' },
              { icon: 'AI', title: 'AI-Powered', description: 'Advanced machine learning for intelligent automation' },
              { icon: '💬', title: '24/7 Support', description: 'Round-the-clock technical support and monitoring' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="integration-card"
              >
                <div className="integration-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="cta-title">Start Your Digital Transformation Today</h2>
            <p className="cta-description">
              Book a personalized demo and discover how our solutions can transform your healthcare practice.
            </p>
            <div className="cta-buttons">
            <a href="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn btn-secondary btn-large">
             Book a Demo →
            </button>
            </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products
