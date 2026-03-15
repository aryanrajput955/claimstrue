import Hero from './components/hero'
import Services from './components/services'
import Features from './components/features'
import About from './components/about'
import ProcessSection from './components/stepper'
import Contact from './components/contact'
import HeroMain from './components/newcomponents/HeroMain'
import HeroStats from './components/newcomponents/HeroStats'
import HeroTrust from './components/newcomponents/HeroTrust'
import HeroPricing from './components/newcomponents/HeroPricing'
import HeroFAQ from './components/newcomponents/HeroFAQ'
import HowItWorks from './components/newcomponents/HowItWorks'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroMain />
      <HeroTrust />
      <HeroStats />
      <HowItWorks />
      <HeroPricing />
      <HeroFAQ />
    </div>
  )
}