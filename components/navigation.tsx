"use client"

import { useState } from "react"
import AppointmentModal from '@/components/AppointmentModal';
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Roboto, Playfair_Display } from 'next/font/google'

const roboto = Roboto({
  weight: '800',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  weight: '600',
  subsets: ['latin'],
})

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Workshop", href: "/workshop" },
    { name: "Books", href: "/books" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <nav className="bg-[#191970] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695f932380b2a067c604c7f0.png" alt="Andrew Dietz" width={150} height={150} className="h-24 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={handleOpen}
              className="bg-white hover:bg-gray-200 text-[#191970]"
            >
              Book Appointment
            </Button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#191970] border-t border-gray-600">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}


              <Button
                onClick={handleOpen}
                className="bg-white hover:bg-gray-200 text-[#191970] w-full sm:w-auto mt-2 sm:mt-0"
              >
                Book Appointment
              </Button>


            </div>
          </div>
        )}
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={handleClose} />
    </nav>
  )
}
