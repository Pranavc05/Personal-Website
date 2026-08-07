import { personalInfo, timelineData } from '@/data/projects'
import { personalPhotos } from '@/data/personalPhotos'
import Link from 'next/link'
import { PhotoField } from '@/components/PhotoField'

export const metadata = {
  title: 'About | Pranav Chandrasekhar',
  description: personalInfo.bio.substring(0, 150) + '...',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-ink-800">
      <section className="border-b border-ink-200 px-6 pb-12 pt-10 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">Profile</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ink-800 dark:text-cream-50 sm:text-5xl">
            About
          </h1>
          <p className="mt-3 text-lg text-crimson-500">
            {personalInfo.title} · {personalInfo.location}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="mx-auto w-36 shrink-0 space-y-3 sm:mx-0 sm:w-40">
            <PhotoField
              src={personalPhotos.portrait}
              alt={personalInfo.name}
              caption="Portrait"
              className="aspect-[3/4]"
            />
            <p className="text-center font-mono text-xs uppercase tracking-wider text-crimson-500 sm:text-left">
              Fall 2026 · New grad 2027
            </p>
          </div>

          <div className="min-w-0 flex-1 space-y-6">
            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-ink-600 dark:text-cream-200">
                {paragraph}
              </p>
            ))}

            <div className="border border-ink-200 dark:border-ink-600">
              <div className="border-b border-ink-200 px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-400 dark:border-ink-600">
                Quick facts
              </div>
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                {[
                  ['Senior at Indiana University', 'Computer Science + Informatics'],
                  ['Alpha Kappa Psi', 'Associate Director of Technology'],
                  ['Basketball', 'Since childhood'],
                  ['Dog dad', 'Two Siberian Huskies'],
                ].map(([title, sub]) => (
                  <div
                    key={title}
                    className="border-b border-ink-100 px-4 py-4 last:border-b-0 sm:odd:border-r dark:border-ink-700"
                  >
                    <p className="font-serif text-ink-800 dark:text-cream-100">{title}</p>
                    <p className="mt-1 text-sm text-ink-500 dark:text-cream-300">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">Journey</h2>
          <div className="mt-8 border border-ink-200 dark:border-ink-600">
            {timelineData.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="border-b border-ink-200 px-5 py-5 last:border-b-0 dark:border-ink-600"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-lg text-ink-800 dark:text-cream-100">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-crimson-500">
                    {item.year} · {item.type}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-500 dark:text-cream-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['Impact-driven', 'Build for real people and real classrooms — not just demos.'],
              ['Accessibility first', 'Inclusive by default, regardless of ability or background.'],
              ['Human-centered', 'AI should augment people, not erase human connection.'],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-crimson-500 pl-4">
                <h3 className="font-serif text-xl text-ink-800 dark:text-cream-100">{title}</h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-cream-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">Let&apos;s connect</h2>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              <span>Get in touch</span>
            </Link>
            <Link href="/projects" className="btn-secondary">
              View experiments
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
