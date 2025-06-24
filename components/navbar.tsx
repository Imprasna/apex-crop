"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BookingModal from "@/components/booking-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Coaching", href: "/coaching" },
    { name: "Courts", href: "/courts" },
    { name: "Tournaments", href: "/tournaments" },
    { name: "Merchandise", href: "/merchandise" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const handleMenuItemClick = () => {
    setIsOpen(false)
  }

  const handleBookNowClick = () => {
    setIsBookingModalOpen(true)
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 z-50 relative">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-primary font-bold text-xl text-primary">Elite Pickleball</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-secondary"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden z-50 relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none rounded-lg p-2 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                  />
                  <span
                    className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full bg-gradient-to-br from-primary via-primary/95 to-primary/90 transform transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full transition-all duration-1000 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            />
            <div
              className={`absolute top-1/3 -left-10 w-32 h-32 bg-white/10 rounded-full transition-all duration-1000 delay-200 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            />
            <div
              className={`absolute bottom-20 right-10 w-24 h-24 bg-secondary/30 rounded-full transition-all duration-1000 delay-400 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            />
          </div>

          {/* Menu Content */}
          <div className="relative h-full flex flex-col justify-center items-center px-8">
            {/* Logo */}
            <div
              className={`mb-12 transition-all duration-700 delay-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">P</span>
                </div>
                <span className="font-primary font-bold text-2xl text-white">Elite Pickleball</span>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col items-center space-y-6 mb-12">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className={`text-white font-secondary text-xl font-medium hover:text-secondary transition-all duration-300 transform hover:scale-110 ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${400 + index * 100}ms` : "0ms",
                  }}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Book Now Button */}
            <div
              className={`transition-all duration-700 delay-1000 ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
            >
              <Button
                onClick={handleBookNowClick}
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Button>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
