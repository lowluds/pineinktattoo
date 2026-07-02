"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const artists = [
  {
    id: 1,
    name: "Damon",
    image: "/images/pineinktattoos/artists/damon.png",
    instagram: "@damontattoos_han",
  },
  {
    id: 2,
    name: "Bo",
    image: "/images/pineinktattoos/artists/bo.png",
    instagram: "@Bo.Toronto.tattoo",
  },
  {
    id: 3,
    name: "Raven",
    image: "/images/pineinktattoos/artists/raven.png",
    instagram: "@halloweenink",
  },
  {
    id: 4,
    name: "Naomi",
    image: "/images/pineinktattoos/artists/naomi.png",
    instagram: "@rampaintink",
  },
  {
    id: 5,
    name: "Yan",
    image: "/images/pineinktattoos/artists/yan.png",
    instagram: "@pineinktattoos",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function FeaturedArtists() {
  const handleInstagramClick = (instagram: string) => {
    const username = instagram.replace('@', '');
    window.open(`https://instagram.com/${username}`, '_blank', 'noopener,noreferrer');
  };

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
            Our artists
          </p>
          <h2 className="mt-5 font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Talented Team
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
            Portfolio-led artists with distinct specialties, clear consultation,
            and the kind of fit that makes the first session easier.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Interactive grid container - exactly like CodePen */}
          <div className="artist-grid mx-auto h-96 w-full max-w-6xl">
            {artists.map((artist, index) => (
              <motion.div 
                key={artist.id}
                variants={itemVariants}
                className={`artist-box artist-box-${index + 1} relative overflow-hidden transition-all duration-400 flex justify-center items-center`}
                style={{
                  backgroundImage: `url(${artist.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                data-text={artist.name}
                data-instagram={artist.instagram}
                onClick={() => handleInstagramClick(artist.instagram)}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-[4px] border-white/28 bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/artists">
              Meet All Our Artists
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
