import { projects } from '@/data/projects'
import { TechBadge } from '@/components/TechBadge'
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
    color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700'
  },
  {
    name: 'Backend & APIs',
    description: 'Server architecture and data processing',
    techs: ['FastAPI', 'Next.js', 'Node.js', 'Express.js', 'RESTful APIs'],
    color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700'
  },
  {
    name: 'Databases & Storage',
    description: 'Data persistence and management',
    techs: ['PostgreSQL', 'MongoDB', 'Vector Databases', 'Redis Caching'],
    color: 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-700'
  },
  {
    name: 'Cloud & Infrastructure',
    description: 'Deployment and scalability',
    techs: ['Docker', 'Railway', 'Render.com', 'Vercel', 'AWS', 'CDN'],
    color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-700'
  },
  {
    name: 'Frontend & UI',
    description: 'User interfaces and experiences',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    color: 'bg-pink-100 dark:bg-pink-900/30 border-pink-200 dark:border-pink-700'
  },
  {
    name: 'External APIs & Services',
    description: 'Third-party integrations',
    techs: ['Twilio', 'ElevenLabs', 'Auth0', 'Payment Processing', 'SMS APIs'],
    color: 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700'
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Technical <span className="gradient-text">Deep Dive</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Architecture diagrams, code snippets, and infrastructure notes from building 
            production AI systems. Everything from voice processing pipelines to multi-agent orchestration.
          </p>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technology Stack Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg border-2 ${category.color}`}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600"
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

      {/* Architecture Highlights */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            System Architecture Highlights
          </h2>
          
          <div className="space-y-12">
            {architectureHighlights.map((arch, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                          {arch.project}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {arch.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {arch.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {arch.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Architecture diagram */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Data Flow</h4>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-dashed border-gray-300 dark:border-gray-600">
                      <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
                        {arch.diagram.trim()}
                      </pre>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Simplified architecture diagram - full technical specifications available on request
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippets */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Code Examples
          </h2>
          
          <div className="space-y-8">
            {codeSnippets.map((snippet, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {snippet.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {snippet.language}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100 dark:text-gray-300">
                      <code>{snippet.code.trim()}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    This is a simplified example. Full implementation includes error handling, logging, and production optimizations.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Metrics */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Performance Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-500 mb-2">&lt; 200ms</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">AutoSlate Response</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Voice-to-voice latency</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-500 mb-2">99.9%</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">System Uptime</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Across all projects</div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-500 mb-2">3x</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">Faster Onboarding</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">DocuSynth AI impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Philosophy */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Development Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Production-First Mindset</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Every project is built with real users in mind. From error handling and monitoring 
                to scalability and security, I prioritize production readiness from day one.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Iterative Improvement</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I believe in shipping early, gathering feedback, and continuously improving. 
                Each project has gone through multiple iterations based on user feedback.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 italic">
              "Good software is not about the complexity of the code, but about solving real problems elegantly. 
              Every line of code should serve a purpose, and every system should be maintainable by others."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Want More Technical Details?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I love diving deep into technical architecture, discussing trade-offs, and sharing lessons learned. 
            Let's chat about the nitty-gritty details!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              <span>Technical Discussion</span>
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible">
              View Project Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
