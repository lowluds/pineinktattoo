"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Image as ImageIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const artists = [
  { id: "sarah", name: "Sarah Martinez", specialty: "Realism & Portraits" },
  { id: "marcus", name: "Marcus Chen", specialty: "Japanese Traditional" },
  { id: "luna", name: "Luna Rodriguez", specialty: "Fine Line & Minimalist" },
  { id: "any", name: "Any Available Artist", specialty: "Best match for your style" },
]

const services = [
  { id: "consultation", name: "Free Consultation", duration: "30 min", price: "Free" },
  { id: "small", name: "Small Tattoo", duration: "1-2 hours", price: "$150-300" },
  { id: "medium", name: "Medium Tattoo", duration: "2-4 hours", price: "$300-600" },
  { id: "large", name: "Large Tattoo", duration: "4+ hours", price: "$600+" },
  { id: "touch-up", name: "Touch-up", duration: "1 hour", price: "$100-200" },
  { id: "cover-up", name: "Cover-up", duration: "3-5 hours", price: "$400-800" },
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM"
]

export function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    artist: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    description: "",
    referenceImages: null as FileList | null,
    isFirstTattoo: false,
    hasAllergies: false,
    allergyDetails: "",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement booking submission
    console.log("Booking submitted:", formData)
    alert("Booking request submitted! We'll contact you within 24 hours to confirm your appointment.")
  }

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <Card className="border-0 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-gold-600" />
          <span>Book Your Appointment</span>
        </CardTitle>
        
        {/* Progress indicator */}
        <div className="flex items-center space-x-2 mt-4">
          {[...Array(totalSteps)].map((_, i) => (
            <div key={i} className="flex-1">
              <div
                className={`h-2 rounded-full transition-colors ${
                  i + 1 <= currentStep ? "bg-gold-600" : "bg-muted"
                }`}
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <User className="h-4 w-4 mr-2 text-gold-600" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="firstTattoo"
                  checked={formData.isFirstTattoo}
                  onChange={(e) => handleInputChange("isFirstTattoo", e.target.checked)}
                  className="rounded border-gray-300"
                />
                <label htmlFor="firstTattoo" className="text-sm">
                  This is my first tattoo
                </label>
              </div>
            </motion.div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Service & Artist</h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">Service Type *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        formData.service === service.id
                          ? "border-gold-600 bg-gold-50 dark:bg-gold-900/20"
                          : "border-border hover:border-gold-300"
                      }`}
                      onClick={() => handleInputChange("service", service.id)}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {service.duration} • {service.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Artist</label>
                <div className="space-y-2">
                  {artists.map((artist) => (
                    <div
                      key={artist.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        formData.artist === artist.id
                          ? "border-gold-600 bg-gold-50 dark:bg-gold-900/20"
                          : "border-border hover:border-gold-300"
                      }`}
                      onClick={() => handleInputChange("artist", artist.id)}
                    >
                      <div className="font-medium">{artist.name}</div>
                      <div className="text-sm text-muted-foreground">{artist.specialty}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Date & Time */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gold-600" />
                Date & Time
              </h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                <Input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <Badge
                      key={time}
                      variant={formData.preferredTime === time ? "gold" : "outline"}
                      className="cursor-pointer justify-center py-2"
                      onClick={() => handleInputChange("preferredTime", time)}
                    >
                      {time}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Details */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-gold-600" />
                Tattoo Details
              </h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Describe your tattoo idea *
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                  placeholder="Please describe your tattoo idea, including size, placement, style, and any specific details..."
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Reference Images (optional)
                </label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleInputChange("referenceImages", e.target.files)}
                    className="max-w-xs mx-auto"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload reference images to help us understand your vision
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="allergies"
                    checked={formData.hasAllergies}
                    onChange={(e) => handleInputChange("hasAllergies", e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="allergies" className="text-sm">
                    I have allergies or medical conditions
                  </label>
                </div>

                {formData.hasAllergies && (
                  <Textarea
                    value={formData.allergyDetails}
                    onChange={(e) => handleInputChange("allergyDetails", e.target.value)}
                    placeholder="Please describe your allergies or medical conditions..."
                    rows={2}
                  />
                )}
              </div>
            </motion.div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button type="button" variant="gold" onClick={nextStep}>
                Next Step
              </Button>
            ) : (
              <Button type="submit" variant="gold">
                Submit Booking Request
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}