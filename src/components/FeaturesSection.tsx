import { Briefcase, Clock, Monitor, PlaySquare, Users } from 'lucide-react'

const features = [
  {
    icon: Briefcase,
    title: "10 plus years",
    description: "of experience, Friendly transition track",
  },
  {
    icon: Clock,
    title: "11 to 12 Months",
    description: "Pace you can sustain",
  },
  {
    icon: Monitor,
    title: "Live instructor-led classes",
    description: "Learn with clarity",
  },
  {
    icon: PlaySquare,
    title: "LMS recordings",
    description: "included Stay consistent",
  },
  {
    icon: Users,
    title: "20,000 plus Trained",
    description: "learners Proof of delivery",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-[70px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Made for{" "}
          <span className="text-[#C41E3A]">Working Professionals</span> and
          <br />
          Career-Focused Students
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#FEF2F2] rounded-lg flex items-center justify-center mb-16">
                <feature.icon className="w-6 h-6 text-[#C41E3A]" />
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed">
                <span className="font-bold text-gray-900">{feature.title}</span>{" "}
                <span className="text-gray-600">{feature.description}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
