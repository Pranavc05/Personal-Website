import Link from 'next/link'
import { personalPhotos } from '@/data/personalPhotos'
import { PhotoField } from './PhotoField'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 dark:border-ink-600">
      <div className="absolute inset-0 flat-field" />
      <div className="absolute inset-y-0 left-0 w-1 bg-crimson-500" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:px-8 lg:py-24">
        <div className="space-y-8">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
            Indiana University
          </p>

          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink-800 dark:text-cream-50 sm:text-6xl lg:text-7xl">
            Pranav
            <br />
            Chandrasekhar
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-600 dark:text-cream-200 sm:text-xl">
            I build applied AI systems for real learners and real products — reading coaches,
            handwriting tutors, voice agents — then write up what actually worked.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="btn-primary">
              <span>Browse experiments</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Fall 2026 / New grad 2027
            </Link>
          </div>
        </div>

        <PhotoField
          src={personalPhotos.portrait}
          alt="Portrait of Pranav Chandrasekhar"
          caption="Portrait"
          className="mx-auto w-40 aspect-[3/4] sm:w-44 lg:ml-auto lg:mr-0"
        />
      </div>
    </section>
  )
}
