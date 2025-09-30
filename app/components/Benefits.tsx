'use client';

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Shield, Truck, Zap, Clock, Star, Award, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
const CHUIBenefitsSection = () => {
    const {language} = useLanguage();
    const [scrollY, setScrollY] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [hasVideo, setHasVideo] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer setup for video
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                    
                    // Auto-play video when it comes into view
                    if (entry.isIntersecting && hasVideo && videoRef.current) {
                        const playVideo = async () => {
                            try {
                                if (videoRef.current && videoRef.current.paused) {
                                    await videoRef.current.play();
                                    setIsPlaying(true);
                                    setHasPlayedOnce(true);
                                }
                            } catch (error) {
                                console.log('Auto-play prevented by browser:', error);
                                // If autoplay fails, we'll rely on user interaction
                            }
                        };
                        playVideo();
                    }
                    
                    // Pause video when it goes out of view
                    if (!entry.isIntersecting && hasVideo && videoRef.current && !videoRef.current.paused) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of video is visible
                rootMargin: '50px 0px -50px 0px', // Add margin for better UX
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
    }, [hasVideo]); // Remove isPlaying and hasPlayedOnce dependencies

    // Check if video exists on component mount
    useEffect(() => {
        const checkVideoExists = async () => {
            try {
                const video = document.createElement('video');
                video.src = '/videos/chui-benefits.mp4'; // Different video for benefits section
                
                video.onloadedmetadata = () => {
                    setHasVideo(true);
                };
                
                video.onerror = () => {
                    const altSources = [
                        '/videos/chui-benefits-video.mp4',
                        '/assets/videos/chui-benefits-video.mp4',
                        '/chui-promo.mp4', // Fallback to main promo video
                        '/videos/chui-promo.mp4',
                        '/media/chui-benefits.mp4'
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

    // Video control functions - simplified to work with intersection observer
    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(error => {
                    console.log('Manual play failed:', error);
                });
            } else {
                videoRef.current.pause();
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
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
        // Auto-restart if still in view
        if (isInView && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(error => {
                console.log('Auto-restart failed:', error);
            });
        }
    };
  
    const benefits = [
      {
        icon: <Shield className="w-8 h-8 text-primary-600" />,
        title: { en: "German Technology", sw: "Teknolojia ya Kijerumani" },
        description: {
          en: "All CHUI batteries are built with advanced German technology and quality controls",
          sw: "Betri zote za CHUI zimejengwa kwa teknolojia ya hali ya juu ya Kijerumani na udhibiti wa ubora"
        },
        graphic: "🔋"
      },
      {
        icon: <Truck className="w-8 h-8 text-primary-600" />,
        title: { en: "Nationwide Distribution", sw: "Usambazaji wa Kitaifa" },
        description: {
          en: "Available through authorized dealers across Tanzania for reliable service",
          sw: "Inapatikana kupitia madalali walioidhinishwa kote Tanzania kwa huduma ya kuaminika"
        },
        graphic: "⚡"
      },
      {
        icon: <Zap className="w-8 h-8 text-primary-600" />,
        title: { en: "Superior Power", sw: "Nguvu Bora" },
        description: {
          en: "High CCA ratings and reliable starting power for all weather conditions",
          sw: "Viwango vya juu vya CCA na nguvu za kuanza za kuaminika kwa hali zote za hewa"
        },
        graphic: "⚙️"
      },
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: { en: "Maintenance-Free", sw: "Haitaji Ukarabati" },
        description: {
          en: "Sealed maintenance-free design for hassle-free operation and longevity",
          sw: "Muundo uliosimbwa usiopata ukarabati kwa utendaji rahisi na maisha marefu"
        },
        graphic: "🛠️"
      },
      {
        icon: <Star className="w-8 h-8 text-primary-600" />,
        title: { en: "Proven Reliability", sw: "Uaminifu Uliothibitika" },
        description: {
          en: "Trusted by vehicle owners nationwide with consistently high performance",
          sw: "Ambazo zinaaminiwa na wamiliki wa magari kote nchini kwa utendaji wa hali ya juu"
        },
        graphic: "🏆"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: { en: "Extended Warranty", sw: "Dhamana Iliyoongezwa" },
        description: {
          en: "Comprehensive warranty coverage for peace of mind and protection",
          sw: "Ulinzi kamili wa dhamana kwa utulivu wa akili na ulinzi"
        },
        graphic: "🛡️"
      }
    ];

    const parallaxOffset = scrollY * 0.5;
    const slowParallax = scrollY * 0.2;
    const fastParallax = scrollY * 0.8;
  
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Custom Styles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes bounce-fun {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.1); }
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-5deg) scale(1.05); }
            75% { transform: rotate(5deg) scale(1.05); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-bounce-fun { animation: bounce-fun 3s ease-in-out infinite; }
          .animate-wiggle { animation: wiggle 4s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .shadow-soft { box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); }
          .shadow-layer { box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); }
          .shadow-glow { box-shadow: 0 0 30px rgba(59, 130, 246, 0.4); }
        `}</style>

        {/* Parallax Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Battery Graphics */}
          <div 
            className="absolute top-20 left-16 text-6xl animate-float opacity-20 text-white"
            style={{ transform: `translateY(${slowParallax}px)` }}
          >
            🔋
          </div>
          <div 
            className="absolute top-32 right-20 text-5xl animate-wiggle opacity-20 text-white"
            style={{ transform: `translateY(${-parallaxOffset}px)` }}
          >
            ⚡
          </div>
          <div 
            className="absolute top-60 left-1/4 text-4xl animate-bounce-fun opacity-20 text-white"
            style={{ transform: `translateY(${fastParallax}px)` }}
          >
            🔌
          </div>
          <div 
            className="absolute bottom-40 right-16 text-5xl animate-float opacity-20 text-white"
            style={{ transform: `translateY(${-slowParallax}px)` }}
          >
            ⚙️
          </div>
          <div 
            className="absolute bottom-60 left-20 text-6xl animate-wiggle opacity-20 text-white"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            🛠️
          </div>

          {/* Geometric Shapes with Parallax */}
          <div 
            className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-sm opacity-10 animate-float"
            style={{ transform: `translateY(${parallaxOffset}px) scale(${1 + scrollY * 0.0001})` }}
          ></div>
          <div 
            className="absolute top-20 right-20 w-20 h-20 bg-gray-400 rounded-sm opacity-15 animate-bounce-fun"
            style={{ transform: `translateY(${-fastParallax}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-sm opacity-10 animate-float"
            style={{ transform: `translateY(${slowParallax}px)`, animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute bottom-10 right-10 w-16 h-16 bg-blue-400 rounded-sm opacity-15 animate-bounce-fun"
            style={{ transform: `translateY(${-parallaxOffset}px)`, animationDelay: '2s' }}
          ></div>

          {/* Decorative Power Indicators */}
          <div 
            className="absolute top-1/4 left-3/4 text-3xl animate-wiggle opacity-30 text-white"
            style={{ transform: `translateY(${fastParallax}px)` }}
          >
            ✨
          </div>
          <div 
            className="absolute top-3/4 left-1/6 text-2xl animate-float opacity-30 text-white"
            style={{ transform: `translateY(${-slowParallax}px)` }}
          >
            💫
          </div>
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

        <div className="container mx-auto px-6 relative">
          {/* Language Toggle */}
        

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
                  <span className="text-2xl animate-bounce-fun">🔋</span>
                </div>
                {/* Decorative rings around battery */}
                <div className="absolute -inset-2 border-2 border-blue-300 rounded-full opacity-50 animate-ping"></div>
                <div className="absolute -inset-4 border border-orange-300 rounded-full opacity-30 animate-pulse"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white bg-gradient-to-r from-blue-400 via-white to-orange-400 bg-clip-text text-transparent">
                {language === 'en' 
                  ? 'Why Choose CHUI Batteries?' 
                  : 'Kwa Nini Uchague Betri za CHUI?'}
              </h2>
              {/* Decorative elements around title */}
              <div className="absolute -top-4 -right-4 text-2xl animate-wiggle text-white">⚡</div>
              <div className="absolute -bottom-4 -left-4 text-2xl animate-float text-white">🌟</div>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Discover what makes CHUI batteries the perfect choice for reliable power and long-lasting performance!'
                : 'Gundua ni nini kinachofanya betri za CHUI kuwa chaguo kamili kwa nguvu za kuaminika na utendaji wa muda mrefu!'}
            </p>
            {/* Fun decorative line under description */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
              <span className="text-2xl animate-bounce-fun text-white">⚡</span>
              <div className="h-1 w-12 bg-gradient-to-l from-orange-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-20 w-full px-0 -mx-6" ref={videoContainerRef}>
            <div className="relative group w-full">
              {/* Decorative frame elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-white/20 to-orange-400 rounded-none sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-300/30 to-orange-300/30 rounded-none sm:rounded-2xl opacity-30 animate-pulse"></div>
              
              {/* Video container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-none sm:rounded-2xl p-2 sm:p-4 shadow-layer border-0 sm:border border-white/20 overflow-hidden">
                {/* Video visibility indicator (optional - remove in production) */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="absolute top-2 right-2 z-50 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {isInView ? '👁️ In View' : '❌ Not In View'}
                  </div>
                )}

                {hasVideo ? (
                  <div className="relative overflow-hidden rounded-none sm:rounded-xl">
                    {/* Video Element */}
                    <video
                      ref={videoRef}
                      className="w-full h-auto sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-none sm:rounded-xl object-cover"
                      muted={isMuted}
                      loop
                      playsInline
                      preload="metadata"
                      poster="/chui-benefits-poster.jpg"
                      onPlay={handleVideoPlay}
                      onPause={handleVideoPause}
                      onEnded={handleVideoEnded}
                      onLoadedData={() => {
                        console.log('Benefits video loaded and ready');
                      }}
                    >
                      <source src="/chui-benefits-video.mp4" type="video/mp4" />
                      <source src="/videos/chui-benefits-video.mp4" type="video/mp4" />
                      <source src="/chui-promo.mp4" type="video/mp4" />
                      <source src="/videos/chui-promo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button
                          onClick={togglePlay}
                          className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                        </button>
                        
                        <button
                          onClick={toggleMute}
                          className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </button>
                      </div>
                    </div>

                    {/* Play Button Overlay - only show if video failed to autoplay */}
                    {!isPlaying && hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={togglePlay}
                          className="bg-gradient-to-r from-blue-500 to-orange-500 p-6 rounded-full text-white shadow-2xl hover:scale-110 transition-transform"
                          aria-label="Play video"
                        >
                          <Play className="w-12 h-12 ml-1" />
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Video Not Available Fallback */
                  <div className="relative overflow-hidden rounded-none sm:rounded-xl h-auto sm:h-64 md:h-80 lg:h-96 xl:h-[500px] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-white/60 mx-auto mb-4 animate-pulse" />
                      <p className="text-white/80 text-lg">
                        {language === 'en' ? 'Video content coming soon' : 'Maudhui ya video yanakuja hivi karibuni'}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Floating decorative elements around video - hidden on mobile */}
                <div className="hidden sm:block absolute -top-3 -left-3 text-2xl sm:text-3xl animate-bounce-fun opacity-70 text-white">🔋</div>
                <div className="hidden sm:block absolute -top-3 -right-3 text-2xl sm:text-3xl animate-wiggle opacity-70 text-white">⚡</div>
                <div className="hidden sm:block absolute -bottom-3 -left-3 text-2xl sm:text-3xl animate-float opacity-70 text-white">✨</div>
                <div className="hidden sm:block absolute -bottom-3 -right-3 text-2xl sm:text-3xl animate-bounce-fun opacity-70 text-white" style={{animationDelay: '1s'}}>🌟</div>
                
                {/* Corner sparkles */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <span className="text-xs sm:text-sm animate-ping text-white">✨</span>
                    <span className="text-xs sm:text-sm animate-pulse text-white" style={{animationDelay: '0.3s'}}>💫</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <span className="text-xs sm:text-sm animate-pulse text-white">⭐</span>
                    <span className="text-xs sm:text-sm animate-ping text-white" style={{animationDelay: '0.6s'}}>✨</span>
                  </div>
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-2 sm:inset-4 bg-gradient-to-t from-blue-500/10 via-transparent to-orange-500/10 rounded-none sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating battery graphics around the video - hidden on mobile */}
              <div className="hidden sm:block absolute -top-8 left-8 text-3xl lg:text-4xl animate-float opacity-40 text-white">🔋</div>
              <div className="hidden sm:block absolute -top-8 right-8 text-3xl lg:text-4xl animate-wiggle opacity-40 text-white">⚡</div>
              <div className="hidden sm:block absolute -bottom-8 left-16 text-3xl lg:text-4xl animate-bounce-fun opacity-40 text-white">🔌</div>
              <div className="hidden sm:block absolute -bottom-8 right-16 text-3xl lg:text-4xl animate-float opacity-40 text-white" style={{animationDelay: '2s'}}>⚙️</div>
              <div className="hidden md:block absolute top-1/2 -left-12 text-2xl lg:text-3xl animate-wiggle opacity-30 text-white">🛠️</div>
              <div className="hidden md:block absolute top-1/2 -right-12 text-2xl lg:text-3xl animate-bounce-fun opacity-30 text-white">🏆</div>
            </div>

            {/* Video Action Button - only show if autoplay failed */}
            {hasVideo && !isPlaying && (
              <div className="text-center mt-6">
                <button
                  onClick={togglePlay}
                  className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>
                    {language === 'en' ? 'Watch Benefits' : 'Ona Faida'}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-soft hover:shadow-layer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background Graphics */}
                <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-30 transition-opacity animate-float text-white">
                  {benefit.graphic}
                </div>
                <div className="absolute -bottom-6 -right-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity rotate-12 text-white">
                  {benefit.graphic}
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft relative">
                    <div className="text-white">{benefit.icon}</div>
                    {/* Floating mini graphic */}
                    <div className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-fun text-white">
                      {benefit.graphic}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {benefit.title[language]}
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity animate-wiggle">
                      {benefit.graphic}
                    </span>
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {benefit.description[language]}
                  </p>
                </div>

                {/* Hover Effect Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-white to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                
                {/* Sparkle effect on hover */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <span className="text-xs animate-ping text-white">✨</span>
                    <span className="text-xs animate-pulse text-white" style={{animationDelay: '0.5s'}}>⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-layer border border-white/20 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-slate-900/30 rounded-3xl"></div>
              <div className="absolute top-4 left-4 text-2xl opacity-20 animate-float text-white">🔋</div>
              <div className="absolute top-4 right-4 text-2xl opacity-20 animate-wiggle text-white">⚡</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-20 animate-bounce-fun text-white">🏆</div>
              <div className="absolute bottom-4 right-4 text-2xl opacity-20 animate-float text-white" style={{animationDelay: '1s'}}>🛠️</div>
              
              <div className="relative">
                <div className="text-6xl animate-bounce-fun relative">
                  🔋
                  <div className="absolute -top-2 -right-2 text-2xl animate-ping text-white">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse text-white">💫</div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                  {language === 'en' 
                    ? 'Ready for CHUI Power Experience?' 
                    : 'Tayari kwa Uzoefu wa Nguvu za CHUI?'}
                  <span className="text-lg animate-wiggle">⚡</span>
                </h3>
                <p className="text-white/80 mb-6 max-w-md">
                  {language === 'en'
                    ? 'Join thousands of satisfied vehicle owners who trust CHUI for reliable power!'
                    : 'Jiunge na maelfu ya wamiliki wa magari walioridhika wanaoamini CHUI kwa nguvu za kuaminika!'}
                </p>
              </div>
              
            
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Wave Effect with Graphics */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {/* Floating batteries in the wave area */}
          <div className="absolute bottom-8 left-1/6 text-3xl animate-float opacity-30 text-white">🔋</div>
          <div className="absolute bottom-12 left-1/3 text-2xl animate-bounce-fun opacity-30 text-white">⚡</div>
          <div className="absolute bottom-6 right-1/3 text-3xl animate-wiggle opacity-30 text-white">🔌</div>
          <div className="absolute bottom-10 right-1/6 text-2xl animate-float opacity-30 text-white">⚙️</div>
          
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                  className="fill-white opacity-10"></path>
          </svg>
        </div>
      </section>
    );
  };

  export default CHUIBenefitsSection;