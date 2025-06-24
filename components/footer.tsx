import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-primary font-bold text-xl">Elite Pickleball</span>
            </div>
            <p className="text-gray-300 font-secondary mb-4">
              Premier pickleball coaching, court management, and tournament organization.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-primary font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-secondary">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-gray-300 hover:text-secondary transition-colors">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/courts" className="text-gray-300 hover:text-secondary transition-colors">
                  Court Management
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-gray-300 hover:text-secondary transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/merchandise" className="text-gray-300 hover:text-secondary transition-colors">
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-primary font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 font-secondary">
              <li>
                <span className="text-gray-300">Private Lessons</span>
              </li>
              <li>
                <span className="text-gray-300">Group Coaching</span>
              </li>
              <li>
                <span className="text-gray-300">Court Rentals</span>
              </li>
              <li>
                <span className="text-gray-300">Tournament Hosting</span>
              </li>
              <li>
                <span className="text-gray-300">Equipment Sales</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-primary font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 font-secondary">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-gray-300">123 Pickleball Ave, Sports City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-gray-300">info@elitepickleball.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 font-secondary">© 2024 Elite Pickleball Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
