import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = ({ onBookingClick }) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center space-y-8"
        >
          <h1 className="serif-font text-5xl md:text-8xl font-bold text-white leading-tight tracking-wide">
            Art by Simona
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            {t('heroSubtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={onBookingClick}
              size="lg"
              className="px-12 py-8 text-lg rounded-full"
            >
              {t('bookAppointment')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;