import { Hero } from '@/components/Hero'
import { ProjectGraph } from '@/components/ProjectGraph'
import { FieldNotes } from '@/components/FieldNotes'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectGraph />
      <FieldNotes />
      <ContactSection />
    </div>
  )
}
