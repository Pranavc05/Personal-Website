'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { personalInfo } from '@/data/projects'

export function Hero() {
  const [currentOneLiner, setCurrentOneLiner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOneLiner((prev) => (prev + 1) % personalInfo.oneLiners.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text font-serif">Pranav Chandrasekhar</span>
          </h1>
          
          {/* Animated one-liners */}
          <div className="h-20 flex items-center justify-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl animate-fade-in">
              {personalInfo.oneLiners[currentOneLiner]}
            </p>
          </div>
        </div>

        {/* Brief bio */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            I'm a CS student at <span className="font-semibold text-primary-500">Indiana University</span> building 
            production AI systems that solve real-world problems. My projects — AutoSlate, DocuSynth, and SpedTree — 
            show my drive to take ideas from prototype to production.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/projects"
            className="btn-primary group"
          >
            <span>View My Work</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible"
          >
            Get in Touch
          </Link>
        </div>

        {/* Quick project previews */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="group cursor-pointer">
            <Link href="/projects/autoslate" className="block p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
              <div className="font-semibold text-primary-500">AutoSlate</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI Phone Agent</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">Live at 4+ restaurants</div>
            </Link>
          </div>
          
          <div className="group cursor-pointer">
            <Link href="/projects/docusynth" className="block p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
              <div className="font-semibold text-primary-500">DocuSynth</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Multi-Agent Docs</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">NVIDIA Hackathon Runner-up</div>
            </Link>
          </div>
          
          <div className="group cursor-pointer">
            <Link href="/projects/spedtree" className="block p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
              <div className="font-semibold text-primary-500">SpedTree</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI Worksheet Generator</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">Piloted in schools</div>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
