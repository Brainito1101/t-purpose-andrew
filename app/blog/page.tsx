import BlogSection from "@/components/blog-section"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Andrew Dietz Blog | Insights on Purpose & Happiness",
  description: "Explore insights on fulfillment, mindset, success, and inner transformation to help you live with clarity and purpose.",
  alternates: {
    canonical: "https://www.andrew-dietz.com/blog",
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

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Andrew Dietz Blog",
    "description": "Insights on happiness, purpose, personal growth, and leadership from Andrew Dietz",
    "url": "https://www.andrew-dietz.com/blog",
    "publisher": {
      "@type": "Person",
      "name": "Andrew Dietz"
    }
  }

  return (
    <main className="">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Section */}
      

      <BlogSection />
    </main>
  )
}
