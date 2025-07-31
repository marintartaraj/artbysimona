import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in your services. My name is ${formData.name || '[Name]'} and my phone is ${formData.phone || '[Phone]'}.`;
    const whatsappUrl = `https://wa.me/355692345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="serif-font text-4xl md:text-6xl font-bold gold-text mb-4">
            {t('contactTitle')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card/80 border border-yellow-400/20 rounded-2xl p-4 shadow-xl">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder={t('name')}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-input border-yellow-400/30 text-white placeholder:text-gray-400 rounded-lg"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder={t('phone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-input border-yellow-400/30 text-white placeholder:text-gray-400 rounded-lg"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t('message')}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-input border-yellow-400/30 text-white placeholder:text-gray-400 rounded-lg"
                      rows={5}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 gold-gradient-button rounded-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t('send')}
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t('whatsapp')}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 mt-8 md:mt-0"
          >
            <div className="flex items-center space-x-4 text-white">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">+355 69 234 5678</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">Tirana, Albania</span>
            </div>
            
            <img   
              alt="Art by Simona salon location in Tirana on a stylized map"
              className="w-full h-64 object-cover rounded-2xl leaf-shadow"
              src="https://images.unsplash.com/photo-1623474769376-87682a78c0fe" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;