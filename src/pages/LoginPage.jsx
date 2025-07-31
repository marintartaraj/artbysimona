import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const LoginPage = () => {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: 'worker'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.username, formData.password, formData.userType);
    
    if (success) {
      toast({
        title: "Login Successful!",
        description: "Welcome back!",
        className: "bg-primary border-primary/50 text-primary-foreground"
      });
      navigate(formData.userType === 'admin' ? '/admin' : '/worker');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Art by Simona</title>
        <meta name="description" content="Login to your Art by Simona account to access your dashboard." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      >
        <div className="w-full max-w-md">
          <Card className="bg-card/80 border-border/50 rounded-2xl leaf-shadow">
            <CardHeader className="text-center">
              <CardTitle className="serif-font text-3xl text-primary-foreground">
                Art by Simona
              </CardTitle>
              <p className="text-muted-foreground">{t('loginTitle')}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t('username')}
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="password"
                    placeholder={t('password')}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={formData.userType === 'worker' ? 'default' : 'secondary'}
                    onClick={() => setFormData({...formData, userType: 'worker'})}
                    className="flex-1"
                  >
                    {t('worker')}
                  </Button>
                  <Button
                    type="button"
                    variant={formData.userType === 'admin' ? 'default' : 'secondary'}
                    onClick={() => setFormData({...formData, userType: 'admin'})}
                    className="flex-1"
                  >
                    {t('admin')}
                  </Button>
                </div>

                <Button type="submit" className="w-full">
                  {t('login')}
                </Button>

                <div className="text-center">
                  <NavLink to="/">
                    <Button type="button" variant="ghost">
                      ← {t('home')}
                    </Button>
                  </NavLink>
                </div>
              </form>

              <div className="mt-6 p-4 bg-secondary/50 rounded-lg text-sm text-muted-foreground">
                <p className="font-semibold mb-2 text-foreground">Demo Credentials:</p>
                <p>Worker: worker / worker123</p>
                <p>Admin: admin / admin123</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </>
  );
};

export default LoginPage;