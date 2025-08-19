"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    text: "Damon is absolutely incredible! His Chinese traditional work is unmatched. My dragon sleeve is a masterpiece - the detail and shading are perfect. The entire experience was professional and comfortable.",
    artist: "Damon",
    service: "Chinese Traditional Sleeve",
    verified: true,
  },
  {
    id: 2,
    name: "Alex Chen",
    rating: 5,
    text: "Raven's geometric designs are mind-blowing! She perfectly captured my vision for a sacred geometry piece. Her attention to detail and precision is outstanding. Highly recommend!",
    artist: "Raven",
    service: "Geometric Sacred Geometry",
    verified: true,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    rating: 5,
    text: "Bo's realistic portraits are absolutely stunning! He created the most beautiful memorial tattoo of my father. The likeness is incredible and the emotional connection he brings to his work is special.",
    artist: "Bo",
    service: "Realistic Portrait",
    verified: true,
  },
  {
    id: 4,
    name: "Jordan Taylor",
    rating: 5,
    text: "Naomi's watercolor style is pure art! My floral piece looks like a painting on my skin. The colors are vibrant and the flow is perfect. She's truly an artist with a tattoo machine.",
    artist: "Naomi",
    service: "Watercolor Floral",
    verified: true,
  },
  {
    id: 5,
    name: "Chris Williams",
    rating: 5,
    text: "Yan's fine line work is exceptional! My minimalist design is clean, precise, and exactly what I wanted. His steady hand and attention to detail make every line perfect.",
    artist: "Yan",
    service: "Fine Line Minimalist",
    verified: true,
  },
  {
    id: 6,
    name: "Emma Davis",
    rating: 5,
    text: "Damon's Chinese traditional work is incredible! My phoenix piece has such bold, clean lines and perfect shading. The studio atmosphere is welcoming and the whole experience was amazing.",
    artist: "Damon",
    service: "Chinese Traditional Phoenix",
    verified: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000) // Change every 6 seconds (slower)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 15 seconds (longer pause)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
    // Resume auto-play after 15 seconds (longer pause)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Client Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their Pine Ink experience.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-gold-500/90 hover:bg-gold-600 text-white shadow-lg border border-gold-400/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-gold-500/90 hover:bg-gold-600 text-white shadow-lg border border-gold-400/20"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      {/* Quote icon */}
                      <div className="mb-6">
                        <Quote className="h-10 w-10 text-gold-500/60" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                        "{testimonial.text}"
                      </p>

                      {/* Client info */}
                      <div className="flex items-center space-x-4">
                        {/* Placeholder avatar */}
                        <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            {testimonial.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.service} • by {testimonial.artist}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 15000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-muted/50 rounded-2xl"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9</span>
          </div>
          <p className="text-lg font-medium mb-2">Excellent Rating</p>
          <p className="text-muted-foreground">
            Based on 500+ verified reviews from our satisfied clients
          </p>
        </motion.div>
      </div>
    </section>
  )
}