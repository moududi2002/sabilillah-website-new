// components/HomePage/RunningProjects.js
'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Target, ArrowRight, Heart, Gift, Snowflake, Package } from 'lucide-react'
import Link from 'next/link'

export default function RunningProjects({ language }) {
  const projects = [
    {
      id: 1,
      title: {
        en: 'Eid Food Package Distribution',
        bn: 'ঈদ খাদ্য প্যাকেজ বিতরণ'
      },
      description: {
        en: 'Spreading joy this Eid with essential food packages for underprivileged families',
        bn: 'অসহায় পরিবারের মাঝে ঈদের আনন্দ পৌঁছে দিতে প্রয়োজনীয় খাদ্য প্যাকেজ বিতরণ'
      },
      stats: {
        target: { en: '150 Families', bn: '১৫০ পরিবার' },
        location: { en: 'Rajbari', bn: 'রাজবাড়ী' },
        duration: { en: 'Ramadan 2026', bn: 'রমজান ২০২৬' }
      },
      progress: { en: 'Not Yet Started  0', bn: 'এখনও শুরু হয়নি ০ ' },
      image: '/images/projects/eid-food.jpg',
      icon: Gift,
      color: 'from-emerald-400 to-teal-400',
      bgLight: 'bg-green-100'
    }
    
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Heart size={16} className="text-emerald-600" />
            <span>{language === 'en' ? 'Active Initiatives' : 'চলমান উদ্যোগ'}</span>
          </motion.div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Running Projects' : 'চলমান প্রকল্প'}
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'en'
              ? 'Making a difference in communities through sustainable initiatives'
              : 'টেকসই উদ্যোগের মাধ্যমে সম্প্রদায়ে পরিবর্তন আনা'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const IconComponent = project.icon
            
            return (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full hover:shadow-2xl transition-all duration-500">
                  
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-70 transition-opacity z-10`} />
                    
                    {/* Background Image */}
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    {/* Icon */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Progress Badge */}
                    <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                          <span className="font-semibold text-emerald-600 text-sm">
                            {project.progress[language]}% {language === 'en' ? 'Done' : 'সম্পন্ন'}
                          </span>
                        </div>
                      </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {project.title[language]}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                      {project.description[language]}
                    </p>

                    {/* Quick Stats */}
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${project.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Target size={16} className="text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">
                            {language === 'en' ? 'Target' : 'লক্ষ্য'}
                          </p>
                          <p className="font-semibold text-gray-800 text-sm">
                            {project.stats.target[language]}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${project.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <MapPin size={16} className="text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">
                            {language === 'en' ? 'Location' : 'অবস্থান'}
                          </p>
                          <p className="font-semibold text-gray-800 text-sm">
                            {project.stats.location[language]}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${project.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Calendar size={16} className="text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">
                            {language === 'en' ? 'Duration' : 'সময়কাল'}
                          </p>
                          <p className="font-semibold text-gray-800 text-sm">
                            {project.stats.duration[language]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          {language === 'en' ? 'Progress' : 'অগ্রগতি'}
                        </span>
                        <span className="text-sm font-bold text-emerald-600">
                          {project.progress[language]}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress[language]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={`h-full rounded-full bg-emerald-600 ${project.color}`}
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href="/ramadan-pakage"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 group/btn"
                    >
                      <span>{language === 'en' ? 'View Details' : 'বিস্তারিত'}</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <Heart size={18} className="group-hover:animate-pulse" />
            <span>
              {language === 'en' ? 'Explore All Projects' : 'সকল প্রকল্প দেখুন'}
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}