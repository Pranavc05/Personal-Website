import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ExperimentLog } from '@/components/ExperimentLog'

const project = projects.find((p) => p.id === 'paws')
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
    images: ['/images/paws-homepage.png'],
  },
}

export default function PAWSPage() {
  return (
    <ExperimentLog
      project={projectData}
      chips={[
        'Web MVP',
        'U.S. Dept. of Education funded',
        'Georgia State + Stanford HAI',
        'Claude vision scoring',
        'Letters a, b, c, o, t',
      ]}
      demo={
        <section className="border-b border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">Meet Buddy</h2>
              <p className="mx-auto max-w-2xl text-ink-500 dark:text-cream-300">
                Kids pick a letter, then move through I Do, We Do, and You Do with a friendly AI peer coach.
              </p>
            </div>
            <div className="overflow-hidden border border-ink-200 dark:border-ink-600">
              <Image
                src="/images/paws-homepage.png"
                alt="PAWS homepage showing Buddy and letter selection"
                width={1600}
                height={1000}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="mailto:pranav2005.chandrasekhar@gmail.com?subject=PAWS%20Demo%20Request"
                className="btn-primary"
              >
                <span>Request a demo</span>
              </Link>
              <Link href="/projects" className="btn-secondary">
                All experiments
              </Link>
            </div>
          </div>
        </section>
      }
      nextSteps={
        <section className="border-b border-ink-200 bg-cream-200/50 px-6 py-16 dark:border-ink-600 dark:bg-ink-900 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">What&apos;s next</h2>
            <p className="text-lg leading-relaxed text-ink-600 dark:text-cream-200">
              Today&apos;s browser MVP proves the instructional flow, drawing capture, scoring, and feedback.
              The path leads to a classroom-ready iPad experience with Apple Pencil, PencilKit, and on-device or cloud evaluation.
            </p>
          </div>
        </section>
      }
    />
  )
}
