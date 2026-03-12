// components/Navbar.js
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Heart, Globe } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'bn' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    // Force re-render of all components by dispatching a custom event
    window.dispatchEvent(new Event('languageChange'))
  }

  // Listen for language changes from other components
  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLang = localStorage.getItem('language') || 'en'
      setLanguage(savedLang)
    }
    
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  if (!mounted) {
    return null // বা একটা skeleton loader দেখাতে পারেন
  }

  const navItems = [
    { name: { en: 'Home', bn: 'হোম' }, href: '/' },
    { name: { en: 'About', bn: 'পরিচিতি' }, href: '/about' },
    { name: { en: 'Projects', bn: 'প্রকল্প' }, href: '/projects' },
    { name: { en: 'Team', bn: 'টিম' }, href: '/team' },
    { name: { en: 'Contact', bn: 'যোগাযোগ' }, href: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
           {/* Logo */}
                <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/Sabilillah Foundation Logo.svg"
                    alt="Sabilillah Foundation Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
            {/* Organization Name */}
                <span className="font-bold text-xl">
                  {language === 'bn' ? 'সাবিলিল্লাহ ফাউন্ডেশন' : 'Sabilillah Foundation'}
                </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {item.name[language]}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-emerald-50 px-3 py-2 rounded-full text-emerald-700 hover:bg-emerald-100 transition"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
            <Link
              href="/donate"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition flex items-center space-x-2"
            >
              <Heart size={18} />
              <span>{language === 'en' ? 'Donate' : 'দান করুন'}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-emerald-50 text-emerald-700"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-emerald-600 text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl p-4"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 hover:bg-emerald-50 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name[language]}
                </Link>
              ))}
              <Link
                href="/donate"
                className="bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-emerald-700 transition flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Heart size={18} />
                <span>{language === 'en' ? 'Donate Now' : 'এখনই দান করুন'}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}