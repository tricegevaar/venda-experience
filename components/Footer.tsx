'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Venda Experience" className="w-12 h-12 sm:w-14 sm:h-14" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Venda Experience</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Personal Shopper</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6">
              Your trusted Takealot personal shopper. Free delivery, no hidden fees, just great service.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@vendaexperiencesa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faTiktok} className="text-white text-sm sm:text-base" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-white text-sm sm:text-base" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-sm sm:text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sa-gold text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'How It Works', 'Features', 'Deals'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sa-gold text-sm sm:text-base">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:0768850084" className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-sa-gold text-sm" />
                076 885 0084
              </a>
              <a href="https://wa.me/27768850084" className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 text-sm" />
                WhatsApp Us
              </a>
              <a href="mailto:vendaexperience@gmail.com" className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm break-all">
                <FontAwesomeIcon icon={faEnvelope} className="text-sa-blue text-sm flex-shrink-0" />
                vendaexperience@gmail.com
              </a>
            </div>

            <a
              href="https://wa.me/27768850084"
              className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Start Shopping
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; 2025 Venda Experience. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <FontAwesomeIcon icon={faHeart} className="text-sa-red" /> by{' '}
            <a 
              href="https://nexora-technologiies.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sa-gold hover:text-sa-gold/80 transition-colors underline"
            >
              Nexora Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer