import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Users, Shield, Globe, Cpu, TrendingUp, CheckCircle, BarChart3, Target, Clock, DollarSign, Zap, Cloud, Server, Database, Lock, Activity } from 'lucide-react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
// Animation will be loaded dynamically
const gpuAnimation = null

const OmniStack = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [activeBar, setActiveBar] = useState<string | null>(null)
  const [gpuAnimationData, setGpuAnimationData] = useState(null)

  // Load animation data
  useEffect(() => {
    fetch('/animations/gpuanim.json')
      .then(response => response.json())
      .then(data => setGpuAnimationData(data))
      .catch(error => console.error('Error loading GPU animation:', error))
  }, [])

  const stats = [
    { number: "30%", label: "Savings vs. industry average", icon: TrendingUp },
    { number: "98%", label: "Lower carbon emissions", icon: Shield },
    { number: "0", label: "Fees and unexpected costs", icon: DollarSign }
  ]

  const features = [
    {
      title: "Managed scheduler",
      description: "Plug-and-play SLURM or Kubernetes onboarding",
      icon: Cpu,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Full GPU access",
      description: "No hypervisor overhead; direct hardware control",
      icon: Server,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Shared isn't slow",
      description: "Clusters are yours — fast, isolated",
      icon: Zap,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Global regions",
      description: "Closer to your data, lower latency",
      icon: Globe,
      color: "from-orange-500 to-orange-600"
    }
  ]

  const buildSteps = [
    "Deploy your model in minutes",
    "Scale from 1 to 1000 GPUs",
    "Monitor performance in real-time"
  ]

  const launchSteps = [
    "One-click deployment",
    "Automatic load balancing",
    "Global edge distribution"
  ]

  const scaleSteps = [
    "Auto-scaling based on demand",
    "Cost optimization algorithms",
    "Multi-region redundancy"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar(prev => {
        if (prev === 'Build') return 'Launch'
        if (prev === 'Launch') return 'Scale'
        return 'Build'
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                  The Complete
                  <br />
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                    AI Stack
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  From training to inference, Tatari's Omni Stack gives you everything you need to build, deploy, and scale AI applications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <div
                  className="group bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center cursor-pointer"
                  onClick={() => window.location.href = '/run/compute'}
                >
                  Launch Omni Stack
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div
                  className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => window.location.href = '/company/contact'}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              {gpuAnimationData ? (
                <div className="w-full max-w-md h-96 flex items-center justify-center">
                  <Lottie
                    animationData={gpuAnimationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              ) : (
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl border border-primary-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <Server className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-white/80 text-lg">GPU Clusters Animation</p>
                    <p className="text-white/60 text-sm mt-2">Loading Animation...</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Tatari Edge Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Build AI → Launch AI → Scale AI
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: "Build", steps: buildSteps, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
              { title: "Launch", steps: launchSteps, color: "from-green-500 to-green-600", bgColor: "bg-green-500/10", borderColor: "border-green-500/30" },
              { title: "Scale", steps: scaleSteps, color: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/30" }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredSection(section.title)}
                onHoverEnd={() => setHoveredSection(null)}
                onClick={() => setActiveBar(section.title)}
                className={`relative ${section.bgColor} ${section.borderColor} border rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{section.title[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {section.steps.map((step, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-br ${section.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-300">{step}</span>
                    </motion.li>
                  ))}
                </ul>

                {activeBar === section.title && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="flex space-x-2">
              {['Build', 'Launch', 'Scale'].map((title, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeBar === title ? 'bg-primary-500 scale-125' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Omni Stack?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for the modern AI workflow, from prototype to production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers building the next generation of AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OmniStack 