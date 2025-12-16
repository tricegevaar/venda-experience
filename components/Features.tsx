'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faTags, faShippingFast, faStar } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  const features = [
    {
      icon: faCommentDots,
      title: 'You Ask, We Shop',
      description: 'Send us a Takealot link or describe what you need. We handle the rest.',
      color: 'bg-sa-gold'
    },
    {
      icon: faTags,
      title: 'No Extra Costs',
      description: 'Pay only for your items. Zero service fees, zero hidden charges.',
      color: 'bg-sa-green'
    },
    {
      icon: faShippingFast,
      title: 'Free Delivery',
      description: 'Every order delivered free to your doorstep, anywhere in Mzansi.',
      color: 'bg-sa-red'
    },
    {
      icon: faStar,
      title: 'Daily Deals',
      description: 'Exclusive deals on tech, appliances & more via our WhatsApp status.',
      color: 'bg-sa-blue'
    }
  ]

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-3 sm:mb-4">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Simple, transparent, and built for you
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                <FontAwesomeIcon icon={feature.icon} className="text-white text-sm sm:text-lg" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features