'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Battery, ShoppingCart, Star, Zap, Award, Globe, TrendingUp, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CHUIHero = () => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          
          // Auto-play video when it comes into view (only once)
          if (entry.isIntersecting && hasVideo && videoRef.current && !hasPlayedOnce) {
            const playVideo = async () => {
              try {
                if (videoRef.current) {
                  await videoRef.current.play();
                  setIsPlaying(true);
                  setHasPlayedOnce(true);
                }
              } catch (error) {
                console.log('Auto-play prevented by browser:', error);
              }
            };
            playVideo();
          }
          
          // Pause video when it goes out of view
          if (!entry.isIntersecting && hasVideo && videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [hasVideo, isPlaying, hasPlayedOnce]);
  
  // Check if video exists on component mount
  useEffect(() => {
    const checkVideoExists = async () => {
      try {
        const video = document.createElement('video');
        video.src = '/chui-promo.mp4';
        
        video.onloadedmetadata = () => {
          setHasVideo(true);
        };
        
        video.onerror = () => {
          const altSources = [
            '/videos/chui-promo.mp4',
            '/assets/videos/chui-promo.mp4',
            '/chui-battery-promo.mp4',
            '/media/chui-promo.mp4'
          ];
          
          let sourceIndex = 0;
          const tryNextSource = () => {
            if (sourceIndex < altSources.length) {
              video.src = altSources[sourceIndex];
              sourceIndex++;
            } else {
              setHasVideo(false);
            }
          };
          
          video.onerror = tryNextSource;
          tryNextSource();
        };
      } catch (error) {
        setHasVideo(false);
      }
    };
    
    checkVideoExists();
  }, []);
  
  const heroText = {
    tagline: {
      en: "Betri ni Chui",
      sw: "Betri ni Chui"
    },
    subtitle: {
      en: "Powering your journey with German technology",
      sw: "Kuongoza safari yako na teknolojia ya Kijerumani"
    },
    description: {
      en: "CHUI delivers reliable, maintenance-free batteries with German technology for all your power needs. Built to withstand Tanzania's challenging climate conditions.",
      sw: "CHUI inatoa betri za kuaminika, zisizohitaji ukarabati wa mara kwa mara na teknolojia ya Kijerumani kwa mahitaji yako yote ya nguvu. Imetengenezwa kustahimili mazingira magumu ya Tanzania."
    },
    shopNow: {
      en: "Shop Batteries",
      sw: "Nunua Betri"
    },
    findDealers: {
      en: "Find Dealers",
      sw: "Tafuta Madalali"
    },
    rating: {
      en: "4.8/5 Rating",
      sw: "Kiwango 4.8/5"
    },
    customers: {
      en: "Trusted Nationwide",
      sw: "Imezalishwa Kote Nchini"
    },
    scrollText: {
      en: "Scroll for more",
      sw: "Sokota kuona zaidi"
    },
    germanTech: {
      en: "German Technology",
      sw: "Teknolojia ya Kijerumani"
    },
    maintenanceFree: {
      en: "Maintenance Free",
      sw: "Haitaji Ukarabati"
    },
    watchVideo: {
      en: "Watch Our Story",
      sw: "Ona Hadithi Yetu"
    },
    videoNotAvailable: {
      en: "Video content coming soon",
      sw: "Maudhui ya video yanakuja hivi karibuni"
    }
  };

  // Video control functions
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

  // Video event handlers
  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: ['🔋', '⚡', '🔌', '⚙️', '✨', '🎯', '💪', '🚗'][i % 8],
    delay: i * 0.4,
    duration: 4 + (i % 3),
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
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

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Animated Logo/Brand */}
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
                className="text-6xl lg:text-8xl font-display font-black text-white drop-shadow-lg"
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

            {/* Dynamic Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-4xl font-heading font-bold text-white">
                {heroText.tagline[language]}
              </h2>
              <p className="text-md lg:text-xl text-white/90 font-medium">
                {heroText.subtitle[language]}
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {heroText.description[language]}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">{heroText.germanTech[language]}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">{heroText.maintenanceFree[language]}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{heroText.shopNow[language]}</span>
              </motion.button>
              
         
            </motion.div>

            {/* Social Proof */}
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
                <span className="text-white font-medium">{heroText.rating[language]}</span>
              </div>
              <div className="text-white">
                <TrendingUp className="w-5 h-5 inline mr-2" />
                <span className="font-medium">{heroText.customers[language]}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            ref={videoContainerRef}
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
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 px-0 border border-white/20 shadow-2xl">
                {/* Video visibility indicator (optional - remove in production) */}
             

                {hasVideo ? (
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Video Element */}
                    <video
                      ref={videoRef}
                      className="w-full h-80 object-cover rounded-2xl"
                      muted={isMuted}
                      loop
                      playsInline
                      preload="metadata"
                      poster="/chui-video-poster.jpg"
                      onPlay={handleVideoPlay}
                      onPause={handleVideoPause}
                      onEnded={handleVideoEnded}
                      onLoadedData={() => {
                        console.log('Video loaded and ready');
                      }}
                    >
                      <source src="/chui-promo.mp4" type="video/mp4" />
                      <source src="/videos/chui-promo.mp4" type="video/mp4" />
                      <source src="/assets/videos/chui-promo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={togglePlay}
                          className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleMute}
                          className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </motion.button>
                      </div>
                    </div>

                    {/* Play Button Overlay for when video is paused */}
                    {!isPlaying && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={togglePlay}
                          className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-full text-white shadow-2xl"
                          aria-label="Play video"
                        >
                          <Play className="w-12 h-12 ml-1" />
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  /* Video Not Available Fallback */
                  <div className="relative overflow-hidden rounded-2xl h-80 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-center"
                    >
                      <Play className="w-16 h-16 text-white/60 mx-auto mb-4" />
                      <p className="text-white/80 text-lg">{heroText.videoNotAvailable[language]}</p>
                    </motion.div>
                  </div>
                )}

                {/* Video Action Button */}
                {hasVideo && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 text-center"
                  >
                    <button
                      onClick={togglePlay}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      <span>{isPlaying ? 'Pause' : heroText.watchVideo[language]}</span>
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Rotating CHUI Logo */}
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

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
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

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <Zap className="w-6 h-6 mx-auto" />
        <p className="text-sm mt-2">{heroText.scrollText[language]}</p>
      </motion.div>
    </section>
  );
};

export default CHUIHero;