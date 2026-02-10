'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';




export const Homepage = () => {
  const scrollLeft = () => {
    const container = document.querySelector('.singers-scroll-container');
    container.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.querySelector('.singers-scroll-container');
    container.scrollBy({ left: 350, behavior: 'smooth' });
  };

  
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  // Video play function
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      
      // 2-3 seconds baad next video
      timerRef.current = setTimeout(() => {
        nextVideo();
      }, 2500);
    }
  };

  // Next video
  const nextVideo = () => {
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  // Previous video
  const prevVideo = () => {
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  const [active, setActive] = useState('artists')
  return (
    <>
  {/* ========== Hero Section ========= */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

        {/* Images wrapper */}
        <div className="flex gap-6 h-[60vh] w-full px-10 -mt-52">

          {[
            '/ar.rahman.png',
            '/arijitsing.png',
            '/darshan.png',
            '/shaan.png',
            '/shreya.png',
            '/neha.png',
          ].map((src, i) => (
            <motion.div
              key={i}
              className={`
                relative flex-1 overflow-hidden rounded-xl
                ${i % 2 === 0 ? 'rotate-[-6deg]' : 'rotate-[6deg]'}
              `}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
              >
                <Image
                  src={src}
                  alt="singer"
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>

              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}

        </div>

      </section>

      {/* ========== TEXT SECTION =========== */}
      <div className="overflow-hidden w-full -mt-56">

        {/* Main Heading */}
        <div className="flex gap-12 whitespace-nowrap justify-center">
          <motion.h1 
            className="text-8xl md:text-5xl font-bold tracking-widest uppercase text-center"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            LIVE CONCERTS <motion.span 
              className="text-orange-400 mx-4"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >.</motion.span>
            MUSIC FESTIVAL <motion.span 
              className="text-orange-400 mx-4"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
            >.</motion.span>
            FAN MEET
          </motion.h1>

          {/* Duplicate for seamless loop */}
          <motion.h1 
            className="text-8xl md:text-5xl font-bold tracking-widest uppercase text-center"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            LIVE CONCERTS <motion.span 
              className="text-orange-400 mx-4"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >.</motion.span>
            MUSIC FESTIVAL <motion.span 
              className="text-orange-400 mx-4"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
            >.</motion.span>
            FAN MEET
          </motion.h1>
        </div>

        {/* Center Button */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button 
            className="px-8 py-3 bg-orange-500 text-black font-semibold rounded-full cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              style={{ zIndex: 0 }}
            />
            <span className="relative z-10">SAVE MY SPOT</span>
          </motion.button>
        </motion.div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [-50, -150],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            >
              {['🎵', '🎶', '🎤', '🎸'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>

      </div>


{/*===============WHAT WE OFFER================*/}


    <section className="min-h-screen bg-black text-white py-24 px-8 overflow-hidden">
      {/* ===== Heading ===== */}
      <motion.div 
        className="mb-32"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="text-center text-gray-500 tracking-[0.3em] text-lg mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          WHAT WE OFFER
        </motion.p>
        <motion.h1 
          className="text-center text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          PERFECT FOR MUSIC LOVERS, ARTISTS, & EVENT ORGANIZERS
        </motion.h1>
         <div
  
        className="w-32 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mt-6"
      />
      </motion.div>

      {/* ===== Boxes Container ===== */}
      <div className="max-w-7xl mx-auto flex justify-center items-start gap-6">

        {/* ===== BOX 1 : MUSIC LOVERS ===== */}
        <motion.div
          onClick={() => setActive('fans')}
          className={`relative cursor-pointer transition-all duration-700
            ${active === 'fans' ? 'border-transparent' : 'border border-gray-700 hover:border-gray-500'}
          `}
          style={{ width: '280px', height: '320px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.6 }}
          whileHover={{ scale: active === 'fans' ? 1 : 1.02 }}
        >
          <AnimatePresence mode="wait">
            {active === 'fans' ? (
              <motion.div 
                key="fans-expanded"
                className="w-full h-full flex flex-col items-center justify-between py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-56 h-56 rounded-full bg-blue-600 flex items-center justify-center relative overflow-hidden"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="text-center space-y-1 text-sm relative z-10">
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                      Live Concert Access
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                      Fan Meet & Greets
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                      Exclusive Performances
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                      Unforgettable Music Nights
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gray-500 text-xs">001</span>
                  <h3 className="text-2xl font-bold text-orange-500 mt-2">Music Lovers</h3>
                  <p className="text-xs text-gray-400 mt-2 px-4">
                    For true fans who love singers, albums, live shows and pure music vibes.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                key="fans-collapsed"
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h3 
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.1, color: '#f97316' }}
                >
                  Music Lovers
                </motion.h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ===== BOX 2 : SINGERS & ARTISTS ===== */}
        <motion.div
          onClick={() => setActive('artists')}
          className={`relative cursor-pointer transition-all duration-700
            ${active === 'artists' ? 'border-transparent' : 'border border-gray-700 hover:border-gray-500'}
          `}
          style={{ width: '280px', height: '320px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ scale: active === 'artists' ? 1 : 1.02 }}
        >
          <AnimatePresence mode="wait">
            {active === 'artists' ? (
              <motion.div 
                key="artists-expanded"
                className="w-full h-full flex flex-col items-center justify-between py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-56 h-56 rounded-full bg-blue-600 flex items-center justify-center relative overflow-hidden"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="text-center space-y-1 text-sm relative z-10">
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                      Artist Promotion
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                      Live Performance Support
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                      Fan Engagement
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                      Brand Collaborations
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gray-500 text-xs">002</span>
                  <h3 className="text-2xl font-bold text-orange-500 mt-2">Singers & Artists</h3>
                  <p className="text-xs text-gray-400 mt-2 px-4">
                    Helping singers and artists connect with fans and grow their audience.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                key="artists-collapsed"
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h3 
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.1, color: '#f97316' }}
                >
                  Singers
                </motion.h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ===== BOX 3 : EVENT ORGANIZERS ===== */}
        <motion.div
          onClick={() => setActive('events')}
          className={`relative cursor-pointer transition-all duration-700
            ${active === 'events' ? 'border-transparent' : 'border border-gray-700 hover:border-gray-500'}
          `}
          style={{ width: '280px', height: '320px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: active === 'events' ? 1 : 1.02 }}
        >
          <AnimatePresence mode="wait">
            {active === 'events' ? (
              <motion.div 
                key="events-expanded"
                className="w-full h-full flex flex-col items-center justify-between py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-56 h-56 rounded-full bg-blue-600 flex items-center justify-center relative overflow-hidden"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="text-center space-y-1 text-sm relative z-10">
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                      Concert Planning
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                      Artist Booking
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                      Audience Engagement
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                      Event Promotions
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gray-500 text-xs">003</span>
                  <h3 className="text-2xl font-bold text-orange-500 mt-2">Event Organizers</h3>
                  <p className="text-xs text-gray-400 mt-2 px-4">
                    Perfect for teams managing concerts, shows and live music events.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                key="events-collapsed"
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h3 
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.1, color: '#f97316' }}
                >
                  Organizers
                </motion.h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ===== BOX 4 : MUSIC BRANDS ===== */}
        <motion.div
          onClick={() => setActive('brands')}
          className={`relative cursor-pointer transition-all duration-700
            ${active === 'brands' ? 'border-transparent' : 'border border-gray-700 hover:border-gray-500'}
          `}
          style={{ width: '280px', height: '320px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: active === 'brands' ? 1 : 1.02 }}
        >
          <AnimatePresence mode="wait">
            {active === 'brands' ? (
              <motion.div 
                key="brands-expanded"
                className="w-full h-full flex flex-col items-center justify-between py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-56 h-56 rounded-full bg-blue-600 flex items-center justify-center relative overflow-hidden"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="text-center space-y-1 text-sm relative z-10">
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                      Music Branding
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                      Artist Campaigns
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                      Digital Presence
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                      Audience Growth
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gray-500 text-xs">004</span>
                  <h3 className="text-2xl font-bold text-orange-500 mt-2">Music Brands</h3>
                  <p className="text-xs text-gray-400 mt-2 px-4">
                    For labels and brands building strong presence in the music industry.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                key="brands-collapsed"
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h3 
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.1, color: '#f97316' }}
                >
                  Brands
                </motion.h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>


{/* ========== UPCOMING EVENTS SECTION ========== */}
<section className="min-h-screen bg-black text-white px-6 md:px-16 py-20 relative overflow-hidden">
  
  {/* Background decorative elements */}
  <motion.div
    className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  <motion.div
    className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
    animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.5, 0.3, 0.5],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <div className="relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 tracking-[0.3em] text-sm mb-4 font-light"
      >
        DISCOVER
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl font-bold tracking-wide"
      >
        UPCOMING EVENTS
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-32 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mt-6"
      />
    </motion.div>

    {/* Main Event */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto">
      {/* Main Video */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative"
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              background: [
                'linear-gradient(0deg, rgba(249,115,22,0.3) 0%, rgba(168,85,247,0.3) 100%)',
                'linear-gradient(90deg, rgba(249,115,22,0.3) 0%, rgba(168,85,247,0.3) 100%)',
                'linear-gradient(180deg, rgba(249,115,22,0.3) 0%, rgba(168,85,247,0.3) 100%)',
                'linear-gradient(270deg, rgba(249,115,22,0.3) 0%, rgba(168,85,247,0.3) 100%)',
                'linear-gradient(360deg, rgba(249,115,22,0.3) 0%, rgba(168,85,247,0.3) 100%)',
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ padding: '2px' }}
          />
          
          <video
            src="/main-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover relative z-10"
          />
          
          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"
            initial={{ opacity: 0.3 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />

          {/* Play icon overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative corners */}
        <motion.div
          className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-orange-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            AUG 20
          </div>
          <span className="text-gray-600">·</span>
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            6:00 PM UTC
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          Live Music & Concert Night
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg leading-relaxed max-w-md font-light"
        >
          Enjoy powerful live performances, crowd engagement and
          professionally managed music events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative cursor-pointer z-10 group-hover:text-black transition-colors">
              JOIN EVENT
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 cursor-pointer border-2 border-white/30 rounded-full hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm font-semibold"
          >
            LEARN MORE
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex gap-8 pt-8 border-t border-gray-800"
        >
          <div>
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-sm text-gray-400 font-medium">Attendees</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">15</p>
            <p className="text-sm text-gray-400 font-medium">Artists</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">4hrs</p>
            <p className="text-sm text-gray-400 font-medium">Duration</p>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Video Thumbnails Grid */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 text-center md:text-left tracking-tight"
      >
        More Events
      </motion.h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "qawali (1).mp4",
          "qawali (2).mp4",
          "qawali (3).mp4",
          "qawali (4).mp4",
        ].map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative h-56 rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Gradient border effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ padding: '2px' }}
            />
            
            <div className="relative h-full w-full bg-black rounded-xl overflow-hidden">
              <video
                src={`/${video}`}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.9 }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <motion.h4
                  className="text-sm font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  Event {index + 1}
                </motion.h4>
                <p className="text-xs text-gray-400 font-medium">
                  {["Aug 25", "Sep 10", "Sep 20", "Oct 5"][index]}
                </p>
              </div>

              {/* Play button */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* View All Button */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="text-center mt-12"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-4 cursor-pointer border-2 border-white/30 text-white rounded-full hover:border-white hover:bg-white/10 transition-all font-bold tracking-wide"
      >
        VIEW ALL EVENTS →
      </motion.button>
    </motion.div>
  </div>
</section>

{/* =================SINGERS=============== */}
    <section className="w-full bg-black py-16 px-4 md:px-8">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-7xl text-white tracking-wider">
          SINGERS
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mt-6" />
      </div>

      {/* Singers Grid - Horizontal Scroll */}
      <div className="relative max-w-7xl mx-auto group/container">
        {/* Scroll Indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
            <span className="text-white text-sm font-medium">SCROLL</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover/container:opacity-100 hover:scale-110"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover/container:opacity-100 hover:scale-110"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Singers Container */}
        <div className="singers-scroll-container overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-6 pb-6 min-w-max px-4">
            
            {/* Singer 1 */}
            <div className="singer-card relative group flex-shrink-0 w-[280px] md:w-[320px] snap-center transition-all duration-500">
              <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-lg">
                <Image
                  src="/arijitsing.png"
                  alt="Arijit Singh"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2">Arijit Singh</h3>
                  <p className="text-gray-300 text-sm mb-4">Indian Singer</p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Singer 2 */}
            <div className="singer-card relative group flex-shrink-0 w-[280px] md:w-[320px] snap-center transition-all duration-500">
              <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-lg">
                <Image
                  src="/shreya.png"
                  alt="Shreya Ghoshal"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2">Shreya Ghoshal</h3>
                  <p className="text-gray-300 text-sm mb-4">Playback Singer</p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Singer 3 */}
            <div className="singer-card relative group flex-shrink-0 w-[280px] md:w-[320px] snap-center transition-all duration-500">
              <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-lg">
                <Image
                  src="/darshan.png"
                  alt="Darshan Raval"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2">Darshan Raval</h3>
                  <p className="text-gray-300 text-sm mb-4">Indian Singer</p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Singer 4 */}
            <div className="singer-card relative group flex-shrink-0 w-[280px] md:w-[320px] snap-center transition-all duration-500">
              <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-lg">
                <Image
                  src="/ar.rahman.png"
                  alt="AR Rahman"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2">A.R. Rahman</h3>
                  <p className="text-gray-300 text-sm mb-4">Music Composer</p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Singer 5 */}
            <div className="singer-card relative group flex-shrink-0 w-[280px] md:w-[320px] snap-center transition-all duration-500">
              <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-lg">
                <Image
                  src="/neha.png"
                  alt="Neha Kakkar"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2">Neha Kakkar</h3>
                  <p className="text-gray-300 text-sm mb-4">Bollywood Singer</p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* See All Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
          See All Singers
        </button>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Smooth scroll behavior */
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        /* Snap scrolling */
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        
        .snap-center {
          scroll-snap-align: center;
        }
        
        /* Add momentum scrolling for iOS */
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
    </>
        )
}