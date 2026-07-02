import type { Metadata } from "next";
import Image from "next/image";

import { BookingForm } from "@/components/booking/booking-form";
import { BookingInfo } from "@/components/booking/booking-info";

export const metadata: Metadata = {
  title: "Book Appointment - Pine Ink Tattoo",
  description: "Schedule your tattoo consultation or appointment online. Easy booking process with our professional artists.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-[48vh] overflow-hidden bg-black">
        <Image
          src="/images/pineinktattoos/shop/banner-3.png"
          alt="Oni and floral tattoo artwork for booking at Pine Ink Tattoo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-42"
        />
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/62 to-black/24" />

        <div className="container relative z-10 mx-auto flex min-h-[48vh] items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-full lg:max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/58">
              Booking
            </p>
            <h1 className="mt-6 font-display text-5xl uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              Book With Pine Ink
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/86 sm:text-xl">
              Send the core details first. We will use your references, artist
              preference, placement, and timing to shape the next step.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <BookingInfo />
            <div className="border border-white/12 bg-white/[0.03] p-5 sm:p-8 lg:p-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
