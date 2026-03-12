// app/projects/page.js
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, Users, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  const [language, setLanguage] = useState('en')
  const [activeTab, setActiveTab] = useState('running')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)
  }, [])

  const content = {
    en: {
      title: 'Our Projects',
      subtitle: 'Making a difference through sustainable initiatives',
      running: 'Running Projects',
      completed: 'Completed Projects',
      all: 'All Projects',
      target: 'Target',
      achieved: 'Achieved',
      location: 'Location',
      duration: 'Duration'
    },
    bn: {
      title: 'আমাদের প্রকল্প',
      subtitle: 'টেকসই উদ্যোগের মাধ্যমে পরিবর্তন আনা',
      running: 'চলমান প্রকল্প',
      completed: 'সম্পন্ন প্রকল্প',
      all: 'সব প্রকল্প',
      target: 'লক্ষ্য',
      achieved: 'অর্জিত',
      location: 'অবস্থান',
      duration: 'মেয়াদ'
    }
  }

  const runningProjects = [
    {
      id: 1,
      title: { en: 'Eid Food Package Distribution 2024', bn: 'ঈদ খাদ্য প্যাকেজ বিতরণ ২০২৪' },
      description: {
        en: 'Distributing comprehensive food packages to 150 underprivileged families for Eid celebration',
        bn: 'ঈদ উদযাপনের জন্য ১৫০টি অসহায় পরিবারের মাঝে সম্পূর্ণ খাদ্য প্যাকেজ বিতরণ'
      },
      target: '150 Families',
      achieved: '75 Families',
      location: 'Rajbari',
      startDate: 'March 2024',
      endDate: 'April 2024',
      progress: 50,
      image: '/images/projects/eid-2024.jpg',
      items: [
        'সেমাই - ১ প্যাকেট',
        'লাচ্ছা সেমাই - ১ প্যাকেট',
        'চিনি - ১ কেজি',
        'দুধ - ২০০ গ্রাম',
        'তেল - ১/২ লিটার',
        'কিশমিশ - ২০ টাকা',
        'সাবান - লাইফবয় ও সার্ফ এক্সেল',
        'মসলা - এলাচ, দারচিনি',
        'পোলাও চাল - ১ কেজি',
        'মসুর ডাল - ১/২ কেজি'
      ]
    },
    {
      id: 2,
      title: { en: 'Winter Clothing Drive 2024', bn: 'শীতবস্ত্র বিতরণ ২০২৪' },
      description: {
        en: 'Providing warm clothes to 500 homeless people in northern districts',
        bn: 'উত্তরাঞ্চলের ৫০০ গৃহহীন মানুষের মাঝে শীতবস্ত্র বিতরণ'
      },
      target: '500 People',
      achieved: '320 People',
      location: 'Kurigram, Nilphamari',
      startDate: 'November 2024',
      endDate: 'February 2025',
      progress: 64,
      image: '/images/projects/winter-2024.jpg'
    },
    {
      id: 3,
      title: { en: 'Monthly Food Program', bn: 'মাসিক খাদ্য সহায়তা' },
      description: {
        en: 'Regular food support to orphanages and elderly homes',
        bn: 'এতিমখানা ও বৃদ্ধাশ্রমে নিয়মিত খাদ্য সহায়তা'
      },
      target: '200 Families/month',
      achieved: '150 Families/month',
      location: 'Rajbari & Faridpur',
      startDate: 'January 2023',
      endDate: 'Ongoing',
      progress: 75,
      image: '/images/projects/monthly-food.jpg'
    }
  ]

  const completedProjects = [
    {
      id: 4,
      title: { en: 'Eid Food Package Distribution 2023', bn: 'ঈদ খাদ্য প্যাকেজ বিতরণ ২০২৩' },
      description: {
        en: 'Successfully distributed food packages to 120 families during Eid-ul-Fitr',
        bn: 'ঈদুল ফিতরে ১২০টি পরিবারের মাঝে সফলভাবে খাদ্য প্যাকেজ বিতরণ'
      },
      target: '120 Families',
      achieved: '120 Families',
      location: 'Rajbari',
      duration: 'March 2023 - April 2023',
      image: '/images/projects/eid-2023.jpg'
    },
    {
      id: 5,
      title: { en: 'Winter Clothing Drive 2023', bn: 'শীতবস্ত্র বিতরণ ২০২৩' },
      description: {
        en: 'Distributed warm clothes to 450 people in 5 upazilas',
        bn: '৫টি উপজেলায় ৪৫০ জনের মাঝে শীতবস্ত্র বিতরণ'
      },
      target: '450 People',
      achieved: '450 People',
      location: 'Rajbari, Faridpur',
      duration: 'December 2023 - January 2024',
      image: '/images/projects/winter-2023.jpg'
    },
    {
      id: 6,
      title: { en: 'Ramadan Food Program 2023', bn: 'রমজান খাদ্য কর্মসূচি ২০২৩' },
      description: {
        en: 'Provided iftar meals to 3000+ fasting people throughout Ramadan',
        bn: 'রমজান জুড়ে ৩০০০+ রোজাদারের মাঝে ইফতার বিতরণ'
      },
      target: '3000+ Meals',
      achieved: '3500 Meals',
      location: 'Rajbari Sadar',
      duration: 'March 2023 - April 2023',
      image: '/images/projects/ramadan-2023.jpg'
    },
    {
      id: 7,
      title: { en: 'Flood Relief Program 2022', bn: 'বন্যা ত্রাণ কর্মসূচি ২০২২' },
      description: {
        en: 'Emergency relief for flood-affected families in Sunamganj',
        bn: 'সুনামগঞ্জের বন্যাদুর্গত পরিবারের জন্য জরুরি ত্রাণ'
      },
      target: '500 Families',
      achieved: '500 Families',
      location: 'Sunamganj',
      duration: 'June 2022 - July 2022',
      image: '/images/projects/flood-relief.jpg'
    }
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

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('running')}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeTab === 'running'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {content[language].running}
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeTab === 'completed'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {content[language].completed}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'running' && (
            <div className="space-y-8">
              {runningProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 h-64 md:h-full">
                      <img
                        src={project.image}
                        alt={project.title.en}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                          {project.title[language]}
                        </h2>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {project.progress}% Complete
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {project.description[language]}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users size={16} className="mr-2" />
                          <span>{content[language].target}: {project.target}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle size={16} className="mr-2" />
                          <span>{content[language].achieved}: {project.achieved}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={16} className="mr-2" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-2" />
                          <span>{project.startDate} - {project.endDate}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-emerald-600 rounded-full"
                          />
                        </div>
                      </div>

                      {project.items && (
                        <div className="mb-4">
                          <h3 className="font-semibold text-gray-700 mb-2">
                            {language === 'en' ? 'Package Items:' : 'প্যাকেজের আইটেম:'}
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {project.items.map((item, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <div className="w-1 h-1 bg-emerald-600 rounded-full mr-2" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition"
                      >
                        {language === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'completed' && (
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title.en}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {project.title[language]}
                      </h3>
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description[language]}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users size={14} className="mr-2" />
                        <span>{content[language].target}: {project.target}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={14} className="mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-2" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition text-sm"
                    >
                      {language === 'en' ? 'Read More' : 'আরও পড়ুন'}
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}