"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube, MessageCircle, SendHorizontal  } from "lucide-react"
import { backendApi } from "@/entities"
import axios from 'axios';
import toast from "react-hot-toast"
import { showError, showSuccess } from "@/lib/toastUtil"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);

      const response = await axios.post(`${backendApi}/contact-form`, formData);

      // console.log("Form submitted successfully:", response.data);
      showSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      showError("Form submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Pickleball Avenue", "Sports City, SC 12345"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["(555) 123-4567", "Mon-Fri: 6 AM - 10 PM"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@Apexpickleball.com", "support@Apexpickleball.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Sun: 6 AM - 10 PM", "Holidays: 8 AM - 6 PM"],
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", url: "#" },
  ]

  const departments = [
    { name: "General Inquiry", value: "general" },
    { name: "Coaching", value: "coaching" },
    { name: "Court Booking", value: "courts" },
    { name: "Tournaments", value: "tournaments" },
    // { name: "Merchandise", value: "merchandise" },
    { name: "Membership", value: "membership" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="font-primary text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                <p className="font-secondary text-xl md:text-2xl mb-8 opacity-90">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="relative">
                <Image
                  src="/get-in-touch.png"
                  alt="Apex Pickleball Academy facility"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Contact Information</h2>
              <p className="font-secondary text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ScrollAnimation key={info.title} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 border-2 border-primary/20 rounded-xl">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary">{info.icon}</div>
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-primary mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-secondary text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 border-2 border-primary/20 rounded-xl">
                  <h3 className="font-primary text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                      {/* <Send className="ml-2 w-5 h-5" /> */}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Map */}
            <ScrollAnimation delay={200}>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 border-2 border-primary/20 rounded-xl">
                  <h3 className="font-primary text-2xl font-bold text-primary mb-6">Find Us</h3>
                  <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                    {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="font-secondary text-gray-600">Interactive Map</p>
                        <p className="font-secondary text-sm text-gray-500">
                          123 Pickleball Avenue
                          <br />
                          Sports City, SC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Get Directions
                      <MapPin className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">Quick Answers</h2>
              <p className="font-secondary text-xl text-gray-600">
                Common questions and answers to help you get started
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {[
              {
                question: "What are your operating hours?",
                answer:
                  "We're open Monday through Sunday from 6 AM to 10 PM. Holiday hours may vary - please check our website or call for specific holiday schedules.",
              },
              {
                question: "Do I need to bring my own equipment?",
                answer:
                  "We provide paddles and balls for all court rentals and lessons. However, you're welcome to bring your own equipment if you prefer.",
              },
              {
                question: "How far in advance should I book a court?",
                answer:
                  "We recommend booking at least 24-48 hours in advance, especially for peak times (evenings and weekends). Members get priority booking privileges.",
              },
              {
                question: "Do you offer beginner lessons?",
                answer:
                  "We offer beginner-friendly group lessons, private instruction, and special clinics designed specifically for new players.",
              },
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-primary text-lg font-semibold text-primary mb-3 flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {faq.question}
                    </h3>
                    <p className="font-secondary text-gray-600 ml-7">{faq.answer}</p>
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
            <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="font-secondary text-xl mb-8 opacity-90">
              Visit us today or give us a call to learn more about our programs and facilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg">
                Visit Our Facility
                <MapPin className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
