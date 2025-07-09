import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Users, Shield, Globe, Cpu, TrendingUp, CheckCircle, BarChart3, Target, Clock, DollarSign, Zap, Cloud, Server, Database, Lock, Activity, ChevronRight, ChevronLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Lottie from 'lottie-react'
// Animation will be loaded dynamically
const aiAnimation = null

const Story = () => {
  const [currentSubhead, setCurrentSubhead] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [aiAnimationData, setAiAnimationData] = useState(null)
  const [bitcoinAnimationData, setBitcoinAnimationData] = useState(null)
  const aiImageRef = useRef<HTMLDivElement>(null)

  // Load animation data
  useEffect(() => {
    fetch('/animations/aianim.json')
      .then(response => response.json())
      .then(data => setAiAnimationData(data))
      .catch(error => console.error('Error loading AI animation:', error))
    
    fetch('/animations/bitcoinanim.json')
      .then(response => response.json())
      .then(data => setBitcoinAnimationData(data))
      .catch(error => console.error('Error loading Bitcoin animation:', error))
  }, [])

  const subheads = [
    "AI is accelerating everything.",
    "But acceleration isn't always clean.",
    "Most clouds chase scale at any cost. We don't.",
    "Compute that's Faster, Leaner, and Less wasteful to build a future without burning it.",
    "So you can build the future without burning it."
  ]

  const originSlides = [
    {
      title: "The Beginning",
      content: "Founded by industry veterans frustrated by the mismatch between AI demand and traditional cloud pricing models, Tatari's core mission is to democratize access to high-performance, low-carbon compute.",
      color: "from-blue-500 to-blue-600",
      animation: "Mining Animation"
    },
    {
      title: "The Vision",
      content: "We believe that access to powerful compute shouldn't be limited by geography, budget, or infrastructure complexity. Our platform makes it possible for anyone to build the future.",
      color: "from-green-500 to-green-600",
      animation: "Rocket Animation"
    },
    {
      title: "The Future",
      content: "As AI continues to reshape industries, we're building the infrastructure that powers the builders. From startups to enterprises, we're here to accelerate innovation.",
      color: "from-purple-500 to-purple-600",
      animation: "Lightning Animation"
    }
  ]

  const values = [
    {
      number: "01",
      title: "Lean by Design",
      description: "We strip layers, waste, and overhead. Performance comes from subtraction.",
      icon: Zap
    },
    {
      number: "02", 
      title: "No Lock-ins",
      description: "You own your model, your data, your exit path. Always.",
      icon: Lock
    },
    {
      number: "03",
      title: "Every Watt Counts", 
      description: "Efficiency isn't marketing. It's engineering. From Ethiopia to Oregon.",
      icon: Activity
    },
    {
      number: "04",
      title: "Transparency First",
      description: "No surprise bills. No hidden throttling. Just clean compute.",
      icon: Shield
    },
    {
      number: "05",
      title: "Support That Shows Up",
      description: "Real humans. Real help. 3AM included.",
      icon: Users
    },
    {
      number: "06",
      title: "Built for Builders",
      description: "We think like you: test, tune, scale, repeat.",
      icon: Cpu
    }
  ]

  const partners = [
    { name: "OpenAI", logo: "🔵" },
    { name: "Anthropic", logo: "🟣" },
    { name: "Google", logo: "🔴" },
    { name: "Microsoft", logo: "🟦" },
    { name: "Meta", logo: "🔵" },
    { name: "NVIDIA", logo: "🟢" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubhead((prev) => (prev + 1) % subheads.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (aiImageRef.current) {
      const rect = aiImageRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const rotateX = (mousePosition.y - centerY) / 20
      const rotateY = (mousePosition.x - centerX) / 20
      
      aiImageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
  }, [mousePosition])

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                The world is changing fast.
                <br />
                We power what's next.
              </h1>
              
              <div className="h-20 mb-8 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSubhead}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
                  >
                    {subheads[currentSubhead]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <div className="group bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center cursor-pointer">
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer">
                Meet the Team
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
            <div 
              ref={aiImageRef}
              className="w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl border border-primary-500/30 flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ perspective: '1000px' }}
            >
              {aiAnimationData ? (
                <Lottie
                  animationData={aiAnimationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-6xl">🤖</span>
                  </div>
                  <p className="text-white/80 text-lg">AI Technology</p>
                  <p className="text-white/60 text-sm mt-2">Loading Animation...</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Origin Story</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From frustration to innovation. Here's how Tatari Systems came to be.
            </p>
          </motion.div>

          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between"
              >
                <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {originSlides[currentSlide].title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {originSlides[currentSlide].content}
                  </p>
                </div>
                
                <div className="flex-1 flex justify-center lg:justify-end">
                  {currentSlide === 0 && bitcoinAnimationData ? (
                    <div className="w-64 h-64 rounded-2xl flex items-center justify-center">
                      <Lottie
                        animationData={bitcoinAnimationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  ) : (
                    <div className={`w-64 h-64 bg-gradient-to-br ${originSlides[currentSlide].color} rounded-2xl border border-gray-600 flex items-center justify-center shadow-xl`}>
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-4xl">
                            {currentSlide === 0 ? '⛏️' : currentSlide === 1 ? '🚀' : '⚡'}
                          </span>
                        </div>
                        <p className="text-white/80 text-lg">{originSlides[currentSlide].animation}</p>
                        <p className="text-white/60 text-sm mt-2">
                          {currentSlide === 0 ? 'Loading Bitcoin Animation...' : 'Lottie Animation'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + originSlides.length) % originSlides.length)}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <div className="flex space-x-2">
              {originSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary-500 scale-125' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % originSlides.length)}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{value.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the companies shaping the future of AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-700 rounded-2xl p-6 text-center hover:bg-gray-600 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <div className="text-white font-semibold">{partner.name}</div>
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
              Join us in powering the next generation of AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="group bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center cursor-pointer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer">
                Meet the Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Story 