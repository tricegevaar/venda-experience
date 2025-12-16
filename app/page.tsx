import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Deals from '../components/Deals'
import PaymentMethods from '../components/PaymentMethods'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Deals />
      <PaymentMethods />
      <Footer />
    </main>
  )
}