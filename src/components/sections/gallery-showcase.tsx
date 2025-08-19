"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Eye, Heart, ExternalLink, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Instagram posts data for clean photo gallery
// Replace these imageUrl values with actual tattoo images from your artists
const instagramPosts = [
  {
    id: 1,
    imageUrl: "/images/pineinktattoos/tattoos/damon-tattoo-1.jpg",
    title: "",
    artist: "Damon",
    category: "",
    postUrl: "https://www.instagram.com/p/DJc4uZcvyIw/?img_index=1"
  },
  {
    id: 2,
    imageUrl: "/images/pineinktattoos/tattoos/damon-tattoo-2.jpg",
    title: "",
    artist: "Damon",
    category: "",
    postUrl: "https://www.instagram.com/p/DHmqLoxsHCr/?img_index=1"
  },
  {
    id: 3,
    imageUrl: "/images/pineinktattoos/tattoos/raven-tattoo-1.mp4",
    title: "",
    artist: "Raven",
    category: "",
    postUrl: "https://www.instagram.com/p/DChVGJBvAH6/"
  },
  {
    id: 4,
    imageUrl: "/images/pineinktattoos/tattoos/raven-tattoo-2.mp4",
    title: "",
    artist: "Raven",
    category: "",
    postUrl: "https://www.instagram.com/p/C48ReQGAFgk/"
  },
  {
    id: 5,
    imageUrl: "/images/pineinktattoos/tattoos/damon-tattoo-3.mp4",
    title: "",
    artist: "Damon",
    category: "",
    postUrl: "https://www.instagram.com/reel/CT-2bK2j-3s/"
  },
  {
    id: 6,
    imageUrl: "/images/pineinktattoos/tattoos/raven-tattoo-3.mp4",
    title: "",
    artist: "Raven",
    category: "",
    postUrl: "https://www.instagram.com/p/DHYs_yFRrY5/"
  },
  {
    id: 7,
    imageUrl: "/images/pineinktattoos/tattoos/raven-tattoo-4.jpg",
    title: "",
    artist: "Raven",
    category: "",
    postUrl: "https://www.instagram.com/p/C-nXCi2g9dN/"
  },
  {
    id: 8,
    imageUrl: "/images/pineinktattoos/tattoos/raven-tattoo-5.mp4",
    title: "",
    artist: "Raven",
    category: "",
    postUrl: "https://www.instagram.com/p/C3VYB3KgZwG/?img_index=1"
  },
  {
    id: 9,
    imageUrl: "/images/pineinktattoos/tattoos/damon-tattoo-4.mp4",
    title: "",
    artist: "Damon",
    category: "",
    postUrl: "https://www.instagram.com/p/DLi5YtvN8-R/?img_index=2"
  },
  {
    id: 10,
    imageUrl: "/images/pineinktattoos/tattoos/raven-tattoo-6.jpg",
    title: "",
    artist: "Raven",
    category: "",
    postUrl: "https://www.instagram.com/p/DHlu1ZMgCcp/"
  },
  {
    id: 11,
    imageUrl: "/images/pineinktattoos/tattoos/raven-tattoo-7.jpg",
    title: "",
    artist: "Raven",
    category: "",
    postUrl: "https://www.instagram.com/p/DDIARyDyixt/"
  },
  {
    id: 12,
    imageUrl: "/images/pineinktattoos/tattoos/damon-tattoo-5.jpg",
    title: "",
    artist: "Damon",
    category: "",
    postUrl: "https://www.instagram.com/p/DAmHhXLh1fX/?img_index=1"
  }
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

export function GalleryShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Our Latest Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Stunning{" "}
            <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Tattoo Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of custom tattoos, from intricate realism
            to bold traditional designs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="instagram-grid"
        >
          {instagramPosts.slice(0, 12).map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="instagram-photo-card group"
            >
              <a
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
              >
                {post.imageUrl.toLowerCase().endsWith('.mp4') || post.imageUrl.toLowerCase().endsWith('.mov') || post.imageUrl.toLowerCase().endsWith('.webm') ? (
                  <video
                    src={post.imageUrl}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={post.imageUrl}
                    alt={post.title || `Tattoo by ${post.artist}`}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    {post.title && (
                      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                    )}
                    <p className="text-sm opacity-90">by {post.artist}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link href="/gallery">
              View Full Gallery
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}