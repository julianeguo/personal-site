import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()
  const [revealed, setRevealed] = useState(false)

  const Wrapper = project.repo ? 'a' : 'div'
  const wrapperProps = project.repo
    ? { href: project.repo, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  // On touch devices (no hover), the first tap reveals the description overlay
  // instead of immediately following the link. A second tap then navigates.
  const handleClick = e => {
    const noHover =
      typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
    if (noHover && !revealed) {
      e.preventDefault()
      setRevealed(true)
    }
  }

  return (
    <Wrapper
      ref={ref}
      onClick={handleClick}
      className="group relative border border-border bg-white hover:shadow-lg block"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms, box-shadow 0.25s ease`,
      }}
      {...wrapperProps}
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
          style={{ objectPosition: project.imagePosition || 'center' }}
          loading="lazy"
        />
        {/* Hover (desktop) / tap (touch) overlay */}
        <div
          className={`absolute inset-0 transition-all duration-400 flex items-center justify-center p-4 sm:p-5 overflow-y-auto ${
            revealed ? 'bg-black/70' : 'bg-black/0 group-hover:bg-black/70'
          }`}
        >
          <p
            className={`font-serif text-white leading-tight text-center transition-opacity duration-400 delay-75 whitespace-pre-line ${
              revealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            style={{ fontSize: 'clamp(0.95rem, 2.6vw, 1.9rem)' }}
          >
            {project.description}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-3 pt-2">
        <h3 className={`font-serif text-ink leading-tight mb-2 underline-offset-4 decoration-1 ${project.repo ? 'group-hover:underline' : ''}`} style={{ fontSize: 'clamp(1.35rem, 4.5vw, 1.9rem)' }}>
          {project.name}
        </h3>

        {/* One-line summary */}
        {project.tagline && (
          <p className="text-sm text-muted leading-snug mb-3">
            {project.tagline}
          </p>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-sm px-2 py-0.5 border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </Wrapper>
  )
}
