import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { getAssetPath } from '../utils/paths'

const megaMenus = [
  {
    label: 'Products',
    mainTo: '#',
    content: (
      <div className="flex justify-center gap-6 p-8 min-w-[900px] bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl">
        {['Omni Stack', 'Pricing', 'Training Stack', 'Inference Stack'].map((title) => (
          <div
            key={title}
            className="bg-primary-700 rounded-lg p-6 w-48 h-24 flex items-center justify-center shadow border-2 border-transparent hover:border-white transition-colors duration-200 cursor-pointer"
            onClick={() => {
              const path = `/${title.toLowerCase().replace(/ /g, '-')}`
              window.location.href = path
            }}
          >
            <span className="text-white font-semibold text-lg">{title}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Company',
    mainTo: '/about',
    content: (
      <div className="flex justify-center gap-6 p-8 min-w-[900px] bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl">
        {['Story', 'Team', 'Careers', 'Contact'].map((title) => (
          <div
            key={title}
            className="bg-primary-700 rounded-lg p-6 w-48 h-24 flex items-center justify-center shadow border-2 border-transparent hover:border-white transition-colors duration-200 cursor-pointer"
            onClick={() => {
              const path = `/${title.toLowerCase()}`
              window.location.href = path
            }}
          >
            <span className="text-white font-semibold text-lg">{title}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Learn More',
    mainTo: '#',
    content: (
      <div className="flex justify-center gap-6 p-8 min-w-[900px] bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl">
        {['Blog', 'Press Releases', 'Case Studies'].map((title) => (
          <div
            key={title}
            className="bg-primary-700 rounded-lg p-6 w-48 h-24 flex items-center justify-center shadow border-2 border-transparent hover:border-white transition-colors duration-200 cursor-pointer"
            onClick={() => {
              const path = `/${title.toLowerCase().replace(/ /g, '-')}`
              window.location.href = path
            }}
          >
            <span className="text-white font-semibold text-lg">{title}</span>
          </div>
        ))}
      </div>
    ),
  },
]

const Navbar = () => {
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null)
  const isActive = (path: string) => location.pathname === path

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(label)
  }
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 100)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative w-full">
          {/* Logo */}
          <div className="absolute left-0 top-0 h-full flex items-center">
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              className="no-underline hover:no-underline focus:outline-none flex items-center space-x-3 group"
            >
              <motion.img
                src={getAssetPath('/assets/tatarilogo.png')}
                alt="Tatari Systems Logo"
                className="h-8 w-auto transition-all duration-300 group-hover:scale-105"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-lg font-bold text-white tracking-tight">Tatari</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-6">
              <div
                className="text-base font-medium transition-colors duration-200 text-white/80 hover:text-primary-500 cursor-pointer"
              >
                Home
              </div>
              {megaMenus.map((dropdown) => (
                <div
                  key={dropdown.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(dropdown.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={`text-base font-medium transition-colors duration-200 cursor-pointer ${
                      openDropdown === dropdown.label
                        ? 'text-primary-500 underline underline-offset-4'
                        : 'text-white/80 hover:text-primary-500'
                    }`}
                  >
                    {dropdown.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Invisible right spacer to balance logo */}
          <div className="absolute right-0 top-0 h-full flex items-center" style={{ visibility: 'hidden' }}>
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              className="no-underline hover:no-underline focus:outline-none flex items-center space-x-3 group"
            >
              <motion.img
                src={getAssetPath('/assets/tatarilogo.png')}
                alt="Tatari Systems Logo"
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold">Tatari</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdowns */}
      {megaMenus.map((dropdown) => (
        <motion.div
          key={dropdown.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: openDropdown === dropdown.label ? 1 : 0,
            y: openDropdown === dropdown.label ? 0 : -10,
          }}
          transition={{ duration: 0.2 }}
          className={`fixed top-20 left-0 right-0 flex justify-center z-50 ${
            openDropdown === dropdown.label ? '' : 'pointer-events-none hidden'
          }`}
          onMouseEnter={() => handleMouseEnter(dropdown.label)}
          onMouseLeave={handleMouseLeave}
        >
          {openDropdown === dropdown.label && (
            <div className="navbar-dropdown [&_a]:!no-underline [&_a:hover]:!no-underline [&_a:focus]:!no-underline [&_a:visited]:!no-underline [&_a:active]:!no-underline [&_*]:!no-underline">
              {dropdown.content}
            </div>
          )}
        </motion.div>
      ))}
    </nav>
  )
}

export default Navbar
