import React from 'react'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

const BitcoinMining = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
        <h1 className="text-3xl font-extrabold text-secondary-900 mb-6">Bitcoin Mining & Sustainability</h1>
        <p className="text-lg text-secondary-700 mb-4">Tatari's approach to Bitcoin mining is rooted in sustainability and environmental responsibility. We prioritize renewable energy sources and regionally optimized deployments to minimize carbon footprint.</p>
        <div className="bg-primary-50 rounded-lg p-6 shadow mb-6">
          <div className="text-2xl font-bold text-primary-600 mb-2">820kg → 20kg</div>
          <div className="text-secondary-700">US fossil fuel-powered data centers emit up to 820 kg CO₂ per MWh, while hydro-based compute like Tatari's planned deployment in Ethiopia emits only ~20 kg CO₂/MWh.</div>
          <div className="text-xs text-secondary-500 mt-2">- International Energy Agency (IEA)</div>
        </div>
        <p className="text-secondary-700 mb-2">By leveraging hydroelectric and other renewables, Tatari ensures that both AI and crypto workloads are as green as possible. Our infrastructure is designed for efficiency, with advanced cooling and power distribution to further reduce energy loss.</p>
        <p className="text-secondary-700">We believe that the future of compute is not just powerful, but also sustainable.</p>
      </motion.section>
    </main>
  </div>
)

export default BitcoinMining 