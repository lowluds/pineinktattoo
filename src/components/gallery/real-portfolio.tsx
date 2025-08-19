"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface PortfolioImage {
  id: string
  src: string
  alt: string
  category: string
  artist?: string
  description?: string
}

// This will be populated with real images from Pine Ink Tattoos
const portfolioImages: PortfolioImage[] = [
  // Example structure - replace with real images after extraction
  {
    id: "1",
    src: "/images/pineinktattoos/work/tattoo-black-rose-arm-piece.jpg",
    alt: "Black and grey rose tattoo on client's arm",
    category: "Traditional",
    artist: "Artist Name",
    description: "Detailed black and grey rose with intricate shading"
  },
  {
    id: "2", 
    src: "/images/pineinktattoos/work/tattoo-geometric-shoulder-design.jpg",
    alt: "Geometric mandala tattoo on client's shoulder",
    category: "Geometric",
    artist: "Artist Name",
    description: "Complex geometric mandala with precise line work"
  },
  {
    id: "3",
    src: "/images/pineinktattoos/work/tattoo-realistic-portrait.jpg", 
    alt: "Realistic portrait tattoo on client's forearm",
    category: "Realistic",
    artist: "Artist Name",
    description: "Photorealistic portrait with incredible detail"
  },
  // Add more images after extraction...
]

const categories = ["All", "Traditional", "Realistic", "Geometric", "Watercolor", "Black & Grey"]

export function RealPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredImages = selectedCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory)

  const openModal = (image: PortfolioImage) => {
    setSelectedImage(image)
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id))
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1)
    } else {
      setCurrentIndex(prev => prev === filteredImages.length - 1 ? 0 : prev + 1)
    }
    setSelectedImage(filteredImages[currentIndex])
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of custom tattoos, showcasing the incredible artistry 
            and craftsmanship of our talented artists at Pine Ink Tattoos.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <p className="font-semibold">{image.category}</p>
                      {image.artist && (
                        <p className="text-sm opacity-90">by {image.artist}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No images found for this category. Images will appear here after extraction.
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
                className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateImage("prev")}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => navigateImage("next")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image */}
                <div className="relative aspect-video max-h-[70vh]">
                  <Image
                    src={filteredImages[currentIndex].src}
                    alt={filteredImages[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {filteredImages[currentIndex].category}
                    </span>
                    {filteredImages[currentIndex].artist && (
                      <span className="text-muted-foreground">
                        by {filteredImages[currentIndex].artist}
                      </span>
                    )}
                  </div>
                  {filteredImages[currentIndex].description && (
                    <p className="text-muted-foreground">
                      {filteredImages[currentIndex].description}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}