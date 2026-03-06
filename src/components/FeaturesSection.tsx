import Image from "next/image"

const features = [
  {
    icon: "/icons/briefcase.png",
    title: "10 plus years",
    description: "of experience, Friendly transition track",
  },
  {
    icon: "/icons/clock.png",
    title: "11 to 12 Months",
    description: "Pace you can sustain",
  },
  {
    icon: "/icons/monitor.png",
    title: "Live instructor-led classes",
    description: "Learn with clarity",
  },
  {
    icon: "/icons/playsquare.png",
    title: "LMS recordings",
    description: "included Stay consistent",
  },
  {
    icon: "/icons/users.png",
    title: "20,000 plus Trained",
    description: "learners Proof of delivery",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Made for{" "}
          <span className="text-[#C41E3A]">Working Professionals</span> and
          <br />
          Career-Focused Students
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              
              
              <div className="w-12 h-12 bg-[#FEF2F2] rounded-lg flex items-center justify-center mb-10">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </div>

              
              <p className="text-sm leading-relaxed">
                <span className="font-bold text-gray-900">
                  {feature.title}
                </span>{" "}
                <span className="text-gray-600">
                  {feature.description}
                </span>
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}