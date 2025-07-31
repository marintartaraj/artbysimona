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
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GOLD = "#E6C97A";

const ServicesPage = ({ onBookingClick }) => {
  const [services, setServices] = useState([]);
  const [grouped, setGrouped] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewPhoto, setViewPhoto] = useState(null);

  const mockServices = [
    // Lash Extensions
    {
      id: 1,
      category: "Lash Extensions",
      name: "Classic Lashes",
      price: 45,
      duration: 90,
      description: "Natural-looking individual lash extensions for everyday elegance",
    },
    {
      id: 2,
      category: "Lash Extensions",
      name: "Volume Lashes",
      price: 65,
      duration: 120,
      description: "Dramatic volume with multiple ultra-fine lashes per natural lash",
    },
    {
      id: 3,
      category: "Lash Extensions",
      name: "Hybrid Lashes",
      price: 55,
      duration: 105,
      description: "Perfect blend of classic and volume techniques for textured fullness",
    },
    {
      id: 4,
      category: "Lash Extensions",
      name: "Lash Lift & Tint",
      price: 35,
      duration: 60,
      description: "Natural lash enhancement with curl and color for low-maintenance beauty",
    },
    // Nail Services
    {
      id: 5,
      category: "Nail Artistry",
      name: "Gel Manicure",
      price: 35,
      duration: 60,
      description: "Long-lasting gel polish with cuticle care and hand massage",
    },
    {
      id: 6,
      category: "Nail Artistry",
      name: "Nail Art Design",
      price: 50,
      duration: 90,
      description: "Custom nail art with intricate designs and premium finishes",
    },
    {
      id: 7,
      category: "Nail Artistry",
      name: "Gel Extensions",
      price: 60,
      duration: 120,
      description: "Beautiful nail extensions with gel overlay and shaping",
    },
    {
      id: 8,
      category: "Nail Artistry",
      name: "Luxury Pedicure",
      price: 45,
      duration: 75,
      description: "Complete foot care with exfoliation, massage, and gel polish",
    },
    // Makeup Services
    {
      id: 9,
      category: "Makeup Artistry",
      name: "Bridal Makeup",
      price: 80,
      duration: 90,
      description: "Flawless bridal look with trial session and touch-up kit",
    },
    {
      id: 10,
      category: "Makeup Artistry",
      name: "Special Event Makeup",
      price: 60,
      duration: 60,
      description: "Glamorous makeup for parties, photoshoots, and special occasions",
    },
    {
      id: 11,
      category: "Makeup Artistry",
      name: "Natural Glam",
      price: 45,
      duration: 45,
      description: "Everyday makeup enhancement with natural, radiant finish",
    },
    // Hair Services
    {
      id: 12,
      category: "Hair Styling",
      name: "Cut & Style",
      price: 50,
      duration: 90,
      description: "Professional haircut with wash, style, and finishing",
    },
    {
      id: 13,
      category: "Hair Styling",
      name: "Color & Highlights",
      price: 85,
      duration: 180,
      description: "Hair coloring with highlights and professional color treatment",
    },
    {
      id: 14,
      category: "Hair Styling",
      name: "Blowout & Style",
      price: 35,
      duration: 45,
      description: "Professional blowout with styling for special occasions",
    },
    // Microblading
    {
      id: 15,
      category: "Microblading",
      name: "Microblading",
      price: 180,
      duration: 150,
      description: "Semi-permanent eyebrow enhancement with natural hair-stroke technique",
    },
    {
      id: 16,
      category: "Microblading",
      name: "Microblading Touch-up",
      price: 80,
      duration: 90,
      description: "6-8 week touch-up session to perfect your microblading results",
    },
    {
      id: 17,
      category: "Microblading",
      name: "Brow Shaping & Tint",
      price: 25,
      duration: 30,
      description: "Professional eyebrow shaping with tinting for defined brows",
    },
  ];

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
            className="fixed inset-0 z-50 bg-emerald-950/80 flex items-center justify-center px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewPhoto(null)}
          >
            <motion.div
              className="bg-emerald-900 border border-emerald-800/30 rounded-2xl max-w-[95vw] w-full xs:w-[330px] sm:w-[400px] shadow-xl p-4 sm:p-6 relative flex flex-col items-center"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-emerald-100 hover:text-emerald-300 transition-colors"
                onClick={() => setViewPhoto(null)}
                aria-label="Close"
              >
                <X className="h-7 w-7" />
              </button>
              <img
                src={viewPhoto.src || "/placeholder.svg"}
                alt={viewPhoto.name}
                className="rounded-xl object-cover mb-3 w-full aspect-[5/4] border border-emerald-800/20 bg-emerald-950"
                style={{ maxHeight: 260 }}
              />
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                {viewPhoto.name}
              </h3>
              {viewPhoto.desc && (
                <p className="text-base text-emerald-200 text-center">
                  {viewPhoto.desc}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-emerald-950 text-white min-h-screen">
        {/* --- Hero Section --- */}
        <section className="relative pt-12 pb-8 md:pt-20 md:pb-16 bg-gradient-to-br from-emerald-900 to-emerald-950 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
            <div className="absolute top-8 left-8 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-16 right-8 w-16 h-16 bg-emerald-200 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-xl mx-auto px-3 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <Sparkles className="h-12 w-12" style={{ color: GOLD, filter: "drop-shadow(0 1px 6px #E6C97A66)" }} />
              <h1
                className="text-3xl xs:text-4xl font-extrabold text-white"
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
              <p className="text-base xs:text-lg text-emerald-100 leading-relaxed">
                Discover beauty services designed to pamper and elevate you in our jungle glam sanctuary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Services Grid --- */}
        <section className="pt-4 pb-12 md:pb-24 bg-emerald-950">
          <div className="max-w-2xl md:max-w-5xl mx-auto px-2 xs:px-3">
            {loading ? (
              <div className="text-center text-xl py-20 text-emerald-200 font-semibold">
                <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-emerald-100 mx-auto mb-2"></div>
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
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: categoryIndex * 0.04 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-14"
                  >
                    <div className="flex items-center justify-start gap-3 mb-6 px-1">
                      <div
                        className="bg-emerald-800 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          border: `2px solid ${GOLD}55`,
                          boxShadow: `0 2px 8px ${GOLD}33`,
                        }}
                      >
                        <CategoryIcon className="w-6 h-6" style={{ color: GOLD }} />
                      </div>
                      <h2
                        className="text-xl xs:text-2xl font-bold text-white"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
                      {category.items.map((service, serviceIndex) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, scale: 0.97 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.45, delay: serviceIndex * 0.03 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.03,
                            boxShadow:
                              `0 8px 40px 0 #31786844, 0 1px 10px #29523818, 0 1px 12px ${GOLD}18`,
                          }}
                          className="rounded-2xl p-4 xs:p-5 bg-emerald-900/80 border group hover:shadow-xl flex flex-col transition-all duration-300"
                          style={{
                            border: `1.5px solid ${GOLD}22`,
                          }}
                        >
                          <div className="flex justify-between items-start mb-2 gap-2">
                            <h3
                              className="font-semibold text-lg xs:text-xl text-white leading-snug"
                              style={{ color: GOLD }}
                            >
                              {service.name}
                            </h3>
                            <div className="text-right">
                              <div
                                className="text-lg font-bold"
                                style={{
                                  color: GOLD,
                                  textShadow: "0 1px 8px #fff8, 0 1px 6px #E6C97A33",
                                }}
                              >
                                €{service.price}
                              </div>
                              <div className="flex items-center text-xs text-emerald-300 mt-1">
                                <Clock className="h-4 w-4 mr-1" />
                                {service.duration} min
                              </div>
                            </div>
                          </div>
                          <p className="text-emerald-100 text-base leading-snug mb-3 flex-grow">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4"
                                  style={{
                                    color: GOLD,
                                    filter: "drop-shadow(0 1px 2px #E6C97A88)",
                                  }}
                                  fill={GOLD}
                                />
                              ))}
                              <span className="text-xs" style={{ color: GOLD }}>
                                5.0
                              </span>
                            </div>
                            <div className="flex gap-1 xs:gap-2">
                              <Button
                                size="sm"
                                className="bg-transparent border"
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
                                <span className="hidden xs:inline">View</span>
                              </Button>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-amber-100 text-emerald-950 font-bold rounded-lg px-3 xs:px-4 py-1 xs:py-2 text-xs xs:text-sm border"
                                style={{
                                  border: `1.5px solid ${GOLD}55`,
                                  boxShadow: `0 1px 8px ${GOLD}22`,
                                  background: "linear-gradient(90deg, #FFD700 15%, #fffbe6 80%, #E6C97A 100%)",
                                  color: "#4C3B12",
                                  fontWeight: 700,
                                }}
                                onClick={onBookingClick}
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
        <section className="py-10 md:py-16 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800">
          <div className="max-w-xl mx-auto px-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl xs:text-3xl font-bold text-white mb-3"
                style={{
                  letterSpacing: "0.07em",
                  color: GOLD,
                  textShadow: `0 1px 6px ${GOLD}33`,
                }}
              >
                Ready to Transform Your Look?
              </h2>
              <p className="text-base xs:text-lg text-emerald-100 mb-5">
                Book your appointment and experience our jungle glam sanctuary.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="w-full sm:w-auto font-semibold rounded-full shadow-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #FFD700 15%, #fffbe6 80%, #E6C97A 100%)",
                    color: "#4C3B12",
                    border: `2px solid ${GOLD}55`,
                    fontWeight: 800,
                  }}
                  onClick={onBookingClick}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 px-6 py-3 text-base xs:text-lg font-semibold rounded-full transition-all duration-300"
                  style={{
                    border: `2px solid ${GOLD}`,
                    color: GOLD,
                    fontWeight: 600,
                  }}
                >
                  Contact Us
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
