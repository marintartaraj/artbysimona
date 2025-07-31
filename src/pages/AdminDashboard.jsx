import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Settings, Users, LogOut, Edit, Trash2, Crown, BarChart3, TrendingUp, Clock, Phone, Mail, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const GOLD = "#E6C97A";
const EMERALD = "#10B981";

const AdminDashboard = () => {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookings, setBookings] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!user || user.type !== 'admin') {
      navigate('/login');
      return;
    }

    const allBookings = JSON.parse(localStorage.getItem('artBySimonaBookings') || '[]');
    setBookings(allBookings);
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
    toast({
      title: "Logged out successfully",
      description: "See you soon!",
    });
  };

  const handleDeleteBooking = (bookingId) => {
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem('artBySimonaBookings', JSON.stringify(updatedBookings));
    toast({
      title: "Booking deleted",
      description: "The booking has been removed.",
    });
  };

  const handleFeatureClick = () => {
    toast({
      title: t('featureNotImplemented'),
    });
  };

  const getStats = () => {
    const totalBookings = bookings.length;
    const pendingBookings = bookings.filter(b => b.status === 'pending').length;
    const completedBookings = bookings.filter(b => b.status === 'completed').length;
    const todayBookings = bookings.filter(b => {
      const today = new Date().toISOString().split('T')[0];
      return b.date === today;
    }).length;

    return { totalBookings, pendingBookings, completedBookings, todayBookings };
  };

  const stats = getStats();

  if (!user) return null;

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Art by Simona</title>
        <meta name="description" content="Admin dashboard for Art by Simona beauty salon management." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,201,122,0.05),transparent_50%)]" />
        
        <div className="relative z-10 p-4 sm:p-6 md:p-8">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                    <span className="text-xs sm:text-sm font-medium text-emerald-100">Admin Panel</span>
                  </div>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    textShadow: `0 2px 12px ${GOLD}33`
                  }}
                >
                  Admin {t('dashboard')}
                </h1>
                <p className="text-sm sm:text-base text-emerald-200">Welcome back, {user.name}!</p>
              </div>
              <Button
                onClick={handleLogout}
                variant="secondary"
                className="bg-emerald-800/40 backdrop-blur-sm border-emerald-700/30 text-emerald-100 hover:bg-emerald-800/60 touch-target"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                {t('logout')}
              </Button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border border-emerald-800/30 rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base text-emerald-300 font-medium">Total Bookings</p>
                      <p className="text-2xl sm:text-3xl font-bold text-white">{stats.totalBookings}</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-xl">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border border-emerald-800/30 rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base text-emerald-300 font-medium">Today</p>
                      <p className="text-2xl sm:text-3xl font-bold text-white">{stats.todayBookings}</p>
                    </div>
                    <div className="bg-gradient-to-br from-gold to-yellow-400 p-3 rounded-xl">
                      <Calendar className="w-6 h-6 text-emerald-950" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border border-emerald-800/30 rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base text-emerald-300 font-medium">Pending</p>
                      <p className="text-2xl sm:text-3xl font-bold text-white">{stats.pendingBookings}</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border border-emerald-800/30 rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base text-emerald-300 font-medium">Completed</p>
                      <p className="text-2xl sm:text-3xl font-bold text-white">{stats.completedBookings}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Management Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border border-emerald-800/30 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-white flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-2 rounded-lg">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    {t('manageServices')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleFeatureClick} 
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl py-3 touch-target"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Manage Services
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border border-emerald-800/30 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-white flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <div className="bg-gradient-to-br from-gold to-yellow-400 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-emerald-950" />
                    </div>
                    {t('manageWorkers')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleFeatureClick} 
                    className="w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-emerald-950 font-semibold rounded-xl py-3 touch-target"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Manage Workers
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bookings List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/60 to-emerald-800/60 backdrop-blur-xl border border-emerald-800/30 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-white flex items-center gap-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-2 rounded-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    All {t('bookings')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.length === 0 ? (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
                          <Calendar className="w-4 h-4 text-gold" />
                          <span className="text-sm font-medium text-emerald-100">No Bookings</span>
                        </div>
                        <p className="text-emerald-200">No bookings have been made yet.</p>
                      </div>
                    ) : (
                      bookings.map((booking, index) => (
                        <motion.div 
                          key={booking.id} 
                          className="p-4 sm:p-6 bg-gradient-to-br from-emerald-800/40 to-emerald-700/40 backdrop-blur-sm border border-emerald-700/30 rounded-xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">
                                    {booking.name.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <div>
                                  <p className="font-semibold text-white text-base sm:text-lg">{booking.name}</p>
                                  <p className="text-emerald-300 text-sm">{booking.service}</p>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center gap-2 text-emerald-200">
                                  <Calendar className="w-4 h-4 text-gold" />
                                  <span>{booking.date} at {booking.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-200">
                                  <Phone className="w-4 h-4 text-gold" />
                                  <span>{booking.phone}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                booking.status === 'pending' 
                                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                                  : booking.status === 'completed'
                                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              }`}>
                                {booking.status}
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={handleFeatureClick}
                                className="text-emerald-300 hover:text-white hover:bg-white/10 touch-target"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDeleteBooking(booking.id)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10 touch-target"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AdminDashboard;