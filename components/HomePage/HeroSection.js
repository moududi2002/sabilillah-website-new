// components/HomePage/HeroSection.js
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'

export default function HeroSection({ language }) {
  const content = {
    en: {
      title: 'Together We Can Make a Difference',
      subtitle: 'Sabilillah Foundation is dedicated to serving humanity through charitable initiatives, food programs, and community development.',
      cta1: 'Donate Now',
      cta2: 'Learn More'
    },
    bn: {
      title: 'একসাথে আমরা পরিবর্তন আনতে পারি',
      subtitle: 'সাবিলিল্লাহ ফাউন্ডেশন মানবতার সেবায় নিবেদিত, খাদ্য কর্মসূচি এবং সম্প্রদায় উন্নয়নের মাধ্যমে।',
      cta1: 'এখনই দান করুন',
      cta2: 'আরও জানুন'
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Islamic Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L37 20L58 20L40 33L45 55L30 44L15 55L20 33L2 20L23 20L30 0Z' fill='%23ffffff' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {content[language].title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            {content[language].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-emerald-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition flex items-center justify-center space-x-2 group"
            >
              <Heart className="group-hover:scale-110 transition" />
              <span>{content[language].cta1}</span>
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center space-x-2"
            >
              <span>{content[language].cta2}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}