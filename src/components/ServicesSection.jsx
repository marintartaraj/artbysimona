import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('lashes'),
      description: t('lashesDesc'),
      image: 'Professional eyelash extensions being applied in luxury salon'
    },
    {
      title: t('nails'),
      description: t('nailsDesc'),
      image: 'Artistic nail art design with gold accents and jungle patterns'
    },
    {
      title: t('makeup'),
      description: t('makeupDesc'),
      image: 'Professional makeup application with luxury cosmetics'
    },
    {
      title: t('brows'),
      description: t('browsDesc'),
      image: 'Perfect eyebrow shaping and styling treatment'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="serif-font text-4xl md:text-6xl font-bold gold-text mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('ourExpertise')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-card/80 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 group rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-400/10">
                <div className="overflow-hidden">
                  <img   
                    alt={`${service.title} service at Art by Simona`}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="serif-font text-2xl gold-text mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;