"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Calendar, AlertCircle } from "lucide-react"

interface RegistrationClosedModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegistrationClosedModal({ isOpen, onClose }: RegistrationClosedModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="font-primary text-2xl text-primary flex items-center">
            <AlertCircle className="w-6 h-6 mr-2 text-secondary" />
            Registration Closed
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="font-primary text-xl font-semibold text-primary mb-3">
              Tournament Registration is Currently Closed
            </h3>
            <p className="font-secondary text-gray-600 mb-4">
              We're sorry, but registration for this tournament has ended. Stay tuned for our upcoming events!
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="font-secondary text-sm text-gray-700">
                <strong>Want to be notified about future tournaments?</strong>
                <br />
                Subscribe to our newsletter or follow us on social media for the latest updates.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold" onClick={onClose}>
              View Other Events
            </Button>
            <Button variant="outline" className="font-semibold" onClick={onClose}>
              Subscribe to Newsletter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
