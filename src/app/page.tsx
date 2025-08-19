import { Hero } from "@/components/sections/hero"
import { ShopInfo } from "@/components/sections/shop-info"
import { FeaturedArtists } from "@/components/sections/featured-artists"
import { GalleryShowcase } from "@/components/sections/gallery-showcase"
import { Testimonials } from "@/components/sections/testimonials"
import { BookingCTA } from "@/components/sections/booking-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <ShopInfo />
      <FeaturedArtists />
      <GalleryShowcase />
      <Testimonials />
      <BookingCTA />
    </>
  )
}
