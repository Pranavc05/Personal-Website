'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'About', href: '/about' },
  { name: 'Tech', href: '/tech' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme, mounted } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200 bg-cream-100 dark:border-ink-600 dark:bg-ink-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-serif text-xl font-semibold text-crimson-500 dark:text-crimson-400">
              Pranav
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-ink-600 dark:text-cream-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'} />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === item.href
                  ? 'text-crimson-500 dark:text-crimson-400'
                  : 'text-ink-600 hover:text-crimson-500 dark:text-cream-200 dark:hover:text-crimson-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 text-ink-500 transition-colors hover:text-crimson-500 dark:text-cream-300 dark:hover:text-crimson-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}

          <a
            href="/resume.pdf?v=20260716"
            download="Pranav_Chandrasekhar_Resume.pdf"
            className="btn-primary text-sm"
          >
            <span>Resume</span>
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-cream-100 dark:bg-ink-800 lg:hidden">
          <div className="flex items-center justify-between border-b border-ink-200 px-6 py-4 dark:border-ink-600">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-serif text-xl font-semibold text-crimson-500">Pranav</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-ink-600 dark:text-cream-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-1 px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block border-b border-ink-100 py-3 text-base font-medium dark:border-ink-700 ${
                  pathname === item.href
                    ? 'text-crimson-500'
                    : 'text-ink-700 dark:text-cream-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center justify-between pt-6">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="text-sm text-ink-500 dark:text-cream-300"
                >
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
              )}
              <a
                href="/resume.pdf?v=20260716"
                download="Pranav_Chandrasekhar_Resume.pdf"
                className="btn-primary text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
