import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { ArrowRight, Rocket, Wrench, Globe, Brain, Users, Eye, Mail, Puzzle, Sparkles, CheckCircle } from 'lucide-react'

const Careers = () => {
  const whyTatari = [
    {
      icon: Wrench,
      title: 'High-Impact Work',
      description: "We're not here to maintain the status quo — we're here to reinvent how infrastructure is accessed and deployed. You'll be building real systems for real customers from day one."
    },
    {
      icon: Globe,
      title: 'Global Mission',
      description: 'Our goal is to democratize access to advanced compute. Whether it\'s an AI startup in Nairobi or a lab in Berlin, we exist to empower builders everywhere.'
    },
    {
      icon: Brain,
      title: 'Learn Fast. Build Faster.',
      description: "This isn't a place to wait for permission. You'll have autonomy, fast feedback loops, and the support to scale your ideas."
    },
    {
      icon: Users,
      title: 'Small Team, Big Vision',
      description: 'Work directly with the founding team and own entire domains. Your voice shapes our roadmap.'
    }
  ]

  const roles = [
    'Systems & infrastructure engineers',
    'Cloud & GPU orchestration experts',
    'Growth operators & GTM strategists',
    'Brand and community builders'
  ]

  const tatariWay = [
    'Build like owners',
    'Move with urgency',
    'Obsess over clarity',
    'Never stop learning'
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Careers at Tatari Systems
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-400 mb-6">
              Build the Infrastructure Powering Tomorrow's Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              At Tatari Systems, we're laying the foundation for the future of AI. From high-performance GPU clusters to seamless bare-metal provisioning, we help innovators access the compute they need — when they need it.
            </p>
            <p className="text-lg text-gray-300 font-medium">
              If you're driven by impact, curiosity, and speed, there's a place for you here.
            </p>
          </motion.div>

          {/* Why Tatari Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-primary-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Why Tatari?</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyTatari.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Who We're Looking For Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-primary-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Who We're Looking For</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're always on the hunt for sharp thinkers and bold builders. You don't need a perfect resume — just a track record of taking initiative and getting things done.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                We're especially excited about:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roles.map((role, idx) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300">{role}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <p className="text-center text-lg text-gray-300">
              If you're passionate about unlocking what's possible in AI, we want to hear from you.
            </p>
          </motion.section>

          {/* How to Apply Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">How to Apply</h2>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center">
              <p className="text-xl text-white mb-6">
                We're hiring across technical, operational, and creative roles.
              </p>
              <p className="text-primary-100 mb-8 max-w-3xl mx-auto">
                Send us a note at{' '}
                <a href="mailto:careers@tatari.systems" className="text-white font-semibold hover:underline">
                  careers@tatari.systems
                </a>
                . Include anything that shows us who you are: a resume, portfolio, GitHub — or just a few sentences about something hard you've built and why you're excited about Tatari.
              </p>
            </div>
          </motion.section>

          {/* The Tatari Way Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Puzzle className="h-8 w-8 text-primary-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">The Tatari Way</h2>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tatariWay.map((principle, idx) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <span className="text-lg text-gray-300 font-medium">{principle}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-300 mt-8 italic">
                We take our mission seriously — but never take ourselves too seriously.
              </p>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-primary-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Build</h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This is your invitation to join a company at the frontier of compute.
              <br />
              <span className="text-primary-400 font-semibold">Let's build what powers the builders.</span>
            </p>
            
            <motion.a
              href="mailto:careers@tatari.systems"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.section>
        </div>
      </section>
    </div>
  )
}

export default Careers 