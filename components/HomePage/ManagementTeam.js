// components/HomePage/ManagementTeam.js
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

export default function ManagementTeam({ language }) {
  const team = [
    {
      name: 'Anichur Rahman',
      role: { en: 'Chairman', bn: 'চেয়ারম্যান' },
      image: '/images/team/anichur.jpg',
      unit: 'Chairman'
    },
    {
      name: 'Nazmul Haque',
      role: { en: 'Chief of Finance', bn: 'অর্থ প্রধান' },
      image: '/images/team/nazmul.jpg',
      unit: 'Finance Unit'
    },
    {
      name: 'Airin Afroj Aishi',
      role: { en: 'Deputy Director', bn: 'উপ-পরিচালক' },
      image: '/images/team/airin.jpg',
      unit: 'Director Unit'
    },
    {
      name: 'Abul Ala Mowdudi',
      role: { en: 'Operational Director', bn: 'অপারেশনাল ডিরেক্টর' },
      image: '/images/team/mowdudi.jpg',
      unit: 'Operational Unit'
    },
    {
      name: 'Razaul Karim',
      role: { en: 'Assistant Operational Director', bn: 'সহকারী অপারেশনাল ডিরেক্টর' },
      image: '/images/team/razaul.jpg',
      unit: 'Operational Unit'
    }
  ]

  const volunteers = [
    'Mahabubur Rahman (Meton)',
    'Md. Mitun',
    'Mehedi Hasan',
    'Hridoy Mondol',
    'Maruf Hasan'
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">
            {language === 'en' ? 'Our Management Team' : 'আমাদের পরিচালনা টিম'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Dedicated individuals working tirelessly for the community'
              : 'সম্প্রদায়ের জন্য নিরলসভাবে কাজ করা নিবেদিতপ্রাণ ব্যক্তিবর্গ'}
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-600/20 group-hover:bg-emerald-600/40 transition z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-600 font-semibold mb-1">
                  {member.unit}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {member.role[language]}
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

        {/* Volunteers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-50 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
            {language === 'en' ? 'Our Volunteers' : 'আমাদের স্বেচ্ছাসেবকগণ'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center shadow-md"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-xl">
                    {volunteer.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-800">{volunteer}</p>
                <p className="text-xs text-emerald-600 mt-1">
                  {language === 'en' ? 'Volunteer' : 'স্বেচ্ছাসেবক'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}