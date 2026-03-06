"use client";
import { FileText, ArrowRight } from 'lucide-react'

const courses = [
  { number: 1, title: 'Python Fundamentals' },
  { number: 2, title: 'Python for ML & DS' },
  { number: 3, title: 'SQL, Advanced SQL, and Data Modeling' },
  { number: 4, title: 'Mathematics for ML' },
  { number: 5, title: 'Exploratory Data Analysis(EDA)' },
  { number: 6, title: 'Machine Learning - Foundation' },
  { number: 7, title: 'Advanced Machine Learning' },
  { number: 8, title: 'Deep Learning - Foundation' },
  { number: 9, title: 'Advanced deep Learning' },
  { number: 10, title: 'Computer Vision' },
  { number: 11, title: 'Natural Language Processing (NLP)' },
  { number: 12, title: 'Generative AI' },
  { number: 13, title: 'LLMs & Fine - Tuning' },
  { number: 14, title: 'Autonomous & Multi - Agent Systems' },
  { number: 15, title: 'MLOps' },
  { number: 16, title: 'Final End-to-End AI/ML Project' },
]

export default function CurriculumSection() {
  const leftColumn = courses.slice(0, 8)
  const rightColumn = courses.slice(8, 16)

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Online <span className="text-[#C41E3A]">AI and ML</span> Course Designed
          <br />
          for Real Skills
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
          From Python to LLMs & MLOps, finishing with an end-to-end capstone.
        </p>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {leftColumn.map((course) => (
              <article
                key={course.number}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#C41E3A]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Course {course.number}</p>
                  <p className="text-sm font-semibold text-gray-900">{course.title}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {rightColumn.map((course, index) => (
              <article
                key={course.number}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#C41E3A]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Course {index === 6 || index === 7 ? 14 : course.number}</p>
                  <p className="text-sm font-semibold text-gray-900">{course.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">




          <button
            onClick={() =>
              document.getElementById("brochure-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#C41E3A] hover:bg-[#a31830] text-white font-medium py-3 px-6 rounded-lg flex items-center gap-3 transition-colors"
          >
            Get Detailed Syllabus
            <ArrowRight className="w-4 h-4" />
          </button>
          
        </div>
      </div>
    </section>
  )
}
