import { useState, useEffect, useCallback, useRef } from 'react'

const STOPS = [
  { label: '01. Home',     id: null,    href: '#' },
  { label: '02. About',    id: 'about', href: '#about' },
  { label: '03. Projects', id: 'work',  href: '#work' },
]

const TRACK_Y    = 30
const DOT_R      = 4
const SCROLL_SPD = 1.0

function IconPrev() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1.5" y="1.5" width="2.5" height="13" rx="1" />
      <path d="M13.5 1.5 L5 8 L13.5 14.5 Z" />
    </svg>
  )
}
function IconNext() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2.5 1.5 L11 8 L2.5 14.5 Z" />
      <rect x="12" y="1.5" width="2.5" height="13" rx="1" />
    </svg>
  )
}
function IconPlay() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M4 2 L15.5 9 L4 16 Z" />
    </svg>
  )
}
function IconPause() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <rect x="2.5" y="2" width="4.5" height="14" rx="1.5" />
      <rect x="11" y="2" width="4.5" height="14" rx="1.5" />
    </svg>
  )
}

// Always reads live offsetTop values — never stale
function getSectionTops() {
  return STOPS.map(({ id }) => {
    if (!id) return 0
    const el = document.getElementById(id)
    return el ? el.offsetTop : 0
  })
}

export default function MusicNav() {
  const [fillPct, setFillPct]       = useState(0)
  const [stopPcts, setStopPcts]     = useState([0, 40, 75])
  const [sectionIdx, setSectionIdx] = useState(0)   // which section is in view
  const [isPlaying, setIsPlaying]   = useState(false)

  const navRef       = useRef(null)
  const isPlayingRef = useRef(false)
  const rafRef       = useRef(null)
  const expectedYRef = useRef(0)

  useEffect(() => { isPlayingRef.current = isPlaying }, [isPlaying])

  // Update bar stop positions (visual only — doesn't affect skip logic)
  const remeasure = useCallback(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    if (maxScroll <= 0) return
    const ys = getSectionTops()
    setStopPcts(ys.map(y => Math.min(96, (y / maxScroll) * 100)))
  }, [])

  useEffect(() => {
    const t = setTimeout(remeasure, 150)
    window.addEventListener('resize', remeasure)
    window.addEventListener('load', remeasure)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', remeasure)
      window.removeEventListener('load', remeasure)
    }
  }, [remeasure])

  const stopPlay = useCallback(() => {
    isPlayingRef.current = false
    setIsPlaying(false)
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
  }, [])

  const startPlay = useCallback(() => {
    const frame = () => {
      if (!isPlayingRef.current) return
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY >= maxScroll - 1) { isPlayingRef.current = false; setIsPlaying(false); return }
      const nextY = window.scrollY + SCROLL_SPD
      expectedYRef.current = nextY
      window.scrollTo(0, nextY)
      rafRef.current = requestAnimationFrame(frame)
    }
    rafRef.current = requestAnimationFrame(frame)
  }, [])

  const togglePlay = () => {
    if (isPlaying) stopPlay()
    else { isPlayingRef.current = true; setIsPlaying(true); startPlay() }
  }

  useEffect(() => {
    let raf = null
    const onScroll = () => {
      if (isPlayingRef.current && Math.abs(window.scrollY - expectedYRef.current) > SCROLL_SPD * 8) {
        stopPlay()
      }
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const scrollY   = window.scrollY
        const navH      = navRef.current?.offsetHeight ?? 0

        setFillPct(maxScroll > 0 ? Math.min(100, (scrollY / maxScroll) * 100) : 0)

        // Visible content starts at scrollY + navH (below the sticky bar).
        // We're in section i if sectionTop <= that visible start.
        const ys = getSectionTops()
        let idx = 0
        for (let i = 0; i < ys.length; i++) {
          if (ys[i] <= scrollY + navH + 5) idx = i
        }
        setSectionIdx(idx)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [stopPlay])

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }, [])

  // Skip to prev/next section. Reads offsetTop fresh every time.
  const skip = (dir) => {
    stopPlay()
    const navH = navRef.current?.offsetHeight ?? 0
    const ys   = getSectionTops()
    console.log('[skip]', dir, '| sectionIdx:', sectionIdx, '| navH:', navH, '| ys:', ys, '| scrollY:', window.scrollY)
    const targetIdx = dir === 'forward' ? sectionIdx + 1 : sectionIdx - 1
    if (targetIdx < 0 || targetIdx >= STOPS.length) {
      console.log('[skip] out of range, doing nothing')
      return
    }
    const rawY = ys[targetIdx]
    const targetY = rawY > 0 ? Math.max(0, rawY - navH) : 0
    console.log('[skip] scrolling to', targetY, '(rawY:', rawY, '- navH:', navH, ')')
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  // Section label clicks use the same nav-aware scroll as skip
  const go = (href) => {
    const i    = STOPS.findIndex(s => s.href === href)
    const navH = navRef.current?.offsetHeight ?? 0
    const ys   = getSectionTops()
    const rawY = ys[i] ?? 0
    window.scrollTo({ top: rawY > 0 ? Math.max(0, rawY - navH) : 0, behavior: 'smooth' })
  }

  const canBack = sectionIdx > 0
  const canFwd  = sectionIdx < STOPS.length - 1

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-cream/96 backdrop-blur-sm border-b border-border">
      <div className="px-6 md:px-14 lg:px-20 pt-3 pb-2">

        {/* Transport controls */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <button
            onClick={() => skip('back')}
            disabled={!canBack}
            className="p-2 rounded-lg text-muted hover:text-ink hover:bg-border/60 disabled:opacity-25 transition-colors"
            aria-label="Previous section"
          >
            <IconPrev />
          </button>

          <button
            onClick={togglePlay}
            className="p-2.5 rounded-lg text-ink hover:text-accent-coral hover:bg-border/60 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>

          <button
            onClick={() => skip('forward')}
            disabled={!canFwd}
            className="p-2 rounded-lg text-muted hover:text-ink hover:bg-border/60 disabled:opacity-25 transition-colors"
            aria-label="Next section"
          >
            <IconNext />
          </button>
        </div>

        {/* Progress bar */}
        <div className="relative" style={{ height: 44 }}>

          <div className="absolute left-0 right-0 bg-border" style={{ top: TRACK_Y, height: 1 }} />

          <div
            className="absolute left-0 bg-ink"
            style={{ top: TRACK_Y, height: 1, width: `${fillPct}%` }}
          />

          <div
            className="absolute rounded-full bg-ink"
            style={{
              width: DOT_R * 2, height: DOT_R * 2,
              top: TRACK_Y - DOT_R, left: `${fillPct}%`,
              transform: 'translateX(-50%)', pointerEvents: 'none',
            }}
          />

          {STOPS.map(({ label, href }, i) => (
            <button
              key={label}
              onClick={() => go(href)}
              className="absolute group"
              style={{ left: `${stopPcts[i]}%`, top: 0, height: 44, transform: 'translateX(-50%)' }}
              aria-label={label}
            >
              <span
                className="absolute text-xs font-sans text-faint group-hover:text-ink transition-colors whitespace-nowrap"
                style={{ bottom: 44 - TRACK_Y + 7, left: '50%', transform: 'translateX(-50%)' }}
              >
                {label}
              </span>
              <span
                className="absolute rounded-full bg-cream border border-faint group-hover:bg-ink group-hover:border-ink transition-colors"
                style={{ width: 7, height: 7, top: TRACK_Y - 3.5, left: '50%', transform: 'translateX(-50%)' }}
              />
            </button>
          ))}

        </div>
      </div>
    </div>
  )
}
