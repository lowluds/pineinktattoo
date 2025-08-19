"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = [
  { id: "all", label: "All Work", count: 156 },
  { id: "damon", label: "Damon", count: 45, instagram: "damontattoos_han" },
  { id: "bo", label: "Bo", count: 38, instagram: "Bo.Toronto.tattoo" },
  { id: "raven", label: "Raven", count: 29, instagram: "halloweenink" },
  { id: "naomi", label: "Naomi", count: 22, instagram: "rampaintink" },
  { id: "yan", label: "Yan", count: 31, instagram: "pineinktattoos" },
]

interface GalleryFiltersProps {
  onFilterChange?: (category: string) => void
}

export function GalleryFilters({ onFilterChange }: GalleryFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    onFilterChange?.(categoryId)
  }

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold-500 text-ink-900 shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.label}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>

          {/* Active category info */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-muted-foreground">
              {activeCategory === "all" ? (
                <>
                  Showing{" "}
                  <span className="font-semibold text-foreground">
                    {categories.find(c => c.id === activeCategory)?.count}
                  </span>{" "}
                  tattoos from all artists
                </>
              ) : (
                <>
                  Showing{" "}
                  <span className="font-semibold text-foreground">
                    {categories.find(c => c.id === activeCategory)?.label}
                  </span>{" "}
                  's latest work
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}