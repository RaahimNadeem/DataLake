import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                
              </div>
              <span className="font-bold text-xl tracking-tight">Datalake</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Expertise, commitment, and efficiency are the values of our consultants, making Datalake your partner for
              the success of your projects.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/cta" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Call to Action
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors text-sm">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#development" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services#engineering" className="text-gray-400 hover:text-white transition-colors text-sm">
                  IT Production Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#bigdata" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Big Data Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Security Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                123 Tech Avenue <br />
                Innovation District <br />
                San Francisco, CA 94107
              </li>
              <li>
                <Link
                  href="mailto:info@datalake.tech"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@datalake.tech
                </Link>
              </li>
              <li>
                <Link href="tel:+14155550123" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +1 (415) 555-0123
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Datalake. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
