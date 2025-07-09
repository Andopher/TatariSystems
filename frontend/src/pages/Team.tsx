import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/paths'
import { Linkedin, User, ExternalLink } from 'lucide-react'

const foundingTeam = [
  { 
    name: 'Amen Amare', 
    role: 'Co-Founder', 
    img: 'amare.jpg',
    linkedin: 'https://linkedin.com/in/amen-amare',
    bio: '/team/amen-amare'
  },
  { 
    name: 'Marcel Boucheseiche', 
    role: 'Co-Founder', 
    img: 'boucheseiche.jpg',
    linkedin: 'https://www.linkedin.com/in/marcelboucheseiche',
    bio: '/team/marcel-boucheseiche'
  },
  { 
    name: 'Meba Michael', 
    role: 'Co-Founder', 
    img: 'michael.jpg',
    linkedin: 'https://linkedin.com/in/meba-michael',
    bio: '/team/meba-michael'
  },
  { 
    name: 'Yasha Genkin', 
    role: 'Co-Founder', 
    img: 'genkin.jpg',
    linkedin: 'https://linkedin.com/in/yasha-genkin',
    bio: '/team/yasha-genkin'
  }
]

const executiveTeam = [
  { 
    name: 'Yasha Genkin', 
    role: 'Chief Marketing Officer (CMO)', 
    img: 'genkin.jpg',
    linkedin: 'https://linkedin.com/in/yasha-genkin',
    bio: '/team/yasha-genkin'
  },
  { 
    name: 'Amen Amare', 
    role: 'Chief Operating Officer (COO), Founder', 
    img: 'amare.jpg',
    linkedin: 'https://linkedin.com/in/amen-amare',
    bio: '/team/amen-amare'
  },
  { 
    name: 'Meba Michael', 
    role: 'Chief Financial Officer (CFO)', 
    img: 'michael.jpg',
    linkedin: 'https://linkedin.com/in/meba-michael',
    bio: '/team/meba-michael'
  },
  { 
    name: 'Marcel Boucheseiche', 
    role: 'Chief Growth Officer (CGO)', 
    img: 'boucheseiche.jpg',
    linkedin: 'https://www.linkedin.com/in/marcelboucheseiche',
    bio: '/team/marcel-boucheseiche'
  }
]

const extendedLeadership = [
  { 
    name: 'Alex Dalban', 
    role: 'Chief Technology Officer (CTO)', 
    img: 'dalban.jpg',
    linkedin: 'https://www.linkedin.com/in/alex-dalban-b484bb233',
    bio: '/team/alex-dalban'
  },
  { 
    name: 'Paul Kolomeyer', 
    role: 'Chief Innovation Officer (CIO)', 
    img: 'kolomeyer.jpg',
    linkedin: 'https://www.linkedin.com/in/paulkolomeyer',
    bio: '/team/paul-kolomeyer'
  },
  { 
    name: 'Jimi Oso', 
    role: 'Chief Engineering Officer', 
    img: 'oso.jpg',
    linkedin: 'https://linkedin.com/in/jimi-oso',
    bio: '/team/jimi-oso'
  }
]

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('')
}

const Team = () => {
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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Meet the visionaries and executives driving Tatari Systems forward. From founding partners to C-level leadership, our team brings decades of combined experience in AI, infrastructure, and innovation.
            </p>
          </motion.div>

          {/* Founding Team */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Founding Team</h2>
              <p className="text-gray-300 text-lg">The original visionaries who started it all</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {foundingTeam.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="mb-4">
                    {member.img ? (
                      <img
                        src={getAssetPath(`/headshots/${member.img}`)}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-500 shadow-lg"
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5D90DC&color=fff&size=256`;
                        }}
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-primary-500 flex items-center justify-center text-4xl font-bold text-white mx-auto">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary-400 font-medium mb-4">{member.role}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
                    >
                      <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <Link
                      to={member.bio}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
                    >
                      <User className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Executive Team */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Executive Team</h2>
              <p className="text-gray-300 text-lg">C-level leadership driving our strategic vision</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executiveTeam.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="mb-4">
                    {member.img ? (
                      <img
                        src={getAssetPath(`/headshots/${member.img}`)}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-500 shadow-lg"
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5D90DC&color=fff&size=256`;
                        }}
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-primary-500 flex items-center justify-center text-4xl font-bold text-white mx-auto">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary-400 font-medium mb-4">{member.role}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
                    >
                      <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <Link
                      to={member.bio}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
                    >
                      <User className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Extended Leadership */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Extended Leadership</h2>
              <p className="text-gray-300 text-lg">Senior leaders driving innovation and execution</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedLeadership.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="mb-4">
                    {member.img ? (
                      <img
                        src={getAssetPath(`/headshots/${member.img}`)}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-500 shadow-lg"
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5D90DC&color=fff&size=256`;
                        }}
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-primary-500 flex items-center justify-center text-4xl font-bold text-white mx-auto">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary-400 font-medium mb-4">{member.role}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
                    >
                      <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <Link
                      to={member.bio}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
                    >
                      <User className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-primary-100 mb-6">
              We're always looking for talented individuals who share our vision of democratizing AI compute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  )
}

export default Team 