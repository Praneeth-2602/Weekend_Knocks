'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  bgImage: string;
}

export default function ServiceCard({ title, description, icon, features, bgImage }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.02,
      });
    }

    return () => {
      if (cardRef.current) {
        VanillaTilt.init(cardRef.current, undefined);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="relative h-[400px] overflow-hidden bg-[var(--color-card-bg)] border-none group">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
        </div>

        <CardContent className="relative h-full p-6 flex flex-col justify-between z-10">
          {/* Icon and Title */}
          <div>
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-3 pixel-font">
              {title}
            </h3>
            <p className="text-gray-300 mb-4">{description}</p>
          </div>

          {/* Features List */}
          <div className="space-y-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}