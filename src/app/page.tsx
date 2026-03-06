import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import BenefitsSection from '@/components/BenefitsSection'
import LearningJourneySection from '@/components/LearningJourneySection'
import TechnologiesSection from '@/components/TechnologiesSection'
import CurriculumSection from '@/components/CurriculumSection'
import WebinarCTASection from '@/components/WebinarCTASection'
import InstructorSection from '@/components/InstructorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BrochureSection from '@/components/BrochureSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <>
      

      <main className="pt-[90px] min-h-screen bg-[#F5F7FA]">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <LearningJourneySection />
        <TechnologiesSection />
        <CurriculumSection />
        <WebinarCTASection />
        <InstructorSection />
        <TestimonialsSection />
        <BrochureSection />
        <FAQSection />
      </main>
    </>
  )
}