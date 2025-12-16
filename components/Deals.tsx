'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Deals = () => {
  return (
    <section id="deals" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sa-blue to-slate-900 relative overflow-hidden">
      {/* Background Elements - hidden on mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-sa-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-sa-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-sa-gold text-sa-blue px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6">
              <FontAwesomeIcon icon={faBolt} />
              DAILY DEALS
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-white mb-3 sm:mb-4">
              Exclusive Tech & Local Finds
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto px-2">
              Check our WhatsApp status daily for hot deals on electronics, appliances, and proudly South African products.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 text-center">
                {[
                  { label: 'Tech Specials', desc: 'Latest gadgets' },
                  { label: 'Home Essentials', desc: 'Appliances & more' },
                  { label: 'Local Finds', desc: 'Proudly SA' }
                ].map((item, index) => (
                  <div key={index} className="text-white">
                    <p className="font-bold text-xs sm:text-sm lg:text-lg">{item.label}</p>
                    <p className="text-white/60 text-xs sm:text-sm hidden sm:block">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/27768850084"
              className="inline-flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-base sm:text-xl" />
              View Today&apos;s Deals
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Deals