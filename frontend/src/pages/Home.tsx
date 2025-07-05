import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award, Zap, Cpu, Cloud, Bitcoin, Globe } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#496894"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
              />
            </Sphere>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tatari Systems
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Powering the future with sustainable high-performance computing solutions. 
              From AI training to cryptocurrency mining, we deliver scalable infrastructure powered by renewable energy.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white text-brand-primary hover:bg-gray-50 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Cpu, number: "1000+", label: "AI Models Trained" },
                { icon: Cloud, number: "50+", label: "Cloud Partners" },
                { icon: Bitcoin, number: "100%", label: "Renewable Energy" },
                { icon: Globe, number: "25+", label: "Countries Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-white/80" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Solutions for
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide sustainable, high-performance computing infrastructure for organizations that need to scale efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Companies",
                description: "Organizations requiring high-performance computing resources for training and deploying AI models can utilize Tatari Systems' infrastructure to meet their computational demands.",
                icon: Cpu,
                features: ["GPU Clusters", "Model Training", "Inference Optimization", "Scalable Infrastructure"]
              },
              {
                title: "Cloud Service Providers",
                description: "Tatari Systems provides scalable and efficient cloud computing solutions, enabling service providers to offer reliable cloud services to their customers.",
                icon: Cloud,
                features: ["Infrastructure as a Service", "Load Balancing", "Auto-scaling", "99.9% Uptime"]
              },
              {
                title: "Cryptocurrency Miners",
                description: "Individuals and companies engaged in Bitcoin mining can benefit from Tatari Systems' energy-efficient mining operations, which leverage renewable energy sources to reduce environmental impact.",
                icon: Bitcoin,
                features: ["Renewable Energy", "Cost Optimization", "Mining Pools", "Environmental Compliance"]
              },
              {
                title: "Emerging Markets Enterprises",
                description: "Businesses in emerging markets seeking sustainable and cost-effective technology infrastructure can partner with Tatari Systems to access advanced computing and mining solutions powered by renewable energy.",
                icon: Globe,
                features: ["Local Infrastructure", "Cost-effective Solutions", "Renewable Energy", "Technology Transfer"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-tertiary rounded-full flex items-center justify-center group-hover:bg-brand-secondary transition-colors">
                  <solution.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-tertiary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Why Choose Tatari Systems?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with sustainable practices to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    title: "Sustainable Infrastructure",
                    description: "100% renewable energy-powered facilities reduce environmental impact while maintaining high performance."
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Flexible infrastructure that grows with your business needs, from startups to enterprise."
                  },
                  {
                    title: "Cost Optimization",
                    description: "Efficient resource utilization and renewable energy reduce operational costs significantly."
                  },
                  {
                    title: "Global Reach",
                    description: "Strategic locations worldwide ensure low-latency access and regulatory compliance."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-brand-tertiary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-brand-primary rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-brand-tertiary to-white rounded-2xl p-8">
                <div className="h-full bg-white rounded-xl shadow-lg p-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <h3 className="text-2xl font-bold text-brand-primary mb-4">
                      Sustainable Computing
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Our infrastructure is powered by 100% renewable energy, making high-performance computing environmentally responsible.
                    </p>
                    <div className="space-y-3 text-sm text-neutral-600">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                        Solar & Wind Energy
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                        Carbon Neutral Operations
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                        Energy-Efficient Hardware
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-primary to-brand-secondary">
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
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the future of sustainable computing. Let's discuss how our infrastructure can power your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary hover:bg-gray-50 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300">
                View Our Infrastructure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 