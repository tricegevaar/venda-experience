'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Deals = () => {
  return (
    <section id="deals" className="py-20 bg-gradient-to-br from-sa-blue to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sa-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sa-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-sa-gold text-sa-blue px-4 py-2 rounded-full font-bold text-sm mb-6">
              <FontAwesomeIcon icon={faBolt} />
              DAILY DEALS
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
              Exclusive Tech & Local Finds
            </h2>

            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              Check our WhatsApp status daily for hot deals on electronics, appliances, and proudly South African products.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { label: 'Tech Specials', desc: 'Latest gadgets' },
                  { label: 'Home Essentials', desc: 'Appliances & more' },
                  { label: 'Local Finds', desc: 'Proudly SA' }
                ].map((item, index) => (
                  <div key={index} className="text-white">
                    <p className="font-bold text-lg">{item.label}</p>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/27768850084"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              View Today's Deals
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Deals
