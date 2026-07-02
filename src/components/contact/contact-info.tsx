"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const details = [
  {
    label: "Visit",
    value: "2367 Yonge Street\nToronto ON M4P 2C8\nFloor 2",
  },
  {
    label: "Call",
    value: "(416) 486-9290",
    href: "tel:+14164869290",
  },
  {
    label: "Email",
    value: "pineinktoronto@gmail.com",
    href: "mailto:pineinktoronto@gmail.com",
  },
  {
    label: "Hours",
    value: "Monday to Saturday, 10:00 am - 8:00 pm\nSunday, 12:00 pm - 6:00 pm",
  },
];

const socialLinks = [
  { label: "Instagram", value: "@pineinktattoos", href: "https://www.instagram.com/pineinktattoos/" },
  { label: "Facebook", value: "Pine Ink Tattoo", href: "https://www.facebook.com/pine.ink.tattoo/" },
];

export function ContactInfo() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className="border-y border-white/14 py-2"
    >
      <div className="divide-y divide-white/14">
        {details.map((item) => (
          <div key={item.label} className="grid gap-3 py-6 sm:grid-cols-[140px_1fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/46">
              {item.label}
            </p>
            {item.href ? (
              <Link
                href={item.href}
                className="whitespace-pre-line text-lg leading-7 text-white transition-colors hover:text-white/64"
              >
                {item.value}
              </Link>
            ) : (
              <p className="whitespace-pre-line text-lg leading-7 text-white">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {socialLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/14 p-5 transition-colors hover:border-white/36"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/46">
              {item.label}
            </p>
            <p className="mt-3 text-lg text-white">{item.value}</p>
          </Link>
        ))}
      </div>
    </motion.aside>
  );
}
