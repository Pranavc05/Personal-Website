interface Metric {
  label: string
  value: string
}

interface MetricsGridProps {
  metrics: Metric[]
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
        >
          <div className="text-3xl lg:text-4xl font-bold text-primary-500 group-hover:scale-110 transition-transform">
            {metric.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  )
}
