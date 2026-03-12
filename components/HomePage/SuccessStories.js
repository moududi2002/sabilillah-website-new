// components/HomePage/SuccessStories.js
'use client'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function SuccessStories({ language }) {
  const stories = [
    {
      name: 'Fatema Begum',
      location: 'Rajbari',
      story: {
        en: 'The food package from Sabilillah Foundation helped my family celebrate Eid properly. We are forever grateful.',
        bn: 'সাবিলিল্লাহ ফাউন্ডেশনের খাদ্য প্যাকেজ আমার পরিবারকে ঈদ properly উদযাপন করতে সাহায্য করেছে। আমরা চিরকৃতজ্ঞ।'
      }
    },
    {
      name: 'Abdul Karim',
      location: 'Faridpur',
      story: {
        en: 'During the floods, they were the first to reach us with relief materials. Allah bless them.',
        bn: 'বন্যার সময়, তারা প্রথম আমাদের কাছে ত্রাণ সামগ্রী নিয়ে পৌঁছায়। আল্লাহ তাদের মঙ্গল করুন।'
      }
    },
    {
      name: 'Rahima Khatun',
      location: 'Rajbari',
      story: {
        en: 'The winter clothes kept my children warm during the cold nights. Thank you for your kindness.',
        bn: 'শীতবস্ত্র আমার বাচ্চাদের ঠাণ্ডা রাতে উষ্ণ রেখেছে। আপনার দয়ার জন্য ধন্যবাদ।'
      }
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">
            {language === 'en' ? 'Success Stories' : 'সাফল্যের গল্প'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Real stories from the people we\'ve helped'
              : 'আমরা যাদের সাহায্য করেছি তাদের বাস্তব গল্প'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-emerald-50 rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 text-emerald-300 w-8 h-8" />
              <p className="text-gray-700 mb-4 italic">
                "{story.story[language]}"
              </p>
              <div>
                <p className="font-bold text-emerald-800">{story.name}</p>
                <p className="text-sm text-gray-500">{story.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}