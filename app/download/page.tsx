"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DownloadPage() {
  const router = useRouter()

  useEffect(() => {
    // Trigger PDF download
    const link = document.createElement("a")
    link.href = "/happiness-guide.pdf"
    link.download = "happiness-guide.pdf"
    link.click()

    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      router.push("/")
    }, 3000)

    // Cleanup timeout
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Preparing your PDF...</h1>
      <p>
        If your download didn’t start automatically,{" "}
        <a href="/happiness-guide.pdf" download>
          click here
        </a>.
      </p>
    </div>
  )
}
