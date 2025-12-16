'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Deals', id: 'deals' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-transparent py-3 sm:py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')}>
          <img
            src="/logo.png"
            alt="Venda Experience"
            className={`transition-all duration-300 ${isScrolled ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-14 h-14 sm:w-16 sm:h-16'}`}
          />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`font-medium text-sm transition-colors duration-300 hover:text-sa-gold ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/27768850084"
            className="bg-green-500 hover:bg-green-600 text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 text-sm"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden text-xl sm:text-2xl transition-colors p-1 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t py-3 sm:py-4 px-4 shadow-lg">
          <ul className="space-y-1 sm:space-y-2">
            {navLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 font-medium py-2 sm:py-2.5 px-2 hover:text-sa-gold hover:bg-gray-50 rounded-lg transition-colors text-sm sm:text-base"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2 sm:pt-3 border-t mt-2">
              <a
                href="https://wa.me/27768850084"
                className="bg-green-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar