import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Link, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const pillars = [
    {
      icon: Lightbulb,
      title: 'Innovate',
      description: 'Embrace creativity and drive advancements in computing technology.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
    },
    {
      icon: Link,
      title: 'Integrate',
      description: 'Connect diverse technologies and foster industry-academia partnerships.',
      color: 'from-emerald-400 to-cyan-500',
      bgColor: 'from-emerald-500/10 to-cyan-500/10',
    },
    {
      icon: Sparkles,
      title: 'Inspire',
      description: 'Motivate students to achieve impactful careers in technology.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black font-orbitron mb-6 tracking-tight"
            variants={itemVariants}
          >
            <span className="text-white">
              About This{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Colloquium
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-poppins font-semibold tracking-wide"
            variants={itemVariants}
          >
            Join the Faculty of Computing for a pivotal event designed to connect academia with industry, 
            empower future tech leaders, and foster professional growth within the computing community. 
            Explore how we can innovate, integrate, and inspire the next wave of technological advancement.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-emerald-500/20 group overflow-hidden cursor-pointer`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${pillar.color} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center circle-text`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent size={32} className="text-white" />
                  </motion.div>

                  <h3 className={`text-2xl font-extrabold mb-4 bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent font-poppins tracking-wide text-center`}>
                    {pillar.title}
                  </h3>
                  
                  <p className="text-white leading-relaxed font-poppins text-center tracking-wide font-medium">
                    {pillar.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${pillar.color} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                  initial={false}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;