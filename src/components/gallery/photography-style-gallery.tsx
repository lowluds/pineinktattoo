"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Filter, Search, Grid, List, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InstagramEmbed } from "./instagram-embed"
import Image from "next/image"

interface TattooImage {
  id: string
  src: string
  alt: string
  category: string
  artist: string
  style: string
  bodyPart: string
  date: string
  likes: number
  aspectRatio: number // Width/height ratio for responsive layout
  description?: string
}

// Artist Instagram mapping
const artistInstagramMap = {
  "damon": { username: "damontattoos_han", name: "Damon" },
  "bo": { username: "Bo.Toronto.tattoo", name: "Bo" },
  "raven": { username: "halloweenink", name: "Raven" },
  "naomi": { username: "rampaintink", name: "Naomi" },
  "yan": { username: "pineinktattoos", name: "Yan" }
}

export function PhotographyStyleGallery() {
  const [selectedImage, setSelectedImage] = useState<TattooImage | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<string>("damon") // Default to Damon

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle artist selection from URL or filter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const artist = urlParams.get('artist')
    if (artist && artistInstagramMap[artist as keyof typeof artistInstagramMap]) {
      setSelectedArtist(artist)
    }
  }, [])

  const openModal = (image: TattooImage) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const handleArtistSelect = (artistId: string) => {
    setSelectedArtist(artistId)
    // Update URL to reflect selected artist
    const url = new URL(window.location.href)
    url.searchParams.set('artist', artistId)
    window.history.pushState({}, '', url.toString())
  }

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
          <p className="text-white/64">Loading gallery...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[56vh] items-center overflow-hidden bg-black">
        <Image
          src="/images/pineinktattoos/shop/banner-2.png"
          alt="Dragon and floral tattoo artwork for Pine Ink gallery"
          fill
          className="object-cover object-center opacity-42"
          priority
        />
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/62 to-black/24" />

        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-full lg:max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/58">
              Gallery
            </p>
            <h1 className="mt-6 font-display text-5xl uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              Pine Ink Gallery
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/86 sm:text-xl">
              Explore recent work from the studio, then follow the artist whose
              portfolio feels closest to your idea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Artist Selection */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(artistInstagramMap).map(([artistId, artist]) => (
                <Button
                  key={artistId}
                  variant="outline"
                  onClick={() => handleArtistSelect(artistId)}
                  className={`rounded-[4px] border-white/24 px-6 py-3 text-white hover:bg-white hover:text-black ${
                    selectedArtist === artistId ? "bg-white text-black" : "bg-transparent"
                  }`}
                >
                  {artist.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="max-w-6xl mx-auto">
            <InstagramEmbed 
              username={artistInstagramMap[selectedArtist as keyof typeof artistInstagramMap].username}
              artistName={artistInstagramMap[selectedArtist as keyof typeof artistInstagramMap].name}
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-gradient-to-br from-gold-100 to-gold-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-gold-800 text-3xl font-bold mb-4">
                      {selectedImage.style}
                    </div>
                    <div className="text-gold-700 text-lg mb-6">
                      {selectedImage.bodyPart}
                    </div>
                    <div className="text-gold-600 bg-white/50 px-4 py-2 rounded-full inline-block">
                      Real image will appear here after extraction
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{selectedImage.style} Tattoo</h3>
                        <p className="text-muted-foreground">by {selectedImage.artist}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-2" />
                          {selectedImage.likes}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Category:</span>
                          <span className="ml-2 font-medium">{selectedImage.category}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Body Part:</span>
                          <span className="ml-2 font-medium">{selectedImage.bodyPart}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Date:</span>
                          <span className="ml-2 font-medium">
                            {new Date(selectedImage.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Likes:</span>
                          <span className="ml-2 font-medium">{selectedImage.likes}</span>
                        </div>
                      </div>

                      {selectedImage.description && (
                        <div>
                          <h4 className="font-semibold mb-2">Description</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {selectedImage.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border mt-6">
                    <Button className="w-full bg-gold-500 text-ink-900 hover:bg-gold-600">
                      Book Similar Design
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
