import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });

  const services = [
    { value: 'lashes', label: t('lashes') },
    { value: 'nails', label: t('nails') },
    { value: 'makeup', label: t('makeup') },
    { value: 'brows', label: t('brows') }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleWhatsApp = () => {
    const message = `Hello! I'd like to inquire about a booking.`;
    const whatsappUrl = `https://wa.me/355692345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingData.service || !bookingData.date || !bookingData.time || !bookingData.name || !bookingData.phone) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields to book an appointment.",
        variant: "destructive"
      });
      return;
    }

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
      title: "Booking Confirmed!",
      description: t('bookingSuccess'),
      className: "bg-primary border-primary/50 text-primary-foreground"
    });

    setBookingData({ service: '', date: '', time: '', name: '', phone: '' });
    onClose();
  };

  const handleClose = () => {
    setBookingData({ service: '', date: '', time: '', name: '', phone: '' });
    onClose();
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white/10 backdrop-blur-2xl border border-emerald-100/30 shadow-2xl shadow-black/40 max-w-[92vw] sm:max-w-md rounded-2xl p-4 sm:p-8 transition-all">
        <DialogHeader>
          <DialogTitle
            className="text-2xl sm:text-3xl text-primary-foreground text-center tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            {t('bookingTitle')}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full py-3">
          <Select onValueChange={(value) => setBookingData({ ...bookingData, service: value })} value={bookingData.service}>
            <SelectTrigger className="w-full rounded-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <SelectValue placeholder={t('selectService')} />
            </SelectTrigger>
            <SelectContent>
              {services.map(service => (
                <SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="date"
            value={bookingData.date}
            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
            min={getTomorrowDate()}
            className="w-full rounded-xl [color-scheme:dark]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            required
          />

          <Select onValueChange={(value) => setBookingData({ ...bookingData, time: value })} value={bookingData.time}>
            <SelectTrigger className="w-full rounded-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <SelectValue placeholder={t('selectTime')} />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map(time => (<SelectItem key={time} value={time}>{time}</SelectItem>))}
            </SelectContent>
          </Select>

          <Input
            placeholder={t('name')}
            value={bookingData.name}
            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
            className="w-full rounded-xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            required
          />
          <Input
            placeholder={t('phone')}
            value={bookingData.phone}
            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
            className="w-full rounded-xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            required
          />

        <DialogFooter className="flex flex-row gap-3 pt-2 w-full">
          {/* Confirm */}
          <Button
            type="submit"
            className="
              w-full py-3 rounded-xl text-base font-bold flex items-center justify-center
              bg-emerald-600 hover:bg-emerald-700
              shadow-lg shadow-emerald-500/20
              border-2 border-emerald-400/20
              focus:ring-2 focus:ring-emerald-400/70
              transition-all
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "capitalize",
              letterSpacing: "0.02em"
            }}
          >
            Confirm
          </Button>
          {/* WhatsApp: logo + text */}
          <Button
            type="button"
            onClick={handleWhatsApp}
            variant="secondary"
            className="
              w-full py-3 rounded-xl text-base font-bold flex items-center justify-center gap-2
              bg-[#232D29] hover:bg-emerald-900
              border-2 border-emerald-700/40
              transition-all
              shadow
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "capitalize",
              letterSpacing: "0.02em"
            }}
          >
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fill="#25D366"
                d="M17.47 14.37c-.27-.14-1.6-.8-1.85-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.12-.41-2.13-1.31-.79-.71-1.33-1.59-1.48-1.86-.16-.27-.02-.41.12-.55.13-.13.29-.34.43-.51.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.61-1.48-.84-2.04-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.67 1.12 2.86c.13.18 1.94 2.95 4.71 4.02.66.23 1.17.37 1.57.47.66.16 1.27.13 1.74.08.53-.06 1.6-.65 1.83-1.28.23-.62.23-1.16.16-1.28-.07-.12-.25-.2-.52-.34z"
              />
            </svg>
            WhatsApp
          </Button>
          {/* Cancel */}
          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              className="w-full py-3 rounded-xl text-base font-normal flex items-center justify-center"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
