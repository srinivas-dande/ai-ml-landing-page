export default function InstructorSection() {
  return (
    <section className="relative bg-[#F5F7FA] py-16 md:py-20 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="instructorGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#instructorGrid)" />
        </svg>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-32 left-44 text-[#C41E3A]/40">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </div>
      <div className="absolute top-40 right-1/3 text-[#C41E3A]/40">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </div>
      <div className="absolute bottom-48 left-8 text-[#C41E3A]/40">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-1/3 text-[#C41E3A]/40">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[70px] py-10 md:py-12 relative z-10 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Profile Image */}
          <div className="relative flex-shrink-0">
            {/* Outer Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-[#C41E3A]/20"></div>
            
            {/* Red Circle Background */}
            <div className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-full bg-[#C41E3A] overflow-hidden flex items-end justify-center">
              {/* Placeholder for instructor image */}
              <div className="w-full h-full bg-[#C41E3A] flex items-center justify-center text-white/30 text-sm">
                {/* Image will be placed here */}
                <img 
                  src="/images/srinivas.png" 
                  alt="Srinivas Dande - Founder & Lead Instructor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 max-w-[700px] ">
            {/* Label */}
            <div className="flex items-center gap-2 mb-4 ">
              <span className="w-3 h-3 bg-[#C41E3A] rounded-sm"></span>
              <span className="text-gray-700 font-medium">Meet Your Instructor</span>
            </div>

            {/* Name */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Srinivas Dande
            </h2>

            {/* Title */}
            <p className="text-[#C41E3A] font-semibold text-lg md:text-xl mb-6">
              Founder & Lead Instructor — Dandes Academy
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Srinivas Dande brings over 20 years of experience in product development, system architecture, 
                and technical training. He began his career at Sun Microsystems and has trained thousands of 
                engineers across Java, System Design, and modern AI technologies.
              </p>
              <p>
                His teaching blends real-world engineering with structured interview preparation — helping learners 
                build strong fundamentals while gaining skills directly applicable to real projects.
              </p>
              <p>
                Students consistently value his step-by-step teaching approach, practical examples, and clarity in 
                simplifying complex concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
