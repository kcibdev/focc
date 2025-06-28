import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import ScheduleSection from './components/ScheduleSection';
import GoalsSection from './components/GoalsSection';
import NCSInductionSection from './components/NCSInductionSection';
import OurJourneySection from './components/OurJourneySection';
import SponsorshipSection from './components/SponsorshipSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import BackgroundTypewriter from './components/BackgroundTypewriter';
import GraduationLoader from './components/GraduationLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <GraduationLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParticleBackground />
      <FloatingElements />
      <BackgroundTypewriter />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SpeakersSection />
          <ScheduleSection />
          <GoalsSection />
          <NCSInductionSection />
          <OurJourneySection />
          <SponsorshipSection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;