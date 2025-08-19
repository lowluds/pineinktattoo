"use client"

import { Clock, MapPin, Phone, Mail, Shield, Award, CheckCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const businessHours = [
  { day: "Monday", hours: "10:00 AM - 8:00 PM" },
  { day: "Tuesday", hours: "10:00 AM - 8:00 PM" },
  { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
  { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
  { day: "Friday", hours: "10:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 8:00 PM" },
  { day: "Sunday", hours: "12:00 PM - 6:00 PM" },
]

const policies = [
  "Free consultations for all new clients",
  "24-hour cancellation policy",
  "Deposit required to secure appointment",
  "Must be 18+ or have parental consent",
  "Valid ID required for all appointments",
]

const safetyFeatures = [
  "Single-use, sterile needles and equipment",
  "Hospital-grade sterilization protocols",
  "Licensed and insured artists",
  "Health department approved facility",
]

export function BookingInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-gold-600" />
            <span>Studio Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
                  2367 Yonge Street<br />
                  Toronto ON M4P 2C8, Floor 2
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">
                  (416) 486-9290
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  pineinktoronto@gmail.com
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gold-600" />
            <span>Business Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {businessHours.map((schedule) => (
              <div key={schedule.day} className="flex justify-between items-center">
                <span className="text-sm font-medium">{schedule.day}</span>
                <span className="text-sm text-muted-foreground">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Booking Policies */}
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-gold-600" />
            <span>Booking Policies</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {policies.map((policy, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{policy}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Safety & Hygiene */}
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-gold-600" />
            <span>Safety & Hygiene</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {safetyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Trust Badges */}
      <Card className="border-0 bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20">
        <CardContent className="p-6 text-center">
          <Award className="h-8 w-8 text-gold-600 mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Award-Winning Studio</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Recognized for excellence in tattooing and customer service
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="gold" className="text-xs">
              Licensed
            </Badge>
            <Badge variant="gold" className="text-xs">
              Insured
            </Badge>
            <Badge variant="gold" className="text-xs">
              Health Approved
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Questions about your booking?
          </p>
          <p className="text-sm font-medium">
            Call us at{" "}
            <a href="tel:+14164869290" className="text-gold-600 hover:underline">
              (416) 486-9290
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}