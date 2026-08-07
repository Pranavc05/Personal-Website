import Link from 'next/link'
import { personalInfo } from '@/data/projects'

export function ContactSection() {
  return (
    <section className="border-t border-ink-200 bg-cream-200/60 px-6 py-20 dark:border-ink-600 dark:bg-ink-900 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
          Correspondence
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-800 dark:text-cream-50 sm:text-4xl">
          Let&apos;s talk about the next build
        </h2>
        <p className="mt-4 text-lg text-ink-600 dark:text-cream-200">
          Open to Fall 2026 internships and new grad roles for 2027 — AI/ML, full-stack, and product engineering.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${personalInfo.email}`} className="btn-primary">
            <span>Email {personalInfo.email}</span>
          </a>
          <Link href="/contact" className="btn-secondary">
            Contact page
          </Link>
        </div>

        <p className="annotation mt-10">
          Based at {personalInfo.location}. When I&apos;m offline: basketball or the huskies.
        </p>
      </div>
    </section>
  )
}
