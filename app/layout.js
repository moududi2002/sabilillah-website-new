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

  title: 'Sabilillah Foundation | সাবিলিল্লাহ ফাউন্ডেশন',

  description:
    'Sabilillah Foundation is dedicated to serving humanity through charitable initiatives, food programs, and community development. | সাবিলিল্লাহ ফাউন্ডেশন মানবতার সেবায় দাতব্য কার্যক্রম, খাদ্য কর্মসূচি ও কমিউনিটি উন্নয়নে কাজ করছে।',

  keywords: [
    'Sabilillah Foundation',
    'Islamic Charity Bangladesh',
    'NGO Bangladesh',
    'Charity Organization',
    'Food Distribution',
    'Rajbari NGO'
  ],

  metadataBase: new URL('https://sabilillahfoundation.org'),

  openGraph: {

    title: 'Sabilillah Foundation | সাবিলিল্লাহ ফাউন্ডেশন',

    description:
      'Dedicated to serving humanity through charity, food distribution and community development.',

    url: 'https://sabilillahfoundation.org',

    siteName: 'Sabilillah Foundation',

    images: [
      {
        url: '/meta-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Sabilillah Foundation'
      }
    ],

    locale: 'en_US',
    type: 'website',
  },


  twitter: {

    card: 'summary_large_image',

    title: 'Sabilillah Foundation | সাবিলিল্লাহ ফাউন্ডেশন',

    description:
      'Serving humanity through charitable initiatives and community development.',

    images: ['/meta-preview.jpg'],
  },


  icons: {

    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',

  },

}


export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body
        className={`${inter.variable} ${bengali.variable} font-sans bg-gray-50`}
      >

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