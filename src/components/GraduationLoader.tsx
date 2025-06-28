import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GraduationLoaderProps {
  onComplete: () => void;
}

const GraduationLoader: React.FC<GraduationLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="graduation-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Graduation Cap Animation */}
          <motion.div
            className="graduation-cap"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="cap-base"
              animate={{ 
                boxShadow: [
                  '0 4px 15px rgba(16, 185, 129, 0.4)',
                  '0 4px 25px rgba(16, 185, 129, 0.8)',
                  '0 4px 15px rgba(16, 185, 129, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="cap-top"
              animate={{ 
                boxShadow: [
                  '0 2px 10px rgba(16, 185, 129, 0.3)',
                  '0 2px 20px rgba(16, 185, 129, 0.6)',
                  '0 2px 10px rgba(16, 185, 129, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <div className="tassel" />
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="loader-progress"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="loader-bar"
              style={{ width: `${progress}%` }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%']
              }}
              transition={{
                backgroundPosition: {
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="loader-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Preparing Excellence... {Math.round(progress)}%
          </motion.div>

          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}

          {/* University Motto */}
          <motion.div
            className="absolute bottom-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-emerald-400 font-orbitron text-sm tracking-wider opacity-80">
              ATBU - Excellence in Education
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GraduationLoader;