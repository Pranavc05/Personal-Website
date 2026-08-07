import Link from 'next/link'

export const metadata = {
  title: 'Tech Deep Dive | Pranav Chandrasekhar',
  description: 'Architecture diagrams, code snippets, and technical infrastructure details from AutoSlate, DocuSynth, and SpedTree projects.',
  openGraph: {
    title: 'Tech Deep Dive | Pranav Chandrasekhar',
    description: 'Architecture diagrams, code snippets, and technical infrastructure details from AutoSlate, DocuSynth, and SpedTree projects.',
  },
}

const techCategories = [
  {
    name: 'AI & Machine Learning',
    description: 'Models, APIs, and intelligent systems',
    techs: ['OpenAI GPT-3.5', 'GPT-4o-mini', 'DALL-E 3', 'NVIDIA NeMo', 'LangChain', 'PyTorch'],
    color: 'border-ink-200 dark:border-ink-600 bg-cream-50 dark:bg-ink-900'
  },
  {
    name: 'Backend & APIs',
    description: 'Server architecture and data processing',
    techs: ['FastAPI', 'Next.js', 'Node.js', 'Express.js', 'RESTful APIs'],
    color: 'border-ink-200 dark:border-ink-600 bg-cream-50 dark:bg-ink-900'
  },
  {
    name: 'Databases & Storage',
    description: 'Data persistence and management',
    techs: ['PostgreSQL', 'MongoDB', 'Vector Databases', 'Redis Caching'],
    color: 'border-ink-200 dark:border-ink-600 bg-cream-50 dark:bg-ink-900'
  },
  {
    name: 'Cloud & Infrastructure',
    description: 'Deployment and scalability',
    techs: ['Docker', 'Railway', 'Render.com', 'Vercel', 'AWS', 'CDN'],
    color: 'border-ink-200 dark:border-ink-600 bg-cream-50 dark:bg-ink-900'
  },
  {
    name: 'Frontend & UI',
    description: 'User interfaces and experiences',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    color: 'border-ink-200 dark:border-ink-600 bg-cream-50 dark:bg-ink-900'
  },
  {
    name: 'External APIs & Services',
    description: 'Third-party integrations',
    techs: ['Twilio', 'ElevenLabs', 'Auth0', 'Payment Processing', 'SMS APIs'],
    color: 'border-ink-200 dark:border-ink-600 bg-cream-50 dark:bg-ink-900'
  }
]

const architectureHighlights = [
  {
    project: 'AutoSlate',
    title: 'Real-time Voice Processing Pipeline',
    description: 'Sub-200ms response time with Twilio WebRTC, speech recognition, and AI generation',
    diagram: `
    Twilio Call → Speech-to-Text → 
    GPT Analysis → ElevenLabs TTS → 
    Response Streaming → Call Continuation
    `,
    keyFeatures: [
      'Concurrent call handling with async/await patterns',
      'Graceful degradation with fallback systems',
      'Real-time fraud detection and rate limiting',
      'Multi-language detection and response generation'
    ]
  },
  {
    project: 'DocuSynth',
    title: 'Multi-Agent AI Orchestration',
    description: 'Three specialized agents working together with NVIDIA NeMo and LangChain coordination',
    diagram: `
    Code Upload → AST Parsing → 
    Agent Coordination → Context Aggregation → 
    Documentation Generation → Export
    `,
    keyFeatures: [
      'Tree-sitter parsing for multiple languages',
      'Cross-file context preservation',
      '8-bit quantization for GPU optimization',
      'Real-time processing with progress tracking'
    ]
  },
  {
    project: 'SpedTree',
    title: 'AI Content Generation with Rate Limiting',
    description: 'Sustainable DALL-E 3 integration with MongoDB usage tracking and educational optimization',
    diagram: `
    Teacher Input → Content Validation → 
    GPT Question Generation → DALL-E Image Creation → 
    PDF Assembly → Download
    `,
    keyFeatures: [
      'Temperature 0 for educational consistency',
      'Fair usage model with monthly limits',
      '11 subject categories with appropriate content',
      'Print-optimized worksheet formatting'
    ]
  }
]

const codeSnippets = [
  {
    title: 'AutoSlate: Voice Processing with Error Handling',
    language: 'Python (FastAPI)',
    code: `
async def handle_voice_input(audio_data: bytes, session_id: str):
    try:
        # Speech recognition with confidence scoring
        transcription = await twilio_client.speech_to_text(
            audio_data, confidence_threshold=0.8
        )
        
        if transcription.confidence < 0.8:
            return await handle_low_confidence(session_id)
        
        # AI processing with context
        context = await get_conversation_context(session_id)
        ai_response = await openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": RESTAURANT_PROMPT},
                *context,
                {"role": "user", "content": transcription.text}
            ],
            temperature=0.7
        )
        
        # Voice synthesis
        audio_response = await elevenlabs_client.generate(
            text=ai_response.choices[0].message.content,
            voice="Rachel"
        )
        
        return StreamingResponse(audio_response)
        
    except Exception as e:
        logger.error(f"Voice processing error: {e}")
        return await fallback_response(session_id)
    `
  },
  {
    title: 'DocuSynth: Multi-Agent Coordination',
    language: 'Python (LangChain)',
    code: `
from langchain.agents import AgentExecutor
from langchain.memory import ConversationBufferMemory

class DocumentationOrchestrator:
    def __init__(self):
        self.agents = {
            'internal': InternalDocAgent(),
            'library': LibraryDocAgent(), 
            'context': ContextManagerAgent()
        }
        
    async def generate_docs(self, codebase_path: str):
        # Parse codebase
        parsed_files = await self.parse_with_treesitter(codebase_path)
        
        # Coordinate agents
        tasks = [
            self.agents['internal'].analyze_structure(parsed_files),
            self.agents['library'].fetch_dependencies(parsed_files),
            self.agents['context'].map_relationships(parsed_files)
        ]
        
        # Aggregate results
        results = await asyncio.gather(*tasks)
        
        # Generate final documentation
        return await self.synthesize_documentation(results)
        
    async def parse_with_treesitter(self, path: str):
        parser = tree_sitter.Parser()
        parser.set_language(tree_sitter_languages.get_language("python"))
        
        # Process files concurrently
        return await asyncio.gather(*[
            self.parse_file(file_path, parser) 
            for file_path in self.get_source_files(path)
        ])
    `
  },
  {
    title: 'SpedTree: Rate-Limited Image Generation',
    language: 'JavaScript (Node.js)',
    code: `
const rateLimit = require('express-rate-limit');

// MongoDB usage tracking
const trackImageUsage = async (userId, month) => {
    const usage = await UserImageCount.findOneAndUpdate(
        { userId, month },
        { $inc: { count: 1 } },
        { upsert: true, new: true }
    );
    return usage.count;
};

// DALL-E integration with limits
app.post('/generate-worksheet', async (req, res) => {
    const { category, customPrompt, includeImages } = req.body;
    const userId = req.user.id;
    const currentMonth = new Date().toISOString().slice(0, 7);
    
    try {
        // Generate questions with GPT-4o-mini
        const questions = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{
                role: "system",
                content: EDUCATIONAL_SYSTEM_PROMPT
            }, {
                role: "user", 
                content: \`Generate 3 \${category} questions: \${customPrompt}\`
            }],
            temperature: 0 // Consistent educational content
        });
        
        let images = [];
        if (includeImages) {
            const currentUsage = await trackImageUsage(userId, currentMonth);
            if (currentUsage > 100) {
                return res.status(429).json({ 
                    error: 'Monthly image limit exceeded' 
                });
            }
            
            // Generate contextual images
            images = await Promise.all(
                questions.map(q => 
                    openai.images.generate({
                        model: "dall-e-3",
                        prompt: \`Educational illustration for: \${q}\`,
                        size: "1024x1024",
                        quality: "standard"
                    })
                )
            );
        }
        
        res.json({ questions: questions.choices, images });
        
    } catch (error) {
        console.error('Worksheet generation error:', error);
        res.status(500).json({ error: 'Generation failed' });
    }
});
    `
  }
]


export default function TechPage() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-ink-800">
      <section className="border-b border-ink-200 px-6 pb-12 pt-10 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">Spec sheets</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ink-800 dark:text-cream-50 sm:text-5xl">
            Tech deep dive
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-500 dark:text-cream-300">
            Architecture notes and code from production AI systems — voice pipelines, multi-agent orchestration, and classroom tools.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl text-ink-800 dark:text-cream-100">Stack categories</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((category) => (
              <div key={category.name} className={`border p-5 ${category.color}`}>
                <h3 className="font-serif text-lg text-ink-800 dark:text-cream-100">{category.name}</h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-cream-300">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="border border-ink-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-500 dark:border-ink-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-12 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl text-ink-800 dark:text-cream-100">Architecture highlights</h2>
          <div className="mt-6 space-y-6">
            {architectureHighlights.map((item) => (
              <div key={item.project} className="border border-ink-200 bg-cream-50 dark:border-ink-600 dark:bg-ink-900">
                <div className="border-b border-ink-200 px-5 py-4 dark:border-ink-600">
                  <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">{item.project}</p>
                  <h3 className="mt-1 font-serif text-xl text-ink-800 dark:text-cream-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 dark:text-cream-300">{item.description}</p>
                </div>
                <pre className="overflow-x-auto border-b border-ink-200 bg-ink-800 px-5 py-4 font-mono text-xs text-cream-100 dark:border-ink-600">
{item.diagram}
                </pre>
                <ul className="space-y-2 px-5 py-4">
                  {item.keyFeatures.map((feature) => (
                    <li key={feature} className="text-sm text-ink-600 dark:text-cream-200">— {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-12 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl text-ink-800 dark:text-cream-100">Code notes</h2>
          <div className="mt-6 space-y-8">
            {codeSnippets.map((snippet) => (
              <div key={snippet.title} className="border border-ink-200 dark:border-ink-600">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-200 px-5 py-3 dark:border-ink-600">
                  <h3 className="font-serif text-lg text-ink-800 dark:text-cream-100">{snippet.title}</h3>
                  <span className="font-mono text-xs text-crimson-500">{snippet.language}</span>
                </div>
                <pre className="overflow-x-auto bg-ink-800 p-5 font-mono text-xs leading-relaxed text-cream-100">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="font-serif text-3xl text-ink-800 dark:text-cream-100">Want the full walkthrough?</h2>
          <Link href="/contact" className="btn-primary">
            <span>Get in touch</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
