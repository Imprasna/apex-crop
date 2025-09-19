"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import { ShoppingBag, Star, Heart, ShoppingCart, Zap, Award, Truck } from "lucide-react"

export default function MerchandisePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Paddles", "Balls", "Apparel", "Accessories", "Bags"]

  const products = [
    {
      id: 1,
      name: "Elite Pro Paddle",
      category: "Paddles",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      badge: "Best Seller",
      description: "Professional-grade paddle with carbon fiber face and polymer core",
    },
    {
      id: 2,
      name: "Tournament Balls (Pack of 6)",
      category: "Balls",
      price: 24.99,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      badge: "Official",
      description: "USAPA approved tournament balls for competitive play",
    },
    {
      id: 3,
      name: "Elite Academy Jersey",
      category: "Apparel",
      price: 39.99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      badge: "New",
      description: "Moisture-wicking performance jersey with academy logo",
    },
    {
      id: 4,
      name: "Pro Grip Overgrip (3-pack)",
      category: "Accessories",
      price: 12.99,
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      description: "Premium overgrip for enhanced paddle control and comfort",
    },
    {
      id: 5,
      name: "Tournament Bag",
      category: "Bags",
      price: 79.99,
      rating: 4.8,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      badge: "Popular",
      description: "Spacious bag with multiple compartments for all your gear",
    },
    {
      id: 6,
      name: "Performance Shorts",
      category: "Apparel",
      price: 34.99,
      rating: 4.5,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1506629905607-d9c36e0a3b0d?w=400&h=400&fit=crop",
      description: "Lightweight, breathable shorts perfect for intense matches",
    },
    {
      id: 7,
      name: "Beginner Paddle Set",
      category: "Paddles",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.4,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      badge: "Great Value",
      description: "Perfect starter set with two paddles and carrying case",
    },
    {
      id: 8,
      name: "Sweatband Set",
      category: "Accessories",
      price: 8.99,
      rating: 4.3,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      description: "Comfortable sweatbands for head and wrists",
    },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "Free shipping on orders over $75",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "30-day money-back guarantee on all products",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "2-3 day delivery on most items",
    },
  ]

  const promotions = [
    {
      title: "Spring Sale",
      description: "Up to 30% off select paddles",
      code: "SPRING30",
      validUntil: "March 31, 2024",
    },
    {
      title: "Bundle Deal",
      description: "Buy paddle + balls, get 15% off",
      code: "BUNDLE15",
      validUntil: "April 15, 2024",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">Pro Shop</h1>
                <p className="font-secondary text-xl md:text-2xl mb-8 opacity-90">
                  Premium pickleball equipment, apparel, and accessories from top brands
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Shop Now
                    <ShoppingBag className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    View Deals
                    <Zap className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=500&fit=crop"
                  alt="Pickleball equipment"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="font-primary text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="font-secondary text-gray-600">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-primary text-3xl md:text-4xl font-bold text-primary mb-4">Special Offers</h2>
              <p className="font-secondary text-lg text-gray-600">Don't miss out on these limited-time deals</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <ScrollAnimation key={promo.title} delay={index * 100}>
                <Card className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-primary text-xl font-bold text-primary mb-2">{promo.title}</h3>
                    <p className="font-secondary text-gray-600 mb-4">{promo.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-secondary text-white px-3 py-1 rounded font-semibold text-sm">
                          Code: {promo.code}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">Valid until {promo.validUntil}</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Our Products</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our carefully curated selection of premium pickleball gear
              </p>
            </div>
          </ScrollAnimation>

          {/* Category Filter */}
          <ScrollAnimation delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ScrollAnimation key={product.id} delay={index * 50}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-secondary text-white px-2 py-1 rounded text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-primary text-lg font-semibold text-primary mb-2">{product.name}</h3>
                    <p className="font-secondary text-gray-600 text-sm mb-4">{product.description}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-secondary fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-secondary group-hover:hover:bg-secondary/90 transition-colors">
                      Add to Cart
                      <ShoppingCart className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Gear Up for Success</h2>
            <p className="font-secondary text-xl mb-8 opacity-90">
              Get the equipment you need to take your game to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg">
                Shop All Products
                <ShoppingBag className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                <Award className="mr-2 w-5 h-5" />
                View Brands
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
