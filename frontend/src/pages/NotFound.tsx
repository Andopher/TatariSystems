import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-9xl font-bold gradient-text mb-8"
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-secondary-600 mb-8"
          >
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <motion.button
                className="btn-primary flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </motion.button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-secondary-400"
          >
            <p className="text-sm">
              Need help? <Link to="/contact" className="text-primary-600 hover:text-primary-700 underline">
                Contact us
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound 