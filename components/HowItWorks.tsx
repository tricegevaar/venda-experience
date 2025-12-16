'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Message Us',
      description: 'Send us a WhatsApp with the product link or what you\'re looking for.'
    },
    {
      number: '02',
      title: 'We Find Deals',
      description: 'We search for the best price and confirm all details with you.'
    },
    {
      number: '03',
      title: 'We Order',
      description: 'We place the order and handle payment processing for you.'
    },
    {
      number: '04',
      title: 'You Receive',
      description: 'Your items arrive with free delivery. Simple as that.'
    }
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Four simple steps to hassle-free shopping
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connector Line - only on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 lg:top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-sa-gold to-sa-green"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-sa-gold to-sa-green rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                  <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">{step.number}</span>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://wa.me/27768850084"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg sm:text-xl" />
            Start Shopping Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks