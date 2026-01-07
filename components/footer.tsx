import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#191970] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Andrew Dietz</h3>
            <p className="text-blue-100 mb-4">
              Andrew Dietz is an accomplished entrepreneur, author, financial advisor, researcher, and lecturer who is empowering individuals to discover their path to genuine happiness through proven methods and supportive community.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61575726522069"
                aria-label="Facebook"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://x.com/coachdietzee"
                aria-label="Twitter"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/dietzandrew/"
                aria-label="Instagram"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrewhdietz/"
                aria-label="LinkedIn"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Small Group Workshops
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  1-on-1 Mentorship
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-200" />
                <span className="text-blue-100"><a href="mailto:info@tpurpose.com">info@tpurpose.com</a></span>
              </div>

              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-blue-200" />
                <span className="text-blue-100">Hunt Valley, MD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © {new Date().getFullYear()} Andrew Dietz. All rights reserved. |
            <Link href="/privacy-policy" className="hover:text-white ml-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms-and-conditions" className="hover:text-white ml-2">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
