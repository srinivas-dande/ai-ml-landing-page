"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function BrochureSection() {

  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: ""
  })

  const handleChange = (e) => {
    

    const { name, value } = e.target

    if (name === "phone") {

      const onlyNums = value.replace(/\D/g, "")

      if (onlyNums.length <= 10) {
        setFormData({
          ...formData,
          phone: onlyNums
        })
      }

    } else {

      setFormData({
        ...formData,
        [name]: value
      })

    }
    
  }

  const handleSubmit = async (e) => {

  e.preventDefault()

  if (loading || message) return

  if (formData.phone.length !== 10) {
    alert("Please enter a valid 10 digit phone number")
    return
  }

  setLoading(true)

  try {

    const params = new URLSearchParams(window.location.search)

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,

      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      gclid: params.get("gclid") || "",

      landing_page: window.location.pathname
    }

    const res = await fetch("/api/brochure", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
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

  } catch (error) {

    console.error(error)
    alert("Something went wrong")

  } finally {

    setLoading(false)

  }
}

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[70px]">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

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
                  placeholder="Enter 10 digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !!message}
                className={`bg-[#C41E3A] hover:bg-[#a31830] text-white font-medium py-3 px-8 rounded-lg flex items-center gap-3
                ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {loading ? "Downloading..." : "Download Brochure"}
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