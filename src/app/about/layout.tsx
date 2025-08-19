import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Pine Ink Tattoo",
  description: "Learn about our tattoo services, consultation process, aftercare, booking, rates, and policies at Pine Ink Tattoo in Toronto.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
