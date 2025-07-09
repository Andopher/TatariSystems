import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, CheckCircle, Mail, Users, Shield, DollarSign, MessageSquare, Phone, Building, User, Briefcase } from 'lucide-react'
import Navbar from '../components/Navbar'

const Contact = () => {
  const [selectedForm, setSelectedForm] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    inquiry: '',
    message: '',
    scheduleCall: false,
    // Sales specific
    solution: '',
    computeRequirement: '',
    heardAbout: '',
    // Investor specific
    priorExperience: '',
    investorType: '',
    interest: '',
    // Support specific
    issueType: '',
    urgency: '',
    issueDetail: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactOptions = [
    {
      id: 'sales',
      title: 'Sales Contact Form',
      description: 'For potential customers',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'general',
      title: 'General Contact Form',
      description: 'Quick inquiry / Other',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'support',
      title: 'Support Contact Form',
      description: 'Technical or operational issues',
      icon: Shield,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'investor',
      title: 'Investor Contact Form',
      description: 'Investor interest form',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan', 'Australia',
    'China', 'India', 'Brazil', 'Mexico', 'South Korea', 'Netherlands', 'Switzerland',
    'Sweden', 'Norway', 'Denmark', 'Finland', 'Singapore', 'Israel', 'Other'
  ]

  const heardAboutOptions = [
    'Google Search', 'Social Media', 'Referral', 'Conference/Event', 'Blog/Article', 'Other'
  ]

  const investorTypes = [
    'Individual', 'VC Firm', 'Family Office', 'Angel', 'Other'
  ]

  const issueTypes = [
    'Access Issue', 'API Integration', 'Billing', 'Other'
  ]

  const urgencyLevels = [
    'Low', 'Medium', 'High'
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { type: selectedForm, data: formData })
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setSelectedForm(null)
      setFormData({
        firstName: '', lastName: '', email: '', company: '', country: '',
        inquiry: '', message: '', scheduleCall: false, solution: '',
        computeRequirement: '', heardAbout: '', priorExperience: '',
        investorType: '', interest: '', issueType: '', urgency: '', issueDetail: ''
      })
    }, 3000)
  }

  const renderForm = () => {
    if (!selectedForm) return null

    const option = contactOptions.find(opt => opt.id === selectedForm)

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
          <div className="flex items-center mb-8">
            <div className={`w-12 h-12 bg-gradient-to-br ${option?.color} rounded-full flex items-center justify-center mr-4`}>
              {option?.icon && <option.icon className="h-6 w-6 text-white" />}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{option?.title}</h2>
              <p className="text-gray-300">{option?.description}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Common Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="Enter your work email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company or Organization
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Country
              </label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              >
                <option value="">Select a country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Form-specific fields */}
            {selectedForm === 'sales' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What solution are you interested in? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.solution}
                    onChange={(e) => handleInputChange('solution', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="e.g., GPU clusters, training infrastructure, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Estimated monthly compute requirement or budget? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.computeRequirement}
                    onChange={(e) => handleInputChange('computeRequirement', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="e.g., 1000 GPU hours/month, $50K budget, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you hear about us? *
                  </label>
                  <select
                    required
                    value={formData.heardAbout}
                    onChange={(e) => handleInputChange('heardAbout', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  >
                    <option value="">Select an option</option>
                    {heardAboutOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {selectedForm === 'investor' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Do you have prior experience investing in AI or infrastructure companies? *
                  </label>
                  <select
                    required
                    value={formData.priorExperience}
                    onChange={(e) => handleInputChange('priorExperience', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Are you representing a firm or yourself as an individual investor? *
                  </label>
                  <select
                    required
                    value={formData.investorType}
                    onChange={(e) => handleInputChange('investorType', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  >
                    <option value="">Select an option</option>
                    {investorTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What interests you about Tatari Systems? *
                  </label>
                  <textarea
                    required
                    value={formData.interest}
                    onChange={(e) => handleInputChange('interest', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="Tell us what interests you about our company..."
                  />
                </div>
              </>
            )}

            {selectedForm === 'support' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What type of issue are you experiencing? *
                  </label>
                  <select
                    required
                    value={formData.issueType}
                    onChange={(e) => handleInputChange('issueType', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  >
                    <option value="">Select an issue type</option>
                    {issueTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Urgency level? *
                  </label>
                  <select
                    required
                    value={formData.urgency}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  >
                    <option value="">Select urgency level</option>
                    {urgencyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Please describe your issue in detail. *
                  </label>
                  <textarea
                    required
                    value={formData.issueDetail}
                    onChange={(e) => handleInputChange('issueDetail', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="Please provide detailed information about your issue..."
                  />
                </div>
              </>
            )}

            {selectedForm === 'general' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Inquiry or How can we help? *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Tell us how we can help you..."
                />
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="scheduleCall"
                checked={formData.scheduleCall}
                onChange={(e) => handleInputChange('scheduleCall', e.target.checked)}
                className="w-4 h-4 text-primary-600 bg-gray-700 border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
              />
              <label htmlFor="scheduleCall" className="ml-2 text-sm text-gray-300">
                Schedule a call
              </label>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedForm(null)}
                className="px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Let's Talk Compute
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Talk to our team. Whether you're planning large-scale training, building with bare-metal infrastructure, or exploring partnerships, start here. Telerik-grade compute with a human touch.
            </p>
          </motion.div>

          {!selectedForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-left flex items-center justify-between hover:border-primary-500 transition-colors"
                >
                  <span className="text-white font-medium">Select Contact Type</span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-xl z-50"
                    >
                      {contactOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSelectedForm(option.id)
                            setIsDropdownOpen(false)
                          }}
                          className="w-full px-6 py-4 text-left hover:bg-gray-700 transition-colors flex items-center space-x-4 first:rounded-t-xl last:rounded-b-xl"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${option.color} rounded-full flex items-center justify-center`}>
                            <option.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{option.title}</div>
                            <div className="text-gray-400 text-sm">{option.description}</div>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {renderForm()}
          </AnimatePresence>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              >
                <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-4 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thanks for reaching out. Someone from our team will respond within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default Contact 