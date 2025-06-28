import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-emerald-500/20 backdrop-blur-lg py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div
            className="text-emerald-400 font-orbitron font-bold text-xl mb-4"
            whileHover={{ scale: 1.05 }}
          >
            FOC COLLOQUIUM 2025
          </motion.div>
          
          {/* Bauchi State Integration */}
          <motion.div
            className="flex items-center justify-center space-x-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MapPin className="text-emerald-400" size={20} />
            <span className="text-white font-product-sans font-semibold">
              Proudly hosted in Bauchi State, Nigeria
            </span>
          </motion.div>
          
          <p className="text-white">
            &copy; 2025 Faculty of Computing, ATBU, Bauchi. All Rights Reserved.
          </p>
          
          <motion.p
            className="text-sm text-emerald-400 font-orbitron font-semibold"
            animate={{ 
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Powered by the Public Lecture & Induction Committee ✨
          </motion.p>
          
          <motion.p
            className="text-sm text-gray-400 font-orbitron"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          >
            Innovate, Integrate, Inspire - From the Heart of Bauchi State
          </motion.p>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;