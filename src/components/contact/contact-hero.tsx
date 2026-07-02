"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative min-h-[52vh] overflow-hidden bg-black text-white">
      <Image
        src="/images/pineinktattoos/shop/banner-1.png"
        alt="Floral tattoo artwork for Pine Ink contact"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-42"
      />
      <div className="absolute inset-0 bg-black/42" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/62 to-black/24" />

      <div className="container relative z-10 mx-auto flex min-h-[52vh] items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-full lg:max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/58">
            Contact
          </p>
          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            Start the Conversation
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/86 sm:text-xl">
            Ask about artists, timing, placement, or booking. We will help you
            find the right next step before the needle touches skin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
