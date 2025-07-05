import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Zap, Users, Award, Clock, Target, Globe, Cpu, Cloud, Bitcoin } from 'lucide-react'
import WorldMap from '../components/WorldMap'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'CRAFT',
      description: 'We take pride in the details: from hardware to code to partnerships. Precision isn\'t optional; it\'s how we earn trust.'
    },
    {
      icon: Shield,
      title: 'RESILIENCE',
      description: 'We build for volatility in markets, in energy, in geopolitics. What we make bends, never breaks.'
    },
    {
      icon: Zap,
      title: 'CONVICTION',
      description: 'We don\'t hedge our mission. We believe in what we\'re building and we move with clarity, not consensus.'
    }
  ]

  const timeline = [
    {
      year: 'MAY - 2024',
      title: 'ESTABLISHMENT OF TATARI SYSTEMS',
      description: 'Tatari Systems is founded with a vision to revolutionize Ethiopia\'s economy through cryptocurrency mining, leveraging renewable energy sources and cutting-edge technology.'
    },
    {
      year: 'DEC - 2024',
      title: 'INITIAL FUNDING AND INFRASTRUCTURE SETUP',
      description: 'Secured initial funding of $500,000 USD to set up infrastructure and commence. Tatari Systems lays the foundation for its mining facilities in Ethiopia.'
    }
  ]

  const team = [
    {
      name: 'Alex Dalban',
      role: 'CEO, COO',
      bio: 'Leading Tatari Systems with strategic vision and operational excellence in cryptocurrency mining innovation.',
      image: '👨‍💼'
    },
    {
      name: 'Marcel Boucheseiche',
      role: 'Head of Growth',
      bio: 'Driving expansion and market development strategies for sustainable computing infrastructure.',
      image: '👨‍💼'
    },
    {
      name: 'Yasha Genkin',
      role: 'Head of Marketing',
      bio: 'Crafting compelling narratives around our mission to revolutionize sustainable computing technology.',
      image: '👨‍💼'
    },
    {
      name: 'Al-Amin Mumuney',
      role: 'Head of Innovation',
      bio: 'Pioneering cutting-edge solutions in cryptocurrency mining and sustainable computing infrastructure.',
      image: '👨‍💼'
    },
    {
      name: 'Nathan Banketa',
      role: 'Research Lead',
      bio: 'Leading research initiatives to advance sustainable computing technology and cryptocurrency mining efficiency.',
      image: '👨‍🔬'
    },
    {
      name: 'Kayla Sadraie',
      role: 'Chief Legal Counsel',
      bio: 'Ensuring compliance and legal excellence across our global operations and partnerships.',
      image: '👩‍⚖️'
    },
    {
      name: 'Amen Amare',
      role: 'Operating Partner, Founder',
      bio: 'Co-founding visionary driving the strategic direction and operational excellence of Tatari Systems.',
      image: '👨‍💼'
    },
    {
      name: 'Meba Michael',
      role: 'Head of Finance',
      bio: 'Managing financial strategy and ensuring sustainable growth across all business operations.',
      image: '👩‍💼'
    },
    {
      name: 'Glodi Karagi',
      role: 'Head of Business Development',
      bio: 'Expanding strategic partnerships and business opportunities in emerging markets and technology sectors.',
      image: '👨‍💼'
    },
    {
      name: 'Jimi Oso (EECS)',
      role: 'Head of Phase II + Engineering',
      bio: 'Leading engineering initiatives and Phase II development with expertise in electrical engineering and computer science.',
      image: '👨‍💻'
    },
    {
      name: 'Paul Kolomeyer',
      role: 'Investor Relations Specialist',
      bio: 'Building and maintaining relationships with investors and stakeholders across the financial community.',
      image: '👨‍💼'
    },
    {
      name: 'Mario Bustillos',
      role: 'Strategic Growth Intern',
      bio: 'Supporting strategic initiatives and contributing to Tatari Systems\' growth and development.',
      image: '👨‍🎓'
    }
  ]

  const stats = [
    { icon: Cpu, number: '1000+', label: 'AI Models Trained' },
    { icon: Cloud, number: '50+', label: 'Cloud Partners' },
    { icon: Bitcoin, number: '100%', label: 'Renewable Energy' },
    { icon: Globe, number: '25+', label: 'Countries Served' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white pt-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Illuminated Abstract Shapes
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Powering the Intelligent Future
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Tatari builds intelligent infrastructure for the age of AI and clean energy
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">360+</div>
                <div className="text-sm opacity-90">Global Employees</div>
              </div>
              <div>
                <div className="text-3xl font-bold">7</div>
                <div className="text-sm opacity-90">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm opacity-90">GPUs Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Renewable Energy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center pt-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              About Us
            </h2>
            <p className="text-lg text-brand-secondary leading-relaxed mb-8">
              We're reimagining how the world powers the digital economy. At the nexus of clean energy, AI, and decentralized finance, Tatari builds Green Compute Parks — renewable-powered hubs delivering high-performance compute across the globe.
            </p>
            <p className="text-lg text-brand-secondary leading-relaxed mb-8">
              From training AI models in Africa to mining Bitcoin in hydro-rich zones and offering cloud GPUs to startups in Southeast Asia and Latin America, we convert untapped energy into scalable digital infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-brand-primary mb-4">Our Why</h3>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-primary">
                  <blockquote className="text-lg text-brand-secondary italic mb-4">
                    "We are starting in Ethiopia because the energy there is clean, cheap, and overlooked. This is proof that emerging markets can lead the digital future when given the right infrastructure."
                  </blockquote>
                  <p className="text-sm text-brand-secondary font-medium">
                    — Marcel Boucheseiche, Head of Growth
                  </p>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-brand-primary mb-4">Our Model</h3>
                <p className="text-brand-secondary mb-4">
                  Discover how we turn renewable energy into powerful, flexible infrastructure serving the world's growing digital needs.
                </p>
                <ul className="space-y-3 text-brand-secondary">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span><strong>AI Compute:</strong> High-performance infrastructure for training and deploying large-scale AI models, optimized for speed, cost, and accessibility.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cloud className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Cloud Compute:</strong> Scalable, secure cloud infrastructure designed for fast deployment, data sovereignty, and global accessibility at a fraction of traditional costs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bitcoin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Bitcoin Mining:</strong> Efficient, in-house Bitcoin mining powered entirely by renewable energy, designed to maximize uptime, margins, and sustainability.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <WorldMap />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
              Meet the visionaries behind Tatari Systems, leading the way in cryptocurrency mining innovation. Their expertise and dedication drive our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-brand-primary mb-2">{member.name}</h3>
                <p className="text-brand-secondary font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Milestones & Future
            </h2>
            <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
              Our journey from founding to building the future of sustainable computing infrastructure.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="text-2xl font-bold text-brand-primary mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">{item.title}</h3>
                    <p className="text-brand-secondary">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-brand-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Our Values
            </h2>
            <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
              These core principles guide everything we do at Tatari Systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-4">{value.title}</h3>
                <p className="text-brand-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-secondary-600">
              Numbers that reflect our commitment to sustainable computing
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
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to be part of the sustainable computing revolution? Let's discuss how we can support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg px-8 py-4">
                Get in Touch
              </button>
              <button className="btn-accent text-lg px-8 py-4">
                View Our Infrastructure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 