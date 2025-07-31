import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, LogOut } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const WorkerDashboard = () => {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user || user.type !== 'worker') {
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

  const handleFeatureClick = () => {
    toast({
      title: t('featureNotImplemented'),
    });
  };

  if (!user) return null;

  return (
    <>
      <Helmet>
        <title>Worker Dashboard - Art by Simona</title>
        <meta name="description" content="Worker dashboard for Art by Simona beauty salon." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen p-4 md:p-8 bg-background/80 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="serif-font text-4xl font-bold text-primary-foreground">
                {t('dashboard')}
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

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="serif-font text-2xl text-primary-foreground flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  {t('bookings')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.length === 0 ? (
                    <p className="text-muted-foreground">No bookings yet.</p>
                  ) : (
                    bookings.slice(0, 5).map((booking) => (
                      <div key={booking.id} className="p-4 bg-secondary rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-white">{booking.name}</p>
                            <p className="text-muted-foreground">{booking.service}</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.date} at {booking.time}
                            </p>
                          </div>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="serif-font text-2xl text-primary-foreground flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  {t('mySchedule')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleFeatureClick}
                  className="w-full"
                >
                  View Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorkerDashboard;