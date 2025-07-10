import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, DollarSign, BookOpen, Sliders, Users } from 'lucide-react';
import Lottie from 'lottie-react';
import Navbar from '../components/Navbar';

const TrainingStack = () => {
  const [gpuAnimationData, setGpuAnimationData] = useState(null);
  const base = (import.meta as any).env?.PROD ? '/TatariSystems' : '';

  useEffect(() => {
    fetch(`${base}/animations/gpu.json`)
      .then(response => response.json())
      .then(data => setGpuAnimationData(data))
      .catch(error => console.error('Error loading GPU animation:', error));
  }, [base]);

  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Breadcrumb */}
        <motion.nav className="text-sm text-gray-400 py-4 px-4 sm:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="hover:underline cursor-pointer">Home</span> /
          <span className="hover:underline cursor-pointer ml-1">Products</span> /
          <span className="ml-1 text-white font-semibold">Training Stack (Coming Soon)</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 py-16 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Left */}
          <motion.div className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Purpose-Built GPU Infrastructure for AI Training Workloads</h1>
            <p className="text-xl text-gray-300 mb-8">Launch large-scale model training in minutes with full control, bare-metal performance, and global scale.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/training-stack/early-access" className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl flex items-center justify-center text-lg">Join Early Access &rarr;</Link>
              <Link to="/company/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center text-lg">Talk to Sales &rarr;</Link>
            </div>
          </motion.div>
          {/* Right: Lottie Animation */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="w-80 h-80 flex items-center justify-center">
              {gpuAnimationData ? (
                <Lottie
                  animationData={gpuAnimationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%', background: 'none' }}
                />
              ) : (
                <span className="text-6xl text-primary-500">[Loading Animation]</span>
              )}
            </div>
          </motion.div>
        </motion.section>

        {/* How It Works */}
        <motion.section className="py-16 px-4 sm:px-8 bg-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700">
              <Cpu className="mx-auto mb-4 h-10 w-10 text-primary-500" />
              <h3 className="text-xl font-bold mb-2">Spin Up in Minutes</h3>
              <p className="text-gray-300">Deploy H100, A100, or H200 training clusters at scale — no queue, no waiting.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700">
              <Sliders className="mx-auto mb-4 h-10 w-10 text-primary-500" />
              <h3 className="text-xl font-bold mb-2">Scale Efficiently</h3>
              <p className="text-gray-300">Add or remove GPU nodes instantly to match your training cycles.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700">
              <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary-500" />
              <h3 className="text-xl font-bold mb-2">Customize Your Stack</h3>
              <p className="text-gray-300">Run your own containers, frameworks, or pre-configured environments.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Tatari? */}
        <motion.section className="py-16 px-4 sm:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The Tatari Training Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-700 flex flex-col items-center">
              <Cpu className="h-10 w-10 text-primary-500 mb-3" />
              <div className="font-bold mb-1">Full GPU Access</div>
              <div className="text-gray-300 text-sm">No virtualization, direct bare-metal performance</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-700 flex flex-col items-center">
              <Zap className="h-10 w-10 text-primary-500 mb-3" />
              <div className="font-bold mb-1">Built for Deep Learning</div>
              <div className="text-gray-300 text-sm">Optimized for PyTorch, JAX, and TensorFlow</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-700 flex flex-col items-center">
              <Globe className="h-10 w-10 text-primary-500 mb-3" />
              <div className="font-bold mb-1">Global Footprint</div>
              <div className="text-gray-300 text-sm">Serve models close to your data sources</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-700 flex flex-col items-center">
              <DollarSign className="h-10 w-10 text-primary-500 mb-3" />
              <div className="font-bold mb-1">Lower TCO</div>
              <div className="text-gray-300 text-sm">Save up to 30% vs. traditional cloud solutions</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section className="py-16 px-4 sm:px-8 bg-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Built for Real Workloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700 transition-transform duration-300">
              <Zap className="mx-auto mb-4 h-10 w-10 text-primary-500" />
              <h3 className="text-xl font-bold mb-2">LLM Training</h3>
              <p className="text-gray-300">Scale transformer models with predictable GPU performance</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700 transition-transform duration-300">
              <Sliders className="mx-auto mb-4 h-10 w-10 text-primary-500" />
              <h3 className="text-xl font-bold mb-2">Fine-Tuning & RLHF</h3>
              <p className="text-gray-300">Customize foundation models with full environment control</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700 transition-transform duration-300">
              <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary-500" />
              <h3 className="text-xl font-bold mb-2">Academic & Scientific Research</h3>
              <p className="text-gray-300">Run repeatable experiments at institutional scale</p>
            </motion.div>
          </div>
          <div className="text-center mt-8 text-gray-400 text-sm">
            Trusted by early-stage startups, labs, and enterprise teams.
          </div>
        </motion.section>

        {/* Where We're Launching (Interactive Map) */}
        <motion.section className="py-16 px-4 sm:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Launching Soon — Globally</h2>
          <div className="flex flex-col items-center">
            {/* World Animation */}
            <WorldAnimation />
          </div>
        </motion.section>

        {/* Testimonial Section */}
        <motion.section className="py-16 px-4 sm:px-8 bg-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">
                {/* Placeholder for logo or name */}
                <Users className="h-10 w-10 text-primary-500" />
              </div>
              <blockquote className="text-xl text-white italic mb-4">
                “We wanted a partner who actually understood model training — Tatari delivered infrastructure that scaled with our ambition.”
              </blockquote>
              <div className="text-gray-400 text-sm mb-2">— Future Customer / AI Researcher</div>
              {/* Option to rotate testimonials in a slider or scroll (placeholder) */}
              <div className="text-gray-500 text-xs">[Testimonial slider coming soon]</div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default TrainingStack;

const WorldAnimation = () => {
  const [worldData, setWorldData] = useState<any>(null);
  const base = (import.meta as any).env?.PROD ? '/TatariSystems' : '';

  useEffect(() => {
    fetch(`${base}/animations/world.json`)
      .then(response => response.json())
      .then(data => setWorldData(data))
      .catch(error => console.error('Error loading world animation:', error));
  }, [base]);

  return (
    <div className="w-[400px] h-[400px] flex items-center justify-center">
      {worldData ? (
        <Lottie
          animationData={worldData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%', background: 'none' }}
        />
      ) : (
        <span className="text-4xl text-primary-500">[Loading World]</span>
      )}
    </div>
  );
}; 