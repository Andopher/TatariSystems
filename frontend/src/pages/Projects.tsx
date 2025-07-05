import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Cpu, Cloud, Bitcoin, Globe, Zap, Users, Award } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  client: string
  duration: string
  impact: string
  details: string
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Training Infrastructure",
      category: "ai",
      description: "Built a 1000+ GPU cluster for AI model training, reducing training time by 70% while using 100% renewable energy.",
      image: "🤖",
      technologies: ["GPU Clusters", "TensorFlow", "PyTorch", "Renewable Energy"],
      client: "TechCorp AI",
      duration: "6 months",
      impact: "70% faster training, 100% renewable energy",
      details: "Designed and deployed a massive GPU infrastructure for AI model training. The facility processes over 1000 AI models annually while maintaining carbon-neutral operations through solar and wind energy integration."
    },
    {
      id: 2,
      title: "Cloud Service Provider Platform",
      category: "cloud",
      description: "Developed scalable cloud infrastructure serving 50+ enterprise clients with 99.9% uptime guarantee.",
      image: "☁️",
      technologies: ["Kubernetes", "Docker", "AWS", "Load Balancing"],
      client: "CloudScale Inc",
      duration: "8 months",
      impact: "50+ enterprise clients, 99.9% uptime",
      details: "Created a comprehensive cloud platform that enables service providers to offer reliable cloud services. The infrastructure supports auto-scaling, load balancing, and comprehensive monitoring systems."
    },
    {
      id: 3,
      title: "Sustainable Bitcoin Mining Facility",
      category: "mining",
      description: "Established a 100% renewable energy-powered Bitcoin mining operation in Iceland, reducing carbon footprint by 95%.",
      image: "⛏️",
      technologies: ["Bitcoin Mining", "Renewable Energy", "Geothermal", "ASIC Hardware"],
      client: "GreenMining Ltd",
      duration: "12 months",
      impact: "95% carbon reduction, 100% renewable energy",
      details: "Built a state-of-the-art Bitcoin mining facility powered entirely by geothermal and hydroelectric energy. The facility processes over 100 PH/s while maintaining environmental responsibility."
    },
    {
      id: 4,
      title: "Emerging Markets Data Center",
      category: "emerging",
      description: "Deployed sustainable computing infrastructure in emerging markets, enabling local technology development.",
      image: "🌍",
      technologies: ["Local Infrastructure", "Renewable Energy", "Edge Computing", "5G"],
      client: "GlobalTech Solutions",
      duration: "10 months",
      impact: "25+ countries served, local job creation",
      details: "Established sustainable computing facilities in emerging markets, providing local businesses with access to advanced technology infrastructure while creating employment opportunities."
    },
    {
      id: 5,
      title: "High-Performance Computing Cluster",
      category: "ai",
      description: "Designed and implemented a supercomputing cluster for scientific research and AI development.",
      image: "⚡",
      technologies: ["HPC", "MPI", "CUDA", "InfiniBand"],
      client: "Research Institute",
      duration: "9 months",
      impact: "10x performance improvement, energy efficient",
      details: "Built a high-performance computing cluster optimized for scientific research and AI development. The system achieves 10x performance improvement while maintaining energy efficiency through advanced cooling systems."
    },
    {
      id: 6,
      title: "Edge Computing Network",
      category: "cloud",
      description: "Deployed edge computing infrastructure across multiple locations for low-latency applications.",
      image: "📡",
      technologies: ["Edge Computing", "5G", "IoT", "Microservices"],
      client: "EdgeNet Solutions",
      duration: "7 months",
      impact: "50% latency reduction, global coverage",
      details: "Implemented a distributed edge computing network that reduces latency by 50% while providing global coverage. The network supports IoT applications and real-time data processing."
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects', icon: Award },
    { key: 'ai', label: 'AI Infrastructure', icon: Cpu },
    { key: 'cloud', label: 'Cloud Solutions', icon: Cloud },
    { key: 'mining', label: 'Cryptocurrency Mining', icon: Bitcoin },
    { key: 'emerging', label: 'Emerging Markets', icon: Globe }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
              Our Infrastructure Projects
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover how we're building the future of sustainable computing infrastructure. 
              From AI training facilities to renewable energy-powered data centers, 
              our projects demonstrate the power of technology and environmental responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon className="h-5 w-5" />
                <span className="font-medium">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50">
        <div className="max-w-7xl mx-auto pt-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-secondary-500">
                    <span>{project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-sm font-medium text-green-800 mb-1">Impact</div>
                    <div className="text-sm text-green-700">{project.impact}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Project Impact
            </h2>
            <p className="text-xl text-secondary-600">
              Our infrastructure projects have created significant value for our clients and the environment
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, number: "1000+", label: "AI Models Trained" },
              { icon: Cloud, number: "50+", label: "Cloud Partners" },
              { icon: Bitcoin, number: "100%", label: "Renewable Energy" },
              { icon: Globe, number: "25+", label: "Countries Served" }
            ].map((stat, index) => (
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
              Ready to Build Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our sustainable infrastructure solutions can power your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg px-8 py-4">
                Start a Project
              </button>
              <button className="btn-accent text-lg px-8 py-4">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl">{selectedProject.image}</div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-secondary-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {selectedProject.details}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Client</h3>
                    <p className="text-secondary-600">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Duration</h3>
                    <p className="text-secondary-600">{selectedProject.duration}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-secondary-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Impact</h3>
                  <p className="text-green-700">{selectedProject.impact}</p>
                </div>

                <div className="mt-6 flex gap-4">
                  <button className="btn-primary flex-1">
                    View Case Study
                  </button>
                  <button className="btn-secondary flex-1">
                    Similar Projects
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects 