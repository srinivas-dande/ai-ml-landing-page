"use client"

import { useState } from "react"
import { ArrowRight, Phone } from "lucide-react"

export default function BrochureSection() {

  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  const res = await fetch("/api/brochure", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })

  const data = await res.json()

  if (data.success) {
    

    const link = document.createElement("a")
    link.href = data.fileUrl
    link.download = ""
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setMessage("Brochure downloaded successfully!")

    setFormData({
      fullName: "",
      email: "",
      phone: ""
    })
  }
}

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[70px]">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

          {/* Left Content */}
          <div className="flex-1 max-w-[450px]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Get the Detailed course{" "}
              <span className="text-[#C41E3A]">Brochure</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Enter your details below to download the complete{" "}
              <span className="text-[#C41E3A] font-medium">
                AI/ML Course Coverage PDF
              </span>{" "}
              instantly and explore all 15 modules.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-[500px] bg-white rounded-2xl shadow-sm p-8">

            <form id="brochure-form" className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="bg-[#C41E3A] hover:bg-[#a31830] text-white font-medium py-3 px-8 rounded-lg flex items-center gap-3"
              >
                Download Brochure
                <ArrowRight className="w-4 h-4" />
              </button>

              {message && (
  <div
    className="mt-4 rounded-lg border px-4 py-3"
    style={{ backgroundColor: "#ECFDF5", borderColor: "#86EFAC", color: "#15803D" }}
  >
    <p className="text-sm font-semibold">
      {message}
    </p>
  </div>
)}

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}