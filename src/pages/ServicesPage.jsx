"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Sparkles,
  Clock,
  Star,
  Eye,
  X,
  Palette,
  Scissors,
  Heart,
  ArrowRight,
  Calendar,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GOLD = "#E6C97A";
const EMERALD = "#10B981";

const ServicesPage = ({ onBookingClick }) => {
  const [services, setServices] = useState([]);
  const [grouped, setGrouped] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewPhoto, setViewPhoto] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // 🟢 NEW: for preselecting service in modal

  const mockServices = [
    // Lash Extensions
    {
      id: 1,
      category: "Lash Extensions",
      name: "Classic Lashes",
      value: "lashes", // 🟢 Add value for use with BookingModal
      price: 45,
      duration: 90,
      description: "Natural-looking individual lash extensions for everyday elegance",
      icon: "👁️",
      popular: true,
    },
    {
      id: 2,
      category: "Lash Extensions",
      name: "Volume Lashes",
      value: "lashes",
      price: 65,
      duration: 120,
      description: "Dramatic volume with multiple ultra-fine lashes per natural lash",
      icon: "✨",
      popular: false,
    },
    {
      id: 3,
      category: "Lash Extensions",
      name: "Hybrid Lashes",
      value: "lashes",
      price: 55,
      duration: 105,
      description: "Perfect blend of classic and volume techniques for textured fullness",
      icon: "🌟",
      popular: true,
    },
    {
      id: 4,
      category: "Lash Extensions",
      name: "Lash Lift & Tint",
      value: "lashes",
      price: 35,
      duration: 60,
      description: "Natural lash enhancement with curl and color for low-maintenance beauty",
      icon: "💫",
      popular: false,
    },
    // Nail Services
    {
      id: 5,
      category: "Nail Artistry",
      name: "Gel Manicure",
      value: "nails",
      price: 35,
      duration: 60,
      description: "Long-lasting gel polish with cuticle care and hand massage",
      icon: "💅",
      popular: true,
    },
    {
      id: 6,
      category: "Nail Artistry",
      name: "Nail Art Design",
      value: "nails",
      price: 50,
      duration: 90,
      description: "Custom nail art with intricate designs and premium finishes",
      icon: "🎨",
      popular: false,
    },
    {
      id: 7,
      category: "Nail Artistry",
      name: "Gel Extensions",
      value: "nails",
      price: 60,
      duration: 120,
      description: "Beautiful nail extensions with gel overlay and shaping",
      icon: "💎",
      popular: true,
    },
    {
      id: 8,
      category: "Nail Artistry",
      name: "Luxury Pedicure",
      value: "nails",
      price: 45,
      duration: 75,
      description: "Complete foot care with exfoliation, massage, and gel polish",
      icon: "🦶",
      popular: false,
    },
    // Makeup Services
    {
      id: 9,
      category: "Makeup Artistry",
      name: "Bridal Makeup",
      value: "makeup",
      price: 80,
      duration: 90,
      description: "Flawless bridal look with trial session and touch-up kit",
      icon: "👰",
      popular: true,
    },
    {
      id: 10,
      category: "Makeup Artistry",
      name: "Special Event Makeup",
      value: "makeup",
      price: 60,
      duration: 60,
      description: "Glamorous makeup for parties, photoshoots, and special occasions",
      icon: "🎭",
      popular: false,
    },
    {
      id: 11,
      category: "Makeup Artistry",
      name: "Natural Glam",
      value: "makeup",
      price: 45,
      duration: 45,
      description: "Everyday makeup enhancement with natural, radiant finish",
      icon: "✨",
      popular: false,
    },
    // Hair Services
    {
      id: 12,
      category: "Hair Styling",
      name: "Cut & Style",
      value: "hair",
      price: 50,
      duration: 90,
      description: "Professional haircut with wash, style, and finishing",
      icon: "✂️",
      popular: false,
    },
    {
      id: 13,
      category: "Hair Styling",
      name: "Color & Highlights",
      value: "hair",
      price: 85,
      duration: 180,
      description: "Hair coloring with highlights and professional color treatment",
      icon: "🎨",
      popular: true,
    },
    {
      id: 14,
      category: "Hair Styling",
      name: "Blowout & Style",
      value: "hair",
      price: 35,
      duration: 45,
      description: "Professional blowout with styling for special occasions",
      icon: "💨",
      popular: false,
    },
    // Microblading
    {
      id: 15,
      category: "Microblading",
      name: "Microblading",
      value: "brows",
      price: 180,
      duration: 150,
      description: "Semi-permanent eyebrow enhancement with natural hair-stroke technique",
      icon: "✏️",
      popular: true,
    },
    {
      id: 16,
      category: "Microblading",
      name: "Microblading Touch-up",
      value: "brows",
      price: 80,
      duration: 90,
      description: "6-8 week touch-up session to perfect your microblading results",
      icon: "🔄",
      popular: false,
    },
    {
      id: 17,
      category: "Microblading",
      name: "Brow Shaping & Tint",
      value: "brows",
      price: 25,
      duration: 30,
      description: "Professional eyebrow shaping with tinting for defined brows",
      icon: "👁️",
      popular: false,
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setServices(mockServices);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (!services.length) {
      setGrouped([]);
      return;
    }
    const groups = {};
    services.forEach((svc) => {
      const cat = svc.category || "Other";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(svc);
    });
    setGrouped(
      Object.entries(groups).map(([category, items]) => ({
        category,
        items,
      }))
    );
  }, [services]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Lash Extensions":
        return Eye;
      case "Nail Artistry":
        return Sparkles;
      case "Makeup Artistry":
        return Palette;
      case "Hair Styling":
        return Scissors;
      case "Microblading":
        return Heart;
      default:
        return Sparkles;
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Art by Simona | Lashes, Nails, Makeup & More</title>
        <meta
          name="description"
          content="Discover our comprehensive beauty services including lash extensions, nail artistry, makeup, hair styling, and microblading. Professional quality with luxury jungle glam experience."
        />
      </Helmet>

      {/* --- Modal for viewing a single photo --- */}
      <AnimatePresence>
        {viewPhoto && (
          <motion.div
            className="fixed inset-0 z-50 bg-emerald-950/95 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewPhoto(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-emerald-900/95 to-emerald-800/95 backdrop-blur-xl border border-emerald-800/30 rounded-3xl max-w-[95vw] w-full sm:w-[400px] shadow-2xl p-4 sm:p-6 relative flex flex-col items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-emerald-100 hover:text-emerald-300 transition-colors touch-target"
                onClick={() => setViewPhoto(null)}
                aria-label="Close"
              >
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
              <img
                src={viewPhoto.src || "/placeholder.svg"}
                alt={viewPhoto.name}
                className="rounded-2xl object-cover mb-4 w-full aspect-[5/4] border border-emerald-800/20 bg-emerald-950"
                style={{ maxHeight: 260 }}
              />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
                {viewPhoto.name}
              </h3>
              {viewPhoto.desc && (
                <p className="text-sm sm:text-base text-emerald-200 text-center leading-relaxed">
                  {viewPhoto.desc}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-emerald-950 text-white min-h-screen">
        {/* --- Hero Section --- */}
        <section className="relative pt-12 pb-8 sm:pt-16 md:pt-20 sm:pb-12 md:pb-16 bg-gradient-to-br from-emerald-900 to-emerald-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,201,122,0.05),transparent_50%)]" />
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                <span className="text-xs sm:text-sm font-medium text-emerald-100">Our Services</span>
              </div>
              
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
                style={{
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  textShadow: `0 2px 8px rgba(16, 53, 34, 0.16), 0 1px 6px ${GOLD}77`,
                }}
              >
                Our{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #E6C97A 15%, #fffbe6 60%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 6px #E6C97A33)",
                  }}
                >
                  Services
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-emerald-100 leading-relaxed max-w-2xl mx-auto px-4">
                Discover beauty services designed to pamper and elevate you in our jungle glam sanctuary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Services Grid --- */}
        <section className="pt-4 pb-12 sm:pb-16 md:pb-24 bg-gradient-to-b from-emerald-900 to-emerald-950">
          <div className="max-w-6xl mx-auto px-4">
            {loading ? (
              <div className="text-center text-lg sm:text-xl py-20 text-emerald-200 font-semibold">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-9 sm:w-9 border-b-2 border-emerald-100 mx-auto mb-4"></div>
                Loading services...
              </div>
            ) : grouped.length === 0 ? (
              <div className="text-center text-emerald-400">
                No services found.
              </div>
            ) : (
              grouped.map((category, categoryIndex) => {
                const CategoryIcon = getCategoryIcon(category.category);
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16"
                  >
                    <div className="flex items-center justify-start gap-3 mb-6 sm:mb-8">
                      <div
                        className={`bg-gradient-to-br from-emerald-800 to-emerald-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg shadow-emerald-950/30 border border-white/20`}
                        style={{
                          border: `2px solid ${GOLD}55`,
                          boxShadow: `0 2px 8px ${GOLD}33`,
                        }}
                      >
                        <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h2
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white"
                        style={{
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          textShadow: `0 2px 6px rgba(16,53,34,0.12), 0 1px 6px ${GOLD}33`,
                          color: GOLD,
                        }}
                      >
                        {category.category}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {category.items.map((service, serviceIndex) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: serviceIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.02,
                            boxShadow:
                              `0 8px 40px 0 #31786844, 0 1px 10px #29523818, 0 1px 12px ${GOLD}18`,
                          }}
                          className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 backdrop-blur-xl border group hover:shadow-xl flex flex-col transition-all duration-300"
                          style={{
                            border: `1.5px solid ${GOLD}22`,
                          }}
                        >
                          <div className="flex justify-between items-start mb-3 gap-2">
                            <div className="flex items-center gap-2 flex-1">
                              <span className="text-xl sm:text-2xl">{service.icon}</span>
                              <h3
                                className="font-semibold text-base sm:text-lg text-white leading-snug"
                                style={{ color: GOLD }}
                              >
                                {service.name}
                              </h3>
                            </div>
                            <div className="text-right">
                              <div
                                className="text-base sm:text-lg font-bold"
                                style={{
                                  color: GOLD,
                                  textShadow: "0 1px 8px #fff8, 0 1px 6px #E6C97A33",
                                }}
                              >
                                €{service.price}
                              </div>
                              <div className="flex items-center text-xs text-emerald-300 mt-1">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                {service.duration} min
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-emerald-100 text-sm sm:text-base leading-snug mb-4 flex-grow">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 sm:h-4 sm:w-4"
                                  style={{
                                    color: GOLD,
                                    filter: "drop-shadow(0 1px 2px #E6C97A88)",
                                  }}
                                  fill={GOLD}
                                />
                              ))}
                              <span className="text-xs ml-1" style={{ color: GOLD }}>
                                5.0
                              </span>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                className="bg-transparent border touch-target"
                                style={{
                                  border: `1.5px solid ${GOLD}55`,
                                  color: GOLD,
                                  fontWeight: 500,
                                }}
                                onClick={() =>
                                  setViewPhoto({
                                    src: `https://images.unsplash.com/photo-${1560066984138 + service.id}?q=80&w=400&auto=format&fit=crop`,
                                    name: service.name,
                                    desc: service.description,
                                  })
                                }
                                title="View Service Photo"
                              >
                                <Eye className="h-4 w-4" style={{ color: GOLD }} />
                                <span className="hidden sm:inline ml-1">View</span>
                              </Button>
                              
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-gold via-yellow-400 to-gold text-emerald-950 font-bold rounded-lg px-3 py-2 text-xs sm:text-sm border touch-target"
                                style={{
                                  border: `1.5px solid ${GOLD}55`,
                                  boxShadow: `0 1px 8px ${GOLD}22`,
                                }}
                                // 🟢 Set preselected service value!
                                onClick={() => {
                                  setSelectedService(service.value);
                                  onBookingClick(service.value);
                                }}
                              >
                                Book
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                <span className="text-xs sm:text-sm font-medium text-emerald-100">Ready to Book?</span>
              </div>
              
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6"
                style={{
                  letterSpacing: "0.07em",
                  color: GOLD,
                  textShadow: `0 2px 12px ${GOLD}33`,
                }}
              >
                Ready to Transform Your Look?
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Book your appointment and experience our jungle glam sanctuary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm sm:max-w-md mx-auto">
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-gold via-yellow-400 to-gold text-emerald-950 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full touch-target"
                  style={{
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                  }}
                  onClick={() => {
                    setSelectedService(null);
                    onBookingClick(null);
                  }}
                >
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
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-white/10 w-full touch-target"
                  style={{
                    borderColor: GOLD,
                    color: GOLD,
                    fontWeight: 600,
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Contact Us
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
