'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface EventCardProps {
    image: string;
    title: string;
    link: string;
    isCurrentEvent: boolean;
    isPast: boolean;
}

export default function EventCard({ image, title, link, isCurrentEvent, isPast }: EventCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (cardRef.current) {
            VanillaTilt.init(cardRef.current, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
                scale: 1.02,
            });
        }

        return () => {
            if (cardRef.current) {
                VanillaTilt.init(cardRef.current, null); // Clean up to prevent memory leaks
            }
        };
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = cardRef.current!.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        setOffset({ x, y });
    };

    return (
        <Card
            ref={cardRef}
            className="max-w-xs bg-[var(--color-card-bg)] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            onMouseMove={handleMouseMove}
        >
            {/* Image Section */}
            <CardHeader className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
                {/* Overlay with Button */}
                <div className="absolute inset-0 bg-[var(--color-overlay)] opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-t-lg">
                    <Link href={link}>
                        <p
                            className="text-[var(--color-text-light)] bg-[var(--color-primary)] px-4 py-2 rounded-md font-semibold hover:bg-[var(--color-hover)] transition-colors"
                            style={{
                                transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`,
                                transition: 'transform 0.1s ease',
                            }}
                        >
                           {isPast ? 'Details..' : isCurrentEvent ? 'Watch Live' : 'Enroll Now'}
                        </p>
                    </Link>
                </div>
            </CardHeader>

            {/* Title Section */}
            <CardContent className="p-4">
                <CardTitle className="text-xl font-bold text-[var(--color-text-light)] truncate">
                    {title}
                </CardTitle>
            </CardContent>
        </Card>
    );
}
