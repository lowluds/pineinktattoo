"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  { label: "Clients", value: "2,500+" },
  { label: "Years", value: "20+" },
  { label: "Reviews", value: "500+" },
  { label: "Pieces", value: "5,000+" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();

    const retryTimer = setTimeout(tryPlay, 300);
    const onTap = () => {
      if (video.paused) tryPlay();
    };

    window.addEventListener("touchstart", onTap, { passive: true, once: true });
    return () => {
      clearTimeout(retryTimer);
      window.removeEventListener("touchstart", onTap);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">
      <Image
        src="/images/pineinktattoos/shop/hero-logo-top-mobile.jpg"
        alt="Pine Ink Tattoo studio interior"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-10 object-cover object-center md:hidden"
      />

      <video
        ref={videoRef}
        className="absolute inset-0 z-10 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
      >
        <source media="(min-width: 768px)" src="/videos/shop/pink-ink-hero.mp4?v=4" type="video/mp4" />
      </video>

      <div aria-hidden className="absolute inset-0 z-20 bg-black/58" />

      <div className="relative z-30 flex min-h-[100svh] items-center">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto flex max-w-6xl flex-col items-center text-center"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.42em] text-white/70">
              Toronto tattoo studio
            </p>

            <h1 className="max-w-5xl text-balance font-display text-5xl font-medium uppercase leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Pine Ink Tattoo
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-xl">
              Custom tattoos shaped through careful consultation, strong portfolios, and a studio process built around trust.
            </p>

            <div className="mt-10 flex w-full max-w-lg flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="xl"
                className="h-14 rounded-[4px] bg-white px-8 text-sm font-semibold uppercase tracking-wide text-black hover:bg-white/88"
                asChild
              >
                <Link href="/booking">Book Appointment</Link>
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="h-14 rounded-[4px] border-white/35 bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/gallery">
                  View Gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-14 grid w-full max-w-3xl grid-cols-2 border border-white/18 bg-black/24 text-left backdrop-blur-sm sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-white/18 p-5 text-center sm:border-l sm:first:border-l-0">
                  <div className="font-display text-3xl text-white sm:text-4xl">{stat.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
