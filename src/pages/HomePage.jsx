"use client";
import { motion } from "framer-motion";
import { Eye, Sparkles, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const leafyBg =
  "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const GOLD = "#E6C97A";

const Home = ({ onBookingClick }) => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Eye,
      title: "Lash Extensions",
      description: "Premium silk lashes for natural beauty",
    },
    {
      icon: Sparkles,
      title: "Expert Artistry",
      description: "8+ years of professional experience",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 6 days a week for your convenience",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Located in the heart of Tirana",
    },
  ];

  return (
    <>
      {/* --- HERO --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <img
          src={leafyBg}
          alt="Jungle green leaves"
          className="absolute z-0 top-0 left-0 w-full h-full object-cover scale-105 brightness-[.84]"
          style={{ filter: "blur(1.5px) grayscale(0.1) contrast(1.08)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/85 via-emerald-950/80 to-emerald-800/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-700/10 to-emerald-950/85 pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col items-center text-center px-4 py-10 text-white drop-shadow-lg">
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-4 md:mb-7 leading-tight"
          >
            <span
              className="block text-2xl md:text-5xl font-light tracking-widest italic"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: `0 3px 14px rgba(21,36,26,.16)`,
                letterSpacing: "0.15em",
                color: GOLD, // Subtle gold for "art by"
              }}
            >
              art by
            </span>
            <span
              className="block text-5xl md:text-8xl font-extrabold uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.18em",
                fontWeight: 900,
                color: "#FBFAF6",
                textShadow:
                  `0 4px 32px #253821, 0 0px 0px #fff3, 0 6px 48px #29281a4b, 0 2px 8px ${GOLD}99`,
                lineHeight: 1.08,
              }}
            >
              SIMONA
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-2xl font-light mb-7 max-w-xl mx-auto leading-snug text-emerald-50 drop-shadow"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: `0 2px 14px #02190070, 0 2px 6px ${GOLD}44`,
            }}
          >
            Where Nature Meets <span style={{ color: GOLD }}>Luxury</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col xs:flex-row gap-4 justify-center mt-2"
          >
            <Button
              className="bg-gradient-to-br from-green-900 via-emerald-700 to-lime-700 hover:from-emerald-800 hover:via-green-800 hover:to-lime-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl shadow-emerald-950/25 border-2 border-white/10 backdrop-blur-2xl transition-all duration-200 tracking-wider"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.09em",
                fontWeight: 800,
                boxShadow: `0 2px 18px ${GOLD}33`,
                border: `2px solid ${GOLD}33`,
              }}
              onClick={onBookingClick}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #E6C97A 20%, #fff6d0 70%, #FFD700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                }}
              >
                Book Your Experience
              </span>
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-emerald-50 hover:text-emerald-900 px-8 py-4 text-lg font-semibold rounded-full bg-white/5 backdrop-blur-2xl shadow shadow-emerald-950/15 transition-all"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.08em",
                fontWeight: 600,
                borderWidth: "2px",
                borderColor: GOLD,
                color: GOLD,
              }}
              onClick={() => navigate("/services")}
            >
              View Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES (Floating Glass Cards) --- */}
      <section className="py-20 bg-emerald-950 relative overflow-hidden">
        <img
          src={leafyBg}
          alt="Leaves"
          className="absolute left-0 -top-10 w-1/2 max-w-lg blur-2xl opacity-15 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-emerald-50 mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.10em",
              textShadow: `0 2px 12px #16322a33, 0 2px 8px ${GOLD}33`,
              color: GOLD,
            }}
          >
            Why Choose Art by Simona
          </h2>
          <p
            className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Experience the perfect blend of artistry, luxury, and natural beauty in our unique salon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.07,
                  rotateX: 4,
                  rotateY: -4,
                  boxShadow:
                    `0 12px 60px #3fa77770, 0 0px 0px #fff3, 0 8px 40px ${GOLD}22`,
                }}
                className="group bg-white/10 backdrop-blur-xl border border-emerald-800/40 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[230px] shadow-2xl shadow-emerald-950/15 hover:shadow-emerald-400/15 transition-all duration-300 cursor-pointer"
                style={{
                  perspective: 800,
                  fontFamily: "'Montserrat', sans-serif",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  border: `1.5px solid ${GOLD}18`,
                }}
              >
                <div
                  className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-lime-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-950/30 group-hover:scale-110 transition-transform duration-200 border border-white/20"
                  style={{
                    boxShadow: `0 2px 14px ${GOLD}44`,
                    border: `2px solid ${GOLD}30`,
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: GOLD }} />
                </div>
                <h3
                  className="text-xl md:text-2xl font-semibold text-white mb-2 drop-shadow"
                  style={{ color: GOLD }}
                >
                  {feature.title}
                </h3>
                <p className="text-emerald-100 text-lg text-center">{feature.description}</p>
              </motion.div>
            );
          })}
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
    </>
  );
};

export default Home;
