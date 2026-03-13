// app/team/page.js
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, MapPin, Users, Heart, HandHeart, UserPlus, Briefcase, GraduationCap, Building2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TeamPage() {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

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
      title: 'Our Team',
      subtitle: 'Dedicated individuals working tirelessly for the community',
      management: 'Management Team',
      volunteers: 'Our Volunteers',
      volunteerSubtitle: 'The backbone of our organization',
      donors: 'Our Donors',
      donorSubtitle: 'Generous supporters making a difference',
      joinTeam: 'Join Our Team',
      joinText: 'Be a part of our mission to serve humanity.',
      joinButton: 'Become a Volunteer',
      location: 'Location',
      totalVolunteers: 'Active Volunteers',
      totalDonors: 'Monthly Donors',
      professionalStatus: 'Professional Status',
      viewMore: 'View Profile',
    },
    bn: {
      title: 'আমাদের টিম',
      subtitle: 'সম্প্রদায়ের জন্য নিরলসভাবে কাজ করা নিবেদিতপ্রাণ ব্যক্তিবর্গ',
      management: 'পরিচালনা টিম',
      volunteers: 'আমাদের স্বেচ্ছাসেবক',
      volunteerSubtitle: 'আমাদের সংগঠনের মেরুদণ্ড',
      donors: 'আমাদের দাতা',
      donorSubtitle: 'উদার সমর্থকরা পরিবর্তন আনছেন',
      joinTeam: 'আমাদের টিমে যোগ দিন',
      joinText: 'মানবতার সেবায় আমাদের মিশনের অংশ হোন।',
      joinButton: 'স্বেচ্ছাসেবক হোন',
      location: 'অবস্থান',
      totalVolunteers: 'সক্রিয় স্বেচ্ছাসেবক',
      totalDonors: 'মাসিক দাতা',
      professionalStatus: 'পেশাগত অবস্থা',
      viewMore: 'প্রোফাইল দেখুন',
    },
  }

  const managementTeam = [
    {
      name: { en: 'Anichur Rahman', bn: 'আনিছুর রহমান' },
      role: { en: 'Chairman', bn: 'চেয়ারম্যান' },
      unit: { en: 'Board of Directors', bn: 'পরিচালনা পর্ষদ' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      image: '/images/team/anichur.jpg',
      bio: {
        en: 'Leading the foundation with vision and dedication.',
        bn: 'প্রতিষ্ঠালগ্ন থেকে নিষ্ঠার সাথে ফাউন্ডেশনের নেতৃত্ব দিচ্ছেন।',
      },
      professionalStatus: {
        en: {
          title: 'PhD Student',
          institution: 'School of Computing, Georgia Southern University',
          country: 'USA',
          icon: GraduationCap
        },
        bn: {
          title: 'পিএইচডি শিক্ষার্থী',
          institution: 'স্কুল অব কম্পিউটিং, জর্জিয়া সাউদার্ন ইউনিভার্সিটি',
          country: 'মার্কিন যুক্তরাষ্ট্র',
          icon: GraduationCap
        }
      },
      social: {
        email: 'anis.mbstu.cse@gmail.com',
        linkedin: 'https://linkedin.com/in/anichur',
      },
    },
    {
      name: { en: 'Nazmul Haque', bn: 'নাজমুল হক' },
      role: { en: 'Finance Chief', bn: 'অর্থ বিভাগীয় প্রধান' },
      unit: { en: 'Finance Unit', bn: 'অর্থ ইউনিট' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      image: '/images/team/nazmul.jpg',
      bio: {
        en: 'Ensuring transparent financial management.',
        bn: 'আর্থিক কার্যক্রমের স্বচ্ছতা নিশ্চিত করছেন।',
      },
      professionalStatus: {
        en: {
          title: 'Senior Officer',
          institution: 'Account Section, Islami Bank Bangladesh PLC',
          country: 'Bangladesh',
          icon: Building2
        },
        bn: {
          title: 'সিনিয়র অফিসার',
          institution: 'একাউন্ট সেকশন, ইসলামী ব্যাংক বাংলাদেশ পিএলসি',
          country: 'বাংলাদেশ',
          icon: Building2
        }
      },
      social: {
        email: 'nazmul@example.com',
        linkedin: 'https://www.linkedin.com/in/eng-anichur-rahman',
      },
    },
    {
      name: { en: 'Airin Afroj Aishi', bn: 'আইরিন আফরোজ ঐশি' },
      role: { en: 'Deputy Director', bn: 'উপ-পরিচালক' },
      unit: { en: 'Director Unit', bn: 'ডিরেক্টর ইউনিট' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      image: '/images/team/airin.jpg',
      bio: {
        en: 'Coordinating programs and operations.',
        bn: 'প্রকল্প ও কার্যক্রম সমন্বয় করছেন।',
      },
      professionalStatus: {
        en: {
          title: 'BSc Student',
          institution: 'Dept of Computing and Information System, Daffodil International University',
          country: 'Bangladesh',
          icon: GraduationCap
        },
        bn: {
          title: 'বিএসসি শিক্ষার্থী',
          institution: 'কম্পিউটিং এন্ড ইনফরমেশন সিস্টেম বিভাগ, ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি',
          country: 'বাংলাদেশ',
          icon: GraduationCap
        }
      },
      social: {
        email: 'airinafroj93@gmail.com',
        linkedin: 'https://linkedin.com/in/airin',
      },
    },
    {
      name: { en: 'Abul Ala Mowdudi', bn: 'আবুল আলা মওদূদী' },
      role: { en: 'Operations Director', bn: 'নির্বাহী পরিচালক' },
      unit: { en: 'Operational Unit', bn: 'অপারেশনাল ইউনিট' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      image: '/images/team/moududi.jpeg',
      bio: {
        en: 'Managing field operations and activities.',
        bn: 'মাঠ পর্যায়ের কার্যক্রম পরিচালনা করছেন।',
      },
      professionalStatus: {
        en: {
          title: 'Final Year Student',
          institution: 'Dept of Computer Science and Engineering, University of Dhaka',
          country: 'Bangladesh',
          icon: GraduationCap
        },
        bn: {
          title: 'শেষ বর্ষের শিক্ষার্থী',
          institution: 'কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগ, ঢাকা বিশ্ববিদ্যালয়',
          country: 'বাংলাদেশ',
          icon: GraduationCap
        }
      },
      social: {
        email: 'moududi2002@gmail.com',
        linkedin: 'https://www.linkedin.com/in/abul-ala-moududi',
      },
    },
    {
      name: { en: 'Razaul Karim', bn: 'রেজাউল করিম' },
      role: { en: 'Assistant Operations Director', bn: 'সহকারী নির্বাহী পরিচালক' },
      unit: { en: 'Operational Unit', bn: 'অপারেশনাল ইউনিট' },
      location: { en: 'Rajbari', bn: 'রাজবাড়ি' },
      image: '/images/team/razaul.jpg',
      bio: {
        en: 'Supporting operational and volunteer coordination.',
        bn: 'অপারেশনাল কার্যক্রম ও স্বেচ্ছাসেবক সমন্বয়ে সহায়তা করছেন।',
      },
      professionalStatus: {
        en: {
          title: 'Project Engineer',
          institution: 'Line Section, Bangladesh Power Development Board (BPDB)',
          country: 'Bangladesh',
          icon: Briefcase
        },
        bn: {
          title: 'প্রজেক্ট ইঞ্জিনিয়ার',
          institution: 'লাইন সেকশন, বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)',
          country: 'বাংলাদেশ',
          icon: Briefcase
        }
      },
      social: {
        email: 'razaulce15004@gmail.com',
        linkedin: 'https://linkedin.com/in/razaul',
      },
    },
  ]

  // Volunteers List
  const volunteers = [
    { 
      name: { en: 'Mahabubur Rahman', bn: 'মহাবুবুর রহমান' },
      role: { en: 'Field Coordinator', bn: 'ফিল্ড কো-অর্ডিনেটর' },
      image: '/images/team/volunteer1.jpg',
      location: { en: 'Rajbari Sadar', bn: 'রাজবাড়ী সদর' },
      professionalStatus: {
        en: { title: 'Social Worker', institution: 'Community Development' },
        bn: { title: 'সমাজসেবক', institution: 'কমিউনিটি ডেভেলপমেন্ট' }
      }
    },
    { 
      name: { en: 'Md. Mitun', bn: 'মোঃ মিতুন' },
      role: { en: 'Food Distribution', bn: 'খাদ্য বিতরণ' },
      image: '/images/team/volunteer2.jpg',
      location: { en: 'Goalanda', bn: 'গোয়ালন্দ' },
      professionalStatus: {
        en: { title: 'Businessman', institution: 'Local Business' },
        bn: { title: 'ব্যবসায়ী', institution: 'স্থানীয় ব্যবসা' }
      }
    },
    { 
      name: { en: 'Mehedi Hasan', bn: 'মেহেদী হাসান' },
      role: { en: 'Youth Coordinator', bn: 'যুব সমন্বয়ক' },
      image: '/images/team/volunteer3.jpg',
      location: { en: 'Pangsha', bn: 'পাংশা' },
      professionalStatus: {
        en: { title: 'Student', institution: 'Govt. College' },
        bn: { title: 'শিক্ষার্থী', institution: 'সরকারি কলেজ' }
      }
    },
    { 
      name: { en: 'Hridoy Mondol', bn: 'হৃদয় মন্ডল' },
      role: { en: 'Logistics', bn: 'লজিস্টিকস' },
      image: '/images/team/volunteer4.jpg',
      location: { en: 'Baliakandi', bn: 'বালিয়াকান্দি' },
      professionalStatus: {
        en: { title: 'Transport Coordinator', institution: 'Local Transport' },
        bn: { title: 'পরিবহন সমন্বয়ক', institution: 'স্থানীয় পরিবহন' }
      }
    },
    { 
      name: { en: 'Maruf Hasan', bn: 'মারুফ হাসান' },
      role: { en: 'Event Management', bn: 'ইভেন্ট ম্যানেজমেন্ট' },
      image: '/images/team/volunteer5.jpg',
      location: { en: 'Rajbari', bn: 'রাজবাড়ী' },
      professionalStatus: {
        en: { title: 'Freelancer', institution: 'Digital Marketing' },
        bn: { title: 'ফ্রিল্যান্সার', institution: 'ডিজিটাল মার্কেটিং' }
      }
    }
  ]

  if (!mounted) return null

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 text-white text-center pt-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
        >
          {content[language].title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 text-xl opacity-90 max-w-2xl mx-auto"
        >
          {content[language].subtitle}
        </motion.p>
      </section>

      {/* Management Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              {content[language].management}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Meet the dedicated leaders guiding our mission'
                : 'আমাদের মিশনকে এগিয়ে নেওয়া নিবেদিতপ্রাণ নেতাদের সাথে পরিচিত হোন'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {managementTeam.map((member, index) => {
              const ProfessionalIcon = member.professionalStatus[language].icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  {/* Card with glass morphism effect */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100">
                    
                    {/* Image Container with Modern Design */}
                    <div className="relative h-56 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/40 to-transparent z-10" />
                      
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
                      
                      {/* Profile Image */}
                      <div className="relative w-full h-full">
                        <img
                          src={member.image}
                          alt={member.name[language]}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Name and Role Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {member.name[language]}
                        </h3>
                        <p className="text-sm text-emerald-200 font-medium">
                          {member.role[language]}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 space-y-3">
                      {/* Unit */}
                      <div className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full w-fit">
                        <Building2 size={12} />
                        <span>{member.unit[language]}</span>
                      </div>

                      {/* Professional Status - New Addition */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0.7,
                          height: 'auto'
                        }}
                        className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3 border border-emerald-100"
                      >
                        <div className="flex items-start gap-2">
                          <ProfessionalIcon size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-emerald-800">
                              {member.professionalStatus[language].title}
                            </p>
                            <p className="text-xs text-gray-600 mt-0.5">
                              {member.professionalStatus[language].institution}
                            </p>
                            {member.professionalStatus[language].country && (
                              <p className="text-xs text-emerald-600 mt-0.5">
                                {member.professionalStatus[language].country}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>

                      {/* Bio */}
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {member.bio[language]}
                      </p>

                      {/* Location & Social */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin size={12} className="mr-1 text-emerald-500" />
                          {member.location[language]}
                        </div>
                        
                        <div className="flex gap-2">
                          <a 
                            href={`mailto:${member.social.email}`}
                            className="text-gray-400 hover:text-emerald-600 transition-colors"
                          >
                            <Mail size={14} />
                          </a>
                          <a 
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-emerald-600 transition-colors"
                          >
                            <Linkedin size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteers Section (simplified for brevity - same as before) */}
      {/* ... */}

      {/* Donors Section (simplified for brevity - same as before) */}
      {/* ... */}

      {/* Join Team CTA Section */}
      {/* ... */}
    </div>
  )
}