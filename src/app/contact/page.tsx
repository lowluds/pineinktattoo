import type { Metadata } from "next"

import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Map } from "@/components/contact/map"

export const metadata: Metadata = {
  title: "Contact Us - Pine Ink Tattoo",
  description: "Get in touch with Pine Ink Tattoo. Visit our studio, call us, or send a message. We're here to help with all your tattoo questions.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Map />
    </>
  )
}