'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from "@/components/ScrollBtn";

const services = [
  {
    title: "Game Development",
    description: "Cutting-edge game development for multiple platforms",
    icon: "🎮",
    bgImage: "/img/features/1.jpg",
    cardBg: "/img/tournament/cod.jpg", // Add gaming-related background
    features: [
      "Custom Game Design",
      "Cross-Platform Development",
      "Unity & Unreal Engine",
      "Mobile Game Development"
    ]
  },
  {
    title: "3D Modeling",
    description: "Professional 3D modeling and animation services",
    icon: "🎨",
    bgImage: "/img/features/2.jpg",
    cardBg: "/img/tournament/dota.jpg", // Add 3D modeling related background
    features: [
      "Character Modeling",
      "Environment Design",
      "Animation Rigging",
      "Texture Mapping"
    ]
  },
  {
    title: "Game Testing",
    description: "Comprehensive testing and QA services",
    icon: "🎯",
    bgImage: "/img/features/3.jpg",
    cardBg: "/img/tournament/csgo.jpg", // Add testing related background
    features: [
      "Bug Testing",
      "Performance Testing",
      "Compatibility Testing",
      "User Experience Testing"
    ]
  },
  {
    title: "Multiplayer Gaming",
    description: "Seamless multiplayer integration services",
    icon: "🌐",
    bgImage: "/img/features/4.jpg",
    cardBg: "/img/tournament/pubg.jpg", // Add multiplayer gaming background
    features: [
      "Real-time Networking",
      "Server Architecture",
      "Anti-cheat Systems",
      "Matchmaking Systems"
    ]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <>
    <ScrollToTop />
    <Navbar/>
    <div className="min-h-screen bg-[var(--primary-color)]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/img/page-top-bg/services-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl pt-40 font-bold text-[var(--color-text-light)] pixel-font"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            Elevate your gaming experience with our professional services
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Background Image with Low Opacity */}
              <div 
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${service.cardBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.15' // Very low opacity
                }}
              />
              <ServiceCard
                {...service}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[var(--color-card-bg)] py-16 mt-16"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 pixel-font">Ready to Level Up?</h2>
          <p className="text-gray-300 mb-8">
            Contact us today to discuss your gaming project and take it to the next level
          </p>
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-hover)] text-white px-8 py-3 rounded-md transition-colors duration-300 pixel-font">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
}