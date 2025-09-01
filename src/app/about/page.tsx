import { personalInfo, timelineData } from '@/data/projects'
import Link from 'next/link'

export const metadata = {
  title: 'About | Pranav Chandrasekhar',
  description: personalInfo.bio.substring(0, 150) + '...',
  openGraph: {
    title: 'About | Pranav Chandrasekhar',
    description: personalInfo.bio.substring(0, 150) + '...',
  },
}

const typeColors = {
  education: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  project: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  achievement: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
}

const typeIcons = {
  education: '🎓',
  leadership: '👨‍💼',
  project: '🚀',
  achievement: '🏆',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-medium">
                {personalInfo.title} • {personalInfo.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile placeholder */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {personalInfo.title}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick facts */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Junior at Indiana University</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science + Informatics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Alpha Kappa Psi</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Associate Director of Technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏀</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Basketball Player</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Since childhood</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🐕</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Dog Dad</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Two Siberian Huskies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Journey Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-900 border-4 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-xl">{typeIcons[item.type]}</span>
                  </div>
                  
                  {/* Timeline content */}
                  <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.year}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[item.type]}`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Values & Mission
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Impact-Driven</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building technology that solves real problems for real people, not just impressive demos.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Accessibility First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Technology should be inclusive and accessible to everyone, regardless of ability or background.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Human-Centered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI should augment human capabilities, not replace human connection and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm always interested in discussing AI, education technology, accessibility, 
            or any opportunities to create positive impact through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              <span>Get in Touch</span>
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
