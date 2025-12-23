"use client"

import { useState } from "react"
import AppointmentModal from '@/components/AppointmentModal';
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold text-[#191970] ${playfair.className}`}>
              Andrew Dietz
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#191970] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={handleOpen}
              className="bg-[#191970] hover:bg-[#0f0f4d] text-white"
            >
              Book Appointment
            </Button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#191970] p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#191970] block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}


              <Button
                onClick={handleOpen}
                className="bg-[#191970] hover:bg-[#0f0f4d] text-white w-full sm:w-auto mt-2 sm:mt-0"
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
