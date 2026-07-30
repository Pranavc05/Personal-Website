export interface Project {
  id: string
  title: string
  subtitle: string
  oneLiner: string
  description: string
  problem: string
  solution: string
  role: string
  techStack: string[]
  impact: string[]
  keyFeatures: string[]
  challenges: string[]
  demoUrl?: string
  githubUrl?: string
  loomEmbedId?: string
  youtubeId?: string
  videoFileName?: string
  metrics: {
    label: string
    value: string
  }[]
}

export const projects: Project[] = [
  {
    id: 'kai',
    title: 'KAI',
    subtitle: 'AI Reading Platform',
    oneLiner: 'AI-powered reading comprehension platform serving 1,200+ students and 50 teachers across 10 districts (plus a school in Dubai).',
    description: 'KAI delivers adaptive reading practice, AI-evaluated feedback, and a real-time teacher dashboard. I was a core engineer building the analytics backend, caching layer, and the React/Redux dashboard that educators rely on daily.',
    problem: 'Teachers lack time for personalized assessment; students reading below grade level need immediate, adaptive feedback.',
    solution: 'Built an end-to-end system: GPT-4-evaluated responses, cached metrics APIs, batch jobs, and an interactive dashboard that surfaces strengths, weaknesses, and trends in real time.',
    role: 'Core engineer — built teacher dashboard, analytics APIs, caching, and QA for production rollouts.',
    techStack: [
      'React 18',
      'Redux',
      'Material-UI',
      'Vite',
      'Flask',
      'Azure Cosmos DB',
      'Redis',
      'OpenAI GPT-4',
      'Azure Monitor',
      'Playwright'
    ],
    impact: [
      'Serves 1,200+ students, 50 teachers across 10 districts plus a school in Dubai',
      'Dashboard loads 10–100x faster via cache-first metrics APIs',
      'Resolved 15+ production blockers before district rollouts',
      '99.5% observed uptime during live classroom usage'
    ],
    keyFeatures: [
      'Real-time teacher dashboard with focus-skill computation and timelines',
      'AI-evaluated student responses with strengths/weaknesses summaries',
      'Caching + batch jobs for org/class/student metrics at scale',
      'Tutorial center with role-based access and video content',
      'Robust loading/state management preventing UI deadlocks'
    ],
    challenges: [
      'Designed cache-first analytics with Redis + daily batch recompute',
      'Fixed CORS/proxy and loading deadlocks across dashboard flows',
      'QA’d cross-browser/device and triaged live classroom issues in production'
    ],
    metrics: [
      { label: 'Students', value: '1,200+' },
      { label: 'Teachers', value: '50+' },
      { label: 'Bay Area Districts', value: '10+' },
      { label: 'School in Dubai', value: '1' },
      { label: 'Uptime', value: '99.5%' },
      { label: 'API Speedup', value: '10–100x' }
    ],
    youtubeId: 'qYmZIkwEkoQ',
    demoUrl: 'https://youtu.be/qYmZIkwEkoQ',
  },
  {
    id: 'paws',
    title: 'PAWS (Peer-Assisted Writing Strategies)',
    subtitle: 'AI Peer Writing Tutor',
    oneLiner: 'AI peer handwriting coach for kindergarteners that teaches lowercase letters through I Do / We Do / You Do, with Claude vision scoring and spoken feedback.',
    description: 'PAWS is an AI-assisted handwriting coaching web MVP for ages 5–6 who are just learning lowercase letter formation. Built in collaboration with Georgia State University and Stanford HAI and funded by the U.S. Department of Education, it replaces a human peer tutor with Buddy—an AI coach that demonstrates, scaffolds, and evaluates handwriting in real time through animation, audio, and visual feedback rather than dense text.',
    problem: 'Kindergarten students often cannot read independently, so text-heavy handwriting apps fail them. Human peer tutoring does not scale, and early writers need patient, multimodal coaching with kindergarten-appropriate leniency for shaky strokes—plus clear fails for wrong letters, giant sizing, and letters far off the lines.',
    solution: 'Digitized the evidence-informed Peer-Assisted Writing Strategies model into a gradual-release flow: I Do (stroke-by-stroke demo), We Do (demo fades for active recall), and You Do (independent practice). Claude vision scores redrawn strokes with letter-specific rubrics; ElevenLabs narrates kid-facing cues; adaptive scaffolding escalates hints and can demote back to earlier phases.',
    role: 'Applied AI Engineer — collaborated with another Applied AI Engineer, three Stanford HAI researchers, and Georgia State University faculty on instructional flow, drawing capture, Claude vision scoring, and multimodal feedback.',
    techStack: [
      'React',
      'TypeScript',
      'TanStack Start/Router',
      'Vite',
      'Tailwind CSS',
      'SVG Canvas',
      'Claude Vision',
      'ElevenLabs',
    ],
    impact: [
      'Proved the full instructional loop—I Do, We Do, You Do—with adaptive scaffolding and phase demotion',
      'Built Claude vision scoring path with kindergarten-teacher-lenient rubrics and geometric fallback',
      'Delivered multimodal, non-reading-dependent feedback via Buddy moods, icons, chimes, and ElevenLabs narration',
      'Laid the product path from browser web MVP toward a future iPad app with Apple Pencil and PencilKit',
    ],
    keyFeatures: [
      'Buddy mascot coaches with animation, spoken audio, and icon feedback for placement, size, shape, or success',
      'SVG pointer-capture canvas with topline, midline, and baseline guides on ruled kindergarten paper',
      'Letter practice for a, b, c, o, and t with stroke redraw → clean PNG → Claude vision evaluation',
      'Structured scoring issues with kid-facing spoken cues (including dual cues) and hard placement gates',
      'Hidden teacher ?dev=1 panel for scores/scorer metadata and configurable You Do repetition targets',
    ],
    challenges: [
      'Balancing kindergarten-appropriate leniency with clear fails for wrong letters and extreme placement/size errors',
      'Designing active-recall We Do practice so demos fade instead of becoming permanent tracing ghosts',
      'Falling back to geometric scoring when vision scoring is unavailable while keeping feedback consistent',
    ],
    metrics: [
      { label: 'Status', value: 'Web MVP' },
      { label: 'Letters', value: 'a b c o t' },
      { label: 'Funding', value: 'U.S. DoE' },
      { label: 'Partners', value: 'GSU + Stanford HAI' },
      { label: 'Scoring', value: 'Claude Vision' },
      { label: 'Audio', value: 'ElevenLabs' },
    ],
  },
  {
    id: 'dataforge',
    title: 'DataForge',
    subtitle: 'AI Data Platform',
    oneLiner: 'Enterprise AI-powered data warehouse orchestration platform combining Snowflake, Databricks, and Palantir capabilities.',
    description: 'DataForge is a next-generation, AI-powered data warehouse orchestration platform that demonstrates mastery of advanced data engineering, artificial intelligence, and enterprise software architecture. It autonomously optimizes queries, manages schema evolution, and processes real-time streams at Fortune 500 scale.',
    problem: 'Enterprise data systems suffer from query performance bottlenecks costing millions, schema evolution nightmares that break systems, cloud costs spiraling into six-figures monthly, and data quality issues leading to catastrophic business decisions.',
    solution: 'Built an autonomous data intelligence platform with AI agents that continuously monitor, analyze, and optimize entire data infrastructures - like having a team of senior database engineers and data scientists working 24/7.',
    role: 'Lead architect & AI engineer — designed multi-agent system, real-time streaming, and ML models.',
    techStack: [
      'Python 3.9+',
      'FastAPI',
      'PostgreSQL 15',
      'OpenAI GPT-4',
      'LangChain',
      'Apache Kafka',
      'Redis',
      'Scikit-learn',
      'Docker',
      'JWT Auth'
    ],
    impact: [
      '67% average query performance improvement via AI',
      '30-50% cloud data warehouse cost reduction',
      '10,000+ events per second real-time processing',
      '99.9% uptime with automated monitoring'
    ],
    keyFeatures: [
      'AI agents for autonomous query optimization using GPT-4',
      'Intelligent schema evolution with impact prediction',
      'Real-time cost optimization engine with ML forecasting',
      'Advanced streaming architecture with Kafka & Redis',
      'Enterprise security with 6-level RBAC and JWT',
      'Multiple demo formats: Web, Terminal, Jupyter'
    ],
    challenges: [
      'Implemented sophisticated AI agent orchestration with LangChain for complex reasoning workflows',
      'Built real-time streaming system processing 10k+ events/sec with exactly-once semantics',
      'Designed enterprise-grade security with hierarchical permissions and audit logging'
    ],
    metrics: [
      { label: 'Query Performance', value: '67% ↑' },
      { label: 'Cost Reduction', value: '30-50%' },
      { label: 'Events/Second', value: '10K+' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'AI Agents', value: '3' }
    ],
    loomEmbedId: 'placeholder-dataforge-loom-id',
    videoFileName: 'dataforge-demo.mp4'
  },
  {
    id: 'autoslate',
    title: 'AutoSlate',
    subtitle: 'AI Phone Agent',
    oneLiner: 'AI phone agent automating reservations, Q&A, and fraud prevention for restaurants.',
    description: 'AutoSlate represents a revolutionary approach to restaurant communication technology, addressing a critical industry pain point where restaurants lose approximately 30% of potential customers due to missed calls during peak hours.',
    problem: 'Restaurants lose 30% of potential customers due to missed calls during peak hours, resulting in significant revenue loss and poor customer experience.',
    solution: 'Built a sophisticated, production-ready AI system that delivers genuinely human-like conversations while maintaining enterprise-level security, scalability, and reliability.',
    role: 'Lead engineer — designed backend, telephony integration, and fraud models.',
    techStack: [
      'FastAPI',
      'Twilio', 
      'OpenAI GPT-3.5',
      'ElevenLabs',
      'PostgreSQL',
      'Docker',
      'Railway'
    ],
    impact: [
      'Got to test it out in 2 cafes — 95%+ call answer rate',
      '40% increase in reservations'
    ],
    keyFeatures: [
      '50+ language support with instant detection',
      'Advanced fraud protection and spam prevention', 
      'Sub-200ms response times',
      '99.9% uptime with automatic failover',
      'SMS integration with TCPA compliance',
      'Real-time analytics dashboard'
    ],
    challenges: [
      'Handled real-world noise by adding re-prompt logic, confidence thresholds, and a fallback human escalation queue.',
      'Built sophisticated rate limiting and behavioral analysis for spam detection',
      'Implemented graceful degradation for partial service failures'
    ],
    metrics: [
      { label: 'Cafes Tested', value: '2' },
      { label: 'Call Answer Rate', value: '95%+' },
      { label: 'Response Time', value: '<200ms' },
      { label: 'Languages Supported', value: '50+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    loomEmbedId: 'placeholder-autoslate-loom-id',
    videoFileName: 'autoslate-demo.mp4'
  },
  {
    id: 'docusynth',
    title: 'DocuSynth AI',
    subtitle: 'Multi-Agent Documentation',
    oneLiner: 'Multi-agent system that auto-generates documentation and accelerates onboarding.',
    description: 'DocuSynth AI is a revolutionary multi-agent code intelligence system built for the NVIDIA AI Hackathon that addresses one of the most critical pain points in modern software development: automated, intelligent code documentation generation.',
    problem: 'Developers spend countless hours writing and maintaining documentation, leading to outdated docs and poor codebase understanding for new team members.',
    solution: 'Built a sophisticated three-agent AI system that analyzes code structure, external dependencies, and cross-references to generate comprehensive, context-aware documentation.',
    role: 'Architect & AI engineer — implemented agent orchestration and AST parsing.',
    techStack: [
      'NVIDIA NeMo',
      'LangChain', 
      'Next.js',
      'FastAPI',
      'Tree-sitter',
      'PyTorch',
      'TypeScript'
    ],
    impact: [
      'Runner-up at NVIDIA Hackathon',
      'Reduced onboarding time by ~3x in demos',
      '90% user satisfaction'
    ],
    keyFeatures: [
      'Three specialized AI agents for comprehensive analysis',
      'Real-time code parsing with Tree-sitter',
      'Cross-reference mapping and dependency visualization',
      'Multiple programming language support',
      'Beautiful, modern UI with progress tracking',
      'Export to multiple documentation formats'
    ],
    challenges: [
      'Preserving cross-file context via a ContextManagerAgent that tracks state and usage patterns.',
      'Coordinated multi-agent workflows with LangChain orchestration',
      'Optimized GPU memory usage with 8-bit quantization'
    ],
    metrics: [
      { label: 'Hackathon Ranking', value: 'Runner-up' },
      { label: 'Onboarding Speed', value: '3x Faster' },
      { label: 'User Satisfaction', value: '90%' },
      { label: 'Processing Speed', value: 'Real-time' }
    ],
    githubUrl: 'https://github.com/Pranavc05/DocuSynth-AI',
    loomEmbedId: 'placeholder-docusynth-loom-id',
    videoFileName: 'docusynth-demo.mp4'
  },
  {
    id: 'spedtree',
    title: 'Worksheet Generator',
    subtitle: 'AI Education Tool',
    oneLiner: 'Generates accessible, pedagogically-sound worksheets with images for special education teachers.',
    description: 'The Worksheet Generator represents a groundbreaking fusion of artificial intelligence and special education technology, designed to revolutionize how educators create personalized learning materials for students with diverse learning needs.',
    problem: 'Special education teachers face unprecedented challenges in creating individualized learning materials that cater to students with varying cognitive abilities and learning disabilities.',
    solution: 'Built a full-stack MERN application that leverages OpenAI models to generate contextually relevant educational content with accompanying visual aids, specifically designed for special education environments.',
    role: 'Full-stack lead — prompt engineering, DALL-E image pipeline, rate-limiting.',
    techStack: [
      'MERN Stack',
      'GPT-4o-mini',
      'DALL-E 3',
      'MongoDB',
      'Auth0 (multi-tenant)',
      'Render.com'
    ],
    impact: [
      'Piloted in schools — reduced prep time from hours to minutes',
      '100-image monthly cap implemented'
    ],
    keyFeatures: [
      'AI-powered question generation across 11 categories',
      'DALL-E 3 image generation for visual learning',
      '100 images per user per month sustainability model',
      'Print-optimized worksheet formatting',
      'Special education focused content filtering',
      'Clean, intuitive interface designed for educators'
    ],
    challenges: [
      'Enforced pedagogical quality by setting temperature to 0 for consistent, educational-appropriate responses',
      'Implemented fair usage limits with MongoDB tracking',
      'Optimized for special education needs with careful prompt engineering'
    ],
    metrics: [
      { label: 'Prep Time Reduction', value: '90%+' },
      { label: 'Educational Categories', value: '11' },
      { label: 'Monthly Image Limit', value: '100' },
      { label: 'Target Audience', value: 'Special Ed' }
    ],
    loomEmbedId: '9745df06102940ddbf2a59b9364a82d2',
    videoFileName: 'spedtree-demo.mp4'
  }
]

export const timelineData = [
  {
    year: '2026',
    title: 'PAWS Web MVP',
    description: 'Built PAWS, an AI peer handwriting coach for kindergarteners, in collaboration with Georgia State University and Stanford HAI (U.S. Department of Education funded).',
    type: 'project' as const
  },
  {
    year: '2025',
    title: 'KAI Multi-District Launch',
    description: 'Shipped teacher analytics and caching layer for KAI, now serving 1,200+ students and 50 teachers across 10 districts and a school in Dubai.',
    type: 'project' as const
  },
  {
    year: '2023',
    title: 'Indiana University',
    description: 'Started Computer Science with Informatics specialization. Joined Alpha Kappa Psi business fraternity.',
    type: 'education' as const
  },
  {
    year: '2024',
    title: 'Associate Director of Technology',
    description: 'Promoted to leadership role in Alpha Kappa Psi, managing tech initiatives and digital transformation.',
    type: 'leadership' as const
  },
  {
    year: '2024',
    title: 'AutoSlate Launch',
    description: 'Built and deployed AI phone agent for restaurants. Got to test it out in 2 cafes.',
    type: 'project' as const
  },
  {
    year: '2024',
    title: 'NVIDIA Hackathon',
    description: 'Runner-up at NVIDIA AI Agent Hackathon with DocuSynth AI multi-agent documentation system.',
    type: 'achievement' as const
  },
  {
    year: '2024',
    title: 'Worksheet Generator Launch',
    description: 'Launched AI worksheet generator for special education, piloted in multiple schools.',
    type: 'project' as const
  }
]

export const personalInfo = {
  name: 'Pranav Chandrasekhar',
  title: 'Software/AI Engineer',
  location: 'Indiana University',
  email: 'pranav2005.chandrasekhar@gmail.com',
  bio: `I'm Pranav Chandrasekhar — a CS student at Indiana University who builds AI-first products for real users. I design and ship full-stack systems (FastAPI, Node, Next.js) that solve production problems: automating restaurant calls, generating docs for codebases, and creating accessible educational materials.
  
  Beyond code, I'm motivated by a mission: building technology that's inclusive, practical, and trustworthy. My long-term goal is to work at the intersection of AI, education, and accessibility, creating tools that empower people and close gaps in opportunity.
  
  When I'm not coding, you can usually find me playing basketball or playing with my two Siberian Huskies!`,
  
  oneLiners: [
    'AI-driven product builder — shipped systems that cut teacher prep time by 90% and automate live restaurant calls.',
    'I build scalable backend systems, AI products, and polished front ends that deliver measurable impact.',
    'CS student at Indiana University building production AI systems that solve real-world problems.'
  ]
}
