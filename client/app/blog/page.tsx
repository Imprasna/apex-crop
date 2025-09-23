"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import { Search, Calendar, User, Tag, ArrowRight, BookOpen, TrendingUp, Users, Trophy } from "lucide-react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Coaching", "Tournaments", "Equipment", "Tips", "News"]

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Pickleball Techniques Every Beginner Should Master",
      excerpt:
        "Learn the fundamental techniques that will give you a solid foundation in pickleball and help you improve your game quickly.",
      category: "Coaching",
      author: "John Martinez",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Spring Championship Recap: Thrilling Matches and New Champions",
      excerpt:
        "A detailed recap of our recent Spring Championship tournament, highlighting the best matches and celebrating our new champions.",
      category: "Tournaments",
      author: "Lisa Chen",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Choosing the Right Paddle: A Complete Buyer's Guide",
      excerpt:
        "Everything you need to know about selecting the perfect pickleball paddle for your playing style and skill level.",
      category: "Equipment",
      author: "Mike Thompson",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Mental Game Strategies for Competitive Play",
      excerpt: "Develop the mental toughness and strategic thinking needed to excel in competitive pickleball matches.",
      category: "Tips",
      author: "Sarah Williams",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "New Court Expansion: Doubling Our Capacity",
      excerpt: "Exciting news about our facility expansion, adding 6 new courts to better serve our growing community.",
      category: "News",
      author: "Apex Pickleball Team",
      date: "February 28, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Injury Prevention and Recovery for Pickleball Players",
      excerpt:
        "Essential tips for staying healthy and preventing common pickleball injuries, plus recovery strategies.",
      category: "Tips",
      author: "Dr. Amanda Foster",
      date: "February 25, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const stats = [
    { icon: <BookOpen className="w-8 h-8" />, number: "150+", label: "Articles Published" },
    { icon: <Users className="w-8 h-8" />, number: "5K+", label: "Monthly Readers" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "25+", label: "Expert Contributors" },
    { icon: <Trophy className="w-8 h-8" />, number: "50+", label: "Tournament Recaps" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">Pickleball Blog</h1>
              <p className="font-secondary text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Expert tips, tournament coverage, equipment reviews, and the latest news from the world of pickleball
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-secondary text-gray-600">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="font-primary text-3xl md:text-4xl font-bold text-primary mb-4">Featured Article</h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-primary/80 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {featuredPost.category}
                      </div>
                    </div>
                    <h3 className="font-primary text-2xl md:text-3xl font-bold text-primary mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="font-secondary text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                      <Link href={`/blog/${featuredPost.id}`}>
                        <Button className="bg-primary hover:bg-primary/90">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl md:text-4xl font-bold text-primary mb-4">Latest Articles</h2>
              <p className="font-secondary text-lg text-gray-600">
                Stay updated with the latest tips, news, and insights from our experts
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <ScrollAnimation key={post.id} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/80 rounded-xl">
                  <div className="relative h-48 overflow-hidden rounded-xl">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-primary/90 text-white px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col h-fit">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="font-primary text-lg font-semibold text-primary mb-3 line-clamp-2">{post.title}</h3>
                    <p className="font-secondary text-gray-600 mb-4 flex-grow text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                      <Link href={`/blog/${post.id}`}>
                        <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white">
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <ScrollAnimation>
              <div className="text-center py-12">
                <p className="font-secondary text-gray-600 text-lg">No articles found matching your search criteria.</p>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Stay in the Loop</h2>
            <p className="font-secondary text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest articles, tips, and tournament updates
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Subscribe
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
