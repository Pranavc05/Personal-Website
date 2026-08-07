interface Metric {
  label: string
  value: string
}

interface MetricsGridProps {
  metrics: Metric[]
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  const cols =
    metrics.length === 4
      ? 'lg:grid-cols-4'
      : metrics.length === 5
        ? 'lg:grid-cols-5'
        : metrics.length === 6
          ? 'lg:grid-cols-3'
          : 'lg:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${cols}`}>
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="border border-ink-200 bg-cream-50 px-5 py-6 text-center dark:border-ink-600 dark:bg-ink-900"
        >
          <div className="font-serif text-2xl font-semibold text-crimson-500 dark:text-crimson-400 lg:text-3xl">
            {metric.value}
          </div>
          <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-400">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  )
}
