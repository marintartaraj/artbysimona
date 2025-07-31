"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Heart, Sparkles, Eye } from "lucide-react"

const GOLD = "#E6C97A";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Clock, number: "8+", label: "Years Experience" },
    { icon: Award, number: "25+", label: "Certifications" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative py-12 md:py-20 bg-emerald-950">
        <div className="max-w-xl md:max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-6 text-white text-3xl xs:text-4xl sm:text-5xl font-black tracking-wider leading-tight"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
              textShadow: "0 3px 18px rgba(16, 53, 34, 0.19), 0 2px 8px #E6C97A44", // subtle gold glow
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
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-base xs:text-lg sm:text-xl text-emerald-50 mx-auto font-light leading-relaxed max-w-md md:max-w-3xl"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0 1px 7px #E6C97A22",
            }}
          >
            Discover the artistry and passion behind Tirana's most luxurious <span style={{ color: GOLD }}>jungle-inspired</span> beauty sanctuary.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-10 md:py-20 bg-emerald-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
          >
            <h2 className="mb-4 text-white text-2xl sm:text-3xl font-bold tracking-wide text-center lg:text-left"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
                textShadow: "0 2px 14px rgba(16,53,34,0.14), 0 2px 8px #E6C97A22",
                letterSpacing: "0.10em",
                color: GOLD, // gold accent
              }}>
              My Journey in Beauty
            </h2>
            <div className="max-w-lg">
              <p className="text-base xs:text-lg sm:text-xl leading-relaxed text-emerald-100 mb-4 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                With over 8 years of experience in the beauty industry, I've dedicated my career to enhancing natural
                beauty through artistry and precision. My passion began with a simple belief: every person deserves to
                feel confident and radiant.
              </p>
              <p className="text-base xs:text-lg sm:text-xl leading-relaxed text-emerald-100 mb-4 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                After training with renowned beauty experts across Europe, I returned to Tirana with a vision to create
                something unique—a sanctuary where luxury meets nature, where every treatment is a transformative
                experience.
              </p>
              <p className="text-base xs:text-lg sm:text-xl leading-relaxed text-emerald-100 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Today, Art by Simona stands as Tirana's premier destination for lash extensions, microblading, nail
                artistry, and comprehensive beauty services, all delivered in our signature jungle glam atmosphere.
              </p>
            </div>
          </motion.div>
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
            style={{ perspective: 1000 }}
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
              alt="Simona, the founder, working with a client"
              className="rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-80 object-cover shadow-xl shadow-emerald-950/25 bg-emerald-800/30"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 md:py-20 bg-emerald-900">
        <div className="max-w-xl md:max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-white mb-3 text-xl xs:text-2xl sm:text-3xl font-bold tracking-wide uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textShadow: "0 2px 12px rgba(16,53,34,0.13), 0 2px 8px #E6C97A44",
                letterSpacing: "0.09em",
                color: GOLD,
              }}>
              Our Achievements
            </h2>
            <p className="text-base xs:text-lg text-emerald-50 font-light leading-relaxed max-w-md mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-4">
            {stats.map(({ icon: Icon, number, label }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-950/60 backdrop-blur border border-emerald-800/30 rounded-2xl px-5 py-8 flex flex-col items-center justify-center shadow-lg shadow-emerald-950/12 cursor-pointer transition-all duration-200 hover:shadow-emerald-300/10"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  border: `1.5px solid ${GOLD}33`,
                  boxShadow: `0 2px 18px ${GOLD}22`,
                }}
              >
                <div
                  className="bg-emerald-900 w-12 h-12 xs:w-16 xs:h-16 rounded-full flex items-center justify-center mb-3 shadow-md shadow-emerald-950/18 border border-white/10"
                  style={{
                    border: `2px solid ${GOLD}55`,
                    boxShadow: `0 2px 12px ${GOLD}33`,
                  }}
                >
                  <Icon className="w-6 h-6 xs:w-8 xs:h-8" style={{ color: GOLD }} />
                </div>
                <div className="text-2xl xs:text-3xl font-extrabold mb-1"
                  style={{
                    color: GOLD,
                    textShadow: "0 1px 8px #fff8, 0 2px 8px #E6C97A22",
                  }}
                >
                  {number}
                </div>
                <div className="text-emerald-100 text-base xs:text-lg text-center">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-10 md:py-20 bg-emerald-950">
        <div className="max-w-xl md:max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-white text-xl xs:text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textShadow: "0 2px 12px rgba(16,53,34,0.11), 0 2px 8px #E6C97A55",
                letterSpacing: "0.08em",
                color: GOLD,
              }}>
              Our Mission & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-emerald-900/60 backdrop-blur border border-emerald-800/30 rounded-2xl p-7 mb-6 md:mb-0"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                border: `1.5px solid ${GOLD}22`,
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="bg-emerald-900 w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center mr-3 border border-white/10"
                  style={{
                    border: `2px solid ${GOLD}44`,
                  }}
                >
                  <Eye className="w-5 h-5 xs:w-6 xs:h-6" style={{ color: GOLD }} />
                </div>
                <h3 className="text-lg xs:text-2xl font-bold"
                  style={{ color: GOLD }}>Our Mission</h3>
              </div>
              <p className="text-emerald-100 leading-relaxed font-light text-base xs:text-lg">
                To enhance natural beauty through artistry, precision, and care, creating a sanctuary where every client
                feels valued, pampered, and transformed. We believe beauty should be accessible, sustainable, and
                celebrate individuality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-emerald-900/60 backdrop-blur border border-emerald-800/30 rounded-2xl p-7"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                border: `1.5px solid ${GOLD}22`,
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="bg-emerald-900 w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center mr-3 border border-white/10"
                  style={{
                    border: `2px solid ${GOLD}44`,
                  }}
                >
                  <Sparkles className="w-5 h-5 xs:w-6 xs:h-6" style={{ color: GOLD }} />
                </div>
                <h3 className="text-lg xs:text-2xl font-bold"
                  style={{ color: GOLD }}>Our Values</h3>
              </div>
              <p className="text-emerald-100 leading-relaxed font-light text-base xs:text-lg">
                Excellence in every detail, respect for natural beauty, commitment to continuous learning, and creating
                meaningful connections with our clients. We prioritize quality, safety, and sustainability in all our
                practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
