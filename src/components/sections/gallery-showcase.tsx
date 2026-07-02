"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

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
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

export function GalleryShowcase() {
  return (
    <section className="bg-black py-20 text-white lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/50">
            Gallery
          </p>
          <h2 className="mt-5 font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Explore Our Tattoo Gallery
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
            Recent custom work from the studio, shown simply so the artwork can
            carry the page.
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
          <Button
            variant="outline"
            size="lg"
            className="rounded-[4px] border-white/28 bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
