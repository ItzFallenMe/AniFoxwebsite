import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Architecture from '@/components/Architecture'
import Modules from '@/components/Modules'
import FAQ from '@/components/FAQ'
import Download from '@/components/Download'
import Disclaimer from '@/components/Disclaimer'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Features />
      <Architecture />
      <Modules />
      <FAQ />
      <Download />
      <Disclaimer />
      <Footer />
    </main>
  )
}