import Hero from './components/Hero'
import MusicNav from './components/MusicNav'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-cream min-h-screen font-sans">
      <Hero />
      <MusicNav />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
