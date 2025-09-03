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
  videoFileName?: string
  metrics: {
    label: string
    value: string
  }[]
}

export const projects: Project[] = [
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
      'Live at 4 restaurants — 95%+ call answer rate',
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
      { label: 'Restaurants Served', value: '4+' },
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
    description: 'Built and deployed AI phone agent for restaurants. Currently serving 4+ active restaurant clients.',
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
  title: 'AI Product Engineer',
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
