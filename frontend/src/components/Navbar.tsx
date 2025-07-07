import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [aboutOpen, setAboutOpen] = useState(false)
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img 
              src="/assets/tatarilogo.png" 
              alt="Tatari Systems Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:scale-105"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
            <span className="text-lg font-bold text-white tracking-tight">Tatari</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-6 relative">
            <Link
              to="/"
              className={`text-base font-medium transition-colors duration-200 ${isActive('/') ? 'text-primary-500 underline underline-offset-4' : 'text-white/80 hover:text-primary-500'}`}
            >
              Home
            </Link>
            <Link
              to="/ai-platform"
              className={`text-base font-medium transition-colors duration-200 ${isActive('/ai-platform') ? 'text-primary-500 underline underline-offset-4' : 'text-white/80 hover:text-primary-500'}`}
            >
              AI Platform
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link
                to="/about"
                className={`text-base font-medium transition-colors duration-200 ${location.pathname.startsWith('/about') ? 'text-primary-500 underline underline-offset-4' : 'text-white/80 hover:text-primary-500'}`}
              >
                About
              </Link>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: aboutOpen ? 1 : 0, y: aboutOpen ? 0 : -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 ${aboutOpen ? '' : 'pointer-events-none'}`}
                style={{ minWidth: '180px' }}
              >
                <Link
                  to="/about/bitcoin-mining"
                  className="block px-5 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors text-base rounded"
                >
                  Bitcoin Mining
                </Link>
              </motion.div>
            </div>
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-primary-500 underline underline-offset-4' : 'text-white/80 hover:text-primary-500'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 