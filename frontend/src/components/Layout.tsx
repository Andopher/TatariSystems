import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import SkipLink from './SkipLink'
import ErrorBoundary from './ErrorBoundary'
import Breadcrumb from './Breadcrumb'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <Navbar />
        <Breadcrumb />
        <motion.main 
          id="main-content"
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          role="main"
          aria-label="Main content"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default Layout 