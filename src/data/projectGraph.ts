export type GraphNode = {
  id: string
  label: string
  subtitle: string
  href: string
  x: number
  y: number
}

export type GraphEdge = {
  from: string
  to: string
  theme: string
}

export type ResolvedEdge = GraphEdge & {
  x1: number
  y1: number
  x2: number
  y2: number
  midX: number
  midY: number
}

export const graphNodes: GraphNode[] = [
  { id: 'kai', label: 'KAI', subtitle: 'AI Reading Platform', href: '/projects/kai', x: 18, y: 28 },
  { id: 'paws', label: 'PAWS', subtitle: 'AI Peer Writing Tutor', href: '/projects/paws', x: 42, y: 18 },
  { id: 'spedtree', label: 'Worksheet Gen', subtitle: 'Special Education Tool', href: '/projects/spedtree', x: 68, y: 30 },
  { id: 'autoslate', label: 'AutoSlate', subtitle: 'AI Phone Agent', href: '/projects/autoslate', x: 82, y: 58 },
  { id: 'docusynth', label: 'DocuSynth', subtitle: 'Multi-Agent Docs', href: '/projects/docusynth', x: 55, y: 72 },
  { id: 'dataforge', label: 'DataForge', subtitle: 'AI Data Platform', href: '/projects/dataforge', x: 28, y: 68 },
]

export const graphEdges: GraphEdge[] = [
  { from: 'kai', to: 'paws', theme: 'education AI' },
  { from: 'paws', to: 'spedtree', theme: 'classroom tools' },
  { from: 'kai', to: 'spedtree', theme: 'learning support' },
  { from: 'paws', to: 'docusynth', theme: 'LLM evaluation' },
  { from: 'autoslate', to: 'docusynth', theme: 'agents' },
  { from: 'docusynth', to: 'dataforge', theme: 'orchestration' },
  { from: 'autoslate', to: 'kai', theme: 'voice & feedback' },
  { from: 'dataforge', to: 'kai', theme: 'dashboards' },
]

export const nodeById: Record<string, GraphNode> = Object.fromEntries(
  graphNodes.map((node) => [node.id, node])
)

export const resolvedEdges: ResolvedEdge[] = graphEdges.map((edge) => {
  const from = nodeById[edge.from]
  const to = nodeById[edge.to]
  return {
    ...edge,
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    midX: (from.x + to.x) / 2,
    midY: (from.y + to.y) / 2,
  }
})

export const themesByNodeId: Record<string, string[]> = graphNodes.reduce(
  (acc, node) => {
    acc[node.id] = graphEdges
      .filter((edge) => edge.from === node.id || edge.to === node.id)
      .map((edge) => edge.theme)
    return acc
  },
  {} as Record<string, string[]>
)
