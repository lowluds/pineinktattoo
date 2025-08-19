"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Instagram, ExternalLink, Star, Calendar, MapPin, Loader2 } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PerformanceOptimizer, usePerformanceMonitor } from "@/components/ui/performance-optimizer"

// Optimized artist data with memoization
const artists = [
  {
    id: 1,
    name: "Damon",
    specialty: "Chinese Traditional",
    image: "/images/pineinktattoos/artists/damon.png",
    instagram: "https://www.instagram.com/damontattoos_han/",
    experience: "8+ years",
    description: "Specializing in traditional Chinese and Japanese designs with modern flair.",
  },
  {
    id: 2,
    name: "Bo",
    specialty: "Asian Traditional",
    image: "/images/pineinktattoos/artists/bo.png",
    instagram: "https://www.instagram.com/bo_toronto_tattoo/",
    experience: "6+ years",
    description: "Master of traditional Asian tattoo styles and fine line work.",
  },
  {
    id: 3,
    name: "Raven",
    specialty: "Neo-Traditional & Fine Line",
    image: "/images/pineinktattoos/artists/raven.png",
    instagram: "https://www.instagram.com/halloweenink/",
    experience: "5+ years",
    description: "Creating bold neo-traditional designs and delicate fine line work.",
  },
  {
    id: 4,
    name: "Naomi",
    specialty: "Pop Surrealism & Abstract",
    image: "/images/pineinktattoos/artists/naomi.png",
    instagram: "https://www.instagram.com/rampaintink/",
    experience: "4+ years",
    description: "Bringing surreal and abstract art to life with vibrant colors.",
  },
  {
    id: 5,
    name: "Yan",
    specialty: "Realism & Hyper-Detailed",
    image: "/images/pineinktattoos/artists/yan.png",
    instagram: "https://www.instagram.com/pineinktattoos/",
    experience: "6+ years",
    description: "Creating stunning hyper-detailed realistic portraits and artwork.",
  },
]

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
}

// Memoized artist card component
const ArtistCard = ({ artist, index }: { artist: typeof artists[0], index: number }) => {
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleInstagramClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.open(artist.instagram, '_blank', 'noopener,noreferrer')
  }, [artist.instagram])

  return (
    <motion.div variants={itemVariants}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm h-full">
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Optimized artist image */}
          <Image
            src={artist.image}
            alt={`${artist.name} - ${artist.specialty}`}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={handleImageError}
            onLoad={handleImageLoad}
            priority={index < 2}
            loading={index < 2 ? 'eager' : 'lazy'}
          />
          
          {/* Loading placeholder */}
          {!isLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-200 to-ink-300 dark:from-ink-700 dark:to-ink-800 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
            </div>
          )}
          
          {/* Fallback for missing images */}
          {imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-200 to-ink-300 dark:from-ink-700 dark:to-ink-800 flex items-center justify-center">
              <div className="text-6xl font-bold text-ink-400 dark:text-ink-600">
                {artist.name.split(" ").map(n => n[0]).join("")}
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Instagram link overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="gold"
              size="sm"
              onClick={handleInstagramClick}
              className="flex items-center space-x-2"
            >
              <Instagram className="h-4 w-4" />
              <span>View Portfolio</span>
            </Button>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold mb-1">{artist.name}</h3>
              <p className="text-gold-600 font-medium">{artist.specialty}</p>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {artist.description}
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{artist.experience}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleInstagramClick}
                className="flex items-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Portfolio</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ArtistsGrid() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const metrics = usePerformanceMonitor()

  // Memoized artists data
  const memoizedArtists = useMemo(() => artists, [])

  useEffect(() => {
    // Simulate loading time and ensure content is ready
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (hasError) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">Unable to load artists. Please try refreshing the page.</p>
            <Button onClick={() => window.location.reload()}>Refresh Page</Button>
          </div>
        </div>
      </section>
    )
  }

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center space-x-2">
              <Loader2 className="h-6 w-6 animate-spin text-gold-500" />
              <span className="text-muted-foreground">Loading artists...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <PerformanceOptimizer loadingDelay={50}>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {memoizedArtists.map((artist, index) => (
                <ArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PerformanceOptimizer>
  )
}