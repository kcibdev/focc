import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [displaySubtext, setDisplaySubtext] = useState('');
  const fullText = 'Innovate, Integrate, Inspire';
  const fullSubtext = 'Shaping the Future of Computing';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Start subtext typing
        let j = 0;
        const subtextInterval = setInterval(() => {
          if (j < fullSubtext.length) {
            setDisplaySubtext(fullSubtext.slice(0, j + 1));
            j++;
          } else {
            clearInterval(subtextInterval);
          }
        }, 50);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep space background overlay with better blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/30 to-black/80" />
      
      {/* Space-themed background image with reduced opacity */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Deep Space Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated star field overlay */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, #fff, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(16, 185, 129, 0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, #fff, transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(59, 130, 246, 0.8), transparent),
              radial-gradient(2px 2px at 160px 30px, #fff, transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '200px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Smooth gradient blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-2"
        >
          {/* Main Title with Typewriter Effect and Enhanced Spacing */}
          <div className="relative mb-4">
            <h1 className="text-5xl md:text-7xl font-black font-product-sans hero-title tracking-tighter">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                className="inline-block w-1 h-16 md:h-20 bg-emerald-400 ml-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </h1>
            
            {/* Cosmic glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>

          {/* Subtitle with improved spacing */}
          <motion.p
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-product-sans font-bold tracking-wide hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: displaySubtext ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {displaySubtext}
            <motion.span
              className="inline-block w-0.5 h-6 bg-white ml-1"
              animate={{ opacity: displaySubtext === fullSubtext ? [0, 1, 0] : 1 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.p>

          {/* Event Details with Enhanced Blurred Date and Better Spacing */}
          <motion.div
            className="hero-content-spacing"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="inline-block p-6 rounded-2xl liquid-glass border border-emerald-500/30">
              <p className="font-black text-emerald-400 text-xl mb-2 blur-date font-product-sans tracking-wide">
                October 24th, 2025
              </p>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MapPin className="text-emerald-400" size={20} />
                <p className="text-white text-lg font-product-sans font-bold tracking-wide">
                  1000-Seater Hall, Yelwa Campus
                </p>
              </div>
              <p className="text-emerald-400 text-sm font-product-sans font-semibold">
                ATBU, Bauchi State, Nigeria
              </p>
            </div>
          </motion.div>

          {/* CTA Button with Updated Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="hero-content-spacing"
          >
            <motion.a
              href="#sponsorship"
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/30 font-product-sans tracking-wide btn-professional cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now!!
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-emerald-400"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;