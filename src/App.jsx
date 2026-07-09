import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Sectors from './components/Sectors'
import Platform from './components/Platform'
import Products from './components/Products'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#F4F2EA' }}>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Sectors />
        <Platform />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
