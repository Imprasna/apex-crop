"use client";

import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { backendApi } from "@/entities";
import axios from "axios";


export default function CMSform() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    dates: "", // ✅ keep consistent naming
    location: "",
    entryFee: "",
    maxPlayers: "",
    currentPlayers: "",
    level: "",
    prizes: "",
    image: null as File | null,
    status: "Open",
  });

  const statusOptions = [
    { value: "Open", label: "Open" },
    { value: "Closed", label: "Closed" },
    { value: "Upcoming", label: "Upcoming" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // prevent multiple clicks
    setIsSubmitting(true);

    try {
      const data = new FormData();

      // Append all fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image" && value) {
          data.append("image", value as File);
        } else {
          // data.append(key, value as string);
        }
      });

      // Send request
      const response = await axios.post(`${backendApi}/cms/tournament`, data);

      console.log("Server Response:", response.data);
      alert("Tournament submitted successfully!");

      // ✅ Reset form state (fixed "dates" field)
      setFormData({
        title: "",
        dates: "",
        location: "",
        entryFee: "",
        maxPlayers: "",
        currentPlayers: "",
        level: "",
        prizes: "",
        image: null,
        status: "Open",
      });

      // Reset file input manually
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit tournament. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className=" pt-[5%]"></div>
      <div className="max-w-4xl mx-auto py-6 p-2">
        <Card className="bg-gray-300">
          <CardHeader>
            <CardTitle className="font-primary text-2xl text-primary">
              Add Tournament
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tournament Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter tournament name"
                />
              </div>

              {/* Dates */}
              <div>
                <label
                  htmlFor="dates"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tournament Dates *
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  required
                  value={formData.dates}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="March 15-17, 2024"
                />
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter location"
                  />
                </div>

                <div>
                  <label
                    htmlFor="entryFee"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Entry Fee *
                  </label>
                  <input
                    type="text"
                    id="entryFee"
                    name="entryFee"
                    required
                    value={formData.entryFee}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., $75"
                  />
                </div>

                <div>
                  <label
                    htmlFor="maxPlayers"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Max Players *
                  </label>
                  <input
                    type="text"
                    id="maxPlayers"
                    name="maxPlayers"
                    required
                    value={formData.maxPlayers}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentPlayers"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Current Players *
                  </label>
                  <input
                    type="text"
                    id="currentPlayers"
                    name="currentPlayers"
                    required
                    value={formData.currentPlayers}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* <div>
                  <label
                    htmlFor="level"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Level
                  </label>
                  <input
                    type="text"
                    id="level"
                    name="level"
                    required
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Intermediate/Advanced"
                  />
                </div> */}

                <div>
                  <label
                    htmlFor="prizes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Prizes
                  </label>
                  <input
                    type="text"
                    id="prizes"
                    name="prizes"
                    required
                    value={formData.prizes}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="$5,000 Prize Pool"
                  />
                </div>

                {/* Status */}
                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    required
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>


              </div>
              {/* Image */}
              <div className="w-full">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tournament Image
                </label>
                <span className="block text-xs text-gray-500 mb-1">
                  Please upload 400x300px image
                </span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
