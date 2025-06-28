import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Users, Mic } from 'lucide-react';

const SpeakersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('keynotes');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const keynotes = [
    {
      id: 1,
      title: 'The Next Leap: Emerging Technologies and Your Role in Shaping Them',
      speaker: 'Dr. Amina Yusuf',
      role: 'AI Research Director',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'An inspiring overview of groundbreaking technologies (AI ethics, Quantum Computing, Sustainable Tech, Cybersecurity, Metaverse/Web3) and how graduating students can contribute to these fields. This talk aims to ignite excitement and a sense of purpose.',
    },
    {
      id: 2,
      title: 'From Code to Impact: Building a Meaningful Career in the Digital Age',
      speaker: 'Mr. Chinedu Okoro',
      role: 'Senior Software Architect',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A successful alumnus shares their journey, challenges, and how they leveraged computing skills to create significant impact, offering advice on navigating early career stages. It\'s about translating academic knowledge into real-world value and finding fulfillment in their chosen path.',
    },
    {
      id: 3,
      title: 'The Future is Collaborative: Why Integration and Networks are Key to Innovation',
      speaker: 'Prof. Ibrahim Bello',
      role: 'Computing Department Head',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'This talk emphasizes the critical importance of collaboration, interdisciplinary work, open source contributions, and networking in the tech world. This sets a positive tone for the alumni network launch.',
    },
  ];

  const panels = [
    {
      id: 1,
      title: 'Navigating the Now: Trends, Challenges, and Opportunities in Today\'s Tech Landscape',
      moderator: 'Ms. Fatima Umar',
      role: 'Tech Industry Analyst',
      image: 'https://images.pexels.com/photos/3823490/pexels-photo-3823490.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A practical discussion on the current job market, in-demand skills (both technical and soft), challenges new graduates might face, and strategies for landing their first role or starting their own ventures.',
      subthemes: [
        'The impact of AI on various computing roles',
        'Remote work vs. in-office: pros, cons, and future trends',
        'The importance of continuous learning and upskilling',
        'Ethical considerations in software development and data handling',
      ],
    },
    {
      id: 2,
      title: 'Beyond the Degree: Specialisations, Further Studies, and Lifelong Learning in Computing',
      moderator: 'Dr. Nkechi Eze',
      role: 'Academic Research Director',
      image: 'https://images.pexels.com/photos/3823496/pexels-photo-3823496.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'This panel explores different pathways after graduation. It features professionals who pursued Master\'s/PhD degrees, specialized in niche areas, and those who have successfully pivoted within the tech industry.',
      subthemes: [
        'Choosing the right specialization: passion vs. market demand',
        'The value of certifications vs. formal degrees',
        'Research careers in computing',
        'How to build a personal brand and professional portfolio',
      ],
    },
    {
      id: 3,
      title: 'Launchpad: From Final Year Project to Startup/Innovation',
      moderator: 'Mr. Adekunle Biodun',
      role: 'Startup Founder & Mentor',
      image: 'https://images.pexels.com/photos/3823509/pexels-photo-3823509.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Inspiring entrepreneurship and innovation. Panellists include startup founders, VCs, or representatives from tech incubators/accelerators. They discuss how to identify viable ideas, develop an MVP, find funding, and the realities of a startup journey.',
      subthemes: [
        'Transforming academic projects into commercial products',
        'Building a strong founding team',
        'Navigating the local startup ecosystem and resources available',
        'Resilience and learning from failure',
      ],
    },
  ];

  return (
    <section id="speakers" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-6 tracking-tight">
            <span className="text-white">
              Speakers &{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Panels
            </span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto font-poppins font-semibold tracking-wide">
            Meet our thought leaders, industry pioneers, and expert panelists who will share their insights and experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex bg-gray-900/50 rounded-2xl p-2 backdrop-blur-lg border border-emerald-500/20">
            {[
              { id: 'keynotes', label: 'Keynote Speakers', icon: Mic },
              { id: 'panels', label: 'Panel Discussions', icon: Users },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-white hover:text-emerald-400'
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="mr-2" size={20} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {(activeTab === 'keynotes' ? keynotes : panels).map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl overflow-hidden backdrop-blur-lg border border-emerald-500/20 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                >
                  <div className="flex items-center space-x-4">
                    <motion.img
                      src={item.image}
                      alt={activeTab === 'keynotes' ? (item as any).speaker : (item as any).moderator}
                      className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-emerald-400 font-semibold">
                        {activeTab === 'keynotes' ? 'Speaker:' : 'Moderator:'} {activeTab === 'keynotes' ? (item as any).speaker : (item as any).moderator}
                      </p>
                      <p className="text-gray-400 text-sm">{(item as any).role}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCard === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-emerald-400"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedCard === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="border-t border-gray-600/50 pt-4">
                        <p className="text-white mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        {'subthemes' in item && (
                          <div>
                            <h4 className="font-semibold text-white mb-2">Key Topics:</h4>
                            <ul className="space-y-2">
                              {item.subthemes.map((theme, themeIndex) => (
                                <motion.li
                                  key={themeIndex}
                                  className="flex items-center text-white"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: themeIndex * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                                  {theme}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpeakersSection;