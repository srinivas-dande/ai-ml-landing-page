const steps = [
  {
    number: "01",
    title: "Build Strong Python & Data Foundations"
  },
  {
    number: "02",
    title: "Learn Core AI/ML Fundamentals"
  },
  {
    number: "03",
    title: "Advance into Deep Learning & NLP"
  },
  {
    number: "04",
    title: "Build Real-World AI/ML Projects"
  },
  {
    number: "05",
    title: "Deploy Models with MLOps & Cloud"
  },
  {
    number: "06",
    title: "Become Interview-Ready & Career-Focused"
  }
]

export default function LearningJourneySection() {
  return (
    <section className="bg-[#F5F7FA] py-16 px-4 md:px-8">
      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Your <span className="text-[#C41E3A]">AI/ML Learning Journey</span> from
          <br />
          Beginner to Industry-Ready
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
          A clear, structured roadmap that takes you from coding fundamentals to
          real-world AI/ML roles.
        </p>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="bg-white rounded-lg border border-gray-200 p-6 text-center"
            >
              <span className="text-sm text-gray-500 font-semibold">Step</span>
              <p className="text-4xl font-bold text-[#C41E3A] mt-1 mb-3">{step.number}</p>
              <p className="text-gray-700 text-sm">{step.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
