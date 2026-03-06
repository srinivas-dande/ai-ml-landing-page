"use client"
import Image from "next/image"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[90px] w-full bg-[#F5F7FA] z-[999] shadow-md">
      <div className="max-w-[1440px] h-[90px] mx-auto flex items-center justify-between px-[70px]">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/images/DA - Header.jpg"
            alt="Dandes Academy"
            width={160}
            height={50}
            className="object-contain"
          />
        </Link>

        
        <button
          onClick={() =>
            document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#C41E3A] hover:bg-[#a31830] text-white font-medium py-3 px-6 rounded-lg flex items-center gap-3 transition-colors"
        >
          Register For Free
            
        </button>
        
      </div>
    </header>
  )
}
