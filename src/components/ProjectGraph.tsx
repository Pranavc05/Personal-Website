'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import {
  graphNodes,
  nodeById,
  resolvedEdges,
  themesByNodeId,
  type GraphNode,
} from '@/data/projectGraph'

export function ProjectGraph() {
  const [selectedId, setSelectedId] = useState('kai')
  const [hoveredEdge, setHoveredEdge] = useState<number | null>(null)

  const selected = nodeById[selectedId] ?? graphNodes[0]
  const connectedThemes = themesByNodeId[selected.id] ?? []

  const selectNode = useCallback((id: string) => {
    setSelectedId(id)
  }, [])

  return (
    <section className="border-t border-ink-200 px-6 py-16 dark:border-ink-600 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-crimson-500">
            Experiment map
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-800 dark:text-cream-100 sm:text-4xl">
            How the work connects
          </h2>
          <p className="mt-3 text-ink-500 dark:text-cream-300">
            Click a node to open its case study. Edges are shared themes — education AI, agents, voice, dashboards — not another card grid.
          </p>
        </div>

        {/* Desktop graph — hidden on small screens to avoid unused interaction cost */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-[1fr_280px]">
          <div className="relative border border-ink-200 bg-cream-50 dark:border-ink-600 dark:bg-ink-900">
            <svg
              viewBox="0 0 100 100"
              className="h-[420px] w-full"
              role="img"
              aria-label="Interactive project graph"
            >
              {resolvedEdges.map((edge, index) => {
                const active =
                  hoveredEdge === index ||
                  selectedId === edge.from ||
                  selectedId === edge.to
                return (
                  <g
                    key={`${edge.from}-${edge.to}`}
                    onMouseEnter={() => setHoveredEdge(index)}
                    onMouseLeave={() => setHoveredEdge(null)}
                  >
                    <line
                      x1={edge.x1}
                      y1={edge.y1}
                      x2={edge.x2}
                      y2={edge.y2}
                      stroke={active ? '#990000' : 'currentColor'}
                      strokeWidth={active ? 0.45 : 0.2}
                      className="text-ink-300 dark:text-ink-500"
                    />
                    {hoveredEdge === index && (
                      <text
                        x={edge.midX}
                        y={edge.midY - 1.5}
                        textAnchor="middle"
                        className="fill-crimson-500"
                        style={{ fontSize: '2.2px', fontFamily: 'var(--font-plex-mono), monospace' }}
                      >
                        {edge.theme}
                      </text>
                    )}
                  </g>
                )
              })}

              {graphNodes.map((node) => (
                <GraphNodeButton
                  key={node.id}
                  node={node}
                  selected={selectedId === node.id}
                  onSelect={selectNode}
                />
              ))}
            </svg>
          </div>

          <aside className="border border-ink-200 bg-cream-50 p-5 dark:border-ink-600 dark:bg-ink-900">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
              Margin note
            </p>
            <h3 className="mt-2 font-serif text-2xl text-ink-800 dark:text-cream-100">
              {selected.label}
            </h3>
            <p className="mt-1 text-sm text-crimson-500">{selected.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-cream-300">
              Themes: {connectedThemes.join(' · ') || '—'}
            </p>
            <Link href={selected.href} className="btn-primary mt-6 w-full text-sm">
              <span>Open case study</span>
            </Link>
          </aside>
        </div>

        {/* Mobile linked index */}
        <div className="border border-ink-200 dark:border-ink-600 lg:hidden">
          {graphNodes.map((node) => {
            const themes = themesByNodeId[node.id] ?? []
            return (
              <Link
                key={node.id}
                href={node.href}
                className="block border-b border-ink-200 px-4 py-4 last:border-b-0 hover:bg-cream-50 dark:border-ink-600 dark:hover:bg-ink-900"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-ink-800 dark:text-cream-100">
                    {node.label}
                  </h3>
                  <span className="font-mono text-xs text-crimson-500">Open →</span>
                </div>
                <p className="mt-1 text-sm text-ink-500 dark:text-cream-300">{node.subtitle}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <span
                      key={theme}
                      className="border border-ink-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-400 dark:border-ink-500"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GraphNodeButton({
  node,
  selected,
  onSelect,
}: {
  node: GraphNode
  selected: boolean
  onSelect: (id: string) => void
}) {
  return (
    <g
      className="cursor-pointer"
      onClick={() => onSelect(node.id)}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`Select ${node.label}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(node.id)
        }
      }}
    >
      <circle
        cx={node.x}
        cy={node.y}
        r={selected ? 3.2 : 2.4}
        fill={selected ? '#990000' : '#f7f1e6'}
        stroke={selected ? '#990000' : '#1f1d19'}
        strokeWidth={0.35}
        className="dark:fill-ink-800"
      />
      <text
        x={node.x}
        y={node.y + 6}
        textAnchor="middle"
        className="fill-ink-700 dark:fill-cream-100"
        style={{ fontSize: '2.6px', fontFamily: 'var(--font-source-serif), serif', fontWeight: 600 }}
      >
        {node.label}
      </text>
    </g>
  )
}
