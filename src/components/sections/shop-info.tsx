"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const infoItems = [
  {
    label: "Location",
    value: "2367 Yonge Street\nToronto ON M4P 2C8\nFloor 2",
  },
  {
    label: "Contact",
    value: "pineinktoronto@gmail.com\n(416) 486-9290",
  },
  {
    label: "Instagram",
    value: "@pineinktattoos",
    href: "https://instagram.com/pineinktattoos",
  },
];

const artistLinks = [
  "@damontattoos_han",
  "@Bo.Toronto.tattoo",
  "@halloweenink",
  "@rampaintink",
];

export function ShopInfo() {
  return (
    <section className="bg-black py-20 text-white lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/58">
              Studio details
            </p>
            <h2 className="mt-6 max-w-xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Easy to find. Easy to start.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/68 sm:text-lg">
              Bring your idea, references, placement, and timing. We will match
              the right artist and shape a clear plan before the appointment.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                className="h-13 rounded-[4px] bg-white px-7 text-sm font-semibold uppercase tracking-wide text-black hover:bg-white/86"
                asChild
              >
                <Link href="/booking">Book Consultation</Link>
              </Button>
              <Button
                variant="outline"
                className="h-13 rounded-[4px] border-white/24 bg-transparent px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/artists">
                  See Artists
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="border-y border-white/18"
          >
            <div className="grid gap-0 xl:grid-cols-[0.85fr_1.45fr_1fr]">
              {infoItems.map((item) => (
                <div key={item.label} className="min-w-0 border-white/18 py-7 xl:border-l xl:px-5 xl:first:border-l-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/46">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block min-w-0 break-words text-lg leading-7 text-white transition-colors hover:text-white/70"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="mt-4 min-w-0 whitespace-pre-line break-words text-lg leading-7 text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-white/18 py-7 sm:px-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/46">
                Artist handles
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {artistLinks.map((artist) => (
                <Link
                  key={artist}
                  href={`https://instagram.com/${artist.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-words text-lg text-white/82 transition-colors hover:text-white"
                >
                    {artist}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      <div
        className="mt-16 h-[360px] w-full bg-[url('/images/pineinktattoos/tattoos/damon-tattoo-2.jpg')] bg-cover bg-center grayscale sm:h-[440px] lg:h-[58vh] lg:max-h-[640px] lg:bg-fixed"
        aria-label="Tattoo detail by Pine Ink Tattoo"
      />
    </section>
  );
}
