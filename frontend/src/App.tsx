import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import AIPlatform from './pages/AIPlatform'
import Contact from './pages/Contact'
import BitcoinMining from './pages/About/BitcoinMining'

function App() {
  return (
    <AnimatePresence mode="wait">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-platform" element={<AIPlatform />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/bitcoin-mining" element={<BitcoinMining />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </AnimatePresence>
  )
}

export default App 