"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, PawPrintIcon as Paw, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav({ scrolled = false }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] border-none">
        <div className="h-full bg-white flex flex-col">
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <Paw className="h-6 w-6 text-[#4a6d8c]" />
              <span className="font-serif text-lg text-gray-800">Satori Petcare</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <div className="flex-1 overflow-auto py-8 px-6">
            <nav className="flex flex-col gap-6">
              <AnimatePresence>
                {["About", "Services", "Gallery", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/#${item.toLowerCase()}`}
                      className="font-serif text-2xl text-gray-800 hover:text-[#4a6d8c] transition-colors block py-2"
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </nav>
          </div>

          <div className="p-6 border-t">
            <Link
              href="/book"
              className="block w-full text-center bg-[#4a6d8c] hover:bg-[#3a5d7c] text-white rounded-full py-3 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Book an Introduction
            </Link>
            <Link
              href="/careers"
              className="block w-full text-center mt-4 border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full py-3 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
