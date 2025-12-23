"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Script from "next/script"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const iframe = document.getElementById("inline-wayxTO6ZaPuxelgpiEbr") as HTMLIFrameElement

    if (!iframe) return

    const observer = new MutationObserver(() => {
      try {
        const innerDoc = iframe.contentDocument || iframe.contentWindow?.document
        if (!innerDoc) return

        // Looks for "Thank you" message (you can adjust selector based on actual structure)
        const thankYouMessage = innerDoc.body?.innerText?.toLowerCase().includes("thank you")
        if (thankYouMessage) {
          setSubmitted(true)

          setTimeout(() => {
            window.location.reload()
          }, 4000)
        }
      } catch (err) {
        // Cross-origin might block access, so ignore silently
      }
    })

    observer.observe(iframe, { attributes: true, childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Andrew Dietz",
      "email": "andrewdietzcoach@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hunt Valley",
        "addressRegion": "MD"
      }
    }
  }

  return (
    <main>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl text-[#191970] font-bold mb-6">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="ghl-form-section">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {/* Success Message */}
              {submitted && (
                <div className="bg-green-100 text-green-800 font-medium px-4 py-3 mb-4 rounded">
                  Thank you! Your message has been successfully submitted.
                </div>
              )}

              <div className="w-full h-[750px] overflow-hidden rounded-md shadow-md border">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/wayxTO6ZaPuxelgpiEbr"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  id="inline-wayxTO6ZaPuxelgpiEbr"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 0"
                  data-height="750"
                  data-layout-iframe-id="inline-wayxTO6ZaPuxelgpiEbr"
                  data-form-id="wayxTO6ZaPuxelgpiEbr"
                  title="Contact Form"
                ></iframe>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#191970]">
                      <Mail className="mr-3" size={20} />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600"><a href="mailto:andrewdietzcoach@gmail.com">andrewdietzcoach@gmail.com</a></p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#191970]">
                      <MapPin className="mr-3" size={20} />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Hunt Valley, MD
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
