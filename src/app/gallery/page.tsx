import type { Metadata } from "next"
import { PhotographyStyleGallery } from "@/components/gallery/photography-style-gallery"

export const metadata: Metadata = {
  title: "Tattoo Gallery - Pine Ink Tattoo", 
  description: "Explore our stunning collection of custom tattoos. From traditional to modern designs, see the incredible artistry of Pine Ink Tattoo.",
  keywords: "tattoo gallery, tattoo portfolio, custom tattoos, tattoo art, Pine Ink Tattoo gallery",
}

export default function GalleryPage() {
  return <PhotographyStyleGallery />
}