import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1522337360788-818e93aa7e0e?q=80&w=1974&auto=format&fit=crop", alt: 'Stunning eyelash extensions with dramatic volume and length' },
    { src: "https://images.unsplash.com/photo-1604948432 टॉपिक्स-nails-design-with-green-leaves?q=80&w=1974&auto=format&fit=crop", alt: 'Artistic nail design with leafy patterns' },
    { src: "https://images.unsplash.com/photo-1633681926019-03bd9325ec20?q=80&w=1974&auto=format&fit=crop", alt: 'Professional makeup transformation with bold colors' },
    { src: "https://images.unsplash.com/photo-1596701062314-93215d2b67a5?q=80&w=1974&auto=format&fit=crop", alt: 'Perfect eyebrow shaping and microblading results' },
    { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop", alt: 'Luxury beauty salon treatment room with tropical decor' },
    { src: "https://images.unsplash.com/photo-1599386412089-d419a4e4d5ce?q=80&w=1974&auto=format&fit=crop", alt: 'Glamorous full-face makeup for a special event' }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="serif-font text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            {t('galleryTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('ourMasterpieces')}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img   
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={image.src} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;