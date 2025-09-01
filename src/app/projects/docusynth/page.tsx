import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { LoomEmbed } from '@/components/LoomEmbed'
import { TechBadge } from '@/components/TechBadge'
import { MetricsGrid } from '@/components/MetricsGrid'
import Link from 'next/link'

export async function generateMetadata() {
  const project = projects.find(p => p.id === 'docusynth')
  
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

export default function DocuSynthProject() {
  const project = projects.find(p => p.id === 'docusynth')
  
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
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                <span className="text-yellow-600 dark:text-yellow-400">🏆</span>
                <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">NVIDIA Hackathon Runner-up</span>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl text-primary-600 dark:text-primary-400 font-medium max-w-3xl mx-auto">
              {project.oneLiner}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </p>

            {/* GitHub link if available */}
            {project.githubUrl && (
              <div className="flex justify-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Multi-Agent System in Action
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
            Hackathon Results & Impact
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

      {/* Multi-Agent Architecture Explanation */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Three-Agent Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">InternalDocAgent</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Code Structure Specialist that performs deep AST analysis, generates function-level documentation, and identifies architectural patterns.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">LibraryDocAgent</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Dependency Intelligence Agent that detects external libraries, fetches official documentation, and provides usage context.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">ContextManagerAgent</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Cross-Reference Detective that maps function usage across files and tracks data flow between components.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <span className="text-2xl">🧠</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">NVIDIA Nemotron Super 49B</span>
              <span className="text-gray-600 dark:text-gray-400">powers all agents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 lg:px-8">
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
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Advanced AI Features
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
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Breakthroughs
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
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
            Want to See More?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Check out my education-focused AI project that's making a real impact in schools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects/spedtree" className="btn-primary">
              <span>Next Project: SpedTree →</span>
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible"
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
