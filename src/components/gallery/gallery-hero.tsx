"use client"

import { motion } from "framer-motion"

export function GalleryHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-ink-900/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of custom tattoos, each piece telling a unique story 
            through exceptional artistry and craftsmanship.
          </p>
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-500/20 rounded-full"
            style={{
              left: `${(i * 7 + 10) % 100}%`,
              top: `${(i * 13 + 20) % 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  )
}