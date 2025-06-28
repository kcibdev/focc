import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Heart, Star, Users, X } from 'lucide-react';

const OurJourneySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Computing Excellence',
      description: 'Students showcasing their innovative projects',
      duration: 5000, // 5 seconds
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Collaborative Learning',
      description: 'Team projects and peer learning sessions',
      duration: 6000, // 6 seconds
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation Hub',
      description: 'Students working on cutting-edge technology',
      duration: 5500, // 5.5 seconds
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Research & Development',
      description: 'Advanced research in computing fields',
      duration: 7000, // 7 seconds
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tech Presentations',
      description: 'Students presenting their final year projects',
      duration: 5000, // 5 seconds
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Future Leaders',
      description: 'The next generation of tech innovators',
      duration: 6500, // 6.5 seconds
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coding Sessions',
      description: 'Intensive programming and development work',
      duration: 5500, // 5.5 seconds
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Achievement Moments',
      description: 'Celebrating academic and project milestones',
      duration: 6000, // 6 seconds
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Building',
      description: 'Building lasting friendships and networks',
      duration: 5000, // 5 seconds
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1181299/pexels-photo-1181299.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Digital Innovation',
      description: 'Exploring new frontiers in technology',
      duration: 7500, // 7.5 seconds
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Academic Excellence',
      description: 'Pursuing knowledge and academic achievement',
      duration: 5500, // 5.5 seconds
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tech Community',
      description: 'Building connections in the tech ecosystem',
      duration: 6000, // 6 seconds
    },
  ];

  // Dynamic image rotation with variable timing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const rotateImages = () => {
      const currentImage = galleryImages[currentImageIndex];
      const duration = currentImage.duration;

      timeoutId = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, duration);
    };

    // Start the rotation
    rotateImages();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentImageIndex, galleryImages]);

  // Get current set of 9 images to display
  const getDisplayImages = () => {
    const images = [];
    for (let i = 0; i < 9; i++) {
      const index = (currentImageIndex + i) % galleryImages.length;
      images.push(galleryImages[index]);
    }
    return images;
  };

  const displayImages = getDisplayImages();

  return (
    <section id="our-journey" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated background elements with emerald/cyan theme */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
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
            <Camera size={40} className="text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black font-product-sans mb-6 tracking-tight">
            <span className="text-white">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          
          <p className="text-xl text-white max-w-4xl mx-auto font-product-sans font-semibold tracking-wide leading-relaxed">
            Capturing moments of excellence, innovation, and growth. These images tell the story 
            of our students' remarkable journey through the world of computing at ATBU, Bauchi.
          </p>
        </motion.div>

        {/* Gallery Grid - Dynamic Images with Smoother Transitions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          layout
        >
          <AnimatePresence mode="wait">
            {displayImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${currentImageIndex}`}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image.id)}
                layout
              >
                {/* Image Container with Unique Aspect Ratios */}
                <div className={`relative overflow-hidden rounded-2xl ${
                  index % 3 === 0 ? 'aspect-[4/5]' : 
                  index % 3 === 1 ? 'aspect-square' : 'aspect-[5/4]'
                }`}>
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Gradient Overlay with emerald/cyan theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="font-bold text-lg mb-2 font-product-sans">{image.title}</h3>
                    <p className="text-sm opacity-90 font-product-sans">{image.description}</p>
                  </motion.div>

                  {/* Hover Icons with emerald/cyan theme */}
                  <motion.div
                    className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                    >
                      <Heart size={16} className="text-white" />
                    </motion.div>
                    <motion.div
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                    >
                      <Star size={16} className="text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Decorative Corner with emerald theme */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-emerald-500/50 border-b-[30px] border-b-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Progress indicator for current image timing */}
                  {index === 0 && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ 
                        duration: image.duration / 1000,
                        ease: 'linear',
                        repeat: Infinity
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/30 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Camera className="mr-3 group-hover:animate-bounce" size={24} />
            View All Memories
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Stats Section with emerald/cyan theme */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Users, number: '500+', label: 'Students' },
            { icon: Star, number: '50+', label: 'Projects' },
            { icon: Heart, number: '100+', label: 'Memories' },
            { icon: Camera, number: '1000+', label: 'Moments' },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl backdrop-blur-lg border border-emerald-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <IconComponent className="text-emerald-400 mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1 font-product-sans">{stat.number}</div>
                <div className="text-emerald-400 text-sm font-product-sans">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const image = galleryImages.find(img => img.id === selectedImage);
                return image ? (
                  <>
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold mb-2 font-product-sans">{image.title}</h3>
                      <p className="text-white/80 font-product-sans">{image.description}</p>
                    </div>
                  </>
                ) : null;
              })()}
              
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurJourneySection;