import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Home, User, Palette, Image, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { NavLink, useLocation } from 'react-router-dom';

const glass = "bg-emerald-950/90 backdrop-blur-xl shadow-2xl shadow-emerald-900/30 border-b border-emerald-100/10";

const Navigation = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { key: 'home', label: t('home'), path: '/' },
    { key: 'about', label: t('about'), path: '/about' },
    { key: 'services', label: t('services'), path: '/services' },
    { key: 'gallery', label: t('gallery'), path: '/gallery' }
  ];

  const handleMenuClick = () => setIsMenuOpen(false);
  const handleBookingFromMenu = () => { onBookingClick(); setIsMenuOpen(false); };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    
    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const activeLinkStyle = {
    color: "#e5c97a",
    fontWeight: 700,
    letterSpacing: "0.07em",
    fontFamily: "'Montserrat', sans-serif",
    textShadow: "0 2px 8px rgba(229, 201, 122, 0.3)"
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out ${isScrolled || isMenuOpen ? glass : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="font-extrabold text-lg sm:text-xl md:text-2xl text-white cursor-pointer"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.12em",
                textShadow: "0 4px 16px rgba(22, 53, 45, 0.34)"
              }}
            >
              Art by <span style={{ color: "#e5c97a" }}>Simona</span>
            </motion.div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <NavLink key={item.key} to={item.path}>
                {({ isActive }) => (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className="font-semibold px-4 py-2 rounded-full text-white hover:text-emerald-300 hover:bg-white/5 transition-all duration-300 touch-target"
                      style={isActive ? activeLinkStyle : {
                        fontFamily: "'Montserrat', sans-serif",
                        letterSpacing: "0.07em",
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 ml-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="rounded-full hover:bg-emerald-800/50 transition-all duration-300 touch-target"
              >
                <Globe className="w-5 h-5 text-white" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onBookingClick}
                className="bg-gradient-to-tr from-emerald-600 via-emerald-700 to-emerald-800 text-white font-bold rounded-full px-6 py-2 shadow-lg hover:shadow-xl hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900 transition-all duration-300 touch-target border border-emerald-400/20"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.11em",
                  fontWeight: 700,
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('book')}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="rounded-full hover:bg-emerald-800/50 transition-all duration-300 touch-target"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Button>
            </motion.div>
            
            <motion.button
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full relative z-[10000] touch-target transition-all duration-300
                ${isMenuOpen ? 'bg-emerald-900/70 shadow-lg rotate-180' : 'hover:bg-emerald-800/30'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`h-0.5 w-6 bg-white mb-1 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-white mb-1 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] menu-overlay flex items-center justify-center md:hidden overflow-y-auto"
            style={{
              background: "linear-gradient(135deg, #022c22, #064e3b)",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="text-center w-full px-6 py-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Items */}
              <div className="space-y-3 mb-8">
                {menuItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <NavLink key={item.key} to={item.path} onClick={handleMenuClick}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`block w-full text-lg sm:text-xl font-bold text-white transition-all duration-300 py-4 px-6 touch-target rounded-xl border
                          ${isActive 
                            ? 'text-gold bg-white/15 border-gold/30 shadow-lg shadow-gold/20' 
                            : 'hover:text-emerald-200 hover:bg-white/10 hover:border-white/20 border-transparent'
                          }`}
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          letterSpacing: "0.05em",
                          textShadow: "0 1px 3px rgba(0,0,0,0.3)"
                        }}
                      >
                        <div className="flex items-center justify-center">
                          <span>{item.label}</span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-gold rounded-full ml-3"
                            />
                          )}
                        </div>
                      </motion.div>
                    </NavLink>
                  );
                })}
              </div>

              {/* Book Now Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 + 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleBookingFromMenu}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white text-lg sm:text-xl font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl touch-target w-full border border-emerald-400/30 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900 transition-all duration-300"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  {t('book')} Now
                </Button>
              </motion.div>

              {/* Close Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: menuItems.length * 0.1 + 0.4 }}
                className="mt-6"
              >
                <Button
                  variant="ghost"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-emerald-200 hover:text-white hover:bg-white/10 transition-all duration-300 touch-target"
                >
                  <X className="w-5 h-5 mr-2" />
                  Close Menu
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .menu-overlay {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            overflow-y: auto !important;
            max-height: 100vh;
          }
          .menu-overlay > div {
            visibility: visible !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
