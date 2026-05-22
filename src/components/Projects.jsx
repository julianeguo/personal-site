import { useState } from 'react'
import { projects, research, moreProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="work" className="px-6 md:px-14 lg:px-20 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-border" />
      </div>

      <p
        className="font-serif italic text-ink leading-[1.15] mb-10"
        style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
      >
        Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Current research */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-border" />
        <span className="font-serif italic text-muted whitespace-nowrap" style={{ fontSize: '0.95rem' }}>
          current research
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {research.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} wip />
        ))}
      </div>

      {/* See more */}
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full bg-white border border-border flex items-center justify-between px-6 py-4 transition-colors hover:bg-cream"
      >
        <span className="font-serif italic text-ink" style={{ fontSize: '1rem' }}>
          see more
        </span>
        <span
          className="text-muted"
          style={{
            display: 'inline-block',
            transition: 'transform 0.3s ease',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ↓
        </span>
      </button>

      <div
        className="border border-t-0 border-border bg-white overflow-hidden"
        style={{
          maxHeight: expanded ? '400px' : '0px',
          transition: 'max-height 0.35s ease',
        }}
      >
        <ul className="divide-y divide-border px-6">
          {moreProjects.map((p, i) => (
            <li key={i} className="flex items-center justify-between py-3">
              <span className="text-ink text-base">{p.name}</span>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  Repo ↗
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
