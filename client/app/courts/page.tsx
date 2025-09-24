"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import {
  MapPin,
  Users,
  Wifi,
  Car,
  Coffee,
  Shield,
  CheckCircle,
  Calendar,
  Star,
  ExternalLink,
  Clock,
} from "lucide-react"

export default function CourtsPage() {
  const courtFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Surfaces",
      description: "Professional-grade courts with optimal playing conditions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiple Locations",
      description: "Partner courts across the city for your convenience",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Modern Amenities",
      description: "Free WiFi, climate control, and comfortable seating areas",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Parking",
      description: "Ample parking space at all partner locations",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Refreshments",
      description: "On-site cafés with drinks, snacks, and healthy options",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Extended Hours",
      description: "Most locations open 6 AM to 11 PM for your convenience",
    },
  ]

  const partnerCourts = [
    {
      name: "Paddle Rattle",
      location: "Downtown Sports District",
      address: "123 Sports Avenue, Downtown",
      courts: 3,
      features: ["Indoor Courts", "Climate Controlled", "Pro Shop", "Parking"],
      image: "/paddle-rattle.jpg",
      rating: 4.8,
      reviews: 124,
      hours: "6 AM - 10 PM",
      link: "https://turftown.in/chennai/sports-venue/prc-pickleball-saligramam-pickleball",
    },
    {
      name: "Any Time Pickleball",
      location: "Riverside District",
      address: "456 River Road, Riverside",
      courts: 2,
      features: ["Outdoor Courts", "Scenic Views", "Café", "Equipment Rental"],
      image: "/prc.jpg",
      rating: 4.7,
      reviews: 89,
      hours: "7 AM - 9 PM",
      link: "https://turftown.in/chennai/sports-venue/prc-pickleball-saligramam-pickleball",
    },
    {
      name: "Prasad Recreational Center",
      location: "Central Business District",
      address: "789 Metro Plaza, CBD",
      courts: 4,
      features: ["Mixed Courts", "Tournament Facility", "Locker Rooms", "Coaching"],
      image: "/prc.jpg",
      rating: 4.9,
      reviews: 156,
      hours: "6 AM - 11 PM",
      link: "https://turftown.in/chennai/sports-venue/prc-pickleball-saligramam-pickleball",
    },
    // {
    //   name: "Northside Recreation Center",
    //   location: "Northside Community",
    //   address: "321 North Street, Northside",
    //   courts: 4,
    //   features: ["Community Courts", "Beginner Friendly", "Group Classes", "Affordable"],
    //   image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=300&fit=crop",
    //   rating: 4.5,
    //   reviews: 67,
    //   hours: "8 AM - 8 PM",
    //   link: "https://turftown.in/chennai/sports-venue/prc-pickleball-saligramam-pickleball",
    // },
    // {
    //   name: "Westside Athletic Club",
    //   location: "Westside Premium",
    //   address: "654 West Boulevard, Westside",
    //   courts: 12,
    //   features: ["Premium Facility", "Member Exclusive", "Spa Services", "Restaurant"],
    //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    //   rating: 4.8,
    //   reviews: 203,
    //   hours: "5 AM - 11 PM",
    //   link: "https://turftown.in/chennai/sports-venue/prc-pickleball-saligramam-pickleball",
    // },
    // {
    //   name: "Southpark Sports Arena",
    //   location: "Southpark Area",
    //   address: "987 South Park Drive, Southpark",
    //   courts: 7,
    //   features: ["Tournament Courts", "Live Streaming", "Spectator Seating", "Events"],
    //   image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=300&fit=crop",
    //   rating: 4.6,
    //   reviews: 92,
    //   hours: "6 AM - 10 PM",
    //   link: "https://turftown.in/chennai/sports-venue/prc-pickleball-saligramam-pickleball",
    // },
  ]

  const testimonials = [
    {
      name: "David Wilson",
      rating: 5,
      text: "The partner courts are always in perfect condition. Great facilities and easy booking through TurfTown!",
      court: "Apex Sports Complex",
    },
    {
      name: "Amanda Foster",
      rating: 5,
      text: "Love having multiple locations to choose from. The variety of courts keeps the game interesting.",
      court: "Riverside Pickleball Center",
    },
    {
      name: "Carlos Martinez",
      rating: 5,
      text: "Best network of pickleball facilities in the area. Clean, well-maintained, and great atmosphere.",
      court: "Metro Sports Hub",
    },
  ]

  const handleBookCourt = (link: string) => {
    window.open(link, "_blank");
  };

  const handleBookCourtGeneral = () => { window.open("https://turftown.in", "_blank") }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=800&fit=crop')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">Partner Court Network</h1>
                <p className="font-secondary text-xl md:text-2xl mb-8 opacity-90">
                  Access premium pickleball courts across the city through our partner network
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                    onClick={handleBookCourtGeneral}
                  >
                    Book on TurfTown
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-white text-primary font-semibold"
                    onClick={() => {
                      const section = document.getElementById("partner-courts");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    View Locations
                    <MapPin className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Court Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Premium Facilities</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                All our partner courts offer world-class facilities and amenities
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courtFeatures.map((feature, index) => (
              <ScrollAnimation key={feature.title} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 border-2 border-primary/20 rounded-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                    <p className="font-secondary text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Courts */}
      <section className="py-20 bg-gray-50" id="partner-courts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Our Partner Courts</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our network of premium pickleball facilities across the city
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCourts.map((court, index) => (
              <ScrollAnimation key={court.name} delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/80 rounded-xl">
                  <div className="relative h-48">
                    <Image src={court.image || "/placeholder.svg"} alt={court.name} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full font-semibold text-sm">
                      {court.courts} Courts
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-primary text-xl font-bold text-primary mb-2">{court.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-secondary text-sm">{court.location}</span>
                    </div>
                    <p className="font-secondary text-gray-600 text-sm mb-4">{court.address}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(court.rating) ? "text-secondary fill-current" : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">({court.reviews})</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {court.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                          <span className="font-secondary text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-primary mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-secondary text-sm">{court.hours}</span>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                      onClick={() => handleBookCourt(court.link)}
                    >
                      Book on TurfTown
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">How to Book</h2>
              <p className="font-secondary text-xl text-gray-600">
                Easy booking process through our partner platform TurfTown
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-2 border-primary/20 rounded-xl">
            {[
              {
                step: "1",
                title: "Choose Location",
                description: "Select your preferred court from our partner network",
              },
              {
                step: "2",
                title: "Pick Date & Time",
                description: "Choose your preferred date and time slot",
              },
              {
                step: "3",
                title: "Book & Play",
                description: "Complete booking on TurfTown and enjoy your game",
              },
            ].map((step, index) => (
              <ScrollAnimation key={step.step} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-primary mb-4">{step.title}</h3>
                    <p className="font-secondary text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={400}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={handleBookCourtGeneral}
              >
                Start Booking on TurfTown
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">What Our Players Say</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from players who love our partner court network
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 border-2 border-primary/80 rounded-xl">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="font-secondary text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-primary font-semibold text-primary">{testimonial.name}</div>
                      <div className="font-secondary text-sm text-secondary">{testimonial.court}</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Ready to Play?</h2>
            <p className="font-secondary text-xl mb-8 opacity-90">
              Book your court today and experience our premium partner facilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={handleBookCourtGeneral}
              >
                Book Now on TurfTown
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white text-primary font-semibold px-8 py-4 text-lg"
                onClick={() => {
                  const section = document.getElementById("partner-courts");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <MapPin className="mr-2 w-5 h-5" />
                Find Nearest Court
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
