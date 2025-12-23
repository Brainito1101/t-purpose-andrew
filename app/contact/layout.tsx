import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Andrew Dietz | Book an Appointment",
  description: "Schedule workshops, mentorship sessions, or speaking engagements. Begin your journey toward purposeful, aligned living.",
  alternates: {
    canonical: "https://www.andrew-dietz.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

