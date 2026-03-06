'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    stars: 5,
    company: 'Societe Generale',
    quote: '"My learning journey with Srinivas Dande Sir began in 2016 at JLC. From Java fundamentals to advanced areas like System Design and Cloud, DevOps the guidance has been consistent and reliable. I recently joined the AI/ML program at Dandes Academy to expand my technical scope. AI/ML curriculum is designed to simplify complex concepts without losing depth. Sessions encourage analytical thinking and structured problem solving. I strongly recommend Dande’s Academy for Learning AI/ML in-depth."',
    name: 'Uma Mahesh',
    title: 'Lead Engineer',
    avatar: '/images/Uma.jpg',
    linkedin: 'https://www.linkedin.com/in/golakaram-uma-maheshwar-906728178/'
  },
  {
    id: 2,
    stars: 5,
    company: 'WeSure Global',
    quote: '"After transitioning from ECE to software development, I initially struggled with core concepts. My learning journey changed when I joined JLC in 2015, now Dande’s Academy. Over the years, Srinivas Dande Sir’s teaching has played a key role in my professional growth. When Dande sir launched the AI/ML program, I joined with full confidence—and it met my expectations. I strongly recommend Dande’s Academy for career-oriented learning."',
    name: 'Ravi Ranjan Singh',
    title: 'Technical Manager',
    avatar: '/images/Ravi.jpg',
    linkedin: 'https://www.linkedin.com/in/ravi-ranjan-singh-8861b83a/'
  },
  {
    id: 3,
    stars: 5,
    company: 'VOIS',
    quote: '"I started my learning journey at JLC in 2013 during the early stage of my career under Srinivas Dande Sir. Over the years, I learned Java, Microservices, Angular, and React, which helped me adapt to evolving technologies. When the AI/ML program was introduced at Dandes Academy, I joined with complete confidence. AI/ML curriculum is well structured and updated to reflect current industry standards. This rogram combines conceptual depth with hands-on learning through projects."',
    name: 'Deepak Kumar Singh',
    title: 'Manager',
    avatar: '/images/Deepak.jpg',
    linkedin: 'https://www.linkedin.com/in/dksftwre/'
  },
  {
    id: 4,
    stars: 5,
    company: 'Virtusa',
    quote: '"I began my technical learning at JLC in 2007 with a strong focus on Java fundamentals. As my career progressed, I continued learning DSA, AWS, DevOps, and System Design under Srinivas Dande Sir. Transitioning into AI/ML at Dandes Academy felt like the right next step. AI/ML sessions are structured to deepen understanding rather than rush through topics. AI/ML sessions are well structured, in-depth, and closely aligned with industry expectations."',
    name: 'Yashwant Kumar',
    title: 'Associate Architect',
    avatar: '/images/yashwant.jpg',
    linkedin: 'https://www.linkedin.com/in/yashwant-kumar-45107529/'
  },
  {
    id: 5,
    stars: 5,
    company: 'City Corp',
    quote: '"My technical foundation was built at JLC in 2007 under the guidance of Srinivas Dande Sir. Over the years, I trained in Java Full Stack, DSA, AWS, DevOps, and System Design, which strengthened my problem-solving mindset. Joining the AI/ML program at Dandes Academy felt like a natural progression in my career. AI/ML Course syllabus is structured to gradually move from fundamentals to advanced concepts. Learning experience reflects the same disciplined approach I trusted from the beginning."',
    name: 'Navneeth Ranjan',
    title: 'Assistant VP',
    avatar: '/images/Navneeth.png',
    linkedin: 'https://www.linkedin.com/in/navneetranjan11/'
  },
  {
    id: 6,
    stars: 5,
    company: 'Deloitte',
    quote: '"During the early phase of my software career, I joined JLC in 2012 under Srinivas Dande Sir to gain structured guidance. Over time, I learned Java Full Stack, Data Structures, Cloud technologies, and System Design, which built a strong foundation for my career. Recently, I joined the AI/ML program at Dandes Academy to upgrade my skills. Course structure is updated to match current industry standards and follows a clear, step-by-step approach. AI/ML concepts are explained with real-world connections, making the learning experience practical and future-ready."',
    name: 'Lakshmi kanth',
    title: 'Solution Architect',
    avatar: '/images/Lakshmikanth.jpg',
    linkedin: 'https://www.linkedin.com/in/lgowrishankar/'
  },
  {
    id: 7,
    stars: 5,
    company: 'ADCB bank',
    quote: '"I was introduced to structured software learning when I joined JLC in 2012 under Srinivas Dande Sir during the early phase of my career. Through this journey, I built strong skills in Java, Data Structures, AWS Cloud, DevOps, and System Design. Recently I have joined the AI/ML program at Dandes Academy. AI/ML course at Dandes Academy is designed with clear progression and focuses on skills that are actively used in the industry today."',
    name: 'Loknath Kumar',
    title: 'Senior Java Consultant',
    avatar: '/images/Loknath.jpg',
    linkedin: 'https://www.linkedin.com/in/loknathkumar/'
  },
  {
    id: 8,
    stars: 5,
    company: 'WIPRO',
    quote: '"You are a highly passionate and dedicated Java technical trainer who has transformed the careers of over 25,000+ students through your placement-oriented training. Your deep technical knowledge, clear explanations, and real-time industry examples make complex concepts easy to understand. With your constant guidance, motivation, and practical interview preparation, you have helped countless students gain confidence and succeed in placements. You are truly an inspiring mentor and an exceptional trainer."',
    name: 'Sowjanya VR',
    title: 'Senior Software Engineer',
    avatar: '/images/Sowjanya.jpg',
    linkedin: 'https://www.linkedin.com/in/sowjanya2-v-7b997aa/'
  },
  {
    id: 9,
    stars: 5,
    company: 'American Express',
    quote: '"You deliver outstanding training in Java, Spring, MicroServices , DevOps, and AI/ML with a perfect balance of strong fundamentals, real-world examples, and hands-on projects. You explain complex concepts in a clear, simple, and practical manner, making the sessions engaging and easy to understand for both beginners and experienced learners. The training is highly industry-oriented, focusing on best practices, interview preparation, and real-time applications, which significantly improves confidence and job readiness. You are  making the program highly recommended for anyone aiming to build a successful career in Java or AI/ML."',
    name: 'Manish Ranjan',
    title: 'Senior Engineer',
    avatar: '/images/Manish.jpg',
    linkedin: 'https://www.linkedin.com/in/manish-kumar-ranjan-3a745789/'
  },
  

]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[70px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by thousands of learners,<br />
            here is what they share
          </h2>
          <p className="text-gray-500">
            Real success stories from learners who upskilled with Dandes Academy.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#C41E3A] rounded-full flex items-center justify-center text-white hover:bg-[#a31830] transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#C41E3A] rounded-full flex items-center justify-center text-white hover:bg-[#a31830] transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="flex gap-6 px-12 overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const visibleIndexes = [
                currentIndex,
                (currentIndex + 1) % testimonials.length,
                (currentIndex + 2) % testimonials.length,
              ]

              const isActive = visibleIndexes.includes(index)
              const isFaded = index === (currentIndex + 2) % testimonials.length

              return (
                <article
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  {/* Stars and Company */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#C41E3A] fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[#C41E3A] font-bold text-lg tracking-wider">
                      {testimonial.company}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:scale-110 transition-transform"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
