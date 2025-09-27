"use client"

import type React from "react"
import toast from 'react-hot-toast';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send } from "lucide-react"
import axios from "axios"
import { backendApi } from "@/entities"
import { showSuccess, showError } from "@/lib/toastUtil";

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    sessions: "",
    location: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const sessionOptions = [
    { value: "8", label: "8 Sessions Package" },
    { value: "12", label: "12 Sessions Package" },
  ]

  const locationOptions = [
    { value: "Apex-sports-complex", label: "Apex Sports Complex - Downtown" },
    { value: "riverside-center", label: "Riverside Pickleball Center - Riverside" },
    { value: "metro-sports-hub", label: "Metro Sports Hub - CBD" },
    { value: "northside-recreation", label: "Northside Recreation Center - Northside" },
    { value: "westside-athletic", label: "Westside Athletic Club - Westside" },
    { value: "southpark-arena", label: "Southpark Sports Arena - Southpark" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send structured form data to the backend
      const response = await axios.post(`${backendApi}/booknow`, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        sessions: formData.sessions,
        location: formData.location,
      });

      // Optional: Check for response status
      if (response.status === 200) {
        showSuccess("Booking submitted successfully!");
      } else {
        showError("Submission failed. Please try again");
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        sessions: "",
        location: "",
      });

      onClose(); // Close modal or dialog
    } catch (error) {
      // console.error("Submission error:", error);
      showError("There was an error submitting your request");
    } finally {
      setIsSubmitting(false);
    }
  };


  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-primary text-2xl text-primary">Book Coaching Sessions</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent>
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
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
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
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Enter your complete address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sessions" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Sessions *
                </label>
                <select
                  id="sessions"
                  name="sessions"
                  required
                  value={formData.sessions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select sessions package</option>
                  {sessionOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Location *
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Choose nearest location</option>
                  {locationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-full md:flex-1 font-semibold border-2 border-primary/80"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full md:flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Request
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
