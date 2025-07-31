"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Eye, Sparkles, Clock, MapPin, ArrowRight, Star, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const artbysimonaBg = "/assets/photos/artbysimona.jpeg";

const GOLD = "#E6C97A";
const EMERALD = "#10B981";

const Home = ({ onBookingClick }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setIsLoaded(true);
    
    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Lash Extensions",
      description: "Premium silk lashes for natural beauty",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      icon: Sparkles,
      title: "Expert Artistry",
      description: "8+ years of professional experience",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 6 days a week for your convenience",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Located in the heart of Tirana",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ];

  const testimonials = [
    {
      name: "Maria K.",
      text: "Absolutely stunning work! Simona transformed my look completely.",
      rating: 5,
    },
    {
      name: "Elena D.",
      text: "The best lash extensions I've ever had. Natural and beautiful!",
      rating: 5,
    },
    {
      name: "Ana S.",
      text: "Professional service in a beautiful, relaxing environment.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">
        {/* Animated Background - artbysimona.jpeg */}
        <motion.div
          animate={{
            scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
            rotate: isMobile ? [0, 2, 0] : [0, 5, 0],
          }}
          transition={{
            duration: isMobile ? 15 : 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <img
            src={artbysimonaBg}
            alt="Art by Simona background"
            className="w-full h-full object-cover opacity-30"
            style={{ filter: "blur(1px) contrast(1.1) brightness(0.8)" }}
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/90 via-emerald-950/85 to-emerald-800/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-700/20 to-emerald-950/90" />

        {/* Floating Particles - Hidden on mobile for performance */}
        {!isMobile && (
          <>
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-20 w-2 h-2 bg-gold rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [0, 30, 0],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-40 right-32 w-3 h-3 bg-emerald-400 rounded-full opacity-40"
            />
          </>
        )}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full flex flex-col items-center text-center px-4 py-6 sm:py-10 text-white"
        >
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Premium Beauty Services</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4 sm:mb-6 leading-tight"
          >
            <span
              className="block text-2xl sm:text-3xl md:text-6xl font-light tracking-widest italic mb-1 sm:mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: `0 4px 20px rgba(21,36,26,0.3)`,
                letterSpacing: "0.2em",
                color: GOLD,
              }}
            >
              art by
            </span>
            <span
              className="block text-4xl sm:text-6xl md:text-9xl font-black uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.2em",
                fontWeight: 900,
                color: "#FBFAF6",
                textShadow:
                  `0 6px 40px #253821, 0 0px 0px #fff3, 0 8px 60px #29281a4b, 0 4px 12px ${GOLD}99`,
                lineHeight: 0.9,
              }}
            >
              SIMONA
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-3xl font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-emerald-50 px-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: `0 2px 20px #02190070, 0 2px 8px ${GOLD}44`,
            }}
          >
            Where Nature Meets <span style={{ color: GOLD, fontWeight: 600 }}>Luxury</span>
          </motion.p>

          {/* Stats - Responsive grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-10 w-full max-w-sm sm:max-w-md mx-auto"
          >
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-emerald-200 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Stacked on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-3 sm:gap-4 justify-center w-full max-w-sm sm:max-w-md mx-auto"
          >
            <Button
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-2xl shadow-emerald-950/30 border-2 border-white/10 backdrop-blur-xl transition-all duration-300 tracking-wider w-full"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.1em",
                fontWeight: 800,
                boxShadow: `0 4px 25px ${GOLD}33`,
                border: `2px solid ${GOLD}33`,
              }}
              onClick={onBookingClick}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span
                  style={{
                    background: "linear-gradient(90deg, #E6C97A 20%, #fff6d0 70%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                  }}
                >
                  Book Your Experience
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
            
            <Button
              variant="outline"
              className="group border-2 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-white/5 backdrop-blur-xl shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:bg-white/10 w-full"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.08em",
                fontWeight: 600,
                borderColor: GOLD,
                color: GOLD,
              }}
              onClick={() => navigate("/services")}
            >
              <span className="flex items-center justify-center gap-2">
                View Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Smaller on mobile */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-emerald-950 to-emerald-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,201,122,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Why Choose Us</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-emerald-50 mb-4 sm:mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.1em",
                textShadow: `0 4px 20px #16322a33, 0 2px 8px ${GOLD}33`,
                color: GOLD,
              }}
            >
              Excellence in Every Detail
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-200 max-w-3xl mx-auto leading-relaxed px-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Experience the perfect blend of artistry, luxury, and natural beauty in our unique salon environment.
            </p>
          </motion.div>

          {/* Features Grid - Mobile first */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: isMobile ? 0 : 5,
                    boxShadow: `0 20px 80px rgba(16,185,129,0.3), 0 8px 40px ${GOLD}22`,
                  }}
                  className="group relative bg-white/5 backdrop-blur-xl border border-emerald-800/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[280px] shadow-2xl shadow-emerald-950/20 hover:shadow-emerald-400/20 transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{
                    perspective: 1000,
                    fontFamily: "'Montserrat', sans-serif",
                    border: `1.5px solid ${GOLD}20`,
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: isMobile ? 180 : 360 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-emerald-950/30 group-hover:scale-110 transition-transform duration-300 border-2 border-white/20 relative z-10`}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-200 text-center leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-emerald-900 to-emerald-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-emerald-50 mb-4 sm:mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.1em",
                color: GOLD,
              }}
            >
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-200 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: isMobile ? 0 : -5 }}
                className="bg-white/5 backdrop-blur-xl border border-emerald-800/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl shadow-emerald-950/20 hover:shadow-emerald-400/20 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-emerald-200 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-emerald-300">Verified Client</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,201,122,0.1),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 sm:mb-6">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Ready to Transform?</span>
            </div>
            
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              style={{
                letterSpacing: "0.07em",
                color: GOLD,
                textShadow: `0 2px 12px ${GOLD}33`,
              }}
            >
              Ready to Transform Your Look?
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Book your appointment today and experience our jungle glam sanctuary. 
              Your journey to natural beauty starts here.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-md mx-auto">
              <Button
                className="group relative overflow-hidden bg-gradient-to-r from-gold via-yellow-400 to-gold text-emerald-950 px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full"
                style={{
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                }}
                onClick={onBookingClick}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Your Appointment
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
              
              <Button
                variant="outline"
                className="border-2 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white/10 w-full"
                style={{
                  borderColor: GOLD,
                  color: GOLD,
                  fontWeight: 600,
                }}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
