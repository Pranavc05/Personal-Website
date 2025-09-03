'use client'

import { useState } from 'react'

interface LoomEmbedProps {
  embedId?: string
  videoFileName?: string
  title: string
}

export function LoomEmbed({ embedId, videoFileName, title }: LoomEmbedProps) {
  const [showVideo, setShowVideo] = useState(false)

  // If we have a real Loom embed ID, show the iframe
  if (embedId && !embedId.startsWith('placeholder-')) {
    return (
      <div className="video-container">
        <iframe
          src={`https://www.loom.com/embed/${embedId}`}
          frameBorder="0"
          allowFullScreen
          title={title}
          className="rounded-lg"
        />
      </div>
    )
  }

  // If we have a video file name, show video player option
  if (videoFileName && showVideo) {
    return (
      <div className="video-container">
        <video
          controls
          className="rounded-lg"
          poster={`/images/${videoFileName.replace('.mp4', '-poster.jpg')}`}
        >
          <source src={`/videos/${videoFileName}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  // Default placeholder with action buttons
  return (
    <div className="video-container bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 p-8">
          <div className="w-20 h-20 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Demo video coming soon! I'm currently recording high-quality demos for all projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {videoFileName && (
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Placeholder Demo
              </button>
            )}
            
            <a
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=Demo%20Request&body=Hi%20Pranav,%0A%0AI'd%20love%20to%20see%20a%20demo%20of%20your%20projects!"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
