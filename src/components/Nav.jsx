// Order: Home → About → Work  (Work & About swapped per request)
const links = [
  { label: '01. Home',  href: '#',      bg: '#FFB800', color: '#1C1917' },
  { label: '02. About', href: '#about', bg: '#E85D3C', color: '#ffffff' },
  { label: '03. Work',  href: '#work',  bg: '#2A9D5C', color: '#ffffff' },
]

export default function Nav() {
  return (
    <nav className="fixed top-5 right-5 z-50 flex gap-2.5">
      {links.map(({ label, href, bg, color }) => (
        <a
          key={label}
          href={href}
          className="px-5 py-2 rounded-full text-base font-medium transition-opacity hover:opacity-75"
          style={{ backgroundColor: bg, color }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
