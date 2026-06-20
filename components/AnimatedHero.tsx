"use client";
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
    title: string;
    subtitle?: string;
    bgUrl?: string;
};

export default function AnimatedHero({ title, subtitle, bgUrl }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[45vh] flex items-center justify-center overflow-hidden"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${bgUrl || '/img/page-top-bg/services-bg.jpg'}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] pixel-font">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">{subtitle}</p>
                )}
            </div>
        </motion.div>
    );
}
