
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Cpu, Cloud, Bitcoin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'AI Infrastructure', path: '/projects', icon: Cpu },
        { name: 'Cloud Solutions', path: '/projects', icon: Cloud },
        { name: 'Cryptocurrency Mining', path: '/projects', icon: Bitcoin },
        { name: 'Emerging Markets', path: '/projects', icon: Globe }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about', icon: undefined },
        { name: 'Our Projects', path: '/projects', icon: undefined },
        { name: 'Contact', path: '/contact', icon: undefined },
        { name: 'Careers', path: '/careers', icon: undefined }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', path: '/case-studies', icon: undefined },
        { name: 'Documentation', path: '/docs', icon: undefined },
        { name: 'Blog', path: '/blog', icon: undefined },
        { name: 'Support', path: '/support', icon: undefined }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy', icon: undefined },
        { name: 'Terms of Service', path: '/terms', icon: undefined },
        { name: 'Cookie Policy', path: '/cookies', icon: undefined },
        { name: 'GDPR', path: '/gdpr', icon: undefined }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@tatarisystems.com',
      href: 'mailto:info@tatarisystems.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'San Francisco, CA',
      href: '#'
    }
  ]

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-tertiary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="font-bold text-xl">Tatari Systems</span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Powering the future with sustainable high-performance computing solutions. 
                From AI training to cryptocurrency mining, we deliver scalable infrastructure 
                powered by renewable energy.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <info.icon className="h-5 w-5 text-brand-tertiary" />
                    <div>
                      <div className="text-sm font-medium">{info.label}</div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold mb-4 text-white"
                >
                  {section.title}
                </motion.h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 group"
                      >
                        {link.icon && (
                          <link.icon className="h-4 w-4 text-brand-tertiary group-hover:text-white transition-colors duration-300" />
                        )}
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm"
            >
              © {currentYear} Tatari Systems. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span className="text-sm">100% Renewable Energy</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span className="text-sm">Carbon Neutral</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brand-secondary hover:bg-brand-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer 