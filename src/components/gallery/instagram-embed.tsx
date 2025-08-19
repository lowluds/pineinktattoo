"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Instagram, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface InstagramEmbedProps {
  username: string
  artistName: string
}

export function InstagramEmbed({ username, artistName }: InstagramEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => setIsLoading(false)
    script.onerror = () => setHasError(true)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleViewInstagram = () => {
    window.open(`https://instagram.com/${username}`, '_blank', 'noopener,noreferrer')
  }

  if (hasError) {
    return (
      <div className="text-center py-12">
        <div className="mb-4">
          <Instagram className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Instagram Feed Unavailable</h3>
          <p className="text-muted-foreground mb-4">
            Unable to load {artistName}'s Instagram feed. Please visit their profile directly.
          </p>
          <Button onClick={handleViewInstagram} variant="outline">
            <Instagram className="h-4 w-4 mr-2" />
            View {artistName}'s Instagram
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Artist header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{artistName}'s Work</h2>
        <p className="text-muted-foreground mb-4">
          Latest pieces from {artistName}'s Instagram
        </p>
        <Button onClick={handleViewInstagram} variant="outline" size="sm">
          <Instagram className="h-4 w-4 mr-2" />
          Follow {artistName} on Instagram
        </Button>
      </div>

      {/* Instagram embed with overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500"></div>
          </div>
        )}
        
        <div className="instagram-embed-container relative">
          <iframe
            src={`https://www.instagram.com/${username}/embed`}
            width="100%"
            height="1200"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            style={{
              background: 'transparent',
              border: 'none',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
          />
          
          {/* Clickable overlay */}
          <div 
            className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 cursor-pointer rounded-lg flex items-center justify-center"
            onClick={handleViewInstagram}
          >
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white px-6 py-3 rounded-full flex items-center gap-2">
              <Instagram className="h-5 w-5" />
              <span className="font-medium">View Full Profile</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Info about Instagram limitations */}
        <div className="text-center mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Instagram Preview:</strong> This shows the latest 6 photos from {artistName}'s feed. 
            Click anywhere on the preview or use the button above to view their full Instagram profile with all {artistName === "Damon" ? "985" : "posts"}.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
