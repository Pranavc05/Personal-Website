import Link from 'next/link'
import { personalInfo } from '@/data/projects'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-200 bg-cream-100 dark:border-ink-600 dark:bg-ink-800">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="font-serif text-2xl font-semibold text-crimson-500 dark:text-crimson-400">
              Pranav
            </Link>
            <p className="text-sm text-ink-500 dark:text-cream-300">
              Applied AI engineer · Indiana University
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
              Fall 2026 internships · New grad 2027
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-400">Navigation</h3>
            <ul className="space-y-2">
              {[
                ['/', 'Home'],
                ['/projects', 'Projects'],
                ['/experience', 'Experience'],
                ['/about', 'About'],
                ['/tech', 'Tech'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-ink-600 transition-colors hover:text-crimson-500 dark:text-cream-200 dark:hover:text-crimson-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-400">Experiments</h3>
            <ul className="space-y-2">
              {[
                ['/projects/kai', 'KAI'],
                ['/projects/paws', 'PAWS'],
                ['/projects/autoslate', 'AutoSlate'],
                ['/projects/docusynth', 'DocuSynth AI'],
                ['/projects/spedtree', 'Worksheet Generator'],
                ['/projects/dataforge', 'DataForge'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-ink-600 transition-colors hover:text-crimson-500 dark:text-cream-200 dark:hover:text-crimson-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-400">Contact</h3>
            <div className="space-y-3 text-sm text-ink-600 dark:text-cream-200">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block hover:text-crimson-500 dark:hover:text-crimson-400"
              >
                {personalInfo.email}
              </a>
              <a
                href="/resume.pdf?v=20260716"
                download="Pranav_Chandrasekhar_Resume.pdf"
                className="block hover:text-crimson-500 dark:hover:text-crimson-400"
              >
                Resume (PDF)
              </a>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200 pt-6 text-sm text-ink-400 dark:border-ink-600 sm:flex-row">
          <p>© {currentYear} {personalInfo.name}</p>
          <p className="font-mono text-xs uppercase tracking-wider">
            Lab notebook · Built at IU
          </p>
        </div>
      </div>
    </footer>
  )
}
