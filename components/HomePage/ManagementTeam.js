// components/HomePage/ManagementTeam.js
'use client'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Users } from 'lucide-react'

export default function ManagementTeam({ language }) {
  const team = [
    {
      name: { en: 'Anichur Rahman', bn: 'আনিছুর রহমান' },
      role: { en: 'Chairman', bn: 'চেয়ারম্যান' },
      image: '/images/team/anichur.jpg',
      social: {
        email: 'anis.mbstu.cse@gmail.com',
        linkedin: 'https://linkedin.com/in/anichur'
      }
    },
    {
      name: { en: 'Nazmul Haque', bn: 'নাজমুল হক' },
      role: { en: 'Finance Chief', bn: 'অর্থ বিভাগীয় প্রধান' },
      image: '/images/team/nazmul.jpg',
      social: {
        email: 'nazmul@example.com',
        linkedin: 'https://www.linkedin.com/in/eng-anichur-rahman'
      }
    },
    {
      name: { en: 'Airin Afroj Aishi', bn: 'আইরিন আফরোজ  ঐশি' },
      role: { en: 'Deputy Director', bn: 'উপ-পরিচালক' },
      image: '/images/team/airin.jpg',
      social: {
        email: 'airinafroj93@gmail.com',
        linkedin: 'https://linkedin.com/in/airin'
      }
    },
    {
      name: { en: 'Abul Ala Mowdudi', bn: 'আবুল আলা মওদূদী' },
      role: { en: 'Operations Director', bn: 'নির্বাহী পরিচালক' },
      image: '/images/team/moududi.jpeg',
      social: {
        email: 'moududi2002@gmail.com',
        linkedin: 'https://www.linkedin.com/in/abul-ala-moududi'
      }
    },
    {
      name: { en: 'Razaul Karim', bn: 'রাজাউল করিম' },
      role: { en: 'Asst. Operations Director', bn: 'সহকারী নির্বাহী পরিচালক' },
      image: '/images/team/razaul.jpg',
      social: {
        email: 'razaulce15004@gmail.com',
        linkedin: 'https://linkedin.com/in/razaul'
      }
    }
  ]

  const volunteers = [
    { en: 'Mahabubur Rahman', bn: 'মহাবুবুর রহমান' },
    { en: 'Md. Mitun', bn: 'মোঃ মিতুন' },
    { en: 'Mehedi Hasan', bn: 'মেহেদী হাসান' },
    { en: 'Hridoy Mondol', bn: 'হৃদয় মন্ডল' },
    { en: 'Maruf Hasan', bn: 'মারুফ হাসান' }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            {language === 'en' ? 'Management Team' : 'পরিচালনা  কমিটি'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'Meet the visionaries shaping our community'
              : 'যাদের দুর্বার নেতৃত্ব মানুষের মুখে হাসি ফুটায়'}
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                
                {/* Profile Image - Circular */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse group-hover:animate-none" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">
                    {member.name[language]}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm mb-3">
                    {member.role[language]}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Mail size={14} />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Volunteers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl transform -rotate-1 opacity-10" />
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100">
            
            {/* Header with Icon */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-emerald-800">
                {language === 'en' ? 'Volunteers' : 'স্বেচ্ছাসেবক'}
              </h3>
            </div>

            {/* Volunteers Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {volunteers.map((volunteer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="relative mx-auto w-20 h-20 mb-3">
                    <div className="absolute inset-0 bg-emerald-200 rounded-full animate-ping opacity-25" />
                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {volunteer[language].charAt(0)}

                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{volunteer[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}