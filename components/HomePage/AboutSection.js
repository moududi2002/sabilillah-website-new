// components/HomePage/AboutSection.js
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutSection({ language }) {
  const content = {
    en: {
      title: 'About Us',
      subtitle: 'Serving humanity since 2020',
      description: 'Sabilillah Foundation is a non-profit organization dedicated to serving underprivileged communities through food programs, winter clothing drives, and emergency relief efforts. We believe in the Islamic principle of charity and work tirelessly to bring smiles to those in need.',
      mission: 'Our Mission',
      missionText: 'To alleviate poverty and suffering by providing essential support to communities in need.',
      vision: 'Our Vision',
      visionText: 'A society where everyone has access to basic necessities and lives with dignity.',
      cta: 'Learn More About Us'
    },
    bn: {
      title: 'আমাদের সম্পর্কে',
      subtitle: '২০২০ থেকে মানবতার সেবায়',
      description: 'সাবিলিল্লাহ ফাউন্ডেশন একটি অলাভজনক সংস্থা যা খাদ্য কর্মসূচি, শীতবস্ত্র বিতরণ এবং জরুরি ত্রাণ প্রচেষ্টার মাধ্যমে অসহায় সম্প্রদায়ের সেবায় নিবেদিত। আমরা দানের ইসলামী নীতিতে বিশ্বাস করি এবং অভাবীদের মুখে হাসি ফোটাতে নিরলসভাবে কাজ করি।',
      mission: 'আমাদের লক্ষ্য',
      missionText: 'প্রয়োজনীয় সহায়তা প্রদানের মাধ্যমে দারিদ্র্য ও দুর্ভোগ দূর করা।',
      vision: 'আমাদের স্বপ্ন',
      visionText: 'একটি সমাজ যেখানে প্রত্যেকের মৌলিক চাহিদা পূরণের সুযোগ রয়েছে এবং তারা মর্যাদার সাথে জীবনযাপন করে।',
      cta: 'আমাদের সম্পর্কে আরও জানুন'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">
              {content[language].title}
            </h2>
            <p className="text-emerald-600 mb-4">{content[language].subtitle}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {content[language].description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-bold text-emerald-800 mb-2">{content[language].mission}</h3>
                <p className="text-sm text-gray-600">{content[language].missionText}</p>
              </div>
              <div>
                <h3 className="font-bold text-emerald-800 mb-2">{content[language].vision}</h3>
                <p className="text-sm text-gray-600">{content[language].visionText}</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition"
            >
              <span>{content[language].cta}</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-emerald-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-700">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-700">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-emerald-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-700">50+</div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-700">10k+</div>
                  <div className="text-sm text-gray-600">Lives</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}