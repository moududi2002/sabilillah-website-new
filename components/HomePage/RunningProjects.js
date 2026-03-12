// components/HomePage/RunningProjects.js
'use client'
import { motion } from 'framer-motion'
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function RunningProjects({ language }) {
  const projects = [
    {
      title: { en: 'Eid Food Package Distribution', bn: 'ঈদ খাদ্য প্যাকেজ বিতরণ' },
      description: {
        en: 'Distributing food packages to 150 underprivileged families this Eid',
        bn: 'এই ঈদে ১৫০টি অসহায় পরিবারের মাঝে খাদ্য প্যাকেজ বিতরণ'
      },
      target: '150 Families',
      location: 'Rajbari',
      progress: 50,
      image: '/images/projects/eid-food.jpg'
    },
    {
      title: { en: 'Winter Clothing Drive', bn: 'শীতবস্ত্র বিতরণ' },
      description: {
        en: 'Providing warm clothes to homeless people in northern districts',
        bn: 'উত্তরাঞ্চলের গরীব ও অসহায় মানুষের মাঝে শীতবস্ত্র বিতরণ'
      },
      target: '500 People',
      location: 'Multiple Districts',
      progress: 75,
      image: '/images/projects/winter.jpg'
    },
    {
      title: { en: 'Monthly Food Program', bn: 'মাসিক খাদ্য সহায়তা' },
      description: {
        en: 'Regular food support to orphanages and elderly homes',
        bn: 'এতিমখানা ও বৃদ্ধাশ্রমে নিয়মিত খাদ্য সহায়তা'
      },
      target: '200 Families/month',
      location: 'Rajbari & Faridpur',
      progress: 100,
      image: '/images/projects/food-program.jpg'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">
            {language === 'en' ? 'Running Projects' : 'চলমান প্রকল্প'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Current initiatives making a difference in communities'
              : 'সম্প্রদায়ে পরিবর্তন আনার বর্তমান উদ্যোগ'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title.en}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.progress}%
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description[language]}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2" />
                    <span>{project.target}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
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

                <Link
                  href="/projects"
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition"
                >
                  <span>{language === 'en' ? 'Learn More' : 'আরও জানুন'}</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}