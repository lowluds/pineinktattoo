import type { Metadata } from "next"

import { BookingForm } from "@/components/booking/booking-form"
import { BookingInfo } from "@/components/booking/booking-info"

export const metadata: Metadata = {
  title: "Book Appointment - Pine Ink Tattoo",
  description: "Schedule your tattoo consultation or appointment online. Easy booking process with our professional artists.",
}

export default function BookingPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Book Your{" "}
              <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                Appointment
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to get started? Book your consultation or tattoo appointment 
              with one of our expert artists. We'll help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            <div className="lg:col-span-1">
              <BookingInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}