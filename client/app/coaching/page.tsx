"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import { Clock, Target, Star, CheckCircle, Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"

export default function CoachingPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const programs = [
    {
      title: "Private Lessons",
      duration: "60 minutes",
      price: "$75",
      description: "One-on-one personalized instruction tailored to your specific needs and goals.",
      features: ["Personalized training plan", "Video analysis", "Technique refinement", "Strategy development"],
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
    },
    {
      title: "Group Lessons",
      duration: "90 minutes",
      price: "$35",
      description: "Small group sessions (4-6 players) focusing on fundamentals and game play.",
      features: ["Small group setting", "Skill-based grouping", "Game situations", "Social interaction"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      title: "Intensive Clinics",
      duration: "3 hours",
      price: "$120",
      description: "Comprehensive workshops covering specific aspects of the game in detail.",
      features: ["Specialized focus areas", "Advanced techniques", "Competitive drills", "Q&A sessions"],
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop",
    },
    {
      title: "Youth Programs",
      duration: "60 minutes",
      price: "$25",
      description: "Fun and engaging programs designed specifically for young players aged 8-16.",
      features: ["Age-appropriate instruction", "Fun games and drills", "Character development", "Tournament prep"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
  ]

  const coaches = [
    {
      name: "Rohit K Ahuja",
      title: "Founder & Head Coach",
      certifications: ["USAPA Certified", "PPR Certified"],
      experience: "15 years",
      specialties: ["Advanced Strategy", "Tournament Prep", "Mental Game"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Former professional player with multiple championship titles. Specializes in developing competitive players.",
    },
    {
      name: "Prasanna S",
      title: "Co-founder & Associate Coach",
      certifications: ["USAPA Certified", "Youth Specialist"],
      experience: "10 years",
      specialties: ["Youth Development", "Beginner Instruction", "Group Dynamics"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Expert in youth development and beginner instruction with a passion for growing the sport. Focuses on building skills in young players.",
    },
    {
      name: "GK",
      title: "Performance Coach",
      certifications: ["USAPA Certified", "Fitness Specialist"],
      experience: "8 years",
      specialties: ["Fitness Training", "Injury Prevention", "Performance Analysis"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Combines pickleball expertise with fitness training to optimize player performance. Focuses on players physical fitness.",
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Adams",
      rating: 5,
      text: "The coaching here transformed my game completely. I went from a beginner to competing in tournaments within 6 months!",
      program: "Private Lessons",
    },
    {
      name: "Robert Chen",
      rating: 5,
      text: "Group lessons are fantastic. Great way to learn while meeting other players. The coaches are patient and knowledgeable.",
      program: "Group Lessons",
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "My daughter loves the youth program. She's learned so much and made great friends. Highly recommend!",
      program: "Youth Programs",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">Professional Coaching</h1>
                <p className="font-secondary text-xl md:text-2xl mb-8 opacity-90">
                  Elevate your game with expert instruction from certified professionals
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    Book a Lesson
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-white text-primary font-semibold"
                  >
                    View Programs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=500&fit=crop"
                  alt="Professional pickleball coaching"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Coaching Programs</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of coaching programs designed for every skill level
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ScrollAnimation key={program.title} delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/80 rounded-xl">
                  <div className="relative h-48">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full font-semibold">
                      {program.price}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-primary text-2xl font-bold text-primary">{program.title}</h3>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{program.duration}</span>
                      </div>
                    </div>
                    <p className="font-secondary text-gray-600 mb-6">{program.description}</p>
                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                          <span className="font-secondary text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                      onClick={() => setIsBookingModalOpen(true)}
                    >
                      Book Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Coaches</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from certified professionals with years of experience and proven track records
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <ScrollAnimation key={coach.name} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-primary/80 rounded-xl">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <Image
                        src={coach.image || "/placeholder.svg"}
                        alt={coach.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                        {coach.experience}
                      </div>
                    </div>
                    <h3 className="font-primary text-xl font-bold text-primary mb-2">{coach.name}</h3>
                    <p className="font-secondary text-secondary font-medium mb-4">{coach.title}</p>
                    <p className="font-secondary text-gray-600 text-sm mb-4">{coach.bio}</p>

                    <div className="mb-4">
                      <h4 className="font-primary font-semibold text-primary mb-2">Certifications</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {coach.certifications.map((cert, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs bg-orange-400">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-primary font-semibold text-primary mb-2">Specialties</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {coach.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs border border-secondary/50">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Student Success Stories</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our students about their coaching experience and progress
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary/80 rounded-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="font-secondary text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-primary font-semibold text-primary">{testimonial.name}</div>
                      <div className="font-secondary text-sm text-secondary">{testimonial.program}</div>
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
          backgroundImage: "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="font-secondary text-xl mb-8 opacity-90">
              Book your first lesson today and experience the difference professional coaching makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book a Lesson
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white text-primary font-semibold px-8 py-4 text-lg"
              >
                <Target className="mr-2 w-5 h-5" />
                Free Consultation
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}
