'use client';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import React from 'react';
import { useParams } from 'next/navigation';
import bg from '@/assets/login_bg.jpg';

interface Sponsor {
    name: string;
    logoUrl: string;
}

interface EventDetails {
    title: string;
    description: string;
    date: string;
    sponsors: Sponsor[];
    youtubeLink: string;
}

// Sample event details data
const eventDetails: EventDetails = {
    title: "Sample Event",
    description: "This is a sample event description.",
    date: "2023-10-01",
    sponsors: [
        { name: "Sponsor 1", logoUrl: "https://via.placeholder.com/150" },
        { name: "Sponsor 2", logoUrl: "https://via.placeholder.com/150" },
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

function Page() {
    const { eventId } = useParams();

    return (
        <>
            <Navbar />

            {/* Fixed Background Image with Blur Effect */}
            <div
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'fixed', // Makes the background fixed to the viewport
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    filter: 'blur(8px)',
                    zIndex: -1, // Puts the background behind all content
                }}
            ></div>

            {/* Event Details Content */}
            <div className="z-10 max-w-2xl mx-auto my-40 p-8 bg-[rgba(0,0,0,0.7)] rounded-lg shadow-lg text-white">
                <h1 className="text-4xl font-bold text-center text-[var(--color-primary)] mb-5">
                    {eventDetails.title}
                </h1>
                <p className="text-xl text-center mb-5 text-[var(--color-text-light)]">
                    {eventDetails.description}
                </p>
                <p className="text-center mb-5 text-gray-300">Date: {eventDetails.date}</p>

                {/* Sponsors Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-center mb-4 text-[var(--color-primary)]">
                        Sponsors
                    </h2>
                    <ul className="list-none p-0 flex flex-wrap justify-center">
                        {eventDetails.sponsors.map((sponsor, index) => (
                            <li key={index} className="flex items-center m-2 bg-gray-800 p-3 rounded shadow">
                                <img src={sponsor.logoUrl} alt={sponsor.name} className="w-12 h-12 mr-3 rounded-full" />
                                <span className="text-white">{sponsor.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* YouTube Link Section */}
                <div className="text-center mt-8">
                    <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">Past Stream</h2>
                    <a
                        href={eventDetails.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 px-5 py-2 bg-[var(--color-primary)] text-white rounded transition-colors duration-300 hover:bg-orange-600"
                    >
                        Watch on YouTube
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Page;
