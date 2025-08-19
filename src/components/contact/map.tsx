"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Car } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Map() {
  return (
    <section id="map" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Find Our{" "}
            <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Studio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Toronto, our studio is easily accessible 
            with plenty of parking and public transport options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="aspect-[16/9] relative">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.268589041123!2d-79.3997!3d43.7032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzExLjUiTiA3OcKwMjMnNTguNyJX!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Pine Ink Tattoo Studio Location"
                ></iframe>

                {/* Map overlay info */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 p-3 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gold-600" />
                    <span className="text-sm font-medium">Pine Ink Tattoo</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Open until 8:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-gold-600" />
                  <h3 className="font-semibold">Address</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  2367 Yonge Street<br />
                  Toronto, ON M4P 2C8<br />
                  Floor 2
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a
                      href="https://maps.google.com/?q=2367+Yonge+Street+Toronto+ON+M4P+2C8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a
                      href="tel:+14164869290"
                    >
                      Call for Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-5 w-5 text-gold-600" />
                  <h3 className="font-semibold">Parking & Transport</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Street parking available</li>
                  <li>✓ Green P parking nearby</li>
                  <li>✓ TTC subway: Yonge Line (Eglinton)</li>
                  <li>✓ Bus routes: 97, 320, 97A</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Help Finding Us?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us and we'll help guide you to our studio
                </p>
                <Button variant="gold" size="sm" asChild>
                  <a href="tel:+14164869290">
                    Call (416) 486-9290
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}