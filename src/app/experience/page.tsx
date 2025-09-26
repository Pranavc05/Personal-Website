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
    id: 'stanford-sal',
    company: 'Stanford Accelerator for Learning',
    role: 'Software Engineer Intern',
    location: 'Palo Alto, CA',
    period: 'May 2025 – Present',
    status: 'current',
    type: 'Software Engineering',
    description: 'Building next-generation educational technology at Stanford\'s premier learning innovation lab.',
    keyProjects: [
      {
        name: 'Teacher Dashboard Platform',
        description: 'Architected and built a comprehensive teacher dashboard with 15+ interactive features including real-time student progress tracking and automated PDF generation.',
        technologies: ['React', 'Redux', 'TypeScript', 'Material-UI', 'Node.js'],
        achievements: [
          '40% faster teacher workflow through intelligent automation',
          'Analytics platform serving 50+ student metrics',
          '12+ reusable components for scalable development',
          'Redux state management for 8+ complex data types'
        ]
      },
      {
        name: 'AI-Powered Testing System',
        description: 'Pioneered the use of Smol Agent, an AI-based autonomous browser testing tool, to simulate end-to-end user flows through custom prompt engineering.',
        technologies: ['Smol Agent', 'AI Testing', 'Prompt Engineering', 'Browser Automation'],
        achievements: [
          'Enhanced early-stage UX validation with autonomous testing',
          'Reduced manual QA time by automating complex user flows',
          'Custom prompt engineering for realistic user interactions',
          'Improved product reliability before user-facing releases'
        ]
      }
    ],
    teamwork: 'Collaborated closely with Stanford researchers, product managers, and fellow engineers to deliver features that directly impact K-12 education. Led cross-functional discussions on technical architecture and user experience design.',
    impact: 'Contributing to educational technology that reaches thousands of students and teachers across multiple school districts, helping bridge the digital divide in education.',
    skills: ['React/Redux', 'TypeScript', 'AI Testing', 'Product Development', 'Educational Technology', 'Cross-functional Collaboration'],
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From research to production — building AI systems that impact education at Stanford and beyond. 
            Each role has shaped my technical skills and deepened my passion for creating technology that makes a difference.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {workExperience.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline line */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-primary-500 to-primary-300 hidden lg:block" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary-500 rounded-full shadow-lg hidden lg:block">
                  <div className="w-4 h-4 bg-primary-400 rounded-full animate-pulse" />
                </div>

                {/* Content */}
                <div className="lg:ml-16">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 border-b border-primary-200 dark:border-primary-700">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {experience.role}
                            </h3>
                            {experience.status === 'current' && (
                              <span className="px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Current
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                            {experience.company}
                          </h4>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {experience.period}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-500">
                            {experience.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                      {/* Key Projects */}
                      <div className="space-y-8">
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            Key Projects & Achievements
                          </h5>
                          
                          <div className="space-y-6">
                            {experience.keyProjects.map((project, projectIndex) => (
                              <div key={projectIndex} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5">
                                <div className="mb-3">
                                  <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.name}
                                  </h6>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {project.description}
                                  </p>
                                </div>
                                
                                {/* Tech Stack */}
                                <div className="mb-4">
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                      <span
                                        key={tech}
                                        className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Achievements */}
                                <div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {project.achievements.map((achievement, achievementIndex) => (
                                      <div key={achievementIndex} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">
                                          {achievement}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Teamwork & Collaboration */}
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Collaboration & Teamwork
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {experience.teamwork}
                          </p>
                        </div>

                        {/* Impact */}
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Real-World Impact
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {experience.impact}
                          </p>
                        </div>

                        {/* Research Connection (if applicable) */}
                        {experience.researchConnection && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                            <h5 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              Connection to Later Work
                            </h5>
                            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                              {experience.researchConnection}
                            </p>
                          </div>
                        )}

                        {/* Skills Developed */}
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            Skills & Technologies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Growth Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What I've Learned
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Communication & Collaboration
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Working across research teams, startup environments, and academic institutions has taught me to communicate complex technical concepts to diverse audiences — from PhD researchers to elementary school teachers.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Research to Production
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey from research assistant to software engineer has shown me how to bridge the gap between academic innovation and real-world applications that serve users at scale.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  User-Centered Design
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every project has reinforced that the best technology serves real human needs. Whether it's helping teachers save time or making learning more accessible, user impact drives everything I build.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Adaptability & Growth
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From learning new AI frameworks to adapting to different team cultures, each role has pushed me to grow technically and personally while maintaining my passion for educational technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            What's Next?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm excited to bring this blend of research insight, technical skills, and collaborative spirit to my next internship opportunity. Let's build something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              <span>Let's Connect</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible">
              View My Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
