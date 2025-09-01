import Link from 'next/link'
import { personalInfo } from '@/data/projects'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Pranav
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Building AI-first products that make a real impact
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">About</Link></li>
              <li><Link href="/tech" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Tech Deep Dive</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Featured Work</h3>
            <ul className="space-y-2">
              <li><Link href="/projects/autoslate" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">AutoSlate</Link></li>
              <li><Link href="/projects/docusynth" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">DocuSynth AI</Link></li>
              <li><Link href="/projects/spedtree" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">SpedTree</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Resume (PDF)
              </a>

              <div className="text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} {personalInfo.name}. Built with Next.js, TypeScript & Tailwind CSS.
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Made with ❤️ at Indiana University
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
