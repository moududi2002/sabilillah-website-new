'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, Users, MapPin, Calendar, CheckCircle, ArrowRight, Gift } from 'lucide-react'

export default function ProjectsPage() {

  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('running')

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
      title: 'Our Projects',
      subtitle: 'Making a difference through sustainable initiatives',
      running: 'Running Projects',
      completed: 'Completed Projects',
      target: 'Target',
      achieved: 'Achieved',
      location: 'Location',
      duration: 'Duration',
      viewDetails: 'View Details',
      packageItems: 'Package Items'
    },
    bn: {
      title: 'আমাদের প্রকল্প',
      subtitle: 'টেকসই উদ্যোগের মাধ্যমে পরিবর্তন আনা',
      running: 'চলমান প্রকল্প',
      completed: 'সম্পন্ন প্রকল্প',
      target: 'লক্ষ্য',
      achieved: 'অর্জিত',
      location: 'অবস্থান',
      duration: 'মেয়াদ',
      viewDetails: 'বিস্তারিত দেখুন',
      packageItems: 'প্যাকেজের আইটেম'
    }
  }

  const runningProjects = [

    {
      id: 1,

      title: {
        en: 'Eid Food Package Distribution 2026',
        bn: 'ঈদ খাদ্য প্যাকেজ বিতরণ ২০২৬'
      },

      description: {
        en: 'Distributing food packages to 150 underprivileged families',
        bn: '১৫০টি অসহায় পরিবারের মাঝে খাদ্য প্যাকেজ বিতরণ'
      },

      target: {
        en: '150 Families',
        bn: '১৫০ পরিবার'
      },

      achieved: {
        en: '0 Families (Not started yet)',
        bn: '০ পরিবার (আরম্ভ হয়নি)'
      },

      location: {
        en: 'Rajbari',
        bn: 'রাজবাড়ী'
      },

      startDate: {
        en: 'March 2026',
        bn: 'মার্চ ২০২৬'
      },

      endDate: {
        en: 'April 2026',
        bn: 'এপ্রিল ২০২৬'
      },

      progress: 0,

      items: {
        en: [
          'Semai - 1 packet',
          'Lachcha Semai - 1 packet',
          'Sugar - 1 kg',
          'Milk - 200 gm',
          'Oil - 1/2 liter',
          'Raisins',
          'Soap',
          'Spices',
          'Pola Rice - 1 kg',
          'Lentils - 1/2 kg'
        ],

        bn: [
          'সেমাই - ১ প্যাকেট',
          'লাচ্ছা সেমাই - ১ প্যাকেট',
          'চিনি - ১ কেজি',
          'দুধ - ২০০ গ্রাম',
          'তেল - ১/২ লিটার',
          'কিসমিস',
          'সাবান',
          'মশলা',
          'পোলা চাল - ১ কেজি',
          'ডাল - ১/২ কেজি'
        ]
      }

    },

  ]


  const completedProjects = [

    {
      id: 3,

      title: {
        en: 'Eid Food Package Distribution 2025',
        bn: 'ঈদ খাদ্য প্যাকেজ বিতরণ ২০২৫'
      },

      description: {
        en: 'Distributed food packages to 120 families',
        bn: '১২০টি পরিবারের মাঝে খাদ্য প্যাকেজ বিতরণ'
      },

      target: {
        en: '120 Families',
        bn: '১২০ পরিবার'
      },

      location: {
        en: 'Rajbari',
        bn: 'রাজবাড়ী'
      },

      duration: {
        en: 'March 2025 - April 2025',
        bn: 'মার্চ ২০২৫ - এপ্রিল ২০২৫'
      }

    },

    

  ]

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    )
  }

  return (

    <div className="pt-20">

      {/* HERO */}

      <section className=" px-4 py-20 bg-emerald-800 text-white text-center">

        <motion.h1
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="text-4xl font-bold mb-4"
        >
          {content[language].title}
        </motion.h1>

        <p className="text-lg opacity-90">
          {content[language].subtitle}
        </p>

      </section>


      {/* TABS */}

      <div className="flex justify-center gap-4 py-8">

        <button
          onClick={()=>setActiveTab('running')}
          className={`px-6 py-2 rounded-full ${
            activeTab==='running'
            ?'bg-emerald-600 text-white'
            :'bg-gray-200'
          }`}
        >
          {content[language].running}
        </button>

        <button
          onClick={()=>setActiveTab('completed')}
          className={`px-6 py-2 rounded-full ${
            activeTab==='completed'
            ?'bg-emerald-600 text-white'
            :'bg-gray-200'
          }`}
        >
          {content[language].completed}
        </button>

      </div>


      {/* PROJECTS */}

      <div className="max-w-6xl mx-auto px-4 pb-16">


        {activeTab==='running' && runningProjects.map(project=>(
          
          <div key={project.id} className="bg-white rounded-xl shadow mb-6 p-6">

            <h2 className="text-2xl font-bold mb-2">
              {project.title[language]}
            </h2>

            <p className="text-gray-600 mb-4">
              {project.description[language]}
            </p>


            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">

              <div className="flex items-center gap-2">
                <Users size={16}/>
                {content[language].target}: {project.target[language]}
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16}/>
                {content[language].achieved}: {project.achieved[language]}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16}/>
                {project.location[language]}
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={16}/>
                {project.startDate[language]} - {project.endDate[language]}
              </div>

            </div>


            <div className="h-2 bg-gray-200 rounded mb-4">
              <div
                style={{width:`${project.progress}%`}}
                className="h-full bg-emerald-600 rounded"
              />
            </div>


            {project.items && (

              <div>

                <h3 className="font-semibold mb-2">
                  {content[language].packageItems}
                </h3>

                <div className="grid grid-cols-2 gap-2 text-sm">

                  {project.items[language].map((item,i)=>(
                    <div key={i}>• {item}</div>
                  ))}

                </div>

              </div>

            )}

          </div>

        ))}


        {activeTab==='completed' && completedProjects.map(project=>(

          <div key={project.id} className="bg-white rounded-xl shadow mb-6 p-6">

            <h2 className="text-xl font-bold mb-2">
              {project.title[language]}
            </h2>

            <p className="text-gray-600 mb-4">
              {project.description[language]}
            </p>

            <div className="text-sm text-gray-600 space-y-2">

              <div>
                {content[language].target}: {project.target[language]}
              </div>

              <div>
                {project.location[language]}
              </div>

              <div>
                {project.duration[language]}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}