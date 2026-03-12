// app/team/page.js
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Linkedin, Mail, Users, MapPin } from 'lucide-react'

export default function TeamPage() {
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
      title: 'Our Team',
      subtitle: 'Dedicated individuals working tirelessly for the community',
      management: 'Management Team',
      volunteers: 'Volunteers',
      joinTeam: 'Join Our Team',
      joinText: 'Be a part of our mission to serve humanity. Volunteer with us and make a difference.',
      joinButton: 'Become a Volunteer',
      location: 'Location'
    },
    bn: {
      title: 'আমাদের টিম',
      subtitle: 'সম্প্রদায়ের জন্য নিরলসভাবে কাজ করা নিবেদিতপ্রাণ ব্যক্তিবর্গ',
      management: 'পরিচালনা টিম',
      volunteers: 'স্বেচ্ছাসেবক',
      joinTeam: 'আমাদের টিমে যোগ দিন',
      joinText: 'মানবতার সেবায় আমাদের মিশনের অংশ হোন। আমাদের সাথে স্বেচ্ছাসেবক হিসেবে যোগ দিন এবং পরিবর্তন আনুন।',
      joinButton: 'স্বেচ্ছাসেবক হোন',
      location: 'অবস্থান'
    }
  }

  const managementTeam = [
    {
      name: { en: 'Anichur Rahman', bn: 'আনিছুর রহমান' },
      role: { en: 'Chairman', bn: 'চেয়ারম্যান' },
      unit: { en: 'Board of Directors', bn: 'পরিচালনা পর্ষদ' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      bio: {
        en: 'Leading the foundation with vision and dedication since inception',
        bn: 'প্রতিষ্ঠালগ্ন থেকে দৃষ্টিভঙ্গি ও নিষ্ঠার সাথে ফাউন্ডেশনের নেতৃত্ব দিয়ে যাচ্ছেন'
      }
    },
    {
      name: { en: 'Nazmul Haque', bn: 'নাজমুল হক' },
      role: { en: 'Chief of Finance', bn: 'অর্থ প্রধান' },
      unit: { en: 'Finance Unit', bn: 'অর্থ ইউনিট' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      bio: {
        en: 'Ensuring transparent and effective utilization of funds',
        bn: 'তহবিলের স্বচ্ছ ও কার্যকর ব্যবহার নিশ্চিত করছেন'
      }
    },
    {
      name: { en: 'Airin Afroj Aishi', bn: 'আয়রিন আফরোজ ঐশি' },
      role: { en: 'Deputy Director', bn: 'উপ-পরিচালক' },
      unit: { en: 'Director Unit', bn: 'ডিরেক্টর ইউনিট' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      bio: {
        en: 'Coordinating programs and overseeing operations',
        bn: 'প্রকল্প সমন্বয় ও কার্যক্রম তদারকি করছেন'
      }
    },
    {
      name: { en: 'Abul Ala Moududi', bn: 'আবুল আলা মওদূদী' },
      role: { en: 'Operational Director', bn: 'অপারেশনাল ডিরেক্টর' },
      unit: { en: 'Operational Unit', bn: 'অপারেশনাল ইউনিট' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      bio: {
        en: 'Managing day-to-day operations and field activities',
        bn: 'দৈনন্দিন কার্যক্রম ও মাঠ পর্যায়ের কাজ পরিচালনা করছেন'
      }
    },
   {
  name: { en: 'Razaul Karim', bn: 'রেজাউল করিম' },
  role: { en: 'Assistant Operational Director', bn: 'সহকারী অপারেশনাল ডিরেক্টর' },
  unit: { en: 'Operational Unit', bn: 'অপারেশনাল ইউনিট' },
  location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
  bio: {
    en: 'Supporting operational activities and volunteer coordination',
    bn: 'অপারেশনাল কার্যক্রম ও স্বেচ্ছাসেবক সমন্বয়ে সহায়তা করছেন'
     }
    }
  ]

  const volunteers = [
    { name: 'Mahabubur Rahman (Meton)', role: { en: 'Senior Volunteer', bn: 'সিনিয়র স্বেচ্ছাসেবক' }, area: 'Rajbari' },
    { name: 'Md. Mitun', role: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবক' }, area: 'Rajbari' },
    { name: 'Mehedi Hasan', role: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবক' }, area: 'Faridpur' },
    { name: 'Hridoy Mondol', role: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবক' }, area: 'Rajbari' },
    { name: 'Maruf Hasan', role: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবক' }, area: 'Rajbari' }
  ]

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

      {/* Management Team */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-emerald-800 mb-4">
        {content[language].management}
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {managementTeam.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition border border-gray-100"
        >
          <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="p-6">

            {/* unit */}
            <p className="text-emerald-600 text-sm font-semibold mb-1">
              {member.unit[language]}
            </p>

            {/* name */}
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {member.name[language]}
            </h3>

            {/* role */}
            <p className="text-gray-600 mb-2">
              {member.role[language]}
            </p>

            {/* location */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin size={14} className="mr-1" />
              <span>{member.location[language]}</span>
            </div>

            {/* bio */}
            <p className="text-gray-600 text-sm mb-4">
              {member.bio[language]}
            </p>

            <div className="flex space-x-3">
              <button className="text-gray-400 hover:text-emerald-600 transition">
                <Mail size={18} />
              </button>
              <button className="text-gray-400 hover:text-emerald-600 transition">
                <Linkedin size={18} />
              </button>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Volunteers Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              {content[language].volunteers}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-center space-x-4"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{volunteer.name}</h3>
                  <p className="text-emerald-600 text-sm">{volunteer.role[language]}</p>
                  <p className="text-gray-500 text-xs">{content[language].location}: {volunteer.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              {content[language].joinTeam}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {content[language].joinText}
            </p>
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition">
              {content[language].joinButton}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}