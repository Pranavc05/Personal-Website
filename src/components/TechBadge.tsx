interface TechBadgeProps {
  tech: string
}

// Tech stack to icon mapping
const techIcons: Record<string, string> = {
  'FastAPI': '🚀',
  'Twilio': '📞',
  'OpenAI GPT-3.5': '🤖',
  'ElevenLabs': '🎤',
  'PostgreSQL': '🐘',
  'Docker': '🐳',
  'Railway': '🚂',
  'NVIDIA NeMo': '🧠',
  'LangChain': '🔗',
  'Next.js': '⚛️',
  'TypeScript': '📘',
  'PyTorch': '🔥',
  'Tree-sitter': '🌳',
  'MERN Stack': '📚',
  'GPT-4o-mini': '🤖',
  'DALL-E 3': '🎨',
  'MongoDB': '🍃',
  'Auth0': '🔐',
  'Render.com': '☁️',
}

const techColors: Record<string, string> = {
  'FastAPI': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'Twilio': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  'OpenAI GPT-3.5': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  'ElevenLabs': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'PostgreSQL': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'Docker': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'Railway': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  'NVIDIA NeMo': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'LangChain': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
  'TypeScript': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'PyTorch': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  'Tree-sitter': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'MERN Stack': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'GPT-4o-mini': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  'DALL-E 3': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400',
  'MongoDB': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'Auth0': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  'Render.com': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
}

export function TechBadge({ tech }: TechBadgeProps) {
  const icon = techIcons[tech] || '⚙️'
  const colors = techColors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'

  return (
    <div className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition-all hover:scale-105 ${colors}`}>
      <span className="text-base">{icon}</span>
      <span>{tech}</span>
    </div>
  )
}
