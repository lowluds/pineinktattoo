"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Calendar
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const businessHours = [
  { day: "Monday", hours: "10:00 AM - 8:00 PM", available: true },
  { day: "Tuesday", hours: "10:00 AM - 8:00 PM", available: true },
  { day: "Wednesday", hours: "10:00 AM - 8:00 PM", available: true },
  { day: "Thursday", hours: "10:00 AM - 8:00 PM", available: true },
  { day: "Friday", hours: "10:00 AM - 8:00 PM", available: true },
  { day: "Saturday", hours: "10:00 AM - 8:00 PM", available: true },
  { day: "Sunday", hours: "12:00 PM - 6:00 PM", available: true },
]

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/pineinktattoos/",
    icon: Instagram,
    followers: "15.2K",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/pine.ink.tattoo/",
    icon: Facebook,
    followers: "8.5K",
  },
]

const quickActions = [
  {
    title: "Book Consultation",
    description: "Schedule a free consultation",
    href: "/booking",
    icon: Calendar,
    variant: "gold" as const,
  },
  {
    title: "Live Chat",
    description: "Chat with us now",
    href: "#",
    icon: MessageCircle,
    variant: "outline" as const,
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gold-600" />
              <span>Visit Our Studio</span>
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
                    Toronto, ON, Canada<br />
                    Ontario
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <Link 
                    href="tel:+14164869290"
                    className="text-sm text-muted-foreground hover:text-gold-600 transition-colors"
                  >
                    (416) 486-9290
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <Link 
                    href="mailto:pineinktoronto@gmail.com"
                    className="text-sm text-muted-foreground hover:text-gold-600 transition-colors"
                  >
                    pineinktoronto@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
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
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                    {schedule.available && (
                      <Badge variant="secondary" className="text-xs">
                        Open
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Button
                  key={action.title}
                  variant={action.variant}
                  size="lg"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={action.href}>
                    <Icon className="h-4 w-4 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs opacity-80">{action.description}</div>
                    </div>
                  </Link>
                </Button>
              )
            })}
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Follow Us</CardTitle>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest work and studio news
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {social.followers} followers
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Follow
                  </Badge>
                </Link>
              )
            })}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}