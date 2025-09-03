import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'

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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            See AutoSlate in Action
          </h2>
          
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700 p-12">
            <div className="space-y-8">
              <div className="w-24 h-24 mx-auto bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Ready to see AutoSlate handle real restaurant calls?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                  Schedule a personalized demo where I'll show you AutoSlate taking live calls, handling reservations, and managing customer inquiries in real-time across multiple languages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:pranav2005.chandrasekhar@gmail.com?subject=AutoSlate%20Live%20Demo%20Request&body=Hi%20Pranav%2C%0A%0AI'm%20interested%20in%20seeing%20a%20live%20demo%20of%20AutoSlate.%20Could%20we%20schedule%20a%20time%20to%20see%20it%20in%20action%3F%0A%0AThank%20you%21"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Request Live Demo
                </a>
                
                <a
                  href="mailto:pranav2005.chandrasekhar@gmail.com?subject=AutoSlate%20Questions&body=Hi%20Pranav%2C%0A%0AI%20have%20some%20questions%20about%20AutoSlate.%20"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Ask Questions
                </a>
              </div>
            </div>
          </div>
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
