"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon, Instagram, Facebook, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Artists", href: "/artists" },
  { name: "Gallery", href: "/gallery" },
  { name: "Booking", href: "/booking" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  const toggleMobileMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 text-white backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/pineinktattoos/shop/logo.png"
                alt="Pine Ink Tattoo Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-white">
                Pine Ink Tattoo
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-white",
                  pathname === item.href
                    ? "text-white"
                    : "text-white/58"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-white/72 hover:bg-white/10 hover:text-white" asChild>
                <Link href="https://www.instagram.com/pineinktattoos/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white/72 hover:bg-white/10 hover:text-white" asChild>
                <Link href="https://www.facebook.com/pine.ink.tattoo/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white/72 hover:bg-white/10 hover:text-white" asChild>
                <Link href="tel:+14164869290">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Call us</span>
                </Link>
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" className="text-white/72 hover:bg-white/10 hover:text-white" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              size="lg"
              className="rounded-[4px] border border-white/30 bg-transparent px-7 text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white/78 hover:bg-white/10 hover:text-white" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white/78 hover:bg-white/10 hover:text-white"
              onClick={toggleMobileMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-menu"
          className="md:hidden"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="space-y-1 border-t border-white/10 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-white text-black"
                    : "text-white/64 hover:bg-white/10 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Button variant="ghost" size="icon" className="text-white/72 hover:bg-white/10 hover:text-white" asChild>
                  <Link href="https://www.instagram.com/pineinktattoos/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="text-white/72 hover:bg-white/10 hover:text-white" asChild>
                  <Link href="https://www.facebook.com/pine.ink.tattoo/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="text-white/72 hover:bg-white/10 hover:text-white" asChild>
                  <Link href="tel:+14164869290">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Call us</span>
                  </Link>
                </Button>
              </div>
              
              <Button size="lg" className="w-full rounded-[4px] bg-white text-black hover:bg-white/86" asChild>
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
