interface TechBadgeProps {
  tech: string
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <div className="border border-ink-200 bg-cream-50 px-3 py-3 text-center font-mono text-xs uppercase tracking-wider text-ink-600 transition-colors hover:border-crimson-500 hover:text-crimson-500 dark:border-ink-600 dark:bg-ink-900 dark:text-cream-200 dark:hover:border-crimson-400 dark:hover:text-crimson-400">
      {tech}
    </div>
  )
}
