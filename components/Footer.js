'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {

  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {

    setMounted(true)

    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)

    const handleLanguageChange = () => {
      const newLang = localStorage.getItem('language') || 'en'
      setLanguage(newLang)
    }

    window.addEventListener('languageChange', handleLanguageChange)

    return () =>
      window.removeEventListener('languageChange', handleLanguageChange)

  }, [])

  const content = {

    en: {
      aboutText:
        'Dedicated to serving humanity through charitable initiatives, food programs, and community development since 2020.',
      quickLinks: 'Quick Links',
      about: 'About Us',
      projects: 'Our Projects',
      team: 'Our Team',
      contact: 'Contact',
      donate: 'Donate',
      contactUs: 'Contact Us',
      follow: 'Follow Us',
      address: 'Kalukhali, Rajbari, Bangladesh - 7722',
      copyright: 'All rights reserved.'
    },

    bn: {
      aboutText:
        '২০২০ সাল থেকে মানবতার সেবায় দাতব্য কার্যক্রম, খাদ্য কর্মসূচি এবং কমিউনিটি উন্নয়নে নিবেদিত।',
      quickLinks: 'দ্রুত লিংক',
      about: 'আমাদের সম্পর্কে',
      projects: 'আমাদের প্রকল্প',
      team: 'আমাদের টিম',
      contact: 'যোগাযোগ',
      donate: 'ডোনেট',
      contactUs: 'যোগাযোগ করুন',
      follow: 'আমাদের অনুসরণ করুন',
      address: 'কালুখালি, রাজবাড়ী, বাংলাদেশ - ৭৭২২',
      copyright: 'সর্বস্বত্ব সংরক্ষিত।'
    }

  }

  if (!mounted) return null

  return (

    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div>
           <div className="flex items-center space-x-2 mb-4">

                {/* Logo */}
                <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/Sabilillah Foundation Logo.svg"
                    alt="Sabilillah Foundation Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Organization Name */}
                <span className="font-bold text-xl">
                  {language === 'bn' ? 'সাবিলিল্লাহ ফাউন্ডেশন' : 'Sabilillah Foundation'}
                </span>

              </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {content[language].aboutText}
            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              {content[language].quickLinks}
            </h3>

            <ul className="space-y-2">

              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition">
                  {content[language].about}
                </Link>
              </li>

              <li>
                <Link href="/projects" className="text-gray-400 hover:text-emerald-400 transition">
                  {content[language].projects}
                </Link>
              </li>

              <li>
                <Link href="/team" className="text-gray-400 hover:text-emerald-400 transition">
                  {content[language].team}
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition">
                  {content[language].contact}
                </Link>
              </li>

              <li>
                <Link href="/donate" className="text-gray-400 hover:text-emerald-400 transition">
                  {content[language].donate}
                </Link>
              </li>

            </ul>

          </div>


          {/* Contact Info */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              {content[language].contactUs}
            </h3>

            <ul className="space-y-3">

              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-emerald-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  contact@sabilillahfoundation.org
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-emerald-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  +880 1910-649179
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  {content[language].address}
                </span>
              </li>

            </ul>

          </div>


          {/* Social Links */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              {content[language].follow}
            </h3>

            <div className="flex space-x-4">

              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Facebook size={20} />
              </a>

              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Linkedin size={20} />
              </a>

              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Youtube size={20} />
              </a>

              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Heart size={20} />
              </a>

            </div>

          </div>

        </div>


        {/* Bottom Bar */}

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">

          <p className="text-gray-400 text-sm">

            © {new Date().getFullYear()} Sabilillah Foundation. {content[language].copyright}

          </p>

        </div>

      </div>

    </footer>

  )
}