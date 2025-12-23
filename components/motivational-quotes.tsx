"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

const quotes = [
  {
    text: "I'm not here to fix you. I'm here to help you meet your authentic self.",
    author: "Andrew Dietz",
  },
]

export default function MotivationalQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          {/* Left side - decorative */}
          <div className="flex-1 hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 border-2 border-[#191970] rounded-full flex items-center justify-center">
                <div className="w-60 h-60 border border-[#191970] rounded-full flex items-center justify-center">
                  <Sparkles className="text-[#191970]" size={80} />
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#191970] rounded-full"></div>
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-[#191970] rounded-full"></div>
            </div>
          </div>

          {/* Right side - content */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#191970] text-white text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                Quote of the Moment
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
                Find Your
                <span className="block text-[#191970]">Inner Voice</span>
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="relative pl-6 sm:pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#191970] rounded-full"></div>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed font-light">
                    {quotes[currentQuote].text}
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#191970] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base sm:text-lg">
                        {quotes[currentQuote].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm sm:text-base">{quotes[currentQuote].author}</p>
                      <p className="text-xs sm:text-sm text-black">Inspirational Speaker</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white border border-[#191970] rounded-full h-1">
                <div 
                  className="bg-[#191970] h-1 rounded-full transition-all duration-4000 ease-linear"
                  style={{
                    width: `${((currentQuote + 1) / quotes.length) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}