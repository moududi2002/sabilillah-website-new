// app/about/page.js
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Target, Eye, Heart, Award, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

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

  const content = {
    en: {
      title: 'About Sabilillah Foundation',
      subtitle: 'Serving humanity with compassion and dedication',
      mission: 'Our Mission',
      missionText: 'To alleviate poverty and suffering by providing essential food, clothing, and support to underprivileged communities, while promoting Islamic values of charity and compassion.',
      vision: 'Our Vision',
      visionText: 'A society where no one goes to bed hungry, where every individual has access to basic necessities, and where the spirit of Islamic brotherhood strengthens communities.',
      history: 'Our History',
      historyText: 'Founded in 2020, Sabilillah Foundation started as a small group of volunteers in Rajbari district. What began with feeding 50 families during Ramadan has grown into a recognized charitable organization serving thousands across multiple districts.',
      values: 'Our Core Values',
      valuesList: [
        'Sincerity (Ikhlas) - Purity of intention in all actions',
        'Compassion - Treating every person with dignity and care',
        'Transparency - Ensuring donations reach those in need',
        'Community - Building strong, self-reliant communities'
      ],
      stats: [
        { label: 'Years of Service', value: '5+' },
        { label: 'Volunteers', value: '50+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Lives Impacted', value: '10,000+' }
      ],
      readMore: 'Read More',
      ourTeam: 'Meet Our Team'
    },
    bn: {
      title: 'সাবিলিল্লাহ ফাউন্ডেশন সম্পর্কে',
      subtitle: 'সেবা মানবতার জন্য, নিষ্ঠা ও ভালোবাসায়',
      mission: 'আমাদের লক্ষ্য',
      missionText: 'অসহায় সম্প্রদায়ের জন্য প্রয়োজনীয় খাদ্য, বস্ত্র ও সহায়তা প্রদানের মাধ্যমে দারিদ্র্য ও দুর্ভোগ দূর করা এবং ইসলামী মূল্যবোধ ও দানের মনোভাব প্রচার করা।',
      vision: 'আমাদের স্বপ্ন',
      visionText: 'এমন একটি সমাজ যেখানে কেউ ক্ষুধার্ত থাকে না, প্রতিটি ব্যক্তি মৌলিক চাহিদা পূরণের সুযোগ পায় এবং ইসলামী ভ্রাতৃত্বের চেতনা সম্প্রদায়কে শক্তিশালী করে।',
      history: 'আমাদের ইতিহাস',
      historyText: '২০২০ সালে রাজবাড়ী জেলায় স্বেচ্ছাসেবকদের একটি ছোট দল হিসেবে যাত্রা শুরু সাবিলিল্লাহ ফাউন্ডেশনের। রমজানে ৫০টি পরিবারকে খাবার দিয়ে শুরু করে, এখন এটি বহু জেলায় হাজার হাজার মানুষের সেবা করে যাচ্ছে।',
      values: 'আমাদের মূল্যবোধ',
      valuesList: [
        'ইখলাস - সকল কাজে বিশুদ্ধ নিয়ত',
        'দয়া - প্রতিটি মানুষের সাথে মর্যাদা ও যত্নের আচরণ',
        'স্বচ্ছতা - দানের টাকা সঠিক স্থানে পৌঁছানো নিশ্চিত করা',
        'সম্প্রদায় - শক্তিশালী, স্বনির্ভর সম্প্রদায় গঠন'
      ],
      stats: [
        { label: 'সেবার বছর', value: '৫+' },
        { label: 'স্বেচ্ছাসেবক', value: '৫০+' },
        { label: 'সম্পন্ন প্রকল্প', value: '৫০+' },
        { label: 'সহায়তা প্রাপ্ত', value: '১০,০০০+' }
      ],
      readMore: 'আরও পড়ুন',
      ourTeam: 'আমাদের টিম দেখুন'
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-emerald-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L37 20L58 20L40 33L45 55L30 44L15 55L20 33L2 20L23 20L30 0Z' fill='%23ffffff' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {content[language].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            {content[language].subtitle}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content[language].stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {content[language].mission}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {content[language].missionText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {content[language].vision}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {content[language].visionText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {content[language].history}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {content[language].historyText}
              </p>
              <Link
                href="/team"
                className="inline-block mt-6 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
              >
                {content[language].ourTeam}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full bg-emerald-200 flex items-center justify-center">
                <span className="text-emerald-700">Image Placeholder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              {content[language].values}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content[language].valuesList.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <Heart className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                <p className="text-gray-700">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}