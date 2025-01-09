'use client';
import React, { useState, useEffect } from 'react';
const vdo1 = "/vdo1.mp4";
const vdo2 = "/vdo2.mp4";
const vdo3 = "/vdo3.mp4";

const images = [
  {
    url: vdo1,
    caption: 'Showcase your gaming skills and compete with some of the most talented teams from colleges across the region.Prove your mettle and rise to fame in thrilling inter-college tournaments!',
    header: 'Inter-College Tournaments',
    type: 'video',
    
    thumbnail:'https://images.pexels.com/photos/9072205/pexels-photo-9072205.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    url: 'https://images.unsplash.com/photo-1725272532764-183d164c722b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGdhbWluZyUyMENPTU1VTklUWXxlbnwwfHwwfHx8MA%3D%3D',
    caption: 'Find like-minded gaming enthusiasts, connect with passionate players, and build teams that can dominate the competition. Strengthen your alliances and achieve ultimate victory together!',
    header: 'Team Matchmaking',
    type: 'image',
  },
  {
    url: vdo3,
    caption: 'Dive into the electrifying experience of live matches. Cheer for your favorite teams, share the thrilling moments with friends, and feel the adrenaline rush of competitive gaming like never before!',
    header: 'Live Streams',
    type: 'video',
    thumbnail:'https://images.pexels.com/photos/9072389/pexels-photo-9072389.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    url: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D',
    caption: 'Stay ahead in the game by tracking your performance stats and rankings. Watch as your name climbs the leaderboard and let the world witness your journey to becoming a top-ranked gamer!',
    header: 'Leaderboards',
    type: 'image',
  },
  {
    url: vdo2,
    caption: 'Join our vibrant community forums to discuss strategies, share your proudest gaming achievements, and connect with fellow gamers who share your passion. It’s the perfect place to belong!',
    header: 'Community Forums',
    type: 'video',
    thumbnail:'https://images.pexels.com/photos/9072279/pexels-photo-9072279.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-700">
      {/* Slide Content */}
      <div className="absolute inset-0 w-full h-full">
        {images[currentIndex].type === 'video' ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={images[currentIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl text-orange-600 font-extrabold mb-4">
            {images[currentIndex].header}
          </h1>
          <p className="text-xl md:text-3xl extrabold font-semibold mb-8">
            {images[currentIndex].caption}
          </p>
          <div className="space-x-4">
            <button className="bg-red-500 px-6 py-2 text-lg rounded-full hover:bg-red-600">
              READ MORE
            </button>
            <button className="bg-gray-800 px-6 py-2 text-lg rounded-full hover:bg-gray-700">
              SEE MORE
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`overflow-hidden border-4 transition-all duration-500 ${
              index === currentIndex ? 'border-red-500' : 'border-transparent'
            } w-28 h-28 rounded-md bg-white bg-opacity-75`}
          >
            <img
               src={image.type === 'video' ? image.thumbnail : image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
