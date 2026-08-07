import Link from 'next/link'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects | Pranav Chandrasekhar',
  description:
    'Experiment index — KAI, PAWS, DataForge, AutoSlate, DocuSynth AI, and Worksheet Generator.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-ink-800">
      <section className="border-b border-ink-200 px-6 pb-12 pt-10 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
            Experiment index
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ink-800 dark:text-cream-50 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-500 dark:text-cream-300">
            Production systems and research prototypes — education AI, agents, voice, and data platforms.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl border border-ink-200 dark:border-ink-600">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="border-b border-ink-200 px-5 py-8 last:border-b-0 dark:border-ink-600"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-ink-400">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-1 font-serif text-2xl text-ink-800 dark:text-cream-100 sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-crimson-500">{project.subtitle}</p>
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="font-mono text-xs uppercase tracking-wider text-crimson-500 hover:underline"
                >
                  Open log →
                </Link>
              </div>

              <p className="mt-4 text-ink-600 dark:text-cream-200">{project.oneLiner}</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {project.metrics.slice(0, 3).map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-ink-100 px-3 py-2 dark:border-ink-700"
                  >
                    <p className="font-serif text-lg text-crimson-500">{metric.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="border border-ink-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-500 dark:border-ink-600 dark:text-cream-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-ink-500 dark:text-cream-300">
            Want a walkthrough of any experiment?
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            <span>Get in touch</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
