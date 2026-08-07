import { personalInfo } from '@/data/projects'
import Link from 'next/link'

export const metadata = {
  title: 'Contact | Pranav Chandrasekhar',
  description:
    'Get in touch about Fall 2026 internships, new grad 2027 roles, collaborations, or project demos.',
}

const contactReasons = [
  {
    title: 'Internship Opportunities',
    description:
      'Open to Fall 2026 internships in AI/ML, full-stack development, or product engineering.',
    action: 'Discuss Opportunities',
  },
  {
    title: 'New Grad 2027',
    description: 'Exploring full-time roles starting 2027 in applied AI and product engineering.',
    action: 'New Grad Conversation',
  },
  {
    title: 'Collaboration',
    description: 'AI projects, hackathons, or open source — happy to build together.',
    action: 'Start Collaborating',
  },
  {
    title: 'Project Demos',
    description: 'Want a walkthrough of KAI, PAWS, AutoSlate, or another experiment?',
    action: 'Request Demo',
  },
  {
    title: 'Mentorship & Advice',
    description: 'Chat with fellow students about CS, AI development, or shipping systems.',
    action: 'Schedule a Chat',
  },
  {
    title: 'General Discussion',
    description: 'Projects, stack choices, or AI and education — always up for a conversation.',
    action: "Let's Talk",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-ink-800">
      <section className="border-b border-ink-200 px-6 pb-12 pt-10 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
            Correspondence
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ink-800 dark:text-cream-50 sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-ink-500 dark:text-cream-300">
            Open to Fall 2026 internships and new grad roles for 2027.
          </p>
          <p className="mt-6 font-mono text-sm text-crimson-500">
            Fall 2026 internships · New grad 2027
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <a
            href={`mailto:${personalInfo.email}`}
            className="border border-ink-200 bg-cream-50 p-6 dark:border-ink-600 dark:bg-ink-900"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Email</p>
            <p className="mt-3 font-serif text-xl text-ink-800 dark:text-cream-100">
              {personalInfo.email}
            </p>
            <p className="mt-2 text-sm text-ink-500 dark:text-cream-300">
              Usually within 24 hours. Best for opportunities and detailed discussions.
            </p>
          </a>
          <a
            href={`mailto:${personalInfo.email}?subject=Let's%20Schedule%20a%20Chat`}
            className="border border-ink-200 bg-cream-50 p-6 dark:border-ink-600 dark:bg-ink-900"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Schedule</p>
            <p className="mt-3 font-serif text-xl text-ink-800 dark:text-cream-100">
              15–30 min chat
            </p>
            <p className="mt-2 text-sm text-ink-500 dark:text-cream-300">
              Quick introductions, demos, or collaboration ideas.
            </p>
          </a>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-12 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl text-ink-800 dark:text-cream-100">
            What would you like to discuss?
          </h2>
          <div className="mt-6 border border-ink-200 dark:border-ink-600">
            {contactReasons.map((reason) => (
              <a
                key={reason.title}
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(reason.action)}`}
                className="block border-b border-ink-200 px-5 py-5 last:border-b-0 hover:bg-cream-50 dark:border-ink-600 dark:hover:bg-ink-900"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg text-ink-800 dark:text-cream-100">
                    {reason.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-crimson-500">
                    {reason.action} →
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-500 dark:text-cream-300">
                  {reason.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-12 dark:border-ink-600 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row">
          <Link href="/projects" className="btn-secondary flex-1 text-center">
            Browse experiments
          </Link>
          <a
            href="/resume.pdf?v=20260716"
            download="Pranav_Chandrasekhar_Resume.pdf"
            className="btn-primary flex-1 text-center"
          >
            <span>Download resume</span>
          </a>
        </div>
        <p className="annotation mx-auto mt-10 max-w-4xl">
          Based in {personalInfo.location} (EST). If you&apos;re ever in Bloomington and want to
          shoot hoops, say so.
        </p>
      </section>
    </div>
  )
}
