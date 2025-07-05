import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Cpu, Cloud, Bitcoin, Globe } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      })
    }, 3000)
  }

  const services = [
    { value: 'ai-infrastructure', label: 'AI Infrastructure', icon: Cpu },
    { value: 'cloud-solutions', label: 'Cloud Solutions', icon: Cloud },
    { value: 'cryptocurrency-mining', label: 'Cryptocurrency Mining', icon: Bitcoin },
    { value: 'emerging-markets', label: 'Emerging Markets', icon: Globe },
    { value: 'consulting', label: 'Consulting', icon: Send }
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@tatarisystems.com',
      description: 'Get in touch for inquiries and support'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available Monday to Friday, 9 AM - 6 PM EST'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'San Francisco, CA',
      description: 'Main office and operations center'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'We typically respond within one business day'
    }
  ]

  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'Reykjavik',
      country: 'Iceland',
      address: '456 Renewable Way, Reykjavik, Iceland',
      phone: '+354 123 4567'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Innovation Drive, Singapore 018956',
      phone: '+65 1234 5678'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ready to discuss your sustainable computing infrastructure needs? 
              Our team is here to help you scale efficiently while maintaining environmental responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-8"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Reach out to our team for inquiries about sustainable computing infrastructure solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {info.value}
                </p>
                <p className="text-secondary-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 pt-8"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-secondary-600">
              Tell us about your infrastructure needs and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card max-w-2xl mx-auto"
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-secondary-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over-1m">Over $1,000,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="short-term">Short-term (3-6 months)</option>
                      <option value="medium-term">Medium-term (6-12 months)</option>
                      <option value="long-term">Long-term (12+ months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your infrastructure needs, current challenges, and goals..."
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-lg px-8 py-4 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-red-700">There was an error sending your message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-8"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our sustainable computing infrastructure spans across multiple continents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {office.city}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {office.country}
                  </p>
                  <div className="space-y-2 text-sm text-secondary-600">
                    <p>{office.address}</p>
                    <p>{office.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Scale Sustainably?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of sustainable computing. Let's discuss how our infrastructure can power your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule a Call
              </button>
              <button className="btn-accent text-lg px-8 py-4">
                View Our Infrastructure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact 