// components/HomePage/DonationCTA.js
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function DonationCTA({ language }) {
  const content = {
    en: {
      title: 'Support Our Cause',
      subtitle: 'Your donation can make a real difference in someone\'s life',
      button: 'Donate Now',
      impact1: 'Feed a family for a month',
      impact2: 'Provide winter clothes',
      impact3: 'Support education'
    },
    bn: {
      title: 'আমাদের উদ্যোগে সহায়তা করুন',
      subtitle: 'আপনার দান কারো জীবনে বাস্তব পরিবর্তন আনতে পারে',
      button: 'এখনই দান করুন',
      impact1: 'একটি পরিবারকে এক মাস খাওয়ান',
      impact2: 'শীতবস্ত্র প্রদান করুন',
      impact3: 'শিক্ষায় সহায়তা করুন'
    }
  }

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white"
        >
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-3">
              {content[language].impact1}
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              {content[language].impact2}
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              {content[language].impact3}
            </div>
          </div>

          <Link
            href="/donate"
            className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition transform hover:scale-105"
          >
            {content[language].button}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}