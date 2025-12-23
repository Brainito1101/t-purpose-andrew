import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto h-[240px] sm:h-[280px] md:h-[320px] lg:h-[400px]">
            <Image
              src="/andrew-3.png"
              alt="Happiness Coach"
              fill
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-[#1d1f23]">Awaken Your Purpose Within</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Awaken the Power Within is a transformational experience designed to help you uncover and release
              the hidden patterns holding you back.
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              What are we going to talk about?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              It combines powerful psychological insights, breakthrough coaching strategies, and immersive
              exercises to build unstoppable momentum, and create lasting change in your life.
            </p>

            <h6 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              What are they going to get out of it?
            </h6>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Whether you want to achieve greater success in your career, improve your health and relationships,
              or find deeper purpose and fulfillment, this event will guide you to tap into the power already within
              you and live the life you’ve always envisioned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-[#191970] hover:bg-[#2d4373] text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
