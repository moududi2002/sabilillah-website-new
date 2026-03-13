// components/ToastPoster.js
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Gift, Star, Moon, Sparkles, Languages } from 'lucide-react'
import Link from 'next/link'

export default function ToastPoster({ language: defaultLanguage = 'bn' }) {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState(defaultLanguage)

  useEffect(() => {
    // ওয়েবসাইট লোড হওয়ার পর টোস্ট পোস্টার দেখানো হবে
    setIsVisible(true)

    // 10 সেকেন্ড পরে টোস্ট পোস্টার অদৃশ্য হয়ে যাবে
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en')
  }

  const t = {
    en: {
      hadith: "The Prophet (ﷺ) said: 'Charity does not decrease wealth.'",
      hadithSource: "(Sahih Muslim 2588)",
      title: "Share in the Rewards",
      message: "You too can be a partner with us in earning blessings this Ramadan.",
      description: "Your donation can bring smiles to orphaned and underprivileged families this Eid.",
      cta: "Donate Now",
      closing: "Give Charity • Earn Rewards • Find Peace",
      languageToggle: "বাংলা"
    },
    bn: {
      hadith: "রাসূল (ﷺ) বলেছেন: 'দান সম্পদ কমায় না।'",
      hadithSource: "(সহিহ মুসলিম ২৫৮৮)",
      title: "সওয়াবের অংশীদার হোন",
      message: "আপনিও আমাদের সাথে শরিক হয়ে সওয়াবের অংশীদার হতে পারেন এই রমজানে।",
      description: "আপনার দান এই ঈদে এতিম ও অসহায় পরিবারের মুখে হাসি ফোটাতে পারে।",
      cta: "দান করুন",
      closing: "দান করুন • সওয়াব অর্জন করুন • শান্তি খুঁজুন",
      languageToggle: "English"
    }
  }

  const currentLang = t[language]

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Toast Poster - Main Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Top Bar with Close and Language Toggle */}
            <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/80 hover:text-white p-2 rounded-full transition-all duration-300 group"
                aria-label="Close"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Language Toggle Button */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/20"
              >
                <Languages size={16} />
                <span>{currentLang.languageToggle}</span>
              </motion.button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            
            {/* Floating Stars */}
            <div className="absolute top-10 right-10 text-yellow-300/30">
              <Star size={40} className="animate-pulse" />
            </div>
            <div className="absolute bottom-10 left-10 text-yellow-300/30">
              <Moon size={40} className="animate-pulse" />
            </div>
            <div className="absolute top-1/2 right-20 text-emerald-300/20">
              <Sparkles size={30} className="animate-spin-slow" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 p-8 md:p-12">
              
              {/* Islamic Pattern Top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-emerald-400 to-teal-400" />
              
              {/* Content Container */}
              <div className="text-center">
                
                {/* Icon */}
                <motion.div
                  key={`icon-${language}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse" />
                    <div className="relative bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full">
                      <Heart className="w-12 h-12 text-white" fill="white" />
                    </div>
                  </div>
                </motion.div>

                {/* Hadith Section */}
                <motion.div
                  key={`hadith-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className={`text-xl md:text-2xl text-white mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {currentLang.hadith}
                    </p>
                    <p className="text-sm text-emerald-200">
                      {currentLang.hadithSource}
                    </p>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  key={`title-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-3xl md:text-4xl font-bold text-white mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}
                >
                  {currentLang.title}
                </motion.h2>

                {/* Message */}
                <motion.p
                  key={`message-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`text-lg md:text-xl text-emerald-100 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}
                >
                  {currentLang.message}
                </motion.p>

                {/* Description */}
                <motion.p
                  key={`description-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`text-base md:text-lg text-emerald-200/90 mb-8 max-w-lg mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}
                >
                  {currentLang.description}
                </motion.p>

                {/* Divider */}
                <motion.div
                  key={`divider-${language}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7 }}
                  className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
                />

                {/* CTA Button */}
                <motion.div
                  key={`cta-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mb-6"
                >
                  <Link href="/donate">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClose}
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>{currentLang.cta}</span>
                      <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Closing Line */}
                <motion.p
                  key={`closing-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className={`text-sm text-emerald-300/80 ${language === 'bn' ? 'font-bengali' : ''}`}
                >
                  {currentLang.closing}
                </motion.p>

                {/* Islamic Pattern Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-emerald-400 to-teal-400" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}