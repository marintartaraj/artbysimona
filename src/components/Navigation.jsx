import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { NavLink, useLocation } from 'react-router-dom';

const glass = "bg-emerald-950/80 backdrop-blur-md shadow-lg shadow-emerald-900/20";

const Navigation = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: "#e5c97a", // subtle gold accent
    fontWeight: 700,
    letterSpacing: "0.07em",
    fontFamily: "'Montserrat', sans-serif"
  };

  return (
    <>
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? glass : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* LOGO */}
          <NavLink to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-extrabold text-2xl text-white cursor-pointer"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.12em",
                textShadow: "0 4px 16px #16352d57"
              }}
            >
              Art by <span style={{ color: "#e5c97a" }}>Simona</span>
            </motion.div>
          </NavLink>
          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map(item => (
              <NavLink key={item.key} to={item.path}>
                {({ isActive }) => (
                  <Button
                    variant="ghost"
                    className="font-semibold px-4 py-2 rounded-full text-white hover:text-emerald-300 transition"
                    style={isActive ? activeLinkStyle : {
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "0.07em",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Button>
                )}
              </NavLink>
            ))}
          </div>
          {/* LANGUAGE + BOOK NOW BUTTON (DESKTOP) */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full hover:bg-emerald-800 transition"
            >
              <Globe className="w-5 h-5 text-white" />
            </Button>
            <Button
              onClick={onBookingClick}
              className="bg-gradient-to-tr from-lime-700 via-emerald-700 to-emerald-900 text-white font-bold rounded-full px-6 py-2 shadow-md hover:scale-105 transition-all"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.11em",
                fontWeight: 700,
              }}
            >
              {t('book')}
            </Button>
          </div>
          {/* MOBILE: LANGUAGE + HAMBURGER */}
          <div className="flex md:hidden items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full hover:bg-emerald-800 transition"
            >
              <Globe className="w-5 h-5 text-white" />
            </Button>
            {/* Hamburger */}
            <button
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full relative z-50
                ${isMenuOpen ? 'bg-emerald-900/70 shadow-lg' : ''}`}
            >
              <div className={`h-0.5 w-6 bg-white mb-1 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-white mb-1 rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-white rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 menu-overlay flex items-center justify-center md:hidden"
            style={{
              background: "linear-gradient(135deg, #112b22ef 70%, #384e3b 100%)",
              backdropFilter: "blur(12px)"
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="text-center w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item, index) => (
                <NavLink key={item.key} to={item.path} onClick={handleMenuClick}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 + 0.07 }}
                    className={`block w-full text-3xl font-extrabold text-white transition py-4
                      ${location.pathname === item.path ? 'text-yellow-200 scale-105' : 'hover:text-emerald-200 hover:scale-105'}`}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "0.09em"
                    }}
                  >
                    {item.label}
                  </motion.div>
                </NavLink>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.07 + 0.1 }}
                className="mt-10"
              >
                <Button
                  onClick={handleBookingFromMenu}
                  size="lg"
                  className="bg-gradient-to-tr from-lime-700 via-emerald-700 to-emerald-900 text-white text-xl font-bold px-10 py-4 rounded-full shadow-md"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: "0.11em",
                  }}
                >
                  {t('book')}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for glass nav */}
      <style>{`
        .glass-effect {
          background: rgba(6,34,26,0.93);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 16px #16462b2a;
        }
      `}</style>
    </>
  );
};

export default Navigation;
