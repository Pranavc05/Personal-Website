import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { ExperimentLog } from '@/components/ExperimentLog'
import Link from 'next/link'

export async function generateMetadata() {
  const project = projects.find((p) => p.id === 'docusynth')
  if (!project) return {}
  return {
    title: `${project.title} - ${project.subtitle} | Pranav Chandrasekhar`,
    description: project.oneLiner,
  }
}

export default function DocuSynthProject() {
  const project = projects.find((p) => p.id === 'docusynth')
  if (!project) notFound()

  return (
    <ExperimentLog
      project={project}
      demo={
        <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 border border-ink-200 bg-cream-50 p-8 text-center dark:border-ink-600 dark:bg-ink-900">
            <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">
              Multi-agent documentation demo
            </h2>
            <p className="text-ink-500 dark:text-cream-300">
              Walk through agents coordinating to analyze a codebase and generate docs in real time.
            </p>
            <a
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=DocuSynth%20AI%20Live%20Demo%20Request"
              className="btn-primary"
            >
              <span>Request live demo</span>
            </a>
          </div>
        </section>
      }
      footerCta={
        <>
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">
            Continue exploring
          </h2>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/projects/spedtree" className="btn-primary">
              <span>Next: Worksheet Generator</span>
            </Link>
            <Link href="/projects" className="btn-secondary">
              All experiments
            </Link>
          </div>
        </>
      }
    />
  )
}
