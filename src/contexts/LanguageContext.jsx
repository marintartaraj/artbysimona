import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    book: 'Book Now',
    login: 'Login',
    
    // Hero Section
    heroSubtitle: 'Where luxury meets wild beauty in the heart of Tirana',
    bookAppointment: 'Book Your Appointment',
    
    // About
    aboutTitle: 'About Art by Simona',
    aboutText: 'Step into our jungle oasis where luxury beauty treatments meet wild sophistication. Located in the vibrant heart of Tirana, we specialize in creating stunning transformations that bring out your natural beauty.',
    
    // Services
    servicesTitle: 'Our Services',
    ourExpertise: 'Discover our range of expert treatments designed to enhance your natural beauty.',
    lashes: 'Lashes',
    nails: 'Nails',
    makeup: 'Makeup',
    brows: 'Brows',
    lashesDesc: 'Dramatic volume and length extensions',
    nailsDesc: 'Artistic nail designs and treatments',
    makeupDesc: 'Professional makeup for any occasion',
    browsDesc: 'Perfect brow shaping and styling',
    
    // Gallery
    galleryTitle: 'Gallery',
    ourMasterpieces: 'A showcase of our client transformations and artistic work.',
    
    // Booking
    bookingTitle: 'Book Your Appointment',
    selectService: 'Select Service',
    selectDate: 'Select Date',
    selectTime: 'Select Time',
    confirmBooking: 'Confirm Booking',
    bookingSuccess: 'Booking confirmed! We will contact you soon.',
    whatsapp: 'Contact via WhatsApp',
    
    // Login
    loginTitle: 'Login',
    username: 'Username',
    password: 'Password',
    worker: 'Worker',
    admin: 'Admin',
    
    // Dashboard
    dashboard: 'Dashboard',
    bookings: 'Bookings',
    mySchedule: 'My Schedule',
    manageServices: 'Manage Services',
    manageWorkers: 'Manage Workers',
    logout: 'Logout',
    
    // Common
    name: 'Name',
    phone: 'Phone',
    cancel: 'Cancel',
    
    // Notifications
    featureNotImplemented: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀'
  },
  al: {
    // Navigation
    home: 'Kryefaqja',
    about: 'Rreth Nesh',
    services: 'Shërbimet',
    gallery: 'Galeria',
    book: 'Rezervo Tani',
    login: 'Hyrje',
    
    // Hero Section
    heroSubtitle: 'Ku luksi takon bukurinë e egër në zemër të Tiranës',
    bookAppointment: 'Rezervo Takimin Tënd',
    
    // About
    aboutTitle: 'Rreth Art by Simona',
    aboutText: 'Hyni në oazin tonë të xhunglës ku trajtimet luksoze të bukurisë takojnë sofistikimin e egër. I vendosur në zemrën vibrante të Tiranës, ne specializohemi në krijimin e transformimeve mahnitëse që nxjerrin bukurinë tuaj natyrale.',
    
    // Services
    servicesTitle: 'Shërbimet Tona',
    ourExpertise: 'Zbuloni gamën tonë të trajtimeve eksperte të dizajnuara për të përmirësuar bukurinë tuaj natyrale.',
    lashes: 'Qerpikët',
    nails: 'Thonjtë',
    makeup: 'Grim',
    brows: 'Vetullat',
    lashesDesc: 'Zgjatje dramatike dhe volum',
    nailsDesc: 'Dizajne artistike dhe trajtim thonjtësh',
    makeupDesc: 'Grim profesional për çdo rast',
    browsDesc: 'Formësim dhe stilizim i përsosur i vetullave',
    
    // Gallery
    galleryTitle: 'Galeria',
    ourMasterpieces: 'Një vitrinë e transformimeve të klientëve tanë dhe punës artistike.',
    
    // Booking
    bookingTitle: 'Rezervo Takimin Tënd',
    selectService: 'Zgjidh Shërbimin',
    selectDate: 'Zgjidh Datën',
    selectTime: 'Zgjidh Orën',
    confirmBooking: 'Konfirmo Rezervimin',
    bookingSuccess: 'Rezervimi u konfirmua! Do t\'ju kontaktojmë së shpejti.',
    whatsapp: 'Kontakto me WhatsApp',

    // Login
    loginTitle: 'Hyrje',
    username: 'Emri i përdoruesit',
    password: 'Fjalëkalimi',
    worker: 'Punëtor',
    admin: 'Administrator',
    
    // Dashboard
    dashboard: 'Paneli',
    bookings: 'Rezervimet',
    mySchedule: 'Orari Im',
    manageServices: 'Menaxho Shërbimet',
    manageWorkers: 'Menaxho Punëtorët',
    logout: 'Dil',
    
    // Common
    name: 'Emri',
    phone: 'Telefoni',
    cancel: 'Anulo',
    
    // Notifications
    featureNotImplemented: '🚧 Ky funksion nuk është implementuar ende—por mos u shqetëso! Mund ta kërkosh në kërkesën tënde të ardhshme! 🚀'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key, fallback) => {
    return translations[language][key] || fallback || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'al' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};