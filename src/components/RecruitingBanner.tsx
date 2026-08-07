import Link from 'next/link'

export function RecruitingBanner() {
  return (
    <div className="fixed inset-x-0 top-16 z-40 border-b border-crimson-500/30 bg-crimson-500 text-cream-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-2 text-sm lg:px-8">
        <p className="truncate font-medium tracking-wide">
          Open to Fall 2026 internships
          <span className="mx-2 opacity-60">·</span>
          New grad 2027
        </p>
        <Link
          href="/contact"
          className="shrink-0 font-mono text-xs uppercase tracking-wider underline underline-offset-4 hover:text-cream-200"
        >
          Get in touch
        </Link>
      </div>
    </div>
  )
}
