import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlatformIdentity from './components/PlatformIdentity'
import Sectors from './components/Sectors'
import Products from './components/Products'
import Architecture from './components/Architecture'

import CTA from './components/CTA'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <PlatformIdentity />
        <Sectors />
        <Products />
        <Architecture />

        <CTA />
      </main>
      <Footer />
    </div>
  )
}
