// app/eid2026/page.js
'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Gift, 
  Heart, 
  Users, 
  Clock, 
  Target, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Moon,
  Star,
  ShoppingBag,
  Utensils,
  Droplets,
  Wheat,
  Coffee,
  Database
} from 'lucide-react'
import Navbar from '/components/Navbar'

export default function Eid2026Page() {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)

    const handleLanguageChange = () => {
      const newLang = localStorage.getItem('language') || 'en'
      setLanguage(newLang)
    }

    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const t = {
    en: {
      hero: {
        title: 'Eid Food Package 2026',
        subtitle: 'Spread Joy This Eid',
        description: 'Help us provide essential food items to families in need this Eid-ul-Fitr 2026',
        cta: 'Donate Now'
      },
      stats: {
        families: 'Families Targeted',
        cost: 'Cost per Package',
        days: 'Days Left',
        raised: 'Raised So Far'
      },
      package: {
        title: 'What\'s in the Package?',
        subtitle: 'Each family will receive these essential items',
        items: [
          { name: 'Rice - 10kg', icon: '🌾', description: 'Premium quality rice' },
          { name: 'Flour - 5kg', icon: '🌾', description: 'Fine wheat flour' },
          { name: 'Oil - 2L', icon: '🫒', description: 'Cooking oil' },
          { name: 'Lentils - 2kg', icon: '🫘', description: 'Protein-rich lentils' },
          { name: 'Sugar - 2kg', icon: '🍚', description: 'Pure sugar' },
          { name: 'Dates - 1kg', icon: '🌴', description: 'Premium dates' },
          { name: 'Milk Powder - 1kg', icon: '🥛', description: 'Fortified milk powder' },
          { name: 'Semolina - 1kg', icon: '🌾', description: 'For desserts' }
        ]
      },
      impact: {
        title: 'Your Impact',
        subtitle: 'See how your donation helps',
        impacts: [
          { amount: '500', description: 'Provides dates for 2 families', icon: '🌴' },
          { amount: '1000', description: 'Provides rice for 1 family', icon: '🌾' },
          { amount: '2000', description: 'Provides half package for 1 family', icon: '📦' },
          { amount: '4000', description: 'Provides complete package for 1 family', icon: '🎁' },
          { amount: '8000', description: 'Provides packages for 2 families', icon: '🎁🎁' },
          { amount: '20000', description: 'Provides packages for 5 families', icon: '🏘️' }
        ]
      },
      progress: {
        title: 'Campaign Progress',
        target: 'Target',
        collected: 'Collected',
        families: 'families supported',
        remaining: 'Remaining'
      },
      gallery: {
        title: 'Previous Year Memories',
        subtitle: 'Eid 2025 Distribution'
      },
      cta: {
        title: 'Be the Reason for Someone\'s Smile',
        subtitle: 'Your donation can bring happiness to a family this Eid',
        button: 'Donate Now'
      },
      footer: {
        share: 'Share this campaign',
        copy: 'Copy Link',
        copied: 'Copied!'
      }
    },
    bn: {
      hero: {
        title: 'ঈদ ফুড প্যাকেজ ২০২৬',
        subtitle: 'ঈদে আনন্দ ছড়িয়ে দিন',
        description: 'ঈদ-উল-ফিতর ২০২৬ উপলক্ষে অসহায় পরিবারগুলোর জন্য প্রয়োজনীয় খাদ্যসামগ্রী সংগ্রহে সহায়তা করুন',
        cta: 'ডোনেট করুন'
      },
      stats: {
        families: 'লক্ষ্যমাত্রা (পরিবার)',
        cost: 'প্রতি প্যাকেজ খরচ',
        days: 'বাকি দিন',
        raised: 'সংগৃহীত হয়েছে'
      },
      package: {
        title: 'প্যাকেজে কী কী থাকছে?',
        subtitle: 'প্রতি পরিবার পাবে এই জিনিসগুলি',
        items: [
          { name: 'চাল - ১০কেজি', icon: '🌾', description: 'উন্নত মানের চাল' },
          { name: 'আটা - ৫কেজি', icon: '🌾', description: 'খাঁটি আটা' },
          { name: 'তেল - ২লিটার', icon: '🫒', description: 'রান্নার তেল' },
          { name: 'ডাল - ২কেজি', icon: '🫘', description: 'প্রোটিনসমৃদ্ধ ডাল' },
          { name: 'চিনি - ২কেজি', icon: '🍚', description: 'খাঁটি চিনি' },
          { name: 'খেজুর - ১কেজি', icon: '🌴', description: 'উন্নত মানের খেজুর' },
          { name: 'দুধের গুঁড়া - ১কেজি', icon: '🥛', description: 'পুষ্টিকর দুধের গুঁড়া' },
          { name: 'সুজি - ১কেজি', icon: '🌾', description: 'মিষ্টি তৈরির জন্য' }
        ]
      },
      impact: {
        title: 'আপনার দানের প্রভাব',
        subtitle: 'দেখুন আপনার দান কিভাবে সহায়তা করে',
        impacts: [
          { amount: '৫০০', description: '২টি পরিবারের জন্য খেজুর', icon: '🌴' },
          { amount: '১০০০', description: '১টি পরিবারের জন্য চাল', icon: '🌾' },
          { amount: '২০০০', description: '১টি পরিবারের জন্য অর্ধেক প্যাকেজ', icon: '📦' },
          { amount: '৪০০০', description: '১টি পরিবারের জন্য সম্পূর্ণ প্যাকেজ', icon: '🎁' },
          { amount: '৮০০০', description: '২টি পরিবারের জন্য প্যাকেজ', icon: '🎁🎁' },
          { amount: '২০০০০', description: '৫টি পরিবারের জন্য প্যাকেজ', icon: '🏘️' }
        ]
      },
      progress: {
        title: 'ক্যাম্পেইনের অগ্রগতি',
        target: 'লক্ষ্য',
        collected: 'সংগৃহীত',
        families: 'টি পরিবার পেয়েছে',
        remaining: 'বাকি'
      },
      gallery: {
        title: 'গত বছরের স্মৃতি',
        subtitle: 'ঈদ ২০২৫ বিতরণ'
      },
      cta: {
        title: 'কারো মুখে হাসি ফোটানোর কারণ হোন',
        subtitle: 'আপনার দান একটি পরিবারে ঈদের আনন্দ নিয়ে আসতে পারে',
        button: 'এখনই ডোনেট করুন'
      },
      footer: {
        share: 'এই ক্যাম্পেইন শেয়ার করুন',
        copy: 'লিংক কপি',
        copied: 'কপি হয়েছে!'
      }
    }
  }

  const currentLang = t[language]

  // Sample data - replace with actual data from your backend
  const campaignData = {
    targetFamilies: 500,
    costPerPackage: 4000,
    raisedAmount: 850000,
    daysLeft: 45,
    supportedFamilies: 212
  }

  const progressPercentage = (campaignData.raisedAmount / (campaignData.targetFamilies * campaignData.costPerPackage)) * 100

  const galleryImages = [
    { src: '/images/eid2025/1.jpg', alt: 'Eid 2025 Distribution' },
    { src: '/images/eid2025/2.jpg', alt: 'Happy Families' },
    { src: '/images/eid2025/3.jpg', alt: 'Package Distribution' },
    { src: '/images/eid2025/4.jpg', alt: 'Volunteers' }
  ]

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    // You can add a toast notification here
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-emerald-600">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Hero Section with Parallax */}
        <motion.section 
          style={{ opacity, scale }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 text-8xl">🌙</div>
            <div className="absolute bottom-20 right-10 text-8xl">⭐</div>
            <div className="absolute top-40 right-40 text-6xl">🕌</div>
            <div className="absolute bottom-40 left-40 text-6xl">✨</div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-700 text-sm font-semibold mb-6">
                <Moon className="w-4 h-4" />
                <span>Ramadan 1447 • 2026</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {currentLang.hero.title}
                </span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                {currentLang.hero.subtitle}
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {currentLang.hero.description}
              </p>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Gift className="w-5 h-5" />
                <span>{currentLang.hero.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-emerald-600 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: currentLang.stats.families, value: campaignData.targetFamilies, icon: Users },
                { label: currentLang.stats.cost, value: `৳${campaignData.costPerPackage}`, icon: Gift },
                { label: currentLang.stats.days, value: campaignData.daysLeft, icon: Clock },
                { label: currentLang.stats.raised, value: `৳${campaignData.raisedAmount.toLocaleString()}`, icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-emerald-50"
                >
                  <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Contents */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {currentLang.package.title}
              </h2>
              <p className="text-lg text-gray-600">
                {currentLang.package.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentLang.package.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {currentLang.impact.title}
              </h2>
              <p className="text-lg text-gray-600">
                {currentLang.impact.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {currentLang.impact.impacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl mb-3">{impact.icon}</div>
                  <div className="text-xl font-bold text-emerald-600 mb-2">
                    ৳{impact.amount}
                  </div>
                  <p className="text-gray-700">{impact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {currentLang.progress.title}
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-600">{currentLang.progress.collected}</span>
                  <span className="text-gray-600">{currentLang.progress.target}</span>
                </div>

                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progressPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">
                      ৳{campaignData.raisedAmount.toLocaleString()}
                    </span>
                    <span className="text-gray-500 ml-2">
                      ({campaignData.supportedFamilies} {currentLang.progress.families})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-400">
                      ৳{(campaignData.targetFamilies * campaignData.costPerPackage).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {currentLang.progress.remaining}:
                    </span>
                    <span className="text-xl font-bold text-emerald-600">
                      ৳{((campaignData.targetFamilies * campaignData.costPerPackage) - campaignData.raisedAmount).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {currentLang.gallery.title}
              </h2>
              <p className="text-lg text-gray-600">
                {currentLang.gallery.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <p className="text-sm">{image.alt}</p>
                  </div>
                  <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-6xl">📸</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Heart className="w-16 h-16 text-white/80 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {currentLang.cta.title}
              </h2>
              
              <p className="text-xl text-white/90 mb-8">
                {currentLang.cta.subtitle}
              </p>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Gift className="w-5 h-5" />
                <span>{currentLang.cta.button}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Share Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-gray-700 font-medium">
                {currentLang.footer.share}:
              </span>
              
              <div className="flex items-center gap-4">
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                
                <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.524-3.392 13.78 13.78 0 001.414-5.953c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                
                <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.45-1.272.61-1.447c.159-.175.347-.219.463-.219.116 0 .232.001.348.006.107.005.251-.04.393.302.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
                  </svg>
                </button>
                
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <Database size={16} />
                  <span>{currentLang.footer.copy}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}