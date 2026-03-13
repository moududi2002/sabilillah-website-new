// app/contact/page.js
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, Send } from 'lucide-react'

export default function ContactPage() {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)

    const handleLanguageChange = () => {
      const newLang = localStorage.getItem('language') || 'en'
      setLanguage(newLang)
    }

    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us for any queries or collaboration',
      address: 'Visit Us',
      phone: 'Call Us',
      email: 'Email Us',
      social: 'Follow Us',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Message'
      },
      map: 'Our Location',
      success: 'Message sent successfully!',
      sending: 'Sending...'
    },
    bn: {
      title: 'যোগাযোগ করুন',
      subtitle: 'যেকোনো প্রশ্ন বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন',
      address: 'ঠিকানা',
      phone: 'ফোন করুন',
      email: 'ইমেইল করুন',
      social: 'সোশ্যাল মিডিয়া',
      form: {
        name: 'আপনার নাম',
        email: 'ইমেইল ঠিকানা',
        phone: 'ফোন নম্বর',
        message: 'আপনার বার্তা',
        submit: 'বার্তা পাঠান'
      },
      map: 'আমাদের অবস্থান',
      success: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
      sending: 'পাঠানো হচ্ছে...'
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(content[language].success)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-emerald-600">Loading...</div>
      </div>
    )
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {content[language].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            {content[language].subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-20">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {content[language].address}
              </h3>
              <p className="text-gray-600">
                Kalukhali, Rajbari<br />
                Bangladesh - 7722
              </p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {content[language].phone}
              </h3>
              <p className="text-gray-600">
                +880 1910-649179
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {content[language].email}
              </h3>
              <p className="text-gray-600">
                contact@sabilillahfoundation.org
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'en' ? 'Send us a Message' : 'আমাদের একটি বার্তা পাঠান'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content[language].form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content[language].form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content[language].form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content[language].form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>{content[language].form.submit}</span>
                </button>
              </form>
            </motion.div>

            {/* Map & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
                      {/* Map */}
<div className="bg-white rounded-2xl shadow-xl p-6">
  <h3 className="text-xl font-bold text-gray-800 mb-4">
    {content[language].map}
  </h3>

  <div className="h-64 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps?q=Rajbari+Bangladesh&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {content[language].social}
                </h3>
                <div className="flex space-x-4 justify-center">
                  <button className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition">
                    <Facebook size={20} />
                  </button>
                  <button className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-800 transition">
                    <Linkedin size={20} />
                  </button>
                  <button className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition">
                    <Youtube size={20} />
                  </button>
                  <button className="bg-green-600 p-3 rounded-full text-white hover:bg-green-700 transition">
                    <Phone size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}