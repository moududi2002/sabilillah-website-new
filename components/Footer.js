// components/Footer.js
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-white">SF</span>
              </div>
              <span className="font-bold text-xl">Sabilillah</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to serving humanity through charitable initiatives, food programs, and community development since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-emerald-400 transition">Our Projects</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-emerald-400 transition">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition">Contact</Link></li>
              <li><Link href="/donate" className="text-gray-400 hover:text-emerald-400 transition">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-emerald-400 mt-1" />
                <span className="text-gray-400 text-sm">contact@sabilillahfoundation.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-emerald-400 mt-1" />
                <span className="text-gray-400 text-sm">+880 1910-649179</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-400 mt-1" />
                <span className="text-gray-400 text-sm">Kalukhali, Rajbari, Bangladesh - 7722</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
            © {new Date().getFullYear()} Sabilillah Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}