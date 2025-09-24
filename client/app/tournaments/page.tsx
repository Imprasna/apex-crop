"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import TournamentRegistrationModal from "@/components/tournament-registration-modal"
import RegistrationClosedModal from "@/components/registration-closed-modal"
import { Trophy, Calendar, Users, MapPin, Clock, Star, Medal, Target, CheckCircle, ArrowRight } from "lucide-react"

export default function TournamentsPage() {
  const [isTournamentRegistrationOpen, setIsTournamentRegistrationOpen] = useState(false)
  const [isRegistrationClosedOpen, setIsRegistrationClosedOpen] = useState(false)

  // Tournament registration checker - dates when registration is open
  const registrationOpenDates: { [key: string]: boolean } = {
    "2024-03-15": true, // Spring Championship
    "2024-03-22": true, // Beginner's Cup
    "2024-04-05": true, // Mixed Doubles League
    "2024-04-20": false, // Senior Masters - registration closed
  }

  const checkRegistrationStatus = (tournamentDate: string) => {
    const dateKey = tournamentDate.split(",")[0].trim() // Extract first date
    const year = "2024"
    const [month, day] = dateKey.split(" ")

    // Convert month name to number
    const monthMap: { [key: string]: string } = {
      March: "03",
      April: "04",
      May: "05",
      February: "02",
      December: "12",
    }

    const formattedDate = `${year}-${monthMap[month]}-${day.padStart(2, "0")}`
    return registrationOpenDates[formattedDate] || false
  }

  const handleRegistrationClick = (tournamentDate: string) => {
    if (checkRegistrationStatus(tournamentDate)) {
      setIsTournamentRegistrationOpen(true)
    } else {
      setIsRegistrationClosedOpen(true)
    }
  }

  const upcomingTournaments = [
    {
      title: "Spring Championship",
      date: "March 15-17, 2024",
      location: "Apex Pickleball Academy",
      entryFee: "$75",
      maxPlayers: "64",
      currentPlayers: "48",
      level: "Intermediate/Advanced",
      prizes: "$5,000 Prize Pool",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      status: "Open",
    },
    {
      title: "Beginner's Cup",
      date: "March 22, 2024",
      location: "Apex Pickleball Academy",
      entryFee: "$35",
      maxPlayers: "32",
      currentPlayers: "18",
      level: "Beginner",
      prizes: "Trophies & Medals",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop",
      status: "Open",
    },
    {
      title: "Mixed Doubles League",
      date: "April 5 - May 10, 2024",
      location: "Apex Pickleball Academy",
      entryFee: "$120/team",
      maxPlayers: "32 teams",
      currentPlayers: "24 teams",
      level: "All Levels",
      prizes: "$3,000 Prize Pool",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      status: "Open",
    },
    {
      title: "Senior Masters",
      date: "April 20-21, 2024",
      location: "Apex Pickleball Academy",
      entryFee: "$65",
      maxPlayers: "48",
      currentPlayers: "32",
      level: "50+ Age Group",
      prizes: "$2,500 Prize Pool",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      status: "Open",
    },
  ]

  const pastResults = [
    {
      tournament: "Winter Championship 2024",
      date: "February 10-12, 2024",
      winners: {
        mens: "John Smith & Mike Johnson",
        womens: "Sarah Davis & Lisa Wilson",
        mixed: "Tom Brown & Amy Chen",
      },
      participants: 72,
    },
    {
      tournament: "Holiday Classic 2023",
      date: "December 15-17, 2023",
      winners: {
        mens: "Carlos Martinez & David Lee",
        womens: "Jennifer Adams & Maria Rodriguez",
        mixed: "Steve Wilson & Kate Thompson",
      },
      participants: 64,
    },
  ]

  const tournamentFormats = [
    {
      title: "Single Elimination",
      description: "Fast-paced format where one loss eliminates a player/team",
      duration: "1-2 days",
      bestFor: "Quick tournaments with clear winners",
    },
    {
      title: "Double Elimination",
      description: "Players get a second chance in the consolation bracket",
      duration: "2-3 days",
      bestFor: "Fair competition with redemption opportunities",
    },
    {
      title: "Round Robin",
      description: "Every player/team plays against every other participant",
      duration: "1-2 days",
      bestFor: "Maximum play time and fair ranking",
    },
    {
      title: "League Play",
      description: "Extended competition over several weeks",
      duration: "4-8 weeks",
      bestFor: "Ongoing competition and skill development",
    },
  ]

  const rules = [
    "All tournaments follow USA Pickleball Association (USAPA) official rules",
    "Players must register and pay entry fees before the registration deadline",
    "Age verification required for age-group tournaments",
    "Skill level verification may be required for level-specific events",
    "Players are responsible for bringing their own paddles",
    "Tournament balls will be provided by the organizers",
    "Refunds available up to 48 hours before tournament start",
    "Weather-related postponements will be communicated via email and website",
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            filter: "grayscale(1)",
            backgroundImage:
              "url('./pickleball-t.jpg')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">Competitive Tournaments</h1>
                <p className="font-secondary text-xl md:text-2xl mb-8 opacity-90">
                  Join exciting tournaments and compete with players at your skill level
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                    onClick={() => handleRegistrationClick(upcomingTournaments[0].date)}
                  >
                    Register Now
                    <Trophy className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary font-semibold bg-transparent"
                  >
                    View Schedule
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="relative">
                <Image
                  src="/tour.png"
                  alt="Pickleball tournament action"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl opacity-1"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Upcoming Tournaments</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Register for our exciting upcoming tournaments and compete for prizes and glory
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingTournaments.map((tournament, index) => (
              <ScrollAnimation key={tournament.title} delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48">
                    <Image
                      src={tournament.image || "/placeholder.svg"}
                      alt={tournament.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full font-semibold">
                      {tournament.status}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-primary text-2xl font-bold text-primary mb-4">{tournament.title}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-secondary">{tournament.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-secondary">{tournament.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-secondary">
                          {tournament.currentPlayers}/{tournament.maxPlayers} registered
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Target className="w-4 h-4 mr-2" />
                        <span className="font-secondary">{tournament.level}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-2xl font-bold text-secondary">{tournament.entryFee}</div>
                        <div className="text-sm text-gray-500">Entry Fee</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{tournament.prizes}</div>
                        <div className="text-sm text-gray-500">Prize Pool</div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                      onClick={() => handleRegistrationClick(tournament.date)}
                    >
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Formats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Tournament Formats</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various tournament formats to suit different preferences and skill levels
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tournamentFormats.map((format, index) => (
              <ScrollAnimation key={format.title} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Trophy className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-primary mb-4">{format.title}</h3>
                    <p className="font-secondary text-gray-600 mb-4">{format.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center text-secondary">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{format.duration}</span>
                      </div>
                      <p className="text-xs text-gray-500">{format.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Past Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Recent Champions</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrate our recent tournament winners and their outstanding performances
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastResults.map((result, index) => (
              <ScrollAnimation key={result.tournament} delay={index * 200}>
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Medal className="w-8 h-8 text-secondary mr-3" />
                      <div>
                        <h3 className="font-primary text-xl font-bold text-primary">{result.tournament}</h3>
                        <p className="font-secondary text-gray-600">{result.date}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-primary font-semibold text-primary mb-2">Men's Doubles</h4>
                        <p className="font-secondary text-gray-600">{result.winners.mens}</p>
                      </div>
                      <div>
                        <h4 className="font-primary font-semibold text-primary mb-2">Women's Doubles</h4>
                        <p className="font-secondary text-gray-600">{result.winners.womens}</p>
                      </div>
                      <div>
                        <h4 className="font-primary font-semibold text-primary mb-2">Mixed Doubles</h4>
                        <p className="font-secondary text-gray-600">{result.winners.mixed}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <div className="flex items-center text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-secondary">{result.participants} participants</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Rules and Regulations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Tournament Rules</h2>
              <p className="font-secondary text-xl text-gray-600">
                Important rules and regulations for all tournament participants
              </p>
            </div>
          </ScrollAnimation>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="space-y-4">
                {rules.map((rule, index) => (
                  <ScrollAnimation key={index} delay={index * 50}>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-secondary text-gray-600">{rule}</span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Ready to Compete?</h2>
            <p className="font-secondary text-xl mb-8 opacity-90">
              Join our next tournament and test your skills against other passionate players
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => handleRegistrationClick(upcomingTournaments[0].date)}
              >
                Register for Tournament
                <Trophy className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg bg-transparent"
              >
                <Star className="mr-2 w-5 h-5" />
                View All Events
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tournament Registration Modal - Only shows if registration is open */}
      <TournamentRegistrationModal
        isOpen={isTournamentRegistrationOpen}
        onClose={() => setIsTournamentRegistrationOpen(false)}
      />

      {/* Registration Closed Modal - Shows if registration is closed */}
      <RegistrationClosedModal isOpen={isRegistrationClosedOpen} onClose={() => setIsRegistrationClosedOpen(false)} />
    </div>
  )
}