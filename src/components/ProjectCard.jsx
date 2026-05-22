import { useInView } from '../hooks/useInView'

export default function ProjectCard({ project, index, wip = false }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className="group relative border border-border bg-white hover:shadow-lg"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms, box-shadow 0.25s ease`,
      }}
    >
      {/* Tape accent — sits above the card top edge, same as About cards */}
      <div
        className="absolute right-6 z-10 pointer-events-none"
        style={{
          top: '-9px',
          width: '44px',
          height: '18px',
          background: 'rgba(225, 215, 190, 0.65)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
          transform: 'rotate(1deg)',
        }}
      />

      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {wip && (
          <span className="absolute top-3 left-3 text-xs px-2.5 py-0.5 bg-white/90 border border-border text-muted font-handwritten">
            in progress
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-3">
        <p className="font-handwritten text-muted mb-1" style={{ fontSize: '1rem' }}>
          {project.id}
        </p>
        <h3 className="font-serif text-xl text-ink mb-2 leading-snug">
          {project.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 text-sm font-medium text-ink">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-coral transition-colors"
            >
              Repo ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-coral transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
