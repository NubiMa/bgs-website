import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Credibility from './components/Credibility'
import About from './components/About'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Credibility />
      <About />
      <Activities />
      <Gallery />
      {/* <Stats /> */}
      <CTA />
      <Footer />
    </main>
  )
}
