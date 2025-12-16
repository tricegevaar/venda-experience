'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faUniversity, faShoppingCart, faCreditCard, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const PaymentMethods = () => {
  const payments = [
    { icon: faMobile, name: 'PayShap' },
    { icon: faUniversity, name: 'TymeBank' },
    { icon: faShoppingCart, name: 'Takealot' },
    { icon: faCreditCard, name: 'EFT' }
  ]

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat text-gray-900 mb-6 sm:mb-8">
            Accepted Payments
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
            {payments.map((payment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 sm:gap-3 bg-gray-50 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full border border-gray-200"
              >
                <FontAwesomeIcon icon={payment.icon} className="text-sa-green text-sm sm:text-base" />
                <span className="font-medium text-gray-700 text-xs sm:text-sm lg:text-base">{payment.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500 px-4">
            <FontAwesomeIcon icon={faShieldAlt} className="text-sa-green text-sm" />
            <span className="text-xs sm:text-sm">All payments secured with bank-level encryption</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PaymentMethods