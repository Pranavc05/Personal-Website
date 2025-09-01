import { Hero } from '@/components/Hero'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />
      <ProjectCarousel />
      <ContactSection />
    </div>
  )
}
