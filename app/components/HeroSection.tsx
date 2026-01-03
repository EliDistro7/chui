'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Battery, ShoppingCart, Star, Zap, Award, Globe, TrendingUp, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

const content = {
  tagline: {
    en: "Betri ni Chui",
    sw: "Betri ni Chui"
  },
  subtitle: {
    en: "Powering your journey with German technology",
    sw: "Kuendesha safari yako kwa teknolojia ya Kijerumani"
  },
  description: {
    en: "CHUI delivers reliable, maintenance-free batteries with German technology for all your power needs. Built to withstand Tanzania's challenging climate conditions.",
    sw: "CHUI inatoa betri za kuaminika, bila matengenezo kwa teknolojia ya Kijerumani kwa mahitaji yako yote ya nguvu. Zimeundwa kustahimili hali ngumu za hewa ya Tanzania."
  },
  badges: {
    germanTech: {
      en: "German Technology",
      sw: "Teknolojia ya Kijerumani"
    },
    maintenanceFree: {
      en: "Maintenance Free",
      sw: "Bila Matengenezo"
    }
  },
  buttons: {
    shopBatteries: {
      en: "Shop Batteries",
      sw: "Nunua Betri"
    },
    findDealers: {
      en: "Find Dealers",
      sw: "Tafuta Wauzaji"
    }
  },
  stats: {
    rating: {
      en: "4.8/5 Rating",
      sw: "Ukadiriaji wa 4.8/5"
    },
    trusted: {
      en: "Trusted Nationwide",
      sw: "Imaaminiwa Nchini Kote"
    }
  },
  scrollText: {
    en: "Scroll for more",
    sw: "Scroll kwa zaidi"
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasVideo && videoRef.current) {
            videoRef.current.play().catch(() => {
              console.log('Auto-play prevented');
            });
          } else if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [hasVideo]);

  useEffect(() => {
    const checkVideo = () => {
      const video = document.createElement('video');
      video.src = '/chui-promo.mp4';
      video.onloadedmetadata = () => setHasVideo(true);
      video.onerror = () => setHasVideo(false);
    };
    checkVideo();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: ['🔋', '⚡', '🔌', '⚙️', '✨', '🎯', '💪', '🚗'][i % 8],
    delay: i * 0.4,
    duration: 4 + (i % 3),
  }));

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {hasVideo && (
        <div className="absolute inset-0 z-0" ref={videoContainerRef}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            autoPlay
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/chui-promo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80" />
        </div>
      )}

      {!hasVideo && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
          <div className="absolute inset-0">
            {floatingElements.map((element) => (
              <motion.div
                key={element.id}
                className="absolute text-3xl opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-30, 30, -30],
                  rotate: [0, 180, 360],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: element.duration,
                  repeat: Infinity,
                  delay: element.delay,
                  ease: "easeInOut",
                }}
              >
                {element.icon}
              </motion.div>
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {hasVideo && (
        <div className="absolute top-4 right-4 z-20 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </motion.button>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <motion.h1
                className="text-6xl lg:text-8xl font-black text-white drop-shadow-lg"
                animate={{
                  textShadow: [
                    "2px 2px 0px #f59e0b",
                    "4px 4px 0px #f59e0b",
                    "2px 2px 0px #f59e0b"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                CHUI
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-4xl font-bold text-white">
                {content.tagline[language]}
              </h2>
              <p className="text-md lg:text-xl text-white/90 font-medium">
                {content.subtitle[language]}
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {content.description[language]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">{content.badges.germanTech[language]}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">{content.badges.maintenanceFree[language]}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{content.buttons.shopBatteries[language]}</span>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  {content.buttons.findDealers[language]}
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">{content.stats.rating[language]}</span>
              </div>
              <div className="text-white">
                <TrendingUp className="w-5 h-5 inline mr-2" />
                <span className="font-medium">{content.stats.trusted[language]}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Battery className="w-32 h-32 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10"
            >
              <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-2xl">CHUI</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
          style={{ transform: 'rotate(180deg)' }}
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgba(255,255,255,0.1)"
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V60.29c47.79,10.2,103.59,20.17,158,18,70.36-3.37,136.33-23.31,206.8-27.5C438.64,22.43,512.34,43.67,583,62.05c69.27,14,138.3,18.88,209.4,8.08,36.15-4,69.85-12.84,104.45-19.34C989.49,15,1113-4.29,1200,42.47V0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10"
      >
        <Zap className="w-6 h-6 mx-auto" />
        <p className="text-sm mt-2">{content.scrollText[language]}</p>
      </motion.div>
    </section>
  );
};

export default Hero;