// app/donate/page.js
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Heart, CreditCard, Smartphone, Banknote, CheckCircle } from 'lucide-react'

export default function DonatePage() {
  const [language, setLanguage] = useState('en')
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('bkash')
  const [customAmount, setCustomAmount] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)
  }, [])

  const content = {
    en: {
      title: 'Make a Donation',
      subtitle: 'Your generosity can bring smiles to many faces',
      presetAmounts: ['500', '1000', '2000', '5000'],
      custom: 'Custom Amount',
      paymentMethods: {
        bkash: 'bKash',
        nagad: 'Nagad',
        bank: 'Bank Transfer',
        rocket: 'Rocket'
      },
      donate: 'Donate Now',
      impact: 'Your Impact',
      impactText: 'Your donation can provide:',
      impacts: [
        'Food package for a family for one month',
        'Winter clothes for 5 people',
        'Educational supplies for 3 children',
        'Iftar for 20 fasting people'
      ],
      bankDetails: {
        title: 'Bank Details',
        bank: 'Bank Asia',
        account: 'Account: 12345678901',
        branch: 'Branch: Rajbari',
        routing: 'Routing: 123456789'
      }
    },
    bn: {
      title: 'দান করুন',
      subtitle: 'আপনার উদারতা অনেকের মুখে হাসি ফোটাতে পারে',
      presetAmounts: ['৫০০', '১০০০', '২০০০', '৫০০০'],
      custom: 'নিজের মান নির্ধারণ করুন',
      paymentMethods: {
        bkash: 'বিকাশ',
        nagad: 'নগদ',
        bank: 'ব্যাংক ট্রান্সফার',
        rocket: 'রকেট'
      },
      donate: 'এখনই দান করুন',
      impact: 'আপনার দানের প্রভাব',
      impactText: 'আপনার দানের মাধ্যমে যা সম্ভব:',
      impacts: [
        'একটি পরিবারের জন্য এক মাসের খাদ্য প্যাকেজ',
        '৫ জনের জন্য শীতবস্ত্র',
        '৩টি শিশুর জন্য শিক্ষা উপকরণ',
        '২০ জন রোজাদারের জন্য ইফতার'
      ],
      bankDetails: {
        title: 'ব্যাংক বিবরণ',
        bank: 'ব্যাংক এশিয়া',
        account: 'অ্যাকাউন্ট: ১২৩৪৫৬৭৮৯০১',
        branch: 'শাখা: রাজবাড়ী',
        routing: 'রুটিং: ১২৩৪৫৬৭৮৯'
      }
    }
  }

  const handleDonate = () => {
    // Handle donation logic here
    alert(language === 'en' 
      ? `Thank you for your donation of ${amount} Taka!` 
      : `${amount} টাকা দানের জন্য ধন্যবাদ!`)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L37 20L58 20L40 33L45 55L30 44L15 55L20 33L2 20L23 20L30 0Z' fill='%23ffffff' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content[language].title}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {content[language].subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Amount Selection */}
            <div className="p-8 border-b">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'en' ? 'Select Amount' : 'পরিমাণ নির্বাচন করুন'}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {content[language].presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      setAmount(preset)
                      setCustomAmount(false)
                    }}
                    className={`py-3 px-4 rounded-xl font-semibold transition ${
                      amount === preset && !customAmount
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ৳ {preset}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setCustomAmount(!customAmount)}
                  className={`py-3 px-4 rounded-xl font-semibold transition w-full ${
                    customAmount
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {content[language].custom}
                </button>
              </div>

              {customAmount && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4"
                >
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0"
                  />
                </motion.div>
              )}
            </div>

            {/* Payment Method */}
            <div className="p-8 border-b">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'en' ? 'Payment Method' : 'পেমেন্ট পদ্ধতি'}
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('bkash')}
                  className={`p-4 rounded-xl border-2 transition flex items-center space-x-3 ${
                    paymentMethod === 'bkash'
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <Smartphone className="w-6 h-6 text-pink-600" />
                  <span className="font-semibold">bKash</span>
                  {paymentMethod === 'bkash' && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod('nagad')}
                  className={`p-4 rounded-xl border-2 transition flex items-center space-x-3 ${
                    paymentMethod === 'nagad'
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <Smartphone className="w-6 h-6 text-orange-600" />
                  <span className="font-semibold">Nagad</span>
                  {paymentMethod === 'nagad' && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod('rocket')}
                  className={`p-4 rounded-xl border-2 transition flex items-center space-x-3 ${
                    paymentMethod === 'rocket'
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <Smartphone className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold">Rocket</span>
                  {paymentMethod === 'rocket' && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-4 rounded-xl border-2 transition flex items-center space-x-3 ${
                    paymentMethod === 'bank'
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <Banknote className="w-6 h-6 text-emerald-600" />
                  <span className="font-semibold">{content[language].paymentMethods.bank}</span>
                  {paymentMethod === 'bank' && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                  )}
                </button>
              </div>

              {/* Bank Details */}
              {paymentMethod === 'bank' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gray-50 rounded-xl"
                >
                  <h3 className="font-bold text-gray-800 mb-2">
                    {content[language].bankDetails.title}
                  </h3>
                  <p className="text-gray-600">{content[language].bankDetails.bank}</p>
                  <p className="text-gray-600">{content[language].bankDetails.account}</p>
                  <p className="text-gray-600">{content[language].bankDetails.branch}</p>
                  <p className="text-gray-600">{content[language].bankDetails.routing}</p>
                </motion.div>
              )}
            </div>

            {/* Donate Button */}
            <div className="p-8">
              <button
                onClick={handleDonate}
                disabled={!amount}
                className={`w-full py-4 rounded-xl font-bold text-lg transition flex items-center justify-center space-x-2 ${
                  amount
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>{content[language].donate} {amount && `৳ ${amount}`}</span>
              </button>
            </div>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-emerald-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
              {content[language].impact}
            </h2>
            <p className="text-center text-gray-600 mb-6">
              {content[language].impactText}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {content[language].impacts.map((impact, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{impact}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}