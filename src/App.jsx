import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-cream min-h-screen font-sans">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
