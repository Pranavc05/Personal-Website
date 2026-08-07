'use client'

import { useState } from 'react'

interface LoomEmbedProps {
  embedId?: string
  youtubeId?: string
  videoFileName?: string
  title: string
}

export function LoomEmbed({ embedId, youtubeId, videoFileName, title }: LoomEmbedProps) {
  const [showVideo, setShowVideo] = useState(false)

  // YouTube embed
  if (youtubeId) {
    return (
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full absolute top-0 left-0"
          title={title}
        ></iframe>
      </div>
    )
  }

  // If we have a real Loom embed ID, show the iframe
  if (embedId && !embedId.startsWith('placeholder-')) {
    return (
      <div className="video-container">
        <iframe
          src={`https://www.loom.com/embed/${embedId}`}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full absolute top-0 left-0"
          title={title}
        ></iframe>
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
          poster={`/images/${videoFileName.replace(/\.(mp4|mov)$/, '-poster.jpg')}`}
        >
          <source src={`/videos/${videoFileName}`} type={videoFileName.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  // Default placeholder with action buttons
  return (
    <div className="video-container border border-ink-200 bg-cream-50 dark:border-ink-600 dark:bg-ink-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-6 p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center border border-crimson-500 text-crimson-500">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl text-ink-800 dark:text-cream-100">{title}</h3>
            <p className="text-sm text-ink-500 dark:text-cream-300">
              Demo video coming soon — recording high-quality walkthroughs.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            {videoFileName && (
              <button onClick={() => setShowVideo(true)} className="btn-primary text-sm">
                <span>Watch demo video</span>
              </button>
            )}
            <a
              href="mailto:pranav2005.chandrasekhar@gmail.com?subject=Demo%20Request"
              className="btn-secondary text-sm"
            >
              Request live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
