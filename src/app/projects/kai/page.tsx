import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ExperimentLog } from '@/components/ExperimentLog'
import { LoomEmbed } from '@/components/LoomEmbed'

const project = projects.find((p) => p.id === 'kai')
if (!project) {
  notFound()
}

const projectData = project!

export const metadata = {
  title: `${projectData.title} | Pranav Chandrasekhar`,
  description: projectData.description,
  openGraph: {
    title: `${projectData.title} | Pranav Chandrasekhar`,
    description: projectData.description,
  },
}

export default function KAIPage() {
  return (
    <ExperimentLog
      project={projectData}
      chips={[
        '1,200+ students',
        '50+ teachers',
        '10+ Bay Area districts',
        '1 school in Dubai',
        'Cache-first analytics',
      ]}
      demo={
        <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">
                See KAI in action
              </h2>
              <p className="text-ink-500 dark:text-cream-300">
                Live demo of the teacher dashboard, real-time analytics, and AI-evaluated feedback.
              </p>
            </div>
            <LoomEmbed
              youtubeId={projectData.youtubeId}
              title={`${projectData.title} Live Demo`}
            />
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={projectData.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Watch on YouTube</span>
              </a>
              <Link href="https://cluo.ai" className="btn-secondary">
                Visit KAI landing page
              </Link>
            </div>
          </div>
        </section>
      }
    />
  )
}
