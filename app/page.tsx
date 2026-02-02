import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import MotivationalQuotes from "@/components/motivational-quotes"
import ServicesSection from "@/components/services-section"
import RetreatsSection from "@/components/retreats-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import GHLPopupForm from '@/components/GHLPopupForm'
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "True Purpose | Live With Purpose, Energy & Real Happiness",
  description: "Discover True Purpose’s proven methods for lasting happiness, fulfillment, and purpose. Workshops, mentorship, and guidance to help you reconnect with yourself.",
  alternates: {
    canonical: "https://www.tpurpose.com/",
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

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tpurpose.com/#organization",
        "name": "True Purpose",
        "url": "https://www.tpurpose.com/",
        "email": "info@tpurpose.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hunt Valley",
          "addressRegion": "MD",
          "addressCountry": "US"
        },
        "sameAs": []
      },
      {
        "@type": "Person",
        "@id": "https://www.tpurpose.com/#andrew-dietz",
        "name": "Andrew Dietz",
        "description": "Entrepreneur, author, financial advisor, researcher and mentor helping individuals create lasting happiness and fulfillment.",
        "jobTitle": "Author, Speaker & Mentor",
        "url": "https://www.tpurpose.com/",
        "worksFor": {
          "@id": "https://www.tpurpose.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tpurpose.com/#website",
        "url": "https://www.tpurpose.com/",
        "name": "True Purpose",
        "publisher": {
          "@id": "https://www.tpurpose.com/#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tpurpose.com/#webpage",
        "url": "https://www.tpurpose.com/",
        "name": "True Purpose | Live With Purpose, Energy & Real Happiness",
        "description": "Transform your life with True Purpose's methods for lasting happiness and fulfillment. Workshops and mentorship to help you reconnect with yourself.",
        "isPartOf": {
          "@id": "https://www.tpurpose.com/#website"
        },
        "about": {
          "@id": "https://www.tpurpose.com/#andrew-dietz"
        },
        "publisher": {
          "@id": "https://www.tpurpose.com/#organization"
        }
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://www.tpurpose.com/#sitenav",
        "name": "Main Navigation",
        "url": "https://www.tpurpose.com/",
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Meet Andrew",
            "url": "https://www.tpurpose.com/about"
          },
          {
            "@type": "WebPage",
            "name": "Services",
            "url": "https://www.tpurpose.com/services"
          },
          {
            "@type": "WebPage",
            "name": "Workshop",
            "url": "https://www.tpurpose.com/workshop"
          },
          {
            "@type": "WebPage",
            "name": "Books",
            "url": "https://www.tpurpose.com/books"
          },
          {
            "@type": "WebPage",
            "name": "Blog",
            "url": "https://www.tpurpose.com/blog"
          },
          {
            "@type": "WebPage",
            "name": "Contact",
            "url": "https://www.tpurpose.com/contact"
          }
        ]
      }
    ]
  }

  return (
    <main>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSlider />
      <RetreatsSection />
      <AboutSection />
      <MotivationalQuotes />
      <ServicesSection headingLevel="h2" />

      <TestimonialsSection />
      <BlogSection headingLevel="h2" />
      <GHLPopupForm />
    </main>
  )
}
