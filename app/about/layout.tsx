import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meet Andrew Dietz | Author, Researcher & Purpose Mentor",
  description: "Learn about Andrew Dietz—entrepreneur, author, and researcher helping individuals unlock purpose, remove emotional blocks, and create long-term transformation.",
  alternates: {
    canonical: "https://www.andrew-dietz.com/about",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

