"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    date: "Custom sleeve",
    text: "Damon is absolutely incredible. The detail, shading, and calm process made a large piece feel considered from the first consultation to the final pass.",
  },
  {
    name: "Alex Chen",
    date: "Geometric work",
    text: "Raven translated a loose idea into something precise and personal. The studio felt clean, focused, and easy to trust.",
  },
  {
    name: "Maria Rodriguez",
    date: "Memorial portrait",
    text: "Bo created a portrait with real presence. I came in nervous and left feeling like the piece had been handled with care.",
  },
  {
    name: "Jordan Taylor",
    date: "Watercolor floral",
    text: "Naomi's color work is beautiful. The consultation helped refine the placement, and the finished tattoo healed exactly as she said it would.",
  },
  {
    name: "Chris Williams",
    date: "Fine line",
    text: "Yan's linework is clean and steady. The whole appointment was organized, relaxed, and clear from deposit to aftercare.",
  },
  {
    name: "Emma Davis",
    date: "Traditional phoenix",
    text: "The studio has a strong point of view without feeling intimidating. I felt heard, prepared, and excited the entire time.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-black py-20 text-white lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-none text-center"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-white/55">
            Reviews
          </p>
          <h2 className="font-display text-5xl font-medium uppercase leading-[1.02] text-white sm:text-6xl lg:text-[clamp(4rem,5.4vw,6rem)] xl:whitespace-nowrap">
            Our customers love us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
          className="grid border border-white/16 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="min-h-[310px] border-white/16 p-7 md:border-l md:[&:nth-child(2n+1)]:border-l-0 xl:[&:nth-child(2n+1)]:border-l xl:[&:nth-child(3n+1)]:border-l-0 [&:nth-child(n+2)]:border-t md:[&:nth-child(2)]:border-t-0 xl:[&:nth-child(3)]:border-t-0">
              <p className="text-2xl leading-snug text-white/88">
                "{testimonial.text}"
              </p>
              <div className="mt-12 flex items-end justify-between gap-6 text-sm">
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="mt-1 text-white/45">{testimonial.date}</p>
                </div>
                <p className="text-right uppercase tracking-[0.22em] text-white/36">Verified</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
