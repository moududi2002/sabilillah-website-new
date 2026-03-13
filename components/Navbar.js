// components/Navbar.js
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Heart, Globe } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

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
    window.dispatchEvent(new Event('languageChange'))
  }

  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLang = localStorage.getItem('language') || 'en'
      setLanguage(savedLang)
    }
    
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  if (!mounted) {
    return null
  }

  const navItems = [
    { name: { en: 'Home', bn: 'হোম' }, href: '/' },
    { name: { en: 'About', bn: 'পরিচিতি' }, href: '/about' },
    { name: { en: 'Projects', bn: 'প্রকল্প' }, href: '/projects' },
    { name: { en: 'Team', bn: 'টিম' }, href: '/team' },
    { name: { en: 'Contact', bn: 'যোগাযোগ' }, href: '/contact' },
    { 
      name: { en: 'Ramadan Package 2026', bn: 'রমজান প্যাকেজ ২০২৬' }, 
      href: '/ramadan-package',
      highlight: true,
      badge: 'NEW',
      badgeBn: 'নতুন'
    }
  ]

  return (
    <nav className= "fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4">
    
    {/*fixed w-full z-50 transition-all duration-300 $

    // scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
   //  */} 

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/Sabilillah Foundation Logo.svg"
                alt="Sabilillah Foundation Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl hidden sm:block">
              {language === 'bn' ? 'সাবিলিল্লাহ ফাউন্ডেশন' : 'Sabilillah Foundation'}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 lg:px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : item.highlight
                      ? 'text-emerald-600 font-bold'
                      : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                <span className="flex items-center gap-1">
                  <span>{item.name[language]}</span>
                </span>
                
                {/* শুধু NEW ব্যাজ - বক্স ছাড়া */}
                {item.highlight && (
                  <span className="absolute -top-3 -right-3 text-xs font-extrabold text-red-500 animate-pulse">
                    {language === 'en' ? item.badge : item.badgeBn}
                  </span>
                )}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-emerald-50 px-3 py-2 rounded-full text-emerald-700 hover:bg-emerald-100 transition ml-2"
            >
              <Globe size={18} />
              <span className="text-sm font-medium hidden lg:block">
                {language === 'en' ? 'বাংলা' : 'English'}
              </span>
            </button>
            
            {/* Donate Button */}
            <Link
              href="/donate"
              className="bg-emerald-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Heart size={18} />
              <span className="hidden lg:block">{language === 'en' ? 'Donate' : 'দান করুন'}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-emerald-50 text-emerald-700"
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="Toggle menu"
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
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl p-4 mt-2 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                    pathname === item.href
                      ? 'bg-emerald-600 text-white'
                      : item.highlight
                        ? 'text-emerald-600 font-bold'
                        : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name[language]}</span>
                  {item.highlight && (
                    <span className="text-xs font-extrabold text-red-500 animate-pulse ml-2">
                      {language === 'en' ? item.badge : item.badgeBn}
                    </span>
                  )}
                </Link>
              ))}
              
              <Link
                href="/donate"
                className="bg-emerald-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-emerald-700 transition flex items-center justify-center space-x-2 mt-2 shadow-lg"
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