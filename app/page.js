import Hero from "../Components/Hero"
import Features from "../Components/Features"
import HowItWorks from "../Components/HowItWorks"
import Benefits from "../Components/Benefits"
import Contact from "../Components/Contact"
import Download from "../Components/download"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Download />
      <Contact />
    </main>
  )
}