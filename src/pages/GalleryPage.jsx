"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet"
import { X, ChevronLeft, ChevronRight, Eye, Sparkles, Palette, Scissors, Heart, ArrowRight, Calendar, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const GOLD = "#E6C97A"
const EMERALD = "#10B981"

const categories = [
  { id: "all", name: "All Work", icon: "✨" },
  { id: "lashes", name: "Lash Extensions", icon: "👁️" },
  { id: "nails", name: "Nail Artistry", icon: "💅" },
  { id: "makeup", name: "Makeup", icon: "🎨" },
  { id: "hair", name: "Hair Styling", icon: "✂️" },
  { id: "microblading", name: "Microblading", icon: "✏️" },
  { id: "salon", name: "Our Salon", icon: "🏠" },
]

const galleryImages = [
  // Hair Styling
  {
    id: 1,
    category: "hair",
    title: "Classic Hair Styling",
    description: "Tailored cuts, blowouts, and elegant styles for any occasion.",
    src: "/assets/photos/hair1.jpeg",
  },
  {
    id: 2,
    category: "hair",
    title: "Modern Haircut",
    description: "Expert shaping and fresh color for a bold, modern look.",
    src: "/assets/photos/hair2.jpeg",
  },
  {
    id: 3,
    category: "hair",
    title: "Glossy Finish",
    description: "Beautifully finished, healthy hair with a touch of shine.",
    src: "/assets/photos/hair3.jpeg",
  },

  // Lashes
  {
    id: 4,
    category: "lashes",
    title: "Classic Lash Extensions",
    description: "Natural-looking silk lashes for everyday elegance.",
    src: "/assets/photos/lashes1.jpeg",
  },
  {
    id: 5,
    category: "lashes",
    title: "Volume Lashes",
    description: "Dramatic, full-volume lashes for standout eyes.",
    src: "/assets/photos/lashes2.jpeg",
  },
  {
    id: 6,
    category: "lashes",
    title: "Hybrid Lash Set",
    description: "Perfect blend of classic and volume for textured fullness.",
    src: "/assets/photos/lashes3.jpeg",
  },

  // Nails
  {
    id: 7,
    category: "nails",
    title: "Gel Manicure",
    description: "Long-lasting gel polish with a flawless finish.",
    src: "/assets/photos/nails1.jpeg",
  },
  {
    id: 8,
    category: "nails",
    title: "Nail Art Design",
    description: "Custom nail art and premium finishes.",
    src: "/assets/photos/nails2.jpeg",
  },
  {
    id: 9,
    category: "nails",
    title: "Classic French",
    description: "Classic French tips with a modern touch.",
    src: "/assets/photos/nails3.jpeg",
  },
  {
    id: 10,
    category: "nails",
    title: "Elegant Extensions",
    description: "Beautiful nail extensions with expert shaping.",
    src: "/assets/photos/nails4.jpeg",
  },

  // Makeup
  {
    id: 11,
    category: "makeup",
    title: "Signature Makeup Look",
    description: "Flawless makeup for any occasion.",
    src: "/assets/photos/makeup1.jpeg",
  },
  {
    id: 12,
    category: "makeup",
    title: "Bridal Glam",
    description: "Radiant bridal makeup for your special day.",
    src: "/assets/photos/makeup3.jpeg",
  },
  {
    id: 13,
    category: "makeup",
    title: "Evening Elegance",
    description: "Smoky eyes and a bold look for nights out.",
    src: "/assets/photos/makeup4.jpeg",
  },

  // Microblading
  {
    id: 14,
    category: "microblading",
    title: "Microblading Perfection",
    description: "Semi-permanent, natural-looking brows.",
    src: "/assets/photos/microblading1.jpeg",
  },

  // Salon / Brand
  {
    id: 15,
    category: "salon",
    title: "Art by Simona",
    description: "Our signature jungle-inspired beauty sanctuary.",
    src: "/assets/photos/artbysimona.jpeg",
  },
]

const Gallery = ({ onBookingClick }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (image) => setSelectedImage(image)
  const closeLightbox = () => setSelectedImage(null)

  const navigateImage = (direction) => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    }
    setSelectedImage(filteredImages[newIndex])
  }

  // Not actually used here but kept for completeness.
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case "lashes":
        return Eye
      case "nails":
        return Sparkles
      case "makeup":
        return Palette
      case "hair":
        return Scissors
      case "microblading":
        return Heart
      default:
        return Sparkles
    }
  }

  return (
    <>
      <Helmet>
        <title>Gallery - Art by Simona | Beauty Portfolio & Salon Photos</title>
        <meta
          name="description"
          content="Explore our stunning gallery showcasing lash extensions, nail artistry, makeup transformations, hair styling, microblading, and our beautiful jungle glam salon."
        />
      </Helmet>

      {/* Hero Section */}
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
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Our Portfolio</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.12em",
              fontWeight: 900,
              textTransform: "uppercase",
              textShadow: `0 4px 20px rgba(16,53,34,0.23), 0 2px 8px ${GOLD}44`,
              lineHeight: 1.11,
            }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E6C97A 30%, #fffbe6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
                filter: "drop-shadow(0 2px 8px #E6C97A22)",
              }}
            >Gallery</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Discover the artistry and transformations that happen in our jungle glam sanctuary. Each image tells a story
            of beauty, confidence, and natural elegance.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs: Mobile Scrollable Slider */}
<section className="py-6 sm:py-8 bg-gradient-to-b from-emerald-800 to-emerald-900">
  <div className="max-w-6xl mx-auto px-4">
    <div
      className="
        flex gap-2 sm:gap-3 
        overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:justify-center 
        scroll-smooth snap-x snap-mandatory
      "
      style={{
        WebkitOverflowScrolling: "touch",
      }}
      tabIndex={0}
      role="tablist"
      aria-label="Gallery categories"
    >
      {categories.map(({ id, name, icon }) => (
        <motion.button
          key={id}
          onClick={() => setSelectedCategory(id)}
          className={`
            flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300
            snap-center flex-shrink-0
            ${selectedCategory === id
              ? "bg-gradient-to-r from-gold to-yellow-400 text-emerald-950 shadow-lg scale-105 border-2"
              : "bg-emerald-800/40 backdrop-blur-sm border border-emerald-700/30 text-emerald-100 hover:bg-emerald-800/60"
            }
          `}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            border: selectedCategory === id ? `2px solid ${GOLD}` : undefined,
            color: selectedCategory === id ? "#4C3B12" : undefined,
            boxShadow: selectedCategory === id ? `0 1px 8px ${GOLD}33` : undefined,
            scrollSnapAlign: "center",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          tabIndex={0}
          aria-selected={selectedCategory === id}
          aria-label={name}
        >
          <span className="text-sm sm:text-base flex-shrink-0">{icon}</span>
          <span className="text-xs sm:text-sm flex-shrink-0">{name}</span>
        </motion.button>
      ))}
    </div>
  </div>
</section>



      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-emerald-900 to-emerald-950">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence>
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="relative group cursor-pointer rounded-2xl shadow-lg shadow-emerald-950/20 bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border overflow-hidden"
                  onClick={() => openLightbox(image)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    border: `1.5px solid ${GOLD}22`,
                    boxShadow: `0 2px 12px ${GOLD}14`
                  }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={`${image.title} - ${image.description}`}
                    src={image.src || "/placeholder.svg"}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-center text-white p-4 w-full">
                      <h3 className="text-sm sm:text-base font-semibold mb-2" style={{ color: GOLD }}>{image.title}</h3>
                      <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-emerald-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/50 border bg-gradient-to-br from-emerald-900/95 to-emerald-800/95 backdrop-blur-xl"
              onClick={e => e.stopPropagation()}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                border: `2px solid ${GOLD}44`
              }}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-emerald-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-900 transition-all duration-200 border touch-target"
                aria-label="Close lightbox"
                style={{ border: `2px solid ${GOLD}44`, color: GOLD }}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              {/* Prev */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-emerald-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-900 transition-all duration-200 border touch-target"
                aria-label="Previous image"
                style={{ border: `2px solid ${GOLD}44`, color: GOLD }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              
              {/* Next */}
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-emerald-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-900 transition-all duration-200 border touch-target"
                aria-label="Next image"
                style={{ border: `2px solid ${GOLD}44`, color: GOLD }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              
              {/* Image */}
              <img
                className="max-w-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain mx-auto"
                alt={`${selectedImage.title} - ${selectedImage.description}`}
                src={selectedImage.src || "/placeholder.svg"}
              />
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/95 to-emerald-800/95 backdrop-blur-xl text-white p-4 sm:p-6 rounded-b-3xl border-t"
                style={{ borderTop: `2px solid ${GOLD}44` }}>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2" style={{ color: GOLD }}>{selectedImage.title}</h3>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Ready to Transform?</span>
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
                onClick={onBookingClick}
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
    </>
  )
}

export default Gallery
