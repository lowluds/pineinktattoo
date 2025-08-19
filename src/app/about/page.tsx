"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, DollarSign, Shield, MessageCircle, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description: "Free consultation to discuss your tattoo ideas and ensure we create the perfect design for you.",
    details: "In most cases, a consultation is needed before you and your artist proceed with booking an appointment. Be sure to view our artists' portfolio in advance and take some time to find pieces that speak to you. During a consultation, you and your artist will discuss everything regarding all of the tattoo ideas you have in mind."
  },
  {
    icon: Shield,
    title: "Aftercare",
    description: "Comprehensive aftercare instructions to ensure your tattoo heals perfectly.",
    details: "Follow the advice given by your artist as to how to care for your tattoo. Don't worry if you forget some of the information, simply contact us for any questions you have related to tattoo aftercare."
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Easy booking process through our website or direct artist contact.",
    details: "You can send us a request through our booking page or contact our artists through their preferred method of contact. Take a look at our artists to find their portfolios and contact info. Keep in mind, some artist's books may be closed. Please keep an eye on our Instagram for updates."
  },
  {
    icon: DollarSign,
    title: "Rates",
    description: "Transparent pricing based on design complexity and artist time.",
    details: "Prices of the tattoos are calculated based on the complexity of the design, and the amount of time your artist spent. Pricing is individual per artist. For any quotes please contact our artists with as much information about your tattoo as possible (overall concept, size in inches, placement on body, any relevant reference photos) or contact them for a consultation. Our shop minimum is $100."
  },
  {
    icon: Clock,
    title: "Deposits",
    description: "$100 deposit required for all tattoos, applied to final cost.",
    details: "A $100 deposit is required for all tattoos. The deposit goes towards your tattoo, and will be deducted from the final total at check out. If you need multiple appointments, the deposit will be deducted from your final appointment. You can pay for your deposit by either sending an e-transfer, or coming to the shop to place the deposit. With 3 days notice prior to appointment date, the deposit can be moved to your rescheduled appointment time. If less than 3 days notice is given, or if cancelling the appointment completely, the deposit is non refundable. As of April 2022, we will no longer be holding deposits indefinitely. You must book within a year at most."
  },
  {
    icon: Heart,
    title: "Touch-ups",
    description: "Free touch-ups within three months of completing your tattoo.",
    details: "All touch-ups are free within the next three months after completing the entire piece of tattoo. Please contact your artist directly and they will be able to help schedule a touch up appointment."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-gold-600">Pine Ink</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional tattoo studio in Toronto offering custom designs, expert artists, 
              and exceptional service. Your journey to the perfect tattoo starts here.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-lg border mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Find Us</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center">
                    <span className="font-medium text-foreground">Address:</span>
                    <span className="ml-2">2367 Yonge Street, Toronto ON M4P 2C8, Floor 2</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium text-foreground">Email:</span>
                    <span className="ml-2">pineinktoronto@gmail.com</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium text-foreground">Phone:</span>
                    <span className="ml-2">(416) 486-9290</span>
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Follow Us</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center">
                    <span className="font-medium text-foreground">Instagram:</span>
                    <span className="ml-2">@pineinktattoos</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium text-foreground">Artists:</span>
                  </p>
                  <div className="ml-4 space-y-1 text-sm">
                    <p>@damontattoos_han</p>
                    <p>@Bo.Toronto.tattoo</p>
                    <p>@halloweenink</p>
                    <p>@rampaintink</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services & Policies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about getting a tattoo at Pine Ink Tattoo
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-gold-100 dark:bg-gold-900/20 rounded-lg">
                        <service.icon className="h-6 w-6 text-gold-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Tattoo Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation with one of our talented artists and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gold" asChild>
                <a href="/booking">Book Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/artists">Meet Our Artists</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
