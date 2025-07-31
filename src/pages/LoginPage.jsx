import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, User, Lock, ArrowLeft, Shield, Crown, Sparkles } from 'lucide-react';

const GOLD = "#E6C97A";
const EMERALD = "#10B981";

const LoginPage = () => {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: 'worker'
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const success = login(formData.username, formData.password, formData.userType);
    
    if (success) {
      toast({
        title: "Login Successful! 🎉",
        description: "Welcome back to Art by Simona!",
        className: "bg-emerald-600 border-emerald-500/50 text-white"
      });
      navigate(formData.userType === 'admin' ? '/admin' : '/worker');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
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
        className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 backdrop-blur-sm"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,201,122,0.05),transparent_50%)]" />
        
        <div className="w-full max-w-sm sm:max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-emerald-900/95 to-emerald-800/95 backdrop-blur-xl border border-emerald-100/20 shadow-2xl shadow-black/50 rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                    <span className="text-xs sm:text-sm font-medium text-emerald-100">Welcome Back</span>
                  </div>
                </motion.div>
                
                <CardTitle 
                  className="text-2xl sm:text-3xl font-bold text-white mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    textShadow: `0 2px 12px ${GOLD}33`
                  }}
                >
                  Art by Simona
                </CardTitle>
                <p className="text-sm sm:text-base text-emerald-200">{t('loginTitle')}</p>
              </CardHeader>
              
              <CardContent className="px-6 sm:px-8 pb-8">
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-emerald-100 flex items-center gap-2">
                        <User className="w-4 h-4 text-gold" />
                        Username
                      </label>
                      <Input
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        className="w-full rounded-xl bg-white/5 border-emerald-800/30 text-white placeholder:text-emerald-300 focus:border-gold/50 focus:ring-gold/20"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-emerald-100 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-gold" />
                        Password
                      </label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="w-full rounded-xl bg-white/5 border-emerald-800/30 text-white placeholder:text-emerald-300 focus:border-gold/50 focus:ring-gold/20 pr-12"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-300 hover:text-emerald-100 transition-colors touch-target"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-emerald-100">Select Account Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={formData.userType === 'worker' ? 'default' : 'secondary'}
                        onClick={() => setFormData({...formData, userType: 'worker'})}
                        className={`flex items-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 touch-target ${
                          formData.userType === 'worker' 
                            ? 'bg-gradient-to-r from-gold to-yellow-400 text-emerald-950 font-bold shadow-lg' 
                            : 'bg-emerald-800/40 border-emerald-700/30 text-emerald-100 hover:bg-emerald-800/60'
                        }`}
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          border: formData.userType === 'worker' ? `2px solid ${GOLD}` : undefined,
                        }}
                      >
                        <Shield className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">{t('worker')}</span>
                      </Button>
                      <Button
                        type="button"
                        variant={formData.userType === 'admin' ? 'default' : 'secondary'}
                        onClick={() => setFormData({...formData, userType: 'admin'})}
                        className={`flex items-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 touch-target ${
                          formData.userType === 'admin' 
                            ? 'bg-gradient-to-r from-gold to-yellow-400 text-emerald-950 font-bold shadow-lg' 
                            : 'bg-emerald-800/40 border-emerald-700/30 text-emerald-100 hover:bg-emerald-800/60'
                        }`}
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          border: formData.userType === 'admin' ? `2px solid ${GOLD}` : undefined,
                        }}
                      >
                        <Crown className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">{t('admin')}</span>
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl text-base font-bold bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 border-2 border-emerald-400/20 focus:ring-2 focus:ring-emerald-400/70 transition-all duration-300 touch-target"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "0.02em"
                    }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        Logging in...
                      </>
                    ) : (
                      t('login')
                    )}
                  </Button>

                  <div className="text-center">
                    <NavLink to="/">
                      <Button 
                        type="button" 
                        variant="ghost"
                        className="text-emerald-300 hover:text-white hover:bg-white/5 transition-all duration-300 touch-target"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t('home')}
                      </Button>
                    </NavLink>
                  </div>
                </motion.form>

                <motion.div 
                  className="mt-6 p-4 bg-emerald-800/30 backdrop-blur-sm rounded-xl text-sm text-emerald-200 border border-emerald-700/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <p className="font-semibold mb-3 text-gold">Demo Credentials:</p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3 text-emerald-300" />
                      <span>Worker: <code className="bg-emerald-900/50 px-1 rounded">worker</code> / <code className="bg-emerald-900/50 px-1 rounded">worker123</code></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Crown className="w-3 h-3 text-gold" />
                      <span>Admin: <code className="bg-emerald-900/50 px-1 rounded">admin</code> / <code className="bg-emerald-900/50 px-1 rounded">admin123</code></span>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default LoginPage;