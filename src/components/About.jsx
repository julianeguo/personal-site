import { useInView } from '../hooks/useInView'

function TapeCard({ src, caption, tapeRotate = '-2deg', className = '' }) {
  return (
    <div
      className={`relative bg-white p-2.5 pb-7 shadow-md cursor-default ${className}`}
      style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-10px)'
        e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0px)'
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'
      }}
    >
      <div
        className="absolute left-1/2 rounded-sm pointer-events-none"
        style={{
          top: '-10px',
          width: '52px',
          height: '18px',
          background: 'rgba(225, 215, 190, 0.65)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
          transform: `translateX(-50%) rotate(${tapeRotate})`,
        }}
      />
      <img src={src} alt={caption} className="block object-cover" style={{ width: 'clamp(135px, 38vw, 190px)', aspectRatio: '190 / 270' }} />
      <p className="text-center mt-2 font-handwritten text-muted whitespace-pre-line" style={{ fontSize: '1.25rem' }}>
        {caption}
      </p>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="px-6 md:px-14 lg:px-20 pt-20 pb-12">
      <div
        ref={ref}
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="flex-1 min-w-0 max-w-2xl">
          <p
            className="font-serif italic text-ink leading-[1.15] mb-10"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            About me
          </p>

          <p className="text-muted text-lg leading-relaxed mb-5">
            <strong>Hey! 你好!</strong> I'm Juliane, a software engineer and creative. Born and raised in Beijing, moved to Ontario,
            now majoring in Computer Science & pursuing a Segal Design Certificate at Northwestern University.
          </p>

          <p className="text-muted text-lg leading-relaxed mb-5">
            I have always been drawn to creating things, whether it's art, music, writing, or code. (check out my works here! I'm also the lead singer
            and co-founder of <a href="https://www.instagram.com/aplatypus_band/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300 transition-colors">@aplatypus_band</a>, and I was a classically trained violinist for 12 years.) I looove it when
            creative expression and human-centered thinking meet the rigorous logic of engineering, from music-playing robots to AI-powered software.
          </p>

          <p className="text-muted text-lg leading-relaxed mb-5">
            Right now I'm doing RL research at <a href="https://hand-erc.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300 transition-colors">HAND ERC</a>, serving as the Vice President of Northwestern's Robotics Club,
            and heading into an internship at Asahi Kasei Bioprocess America. Previously, I worked on the dashboard for
            Northwestern Formula Racing's first functional EV.
          </p>

          <p className="text-muted text-lg leading-relaxed mb-5">
            Always open to chatting about literally anything! Book a meeting with me here [link], or reach me at [email]. :-D
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-5 flex-shrink-0 items-start w-full lg:w-auto mt-2 lg:mt-0 lg:items-start lg:pt-16">
          <TapeCard src="/cali.png" caption="me in cali" tapeRotate="-3deg" />
          <TapeCard src="/band.JPG" caption={"my band live\n@ Northwestern"} tapeRotate="2deg" className="lg:mt-14" />
        </div>
      </div>
    </section>
  )
}
