"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const artists = [
  "Any available artist",
  "Damon",
  "Bo",
  "Raven",
  "Naomi",
  "Yan",
];

const services = [
  "Consultation",
  "Custom tattoo",
  "Cover-up",
  "Touch-up",
  "Large piece",
  "Fine line",
];

const inputClass =
  "h-14 rounded-[4px] border-white/10 bg-white/[0.08] px-4 text-base text-white placeholder:text-white/34 ring-offset-black focus-visible:ring-1 focus-visible:ring-white/55 focus-visible:ring-offset-0";

const selectClass =
  "h-14 w-full rounded-[4px] border border-white/10 bg-[#1b1b1b] px-4 text-base text-white/78 outline-none transition-colors focus:border-white/45";

export function BookingForm() {
  const [isAdult, setIsAdult] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Booking request submitted. We will contact you within 24 hours to confirm the consultation.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-white/62">Full name *</label>
        <Input className={inputClass} required placeholder="Jane Smith" />
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/62">Email *</label>
        <Input className={inputClass} type="email" required placeholder="jane@example.com" />
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/62">Phone *</label>
        <Input className={inputClass} type="tel" required placeholder="(416) 486-9290" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-white/62">Service *</label>
          <select className={selectClass} required defaultValue="">
            <option value="" disabled>
              Select...
            </option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/62">Artist *</label>
          <select className={selectClass} required defaultValue="">
            <option value="" disabled>
              Select...
            </option>
            {artists.map((artist) => (
              <option key={artist}>{artist}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-white/62">Body placement *</label>
          <Input className={inputClass} required placeholder="Forearm, shoulder, ribs..." />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/62">Inspiration</label>
          <Input className={inputClass} placeholder="Paste a link or describe references" />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/62">Description</label>
        <Textarea
          className={cn(inputClass, "min-h-36 resize-y py-4")}
          placeholder="Tell us the concept, approximate size, style, timing, and anything we should know before we get started."
        />
      </div>

      <label className="flex items-center gap-3 text-sm text-white/68">
        <input
          type="checkbox"
          checked={isAdult}
          onChange={(event) => setIsAdult(event.target.checked)}
          required
          className="h-5 w-5 rounded-[4px] border-white/20 bg-white/10 accent-white"
        />
        I verify that I am 18 years or older.
      </label>

      <Button
        type="submit"
        disabled={!isAdult}
        className="h-14 w-full rounded-[4px] bg-white text-sm font-semibold uppercase tracking-wide text-black hover:bg-white/88 disabled:opacity-40"
      >
        Submit
      </Button>
    </form>
  );
}
