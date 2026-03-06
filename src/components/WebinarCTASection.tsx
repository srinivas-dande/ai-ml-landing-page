"use client";
import { ChevronRight } from 'lucide-react'

export default function WebinarCTASection() {
  return (
    <section className="relative overflow-hidden h-[515px] max-w-[1440px] mx-auto">
      {/* Background Image with Red Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/webinar-bg.jpg" 
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Red Overlay - #CF2030 */}
        <div className="absolute inset-0 bg-[#CF2030]/90"></div>
      </div>

      {/* Grid Pattern Overlay - Light Square Boxes */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="h-full px-6 md:px-[70px] py-12 md:py-16 relative z-10 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            {/* Webinar Badge and Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-[#b01c2e] text-white text-sm font-medium px-3 py-1.5 rounded">
                <span className="w-2 h-2 bg-white rounded-sm"></span>
                Webinar
              </span>
              <span className="text-white font-medium tracking-wide text-sm md:text-base">
                MAR 12 | THURSDAY | 8:00PM.
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Looking for Machine<br />learning classes?
            </h2>

            {/* Description */}
            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-[500px]">
              This webinar explains what the best course in AI/ML typically includes, and how to pick the best course for your goals.
            </p>

            {/* CTA Button */}
            
            <button
              onClick={() =>
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
              }
                className="bg-white text-gray-900 font-semibold px-6 py-3 rounded flex items-center gap-4 hover:bg-gray-100 transition-colors mb-6"
            >
              JOIN FOR FREE
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Horizontal Line */}
            <div className="w-48 md:w-64 h-px bg-white/40"></div>
          </div>

          {/* Right Image Area */}
          <div className="flex-1 hidden lg:flex justify-end">
            <div className="relative w-full max-w-[500px]">
              <img 
                src="/images/webinar-bg.jpg" 
                alt="Person participating in a video conference call with multiple participants on screen"
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
