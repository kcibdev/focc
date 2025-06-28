import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Calendar, MapPin } from 'lucide-react';

const ScheduleSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scheduleItems = [
    {
      time: '9:00 AM - 9:30 AM',
      title: 'Arrival & Registration',
      description: 'Check-in, grab your conference materials and coffee.',
      icon: MapPin,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      time: '9:30 AM - 10:30 AM',
      title: 'Opening Ceremony & Keynote 1',
      description: '"The Next Leap: Emerging Technologies"',
      icon: Calendar,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      time: '10:30 AM - 11:45 AM',
      title: 'Panel Discussion 1',
      description: '"Navigating the Now: Trends & Opportunities"',
      icon: Clock,
      color: 'from-purple-400 to-pink-500',
    },
    {
      time: '11:45 AM - 1:00 PM',
      title: 'Keynote 2 & Mass Induction Ceremony',
      description: '"From Code to Impact" followed by induction into NCS & Alumni Body.',
      icon: Calendar,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'Alumni Network Lunch',
      description: 'Connect with peers, speakers, and alumni.',
      icon: MapPin,
      color: 'from-green-400 to-emerald-500',
    },
    {
      time: '2:00 PM - 3:15 PM',
      title: 'Panel Discussion 2 & 3',
      description: '"Beyond the Degree" & "Launchpad to Startup"',
      icon: Clock,
      color: 'from-indigo-400 to-purple-500',
    },
    {
      time: '3:15 PM - 4:00 PM',
      title: 'Closing Keynote & Remarks',
      description: '"The Future is Collaborative" followed by closing remarks.',
      icon: Calendar,
      color: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section id="schedule" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-6 tracking-tight">
            <span className="text-white">
              Event{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto font-poppins font-semibold tracking-wide">
            A day packed with learning, networking, and inspiration. Witness the flow of innovation throughout the event.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-400 opacity-50" />

          <div className="space-y-8">
            {scheduleItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="relative pl-20 group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`absolute left-6 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-black z-10`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-300`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-6 backdrop-blur-lg border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color} flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.p
                          className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.time}
                        </motion.p>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-white">{item.description}</p>
                      </div>
                    </div>

                    {/* Hover Effect Glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                      initial={false}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
          <motion.div
            className="w-full h-full border-2 border-emerald-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        
        <div className="absolute bottom-20 left-10 w-24 h-24 opacity-10">
          <motion.div
            className="w-full h-full border-2 border-cyan-400 transform rotate-45"
            animate={{ rotate: 405 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;