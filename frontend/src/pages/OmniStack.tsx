import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Users, Shield, Globe, Cpu, TrendingUp, CheckCircle, BarChart3, Target, Clock, DollarSign, Zap, Cloud, Server, Database, Lock, Activity, MapPin, Building, Rocket, Scale, Map, Mountain, TreePine, Waves, Sun } from 'lucide-react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'

const OmniStack = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [activeBar, setActiveBar] = useState<string | null>('build')
  const [gpuAnimationData, setGpuAnimationData] = useState(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const navigate = useNavigate()

  // Get the base path for GitHub Pages deployment
  const base = (import.meta as any).env?.PROD ? '/TatariSystems' : ''

  // Load animation data
  useEffect(() => {
    fetch(`${base}/animations/techanim.json`)
      .then(response => response.json())
      .then(data => setGpuAnimationData(data))
      .catch(error => console.error('Error loading GPU animation:', error))
  }, [base])

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

  const idealFor = [
    {
      title: "AI Startups",
      description: "Rapid model training without infrastructure lock-in",
      icon: Rocket
    },
    {
      title: "Research Labs",
      description: "High-throughput clusters optimized for SLURM",
      icon: Building
    },
    {
      title: "SMBs scaling AI",
      description: "Enterprise-grade compute with simplicity",
      icon: Scale
    }
  ]

  const trustPoints = [
    {
      title: "No hidden fees",
      description: "Flat hourly pricing; zero egress charges",
      icon: DollarSign
    },
    {
      title: "Commitment optional",
      description: "Pay-as-you-go or volume discounts available",
      icon: CheckCircle
    },
    {
      title: "Built to build",
      description: "Engineered from hands-on mining experience",
      icon: Shield
    }
  ]

  const regions = [
    { name: "North America", status: "active", color: "#153e84", icon: Globe },
    { name: "Europe", status: "active", color: "#153e84", icon: Globe },
    { name: "Asia Pacific", status: "expanding", color: "#507cbb", icon: Globe },
    { name: "South America", status: "planned", color: "#A5ADB8", icon: Globe },
    { name: "Africa", status: "planned", color: "#A5ADB8", icon: Globe }
  ]

  const barChartData = {
    build: {
      title: "Build",
      steps: [
        "Choose your cluster: Bare-metal H100 or A100 (H200 coming soon)",
        "Pick region and scale (1 → 100+ GPUs)",
        "Define your duration and start building"
      ],
      color: "from-blue-500 to-blue-600"
    },
    launch: {
      title: "Launch",
      steps: [
        "Spin up your cluster in under 2 minutes",
        "Access via the console, CLI, or API",
        "Get full GPU performance: no layers, no queues"
      ],
      color: "from-green-500 to-green-600"
    },
    scale: {
      title: "Scale",
      steps: [
        "Grow or shrink your fleet instantly",
        "Scale nodes up/down with one click or command",
        "Billing adjusts in seconds"
      ],
      color: "from-purple-500 to-purple-600"
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Section 1: Hero with Lottie Animation */}
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
                  onClick={() => navigate('/run/compute')}
                >
                  Launch Omni Stack
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div
                  className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => navigate('/company/contact')}
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

      {/* Section 2: The Tatari Edge - Stats Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">The Tatari Edge</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-4">{stat.number}</div>
                <div className="text-gray-300 mb-6">{stat.label}</div>
                <button className="text-primary-400 hover:text-primary-300 font-semibold transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Pricing Comparison Table */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">GPU Pricing Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 rounded-xl text-left text-base">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-3 font-semibold text-gray-100">GPU Type</th>
                  <th className="px-4 py-3 font-semibold text-blue-400"><a href="https://vast.ai" target="_blank" rel="noopener noreferrer">Vast.ai</a></th>
                  <th className="px-4 py-3 font-semibold text-gray-100">AWS</th>
                  <th className="px-4 py-3 font-semibold text-gray-100">CoreWeave</th>
                  <th className="px-4 py-3 font-semibold text-gray-100">Lamda</th>
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-blue-200 font-medium">RTX 5090</td>
                  <td className="px-4 py-3 text-blue-400 font-semibold">$0.69/hr</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-blue-200 font-medium">H200</td>
                  <td className="px-4 py-3 text-blue-400 font-semibold">$2.40/hr</td>
                  <td className="px-4 py-3 text-gray-100">$10.60/hr</td>
                  <td className="px-4 py-3 text-gray-100">$6.31/hr</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-blue-200 font-medium">H100</td>
                  <td className="px-4 py-3 text-blue-400 font-semibold">$1.65/hr</td>
                  <td className="px-4 py-3 text-gray-100">$12.30/hr</td>
                  <td className="px-4 py-3 text-gray-100">$6.16/hr</td>
                  <td className="px-4 py-3 text-gray-100">$3.29/hr</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-blue-200 font-medium">RTX 4090</td>
                  <td className="px-4 py-3 text-blue-400 font-semibold">$0.35/hr</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-blue-200 font-medium">RTX 3090</td>
                  <td className="px-4 py-3 text-blue-400 font-semibold">$0.31/hr</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                  <td className="px-4 py-3 text-gray-400">--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Section 3: Interactive Bar Chart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Build AI → Launch AI → Scale AI</h2>
          </motion.div>

          {/* Interactive Bar Chart */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Bar Chart */}
            <div className="flex-1">
              <div className="flex items-end justify-center space-x-4 h-64">
                {Object.entries(barChartData).map(([key, data], index) => (
                  <motion.div
                    key={key}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveBar(key)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      activeBar === key ? 'z-10' : 'z-0'
                    }`}
                  >
                    <div
                      className={`w-24 bg-gradient-to-b ${data.color} rounded-t-lg transition-all duration-300 ${
                        activeBar === key ? 'h-48' : 'h-32'
                      } ${hoveredSection === key ? 'h-40' : ''}`}
                      onMouseEnter={() => setHoveredSection(key)}
                      onMouseLeave={() => setHoveredSection(null)}
                    />
                    <div className="text-center mt-4">
                      <div className="text-white font-bold text-lg">{data.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content Panel */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                {activeBar && (
                  <motion.div
                    key={activeBar}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">{barChartData[activeBar].title}</h3>
                    <ul className="space-y-4">
                      {barChartData[activeBar].steps.map((step, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-br ${barChartData[activeBar].color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-300">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Features</h2>
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
                className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 transition-all duration-300 border border-gray-700"
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

      {/* Section 5: Ideal For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ideal For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {idealFor.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Trust & Transparency */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Trust & Transparency</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Global Regions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Global Regions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Click on regions to explore our global infrastructure
            </p>
          </motion.div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {regions.map((region, idx) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setHoveredRegion(region.name)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    hoveredRegion === region.name ? 'border-primary-500' : 'border-gray-600'
                  }`}
                  style={{ backgroundColor: region.color }}
                >
                  <div className="text-center">
                    <region.icon className="h-8 w-8 text-white mx-auto mb-2" />
                    <h3 className="text-white font-bold mb-2">{region.name}</h3>
                    <span className="text-white/80 text-sm capitalize">{region.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Footer CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
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
              <button
                onClick={() => navigate('/run/compute')}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center"
              >
                Launch a Training Cluster
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-colors duration-200"
              >
                Talk to Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OmniStack 