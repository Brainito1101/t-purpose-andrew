"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Award, Users, Heart, Target } from "lucide-react"
import Link from 'next/link';
import AppointmentModal from '@/components/AppointmentModal';
import Script from "next/script"

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
  
    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Andrew Dietz",
      "jobTitle": "Happiness Coach, Author, Financial Advisor, Lecturer",
      "description": "Accomplished entrepreneur, author, financial advisor, researcher, and lecturer whose research has led him to develop a formula that helps individuals reach an elevated existence of happiness and transform their lives.",
      "knowsAbout": ["Happiness Coaching", "Personal Transformation", "Life Purpose", "Inner Wealth", "Leadership Development", "The Dietz Method"],
      "award": "Creator of Unlock the Purpose Within Experience and the Dietz Method",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "30+ Years Experience"
      }
    }
  }

  return (
    <main className="pt-16">
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />    
      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Meet Andrew</h1>
              <p className="text-lg text-black-900 mb-6">
                Andrew Dietz is an accomplished entrepreneur, author, financial advisor, researcher, and lecturer, whose research has led him to develop a formula that helps individuals reach an elevated existence of happiness and transform their lives. 
              </p>
              <p className="text-lg text-gray-900 mb-6">
                Andrew’s passion can be found when people experience breakthrough moments, when they discover what has been blocking them for years and even decades. Most Notably, he is the creator of unlock the purpose within experience and the Dietz Method. 
              </p>
              <p className="text-lg text-gray-900 mb-6">
                “I’m passionate about helping others unblock the connection to their own source of energy, through proven strategies that create long-term extraordinary transformations.”
              </p>
              <p className="text-lg text-gray-900 mb-6">
                Andrew is known for his hands-on approach, working directly with individuals and groups to optimize daily routines, improve self-understanding, and productivity. His leadership and data-driven decisions have earned him recognition as a trusted authority in the business world as well.              </p>
            </div>
            <div className="relative pt-7 ">
              <Image
                src="/andrew-3.png"
                alt="Andrew Dietz"
                width={420}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="w-full flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
    
    <div className="text-center">
      <div className="bg-[#191970] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Award size={32} />
      </div>
      <div className="text-3xl font-bold text-[#191970] mb-2">30+</div>
      <div className="text-gray-600">Years Experience</div>
    </div>

    <div className="text-center">
      <div className="bg-[#191970] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Target size={32} />
      </div>
      <div className="text-3xl font-bold text-[#191970] mb-2">100+</div>
      <div className="text-gray-600">Lectures Delivered</div>
    </div>

  </div>
</div>



          {/* Mission */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              To empower individuals with the tools, insights, and support they need to create lasting happiness and
              fulfillment in their lives. I believe that everyone deserves to live with joy, purpose, and authentic
              connection to themselves and others.
            </p>
            <Button className="bg-[#191970] hover:bg-[#0f0f4d] text-white"  onClick={handleOpen}>Start Your Journey Today</Button>
          </div>
        </div>
        <AppointmentModal isOpen={isModalOpen} onClose={handleClose} />
      </section>
    </main>
  )
}
