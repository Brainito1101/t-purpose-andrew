"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function BookingModal({ bookingUrl, title }: { bookingUrl: string, title: string }) {
  const [open, setOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.currentTarget
    try {
      const currentUrl = iframe.contentWindow?.location.href
      if (currentUrl && currentUrl.includes("/booking-success")) {
        setShowSuccess(true)
      }
    } catch {
      // cross-origin iframe blocks direct URL read until it's same-origin
      // workaround: rely on yourdomain.com redirect (same origin with Next.js)
    }
  }

  return (
    <>
      <Button 
        onClick={() => {
          setOpen(true)
          setShowSuccess(false)
        }} 
        className="w-full bg-[#191970] hover:bg-[#0f0f4d] text-white"
      >
        Book Now
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95vw] h-[90vh] max-w-none p-0 overflow-hidden">
          {!showSuccess ? (
            <iframe
              src={bookingUrl}
              className="w-full h-full border-0"
              onLoad={handleIframeLoad}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-50">
              <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-lg">
                <h1 className="text-3xl font-bold text-green-600 mb-4">
                  🎉 Booking Confirmed!
                </h1>
                <p className="text-gray-700 mb-6">
                  Thank you for booking. We’ll see you soon!
                </p>
                <Button onClick={() => setOpen(false)} className="bg-[#191970] text-white">
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
