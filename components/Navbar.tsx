'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
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
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Venda Experience"
            className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
          />
         
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-sa-gold ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:0768850084" className={`flex items-center gap-2 font-medium transition-colors ${
            isScrolled ? 'text-sa-green' : 'text-white'
          }`}>
            
           
          </a>
          <a
            href="https://wa.me/2768850084"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 text-sm"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden text-2xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="bg-white border-t py-4 px-4">
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 font-medium py-2 hover:text-sa-gold transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-3 border-t">
              <a
                href="https://wa.me/2768850084"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
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