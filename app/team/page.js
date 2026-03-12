// app/team/page.js
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Linkedin, Mail, Users } from 'lucide-react'

export default function TeamPage() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)
  }, [])

  const content = {
    en: {
      title: 'Our Team',
      subtitle: 'Dedicated individuals working tirelessly for the community',
      management: 'Management Team',
      advisory: 'Advisory Board',
      volunteers: 'Volunteers',
      executive: 'Executive Committee'
    },
    bn: {
      title: 'আমাদের টিম',
      subtitle: 'সম্প্রদায়ের জন্য নিরলসভাবে কাজ করা নিবেদিতপ্রাণ ব্যক্তিবর্গ',
      management: 'পরিচালনা টিম',
      advisory: 'উপদেষ্টা কমিটি',
      volunteers: 'স্বেচ্ছাসেবক',
      executive: 'কার্যনির্বাহী কমিটি'
    }
  }

  const managementTeam = [
    {
      name: 'Anichur Rahman',
      role: { en: 'Chairman', bn: 'চেয়ারম্যান' },
      unit: 'Board of Directors',
      image: '/images/team/anichur.jpg',
      bio: {
        en: 'Leading the foundation with vision and dedication since inception',
        bn: 'প্রতিষ্ঠালগ্ন থেকে দৃষ্টিভঙ্গি ও নিষ্ঠার সাথে ফাউন্ডেশনের নেতৃত্ব দিয়ে যাচ্ছেন'
      }
    },
    {
      name: 'Nazmul Haque',
      role: { en: 'Chief of Finance', bn: 'অর্থ প্রধান' },
      unit: 'Finance Unit',
      image: '/images/team/nazmul.jpg',
      bio: {
        en: 'Ensuring transparent and effective utilization of funds',
        bn: 'তহবিলের স্বচ্ছ ও কার্যকর ব্যবহার নিশ্চিত করছেন'
      }
    },
    {
      name: 'Airin Afroj Aishi',
      role: { en: 'Deputy Director', bn: 'উপ-পরিচালক' },
      unit: 'Director Unit',
      image: '/images/team/airin.jpg',
      bio: {
        en: 'Coordinating programs and overseeing operations',
        bn: 'প্রকল্প সমন্বয় ও কার্যক্রম তদারকি করছেন'
      }
    },
    {
      name: 'Abul Ala Mowdudi',
      role: { en: 'Operational Director', bn: 'অপারেশনাল ডিরেক্টর' },
      unit: 'Operational Unit',
      image: '/images/team/mowdudi.jpg',
      bio: {
        en: 'Managing day-to-day operations and field activities',
        bn: 'দৈনন্দিন কার্যক্রম ও মাঠ পর্যায়ের কাজ পরিচালনা করছেন'
      }
    },
    {
      name: 'Razaul Karim',
      role: { en: 'Assistant Operational Director', bn: 'সহকারী অপারেশনাল ডিরেক্টর' },
      unit: 'Operational Unit',
      image: '/images/team/razaul.jpg',
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-emerald-200 text-sm font-semibold">
                      {member.unit}
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      {member.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-emerald-600 font-semibold mb-2">
                    {member.role[language]}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio[language]}
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                      <Mail size={18} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                      <Linkedin size={18} />
                    </a>
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'The backbone of our organization, selflessly serving the community'
                : 'আমাদের সংগঠনের প্রাণশক্তি, নিঃস্বার্থভাবে সম্প্রদায়ের সেবা করে যাচ্ছেন'}
            </p>
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
                  <p className="text-gray-500 text-xs">{volunteer.area}</p>
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
              {language === 'en' ? 'Join Our Team' : 'আমাদের টিমে যোগ দিন'}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Be a part of our mission to serve humanity. Volunteer with us and make a difference.'
                : 'মানবতার সেবায় আমাদের মিশনের অংশ হোন। আমাদের সাথে স্বেচ্ছাসেবক হিসেবে যোগ দিন এবং পরিবর্তন আনুন।'}
            </p>
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition">
              {language === 'en' ? 'Become a Volunteer' : 'স্বেচ্ছাসেবক হোন'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}