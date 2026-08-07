import Link from 'next/link'
import { TechBadge } from '@/components/TechBadge'
import { MetricsGrid } from '@/components/MetricsGrid'
import type { Project } from '@/data/projects'
import type { ReactNode } from 'react'

type ExperimentLogProps = {
  project: Project
  chips?: string[]
  demo?: ReactNode
  nextSteps?: ReactNode
  footerCta?: ReactNode
}

export function ExperimentLog({
  project,
  chips = [],
  demo,
  nextSteps,
  footerCta,
}: ExperimentLogProps) {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-ink-800">
      {/* Hero */}
      <section className="border-b border-ink-200 px-6 pb-14 pt-10 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
            Experiment log
          </p>
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="font-serif text-4xl font-semibold text-ink-800 dark:text-cream-50 sm:text-5xl">
              {project.title}
            </h1>
            <span className="border border-crimson-500/40 px-3 py-1 font-mono text-xs uppercase tracking-wider text-crimson-500">
              {project.subtitle}
            </span>
          </div>
          <p className="text-xl font-medium text-crimson-600 dark:text-crimson-400">
            {project.oneLiner}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-600 dark:text-cream-200">
            {project.description}
          </p>
          {chips.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="border border-ink-200 px-3 py-1 text-sm text-ink-600 dark:border-ink-500 dark:text-cream-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {demo}

      {/* Hypothesis / Method */}
      <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-crimson-500">
              Hypothesis
            </h2>
            <h3 className="font-serif text-2xl text-ink-800 dark:text-cream-100">The problem</h3>
            <p className="leading-relaxed text-ink-600 dark:text-cream-200">{project.problem}</p>
          </div>
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-crimson-500">
              Method
            </h2>
            <h3 className="font-serif text-2xl text-ink-800 dark:text-cream-100">The approach</h3>
            <p className="leading-relaxed text-ink-600 dark:text-cream-200">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="border-b border-ink-200 px-6 py-12 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-mono text-xs uppercase tracking-wider text-crimson-500">Role</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-600 dark:text-cream-200">
            {project.role}
          </p>
        </div>
      </section>

      {/* Observations / metrics */}
      <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-serif text-3xl text-ink-800 dark:text-cream-100">
            Observations
          </h2>
          <MetricsGrid metrics={project.metrics} />
        </div>
      </section>

      {/* Impact */}
      <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">What shipped</h2>
          <div className="space-y-0 border border-ink-200 dark:border-ink-600">
            {project.impact.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-ink-200 px-4 py-4 last:border-b-0 dark:border-ink-600"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-crimson-500" />
                <p className="text-ink-600 dark:text-cream-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">Capabilities</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.keyFeatures.map((feature) => (
              <div
                key={feature}
                className="border border-ink-200 px-5 py-4 dark:border-ink-600"
              >
                <p className="leading-relaxed text-ink-600 dark:text-cream-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">Hard parts</h2>
          <div className="space-y-3">
            {project.challenges.map((challenge) => (
              <p key={challenge} className="annotation">
                {challenge}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-center font-serif text-3xl text-ink-800 dark:text-cream-100">
            Stack
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {nextSteps}

      {/* CTA */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          {footerCta ?? (
            <>
              <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">
                Want the walkthrough?
              </h2>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={`mailto:pranav2005.chandrasekhar@gmail.com?subject=${encodeURIComponent(project.title + ' Conversation')}`}
                  className="btn-primary"
                >
                  <span>Request a walkthrough</span>
                </Link>
                <Link href="/projects" className="btn-secondary">
                  All experiments
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
