import Link from 'next/link'

export const metadata = {
  title: 'Work Experience | Pranav Chandrasekhar',
  description: 'Software engineering internships at Stanford Accelerator for Learning, SpedTree, and Stanford HAI - building AI systems that impact education.',
  openGraph: {
    title: 'Work Experience | Pranav Chandrasekhar',
    description: 'Software engineering internships at Stanford Accelerator for Learning, SpedTree, and Stanford HAI - building AI systems that impact education.',
  },
}

const workExperience = [
  {
    id: 'aurus-ai',
    company: 'Aurus.ai',
    role: 'Software Engineer (Agentic AI)',
    location: 'Remote',
    period: 'Sep 2025 – Nov 2025',
    status: 'completed',
    type: 'AI & Fintech',
    description: 'Built agentic AI for DoKrunch to automate mortgage loan processing, cutting underwriter review time from 4–8 hours to 15–30 minutes with higher accuracy and fraud detection.',
    keyProjects: [
      {
        name: 'Agent Orchestrator',
        description: 'Designed the master orchestrator to pick optimal workflows (simple/standard/high-risk) and coordinate identity, income, quality, and fraud agents autonomously.',
        technologies: ['FastAPI', 'LangChain', 'OpenAI GPT-4', 'Celery', 'Redis'],
        achievements: [
          'Dynamic workflow routing by loan complexity; autonomous retries and error handling',
          'Scaled multi-agent coordination without human intervention for routine loans',
          'Improved throughput to 15–30 minutes per loan end-to-end'
        ]
      },
      {
        name: 'Identity & Income Verification Agents',
        description: 'Implemented fuzzy identity resolution and cross-document income verification with confidence scoring and fraud flags.',
        technologies: ['Python', 'SQLAlchemy', 'Azure Document Intelligence', 'Custom Matching Algorithms'],
        achievements: [
          '95%+ identity resolution accuracy; auto-merge/role assignment with confidence gating',
          '35% accuracy lift on income validation; 45% fraud reduction on income discrepancies',
          'Automated actions: approve/approve-with-notes/manual-review based on thresholds'
        ]
      },
      {
        name: 'Document Quality & Platform Integration',
        description: 'Shipped quality checks and end-to-end plumbing (auth, storage, tasks) to production.',
        technologies: ['Firebase JWT Auth', 'PostgreSQL', 'Cloudinary', 'Railway'],
        achievements: [
          'Instant doc quality triage (accept/warn/reject) with confidence scoring',
          'Tracked all agent decisions in Postgres for auditability and underwriter review',
          'Production deployment with async workers for long-running AI/OCR tasks'
        ]
      }
    ],
    teamwork: 'Partnered with underwriters, compliance, and product to align AI agent decisions with risk policies and SLA goals.',
    impact: 'Reduced processing time from 4–8 hours to 15–30 minutes per loan; +35% accuracy, -45% fraud flags; higher underwriter throughput with full audit trails.',
    skills: ['FastAPI', 'LangChain', 'Agentic AI', 'OpenAI GPT-4', 'Celery/Redis', 'PostgreSQL', 'Azure Document Intelligence', 'SQLAlchemy', 'JWT Auth', 'Production Ops'],
    companyInfo: {
      focus: 'AI-powered mortgage automation',
      mission: 'Accelerate loan processing with safer, more accurate AI decisions.'
    }
  },
  {
    id: 'stanford-sal',
    company: 'Stanford Accelerator for Learning',
    role: 'Software Engineer Intern',
    location: 'Palo Alto, CA',
    period: 'May 2025 – Sep 2025',
    status: 'completed',
    type: 'Software Engineering',
    description: 'Core engineer on KAI, an AI-powered reading platform used by 1,200+ students and 50 teachers across 10 Bay Area districts and a school in Dubai.',
    keyProjects: [
      {
        name: 'Teacher Dashboard & Live Analytics',
        description: 'Architected and rebuilt the teacher dashboard end-to-end (React/Redux, MUI) with real-time student metrics, focus skill computation, and timeline analysis.',
        technologies: ['React', 'Redux', 'TypeScript', 'Material-UI', 'Vite'],
        achievements: [
          'Shipped 15+ interactive analytics features with <200ms client renders',
          'Raised dashboard adoption to 50+ teachers; 1,200+ students monitored live',
          'Created 12+ reusable UI components and resilient loading/state patterns',
          'Eliminated blocking spinners and broken modals through structural refactors'
        ]
      },
      {
        name: 'Real-Time Metrics APIs & Caching',
        description: 'Built the backend analytics layer (Flask, Cosmos DB, Redis) that powers the dashboard with cached metrics, batch jobs, and GPT-4-evaluated student responses.',
        technologies: ['Flask', 'Azure Cosmos DB', 'Redis', 'OpenAI GPT-4', 'Azure Monitor'],
        achievements: [
          '5 APIs delivering org/class/student insights with cache-first responses (10–100x faster)',
          'Daily batch jobs recomputing metrics and archiving stale cache for thousands of activities',
          'LLM-evaluated answers transformed into strengths/weaknesses and narrative reports for teachers',
          '99.5% observed uptime across multi-district deployments'
        ]
      },
      {
        name: 'Production QA & Launch',
        description: 'Led QA and release-readiness: cross-browser testing, load tests, bug triage from real classrooms, and hotfixes during live pilots.',
        technologies: ['Playwright', 'API Load Testing', 'Logging/Alerting', 'Release Checklists'],
        achievements: [
          'Resolved 15+ critical production bugs before district rollouts',
          'Stabilized CORS/proxy issues and fixed data loading deadlocks',
          'Coordinated go-live with educators, PMs, and AI engineers under tight timelines',
          'Kept production stable while handling live student traffic and teacher feedback'
        ]
      }
    ],
    teamwork: 'Partnered daily with educators, AI researchers, PMs, and accessibility specialists to translate classroom needs into shipped features. Ran feedback loops with teachers, resolved live issues, and aligned releases with district stakeholders.',
    impact: 'Enabled data-driven instruction for 1,200+ students and 50 teachers across 10 districts (plus a Dubai pilot) with reliable, real-time insights and AI-evaluated feedback.',
    skills: ['React/Redux', 'TypeScript', 'Flask', 'Azure Cosmos DB', 'Redis Caching', 'OpenAI GPT-4', 'Observability', 'Cross-functional Collaboration', 'QA & Release Engineering'],
    companyInfo: {
      focus: 'Educational Technology Innovation',
      mission: 'Transforming learning through cutting-edge technology and research-backed solutions.'
    }
  },
  {
    id: 'spedtree',
    company: 'SpedTree',
    role: 'Software Engineer Intern',
    location: 'Remote',
    period: 'May 2025 – July 2025',
    status: 'completed',
    type: 'AI & Education',
    description: 'Led development of AI-powered educational tools for special education teachers, combining cutting-edge AI with deep educational insight.',
    keyProjects: [
      {
        name: 'AI Worksheet Generation API',
        description: 'Deployed a production-ready DALL-E 3 powered image generation API that enables visual-based learning tasks across K-8 special education.',
        technologies: ['DALL-E 3', 'OpenAI API', 'Node.js', 'MongoDB', 'Express.js'],
        achievements: [
          'Reduced worksheet creation time from 1 hour to under 5 minutes',
          'Launched feature successfully in 3 school pilot programs',
          'Generated thousands of educational images with pedagogical accuracy',
          'Built sustainable usage model with smart rate limiting'
        ]
      },
      {
        name: 'Educational AI Chatbot',
        description: 'Engineered a GPT-4o-mini backend chatbot using OpenAI and MongoDB to support real-time queries on student data including IEP progress, attendance, and worksheets.',
        technologies: ['GPT-4o-mini', 'OpenAI API', 'MongoDB', 'Real-time Processing', 'Educational Data'],
        achievements: [
          'Laid groundwork for scalable educator-facing AI tools',
          'Real-time processing of complex educational data queries',
          'Seamless integration with existing special education workflows',
          'Advanced natural language understanding for education-specific terminology'
        ]
      }
    ],
    teamwork: 'Worked in a fast-paced startup environment, collaborating with special education teachers, product designers, and the founding team. Regularly presented technical solutions to stakeholders and incorporated user feedback into product development.',
    impact: 'Directly improved the daily lives of special education teachers and their students by automating time-intensive tasks and providing personalized learning materials.',
    skills: ['AI/ML', 'OpenAI APIs', 'MongoDB', 'Educational Technology', 'Startup Environment', 'User-Centered Design'],
    companyInfo: {
      focus: 'Special Education Technology',
      mission: 'Empowering special education teachers with AI-powered tools that save time and improve student outcomes.'
    }
  },
  {
    id: 'stanford-hai',
    company: 'Stanford Institute for Human-Centered AI',
    role: 'Undergraduate Research Assistant',
    location: 'Palo Alto, CA',
    period: 'June 2024 – August 2024',
    status: 'completed',
    type: 'Research & Development',
    description: 'Conducted cutting-edge research on AI in education, focusing on accessibility and Universal Design for Learning principles.',
    keyProjects: [
      {
        name: 'KAI AI Co-pilot Research',
        description: 'Researched and developed KAI, an AI co-pilot platform specifically designed to support students with learning differences through adaptive scaffolding strategies.',
        technologies: ['AI Research', 'Universal Design for Learning', 'Accessibility Tech', 'User Research'],
        achievements: [
          'Developed adaptive scaffolding strategies for diverse learning needs',
          'Implemented Universal Design for Learning (UDL) features',
          'Reduced interface clutter to improve accessibility',
          'Created research foundation for subsequent product development'
        ]
      },
      {
        name: 'Multi-School Testing Program',
        description: 'Designed and executed comprehensive testing of KAI across 5 different schools, collecting behavioral data on student-AI interaction patterns.',
        technologies: ['User Research', 'Data Collection', 'Behavioral Analysis', 'Educational Research'],
        achievements: [
          'Successfully tested AI platform across 5 diverse school environments',
          'Collected comprehensive behavioral data on student-AI interactions',
          'Implemented classification pipeline to identify learning profiles',
          'Improved front-end reliability through data-driven UI refinements'
        ]
      }
    ],
    teamwork: 'Collaborated with Stanford PhD researchers, faculty members, and K-12 educators to bridge the gap between academic research and practical educational applications. Participated in weekly research meetings and presented findings to interdisciplinary teams.',
    impact: 'Research directly informed the development of more inclusive AI educational tools and contributed to Stanford\'s broader mission of human-centered AI development.',
    skills: ['AI Research', 'Educational Psychology', 'User Experience Research', 'Data Analysis', 'Academic Collaboration'],
    companyInfo: {
      focus: 'Human-Centered AI Research',
      mission: 'Advancing AI research that benefits humanity, with particular focus on education and accessibility.'
    },
    researchConnection: 'This research position directly informed my subsequent software engineering work at Stanford SAL, where I applied research insights to build production educational technology systems.'
  }
]


export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-ink-800">
      <section className="border-b border-ink-200 px-6 pb-12 pt-10 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
            Dated entries
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ink-800 dark:text-cream-50 sm:text-5xl">
            Experience
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-500 dark:text-cream-300">
            From research to production — building AI systems that impact education at Stanford and beyond.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          {workExperience.map((experience) => (
            <article
              key={experience.id}
              className="border border-ink-200 bg-cream-50 dark:border-ink-600 dark:bg-ink-900"
            >
              <header className="border-b border-ink-200 px-5 py-5 dark:border-ink-600">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-2xl text-ink-800 dark:text-cream-100">
                      {experience.role}
                    </h2>
                    <p className="mt-1 text-crimson-500">{experience.company}</p>
                  </div>
                  <div className="text-right font-mono text-xs uppercase tracking-wider text-ink-400">
                    <p>{experience.period}</p>
                    <p className="mt-1">{experience.location}</p>
                  </div>
                </div>
                <p className="mt-4 text-ink-600 dark:text-cream-200">{experience.description}</p>
              </header>

              <div className="space-y-6 px-5 py-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-crimson-500">
                    Key projects
                  </h3>
                  <div className="mt-4 space-y-5">
                    {experience.keyProjects.map((project) => (
                      <div key={project.name} className="border-l-2 border-ink-200 pl-4 dark:border-ink-600">
                        <h4 className="font-serif text-lg text-ink-800 dark:text-cream-100">
                          {project.name}
                        </h4>
                        <p className="mt-1 text-sm text-ink-500 dark:text-cream-300">
                          {project.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="border border-ink-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-500 dark:border-ink-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="mt-3 space-y-1">
                          {project.achievements.map((item) => (
                            <li key={item} className="text-sm text-ink-600 dark:text-cream-200">
                              — {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 border-t border-ink-200 pt-5 dark:border-ink-600 md:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-ink-400">Teamwork</h3>
                    <p className="mt-2 text-sm text-ink-600 dark:text-cream-200">{experience.teamwork}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-ink-400">Impact</h3>
                    <p className="mt-2 text-sm text-ink-600 dark:text-cream-200">{experience.impact}</p>
                  </div>
                </div>

                {'researchConnection' in experience && experience.researchConnection && (
                  <p className="annotation">{experience.researchConnection}</p>
                )}

                <div className="flex flex-wrap gap-2 border-t border-ink-200 pt-4 dark:border-ink-600">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-crimson-500/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-crimson-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">
            Want to work together?
          </h2>
          <p className="text-ink-500 dark:text-cream-300">
            Open to Fall 2026 internships and new grad roles for 2027.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Get in touch</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
