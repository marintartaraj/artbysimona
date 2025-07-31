"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Users, Clock, Heart, Sparkles, Eye, Star, ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const GOLD = "#E6C97A";
const EMERALD = "#10B981";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, number: "8+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { icon: Award, number: "25+", label: "Certifications", color: "from-purple-500 to-pink-500" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate", color: "from-red-500 to-pink-500" },
  ]

  const values = [
    {
      icon: Eye,
      title: "Natural Beauty",
      description: "Enhancing your natural features with precision and care",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Premium services in a serene, jungle-inspired sanctuary",
      color: "from-gold to-yellow-400"
    },
    {
      icon: Heart,
      title: "Client Care",
      description: "Personalized attention and exceptional customer service",
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,201,122,0.05),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Our Story</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider leading-tight"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
              textShadow: "0 3px 18px rgba(16, 53, 34, 0.19), 0 2px 8px #E6C97A44",
              letterSpacing: "0.12em",
            }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E6C97A 20%, #fff7de 80%, #FFD700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.18em",
                textShadow: "0 2px 8px #E6C97A44",
              }}
            >
              Simona
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-50 mx-auto font-light leading-relaxed max-w-2xl sm:max-w-3xl px-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0 1px 7px #E6C97A22",
            }}
          >
            Discover the artistry and passion behind Tirana's most luxurious{" "}
            <span style={{ color: GOLD, fontWeight: 600 }}>jungle-inspired</span> beauty sanctuary.
          </motion.p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-900 to-emerald-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                <span className="text-xs sm:text-sm font-medium text-emerald-100">My Journey</span>
              </div>
              
              <h2 className="mb-4 sm:mb-6 text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-center lg:text-left"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: "uppercase",
                  textShadow: "0 2px 14px rgba(16,53,34,0.14), 0 2px 8px #E6C97A22",
                  letterSpacing: "0.10em",
                  color: GOLD,
                }}>
                My Journey in Beauty
              </h2>
              
              <div className="max-w-lg space-y-4">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-emerald-100 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  With over 8 years of experience in the beauty industry, I've dedicated my career to enhancing natural
                  beauty through artistry and precision. My passion began with a simple belief: every person deserves to
                  feel confident and radiant.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-emerald-100 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Today, Art by Simona stands as Tirana's premier destination for lash extensions, microblading, nail
                  artistry, and comprehensive beauty services, all delivered in our signature jungle glam atmosphere.
                </p>
              </div>
            </motion.div>
            
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: isMobile ? 0 : 5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
                  alt="Simona, the founder, working with a client"
                  className="rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-48 sm:h-64 md:h-80 object-cover shadow-2xl shadow-emerald-950/25 bg-emerald-800/30"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-800 to-emerald-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Our Achievements</span>
            </div>
            
            <h2 className="text-white mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textShadow: "0 2px 12px rgba(16,53,34,0.13), 0 2px 8px #E6C97A44",
                letterSpacing: "0.09em",
                color: GOLD,
              }}>
              Our Achievements
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-emerald-50 font-light leading-relaxed max-w-md mx-auto px-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {stats.map(({ icon: Icon, number, label, color }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-950/60 backdrop-blur border border-emerald-800/30 rounded-2xl px-4 py-6 sm:px-5 sm:py-8 flex flex-col items-center justify-center shadow-lg shadow-emerald-950/12 cursor-pointer transition-all duration-200 hover:shadow-emerald-300/10"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  border: `1.5px solid ${GOLD}33`,
                  boxShadow: `0 2px 18px ${GOLD}22`,
                }}
              >
                <div
                  className={`bg-gradient-to-br ${color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 shadow-md shadow-emerald-950/18 border border-white/10`}
                  style={{
                    border: `2px solid ${GOLD}55`,
                    boxShadow: `0 2px 12px ${GOLD}33`,
                  }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1"
                  style={{
                    color: GOLD,
                    textShadow: "0 1px 8px #fff8, 0 2px 8px #E6C97A22",
                  }}
                >
                  {number}
                </div>
                <div className="text-emerald-100 text-sm sm:text-base md:text-lg text-center leading-tight">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-900 to-emerald-950">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Our Values</span>
            </div>
            
            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textShadow: "0 2px 12px rgba(16,53,34,0.11), 0 2px 8px #E6C97A55",
                letterSpacing: "0.08em",
                color: GOLD,
              }}>
              Our Mission & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-emerald-900/60 backdrop-blur border border-emerald-800/30 rounded-2xl p-6 sm:p-7"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  border: `1.5px solid ${GOLD}22`,
                }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`bg-gradient-to-br ${value.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 border border-white/10`}
                    style={{
                      border: `2px solid ${GOLD}44`,
                    }}
                  >
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold"
                    style={{ color: GOLD }}>{value.title}</h3>
                </div>
                <p className="text-emerald-100 leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Get in Touch</span>
            </div>
            
            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6"
              style={{
                letterSpacing: "0.07em",
                color: GOLD,
                textShadow: `0 2px 12px ${GOLD}33`,
              }}
            >
              Ready to Experience Luxury Beauty?
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Book your appointment today and discover the perfect blend of artistry, luxury, and natural beauty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm sm:max-w-md mx-auto">
              <button className="group relative overflow-hidden bg-gradient-to-r from-gold via-yellow-400 to-gold text-emerald-950 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full touch-target">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </button>
              
              <button className="border-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-white/10 w-full touch-target"
                style={{
                  borderColor: GOLD,
                  color: GOLD,
                  fontWeight: 600,
                }}>
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contact Us
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
