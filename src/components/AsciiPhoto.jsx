import { useState, useEffect } from 'react'
import { PHOTO_ASCII } from '../data/ascii'

const CHARS_PER_FRAME = 14
const FRAME_MS = 16

export default function AsciiPhoto() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const delay = setTimeout(() => {
      const id = setInterval(() => {
        setCount(c => {
          const next = c + CHARS_PER_FRAME
          if (next >= PHOTO_ASCII.length) {
            clearInterval(id)
            return PHOTO_ASCII.length
          }
          return next
        })
      }, FRAME_MS)
      return () => clearInterval(id)
    }, 400)
    return () => clearTimeout(delay)
  }, [])

  const visible = PHOTO_ASCII.slice(0, count)
  const ghost   = PHOTO_ASCII.slice(count).replace(/[^\n]/g, ' ')

  return (
    <pre
      className="font-mono text-[0.47rem] leading-[1.18] text-ink/70 select-none"
      aria-label="ASCII portrait"
    >
      {visible + ghost}
    </pre>
  )
}
