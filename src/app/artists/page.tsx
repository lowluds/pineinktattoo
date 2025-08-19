import type { Metadata } from "next"

import { ArtistsGrid } from "@/components/artists/artists-grid"
import { ArtistsHero } from "@/components/artists/artists-hero"

export const metadata: Metadata = {
  title: "Our Artists - Pine Ink Tattoo",
  description: "Meet our talented team of professional tattoo artists. Each specializing in unique styles from realism to traditional Japanese tattoos.",
}

export default function ArtistsPage() {
  return (
    <>
      <ArtistsHero />
      <ArtistsGrid />
    </>
  )
}