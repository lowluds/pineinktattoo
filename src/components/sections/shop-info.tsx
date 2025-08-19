"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const shopInfo = {
  location: {
    address: "2367 Yonge Street",
    city: "Toronto ON M4P 2C8",
    floor: "Floor 2"
  },
  email: "pineinktoronto@gmail.com",
  instagram: {
    main: "@pineinktattoos",
    artists: [
      "@damontattoos_han",
      "@Bo.Toronto.tattoo", 
      "@halloweenink",
      "@rampaintink"
    ]
  }
}

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function ShopInfo() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-800 relative overflow-hidden">
      {/* Background pattern for texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gold-500 rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* FIND US */}
          <motion.div variants={itemVariants} className="text-center group">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/10 rounded-full mb-4 group-hover:bg-gold-500/20 transition-colors">
                <MapPin className="h-6 w-6 text-gold-500" />
              </div>
              <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider mb-4">
                FIND US
              </h3>
            </div>
            <div className="text-gray-200 space-y-2">
              <p className="font-medium text-base">{shopInfo.location.address}</p>
              <p className="font-medium text-base">{shopInfo.location.city}</p>
              <p className="font-medium text-base">{shopInfo.location.floor}</p>
            </div>
          </motion.div>

          {/* EMAIL US */}
          <motion.div variants={itemVariants} className="text-center group">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/10 rounded-full mb-4 group-hover:bg-gold-500/20 transition-colors">
                <Mail className="h-6 w-6 text-gold-500" />
              </div>
              <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider mb-4">
                EMAIL US
              </h3>
            </div>
            <div className="text-gray-200">
              <Link 
                href={`mailto:${shopInfo.email}`}
                className="font-medium text-base hover:text-gold-400 transition-colors duration-300"
              >
                {shopInfo.email}
              </Link>
            </div>
          </motion.div>

          {/* MAIN INSTAGRAM */}
          <motion.div variants={itemVariants} className="text-center group">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/10 rounded-full mb-4 group-hover:bg-gold-500/20 transition-colors">
                <Instagram className="h-6 w-6 text-gold-500" />
              </div>
              <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider mb-4">
                INSTAGRAM
              </h3>
            </div>
            <div className="text-gray-200 space-y-1">
              <Link 
                href={`https://instagram.com/${shopInfo.instagram.main.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-base hover:text-gold-400 transition-colors duration-300 block"
              >
                {shopInfo.instagram.main}
              </Link>
            </div>
          </motion.div>

          {/* ARTISTS INSTAGRAM */}
          <motion.div variants={itemVariants} className="text-center group">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/10 rounded-full mb-4 group-hover:bg-gold-500/20 transition-colors">
                <ExternalLink className="h-6 w-6 text-gold-500" />
              </div>
              <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider mb-4">
                OUR ARTISTS
              </h3>
            </div>
            <div className="text-gray-200 space-y-2">
              {shopInfo.instagram.artists.map((artist, index) => (
                <Link 
                  key={index}
                  href={`https://instagram.com/${artist.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-base hover:text-gold-400 transition-colors duration-300 block"
                >
                  {artist}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="gold" 
            size="lg" 
            className="font-medium text-base px-8 py-3"
            asChild
          >
            <Link href="/booking">
              Book Your Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
