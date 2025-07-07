import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', service: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
          <h1 className="text-4xl font-extrabold text-secondary-900 mb-6">Contact Tatari</h1>
          <p className="text-lg text-secondary-700 mb-8">Ready to discuss your infrastructure needs? Our team is here to help you scale efficiently while maintaining environmental responsibility.</p>
          <form onSubmit={handleSubmit} className="bg-primary-50 rounded-xl p-6 shadow space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Service Interest</label>
              <select name="service" value={form.service} onChange={handleChange} required className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option value="">Select a service</option>
                <option value="ai">AI Platform</option>
                <option value="mining">Bitcoin Mining</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
            </div>
            <button type="submit" className="btn-primary w-full py-3 text-lg font-semibold rounded-lg">Send Message</button>
            {submitted && <div className="text-green-600 text-center font-bold">Message sent! We'll get back to you soon.</div>}
          </form>
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Company Info</h2>
          <div className="mb-2">Email: <a href="mailto:info@tatarisystems.com" className="text-primary-600">info@tatarisystems.com</a></div>
          <div className="mb-2">Phone: <a href="tel:+15551234567" className="text-primary-600">+1 (555) 123-4567</a></div>
          <div className="mb-2">Headquarters: San Francisco, CA</div>
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Global Offices</h2>
          <ul className="space-y-2 text-secondary-700">
            <li>San Francisco, United States</li>
            <li>Reykjavik, Iceland</li>
            <li>Singapore, Singapore</li>
          </ul>
        </motion.section>
      </div>
    </div>
  )
}

export default Contact 