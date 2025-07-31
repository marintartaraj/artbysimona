import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Settings, Users, LogOut, Edit, Trash2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookings, setBookings] = useState([]);

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
        className="min-h-screen p-4 md:p-8 bg-background/80 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="serif-font text-4xl font-bold text-primary-foreground">
                Admin {t('dashboard')}
              </h1>
              <p className="text-muted-foreground text-lg">Welcome back, {user.name}!</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="secondary"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('logout')}
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="serif-font text-xl text-primary-foreground flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  {t('manageServices')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={handleFeatureClick} className="w-full">
                  Manage
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="serif-font text-xl text-primary-foreground flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {t('manageWorkers')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={handleFeatureClick} className="w-full">
                  Manage
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="serif-font text-xl text-primary-foreground">
                  Total Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-white">{bookings.length}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="serif-font text-2xl text-primary-foreground flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                All {t('bookings')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <p className="text-muted-foreground">No bookings yet.</p>
                ) : (
                  bookings.map((booking) => (
                    <div key={booking.id} className="p-4 bg-secondary rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-white">{booking.name}</p>
                          <p className="text-muted-foreground">{booking.service}</p>
                          <p className="text-sm text-muted-foreground">
                            {booking.date} at {booking.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Phone: {booking.phone}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">
                            {booking.status}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleFeatureClick}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="text-destructive/80 hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </>
  );
};

export default AdminDashboard;