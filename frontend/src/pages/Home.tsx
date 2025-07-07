import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp, Zap, Shield, Globe, Cpu, Cloud, Bitcoin, Users, Award, CheckCircle, AlertTriangle, BarChart3, Target, Clock, DollarSign } from 'lucide-react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/paths'

// CSS for animated hue rotation
const gridHueAnim = `
@keyframes tatariGridHue {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
.tatari-animated-hue {
  animation: tatariGridHue 12s linear infinite;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('tatari-grid-hue-style')) {
  const style = document.createElement('style');
  style.id = 'tatari-grid-hue-style';
  style.innerHTML = gridHueAnim;
  document.head.appendChild(style);
}

// Optimized Animated Grid
const Animated3DGrid = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    let frame = 0
    let rafId
    const animate = () => {
      if (gridRef.current) {
        const rot = Math.sin(frame / 120) * 8
        const scale = 1.08 + Math.sin(frame / 180) * 0.03
        gridRef.current.style.transform = `perspective(900px) rotateX(60deg) rotateZ(${rot}deg) scale(${scale}) translateY(${Math.sin(frame/180)*20}px)`
      }
      frame += 1
      rafId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center" style={{background: 'radial-gradient(ellipse at 50% 60%, #5D90DC33 0%, #000 80%)'}}>
      <svg
        ref={gridRef}
        width="120%"
        height="120%"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto tatari-animated-hue"
        style={{ filter: 'blur(0.5px) drop-shadow(0 0 40px #5D90DC88)', willChange: 'transform' }}
      >
        {/* Vertical lines */}
        {[...Array(18)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={80 + i * 60}
            y1={60}
            x2={80 + i * 60}
            y2={740}
            stroke="#5D90DC"
            strokeWidth="1.5"
            opacity={0.18 + 0.12 * Math.abs(i-9)/9}
          />
        ))}
        {/* Horizontal lines */}
        {[...Array(12)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1={80}
            y1={60 + i * 60}
            x2={1160}
            y2={60 + i * 60}
            stroke="#CFE3FF"
            strokeWidth="1.5"
            opacity={0.13 + 0.13 * Math.abs(i-6)/6}
          />
        ))}
        {/* Diagonal lines for 3D effect */}
        {[...Array(8)].map((_, i) => (
          <line
            key={`d1-${i}`}
            x1={80 + i * 120}
            y1={60}
            x2={320 + i * 80}
            y2={740}
            stroke="#4D6EAC"
            strokeWidth="1.2"
            opacity={0.10}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <line
            key={`d2-${i}`}
            x1={1160 - i * 120}
            y1={60}
            x2={920 - i * 80}
            y2={740}
            stroke="#4D6EAC"
            strokeWidth="1.2"
            opacity={0.10}
          />
        ))}
      </svg>
    </div>
  )
}

const Home = () => {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: "70,000", label: "AI Startups Globally", icon: Users },
    { number: "4.4x", label: "Price Difference", icon: DollarSign },
    { number: "26x", label: "Demand Growth by 2030", icon: TrendingUp },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield }
  ]

  const problems = [
    {
      title: "No Uptime Guarantees",
      description: "Users rent capacity from independent hosts with no overarching contract ensuring service continuity",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Node Instability", 
      description: "Hardware and connection quality vary widely, some community hosts may go offline unexpectedly",
      icon: AlertTriangle,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Energy Loss",
      description: "Smaller data centers have 50-60% overhead for cooling and lighting instead of powering servers",
      icon: AlertTriangle,
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  const solutions = [
    {
      title: "Sourcing",
      description: "Aggregates trusted GPU vendors across marketplaces and private clouds",
      icon: Globe,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Reliability", 
      description: "Guarantees uptime via SLAs, monitors performance, and places workloads by region",
      icon: Shield,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Interface",
      description: "Launches with a white-labeled console UI and roadmap to green infrastructure",
      icon: Cpu,
      color: "from-purple-500 to-purple-600"
    }
  ]

  const competitors = [
    { name: "Vast.ai", price: "$0.89", sla: "No centralized SLA", green: "Host-dependent" },
    { name: "Coreweave", price: "$2.25", sla: "99.9%", green: "Partial clean sourcing" },
    { name: "AWS/GCP", price: "$3.06", sla: "99.9%", green: "Partial REC-backed" },
    { name: "Tatari", price: "$1.80", sla: "99.9%", green: "100% hydroelectric" }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 overflow-hidden">
        <Animated3DGrid />
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          <motion.img
            src={getAssetPath('/assets/tatarilogo.png')}
            alt="Tatari Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 60px #5D90DC)' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-white text-6xl md:text-8xl font-extrabold mb-6 leading-tight" style={{letterSpacing: '-0.03em'}}>
              Powering tomorrow, today.
            </h1>
            <h2 className="text-primary-500 text-2xl md:text-3xl font-bold mb-4">
              Launch your next AI project with Tatari's trusted GPU platform—fast, sustainable, and always available.
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Get started in minutes. No commitments. No hidden fees.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex items-center px-8 py-4 rounded-full border border-white/60 bg-black/60 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white font-semibold text-lg shadow-lg"
            style={{backdropFilter: 'blur(4px)'}}
          >
            <span className="mr-4 text-primary-500">Get Started</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 group-hover:bg-primary-500 group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Struggling to Find Affordable, Reliable AI Compute?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Tatari delivers enterprise-grade GPUs at startup-friendly prices—no more compromises. Get the power you need, when you need it, without breaking the bank.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Price Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">AWS H200</span>
                    <span className="text-red-600 font-bold">$10.6/hr</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">Vast.ai</span>
                    <span className="text-green-600 font-bold">$2.4/hr</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Environmental Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">US Fossil Fuel Data Centers</span>
                    <span className="text-red-600 font-bold">820kg CO₂/MWh</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-semibold">Tatari Hydro-based Compute</span>
                    <span className="text-green-600 font-bold">20kg CO₂/MWh</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Decentralized GPU Complications
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Current solutions fail to deliver both affordability and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <problem.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{problem.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Why Choose Tatari?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Guaranteed uptime, transparent pricing, and green energy—so you can focus on building, not infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{solution.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Carbon Aware Scheduling</h3>
              <p className="text-secondary-600 mb-4">
                Intelligent workload placement and timing can reduce emissions. Choosing low-carbon regions can cut a job's carbon footprint by up to 75%.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-secondary-700">50% of GPUs are idle globally</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-secondary-700">Aggregation unlocks significant capacity</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Reliability Guarantees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Uptime SLA</span>
                  <span className="text-green-600 font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Startup Latency</span>
                  <span className="text-green-600 font-bold">&lt;1 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Success Rate</span>
                  <span className="text-green-600 font-bold">95%+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Compare Your Options
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See how Tatari stacks up on price, reliability, and sustainability—so you can make the best choice for your business.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-secondary-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Provider</th>
                  <th className="px-6 py-4 text-center">Price (H100/hr)</th>
                  <th className="px-6 py-4 text-center">SLA/Uptime</th>
                  <th className="px-6 py-4 text-center">Green Energy</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold">
                      {competitor.name === 'Tatari' ? (
                        <span className="text-primary-600 font-bold">{competitor.name}</span>
                      ) : (
                        competitor.name
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">{competitor.price}</td>
                    <td className="px-6 py-4 text-center">{competitor.sla}</td>
                    <td className="px-6 py-4 text-center">{competitor.green}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Who Is Tatari For?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Tatari is built for teams who need scalable, affordable, and reliable compute—without the headaches of traditional cloud providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">AI/ML Startups</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Need scalable, cost-effective inference & training compute</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Prefer flexible, low-commitment infrastructure</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Academic Labs & Research</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Require access to powerful GPUs for experimentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Value latency and geographic proximity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-secondary-600">
              Know exactly what you'll pay—no surprises, no hidden fees. Just powerful compute at a fair price.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">Wholesale GPU</span>
                <span className="text-secondary-600">$1.00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">Infrastructure & Ops</span>
                <span className="text-secondary-600">$0.30</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">Support & SLA</span>
                <span className="text-secondary-600">$0.10</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">Payment Processing Fees</span>
                <span className="text-secondary-600">$0.10</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg">
                  <span className="font-semibold">Total Cost</span>
                  <span className="text-primary-600 font-bold">$1.50</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary-50 rounded-lg mt-2">
                  <span className="font-semibold">+ 20% Markup</span>
                  <span className="text-secondary-600">$0.30</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg mt-2">
                  <span className="font-semibold">Final Price to User</span>
                  <span className="text-green-600 font-bold text-xl">$1.80</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Building with Tatari Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get instant access to powerful GPUs. Try for free or schedule a demo—no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="group bg-white text-primary-600 hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 