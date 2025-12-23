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
  title: "Andrew Dietz | Live With Purpose, Energy & Real Happiness",
  description: "Discover Andrew Dietz’s proven methods for lasting happiness, fulfillment, and purpose. Workshops, mentorship, and guidance to help you reconnect with yourself.",
  alternates: {
    canonical: "https://www.andrew-dietz.com/",
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
        "@id": "https://www.andrew-dietz.com/#organization",
        "name": "Andrew Dietz",
        "url": "https://www.andrew-dietz.com/",
        "email": "info@andrew-dietz.com",
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
        "@id": "https://www.andrew-dietz.com/#andrew-dietz",
        "name": "Andrew Dietz",
        "description": "Entrepreneur, author, financial advisor, researcher and mentor helping individuals create lasting happiness and fulfillment.",
        "jobTitle": "Author, Speaker & Mentor",
        "url": "https://www.andrew-dietz.com/",
        "worksFor": {
          "@id": "https://www.andrew-dietz.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.andrew-dietz.com/#website",
        "url": "https://www.andrew-dietz.com/",
        "name": "Andrew Dietz",
        "publisher": {
          "@id": "https://www.andrew-dietz.com/#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.andrew-dietz.com/#webpage",
        "url": "https://www.andrew-dietz.com/",
        "name": "Andrew Dietz | Live With Purpose, Energy & Real Happiness",
        "description": "Transform your life with Andrew Dietz's methods for lasting happiness and fulfillment. Workshops and mentorship to help you reconnect with yourself.",
        "isPartOf": {
          "@id": "https://www.andrew-dietz.com/#website"
        },
        "about": {
          "@id": "https://www.andrew-dietz.com/#andrew-dietz"
        },
        "publisher": {
          "@id": "https://www.andrew-dietz.com/#organization"
        }
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://www.andrew-dietz.com/#sitenav",
        "name": "Main Navigation",
        "url": "https://www.andrew-dietz.com/",
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Meet Andrew",
            "url": "https://www.andrew-dietz.com/about"
          },
          {
            "@type": "WebPage",
            "name": "Services",
            "url": "https://www.andrew-dietz.com/services"
          },
          {
            "@type": "WebPage",
            "name": "Workshop",
            "url": "https://www.andrew-dietz.com/workshop"
          },
          {
            "@type": "WebPage",
            "name": "Books",
            "url": "https://www.andrew-dietz.com/books"
          },
          {
            "@type": "WebPage",
            "name": "Blog",
            "url": "https://www.andrew-dietz.com/blog"
          },
          {
            "@type": "WebPage",
            "name": "Contact",
            "url": "https://www.andrew-dietz.com/contact"
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
