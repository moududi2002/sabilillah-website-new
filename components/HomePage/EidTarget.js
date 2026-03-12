// components/HomePage/EidTarget.js
'use client'
import { motion } from 'framer-motion'
import { Gift, Users, Package, Heart } from 'lucide-react'
import Link from 'next/link'

export default function EidTarget({ language }) {
  const t = {
    en: {
      title: 'Eid Food Package',
      subtitle: 'Target: 150 Families',
      raised: '0 Families',
      goal: '150 Families',
      items: 'Package Items',
      itemsList: ['Shemai', 'Sugar', 'Milk', 'Oil', 'Rice', 'Dal', 'Spices', 'Soap'],
      cta: 'Sponsor a Family'
    },
    bn: {
      title: 'ঈদ ফুড প্যাকেজ',
      subtitle: 'লক্ষ্য: ১৫০ পরিবার',
      raised: '০ পরিবার',
      goal: '১৫০ পরিবার',
      items: 'প্যাকেজ আইটেম',
      itemsList: ['সেমাই', 'চিনি', 'দুধ', 'তেল', 'চাল', 'ডাল', 'মসলা', 'সাবান'],
      cta: 'একটি পরিবারকে সহায়তা করুন'
    }
  }

  const currentLang = t[language]

  return (
    <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600">

      {/* Eid Food Package 2026 Header */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-8"
>
  {/* EID Badge */}
  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-3">
    <Gift className="w-4 h-4" />
    <span>{language === 'en' ? 'Special Initiative' : 'বিশেষ উদ্যোগ'}</span>
  </div>

  {/* Main Title */}
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
    {language === 'en' ? 'EID FOOD PACKAGE' : 'ঈদ ফুড প্যাকেজ'}
    <span className="block text-2xl md:text-3xl text-emerald-200 mt-1">
      2026
    </span>
  </h2>

  {/* Subtitle */}
  <p className="text-white/90 text-lg max-w-2xl mx-auto">
    {language === 'en' 
      ? 'Spread joy this Eid with your generous support' 
      : 'আপনার উদার সহায়তায় ঈদের আনন্দ ছড়িয়ে দিন'}
  </p>
</motion.div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side - Target */}
            <div className="lg:w-1/3 p-8 bg-gradient-to-br from-emerald-50 to-teal-50">
              <div className="text-center">
                {/* Icon */}
                <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {currentLang.title}
                </h3>
                <p className="text-emerald-600 font-semibold mb-6">
                  {currentLang.subtitle}
                </p>
                
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{currentLang.raised}</span>
                    <span>{currentLang.goal}</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '0%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full bg-emerald-600 rounded-full"
                    />
                  </div>
                </div>

               {/* Number */}
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-4xl font-bold text-emerald-600">
                      {language === 'bn' ? (150).toLocaleString('bn-BD') : 150}
                    </span>

                    <span className="text-4xl font-bold text-emerald-600">
                      {language === 'en' ? 'Families' : 'পরিবার'}
                    </span>
                  </div>

              </div>
            </div>

            {/* Right Side - Items */}
            <div className="lg:w-2/3 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Package className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-700">
                  {currentLang.items}
                </h4>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {currentLang.itemsList.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <Gift className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
             <Link href="/eid2026" className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>{currentLang.cta}</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}