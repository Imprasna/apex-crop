"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, Trophy } from "lucide-react"

interface TournamentRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TournamentRegistrationModal({ isOpen, onClose }: TournamentRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    gender: "",
    gameLevel: "",
    duprRating: "",
    categories: [] as string[],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ]

  const gameLevelOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ]

  const categoryOptions = [
    { value: "singles", label: "Singles" },
    { value: "mens-doubles", label: "Men's Doubles" },
    { value: "womens-doubles", label: "Women's Doubles" },
    { value: "split-age", label: "Split Age" },
    { value: "mixed-doubles", label: "Mixed Doubles" },
    { value: "advance-singles", label: "Advance Singles" },
    { value: "open-singles", label: "Open Singles" },
    { value: "pro-singles", label: "Pro Singles" },
    { value: "mens-singles-intermediate", label: "Men's Singles Intermediate" },
    { value: "mens-doubles-intermediate", label: "Men's Doubles Intermediate" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email content
      const emailContent = `
New Tournament Registration:

Name: ${formData.name}
Date of Birth: ${formData.dateOfBirth}
Phone Number: ${formData.phoneNumber}
Address: ${formData.address}
Gender: ${formData.gender}
Game Level: ${formData.gameLevel}
DUPR Rating: ${formData.duprRating}
Categories: ${formData.categories.map((cat) => categoryOptions.find((opt) => opt.value === cat)?.label).join(", ")}

Please process this tournament registration.
      `

      // In a real implementation, you would send this to your backend
      console.log("Sending tournament registration email:", emailContent)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      alert("Tournament registration submitted successfully! We'll contact you with payment details and confirmation.")

      // Reset form
      setFormData({
        name: "",
        dateOfBirth: "",
        phoneNumber: "",
        address: "",
        gender: "",
        gameLevel: "",
        duprRating: "",
        categories: [],
      })

      onClose()
    } catch (error) {
      alert("There was an error submitting your registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-primary text-2xl text-primary dark:text-white flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-secondary" />
            Tournament Registration
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select gender</option>
                    {genderOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your complete address"
                />
              </div>
            </div>

            {/* Game Information Section */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Game Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="gameLevel"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Game Level *
                  </label>
                  <select
                    id="gameLevel"
                    name="gameLevel"
                    required
                    value={formData.gameLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select your game level</option>
                    {gameLevelOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="duprRating"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    DUPR Rating *
                  </label>
                  <input
                    type="text"
                    id="duprRating"
                    name="duprRating"
                    required
                    value={formData.duprRating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your DUPR rating (e.g., 3.5, 4.0, etc.)"
                  />
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tournament Categories</h3>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Categories * (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {categoryOptions.map((category) => (
                  <label
                    key={category.value}
                    className="flex items-center space-x-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category.value)}
                      onChange={() => handleCategoryChange(category.value)}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{category.label}</span>
                  </label>
                ))}
              </div>
              {formData.categories.length === 0 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Please select at least one category</p>
              )}
            </div>

            {/* Registration Information */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Registration Information</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Entry fee will be confirmed via email after registration</li>
                <li>• Tournament details and schedule will be sent upon confirmation</li>
                <li>• All tournaments follow USAPA official rules</li>
                <li>• Refunds available up to 48 hours before tournament start</li>
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 font-semibold bg-transparent border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
                disabled={isSubmitting || formData.categories.length === 0}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Register for Tournament
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
