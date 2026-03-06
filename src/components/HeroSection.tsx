"use client"

import { useState, useEffect } from "react"
import { Check, ArrowRight } from "lucide-react"


export default function HeroSection() {
  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
})

const [successMsg, setSuccessMsg] = useState("")

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/ads-webinar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (data.success) {
      setSuccessMsg("You are registered successfully for the webinar!")

      setFormData({
        fullName: "",
        email: "",
        phone: "",
      })
    } else {
      alert(data.message)
    }
  } catch (error) {
    console.error(error)
  }
}


  const [webinarTime, setWebinarTime] = useState<Date | null>(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  })

  useEffect(() => {
  const fetchWebinar = async () => {
    try {
      const res = await fetch("/api/latest-webinar")
      const data = await res.json()

      if (data.ok && data.data) {
        setWebinarTime(new Date(data.data.dateTime))
      }
    } catch (err) {
      console.error("Failed to fetch webinar", err)
    }
  }

  fetchWebinar()
}, [])

  

  useEffect(() => {
  if (!webinarTime) return

  const timer = setInterval(() => {
    const now = new Date()
    const difference = webinarTime - now

    if (difference <= 0) {
      clearInterval(timer)
      setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 })
      return
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const mins = Math.floor((difference / (1000 * 60)) % 60)
    const secs = Math.floor((difference / 1000) % 60)

    setTimeLeft({ days, hours, mins, secs })
  }, 1000)

  return () => clearInterval(timer)
}, [webinarTime])

  const benefits = [
    "Real-World Projects That Employers Value",
    "Assignments, Mini projects and one end-to-end Capstone",
    "Resume Review + Mock Interviews — Interview-Ready",
  ]

  return (
    <section className="w-full bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto px-[70px] py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-[#C41E3A] text-sm font-medium mb-4">
              Free Webinar | For Students & Working Professionals
            </p>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-[#C41E3A]">AI/ML</span>{" "}
              <span className="text-[#1a1a1a]">Career</span>
              <br />
              <span className="text-[#1a1a1a]">Roadmap Webinar</span>
            </h1>
            
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8 max-w-xl">
              If your goal is a stronger CV, a safer career, or a switch into AI/ML, this
              session shows a clear path: what to learn, what projects matter, and
              how to prepare for interviews.
            </p>
            
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
              What you'll walk away with
            </h2>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#4a4a4a] text-base">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 ml-30">
                Next Webinar Starts in
              </h3>
              
              <div className="flex gap-6 ml-30">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#C41E3A]">
                    {String(timeLeft.days).padStart(2, "0")}
                  </p>
                  <p className="text-sm text-[#6b7280] uppercase tracking-wide">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#C41E3A]">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </p>
                  <p className="text-sm text-[#6b7280] uppercase tracking-wide">Hrs</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#C41E3A]">
                    {String(timeLeft.mins).padStart(2, "0")}
                  </p>
                  <p className="text-sm text-[#6b7280] uppercase tracking-wide">Mins</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#C41E3A]">
                    {String(timeLeft.secs).padStart(2, "0")}
                  </p>
                  <p className="text-sm text-[#6b7280] uppercase tracking-wide">Sec</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div id="lead-form" className="w-full lg:w-[480px] bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">
              Free AI & Machine Learning Webinar
            </h2>
            
            <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">
              Free AI/ML webinar for Professionals and Job Seekers to learn career
              roadmap, and how to start AI & Machine Learning with industry-focused
              training.
            </p>
            
            <p className="text-sm text-[#4a4a4a] mb-6">
              Join the live session on{" "}
              <span className="font-bold text-[#1a1a1a]">
                {webinarTime
                  ? webinarTime.toLocaleString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      weekday: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Loading..."}
              </span>
              .
            </p>

            

            {successMsg && (
  <div
    className="mb-4 p-4 rounded-lg border border-green-300 bg-green-50 text-sm font-semibold text-center"
    style={{ color: "#15803d" }}
  >
    ✓ {successMsg}
  </div>
)}
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Phone no.
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="bg-[#C41E3A] hover:bg-[#a31830] text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                Register for FREE AI/ML Webinar
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
