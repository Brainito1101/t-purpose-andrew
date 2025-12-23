"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sheila",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Mid-life crisis? Go to Andrew. He just makes you feel positive.",
  },
  {
    name: "James",
    role: "Software Developer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I have everything, but something felt missing. I felt sorted after the call.",
  },
  {
    name: "Lewis",
    role: "Teacher",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Andrew is amazing. Deep conversations with a hint of humor doesn't hurt a man.",
  },
  /*{
    name: "David Thompson",
    role: "Business Owner",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a busy entrepreneur, I thought I didn't have time for happiness coaching. Now I realize I couldn't afford NOT to invest in my well-being. Best decision ever.",
  },
  {
    name: "Lisa Park",
    role: "Nurse",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The individual coaching sessions provided exactly what I needed - personalized attention and strategies that fit my lifestyle. I'm so grateful for this experience.",
  },*/
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our <span className="text-[#191970]">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Real stories from real people who've transformed their lives</p>
        </div>

        <div className="relative">
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-800 mb-4 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div>
                  <div className="font-semibold text-[#191970] text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 sm:-translate-x-4 bg-white rounded-full p-2 shadow-lg text-[#191970] hover:text-[#0f0f4d] transition-colors z-10"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 sm:translate-x-4 bg-white rounded-full p-2 shadow-lg text-[#191970] hover:text-[#0f0f4d] transition-colors z-10"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-[#191970]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
