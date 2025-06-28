import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-1">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border-2 border-emerald-400/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-8 h-8 border border-cyan-400/40 rotate-45"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      
      <motion.div
        className="absolute top-1/3 right-10 w-20 h-20 border-2 border-purple-400/20 rounded-full"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: '1.5s' }}
      />
      
      <motion.div
        className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 transform rotate-12"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="h-full w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent absolute left-1/4"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent absolute right-1/4"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>
    </div>
  );
};

export default FloatingElements;