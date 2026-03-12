// Hero Section Component
'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function DonateHeroSection({ language }) {
  const content = {
    en: {
      title: 'Make a Donation',
      subtitle: 'Your generosity can bring smiles to many faces'
    },
    bn: {
      title: 'দান করুন',
      subtitle: 'আপনার উদারতা অনেকের মুখে হাসি ফোটাতে পারে'
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-r from-emerald-900 to-emerald-700">
      {/* Decorative star pattern background */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L37 20L58 20L40 33L45 55L30 44L15 55L20 33L2 20L23 20L30 0Z' fill='%23ffffff' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} 
      />
      
      {/* Floating elements for decoration */}
      <div className="absolute top-10 left-10 text-white/20 text-6xl">🌙</div>
      <div className="absolute bottom-10 right-10 text-white/20 text-6xl">⭐</div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heart icon with animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Heart className="w-20 h-20 mx-auto mb-6 text-white/90" fill="currentColor" />
          </motion.div>
          
          {/* Ramadan badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 border border-white/30"
          >
            <span>🌙</span>
            <span>{language === 'en' ? 'Ramadan 1447 AH' : 'রমজান ১৪৪৭ হিজরি'}</span>
            <span>⭐</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            {content[language].title}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            {content[language].subtitle}
          </motion.p>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4 mt-8"
          >
            <span className="text-3xl">🕌</span>
            <span className="text-3xl">🌙</span>
            <span className="text-3xl">⭐</span>
            <span className="text-3xl">✨</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}