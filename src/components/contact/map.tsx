"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

import { Button } from "@/components/ui/button";

const transitNotes = [
  "Street parking available",
  "Green P parking nearby",
  "TTC subway: Yonge Line, Eglinton",
  "Bus routes: 97, 320, 97A",
];

export function Map() {
  return (
    <section id="map" className="border-t border-white/10 bg-black py-16 text-white lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/50">
            Studio map
          </p>
          <h2 className="mt-5 font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
            Find Our Studio
          </h2>
          <p className="mt-6 text-base leading-8 text-white/64 sm:text-lg">
            Located near Yonge and Eglinton, with public transit and parking
            options close by.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden border border-white/14"
          >
            <div className="relative aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.268589041123!2d-79.3997!3d43.7032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzExLjUiTiA3OcKwMjMnNTguNyJX!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale"
                title="Pine Ink Tattoo Studio Location"
              />
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="border-y border-white/14 py-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/46">
              Address
            </p>
            <p className="mt-4 text-lg leading-7 text-white">
              2367 Yonge Street
              <br />
              Toronto ON M4P 2C8
              <br />
              Floor 2
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/64">
              {transitNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              <Button
                variant="outline"
                className="rounded-[4px] border-white/24 bg-transparent text-white hover:bg-white hover:text-black"
                asChild
              >
                <a
                  href="https://maps.google.com/?q=2367+Yonge+Street+Toronto+ON+M4P+2C8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
              <Button className="rounded-[4px] bg-white text-black hover:bg-white/86" asChild>
                <a href="tel:+14164869290">Call (416) 486-9290</a>
              </Button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
