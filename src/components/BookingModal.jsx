import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, Calendar, Clock, User, Phone, X, CheckCircle, Star } from 'lucide-react';

const GOLD = "#E6C97A";
const EMERALD = "#10B981";

const BookingModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    { value: 'lashes', label: t('lashes'), icon: '👁️', duration: '2-3 hours' },
    { value: 'nails', label: t('nails'), icon: '💅', duration: '1-2 hours' },
    { value: 'makeup', label: t('makeup'), icon: '✨', duration: '1-1.5 hours' },
    { value: 'brows', label: t('brows'), icon: '🎨', duration: '2-3 hours' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleWhatsApp = () => {
    const selectedService = services.find(s => s.value === bookingData.service);
    const message = `Hello! I'd like to book a ${selectedService?.label || 'beauty'} appointment for ${bookingData.date} at ${bookingData.time}. My name is ${bookingData.name}.`;
    const whatsappUrl = `https://wa.me/355692345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!bookingData.service || !bookingData.date || !bookingData.time || !bookingData.name || !bookingData.phone) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields to book an appointment.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const bookings = JSON.parse(localStorage.getItem('artBySimonaBookings') || '[]');
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    localStorage.setItem('artBySimonaBookings', JSON.stringify(bookings));

    toast({
      title: "Booking Confirmed! 🎉",
      description: t('bookingSuccess'),
      className: "bg-emerald-600 border-emerald-500/50 text-white"
    });

    setBookingData({ service: '', date: '', time: '', name: '', phone: '' });
    setIsSubmitting(false);
    onClose();
  };

  const handleClose = () => {
    setBookingData({ service: '', date: '', time: '', name: '', phone: '' });
    setIsSubmitting(false);
    onClose();
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const selectedService = services.find(s => s.value === bookingData.service);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-emerald-800/95 backdrop-blur-xl border border-emerald-100/20 shadow-2xl shadow-black/50 max-w-[95vw] sm:max-w-lg md:max-w-xl rounded-3xl p-4 sm:p-6 transition-all duration-300 z-[10000] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-emerald-100">Book Your Session</span>
            </div>
            <DialogTitle
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center tracking-wide mb-2"
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontWeight: 700,
                textShadow: `0 2px 12px ${GOLD}33`
              }}
            >
              {t('bookingTitle')}
            </DialogTitle>
            <p className="text-xs sm:text-sm md:text-base text-emerald-200 text-center leading-relaxed px-2">
              Experience luxury beauty services in our jungle-inspired sanctuary
            </p>
          </motion.div>
        </DialogHeader>

        <motion.form 
          onSubmit={handleSubmit} 
          className="flex flex-col gap-3 sm:gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Service Selection */}
          <div className="space-y-2 sm:space-y-3">
            <label className="text-xs sm:text-sm font-semibold text-emerald-100 flex items-center gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
              Select Service
            </label>
            <Select onValueChange={(value) => setBookingData({ ...bookingData, service: value })} value={bookingData.service}>
              <SelectTrigger className="w-full rounded-xl bg-white/5 border-emerald-800/30 text-white placeholder:text-emerald-300 focus:border-gold/50 focus:ring-gold/20 touch-target h-12 sm:h-14 text-sm sm:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <SelectValue placeholder="Choose your service" />
              </SelectTrigger>
              <SelectContent className="bg-emerald-900/95 backdrop-blur-xl border-emerald-800/30 w-full max-w-[calc(100vw-2rem)] sm:max-w-none z-[10001]">
                {services.map(service => (
                  <SelectItem 
                    key={service.value} 
                    value={service.value}
                    className="text-white hover:bg-emerald-800/50 focus:bg-emerald-800/50 touch-target py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{service.icon}</span>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{service.label}</div>
                        <div className="text-xs text-emerald-300">{service.duration}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2 sm:space-y-3">
              <label className="text-xs sm:text-sm font-semibold text-emerald-100 flex items-center gap-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                Date
              </label>
              <Input
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                min={getTomorrowDate()}
                className="w-full rounded-xl bg-white/5 border-emerald-800/30 text-white [color-scheme:dark] focus:border-gold/50 focus:ring-gold/20 touch-target h-12 sm:h-14 text-sm sm:text-base"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                required
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <label className="text-xs sm:text-sm font-semibold text-emerald-100 flex items-center gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                Time
              </label>
              <Select onValueChange={(value) => setBookingData({ ...bookingData, time: value })} value={bookingData.time}>
                <SelectTrigger className="w-full rounded-xl bg-white/5 border-emerald-800/30 text-white placeholder:text-emerald-300 focus:border-gold/50 focus:ring-gold/20 touch-target h-12 sm:h-14 text-sm sm:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="bg-emerald-900/95 backdrop-blur-xl border-emerald-800/30 w-full max-w-[calc(100vw-2rem)] sm:max-w-none z-[10001]">
                  {timeSlots.map(time => (
                    <SelectItem 
                      key={time} 
                      value={time}
                      className="text-white hover:bg-emerald-800/50 focus:bg-emerald-800/50 touch-target py-3"
                    >
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <label className="text-xs sm:text-sm font-semibold text-emerald-100 flex items-center gap-2">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                Full Name
              </label>
              <Input
                placeholder="Enter your full name"
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                className="w-full rounded-xl bg-white/5 border-emerald-800/30 text-white placeholder:text-emerald-300 focus:border-gold/50 focus:ring-gold/20 touch-target h-12 sm:h-14 text-sm sm:text-base"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                required
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <label className="text-xs sm:text-sm font-semibold text-emerald-100 flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                Phone Number
              </label>
              <Input
                placeholder="Enter your phone number"
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                className="w-full rounded-xl bg-white/5 border-emerald-800/30 text-white placeholder:text-emerald-300 focus:border-gold/50 focus:ring-gold/20 touch-target h-12 sm:h-14 text-sm sm:text-base"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                required
              />
            </div>
          </div>

          {/* Service Preview */}
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-emerald-800/30 to-emerald-700/30 border border-emerald-600/30 rounded-xl p-3 sm:p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">{selectedService.icon}</span>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">{selectedService.label}</div>
                  <div className="text-xs sm:text-sm text-emerald-300">Duration: {selectedService.duration}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <DialogFooter className="flex flex-col gap-3 pt-4 w-full">
            {/* Confirm Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2
                bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 
                hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg shadow-emerald-500/20
                border-2 border-emerald-400/20
                focus:ring-2 focus:ring-emerald-400/70
                transition-all duration-300
                touch-target
                h-12 sm:h-14
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.02em"
              }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span className="text-sm sm:text-base">Processing...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Confirm</span>
                </>
              )}
            </Button>

            {/* WhatsApp Button */}
            <Button
              type="button"
              onClick={handleWhatsApp}
              variant="secondary"
              className="
                w-full py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2
                bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54]
                hover:from-[#128C7E] hover:via-[#075E54] hover:to-[#25D366]
                border-2 border-[#25D366]/40
                transition-all duration-300
                touch-target
                shadow-lg shadow-[#25D366]/20
                h-12 sm:h-14
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.02em"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="M17.47 14.37c-.27-.14-1.6-.8-1.85-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.12-.41-2.13-1.31-.79-.71-1.33-1.59-1.48-1.86-.16-.27-.02-.41.12-.55.13-.13.29-.34.43-.51.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.61-1.48-.84-2.04-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.67 1.12 2.86c.13.18 1.94 2.95 4.71 4.02.66.23 1.17.37 1.57.47.66.16 1.27.13 1.74.08.53-.06 1.6-.65 1.83-1.28.23-.62.23-1.16.16-1.28-.07-.12-.25-.2-.52-.34z"/>
              </svg>
              <span className="whitespace-nowrap text-sm sm:text-base">WhatsApp</span>
            </Button>

            {/* Cancel Button */}
            <DialogClose asChild>
              <Button
                type="button"
                variant="ghost"
                className="w-full py-2 sm:py-3 rounded-xl text-sm sm:text-base font-normal flex items-center justify-center gap-2 text-emerald-300 hover:text-white hover:bg-white/5 transition-all duration-300 touch-target h-10 sm:h-12"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
