// app/layout.js

import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/UI/BackToTop'
import ToastPoster from '../components/UI/ToastPoster'

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
  title: {
    default: 'Sabilillah Foundation | সাবিলিল্লাহ ফাউন্ডেশন',
    template: '%s | Sabilillah Foundation'
  },
  description: 'Sabilillah Foundation is dedicated to serving humanity through charitable initiatives, food programs, and community development. | সাবিলিল্লাহ ফাউন্ডেশন মানবতার সেবায় দাতব্য কার্যক্রম, খাদ্য কর্মসূচি ও কমিউনিটি উন্নয়নে কাজ করছে।',
  keywords: [
    'Sabilillah Foundation',
    'Islamic Charity Bangladesh',
    'NGO Bangladesh',
    'Charity Organization',
    'Food Distribution',
    'Rajbari NGO',
    'সাবিলিল্লাহ ফাউন্ডেশন',
    'ইসলামিক চ্যারিটি বাংলাদেশ',
    'এনজিও বাংলাদেশ',
    'দাতব্য সংস্থা',
    'খাদ্য বিতরণ',
    'রাজবাড়ী এনজিও'
  ],
  authors: [{ name: 'Sabilillah Foundation' }],
  metadataBase: new URL('https://sabilillahfoundation.org'),
  openGraph: {
    title: 'Sabilillah Foundation | সাবিলিল্লাহ ফাউন্ডেশন',
    description: 'Dedicated to serving humanity through charity, food distribution and community development. | মানবতার সেবায় দাতব্য কার্যক্রম, খাদ্য বিতরণ ও কমিউনিটি উন্নয়নে নিবেদিত।',
    url: 'https://sabilillahfoundation.org',
    siteName: 'Sabilillah Foundation',
    images: [
      {
        url: '/meta-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Sabilillah Foundation - সাবিলিল্লাহ ফাউন্ডেশন'
      }
    ],
    locale: 'bn_BD',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabilillah Foundation | সাবিলিল্লাহ ফাউন্ডেশন',
    description: 'Serving humanity through charitable initiatives and community development. | মানবতার সেবায় দাতব্য কার্যক্রম ও কমিউনিটি উন্নয়ন।',
    images: ['/meta-preview.jpg'],
    creator: '@sabilillah',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  manifest: '/site.webmanifest',
  alternates: {
    languages: {
      'en-US': '/en',
      'bn-BD': '/bn',
    },
  },
  verification: {
    google: 'google-site-verification-code', // আপনার Google verification code দিন
    // other verification codes
  },
  category: 'nonprofit',
}

// ভাষা ডিটেক্ট করার জন্য একটি হেল্পার ফাংশন
function getLanguageFromPath(path) {
  if (path?.startsWith('/bn')) {
    return 'bn';
  }
  return 'en';
}

export default function RootLayout({ children }) {
  // কুকি বা হেডার থেকে ভাষা ডিটেক্ট করার লজিক (ঐচ্ছিক)
  // এখানে সরলতার জন্য আমরা একটি ডিফল্ট ভাষা সেট করছি
  
  return (
    <html lang="bn" dir="ltr">
      <head>
        {/* বাংলা কন্টেন্টের জন্য মেটা ট্যাগ */}
        <meta httpEquiv="content-language" content="en, bn" />
        <meta name="language" content="en, bn" />
        
        {/* ডিফল্ট ভাষা হিসেবে ইংরেজি */}
        <link rel="alternate" hrefLang="en" href="https://sabilillahfoundation.org" />
        <link rel="alternate" hrefLang="bn" href="https://sabilillahfoundation.org/bn" />
        <link rel="alternate" hrefLang="x-default" href="https://sabilillahfoundation.org" />
        
        {/* অন্যান্য মেটা ট্যাগ */}
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* জিও ট্যাগ */}
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Rajbari" />
        <meta name="geo.position" content="23.675;89.650" />
        <meta name="ICBM" content="23.675, 89.650" />
      </head>
      
      <body
        className={`${inter.variable} ${bengali.variable} font-sans bg-gray-50 min-h-screen flex flex-col`}
      >
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
        <BackToTop />
        
        {/* ToastPoster - উভয় ভাষা সাপোর্ট করে */}
        <ToastPoster language='bn' />
        
        
        {/* স্ক্রিপ্ট ফর ল্যাঙ্গুয়েজ ডিটেকশন (ঐচ্ছিক) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // ইউজারের ব্রাউজার ভাষা ডিটেক্ট করা (ঐচ্ছিক)
              (function() {
                const userLang = navigator.language || navigator.userLanguage;
                const path = window.location.pathname;
                
                // যদি ইউজার বাংলা ভাষা ব্যবহার করে এবং পাথে /bn না থাকে
                if ((userLang.startsWith('bn') || userLang.startsWith('ben')) && !path.startsWith('/bn')) {
                  // আমরা সরাসরি রিডাইরেক্ট করছি না, শুধু কুকি সেট করছি
                  document.cookie = "preferred_lang=bn; path=/; max-age=31536000";
                } else if (!userLang.startsWith('bn') && !userLang.startsWith('ben') && !path.startsWith('/en')) {
                  document.cookie = "preferred_lang=en; path=/; max-age=31536000";
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}