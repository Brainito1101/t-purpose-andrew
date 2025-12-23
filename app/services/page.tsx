import ServicesSection from "@/components/services-section"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "1-on-1 Mentorship | Personal Guidance for Real Change",
  description: "Explore workshops and private mentorship designed to help you reconnect with purpose and release internal blocks.",
  alternates: {
    canonical: "https://www.andrew-dietz.com/services",
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

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Happiness Coaching and Life Transformation Services",
    "provider": {
      "@type": "Person",
      "name": "Andrew Dietz"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Andrew Dietz Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Small Group Workshops",
            "description": "Curated spaces for reflection, recalibration, and connection."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "1-on-1 Mentorship",
            "description": "Strategic, discreet, and deeply personal guidance."
          }
        }
      ]
    }
  }

  return (
    <main className="">
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Section */}
      

      <ServicesSection />

      
    </main>
  )
}
