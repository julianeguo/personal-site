import { projects, research } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
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
        <span className="font-serif text-ink whitespace-nowrap leading-none" style={{ fontSize: '1.9rem' }}>
          Research
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {research.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* See more on GitHub */}
      <div className="text-center">
        <a
          href="https://github.com/julianeguo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-ink leading-none underline-offset-4 decoration-1 hover:underline"
          style={{ fontSize: '1.9rem' }}
        >
          See more on GitHub
        </a>
      </div>
    </section>
  )
}
