"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, Calendar, Users, Award } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: Users, label: "Happy Clients", value: "2,500+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Star, label: "5-Star Reviews", value: "500+" },
  { icon: Calendar, label: "Tattoos Created", value: "5,000+" },
]

// Pre-generate consistent positions to avoid hydration mismatch
const generateParticles = () => {
  const particles = []
  // Use a seed-based approach for consistent positions
  for (let i = 0; i < 20; i++) {
    // Simple pseudo-random based on index for consistent results
    const seed1 = (i * 7 + 3) % 100
    const seed2 = (i * 11 + 5) % 100
    const seed3 = (i * 13 + 7) % 5
    const seed4 = (i * 17 + 11) % 2
    
    particles.push({
      id: i,
      left: seed1,
      top: seed2,
      duration: 3 + seed3,
      delay: seed4,
    })
  }
  return particles
}

const particles = generateParticles()

export function HeroWithVideo() {
  const [isClient, setIsClient] = useState(false)
  const [ready, setReady] = useState(false)

  // Asset paths (use forward slashes, absolute from public)
  const VIDEO_SRC = "/videos/shop/pink-ink-hero.mp4";
  const POSTER_SRC = "/images/pineinktattoos/shop/hero-tatto-pic.png";

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/GIF Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback overlay, fades out when video is ready */}
        <div
          aria-hidden
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-300 ${ready ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          style={{ backgroundImage: `url(${POSTER_SRC})` }}
        />
        <video
          data-role="hero-video"
          className="absolute inset-0 z-10 h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
        />
        
        {/* Animated background elements - only render on client to avoid hydration issues */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-gold-500/20 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="gold" className="mb-6 text-sm font-medium">
              Award-Winning Tattoo Studio
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Your Story,{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Our Ink
              </span>
              <br />
              Forever Beautiful
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your vision into stunning body art with our world-class artists. 
              Custom designs, professional service, and exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="xl" variant="gold" className="group" asChild>
              <Link href="/booking">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/gallery">
                View Gallery
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/10 rounded-full mb-3 group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}