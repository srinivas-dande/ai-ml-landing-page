"use client"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] md:h-[90px] w-full bg-[#F5F7FA] z-[999] shadow-md">
      
      <div className="max-w-[1440px] h-full mx-auto flex items-center justify-between px-4 sm:px-6 md:px-[70px] gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/DA - Header.jpg"
            alt="Dandes Academy"
            width={160}
            height={50}
            className="object-contain w-[110px] sm:w-[130px] md:w-[160px]"
          />
        </Link>

        {/* Button */}
        <button
          onClick={() =>
            document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#C41E3A] hover:bg-[#a31830] text-white 
          text-sm sm:text-base
          font-medium 
          py-2 px-4 sm:py-3 sm:px-6 
          rounded-lg whitespace-nowrap transition-colors"
        >
          Register Now
        </button>

      </div>
    </header>
  )
}