// app/page.js
'use client'
import { useState, useEffect } from 'react'
import HeroSection from '../components/HomePage/HeroSection'
import Statistics from '../components/HomePage/Statistics'
import AboutSection from '../components/HomePage/AboutSection'
import RunningProjects from '../components/HomePage/RunningProjects'
import SuccessStories from '../components/HomePage/SuccessStories'
import EidTarget from '../components/HomePage/EidTarget'
import ManagementTeam from '../components/HomePage/ManagementTeam'
import DonationCTA from '../components/HomePage/DonationCTA'

export default function Home() {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)

    // Listen for language changes
    const handleLanguageChange = () => {
      const newLang = localStorage.getItem('language') || 'en'
      setLanguage(newLang)
    }

    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="overflow-hidden">
      <HeroSection language={language} />
       <EidTarget language={language} />
      <AboutSection language={language} />
      

       <Statistics language={language} />
      <RunningProjects language={language} />
      <SuccessStories language={language} />
     
      <ManagementTeam language={language} />
      <DonationCTA language={language} />
    </div>
  )
}