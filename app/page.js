import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Credibility from './components/Credibility'
import About from './components/About'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
// import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LazyRender from './components/LazyRender'
import { SectionSkeleton, CharcoalSkeleton, GallerySkeleton } from './components/Skeleton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LazyRender id="credibility" fallback={<CharcoalSkeleton />}><Credibility /></LazyRender>
      <LazyRender id="about" fallback={<SectionSkeleton />}><About /></LazyRender>
      <LazyRender id="activities" fallback={<CharcoalSkeleton />}><Activities /></LazyRender>
      <LazyRender id="gallery" fallback={<GallerySkeleton />}><Gallery /></LazyRender>
      <LazyRender id="contact" fallback={<CharcoalSkeleton />}><CTA /></LazyRender>
      <Footer />
    </main>
  )
}
