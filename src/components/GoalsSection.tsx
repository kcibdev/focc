import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Target, Users, DollarSign, Network } from 'lucide-react';

const GoalsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isComponentMounted = true;

    const resizeCanvas = () => {
      if (!isComponentMounted) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const data = [
      { label: 'Student Empowerment', value: 40, color: '#10b981' },
      { label: 'Professional Integration', value: 25, color: '#3b82f6' },
      { label: 'Alumni Networking', value: 20, color: '#8b5cf6' },
      { label: 'Financial Sustainability', value: 15, color: '#f59e0b' },
    ];

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) - 40;
    const innerRadius = radius * 0.6;

    let currentAngle = -Math.PI / 2;
    let animationProgress = 0;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!animationComplete || !isComponentMounted) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance >= innerRadius && distance <= radius) {
        let angle = Math.atan2(dy, dx) + Math.PI / 2;
        if (angle < 0) angle += 2 * Math.PI;
        
        let currentSegmentAngle = 0;
        let foundSegment = null;
        
        for (let i = 0; i < data.length; i++) {
          const segmentAngle = (data[i].value / 100) * 2 * Math.PI;
          if (angle >= currentSegmentAngle && angle <= currentSegmentAngle + segmentAngle) {
            foundSegment = i;
            break;
          }
          currentSegmentAngle += segmentAngle;
        }
        
        setHoveredSegment(foundSegment);
        canvas.style.cursor = 'pointer';
      } else {
        setHoveredSegment(null);
        canvas.style.cursor = 'default';
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (!animationComplete || !isComponentMounted) return;
      
      if (hoveredSegment !== null) {
        setSelectedSegment(selectedSegment === hoveredSegment ? null : hoveredSegment);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    const animate = () => {
      if (!isComponentMounted) return;
      
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      if (animationProgress < 1) {
        animationProgress += 0.02;
        if (animationProgress >= 1) {
          setAnimationComplete(true);
        }
      }

      currentAngle = -Math.PI / 2;

      data.forEach((segment, index) => {
        const segmentAngle = (segment.value / 100) * 2 * Math.PI * animationProgress;
        const isHovered = hoveredSegment === index && animationComplete;
        const isSelected = selectedSegment === index && animationComplete;
        const segmentRadius = isHovered || isSelected ? radius + 10 : radius;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, segmentRadius);
        gradient.addColorStop(0, segment.color + '80');
        gradient.addColorStop(1, segment.color);

        // Draw segment
        ctx.beginPath();
        ctx.arc(centerX, centerY, segmentRadius, currentAngle, currentAngle + segmentAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + segmentAngle, currentAngle, true);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        if (isHovered || isSelected) {
          ctx.shadowColor = segment.color;
          ctx.shadowBlur = 30;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.shadowColor = segment.color;
          ctx.shadowBlur = 20;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw percentage text
        if (animationProgress > 0.8) {
          const textAngle = currentAngle + segmentAngle / 2;
          const textRadius = (radius + innerRadius) / 2;
          const textX = centerX + Math.cos(textAngle) * textRadius;
          const textY = centerY + Math.sin(textAngle) * textRadius;
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 14px Poppins';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${segment.value}%`, textX, textY);
        }

        currentAngle += segmentAngle;
      });

      // Add center circle
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, innerRadius);
      centerGradient.addColorStop(0, '#000000');
      centerGradient.addColorStop(1, '#111827');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
      ctx.fillStyle = centerGradient;
      ctx.fill();

      // Center text
      if (selectedSegment !== null && animationComplete) {
        ctx.fillStyle = data[selectedSegment].color;
        ctx.font = 'bold 16px Poppins';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(data[selectedSegment].label, centerX, centerY - 10);
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Poppins';
        ctx.fillText(`${data[selectedSegment].value}%`, centerX, centerY + 10);
      } else {
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 18px Orbitron';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Goals', centerX, centerY);
      }

      if (animationProgress < 1 && isComponentMounted) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const startAnimation = setTimeout(() => {
      if (isComponentMounted) {
        animate();
      }
    }, 500);

    return () => {
      isComponentMounted = false;
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(startAnimation);
    };
  }, [inView, hoveredSegment, selectedSegment, animationComplete]);

  const goals = [
    {
      icon: Users,
      title: 'Student Empowerment',
      description: 'Equip students with knowledge and connections to stand out in the global landscape.',
      color: 'from-emerald-400 to-green-500',
    },
    {
      icon: Network,
      title: 'Professional Integration',
      description: 'Foster professionalism and networking through mass induction into the NCS.',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: DollarSign,
      title: 'Financial Sustainability',
      description: 'Raise funds to support faculty programs and student projects.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Target,
      title: 'Alumni Network Establishment',
      description: 'Launch a functional alumni body for mentorship, collaboration, and career guidance.',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="goals" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black font-product-sans mb-6 tracking-tight">
            <span className="text-white">
              Our Goals &{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Expected Outcomes
            </span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto font-product-sans font-semibold tracking-wide">
            This event is designed to achieve specific, impactful goals for our students, faculty, and the wider computing community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Goals List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {goals.map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${goal.color} flex items-center justify-center circle-text`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-emerald-400 mr-2" size={20} />
                      <h4 className={`font-bold text-lg bg-gradient-to-r ${goal.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 font-product-sans tracking-wide`}>
                        {goal.title}
                      </h4>
                    </div>
                    <p className="text-white leading-relaxed font-product-sans tracking-wide">{goal.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interactive Chart */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-8 backdrop-blur-lg border border-emerald-500/20">
              <canvas
                ref={canvasRef}
                className="w-full h-80 mx-auto chart-interactive"
                style={{ maxWidth: '400px' }}
              />
              
              {/* Chart Legend */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'Student Empowerment', color: '#10b981', value: '40%' },
                  { label: 'Professional Integration', color: '#3b82f6', value: '25%' },
                  { label: 'Alumni Networking', color: '#8b5cf6', value: '20%' },
                  { label: 'Financial Sustainability', color: '#f59e0b', value: '15%' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-white font-product-sans">{item.label}</span>
                    <span className="text-sm font-bold font-product-sans" style={{ color: item.color }}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Interaction hint */}
              <p className="text-center text-emerald-400 text-sm mt-4 font-product-sans">
                Click segments to explore details
              </p>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
              animate={{
                y: [0, 10, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;