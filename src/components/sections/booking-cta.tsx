"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const steps = [
  {
    label: "01",
    title: "Tell us the idea",
    description: "Share placement, size, style, references, and any artist preference.",
  },
  {
    label: "02",
    title: "Meet the right artist",
    description: "We shape the concept, timing, and quote before you commit to the session.",
  },
  {
    label: "03",
    title: "Leave with a plan",
    description: "You get clear next steps, deposit details, and aftercare expectations.",
  },
];

export function BookingCTA() {
  return (
    <section className="bg-black py-20 text-white lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-white/55">
              Consultations
            </p>
            <h2 className="max-w-3xl font-display text-5xl font-medium uppercase leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Ready to get your dream tattoo?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="text-lg leading-8 text-white/68">
              A good tattoo starts before the machine turns on. Send the idea, bring the references, and we will help match the piece to the right artist and appointment path.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                <Link href="/contact">
                  Ask a Question
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          viewport={{ once: true }}
          className="mt-16 grid border border-white/16 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <div key={step.label} className="border-white/16 p-7 lg:border-l lg:first:border-l-0">
              <div className="text-xs uppercase tracking-[0.34em] text-white/42">{step.label}</div>
              <h3 className="mt-8 text-2xl font-medium text-white">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
