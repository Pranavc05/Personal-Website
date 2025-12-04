import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { TechBadge } from '@/components/TechBadge'
import { MetricsGrid } from '@/components/MetricsGrid'
import Link from 'next/link'

const project = projects.find(p => p.id === 'dataforge')
if (!project) {
  notFound()
}

// TypeScript assertion - we know project exists after the notFound() check
const projectData = project!

export const metadata = {
  title: `${projectData.title} | Pranav Chandrasekhar`,
  description: projectData.description,
  openGraph: {
    title: `${projectData.title} | Pranav Chandrasekhar`,
    description: projectData.description,
  },
}

export default function DataForgePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {projectData.title}
              </h1>
              <span className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                {projectData.subtitle}
              </span>
            </div>
            
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
              {projectData.oneLiner}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {projectData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Enterprise Impact
          </h2>
          <MetricsGrid metrics={projectData.metrics} />
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                My Solution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {projectData.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Key Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projectData.techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ready to See DataForge in Action?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'd love to demonstrate the AI agents, real-time streaming, and enterprise architecture that power this data platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=DataForge%20Demo%20Request&body=Hi%20Pranav%2C%0A%0AI'm%20interested%20in%20seeing%20a%20demo%20of%20DataForge.%20Could%20we%20schedule%20a%20time%20to%20explore%20the%20AI%20capabilities%3F%0A%0AThank%20you%21"
              className="btn-primary"
            >
              <span>Request Live Demo</span>
            </a>
            
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
