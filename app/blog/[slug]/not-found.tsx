import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileX } from "lucide-react"

export default function NotFound() {
  return (
    <main className="pt-16">
      <section className="py-16 bg-white min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileX size={80} className="mx-auto text-gray-400 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the blog post you're looking for. It may have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button className="bg-[#191970] hover:bg-[#0f0f4d] text-white">
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#191970] text-[#191970] hover:bg-[#191970] hover:text-white bg-transparent"
              >
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
