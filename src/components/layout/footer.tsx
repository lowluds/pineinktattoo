import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Artists", href: "/artists" },
  { name: "Gallery", href: "/gallery" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/pineinktattoos" },
  { name: "Facebook", href: "https://www.facebook.com/pine.ink.tattoo/" },
];

const policyLinks = [
  { name: "Aftercare", href: "/about" },
  { name: "Deposit Policy", href: "/booking" },
  { name: "FAQ", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr_1fr] lg:items-start">
          <Link href="/" className="font-display text-5xl uppercase leading-none tracking-normal sm:text-6xl">
            Pine Ink
          </Link>

          <div>
            <p className="text-sm text-white/46">Location</p>
            <p className="mt-4 text-lg leading-7 text-white">
              2367 Yonge Street
              <br />
              Toronto ON M4P 2C8
              <br />
              Floor 2
            </p>
          </div>

          <div>
            <p className="text-sm text-white/46">Contact Us</p>
            <div className="mt-4 space-y-2 text-lg text-white">
              <Link href="tel:+14164869290" className="block transition-colors hover:text-white/68">
                Phone: (416) 486-9290
              </Link>
              <Link href="mailto:pineinktoronto@gmail.com" className="block transition-colors hover:text-white/68">
                Email: pineinktoronto@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-16 h-[240px] overflow-hidden sm:h-[320px] lg:h-[360px]">
          <Image
            src="/images/pineinktattoos/tattoos/raven-tattoo-4.jpg"
            alt="Detailed tattoo work from Pine Ink Tattoo"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/18" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl uppercase leading-none text-white sm:text-5xl">
              Where your story becomes ink.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-sm text-white/46">Links</p>
              <div className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-base text-white transition-colors hover:text-white/64"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-white/46">Social</p>
              <div className="mt-5 space-y-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base text-white transition-colors hover:text-white/64"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-white/46">Studio Notes</p>
            <div className="mt-5 space-y-3">
              {policyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base text-white transition-colors hover:text-white/64"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Pine Ink Tattoo. All rights reserved.</p>
          <p>
            Built by{" "}
            <Link href="https://northbridge.studio/" className="text-white transition-colors hover:text-white/64">
              Northbridge
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
