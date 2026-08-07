import { personalPhotos } from '@/data/personalPhotos'
import { PhotoField } from './PhotoField'

const fieldNotes = [
  {
    src: personalPhotos.campus,
    alt: 'With friends on campus at Indiana University',
    caption: 'Campus',
    title: 'Senior, Indiana University',
    body: 'Computer Science with an Informatics focus — building production AI while finishing school.',
  },
  {
    src: personalPhotos.huskies,
    alt: 'Two Siberian Huskies at home',
    caption: 'Huskies',
    title: 'Two Siberian Huskies',
    body: 'Chaos agents at home. Excellent product testers for patience.',
  },
  {
    src: personalPhotos.travel,
    alt: 'Traveling Europe with friends',
    caption: 'Travel',
    title: 'Traveling Europe',
    body: 'Exploring new places with friends — this one is from a trip in Interlaken.',
  },
]

export function FieldNotes() {
  return (
    <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
            Field notes
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-800 dark:text-cream-100">
            Outside the repo
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {fieldNotes.map((note) => (
            <div key={note.title} className="space-y-4">
              <PhotoField
                src={note.src}
                alt={note.alt}
                caption={note.caption}
              />
              <div className="space-y-2">
                <h3 className="font-serif text-lg text-ink-800 dark:text-cream-100">
                  {note.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500 dark:text-cream-300">
                  {note.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
