'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function DonateHeroSection({ language = 'en' }) {

  const content = {
    en: {
      title: 'Make a Donation',
      subtitle: 'Your generosity can bring smiles to many faces'
    },
    bn: {
      title: 'দান করুন',
      subtitle: 'আপনার উদারতা অনেকের মুখে হাসি ফোটাতে পারে'
    }
  }

  const text = content[language] || content.en

  return (
    <section className="relative py-20 bg-gradient-to-r from-emerald-900 to-emerald-700">

      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L37 20L58 20L40 33L45 55L30 44L15 55L20 33L2 20L23 20L30 0Z' fill='%23ffffff' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <Heart className="w-16 h-16 mx-auto mb-4" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {text.title}
          </h1>

          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {text.subtitle}
          </p>

        </motion.div>

      </div>

    </section>
  )
}