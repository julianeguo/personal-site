export default function Footer() {
  return (
    <footer className="px-6 md:px-14 lg:px-20 py-10 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="font-serif italic text-2xl text-ink">Jinyi Guo</p>

        <div className="flex items-center gap-4 text-[1.5rem] font-serif italic">
          <a
            href="https://github.com/julianeguo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent-coral transition-colors"
          >
            GitHub
          </a>
          <span className="text-ink">·</span>
          <a
            href="mailto:julianeguo2028@u.northwestern.edu"
            className="text-ink hover:text-accent-coral transition-colors"
          >
            Email
          </a>
          <span className="text-ink">·</span>
          <a
            href="https://www.linkedin.com/in/juliane-guo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent-coral transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-faint font-sans">© 2026 Jinyi Guo</p>
      </div>
    </footer>
  )
}
