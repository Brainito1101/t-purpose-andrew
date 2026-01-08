"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Services data with form IDs instead of direct booking links
const services = [
  {
    title: "Small Group Workshops",
    description:
      "Curated spaces for reflection, recalibration, and connection.",
    images: [
      "https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695fd7f40597df118ee00001.png",
      "https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695fd7f49c38cb4cd786587f.png",
      "https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695fd7f4fface199a026098f.png",
    ],
    formId: "rAt5dTX0IBICsbzgQCTq", // workshop form
  },
  {
    title: "1-on-1 Mentorship",
    description: "Strategic, discreet, and deeply personal guidance.",
    images: [
      "https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695fd7f4dc5e04f1ecc6c2af.png",
      "https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695fd7f459bb4aa9f5078658.png",
      "https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695fd7f46eabe660862ac8e2.jpg",
    ],
    formId: "oFkkgW6Y1q1cLN3ksbOt", // mentorship form
  },
]

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 7000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-cover object-center rounded-t-lg"
          />
        </div>
      ))}
      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  )
}

interface ServicesSectionProps {
  headingLevel?: "h1" | "h2"
}

export default function ServicesSection({ headingLevel = "h1" }: ServicesSectionProps) {
  const [open, setOpen] = useState(false)
  const [selectedForm, setSelectedForm] = useState<string | null>(null)

  const handleOpenForm = (formId: string) => {
    setSelectedForm(formId)
    setOpen(true)
  }

  const HeadingTag = headingLevel === "h2" ? "h2" : "h1"

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <HeadingTag className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Here's what <span className="text-[#191970]">we offer</span>
          </HeadingTag>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose the path that best fits your journey to freedom. Each
            service is designed to provide you with the tools and support you
            need to create lasting positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 
                 w-full sm:w-[90%] md:w-[420px] lg:w-[420px] mx-auto min-h-[420px] sm:h-[420px] flex flex-col"
            >
              <CardHeader className="p-0">
                <div className="h-[180px] sm:h-[200px] w-full overflow-hidden rounded-t-lg">
                  <ImageCarousel
                    images={service.images}
                    title={service.title}
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                  <h3>{service.title}</h3>
                </CardTitle>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => handleOpenForm(service.formId)}
                  className="w-full bg-[#191970] hover:bg-[#0f0f4d] text-white"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal with dynamic form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Complete Your Details</DialogTitle>
          </DialogHeader>
          {selectedForm && (
            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${selectedForm}`}
              style={{
                width: "100%",
                height: "450px",
                border: "none",
                borderRadius: "8px",
              }}
              title="Booking Form"
            ></iframe>
          )}
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </DialogContent>
      </Dialog>
    </section>
  )
}
