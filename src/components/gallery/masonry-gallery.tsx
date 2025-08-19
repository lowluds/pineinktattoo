"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart, Share2, ExternalLink, User, Calendar } from "lucide-react"

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
  height: number // For masonry layout
  description?: string
}

// Sample data - replace with real images after extraction
const tattooImages: TattooImage[] = [
  {
    id: "1",
    src: "/images/pineinktattoos/work/tattoo-rose-shoulder.jpg",
    alt: "Black and grey rose tattoo on shoulder",
    category: "traditional",
    artist: "Maria Rodriguez",
    style: "Traditional",
    bodyPart: "Shoulder",
    date: "2024-01-15",
    likes: 247,
    height: 400,
    description: "Detailed black and grey rose with intricate shading and classic traditional styling."
  },
  {
    id: "2", 
    src: "/images/pineinktattoos/work/tattoo-geometric-forearm.jpg",
    alt: "Geometric mandala tattoo on forearm",
    category: "geometric",
    artist: "Alex Chen",
    style: "Geometric",
    bodyPart: "Forearm",
    date: "2024-01-20",
    likes: 189,
    height: 600,
    description: "Complex geometric mandala with precise line work and sacred geometry patterns."
  },
  {
    id: "3",
    src: "/images/pineinktattoos/work/tattoo-realistic-portrait.jpg",
    alt: "Realistic portrait tattoo",
    category: "realistic",
    artist: "David Thompson",
    style: "Realistic",
    bodyPart: "Upper Arm",
    date: "2024-01-25",
    likes: 312,
    height: 500,
    description: "Photorealistic portrait with incredible detail and lifelike shading."
  },
  {
    id: "4",
    src: "/images/pineinktattoos/work/tattoo-watercolor-butterfly.jpg",
    alt: "Watercolor butterfly tattoo",
    category: "watercolor",
    artist: "Sarah Kim",
    style: "Watercolor",
    bodyPart: "Back",
    date: "2024-02-01",
    likes: 156,
    height: 350,
    description: "Vibrant watercolor butterfly with flowing colors and artistic brush strokes."
  },
  {
    id: "5",
    src: "/images/pineinktattoos/work/tattoo-blackwork-sleeve.jpg",
    alt: "Blackwork sleeve tattoo",
    category: "blackwork",
    artist: "Marcus Johnson",
    style: "Blackwork",
    bodyPart: "Full Sleeve",
    date: "2024-02-05",
    likes: 278,
    height: 700,
    description: "Bold blackwork sleeve with intricate patterns and solid black elements."
  },
  {
    id: "6",
    src: "/images/pineinktattoos/work/tattoo-minimalist-line.jpg",
    alt: "Minimalist line art tattoo",
    category: "minimalist",
    artist: "Emma Wilson",
    style: "Minimalist",
    bodyPart: "Wrist",
    date: "2024-02-10",
    likes: 98,
    height: 300,
    description: "Clean minimalist design with single line art and elegant simplicity."
  },
  // Add more placeholder images...
  {
    id: "7",
    src: "/images/pineinktattoos/work/tattoo-dragon-back.jpg",
    alt: "Traditional dragon back piece",
    category: "traditional",
    artist: "Maria Rodriguez", 
    style: "Traditional",
    bodyPart: "Full Back",
    date: "2024-02-15",
    likes: 425,
    height: 650,
    description: "Majestic traditional dragon spanning the full back with vibrant colors."
  },
  {
    id: "8",
    src: "/images/pineinktattoos/work/tattoo-flower-thigh.jpg",
    alt: "Realistic flower tattoo on thigh",
    category: "realistic",
    artist: "David Thompson",
    style: "Realistic",
    bodyPart: "Thigh",
    date: "2024-02-20",
    likes: 203,
    height: 550,
    description: "Realistic floral composition with detailed petals and natural shading."
  },
]

export function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<TattooImage | null>(null)
  const [filteredImages, setFilteredImages] = useState(tattooImages)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const openModal = (image: TattooImage) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  // Create masonry columns
  const createMasonryColumns = (images: TattooImage[], columnCount: number) => {
    const columns: TattooImage[][] = Array.from({ length: columnCount }, () => [])
    const columnHeights = Array(columnCount).fill(0)

    images.forEach((image) => {
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))
      columns[shortestColumnIndex].push(image)
      columnHeights[shortestColumnIndex] += image.height
    })

    return columns
  }

  if (!isClient) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        </div>
      </section>
    )
  }

  const columns = createMasonryColumns(filteredImages, 3)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6">
              {column.map((image, imageIndex) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: imageIndex * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-muted shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Placeholder for actual image */}
                    <div 
                      className="w-full bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center relative"
                      style={{ height: `${image.height}px` }}
                    >
                      <div className="text-center p-8">
                        <div className="text-gold-600 text-lg font-semibold mb-2">
                          {image.style} Tattoo
                        </div>
                        <div className="text-gold-500 text-sm mb-4">
                          {image.bodyPart} • by {image.artist}
                        </div>
                        <div className="text-xs text-gold-400 bg-white/50 px-3 py-1 rounded-full inline-block">
                          Click to view details
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                          <p className="text-sm font-medium">View Details</p>
                        </div>
                      </div>
                    </div>

                    {/* Image info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{image.style}</p>
                          <p className="text-xs opacity-90">by {image.artist}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <Heart className="h-3 w-3" />
                          {image.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No tattoos found in this category. Check back soon for more amazing work!
            </p>
          </div>
        )}

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
                  <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-gold-600 text-2xl font-bold mb-4">
                        {selectedImage.style} Tattoo
                      </div>
                      <div className="text-gold-500 mb-6">
                        {selectedImage.bodyPart}
                      </div>
                      <div className="text-sm text-gold-400 bg-white/50 px-4 py-2 rounded-full">
                        Image will appear here after extraction
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{selectedImage.style} Tattoo</h3>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {selectedImage.artist}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(selectedImage.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                            <Share2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Details</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Style:</span>
                              <span className="ml-2 font-medium">{selectedImage.style}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Body Part:</span>
                              <span className="ml-2 font-medium">{selectedImage.bodyPart}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Category:</span>
                              <span className="ml-2 font-medium capitalize">{selectedImage.category}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Likes:</span>
                              <span className="ml-2 font-medium">{selectedImage.likes}</span>
                            </div>
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

                    <div className="pt-6 border-t border-border">
                      <button className="w-full bg-gold-500 text-ink-900 py-3 px-6 rounded-lg font-semibold hover:bg-gold-600 transition-colors">
                        Book Similar Design
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}