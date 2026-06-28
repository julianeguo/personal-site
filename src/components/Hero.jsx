import VinylRecord from './VinylRecord'

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center px-6 md:px-14 lg:px-20 overflow-hidden" style={{ minHeight: 'calc(100vh + 2px)' }}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 w-full">

        {/* Left: Name + tagline + links */}
        <div className="flex-1 min-w-0">
          <h1
            className="font-serif italic text-ink leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)' }}
          >
            Jinyi Guo <span style={{ fontSize: '0.7em' }}>(Juliane)</span>
          </h1>

          <div className="w-full max-w-xl h-px bg-border my-8 md:my-10" />

          <p className="font-sans text-lg md:text-xl text-muted max-w-md leading-relaxed">
            Hey! I'm a software engineer who believes technology should be delightful.
            I build at the intersection of robotics, AI, and human-centered design.
          </p>

          <div className="flex items-center gap-4 mt-10 text-[1.5rem] font-serif italic">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-accent-coral transition-colors"
            >
              GitHub
            </a>
            <span className="text-ink">·</span>
            <a
              href="mailto:you@example.com"
              className="text-ink hover:text-accent-coral transition-colors"
            >
              Email
            </a>
            <span className="text-ink">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-accent-coral transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Vinyl record */}
        <div className="flex justify-center w-full lg:block lg:w-auto flex-shrink-0">
          <VinylRecord imageSrc="/album-cover.png" />
        </div>

      </div>
    </section>
  )
}
