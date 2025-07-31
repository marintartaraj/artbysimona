import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import GalleryPage from '@/pages/GalleryPage';
import LoginPage from '@/pages/LoginPage';
import WorkerDashboard from '@/pages/WorkerDashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import BookingModal from '@/components/BookingModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  const handleBookingClick = () => {
    setIsBookingOpen(true);
  };

  const isDashboard =
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/worker') ||
    location.pathname.startsWith('/login');

  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen w-full bg-background text-foreground site-bg">
          {!isDashboard && <Navigation onBookingClick={handleBookingClick} />}

          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage onBookingClick={handleBookingClick} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage onBookingClick={handleBookingClick} />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/worker" element={<WorkerDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </AnimatePresence>
          </main>

          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
          />
          <Toaster />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
