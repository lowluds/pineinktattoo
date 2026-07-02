"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const policies = [
  {
    title: "Consultations",
    description:
      "Most custom pieces begin with a consultation. Bring references, placement ideas, approximate size, and the artist whose work feels closest to the direction.",
  },
  {
    title: "Appointments",
    description:
      "Artist books vary by season. Submit a booking request or contact the artist directly, and we will confirm timing before any appointment is locked in.",
  },
  {
    title: "Deposits",
    description:
      "A deposit is required to secure tattoo time and is applied to the final appointment. Rescheduling requires at least three days notice.",
  },
  {
    title: "Rates",
    description:
      "Pricing depends on complexity, size, placement, artist, and session length. Clear reference material helps us give a useful estimate.",
  },
  {
    title: "Aftercare",
    description:
      "Your artist will walk through aftercare before you leave. If anything feels unclear during healing, contact the studio or artist directly.",
  },
  {
    title: "Touch-ups",
    description:
      "Touch-ups are available within three months after the completed piece, arranged directly with the artist who made the tattoo.",
  },
];

const contacts = [
  ["Address", "2367 Yonge Street, Toronto ON M4P 2C8, Floor 2"],
  ["Phone", "(416) 486-9290"],
  ["Email", "pineinktoronto@gmail.com"],
  ["Instagram", "@pineinktattoos"],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.42em] text-white/48">
                About Pine Ink
              </p>
              <h1 className="font-display text-5xl font-medium uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                A Toronto tattoo studio built around artist fit.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/64">
                Pine Ink balances portfolio-led work with a clear booking process. The goal is simple: help each client understand the artist, the design direction, the appointment expectations, and the aftercare before the needle touches skin.
              </p>

              <div className="mt-10 grid gap-5 border-t border-white/12 pt-8 sm:grid-cols-2">
                {contacts.map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/38">{label}</p>
                    <p className="mt-2 leading-7 text-white/76">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative min-h-[420px] overflow-hidden border border-white/12 lg:min-h-[560px]"
            >
              <Image
                src="/images/pineinktattoos/tattoos/damon-tattoo-1.jpg"
                alt="Detailed floral tattoo work by Pine Ink Tattoo"
                fill
                priority
                className="object-cover grayscale"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/18" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/12 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-white/48">
                Studio guide
              </p>
              <h2 className="font-display text-4xl font-medium uppercase leading-[1.05] text-white sm:text-5xl">
                Services, policies, and what to expect.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/62 lg:ml-auto">
              These notes help clients arrive prepared. They are not meant to replace the artist consultation, but they make the first conversation easier and more specific.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid border border-white/16 md:grid-cols-2 lg:grid-cols-3"
          >
            {policies.map((item) => (
              <article key={item.title} className="border-white/16 p-7 md:border-l md:[&:nth-child(2n+1)]:border-l-0 lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(3n+1)]:border-l-0 [&:nth-child(n+2)]:border-t md:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(3)]:border-t-0">
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-5 leading-7 text-white/58">{item.description}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/12 px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-medium uppercase leading-[1.05] text-white sm:text-5xl">
            Start with the right artist.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/62">
            Browse the team, gather references, then book a consultation when the direction feels clear.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="h-14 rounded-[4px] bg-white px-8 text-sm font-semibold uppercase tracking-wide text-black hover:bg-white/88"
              asChild
            >
              <Link href="/booking">Book Consultation</Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="h-14 rounded-[4px] border-white/25 bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/artists">Meet Our Artists</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
