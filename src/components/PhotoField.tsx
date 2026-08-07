'use client'

import { useState } from 'react'

type PhotoFieldProps = {
  src?: string
  alt: string
  caption: string
  className?: string
}

export function PhotoField({ src, alt, caption, className = '' }: PhotoFieldProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className={`photo-field ${className}`}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
          <div className="h-px w-12 bg-crimson-500" />
          <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
            Photo field
          </p>
          <p className="font-serif text-sm text-ink-500 dark:text-cream-300">{caption}</p>
        </div>
      )}
    </div>
  )
}
