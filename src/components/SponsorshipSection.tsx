import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

const SponsorshipSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sponsorship" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Icons */}
          <div className="relative mb-8">
            <motion.div
              className="absolute -top-8 left-1/4 text-emerald-400"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles size={24} />
            </motion.div>
            
            <motion.div
              className="absolute -top-4 right-1/4 text-blue-400"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <Sparkles size={32} />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-6 tracking-tight">
              <span className="text-white">
                Partner{' '}
              </span>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                With Us
              </span>
            </h2>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-white mb-12 leading-relaxed font-poppins font-semibold tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Collaborate with the Faculty of Computing to support the next generation of tech innovators. 
            Your partnership fuels student development and community growth.
          </motion.p>

          {/* Partnership Benefits */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              {
                title: 'Brand Visibility',
                description: 'Showcase your brand to 1000+ tech enthusiasts',
                icon: '🎯',
                color: 'from-emerald-400 to-teal-500',
              },
              {
                title: 'Talent Pipeline',
                description: 'Connect with brilliant graduating students',
                icon: '🌟',
                color: 'from-blue-400 to-cyan-500',
              },
              {
                title: 'Community Impact',
                description: 'Contribute to tech education advancement',
                icon: '🚀',
                color: 'from-purple-400 to-pink-500',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-6 backdrop-blur-lg border border-emerald-500/20 group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className={`font-bold text-lg mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.title}
                </h3>
                <p className="text-white text-sm">{benefit.description}</p>
                
                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="mailto:foc.events@atbu.edu.ng?subject=Partnership Inquiry for FOC Colloquium"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/30 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-3 group-hover:animate-bounce" size={24} />
              Connect & Support Futures
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={24} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-12 p-6 bg-gray-900/60 rounded-2xl backdrop-blur-lg border border-emerald-500/20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="font-bold text-emerald-400 mb-2">Ready to Partner?</h3>
            <p className="text-white text-sm">
              Email us at <span className="text-emerald-400 font-mono">foc.events@atbu.edu.ng</span> or 
              call <span className="text-emerald-400 font-mono">+234-XXX-XXX-XXXX</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-400/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border-2 border-cyan-400/20 transform rotate-45"
        animate={{ rotate: 405 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
};

export default SponsorshipSection;