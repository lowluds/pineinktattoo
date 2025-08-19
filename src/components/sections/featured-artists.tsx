"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
            Meet Our Artists
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            World-Class{" "}
            <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Tattoo Artists
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our talented team of artists brings decades of combined experience 
            and unique specialties to create your perfect tattoo.
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
          <div className="artist-grid w-full max-w-6xl mx-auto h-96">
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
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/artists">
              Meet All Our Artists
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}