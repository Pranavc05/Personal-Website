import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { TechBadge } from '@/components/TechBadge'
import { MetricsGrid } from '@/components/MetricsGrid'

const project = projects.find((p) => p.id === 'kai')
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
  },
}

export default function KAIPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {projectData.title}
            </h1>
            <span className="px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              {projectData.subtitle}
            </span>
          </div>

          <p className="text-xl text-purple-700 dark:text-purple-200 font-semibold">
            {projectData.oneLiner}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {projectData.description}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              1,200+ students
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              50+ teachers
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              10+ Bay Area districts
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              1 school in Dubai
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
              Cache-first analytics APIs
            </span>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            See KAI in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Live demo video coming soon. Want a walkthrough? I’ll show the teacher dashboard, real-time analytics, and AI-evaluated feedback that power KAI across districts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=KAI%20Demo%20Request&body=Hi%20Pranav%2C%0A%0AI%27d%20like%20to%20see%20a%20demo%20of%20KAI%20(teacher%20dashboard%2C%20analytics%2C%20AI%20feedback).%0A%0AThanks!"
              className="btn-primary"
            >
              <span>Request Live Demo</span>
            </Link>
            <Link
              href="https://cluo.ai"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus-visible"
            >
              Visit KAI Landing Page
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Impact at Scale
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
              Teachers need instant, personalized insights but lack time to manually analyze student work. Students below grade level require adaptive, real-time feedback to improve reading comprehension.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              My Solution
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Built an AI-evaluated workflow (GPT-4) with cache-first analytics APIs and a React/Redux dashboard. Teachers get live strengths/weaknesses, timelines, focus skills, and recommendations while students receive adaptive feedback instantly.
            </p>
          </div>
        </div>
      </section>

      {/* What I built */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            What I Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectData.impact.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="w-2 h-2 mt-2 bg-green-400 rounded-full flex-shrink-0"></span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.keyFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-300">
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

      {/* Tech stack */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            Reliability & QA
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
            Ready to explore KAI?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Happy to walk through the teacher dashboard, analytics pipeline, caching strategy, and how we kept production stable for 1,200+ students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=KAI%20Conversation&body=Hi%20Pranav%2C%0A%0ALet%27s%20talk%20about%20KAI%20and%20your%20work%20on%20it.%0A%0AThanks!"
              className="btn-primary"
            >
              <span>Request a Walkthrough</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
