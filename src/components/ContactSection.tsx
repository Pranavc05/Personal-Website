'use client'

import { personalInfo } from '@/data/projects'

export function ContactSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
          Let's Build Something Together
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities, collaborations, and conversations about AI, 
          education, and building products that make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{personalInfo.email}</p>
            <p className="text-sm text-primary-500 group-hover:text-primary-600 transition-colors">
              I'll get back to you within 24 hours →
            </p>
          </a>

          {/* Schedule Call */}
          <a
            href={`mailto:${personalInfo.email}?subject=Let's%20Connect&body=Hi%20Pranav,%0A%0AI'd%20love%20to%20chat%20about...`}
            className="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4a6 6 0 1012 0 6 6 0 00-12 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Schedule a Chat</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Coffee chat or quick call</p>
            <p className="text-sm text-primary-500 group-hover:text-primary-600 transition-colors">
              Let's find a time that works →
            </p>
          </a>
        </div>

        {/* Additional info */}
        <div className="text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Based in <span className="font-semibold text-gray-900 dark:text-white">{personalInfo.location}</span>
          </p>
          
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Available for internship opportunities</span>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Fun fact:</span> When I'm not coding, you can find me playing basketball 
            or hanging out with my two Siberian Huskies! 🏀 🐕
          </p>
        </div>
      </div>
    </section>
  )
}
