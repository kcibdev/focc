import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundTypewriter: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    'Public Lecture & Induction Committee',
    'Innovate, Integrate, Inspire',
    'Faculty of Computing Excellence',
    'Shaping Tomorrow\'s Tech Leaders'
  ];

  useEffect(() => {
    const typeText = async () => {
      const text = texts[textIndex];
      setIsVisible(true);
      
      // Type out the text slower
      for (let i = 0; i <= text.length; i++) {
        setCurrentText(text.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 150)); // Slower typing
      }
      
      // Hold the text longer for better visibility
      await new Promise(resolve => setTimeout(resolve, 4000)); // Longer hold time
      
      // Fade out slower
      setIsVisible(false);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Slower fade
      
      // Clear text and move to next
      setCurrentText('');
      setTextIndex((prev) => (prev + 1) % texts.length);
    };

    const interval = setInterval(typeText, 10000); // Longer cycle time
    typeText(); // Start immediately

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      <AnimatePresence>
        {currentText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.25 : 0 }} // More visible
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} // Slower transitions
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-emerald-400/30 blur-sm select-none text-center px-4">
              {currentText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="ml-2"
              >
                |
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundTypewriter;