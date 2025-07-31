import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 relative bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img  
              alt="Luxury beauty salon interior with elegant jungle theme"
              className="w-full h-auto object-cover rounded-3xl leaf-shadow" 
             src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h2 className="serif-font text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('aboutText')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;