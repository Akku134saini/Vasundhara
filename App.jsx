import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Menu, X, Sparkles, Scissors, Palette, Gem, Crown, 
  Heart, Phone, Mail, MapPin, Instagram, Facebook, 
  ChevronRight, Star, Clock, Calendar, MessageCircle
} from 'lucide-react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 500], ['rgba(253, 248, 230, 0.95)', 'rgba(255, 241, 242, 0.95)'])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Bridal Makeup",
      description: "Complete bridal transformation with traditional and contemporary looks",
      price: "Starting ₹11,000"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Party Makeup",
      description: "Glamorous looks for parties, cocktails, and special occasions",
      price: "Starting ₹2,500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family Functions",
      description: "Elegant makeup for engagements, mehendi, sagan, and receptions",
      price: "Starting ₹2,000"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Makeup",
      description: "Editorial, fashion, and artistic makeup for photoshoots",
      price: "Starting ₹5,000"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Styling",
      description: "Haircuts, coloring, treatments, and styling for all occasions",
      price: "Starting ₹1,000"
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Skin Care",
      description: "Facials, clean-ups, and advanced skin treatments",
      price: "Starting ₹800"
    }
  ]

  const galleryImages = [
    { category: "Bridal", title: "Traditional Bridal Look", image: "https://images.unsplash.com/photo-1605218427368-35b8e9c84300?w=600&h=750&fit=crop" },
    { category: "Party", title: "Glamorous Evening", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=750&fit=crop" },
    { category: "Engagement", title: "Engagement Glow", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop" },
    { category: "Mehendi", title: "Mehendi Ceremony", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=750&fit=crop" },
    { category: "Reception", title: "Reception Elegance", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=750&fit=crop" },
    { category: "Cocktail", title: "Cocktail Night", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=750&fit=crop" }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-8 h-8 text-gold-500" />
              <span className="font-playfair text-2xl font-bold text-gray-800">Vasundhara</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-gold-600 font-medium transition-colors"
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-sm"
          >
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-700 hover:text-gold-600 py-2"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-3 rounded-full font-medium"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-white to-rose-50"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-gold-300 rounded-full opacity-20"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-40 h-40 border-2 border-rose-300 rounded-full opacity-20"
        />
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-gold-200 rounded-full opacity-30 blur-xl"
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center mb-6"
            >
              <Sparkles className="w-12 h-12 text-gold-500" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6"
          >
            Vasundhara
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-lato text-xl md:text-2xl text-gray-600 mb-4"
          >
            Premium Beauty Parlour
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-lato text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
          >
            Where beauty meets elegance. Transform your special moments with our expert makeup artists 
            specializing in bridal, party, and family function looks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Explore Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gold-50 transition-colors"
            >
              Book Appointment
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex justify-center gap-8"
          >
            {[
              { icon: <Star className="w-5 h-5" />, text: "2000+ Happy Customers" },
              { icon: <Heart className="w-5 h-5" />, text: "5+ Years Experience" },
              { icon: <Gem className="w-5 h-5" />, text: "Premium Quality" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-gray-600"
              >
                <span className="text-gold-500">{stat.icon}</span>
                <span className="font-medium">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="w-8 h-8 text-gold-500 rotate-90" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              From traditional bridal looks to modern party makeup, we offer a complete range of beauty services
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-gold-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6 text-white"
                >
                  {service.icon}
                </motion.div>
                <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className="font-lato text-gold-600 font-semibold">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-rose-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Work
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse of our beautiful transformations
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/5] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold-300 text-sm font-medium">{item.category}</span>
                  <h3 className="font-playfair text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-300 rounded-full"
                />
                <div className="bg-gradient-to-br from-gold-100 to-rose-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Crown className="w-32 h-32 text-gold-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800">
                About Vasundhara
              </h2>
              <p className="font-lato text-lg text-gray-600 leading-relaxed">
                Welcome to Vasundhara, where beauty is an art form. With over 10 years of experience in the beauty industry,
                we have established ourselves as a premier destination for bridal and special occasion makeup.
              </p>
              <p className="font-lato text-lg text-gray-600 leading-relaxed">
                Our team of expert makeup artists specializes in creating stunning looks that enhance your natural beauty
                while reflecting your personal style. From traditional Indian bridal makeup to contemporary party looks,
                we bring your vision to life.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <Star className="w-6 h-6" />, label: "Services Offered", value: "50+" },
                  { icon: <Heart className="w-6 h-6" />, label: "Happy Clients", value: "2000+" },
                  { icon: <Calendar className="w-6 h-6" />, label: "Years Experience", value: "5+" },
                  { icon: <Gem className="w-6 h-6" />, label: "5-Star Reviews", value: "500+" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gold-50 rounded-xl"
                  >
                    <div className="text-gold-500 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="font-playfair text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="font-lato text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Appointment
            </h2>
            <p className="font-lato text-lg text-gray-300 max-w-2xl mx-auto">
              Let's create your perfect look. Get in touch with us today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 98765 43210" },
                  { icon: <Mail className="w-6 h-6" />, label: "Email", value: "hello@vasundhara.com" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "123 Beauty Street, City Center" },
                  { icon: <Clock className="w-6 h-6" />, label: "Hours", value: "Mon - Sat: 10AM - 8PM" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-white mb-1">{item.label}</h4>
                      <p className="font-lato text-gray-300">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: <Instagram className="w-6 h-6" />, name: "Instagram" },
                  { icon: <Facebook className="w-6 h-6" />, name: "Facebook" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Quick Booking Options
              </h3>
              
              <motion.a
                href="tel:+919891778070"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/919891778070"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Me
              </motion.a>

              <div className="pt-6 text-center">
                <p className="font-lato text-gray-400 text-sm">
                  Available Mon - Sat: 10AM - 8PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-gold-500" />
              <span className="font-playfair text-xl font-bold text-white">Vasundhara</span>
            </div>
            <p className="font-lato text-gray-400 text-center">
              © 2024 Vasundhara Beauty Parlour. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" /> },
                { icon: <Facebook className="w-5 h-5" /> }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
