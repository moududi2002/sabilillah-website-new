// components/HomePage/Statistics.js
'use client'
import { motion } from 'framer-motion'
import { Users, Heart, Coffee, Home } from 'lucide-react'

export default function Statistics({ language }) {
  const stats = [
    { 
      icon: Users, 
      value: { en: '5000+', bn: '৫০০০+' }, 
      label: { en: 'People Helped', bn: 'সহায়তা প্রাপ্ত মানুষ' } 
    },
    { 
      icon: Heart, 
      value: { en: '1500+', bn: '১৫০০+' }, 
      label: { en: 'Food Packages', bn: 'খাদ্য প্যাকেজ' } 
    },
    { 
      icon: Coffee, 
      value: { en: '50+', bn: '৫০+' }, 
      label: { en: 'Programs Completed', bn: 'সম্পন্ন প্রকল্প' } 
    },
    { 
      icon: Home, 
      value: { en: '10+', bn: '১০+' }, 
      label: { en: 'Districts Covered', bn: 'জেলা' } 
    }
  ]

  return (
    <section className="py-16 bg-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <Icon className="w-10 h-10 mx-auto mb-3" />

                <div className="text-3xl font-bold mb-1">
                  {stat.value[language]}
                </div>

                <div className="text-sm opacity-90">
                  {stat.label[language]}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}