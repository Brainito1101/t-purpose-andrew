"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const hideChrome = pathname === "/lock"

  if (hideChrome) {
    return <>{children}</>
  }

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
