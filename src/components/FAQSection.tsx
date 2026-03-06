"use client"

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "Who can join this course? Is it suitable for freshers and non-IT backgrounds?",
    answer: "This course is designed for anyone who wants to build a career in AI/ML. It is suitable for freshers, working professionals, career switchers, non-IT, and non-engineering backgrounds. No prior experience in AI or Machine Learning is required, as the course starts from fundamentals and gradually moves to advanced concepts."
  },
  {
    question: "What job roles can I apply for after completion?",
    answer: "After completing this course, you can apply for roles such as Machine Learning Engineer, Data Scientist, AI Engineer, Deep Learning Engineer, NLP Engineer, Computer Vision Engineer, and MLOps Engineer."
  },
  {
    question: "What is the average package of placed students?",
    answer: "Our placed students have received packages ranging from 6 LPA to 25+ LPA depending on their experience, skills, and interview performance."
  },
  {
    question: "How will this course help my career?",
    answer: "This course provides industry-relevant skills, hands-on projects, and interview preparation that will help you transition into AI/ML roles or advance in your current career."
  },
  {
    question: "Do you provide placement assistance, mock interviews, or internships?",
    answer: "Yes, we provide comprehensive placement assistance including resume review, mock interviews, and internship opportunities with our partner companies."
  },
  {
    question: "What topics are covered in the course syllabus?",
    answer: "The syllabus covers Python, Statistics, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, LLMs, MLOps, and end-to-end project development."
  },
  {
    question: "Are hands-on projects and real-time industry projects included?",
    answer: "Yes, the course includes multiple hands-on projects and one comprehensive end-to-end capstone project based on real industry use cases."
  },
  {
    question: "What is the course duration and access period?",
    answer: "The course duration is 11-12 months with lifetime access to all recorded sessions and materials."
  },
  {
    question: "Is the course online, and will I get recorded sessions?",
    answer: "Yes, the course is conducted online with live instructor-led sessions. All sessions are recorded and available in your LMS for future reference."
  },
  {
    question: "What support and guidance will I receive during the course?",
    answer: "You will receive dedicated mentor support, doubt clearing sessions, code reviews, and career guidance throughout the course."
  },
  {
    question: "Are assessments, exams, and certification provided?",
    answer: "Yes, regular assessments and quizzes are conducted. Upon successful completion, you will receive a course completion certificate."
  },
  {
    question: "Who is the instructor?",
    answer: "The course is led by Srinivas Dande, who has over 20 years of experience in product development, system architecture, and technical training."
  },
  {
    question: "What are the prerequisites for this course?",
    answer: "No prior programming or AI/ML experience is required. Basic computer literacy and a willingness to learn are sufficient."
  },
  {
    question: "What is the fee structure, installment options, and refund policy?",
    answer: "We offer flexible payment options including EMI. Please contact our admissions team for detailed fee structure and refund policy information."
  },
  {
    question: "Can I switch batches if I miss classes?",
    answer: "Yes, batch switching is allowed. You can move to another batch if you miss classes due to unavoidable circumstances."
  },
  {
    question: "How is this course different from other online AI/ML courses?",
    answer: "Our course stands out with live instructor-led sessions, structured curriculum, hands-on projects, personalized mentorship, and comprehensive placement support."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#F5F7FA] py-16 px-4 md:px-8">
      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked <span className="text-[#C41E3A]">Questions</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-center mb-12">
          Quick answers to common queries about batches, recordings, and career support.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-l-4 border-[#C41E3A] shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  Q{index + 1}) {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#C41E3A] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#C41E3A] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
