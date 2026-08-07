import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { LoomEmbed } from '@/components/LoomEmbed'
import { ExperimentLog } from '@/components/ExperimentLog'

const project = projects.find((p) => p.id === 'dataforge')
if (!project) {
  notFound()
}

const projectData = project!

export const metadata = {
  title: `${projectData.title} | Pranav Chandrasekhar`,
  description: projectData.description,
}

export default function DataForgePage() {
  return (
    <ExperimentLog
      project={projectData}
      demo={
        <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-center font-serif text-3xl text-ink-800 dark:text-cream-100">
              AI data orchestration in action
            </h2>
            <LoomEmbed
              embedId={projectData.loomEmbedId}
              videoFileName={projectData.videoFileName}
              title={`${projectData.title} Demo`}
            />
          </div>
        </section>
      }
    />
  )
}
