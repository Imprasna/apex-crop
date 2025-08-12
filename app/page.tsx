"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import { Users, Trophy, MapPin, ShoppingBag, Star, Calendar, ArrowRight, Play, Award, Target } from "lucide-react"
import BookingModal from "@/components/booking-modal"
import TournamentRegistrationModal from "@/components/tournament-registration-modal"
import RegistrationClosedModal from "@/components/registration-closed-modal"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isTournamentRegistrationOpen, setIsTournamentRegistrationOpen] = useState(false)
  const [isRegistrationClosedOpen, setIsRegistrationClosedOpen] = useState(false)

  // Tournament registration checker - same as tournaments page
  const registrationOpenDates = {
    "2024-03-15": true, // Spring Championship
    "2024-03-22": true, // Beginner's Cup
    "2024-04-05": true, // Mixed Doubles League
    "2024-04-20": false, // Senior Masters - registration closed
  }

  const checkRegistrationStatus = () => {
    // Check if any tournament registration is currently open
    // For home page, we'll check the next upcoming tournament (Spring Championship)
    return registrationOpenDates["2024-03-15"] || false
  }

  const handleTournamentRegistration = () => {
    if (checkRegistrationStatus()) {
      setIsTournamentRegistrationOpen(true)
    } else {
      setIsRegistrationClosedOpen(true)
    }
  }

  const heroSlides = [
    {
      title: "Master Your Pickleball Game",
      subtitle: "Professional coaching and world-class facilities",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=800&fit=crop",
    },
    {
      title: "Premium Court Experience",
      subtitle: "State-of-the-art courts available for booking",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    },
    {
      title: "Competitive Tournaments",
      subtitle: "Join exciting tournaments and compete with the best",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=800&fit=crop",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Coaching",
      description: "Expert instruction for all skill levels",
      link: "/coaching",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Court Management",
      description: "Premium courts available for booking",
      link: "/courts",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Tournaments",
      description: "Competitive events and leagues",
      link: "/tournaments",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Merchandise",
      description: "Quality equipment and apparel",
      link: "/merchandise",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The coaching here is exceptional! I've improved my game tremendously in just a few months.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Great facilities and friendly staff. The courts are always in perfect condition.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "Love the tournament organization here. Well-run events with great competition.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const upcomingEvents = [
    {
      date: "Mar 15",
      title: "Spring Championship",
      type: "Tournament",
      participants: "64 players",
    },
    {
      date: "Mar 22",
      title: "Beginner's Clinic",
      type: "Coaching",
      participants: "12 spots",
    },
    {
      date: "Apr 5",
      title: "Mixed Doubles League",
      type: "League",
      participants: "32 teams",
    },
  ]

  const partners = ["Wilson", "HEAD", "Selkirk", "JOOLA", "Paddletek", "Engage", "Onix", "Gamma", "Babolat", "Franklin"]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10"></div>
        <Image
          src={heroSlides[currentSlide].image || "/placeholder.svg"}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="font-primary text-5xl md:text-7xl font-bold mb-6">{heroSlides[currentSlide].title}</h1>
            <p className="font-secondary text-xl md:text-2xl mb-8 opacity-90">{heroSlides[currentSlide].subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white text-primary font-semibold px-8 py-4 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Video
              </Button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-secondary" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive pickleball services designed to elevate your game and experience
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg border-2 border-primary/80 rounded-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                      <div className="text-primary group-hover:text-secondary transition-colors">{service.icon}</div>
                    </div>
                    <h3 className="font-primary text-lg font-semibold mb-4 text-primary">{service.title}</h3>
                    <p className="font-secondary text-gray-600 mb-6">{service.description}</p>
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all font-semibold"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 bg-primary text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollAnimation>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">500+</div>
                <div className="font-secondary text-lg">Happy Students</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">12</div>
                <div className="font-secondary text-lg">Partner Courts</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">50+</div>
                <div className="font-secondary text-lg">Tournaments</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">5</div>
                <div className="font-secondary text-lg">Years Experience</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Brand Partners Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Our Brand Partners</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading pickleball brands and equipment manufacturers
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[...partners, ...partners].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 px-8">
                    <div className="h-16 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-700">{partner}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-4">What Our Players Say</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied players
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary/40 rounded-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="font-secondary text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <div className="font-primary font-semibold text-primary">{testimonial.name}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-4">Upcoming Events</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-2xl mx-auto">
                Join our exciting tournaments and training sessions
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <ScrollAnimation key={event.title} delay={index * 100}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/80 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-secondary/10 px-3 py-1 rounded-full">
                        <span className="text-secondary font-semibold text-sm">{event.date}</span>
                      </div>
                      <Calendar className="w-5 h-5 text-gray-400" />
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-primary mb-2">{event.title}</h3>
                    <p className="font-secondary text-gray-600 mb-4">{event.type}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{event.participants}</span>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90" onClick={handleTournamentRegistration}>
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={400}>
            <div className="text-center mt-12">
              <Link href="/tournaments">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All Events
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Game?</h2>
            <p className="font-secondary text-xl mb-8 opacity-90">
              Join thousands of players who have transformed their pickleball skills with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book a Lesson
                <Target className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white text-primary font-semibold px-8 py-4 text-lg"
              >
                <Award className="mr-2 w-5 h-5" />
                Join Tournament
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* Tournament Registration Modal */}
      <TournamentRegistrationModal
        isOpen={isTournamentRegistrationOpen}
        onClose={() => setIsTournamentRegistrationOpen(false)}
      />

      {/* Registration Closed Modal */}
      <RegistrationClosedModal isOpen={isRegistrationClosedOpen} onClose={() => setIsRegistrationClosedOpen(false)} />
    </div>
  )
}
