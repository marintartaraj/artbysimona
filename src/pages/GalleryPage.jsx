"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet"
import { X, ChevronLeft, ChevronRight, Eye, Sparkles, Palette, Scissors, Heart } from "lucide-react"
import { Button } from "@/components/ui/button" // <--- FIXED: Import Button

const GOLD = "#E6C97A"

const categories = [
  { id: "all", name: "All Work" },
  { id: "lashes", name: "Lash Extensions" },
  { id: "nails", name: "Nail Artistry" },
  { id: "makeup", name: "Makeup" },
  { id: "hair", name: "Hair Styling" },
  { id: "microblading", name: "Microblading" },
  { id: "salon", name: "Our Salon" },
]

// ... (galleryImages array stays the same)
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
;

// Component
const Gallery = ({ onBookingClick }) => {  // <-- Add prop if you want the booking button to work!
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

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
      <section className="relative py-14 md:py-20 bg-emerald-950">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-28 h-28 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-emerald-200 rounded-full blur-xl"></div>
        </div>
        <div className="max-w-3xl md:max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl xs:text-4xl md:text-6xl font-bold mb-5 md:mb-6 text-white leading-tight"
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base xs:text-lg md:text-xl text-emerald-100 max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Discover the artistry and transformations that happen in our jungle glam sanctuary. Each image tells a story
            of beauty, confidence, and natural elegance.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 md:py-8 bg-emerald-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0 md:justify-center">
            {categories.map(({ id, name }) => {
              const CategoryIcon = getCategoryIcon(id)
              return (
                <motion.button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 xs:px-6 xs:py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300
                    ${selectedCategory === id
                      ? "bg-white text-emerald-900 shadow-emerald-100 shadow-lg scale-105 border-2"
                      : "bg-emerald-800/40 backdrop-blur-sm border border-emerald-700/30 text-emerald-100 hover:bg-emerald-800/60"
                    }
                  `}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    border: selectedCategory === id ? `2px solid ${GOLD}` : undefined,
                    color: selectedCategory === id ? GOLD : undefined,
                    boxShadow: selectedCategory === id ? `0 1px 8px ${GOLD}33` : undefined,
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                >
                  {id !== "all" && <CategoryIcon className="w-4 h-4" style={{ color: selectedCategory === id ? GOLD : undefined }} />}
                  {name}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-16 bg-emerald-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence>
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="relative group cursor-pointer rounded-2xl shadow-lg shadow-emerald-900/20 bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/25 overflow-hidden"
                  onClick={() => openLightbox(image)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    border: `2px solid ${GOLD}22`,
                    boxShadow: `0 2px 12px ${GOLD}14`
                  }}
                  whileHover={{ scale: 1.035, rotateX: 2, rotateY: -2, boxShadow: `0 8px 32px ${GOLD}33` }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    className="w-full h-48 xs:h-56 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={`${image.title} - ${image.description}`}
                    src={image.src || "/placeholder.svg"}
                  />
                  {/* Overlay on hover/tap */}
                  <div className="absolute inset-0 bg-emerald-950/80 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-3 sm:p-4">
                      <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1" style={{ color: GOLD }}>{image.title}</h3>
                      <p className="text-xs xs:text-sm sm:text-base text-emerald-100">{image.description}</p>
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
            className="fixed inset-0 z-50 bg-emerald-950 bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-2 xs:p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden shadow-emerald-950/50 shadow-2xl border border-emerald-800/30 bg-emerald-950"
              onClick={e => e.stopPropagation()}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                border: `2px solid ${GOLD}44`
              }}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 xs:top-4 xs:right-4 z-20 w-9 h-9 xs:w-10 xs:h-10 bg-emerald-900 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 border"
                aria-label="Close lightbox"
                style={{ border: `2px solid ${GOLD}44`, color: GOLD }}
              >
                <X className="w-6 h-6" />
              </button>
              {/* Prev */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-2 xs:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 xs:w-12 xs:h-12 bg-emerald-900 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 border"
                aria-label="Previous image"
                style={{ border: `2px solid ${GOLD}44`, color: GOLD }}
              >
                <ChevronLeft className="w-5 h-5 xs:w-6 xs:h-6" />
              </button>
              {/* Next */}
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-2 xs:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 xs:w-12 xs:h-12 bg-emerald-900 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 border"
                aria-label="Next image"
                style={{ border: `2px solid ${GOLD}44`, color: GOLD }}
              >
                <ChevronRight className="w-5 h-5 xs:w-6 xs:h-6" />
              </button>
              {/* Image */}
              <img
                className="max-w-full max-h-[60vh] sm:max-h-[70vh] md:max-h-[78vh] object-contain mx-auto"
                alt={`${selectedImage.title} - ${selectedImage.description}`}
                src={selectedImage.src || "/placeholder.svg"}
              />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-emerald-900/95 text-white p-4 xs:p-6 rounded-b-2xl border-t"
                style={{ borderTop: `2px solid ${GOLD}44` }}>
                <h3 className="text-lg xs:text-2xl font-semibold mb-1" style={{ color: GOLD }}>{selectedImage.title}</h3>
                <p className="text-emerald-100 text-sm xs:text-base">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
  )
}

export default Gallery
