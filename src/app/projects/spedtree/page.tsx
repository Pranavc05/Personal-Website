import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { LoomEmbed } from '@/components/LoomEmbed'
import { ExperimentLog } from '@/components/ExperimentLog'
import Link from 'next/link'

export async function generateMetadata() {
  const project = projects.find((p) => p.id === 'spedtree')
  if (!project) return {}
  return {
    title: `${project.title} - ${project.subtitle} | Pranav Chandrasekhar`,
    description: project.oneLiner,
  }
}

export default function SpedTreeProject() {
  const project = projects.find((p) => p.id === 'spedtree')
  if (!project) notFound()

  return (
    <ExperimentLog
      project={project}
      demo={
        <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-center font-serif text-3xl text-ink-800 dark:text-cream-100">
              Worksheet generation in action
            </h2>
            <LoomEmbed
              embedId={project.loomEmbedId}
              videoFileName={project.videoFileName}
              title={`${project.title} Demo`}
            />
          </div>
        </section>
      }
      footerCta={
        <>
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">
            Continue exploring
          </h2>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/projects/autoslate" className="btn-primary">
              <span>Next: AutoSlate</span>
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
