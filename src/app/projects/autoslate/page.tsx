import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { LoomEmbed } from '@/components/LoomEmbed'
import { TechBadge } from '@/components/TechBadge'
import { MetricsGrid } from '@/components/MetricsGrid'
import Link from 'next/link'

export async function generateMetadata() {
  const project = projects.find(p => p.id === 'autoslate')
  
  if (!project) return {}

  return {
    title: `${project.title} - ${project.subtitle} | Pranav Chandrasekhar`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} - ${project.subtitle}`,
      description: project.oneLiner,
      images: [`/images/${project.id}-og.jpg`],
    },
  }
}

export default function AutoSlateProject() {
  const project = projects.find(p => p.id === 'autoslate')
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <span className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                {project.subtitle}
              </span>
            </div>
            
            <p className="text-xl lg:text-2xl text-primary-600 dark:text-primary-400 font-medium max-w-3xl mx-auto">
              {project.oneLiner}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Live Demo
          </h2>
          <LoomEmbed 
            embedId={project.loomEmbedId} 
            videoFileName={project.videoFileName}
            title={`${project.title} Demo`}
          />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Impact & Results
          </h2>
          <MetricsGrid metrics={project.metrics} />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.impact.map((impact, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white font-semibold">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">The Problem</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">My Solution</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Challenges & Solutions
          </h2>
          
          <div className="space-y-8">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">My Role</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">{project.role}</p>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 px-6 lg:px-8 bg-primary-50 dark:bg-primary-900/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Interested in Learning More?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Check out my other projects or get in touch to discuss this work in detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects/docusynth" className="btn-primary">
              <span>Next Project: DocuSynth →</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
