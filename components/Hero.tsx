'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faShieldAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-sa-blue to-slate-900 overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sa-gold/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sa-green/10 via-transparent to-transparent"></div>
        
        {/* Subtle animated circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-sa-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sa-green/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-sa-gold rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Premium Takealot Personal Shopper</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white leading-tight mb-6"
            >
              Shop Smarter,
              <br />
              <span className="bg-gradient-to-r from-sa-gold via-springbok-gold to-sa-gold bg-clip-text text-transparent">
                Venda Style
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Your personal Takealot shopper. We find the best deals, place your order, and deliver free to your door. You only pay for your items.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="https://wa.me/27768850084"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl group-hover:scale-110 transition-transform" />
                Start Shopping
              </a>
              <a
                href="#how-it-works"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: faTruck, text: 'Free Delivery' },
                { icon: faShieldAlt, text: 'No Hidden Fees' },
                { icon: faClock, text: '24/7 Support' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <FontAwesomeIcon icon={item.icon} className="text-sa-gold" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Logo & Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sa-gold/20 to-sa-green/20 rounded-3xl blur-2xl scale-110"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <motion.img
                    src="/logo.png"
                    alt="Venda Experience"
                    className="w-40 h-40 md:w-48 md:h-48 drop-shadow-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Free Delivery Badge */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-sa-gold to-springbok-gold text-sa-blue text-center py-4 px-6 rounded-2xl font-bold text-xl mb-6 shadow-lg"
                >
                  FREE DELIVERY
                </motion.div>

                <p className="text-white text-center mb-6">
                  On all Takealot orders. No minimum spend required.
                </p>

                {/* Phone Number */}
                <div className="text-center">
                  <p className="text-white text-sm mb-2">WhatsApp us now</p>
                  <p className="text-white font-bold text-2xl">076 885 0084</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero
