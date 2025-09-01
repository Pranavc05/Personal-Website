import { personalInfo } from '@/data/projects'
import Link from 'next/link'

export const metadata = {
  title: 'Contact | Pranav Chandrasekhar',
  description: 'Get in touch with Pranav Chandrasekhar to discuss AI projects, collaboration opportunities, or internships.',
  openGraph: {
    title: 'Contact | Pranav Chandrasekhar',
    description: 'Get in touch with Pranav Chandrasekhar to discuss AI projects, collaboration opportunities, or internships.',
  },
}

const contactReasons = [
  {
    icon: '💼',
    title: 'Internship Opportunities',
    description: 'Looking for summer 2025 internships in AI/ML, full-stack development, or product engineering.',
    action: 'Discuss Opportunities'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Interested in working together on AI projects, hackathons, or open source contributions.',
    action: 'Start Collaborating'
  },
  {
    icon: '🎓',
    title: 'Mentorship & Advice',
    description: 'Happy to chat with fellow students about CS, AI development, or building production systems.',
    action: 'Schedule a Chat'
  },
  {
    icon: '📋',
    title: 'Project Demos',
    description: 'Want to see AutoSlate, DocuSynth, or SpedTree in action? I can walk you through them.',
    action: 'Request Demo'
  },
  {
    icon: '💡',
    title: 'General Discussion',
    description: 'Questions about my projects, tech stack choices, or just want to talk about AI and education.',
    action: 'Let\'s Talk'
  },
  {
    icon: '🏢',
    title: 'Speaking & Events',
    description: 'Available for tech talks, hackathon judging, or student organization presentations.',
    action: 'Book Speaking'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just chat about AI, education technology, and building things that matter.
          </p>

          {/* Availability status */}
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800 dark:text-green-200">
              Available for Summer 2025 internships
            </span>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Primary contact - Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                Email Me Directly
              </h3>
              <p className="text-primary-600 dark:text-primary-400 text-center mb-3 font-medium">
                {personalInfo.email}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                I typically respond within 24 hours. Best for detailed discussions, opportunities, and project inquiries.
              </p>
              <div className="mt-4 text-center">
                <span className="text-primary-500 group-hover:text-primary-600 transition-colors text-sm font-medium">
                  Send email →
                </span>
              </div>
            </a>

            {/* Quick chat scheduling */}
            <a
              href={`mailto:${personalInfo.email}?subject=Let's%20Schedule%20a%20Chat&body=Hi%20Pranav,%0A%0AI'd%20love%20to%20schedule%20a%20quick%20chat%20to%20discuss:%0A%0A-%20[Your%20topic%20here]%0A%0AMy%20availability:%0A-%20[Your%20preferred%20times]%0A%0ALooking%20forward%20to%20connecting!%0A%0ABest,%0A[Your%20name]`}
              className="group p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4a6 6 0 1012 0 6 6 0 00-12 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                Schedule a Call
              </h3>
              <p className="text-purple-600 dark:text-purple-400 text-center mb-3 font-medium">
                15-30 min chat
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                Perfect for quick introductions, project discussions, or exploring collaboration opportunities.
              </p>
              <div className="mt-4 text-center">
                <span className="text-purple-500 group-hover:text-purple-600 transition-colors text-sm font-medium">
                  Schedule time →
                </span>
              </div>
            </a>
          </div>

          {/* Contact reasons grid */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What Would You Like to Discuss?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactReasons.map((reason, index) => (
                <a
                  key={index}
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(reason.action)} - ${encodeURIComponent(reason.title)}&body=Hi%20Pranav,%0A%0AI'm%20reaching%20out%20regarding%20${encodeURIComponent(reason.title.toLowerCase())}%0A%0A[Please%20share%20more%20details%20about%20what%20you'd%20like%20to%20discuss]%0A%0ALooking%20forward%20to%20connecting!%0A%0ABest,%0A[Your%20name]`}
                  className="group p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600 transition-all"
                >
                  <div className="text-center space-y-4">
                    <div className="text-3xl mx-auto">{reason.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{reason.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                    <div className="text-primary-500 group-hover:text-primary-600 transition-colors text-sm font-medium">
                      {reason.action} →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response time and location */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  I typically respond to emails within <strong>24 hours</strong>, often much sooner. 
                  For urgent matters, mention "urgent" in the subject line.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location & Time Zone</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Based in <strong>{personalInfo.location}</strong> (EST). 
                  I'm flexible with scheduling calls across different time zones.
                </p>
              </div>
            </div>

            {/* Fun personal touch */}
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Fun fact:</span> I love connecting with fellow developers, students, and anyone passionate about using technology for good. 
                Don't hesitate to reach out - I enjoy meeting new people and learning about different perspectives! 
                And if you're ever in Bloomington and want to shoot some hoops, let me know! 🏀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative ways to connect */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Other Ways to Connect
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <Link
              href="/projects"
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
            >
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Explore My Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get a detailed look at AutoSlate, DocuSynth, and SpedTree to understand my technical approach.
              </p>
              <div className="mt-4 text-primary-500 group-hover:text-primary-600 transition-colors text-sm font-medium">
                View Projects →
              </div>
            </Link>

            <a
              href="/resume.pdf"
              download
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
            >
              <div className="text-2xl mb-3">📄</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Download Resume</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get my latest resume with detailed experience, skills, and project information.
              </p>
              <div className="mt-4 text-primary-500 group-hover:text-primary-600 transition-colors text-sm font-medium">
                Download PDF →
              </div>
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-300">
            Looking forward to connecting with you! Whether it's about internships, projects, or just a friendly chat about tech.
          </p>
        </div>
      </section>
    </div>
  )
}
