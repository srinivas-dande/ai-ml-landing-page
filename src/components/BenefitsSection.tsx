"use client";

import { ArrowRight, Check } from 'lucide-react'


const benefits = [
  {
    title: "Projects for your CV",
    description: "Portfolio that improves your resume instantly."
  },
  {
    title: "Clear roadmap",
    description: "No random YouTube paths, a structured plan."
  },
  {
    title: "Interview readiness",
    description: "Resume review + mock interview approach."
  },
  {
    title: "Job security",
    description: "Shift into AI/ML to stay relevant."
  }
]

export default function BenefitsSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-[400px]">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight mb-8">
              What changes after{' '}
              <br />
              this <span className="text-[#C41E3A]">webinar</span>
            </h2>
            <button
              onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
              className="bg-[#C41E3A] hover:bg-[#a31830] text-white font-medium py-3 px-6 rounded-lg flex items-center gap-3 transition-colors"
            >
              Register For Free
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 flex-1 max-w-[640px]">
            {benefits.map((benefit, index) => (
              <article 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">
                    {benefit.title}
                  </h3>
                  <Check className="w-5 h-5 text-[#C41E3A] flex-shrink-0" />
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
