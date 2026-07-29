import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { TechBadge } from '@/components/TechBadge'
import { MetricsGrid } from '@/components/MetricsGrid'

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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-teal-50 dark:from-amber-950 dark:to-teal-950">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              PAWS
            </h1>
            <span className="px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30 rounded-full">
              {projectData.subtitle}
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Peer-Assisted Writing Strategies
          </p>

          <p className="text-xl text-teal-700 dark:text-teal-200 font-semibold">
            {projectData.oneLiner}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {projectData.description}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              Web MVP
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              U.S. Dept. of Education funded
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              Georgia State + Stanford HAI
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              Claude vision scoring
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              Letters a, b, c, o, t
            </span>
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Meet Buddy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kids pick a letter, then move through I Do, We Do, and You Do with a friendly AI peer coach—not dense text.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
            <Image
              src="/images/paws-homepage.png"
              alt="PAWS homepage showing Buddy the AI coach and letter selection for a, b, c, o, and t"
              width={1600}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=PAWS%20Demo%20Request&body=Hi%20Pranav%2C%0A%0AI%27d%20like%20to%20see%20a%20demo%20of%20PAWS.%0A%0AThanks!"
              className="btn-primary"
            >
              <span>Request a Demo</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus-visible"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            At a Glance
          </h2>
          <MetricsGrid metrics={projectData.metrics} />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              The Problem
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {projectData.problem}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Our Solution
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {projectData.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Role
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {projectData.role}
          </p>
        </div>
      </section>

      {/* What we built */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            What We Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectData.impact.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="w-2 h-2 mt-2 bg-green-400 rounded-full flex-shrink-0"></span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.keyFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap note */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-teal-50 dark:from-amber-950/40 dark:to-teal-950/40">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            What’s Next
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Today’s browser MVP proves the instructional flow, drawing capture, scoring, and feedback design.
            The product path leads to a classroom-ready iPad experience with Apple Pencil, PencilKit, and on-device or cloud evaluation.
          </p>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectData.techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Design Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectData.challenges.map((challenge, index) => (
              <div key={index} className="p-5 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Want to explore PAWS?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Happy to walk through Buddy’s coaching flow, Claude vision rubrics, ElevenLabs feedback, and the path from this web prototype to iPad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=PAWS%20Conversation&body=Hi%20Pranav%2C%0A%0ALet%27s%20talk%20about%20PAWS%20and%20your%20work%20on%20it.%0A%0AThanks!"
              className="btn-primary"
            >
              <span>Request a Walkthrough</span>
            </Link>
            <Link
              href="/projects/kai"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible"
            >
              See KAI Next
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
