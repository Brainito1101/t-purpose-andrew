import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Books by Andrew Dietz | Transformative Life Insights",
  description: "Explore Andrew’s books on purpose, mindset, and happiness—crafted to elevate clarity and inner understanding.",
  alternates: {
    canonical: "https://www.andrew-dietz.com/books",
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

export default function BookPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Gratimystic: Extra Ordinary Happiness",
    "author": {
      "@type": "Person",
      "name": "Andrew Dietz"
    },
    "description": "A transformative guide designed to help readers awaken their true purpose within. Blending wisdom, mindfulness, and practical insights, the book invites you to shift perspectives, embrace gratitude, and discover deeper fulfillment in everyday life.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "url": "https://link.fastpaydirect.com/payment-link/694a63c235b562c128100639"
    }
  }

  return (
    <main className="bg-white">
      <Script
        id="book-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4 text-[#191970]">Gratimystic</h1>
        <p className="text-gray-600 mb-10 text-lg">
          Tap into the power of extraordinary happiness!
        </p>

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto text-left items-center">
          {/* Left: Book Card */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <Image
              src="https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/689f1c2b1ef51b61cb6c4922.webp"
              alt="Book 1"
              width={300}
              height={400}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#191970]">Gratimystic</h3>
            <p className="text-gray-500 mb-4">Coming soon</p>
            <Link href="https://link.fastpaydirect.com/payment-link/68c03563219709986ee1b7e1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#191970] hover:bg-[#15155c] text-white w-full">
                Pre-Order Now
              </Button>
            </Link>
          </div>

          {/* Right: Book Description */}
          <div>
            <h2 className="text-2xl font-bold text-[#191970] mb-4">About the Book</h2>
            <p className="text-gray-600 leading-relaxed">
              Gratimystic: Extra Ordinary Happiness by Andrew Dietz is a transformative guide designed to help readers awaken their true purpose within. Blending wisdom, mindfulness, and practical insights, the book invites you to shift perspectives, embrace gratitude, and discover deeper fulfillment in everyday life. With its focus on self-growth and authentic connection, Gratimystic is more than a book—it’s a journey toward extraordinary happiness and inner peace.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
