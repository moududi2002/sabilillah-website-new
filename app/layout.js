// app/layout.js
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/UI/BackToTop'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const bengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'], 
  variable: '--font-bengali',
  display: 'swap',
})

export const metadata = {
  title: 'Sabilillah Foundation - Islamic Charity Organization',
  description: 'Dedicated to serving humanity through charitable initiatives, food programs, and community development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bengali.variable} font-sans bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}