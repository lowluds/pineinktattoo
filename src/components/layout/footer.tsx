"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Heart
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  services: [
    { name: "Custom Tattoos", href: "/contact" },
    { name: "Cover-ups", href: "/contact" },
    { name: "Touch-ups", href: "/contact" },
  ],
  info: [
    { name: "About Us", href: "/about" },
    { name: "Artists", href: "/artists" },
    { name: "Gallery", href: "/gallery" },
    { name: "Find Our Studio", href: "/contact#map" },
  ],
  support: [
    { name: "Aftercare", href: "/about" },
    { name: "FAQ", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
}

const bottomLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
]

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/pineinktattoos",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/pine.ink.tattoo/",
    icon: Facebook,
  },
]

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/pineinktattoos/shop/logo.png"
                    alt="Pine Ink Tattoo Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl">Pine Ink Tattoo</span>
              </Link>
              
              <p className="text-ink-300 mb-6 leading-relaxed">
                Creating stunning, custom tattoos with artistry and professionalism. 
                Your story, our ink, forever beautiful.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gold-500" />
                  <span className="text-ink-300 text-sm">
                    2367 Yonge Street, Toronto ON M4P 2C8, Floor 2
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gold-500" />
                  <span className="text-ink-300 text-sm">
                    (416) 486-9290
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gold-500" />
                  <span className="text-ink-300 text-sm">
                    pineinktoronto@gmail.com
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-ink-300 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-ink-300 hover:text-gold-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-300 hover:text-gold-400 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ink-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-ink-300 text-sm mb-4 md:mb-0"
            >
              © 2024 Pine Ink Tattoo. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-ink-300 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}