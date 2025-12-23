"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Link from "next/link"

// A/B Test variants for slide 2
const slide2Variants = {
  A: {
    title: (
      <div className="text-white text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase mb-2 px-2">
          Free your authentic self<br /><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"> Starting today! </span>
        </div>
      </div>
    ),
  },
  B: {
    title: (
      <div className="text-white text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase mb-2 px-2">
          7 Days to meet your authentic self more fully
        </div>
      </div>
    ),
  },
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slide2Variant, setSlide2Variant] = useState("A")
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Initialize A/B test variant
  useEffect(() => {
    const variant = Math.random() < 0.5 ? "A" : "B"
    setSlide2Variant(variant)
    console.log(`User assigned to variant: ${variant}`)
  }, [])

  // Load the form script when popup opens
  useEffect(() => {
    if (isPopupOpen) {
      const script = document.createElement("script")
      script.src = "https://link.msgsndr.com/js/form_embed.js"
      script.async = true
      document.body.appendChild(script)

      // Disable body scroll
      document.body.style.overflow = "hidden"

      return () => {
        document.body.removeChild(script)
        document.body.style.overflow = "unset"
      }
    }
  }, [isPopupOpen])

  const slides = [
    {
      title: (
        <div className="text-white text-center">
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium mb-1 sm:mb-2">
            ANDREW DIETZ
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-tight">
            AWAKEN
          </div>
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest uppercase mt-1 sm:mt-2 mb-1 sm:mb-2">
            YOUR PURPOSE
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-tight">
            WITHIN
          </div>
          <br />
        </div>
      ),
      subtitle: "",
      cta: "Register Now",
      ctaLink: "/workshop",
      bgImage:
        "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/6937dbb450387f6c4d793009.webp",
    },
    {
      title: slide2Variants[slide2Variant].title,
      subtitle: (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-3 sm:mt-4 md:mt-5 mb-4 sm:mb-5 md:mb-6 opacity-90 max-w-3xl mx-auto px-4">
          Let's fix that. A free 7-day reset lands in your inbox - one gentle nudge a day to help you feel like yourself again.
        </p>
      ),
      cta: "Subscribe now",
      isPopup: true,
      bgImage: "/slider-3.png",
    },
    {
      title: (
        <h2 className="text-4xl md:text-6xl font-bold leading-tight"></h2>
      ),
      subtitle: (
        <p className="text-xl md:text-2xl mt-4 opacity-90 max-w-3xl mx-auto"></p>
      ),
      cta: "Order Now",
      ctaLink: "/books",
      bgImage: "",
      isBookSlide: true,
    },
  ]

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Handle CTA Click (GA4 + GTM tracking)
  const handleCTAClick = () => {
    const variant = currentSlide === 1 ? slide2Variant : "N/A"
    const slideName = `Slide ${currentSlide + 1}${variant !== "N/A" ? ` - Variant ${variant}` : ""}`

    // Google Analytics (GA4) tracking
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "cta_click", {
        event_category: "Hero Slider",
        event_label: slideName,
        value: currentSlide + 1,
      })
      console.log("GA4 Event Sent:", slideName)
    }

    // Google Tag Manager tracking
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "cta_click",
      slide_number: currentSlide + 1,
      slide_variant: variant,
    })

    // Open popup if this slide has one
    if (slides[currentSlide].isPopup) {
      setIsPopupOpen(true)
    }
  }

  const closePopup = () => setIsPopupOpen(false)
  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) closePopup()
  }

  return (
    <>
      <section className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[490px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 transition-all duration-1000">
          {slides[currentSlide].isBookSlide ? (
            <div className="w-full h-full bg-gradient-to-br from-[#1a2332] via-[#243447] to-[#1a2332]"></div>
          ) : (
            <img
              src={slides[currentSlide].bgImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>
        {!slides[currentSlide].isBookSlide && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#191970]/50 to-[#191970]/20"></div>
        )}

        {/* Book Slide Content */}
        {slides[currentSlide].isBookSlide && (
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pb-16 sm:pb-20 md:pb-16">
            <div className="w-full max-w-7xl mx-auto">

              {/* Mobile Layout */}
              <div className="relative flex items-center justify-center md:hidden h-full">
                {/* Book Image - Move UP & Right */}
                <div className="absolute right-0 top-1/2 transform -translate-y-[40%] translate-x-[10px]">
                  <img
                    src="https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/6938179335652b5962fde77b.png"
                    alt="Gratimystic Book"
                    className="w-40 sm:w-48 h-auto drop-shadow-2xl opacity-90"
                  />
                </div>

                {/* Text Content - Shift Left */}
                <div className="relative z-10 text-white text-left space-y-2 pr-36">
                  <p className="text-[10px] tracking-[0.25em] uppercase font-semibold">
                    PRE-ORDER SALES
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif leading-tight font-bold">
                    GRATIMYSTIC
                  </h2>
                  <h3 className="text-base sm:text-lg text-[#d4af37] font-serif leading-tight font-bold">
                    EXTRA ORDINARY<br />HAPPINESS
                  </h3>
                  <p className="text-xs sm:text-sm font-light tracking-wide pt-1">
                    AWAKEN YOUR TRUE<br />PURPOSE WITHIN
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-start gap-8 lg:gap-12 xl:gap-16 pt-8 lg:pt-12">
                {/* Text Section */}
                <div className="text-white text-left space-y-3 lg:space-y-4 flex-1 max-w-xl">
                  <p className="text-sm lg:text-base tracking-[0.3em] uppercase font-bold">
                    PRE-ORDER SALES
                  </p>
                  <h2 className="text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight font-extrabold">
                    GRATIMYSTIC
                  </h2>
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl text-[#d4af37] font-serif leading-tight font-bold">
                    EXTRA ORDINARY<br />HAPPINESS
                  </h3>
                  <p className="text-lg lg:text-xl xl:text-2xl mt-4 lg:mt-6 font-normal tracking-wider">
                    AWAKEN YOUR TRUE<br />PURPOSE WITHIN
                  </p>
                </div>

                {/* Book Image - Adjusted Right & Down */}
                <div className="flex-shrink-0 self-end pb-8 lg:pb-10 transform translate-x-[200px] translate-y-12">
                  <img
                    src="https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/6938179335652b5962fde77b.png"
                    alt="Gratimystic Book"
                    className="w-52 lg:w-60 xl:w-72 h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide Content (for non-book slides) */}
        {!slides[currentSlide].isBookSlide && (
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 sm:px-6 md:px-8 text-center text-white ${
              currentSlide === 1 ? "bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-14" : "bottom-6 sm:bottom-8 md:bottom-10"
            }`}
          >
            <h1>{slides[currentSlide].title}</h1>

            {slides[currentSlide].subtitle && (
              <div
                className={
                  currentSlide === 1
                    ? "mt-2 mb-3"
                    : "text-xl md:text-2xl mt-4 mb-6 opacity-90 max-w-3xl mx-auto"
                }
              >
                {slides[currentSlide].subtitle}
              </div>
            )}

            {/* CTA Button */}
            {slides[currentSlide].cta && (
              <div className={currentSlide === 1 ? "mt-3" : ""}>
                {slides[currentSlide].isPopup ? (
                  <Button
                    size="lg"
                    onClick={handleCTAClick}
                    className="bg-white text-[#3b5998] hover:bg-gray-100 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold"
                  >
                    {slides[currentSlide].cta}
                  </Button>
                ) : (
                  <Link href={slides[currentSlide].ctaLink} passHref>
                    <Button
                      size="lg"
                      onClick={handleCTAClick}
                      className="bg-white text-[#3b5998] hover:bg-gray-100 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold"
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        )}

        {/* CTA Button for Book Slide */}
        {slides[currentSlide].isBookSlide && slides[currentSlide].cta && (
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2">
            <Link href={slides[currentSlide].ctaLink} passHref>
              <Button
                size="lg"
                onClick={handleCTAClick}
                className="bg-white text-[#3b5998] hover:bg-gray-100 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold"
              >
                {slides[currentSlide].cta}
              </Button>
            </Link>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" aria-hidden="true" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" aria-hidden="true" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full h-full sm:w-[90%] sm:h-[90%] max-w-2xl max-h-[90vh]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/0kC4by8DcwpDYeFfKWno"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
                background: "white",
              }}
              id="popup-0kC4by8DcwpDYeFfKWno"
              title="Email-Pdf"
            ></iframe>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
              aria-label="Close popup"
            >
              <X size={20} className="sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}