import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import AIPlatform from './pages/AIPlatform'
import Contact from './pages/Contact'
import BitcoinMining from './pages/About/BitcoinMining'
import OmniStack from './pages/OmniStack'
import Pricing from './pages/Pricing'
import TrainingStack from './pages/TrainingStack'
import InferenceStack from './pages/InferenceStack'
import Story from './pages/Story'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import PressReleases from './pages/PressReleases'
import CaseStudies from './pages/CaseStudies'

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
          <Route path="/omni-stack" element={<OmniStack />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/training-stack" element={<TrainingStack />} />
          <Route path="/inference-stack" element={<InferenceStack />} />
          <Route path="/story" element={<Story />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </>
    </AnimatePresence>
  )
}

export default App 