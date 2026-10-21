import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Music } from './components/Music'
import { Catalog } from './components/Catalog'
import { Funding } from './components/Funding'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Music />
        <Catalog />
        <Funding />
      </main>
      <Footer />
    </>
  )
}
