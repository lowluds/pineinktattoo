"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const inquiryTypes = [
  { id: "consultation", label: "Free Consultation" },
  { id: "pricing", label: "Pricing Information" },
  { id: "appointment", label: "Book Appointment" },
  { id: "aftercare", label: "Aftercare Questions" },
  { id: "general", label: "General Inquiry" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: "",
    })
    
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-none border border-white/14 bg-black text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-white/62" />
            <span>Send Us a Message</span>
          </CardTitle>
          <p className="text-white/58">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="Your full name"
                  className="border-white/16 bg-white/10 text-white placeholder:text-white/42"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                  className="border-white/16 bg-white/10 text-white placeholder:text-white/42"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                className="border-white/16 bg-white/10 text-white placeholder:text-white/42"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Inquiry Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {inquiryTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`cursor-pointer rounded-[4px] border p-3 transition-colors ${
                      formData.inquiryType === type.id
                        ? "border-white bg-white text-black"
                        : "border-white/18 bg-transparent text-white hover:border-white/42"
                    }`}
                    onClick={() => handleInputChange("inquiryType", type.id)}
                  >
                    <div className="text-sm font-medium">{type.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject *</label>
              <Input
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                required
                placeholder="Brief subject of your inquiry"
                className="border-white/16 bg-white/10 text-white placeholder:text-white/42"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                placeholder="Tell us more about your inquiry, tattoo ideas, or questions..."
                rows={6}
                className="border-white/16 bg-white/10 text-white placeholder:text-white/42"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full rounded-[4px] bg-white text-black hover:bg-white/86"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
