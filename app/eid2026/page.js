// app/donate/page.js
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Shield, Copy, CheckCircle, AlertCircle, ArrowLeft, Home, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"
import Navbar from '/components/Navbar'

export default function DonatePage() {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    countryCode: '+880',
    amount: '',
    customAmount: '',
    paymentMethod: '',
    transactionId: ''
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copiedField, setCopiedField] = useState('')
  const [errors, setErrors] = useState({})

  const countryCodes = [
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+1', country: 'USA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
  ]

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

  const paymentMethods = [
    { id: 'bkash', name: 'bKash', bnName: 'বিকাশ', icon: '/images/icon/bkash.png'},
    { id: 'nagad', name: 'Nagad', bnName: 'নগদ', icon: '/images/icon/nagad.png' },
    { id: 'rocket', name: 'Rocket', bnName: 'রকেট', icon: '/images/icon/rocket.png' },
    { id: 'bankBD', name: 'Bank (BD)', bnName: 'ব্যাংক (বাংলাদেশ)', icon: '/images/icon/ibbl.png' },
    { id: 'bankUSA', name: 'Bank (USA)', bnName: 'ব্যাংক (ইউএসএ)', icon: '/images/icon/us b.png' }
  ]

  const paymentDetails = {
    bkash: {
      en: '01910649179',
      bn: '০১৯১০৬৪৯১৭৯',
      fullEn: 'bKash Merchant: 01910649179 (Personal) • BKash Name: ANICHUR RAHMAN',
      fullBn: 'বিকাশ মার্চেন্ট: ০১৯১০৬৪৯১৭৯ (পার্সোনাল) • বিকাশ নাম: ANICHUR RAHMAN'
    },
    nagad: {
      en: '01910649179',
      bn: '০১৯১০৬৪৯১৭৯',
      fullEn: 'Nagad: 01910649179 (Personal) • Nagad Name: ANICHUR RAHMAN',
      fullBn: 'নগদ: ০১৯১০৬৪৯১৭৯ (পার্সোনাল) • নগদ নাম: ANICHUR RAHMAN'
    },
    rocket: {
      en: '017246530540',
      bn: '০১৭২৪৬৫৩০৫৪০',
      fullEn: 'Rocket: 017246530540 (Personal) • Acc. Name: Anichur Rahman',
      fullBn: 'রকেট: ০১৭২৪৬৫৩০৫৪০ (পার্সোনাল) • অ্যাকাউন্ট নাম: Anichur Rahman'
    },
    bankBD: {
      en: {
        bank: 'Islami Bank Bangladesh PLC',
        branch: 'Baliakandi Sub-Branch, Rajbari',
        account: '20507550200168001',
        routing: '125820736',
        swift: 'IBBLBDDH',
        full: 'Islami Bank Bangladesh PLC, A/C No.: 20507550200168001, Routing: 125820736, Swift: IBBLBDDH'
      },
      bn: {
        bank: 'ইসলামী ব্যাংক বাংলাদেশ পিএলসি',
        branch: 'বালিয়াকান্দি সাব-ব্রাঞ্চ, রাজবাড়ী',
        account: '20507550200168001',
        routing: '125820736',
        swift: 'IBBLBDDH',
        full: 'ইসলামী ব্যাংক বাংলাদেশ পিএলসি, অ্যাকাউন্ট নং: 20507550200168001, রাউটিং: 125820736, সুইফট: IBBLBDDH'
      }
    },
    bankUSA: {
      en: {
        bank: 'Chase Bank',
        branch: 'New York, USA',
        account: '123456789',
        routing: '021000021',
        swift: 'CHASUS33',
        full: 'Chase Bank, A/C: 123456789, Routing: 021000021, Swift: CHASUS33'
      },
      bn: {
        bank: 'চেজ ব্যাংক',
        branch: 'নিউ ইয়র্ক, ইউএসএ',
        account: '123456789',
        routing: '021000021',
        swift: 'CHASUS33',
        full: 'চেজ ব্যাংক, অ্যাকাউন্ট: 123456789, রাউটিং: 021000021, সুইফট: CHASUS33'
      }
    }
  }

  const amountOptions = [500, 1000, 2000, 5000, 10000]

  const t = {
    en: {
      title: 'Ramadan Food Package 2026',
      subtitle: 'Support a family this Eid with essential food items',
      name: 'Full Name',
      namePlaceholder: 'Enter your full name',
      phone: 'Phone Number',
      phonePlaceholder: 'Enter phone number',
      countryCode: 'Country Code',
      amount: 'Donation Amount',
      customAmount: 'Custom Amount',
      selectAmount: 'Select or enter amount',
      paymentMethod: 'Payment Method',
      selectPayment: 'Select payment method',
      transactionId: 'Transaction ID',
      transactionPlaceholder: 'Enter transaction ID (TrxID)',
      accountDetails: 'Account Details',
      copy: 'Copy',
      copyNumber: 'Copy Number',
      copyAll: 'Copy All',
      copyAccount: 'Copy Account No',
      copyRouting: 'Copy Routing',
      copySwift: 'Copy Swift',
      copied: 'Copied!',
      donate: 'Complete Donation',
      privacy: 'Your information is safe with us. We never share your data.',
      success: 'Thank you for your donation!',
      successMessage: 'Your support will help bring joy to a family this Eid.',
      error: 'Please fill in all required fields',
      minAmount: 'Minimum donation amount is 100 BDT',
      invalidPhone: 'Please enter a valid phone number',
      back: 'Back',
      home: 'Home',
      bankName: 'Bank Name',
      branchName: 'Branch Name',
      accountNo: 'Account Number',
      routingNo: 'Routing Number',
      swiftCode: 'Swift Code'
    },
    bn: {
      title: 'রমজান ফুড প্যাকেজ ২০২৬',
      subtitle: 'ঈদে একটি পরিবারের জন্য প্রয়োজনীয় খাদ্য সামগ্রী সহায়তা করুন',
      name: 'পূর্ণ নাম',
      namePlaceholder: 'আপনার পূর্ণ নাম লিখুন',
      phone: 'মোবাইল নম্বর',
      phonePlaceholder: 'ফোন নম্বর দিন',
      countryCode: 'কান্ট্রি কোড',
      amount: 'দানের পরিমাণ',
      customAmount: 'নিজের পরিমাণ',
      selectAmount: 'পরিমাণ নির্বাচন করুন',
      paymentMethod: 'পেমেন্ট পদ্ধতি',
      selectPayment: 'পেমেন্ট পদ্ধতি নির্বাচন করুন',
      transactionId: 'ট্রানজেকশন আইডি',
      transactionPlaceholder: 'ট্রানজেকশন আইডি দিন (TrxID)',
      accountDetails: 'অ্যাকাউন্ট ডিটেইলস',
      copy: 'কপি',
      copyNumber: 'নম্বর কপি করুন',
      copyAll: 'সব কপি করুন',
      copyAccount: 'অ্যাকাউন্ট নং কপি',
      copyRouting: 'রাউটিং কপি',
      copySwift: 'সুইফট কপি',
      copied: 'কপি হয়েছে!',
      donate: 'ডোনেশন সম্পন্ন করুন',
      privacy: 'আপনার তথ্য আমাদের কাছে নিরাপদ। আমরা কখনো আপনার তথ্য প্রকাশ করি না।',
      success: 'আপনার দানের জন্য ধন্যবাদ!',
      successMessage: 'আপনার সহায়তা একটি পরিবারের মুখে হাসি ফোটাবে।',
      error: 'সব ফিল্ড পূরণ করুন',
      minAmount: 'সর্বনিম্ন দান ১০০ টাকা',
      invalidPhone: 'সঠিক মোবাইল নম্বর দিন',
      back: 'পেছনে',
      home: 'হোম',
      bankName: 'ব্যাংকের নাম',
      branchName: 'শাখার নাম',
      accountNo: 'অ্যাকাউন্ট নম্বর',
      routingNo: 'রাউটিং নম্বর',
      swiftCode: 'সুইফট কোড'
    }
  }

  const currentLang = t[language]

  const validateForm = () => {
    const newErrors = {}
    const amount = formData.customAmount || formData.amount
    const fullPhone = formData.countryCode + formData.phone
    
    if (!formData.name) newErrors.name = true
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = true
    }
    if (!amount || amount < 100) newErrors.amount = true
    if (!formData.paymentMethod) newErrors.paymentMethod = true
    if (!formData.transactionId) newErrors.transactionId = true

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const fullPhone = formData.countryCode + formData.phone
      console.log('Form submitted with full phone:', fullPhone)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(false), 2000)
  }

  const getDisplayText = (method) => {
    if (['bkash', 'nagad', 'rocket'].includes(method)) {
      return paymentDetails[method][`full${language === 'en' ? 'En' : 'Bn'}`]
    } else {
      return paymentDetails[method][language].full
    }
  }

  const renderBankDetails = (method) => {
    const details = paymentDetails[method][language]
    
    return (
      <div className="space-y-3">
        {/* Bank Name */}
        <div className="flex items-center justify-between bg-white/50 p-2 rounded-lg">
          <div>
            <span className="text-xs text-gray-500 block">{currentLang.bankName}</span>
            <span className="text-sm font-medium">{details.bank}</span>
          </div>
          
        </div>

        {/* Branch */}

        <div className="flex items-center justify-between bg-white/50 p-2 rounded-lg">
            <div>
                <span className="text-xs text-gray-500 block">{currentLang.branchName}</span>   
                <span className="text-sm font-medium">{details.branch}</span>   
                </div>
                
        </div>


        {/* Account Number */}
        <div className="flex items-center justify-between bg-white/50 p-2 rounded-lg">
          <div>
            <span className="text-xs text-gray-500 block">{currentLang.accountNo}</span>
            <span className="text-sm font-mono">{details.account}</span>
          </div>
          <button
            onClick={() => handleCopy(details.account, 'account')}
            className="p-2 hover:bg-emerald-100 rounded-lg transition-colors"
            title={currentLang.copyAccount}
          >
            {copied === 'account' ? <CheckCircle size={16} className="text-emerald-600" /> : <Copy size={16} className="text-emerald-600" />}
          </button>
        </div>

        {/* Routing Number */}
        <div className="flex items-center justify-between bg-white/50 p-2 rounded-lg">
          <div>
            <span className="text-xs text-gray-500 block">{currentLang.routingNo}</span>
            <span className="text-sm font-mono">{details.routing}</span>
          </div>
          <button
            onClick={() => handleCopy(details.routing, 'routing')}
            className="p-2 hover:bg-emerald-100 rounded-lg transition-colors"
            title={currentLang.copyRouting}
          >
            {copied === 'routing' ? <CheckCircle size={16} className="text-emerald-600" /> : <Copy size={16} className="text-emerald-600" />}
          </button>
        </div>

        {/* Swift Code */}
        <div className="flex items-center justify-between bg-white/50 p-2 rounded-lg">
          <div>
            <span className="text-xs text-gray-500 block">{currentLang.swiftCode}</span>
            <span className="text-sm font-mono">{details.swift}</span>
          </div>
          <button
            onClick={() => handleCopy(details.swift, 'swift')}
            className="p-2 hover:bg-emerald-100 rounded-lg transition-colors"
            title={currentLang.copySwift}
          >
            {copied === 'swift' ? <CheckCircle size={16} className="text-emerald-600" /> : <Copy size={16} className="text-emerald-600" />}
          </button>
        </div>

        {/* Copy All Button */}
        <button
          onClick={() => handleCopy(details.full, 'all')}
          className="w-full mt-2 px-3 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2"
        >
          {copied === 'all' ? (
            <>
              <CheckCircle size={14} />
              <span>{currentLang.copied}</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>{currentLang.copyAll}</span>
            </>
          )}
        </button>
      </div>
    )
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-emerald-600">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back & Home Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-6"
          >
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>{currentLang.back}</span>
            </button>
            
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors"
            >
              <Home size={18} />
              <span>{currentLang.home}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-700 text-sm font-semibold mb-4">
              <Gift className="w-4 h-4" />
              <span>2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {currentLang.title}
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg">
              {currentLang.subtitle}
            </p>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {currentLang.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder={currentLang.namePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition`}
                />
              </div>

              {/* Phone Field with Country Code */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {currentLang.phone} <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative w-32">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                      className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition appearance-none bg-white"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value})
                      setErrors({...errors, phone: false})
                    }}
                    placeholder={currentLang.phonePlaceholder}
                    className={`flex-1 px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{currentLang.invalidPhone}</p>
                )}
              </div>

              {/* Amount Options */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {currentLang.amount} <span className="text-red-500">*</span>
                </label>
                
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-3">
                  {amountOptions.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, amount: amount.toString(), customAmount: ''})
                        setErrors({...errors, amount: false})
                      }}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        formData.amount === amount.toString()
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ৳{amount}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  value={formData.customAmount}
                  onChange={(e) => {
                    setFormData({...formData, customAmount: e.target.value, amount: ''})
                    setErrors({...errors, amount: false})
                  }}
                  placeholder={currentLang.customAmount}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.amount ? 'border-red-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition`}
                />
                {errors.amount && (
                  <p className="mt-1 text-xs text-red-500">{currentLang.minAmount}</p>
                )}
              </div>

              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {currentLang.paymentMethod} <span className="text-red-500">*</span>
                </label>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, paymentMethod: method.id})
                        setErrors({...errors, paymentMethod: false})
                      }}
                      className={`px-2 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                        formData.paymentMethod === method.id
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                        {method.icon.startsWith('/') ? (
                          <Image 
                            src={method.icon} 
                            alt={method.name} 
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-xl leading-none">{method.icon}</span>
                        )}
                      </div>
                      <span className="truncate text-sm">{language === 'en' ? method.name : method.bnName}</span>
                    </button>
                  ))}
                </div>

                {/* Account Details Box */}
                {formData.paymentMethod && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-50 p-4 rounded-xl mb-4 border border-emerald-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-700">
                        {currentLang.accountDetails}:
                      </span>
                    </div>

                    {['bkash', 'nagad', 'rocket'].includes(formData.paymentMethod) ? (
                      <>
                        <p className="text-gray-600 font-mono text-sm break-words leading-relaxed mb-3">
                          {getDisplayText(formData.paymentMethod)}
                        </p>
                        <button
                          onClick={() => handleCopy(paymentDetails[formData.paymentMethod][language], formData.paymentMethod)}
                          className="w-full px-3 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2"
                        >
                          {copied === formData.paymentMethod ? (
                            <>
                              <CheckCircle size={14} />
                              <span>{currentLang.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>{currentLang.copyNumber}</span>
                            </>
                          )}
                        </button>
                      </>
                    ) : (
                      renderBankDetails(formData.paymentMethod)
                    )}
                  </motion.div>
                )}
              </div>

              {/* Transaction ID */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {currentLang.transactionId} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.transactionId}
                  onChange={(e) => {
                    setFormData({...formData, transactionId: e.target.value})
                    setErrors({...errors, transactionId: false})
                  }}
                  placeholder={currentLang.transactionPlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.transactionId ? 'border-red-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition`}
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 leading-snug">
                  {currentLang.privacy}
                </p>
              </div>

              {/* Error Message */}
              {Object.keys(errors).length > 0 && (
                <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                  <AlertCircle size={16} />
                  <span>{currentLang.error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {currentLang.donate}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccess && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm mx-4"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {currentLang.success}
                </h3>
                <p className="text-gray-600">
                  {currentLang.successMessage}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link 
            href="/" 
            className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-2 transition-colors"
          >
            <span>←</span>
            <span>{language === 'en' ? 'Back to Home' : 'হোম পেজে ফিরে যান'}</span>
          </Link>
        </motion.div>
      </main>
    </>
  )
}