"use client"

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "Who can join this course? Is it suitable for freshers and non-IT backgrounds?",
    answer: "This course is designed for anyone who wants to build a career in AI/ML. It is suitable for freshers, working professionals, career switchers, non-IT, and non-engineering backgrounds. No prior experience in AI or Machine Learning is required, as the course starts from fundamentals and gradually moves to advanced concepts.",
  },
  {
    question: "What job roles can I apply for after completion?",
    answer: "After completing the course, students can apply for various roles such as: Data Analyst, Data Scientist, ML Engineer, AI Engineer, Lead ML Engineer (for experienced professionals), ML Architect (for experienced professionals). The exact role a student can apply for depends on their prior experience, skill level, project exposure, and overall performance during and after the course.",
  },
  {
    question: "What is the average package of placed students?",
    answer: "Salary packages vary based on individual skills, prior experience, project quality, and interview performance. Freshers / Entry-level candidates: ₹6 LPA – ₹15 LPA, Professionals with 2–5 years of experience: ₹9 LPA – ₹30 LPA, Professionals with 5–10 years of experience: ₹30 LPA – ₹75 LPA, Professionals with 10+ years of experience: ₹75+ LPA.",
  },
  {
    question: "How will this course help my career?",
    answer: "This course helps you build strong AI/ML foundations, gain hands-on project experience, and develop industry-relevant skills. It prepares you to confidently apply for AI/ML roles, perform well in interviews, and grow in your career with practical knowledge and guidance.",
  },
  {
    question: "Do you provide placement assistance, mock interviews, or internships?",
    answer: "Yes. We provide placement assistance, including: Resume guidance, Interview preparation, Mock interviews. Internship opportunities may also be provided based on student performance and availability. Placement outcomes depend on individual skills, effort, and performance.",
  },
  {
    question: "What topics are covered in the course syllabus?",
    answer: "The course syllabus is comprehensive and industry-oriented. It includes: Python Programming, Advanced SQL and Data Modeling, Exploratory Data Analysis (EDA), Statistics & Mathematics for ML, Machine Learning, Deep Learning, Natural Language Processing (NLP), Generative AI & Large Language Models (LLMs), Agentic AI, MLOps, Real-time projects. A detailed syllabus document will be shared separately.",
  },
  {
    question: "Are hands-on projects and real-time industry projects included?",
    answer: "Yes. The course includes multiple hands-on mini-projects to strengthen practical understanding. In addition, students will work on real-time, industry-oriented projects to gain practical exposure and build a strong project portfolio.",
  },
  {
    question: "What is the course duration and access period?",
    answer: "The course duration is 12 months, depending on the batch schedule. Students will receive 5 years of LMS access, which includes course recordings and learning materials. This allows students to revise concepts and continue learning even after course completion.",
  },
  {
    question: "Is the course online, and will I get recorded sessions?",
    answer: "The course is conducted in online live mode. If you miss any class, recorded sessions will be provided, so you can catch up at your convenience without missing important topics. ",
  },
  {
    question: "What support and guidance will I receive during the course?",
    answer: "Students receive continuous support throughout the course, including: Doubt-clearing sessions, Instructor and mentor guidance, Support through live classes and communication channels. This ensures students stay confident and clear with concepts at every stage.",
  },
  {
    question: "Are assessments, exams, and certification provided?",
    answer: "Yes. The course includes regular assignments, assessments, and evaluations to track learning progress. After successful completion of the course, students will receive a Course Completion Certificate from Dandes Academy.",
  },
  {
    question: "Who is the instructor?",
    answer: "Course is taught by Srinivas Dande, Founder & Instructor at Dandes Academy. He brings 20+ years of industry and teaching experience, with a strong focus on explaining concepts clearly from basics to advanced levels. Course is designed based on real-world industry requirements, helping students gain both theoretical understanding and practical, job-ready skills.",
  },
  {
    question: "What are the prerequisites for this course?",
    answer: "There are no strict prerequisites for joining this course. Basic computer knowledge and willingness to learn are sufficient. All required concepts such as programming fundamentals, mathematics, and statistics needed for AI/ML are covered as part of the course.",
  },
  {
    question: "What is the fee structure, installment options, and refund policy?",
    answer: "The fee structure and installment options will be clearly explained by our sales team during the counseling call. Refund Policy: If a student is not satisfied with the course content or delivery, a 100% refund will be provided within 30 days of enrollment, without asking any questions.",
  },
  {
    question: "Can I switch batches if I miss classes?",
    answer: "Yes, batch switching is allowed. This flexibility ensures that students do not miss learning opportunities due to unavoidable circumstances.",
  },
  {
    question: "How is this course different from other online AI/ML courses?",
    answer: "Unlike many other online AI/ML programs, this course offers: A structured and well-paced learning roadmap designed from fundamentals to advanced topics Live, interactive classes with direct instructor involvement, Continuous mentor support and dedicated doubt-clearing sessions, Hands-on mini-projects and real-time industry-oriented projects, Strong focus on interview preparation and placement assistance, This course emphasizes practical learning, personalized guidance, and longterm skill building, helping students stay consistent, confident, and job-ready. ",
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
