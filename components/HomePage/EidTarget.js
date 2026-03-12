// components/HomePage/EidTarget.js
'use client'
import { motion } from 'framer-motion'
import { Gift, Users, Package } from 'lucide-react'

export default function EidTarget({ language }) {
  const content = {
    en: {
      title: 'Eid Food Package Distribution',
      subtitle: 'Help us bring joy to 150 families this Eid',
      target: 'Target Families',
      items: 'Package Items',
      itemsList: [
        'Shemai - 1 packet',
        'Lachcha Shemai - 1 packet',
        'Sugar - 1kg (retail packet)',
        'Milk - 200gm packet',
        'Oil - 1/2 liter',
        'Kishmish - 20 Taka',
        'Soap - 1 Lifebuoy, 2 Surf Excel (mini pack)',
        'Spices - Elaichi, Darchini (50 Taka)',
        'Polao Rice - 1 kg',
        'Masur Dal - 1/2 kg (retail packet)'
      ]
    },
    bn: {
      title: 'ঈদ খাদ্য প্যাকেজ বিতরণ',
      subtitle: 'এই ঈদে ১৫০টি পরিবারের মুখে হাসি ফোটাতে আমাদের সাহায্য করুন',
      target: 'লক্ষ্য পরিবার',
      items: 'প্যাকেজের আইটেমসমূহ',
      itemsList: [
        'সেমাই - ১ প্যাকেট',
        'লাচ্ছা সেমাই - ১ প্যাকেট',
        'চিনি - ১ কেজি (খুচরা প্যাকেট)',
        'দুধ - ২০০ গ্রাম প্যাকেট',
        'তেল - ১/২ লিটার',
        'কিশমিশ - ২০ টাকা',
        'সাবান - ১টি লাইফবয়, ২টি সার্ফ এক্সেল (মিনি প্যাক)',
        'মসলা - এলাচ, দারচিনি (৫০ টাকা)',
        'পোলাও চাল - ১ কেজি',
        'মসুর ডাল - ১/২ কেজি (খুচরা প্যাকেট)'
      ]
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Target Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Users className="w-12 h-12 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              {content[language].target}
            </h3>
            <div className="text-center">
              <span className="text-6xl font-bold text-emerald-600">150</span>
              <span className="text-2xl text-gray-500 ml-2">+</span>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Raised: 75 families</span>
                <span>Target: 150 families</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-emerald-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Items List Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {content[language].items}
              </h3>
            </div>
            
            <div className="space-y-3">
              {content[language].itemsList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
                >
                  <Gift className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Donation Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition transform hover:scale-105 shadow-lg">
            {language === 'en' ? 'Sponsor a Family' : 'একটি পরিবারকে সহায়তা করুন'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}