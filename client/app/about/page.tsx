import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import { Users, Target, Heart, Award, Trophy } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "John Martinez",
      role: "Head Coach & Founder",
      experience: "15 years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former professional player with multiple championship titles",
    },
    {
      name: "Sarah Williams",
      role: "Senior Coach",
      experience: "10 years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specializes in youth development and competitive training",
    },
    {
      name: "Mike Thompson",
      role: "Court Manager",
      experience: "8 years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in facility management and player experience",
    },
    {
      name: "Lisa Chen",
      role: "Tournament Director",
      experience: "12 years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Organizes world-class tournaments and competitive events",
    },
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from coaching to facility management.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community",
      description: "Building a strong, supportive community of pickleball enthusiasts.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusivity",
      description: "Welcoming players of all ages, skill levels, and backgrounds.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Growth",
      description: "Committed to continuous improvement and player development.",
    },
  ]

  const achievements = [
    { number: "500+", label: "Students Trained" },
    { number: "50+", label: "Tournaments Hosted" },
    { number: "12", label: "Championship Titles" },
    { number: "5", label: "Years of Excellence" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollAnimation>
              <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">About Elite Pickleball</h1>
              <p className="font-secondary text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Dedicated to excellence in pickleball coaching, court management, and community building since 2019
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section> */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=800&fit=crop')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollAnimation>
              <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">About Elite Pickleball</h1>
              <p className="font-secondary text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Dedicated to excellence in pickleball coaching, court management, and community building since 2019
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="font-primary text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 font-secondary text-gray-600 text-lg">
                  <p>
                    Elite Pickleball Academy was founded in 2019 with a simple mission: to provide world-class
                    pickleball instruction and facilities to players of all skill levels. What started as a small
                    coaching operation has grown into the premier pickleball destination in the region.
                  </p>
                  <p>
                    Our founder, John Martinez, recognized the need for professional-grade instruction and facilities as
                    pickleball's popularity exploded. With his background as a former professional player and certified
                    instructor, he assembled a team of passionate coaches and staff dedicated to excellence.
                  </p>
                  <p>
                    Today, we're proud to serve over 500 active students, host major tournaments, and maintain 12
                    state-of-the-art courts. Our commitment to quality and community has made us the go-to destination
                    for pickleball enthusiasts throughout the area.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=500&fit=crop"
                  alt="Elite Pickleball Academy facility"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Our Mission & Values</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to fostering a love for pickleball while building a strong, inclusive community
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} delay={index * 100}>
                <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary/60 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary">{value.icon}</div>
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-primary mb-4">{value.title}</h3>
                    <p className="font-secondary text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={400}>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-primary text-2xl font-bold text-primary mb-4 text-center">Our Mission</h3>
              <p className="font-secondary text-lg text-gray-600 text-center max-w-4xl mx-auto">
                To provide exceptional pickleball instruction, world-class facilities, and memorable tournament
                experiences while fostering a welcoming community where players of all levels can grow, compete, and
                enjoy the sport they love.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Team</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced team of coaches and staff are passionate about helping you achieve your pickleball goals
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollAnimation key={member.name} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/80 rounded-xl">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                        {member.experience}
                      </div>
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-primary mb-2">{member.name}</h3>
                    <p className="font-secondary text-secondary font-medium mb-4">{member.role}</p>
                    <p className="font-secondary text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Our Achievements</h2>
              <p className="font-secondary text-xl opacity-90 max-w-3xl mx-auto">
                Proud milestones that reflect our commitment to excellence and community growth
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollAnimation key={achievement.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{achievement.number}</div>
                  <div className="font-secondary text-lg opacity-90">{achievement.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <Image
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=500&fit=crop"
                alt="Community involvement"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div>
                <h2 className="font-primary text-4xl font-bold text-primary mb-6">Community Involvement</h2>
                <div className="space-y-4 font-secondary text-gray-600 text-lg">
                  <p>
                    We believe in giving back to the community that has supported us. Elite Pickleball Academy actively
                    participates in local events, sponsors youth programs, and partners with schools to introduce
                    pickleball to new generations.
                  </p>
                  <p>
                    Our annual charity tournament has raised over $50,000 for local youth sports programs, and our free
                    community clinics have introduced hundreds of new players to the sport.
                  </p>
                  <p>
                    We're proud partners with the local Parks & Recreation Department, helping to develop public courts
                    and training programs throughout the region.
                  </p>
                </div>
                <div className="mt-8 flex items-center space-x-4">
                  <Trophy className="w-8 h-8 text-secondary" />
                  <span className="font-secondary text-lg text-gray-700">Community Partner of the Year 2023</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
