import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { TechBadge } from '@/components/TechBadge'
import { MetricsGrid } from '@/components/MetricsGrid'
import Link from 'next/link'

const project = projects.find(p => p.id === 'dataforge')
if (!project) {
  notFound()
}

export const metadata = {
  title: `${project.title} | Pranav Chandrasekhar`,
  description: project.description,
  openGraph: {
    title: `${project.title} | Pranav Chandrasekhar`,
    description: project.description,
  },
}

const architecturalComponents = [
  {
    name: 'AI Agent System',
    description: 'Three specialized AI agents using GPT-4 and LangChain for autonomous database optimization',
    components: [
      'Query Optimization Agent - Analyzes SQL performance with EXPLAIN ANALYZE',
      'Schema Evolution Agent - Predicts change impacts and generates migration strategies', 
      'Cost Optimization Agent - Identifies savings through usage pattern analysis'
    ]
  },
  {
    name: 'Real-Time Streaming',
    description: 'High-throughput event processing with Apache Kafka and Redis caching',
    components: [
      'Order events for real-time analytics and fraud detection',
      'Query performance events with automatic optimization triggers',
      'Data quality events with automated remediation workflows'
    ]
  },
  {
    name: 'Enterprise Security',
    description: '6-level hierarchical RBAC with JWT authentication and complete audit trails',
    components: [
      'Viewer → API User → Data Analyst → Data Engineer → Admin → Super Admin',
      'Rate limiting per role with burst allowances and abuse detection',
      'Encrypted audit logs with cryptographic integrity verification'
    ]
  }
]

const mlModels = [
  {
    name: 'Customer Churn Prediction',
    algorithm: 'Ensemble (Random Forest + Gradient Boosting + Logistic Regression)',
    features: 'RFM Analysis, Behavioral Patterns, Product Affinity, CLV',
    accuracy: '90%+ with confidence intervals'
  },
  {
    name: 'Demand Forecasting', 
    algorithm: 'Time Series (ARIMA + Prophet + Linear Regression)',
    features: 'Seasonality Detection, External Factors, Trend Analysis',
    accuracy: 'Multi-horizon with uncertainty quantification'
  },
  {
    name: 'Anomaly Detection',
    algorithm: 'Isolation Forest + One-Class SVM + Statistical Methods',
    features: 'Real-time Streaming, Contextual Analysis, Pattern Recognition',
    accuracy: 'Sub-second detection with 99.5% precision'
  }
]

const performanceMetrics = [
  { category: 'Query Performance', metrics: ['67% avg improvement', 'Sub-second analytics', '99.9% uptime'] },
  { category: 'Cost Optimization', metrics: ['30-50% warehouse savings', 'Automated archival', 'Smart compression'] },
  { category: 'Real-Time Processing', metrics: ['10k+ events/sec', 'Exactly-once semantics', 'Auto-scaling'] },
  { category: 'AI Intelligence', metrics: ['GPT-4 integration', '3 specialized agents', 'Contextual analysis'] }
]

export default function DataForgePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {project.title}
              </h1>
              <span className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                {project.subtitle}
              </span>
            </div>
            
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              {project.oneLiner}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Enterprise-Scale Impact
          </h2>
          <MetricsGrid metrics={project.metrics} />
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  The Problem
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  My Solution
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Deep Dive */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Architecture
          </h2>
          
          <div className="space-y-8">
            {architecturalComponents.map((component, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {component.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="space-y-3">
                      {component.components.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Models */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Advanced Machine Learning Pipeline
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mlModels.map((model, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {model.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Algorithm</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{model.algorithm}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Features</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{model.features}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Performance</div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">{model.accuracy}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Breakdown */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Performance Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Enterprise Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {project.techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Capabilities */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Multiple Demo Formats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700 p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center shadow-lg mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Web Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Professional interface with real-time metrics, interactive AI optimization, and live streaming analytics
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700 p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center shadow-lg mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Terminal Demo</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Command-line interface showing system internals, AI agent interactions, and real-time processing
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-700 p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center shadow-lg mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Jupyter Notebook</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Interactive walkthrough with code examples, ML model training, and system architecture explanations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Enterprise Business Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.impact.map((impact, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {impact.includes('67%') ? '67% ↑' : 
                   impact.includes('30-50%') ? '30-50% ↓' :
                   impact.includes('10,000+') ? '10K+' : '99.9%'}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ready to See DataForge in Action?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'd love to demonstrate the AI agents, real-time streaming capabilities, and enterprise architecture 
            that make DataForge a cutting-edge data platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=DataForge%20Demo%20Request&body=Hi%20Pranav%2C%0A%0AI'm%20interested%20in%20seeing%20a%20demo%20of%20DataForge.%20Could%20we%20schedule%20a%20time%20to%20explore%20the%20AI%20agents%20and%20real-time%20capabilities%3F%0A%0AThank%20you%21"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Request Live Demo
            </a>
            
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
