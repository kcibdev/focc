import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Shield, Briefcase, Star, CheckCircle, MapPin, FileText } from 'lucide-react';

const NCSInductionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: Award,
      title: 'Professional Recognition',
      description: 'Gain official recognition as a computing professional in Nigeria',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Users,
      title: 'Network Access',
      description: 'Connect with over 15,000 computing professionals nationwide',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Industry Standards',
      description: 'Uphold ethical standards and best practices in computing',
      color: 'from-emerald-400 to-green-500',
    },
    {
      icon: Briefcase,
      title: 'Career Advancement',
      description: 'Access exclusive job opportunities and professional development',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="ncs-induction" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      {/* Bauchi State Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '30px 30px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Star size={40} className="text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black font-product-sans mb-6 tracking-tight">
            <span className="text-white">
              NCS{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Induction Ceremony
            </span>
          </h2>
          
          <p className="text-xl text-white max-w-4xl mx-auto font-product-sans font-semibold tracking-wide leading-relaxed">
            Join the prestigious Nigeria Computer Society (NCS) and become part of the largest 
            community of computing professionals in Nigeria. This mass induction ceremony marks 
            your official entry into professional computing practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* NCS Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-8 backdrop-blur-lg border border-emerald-500/20">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-product-sans">
                About Nigeria Computer Society
              </h3>
              <p className="text-white leading-relaxed mb-4 font-product-sans">
                Established in 1978, the Nigeria Computer Society (NCS) is the umbrella body for 
                all computing professionals in Nigeria. As the premier professional association, 
                NCS promotes excellence in computing practice and serves as the voice of the 
                computing community.
              </p>
              
              <div className="space-y-3">
                {[
                  'Founded in 1978 - 45+ years of excellence',
                  '15,000+ active professional members',
                  'Recognized by government and industry',
                  'Continuous professional development programs'
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-white font-product-sans">{fact}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-xl p-6 backdrop-blur-lg border border-emerald-500/20 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 circle-text`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </motion.div>
                  
                  <h4 className={`font-bold text-sm mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent font-product-sans`}>
                    {benefit.title}
                  </h4>
                  
                  <p className="text-white text-xs leading-relaxed font-product-sans">
                    {benefit.description}
                  </p>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bauchi State Chapter Information */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-lg border border-emerald-500/30">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="text-emerald-400" size={32} />
                <h3 className="text-2xl font-bold text-white font-product-sans">
                  NCS Bauchi State Chapter
                </h3>
              </motion.div>
            </div>
            
            <p className="text-white leading-relaxed font-product-sans max-w-4xl mx-auto text-center mb-6">
              The NCS Bauchi State Chapter serves as the regional hub for computing professionals 
              in Bauchi State and the northeastern region of Nigeria. Our chapter is committed to 
              fostering technological advancement, professional development, and innovation within 
              the state's growing tech ecosystem.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'Regional Leadership',
                  description: 'Leading tech innovation in Bauchi State and the Northeast',
                  icon: '🏛️'
                },
                {
                  title: 'Local Network',
                  description: 'Connecting professionals across Bauchi\'s tech community',
                  icon: '🤝'
                },
                {
                  title: 'State Development',
                  description: 'Contributing to Bauchi\'s digital transformation agenda',
                  icon: '🚀'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-emerald-400 mb-2 font-product-sans">{item.title}</h4>
                  <p className="text-white text-sm font-product-sans">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Induction Process with CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-8 backdrop-blur-lg border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 font-product-sans">
              Mass Induction Process
            </h3>
            <p className="text-white leading-relaxed font-product-sans max-w-3xl mx-auto mb-6">
              During the colloquium, eligible graduating students will be inducted as Associate Members 
              of the Nigeria Computer Society Bauchi State Chapter. This ceremony includes the administration 
              of the professional oath, presentation of certificates, and welcome into the computing community.
            </p>
            
            <motion.a
              href="mailto:ncs.bauchi@atbu.edu.ng?subject=Interest Form - NCS Induction Ceremony"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/30 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="mr-3 group-hover:animate-bounce" size={24} />
              Fill the Interest Form
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
};

export default NCSInductionSection;