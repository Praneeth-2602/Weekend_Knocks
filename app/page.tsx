'use client';
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

import Slider from "@/components/Slider";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faCrown,
  faUsers,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  // FEATURES 
  const galleryImages: string[] = [
    '/img/gallery_item_1.png',
    '/img/gallery_item_2.png',
    '/img/gallery_item_3.png',
    '/img/gallery_item_4.png',
    '/img/gallery_item_5.png',
    '/img/gallery_item_6.png',
    
  ];
  const features = [
    {
      title: "Inter-College Tournaments",
      description: "Compete with teams from various colleges.",
    },
    {
      title: "Team Matchmaking",
      description: "Find and form teams with like-minded gamers.",
    },
    {
      title: "Leaderboards",
      description: "Track performance and rankings in real-time.",
    },
    {
      title: "Live Streams",
      description: "Watch matches live and share the excitement.",
    },
    {
      title: "Community Forums",
      description: "Discuss strategies, share highlights, and connect with fellow gamers.",
    },
    {
      title: "Exclusive Events",
      description: "Participate in polls, special events, and challenges.",
    },
  ];

  // DYNAMIC TITLE 
  const [dynamicTitle, setDynamicTitle] = useState({
    text: "Weekend Knocks",
    icon: faGamepad,
  });

  // Array of dynamic titles with icons
  const titles = [
    { text: "Weekend Knocks", icon: faGamepad },
    { text: "Your eSports Heaven", icon: faCrown },
    { text: "Gamers' Paradise", icon: faUsers },
    { text: "India's Gaming Hub", icon: faTrophy },
  ];

  useEffect(() => {
    let index = 0;

    // Update title every 3 seconds
    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setDynamicTitle(titles[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  // DATA FOR TOURNAMENTS 
	const tournaments= [
		{
			title: "World Of WarCraft",
			begins: "June 20, 2018",
			ends: "July 01, 2018",
			participants: "10 teams",
			author: "Admin",
			prizes: "1st place $2000, 2nd place: $1000, 3rd place: $500",
			image: "img/tournament/1.jpg",
		},
		{
			title: "DOOM",
			begins: "June 20, 2018",
			ends: "July 01, 2018",
			participants: "10 teams",
			author: "Admin",
			prizes: "1st place $2000, 2nd place: $1000, 3rd place: $500",
			image: "img/tournament/2.jpg",
		},
	];

  // OUR WORKS SECTION
  const stats = [
    { label: "Gamers Participated", target: 500, suffix: "+" },
    { label: "Tournaments Hosted", target: 20, suffix: "+" },
    { label: "Global Collaborations", target: 10, suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0)); // Initialize counts to 0
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    // IntersectionObserver callback
    const handleIntersection = (entries:IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the section comes into view, start the counting
          const intervals = stats.map((stat, index) =>
            setInterval(() => {
              setCounts((prevCounts) => {
                const newCounts = [...prevCounts];
                if (newCounts[index] < stat.target) {
                  const increment = Math.ceil(stat.target / 500); // Adjust speed
                  newCounts[index] = Math.min(newCounts[index] + increment, stat.target);
                }
                return newCounts;
              });
            }, 30) // Interval time in ms
          );

          // Cleanup all intervals when section is no longer in view
          return () => intervals.forEach((interval) => clearInterval(interval));
        }
      });
    };

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is in view
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer
      }
    };
  }, [stats]);

  
  
	const [currentImage, setCurrentImage] = useState(0);
	const images = [
		{ src: "/images/gaming-event.jpg", alt: "Gaming Event" },
		{ src: "/images/popular-game.jpg", alt: "Popular Game" },
		{ src: "/images/gaming-moment.jpg", alt: "Key Gaming Moment" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
		}, 5000); // Change image every 5 seconds
		return () => clearInterval(interval);
	}, []);
  
  
	return (
		<>
			<Navbar />
			<div className="flex flex-col justify-center items-center bg-gray-900 text-white">
				{/* Hero Section */}
				<Slider/>

				{/* Welcome Note */}
        <section className="bg-gray-900 text-white py-16 px-8 relative overflow-hidden">
          <div className="relative max-w-5xl mx-auto text-center">
          < span className=" text-7xl font-extrabold mb-6 text-transparent bg-clip-text 
          bg-gradient-to-r from-red-400 to-orange-500 tracking-wide uppercase pixel-font flex items-center justify-center animate-bounce-slow">Welcome to{" "}{dynamicTitle.text}
            <FontAwesomeIcon icon={dynamicTitle.icon} className="text-yellow-400" />
          </span>
          <p className="text-lg leading-relaxed mb-8">
          Weekend Knocks is a vibrant eSports community designed for passionate
          gamers and aspiring professionals pursuing undergraduate studies
          across India. We focus on hosting inter-college tournaments, team
          matchmaking, and fostering collaboration, all while creating a fun,
          engaging Saturday night experience.
        </p> 
       {/* <div className="relative group flex justify-center items-center">
     
      <img
        src="img/gamer.png"
        alt="Gaming Contact"
        className="w-full max-w-sm mx-auto lg:ml-auto transition-transform duration-700 ease-out group-hover:scale-95 group-hover:translate-y-4"
      />

    
      <div className="absolute inset-0 bg-red-400 rounded-full opacity-0 blur-3xl transform scale-75 group-hover:opacity-30  transition-all duration-500 ease-in-out"></div>
    </div> */}

      
        <div className="flex justify-center gap-4">
          <a
            href="/events"
            className="bg-blue-600 px-6 py-3 shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Explore Events
          </a>
          <a
            href="/join"
            className="bg-green-600 px-6 py-3  shadow-lg hover:bg-green-700 transition duration-300"
          >
            Join Us Now
          </a>
        </div>
      </div>
    </section>
   
			

			
    {/* Feature Section */}
    <h1 className=" text-5xl font-extrabold mb-6 text-transparent bg-clip-text 
          bg-gradient-to-r from-orange-400 to-yellow-500 tracking-wide uppercase pixel-font flex items-center justify-center gap-4 animate-fadeInOut">
        Features Of Weekend Knocks
      </h1>
    <div className="grid grid-cols-3 grid-rows-2 h-[75vh] w-3/4 mx-auto gap-4 mb-8 bg-black p-4">
    
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden"
        >
          {/* Image with black overlay */}
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            style={{ filter: "brightness(50%)" }} 
          />
          {/* Feature text */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60 p-4"
          >
            <div className="tournament-title bg-orange-600 text-white text-xs font-medium uppercase inline-block px-6 py-2 mb-4 text-center rounded">
              {features[index].title}
            </div>
            <p className="text-white text-sm text-center">
              {features[index].description}
            </p>
          </div>
        </div>
      ))}
    </div>
	</div>

     
			<div className="bg-gray-900 text-white ">
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text 
          bg-gradient-to-r from-orange-400 to-yellow-500 tracking-wide uppercase pixel-font flex items-center justify-center gap-4 animate-fadeInOut">
        Upcoming Events
      </h1>
      {/* Tournaments Section */}
     
		<section
  className="tournaments-section bg-gray-900 font-sans"
  
  style={{
    backgroundImage: `url('/img/background.jpg')`,
    backgroundRepeat: 'repeat',
  }}
>
  <div className="container mx-auto px-4 py-8">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tournaments.map((tournament, index) => (
        <div
          key={index}
          className="tournament-item bg-gray-900 text-white shadow-md overflow-hidden"
        >
          <div className="ti-notic bg-yellow-500 text-black text-xs font-bold uppercase inline-block px-5 py-2">
            Premium Tournament
          </div>
          <div className="ti-content flex items-start p-6">
            <div
              className="ti-thumb w-40 h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${tournament.image})` }}
            ></div>
            <div className="ti-text pl-6 flex-1">
              <h4 className="text-yellow-500 font-bold mb-4 text-lg">
                {tournament.title}
              </h4>
              <ul className="mb-4 text-sm">
                <li className="mb-1">
                  <span className="text-gray-400">Tournament Begins:</span>{' '}
                  {tournament.begins}
                </li>
                <li className="mb-1">
                  <span className="text-gray-400">Tournament Ends:</span>{' '}
                  {tournament.ends}
                </li>
                <li className="mb-1">
                  <span className="text-gray-400">Participants:</span>{' '}
                  {tournament.participants}
                </li>
                <li className="mb-1">
                  <span className="text-gray-400">Tournament Author:</span>{' '}
                  {tournament.author}
                </li>
              </ul>
              <p className="text-sm">
                <span className="font-semibold text-yellow-500">Prizes:</span>{' '}
                {tournament.prizes}
              </p>
							<a href="/events" className="text-blue-400 mt-4 inline-block">Learn More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-gray-800 py-12 text-gray-300">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Gaming Image Section */}
    <div className="relative group flex justify-center">
      <img
        src="/imgf.png"
        alt="Gaming Contact"
        className="w-full max-w-sm mx-auto transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:translate-y-2"
      />
      <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 blur-2xl transform scale-75 group-hover:opacity-30 group-hover:scale-100 transition-all duration-500 ease-in-out"></div>
    </div>

    {/* Latest Posts Section */}
    <div>
      <h4 className="text-3xl  extrabold mb-6 ml-20 text-orange-400">Latest Posts</h4>
      {[
        "Tournament Highlights",
        "Top Strategies for Beginners",
        "Spotlight on Rising Teams",
      ].map((post, index) => (
        <div key={index} className="flex mb-6">
          <div
            className="w-24 h-24 bg-cover bg-center rounded-lg shadow-md mr-4"
            style={{ backgroundImage: `url('/img/latest-blog/${index + 1}.jpg')` }}
          ></div>
          <div className="text-l">
            <div className="text-orange-400 mb-1">January 9, 2025</div>
            <p className="text-gray-300 mb-2">
              {post}: Explore insights and tips that every gamer should know.
            </p>
            <a
              href="#"
              className="text-orange-400 hover:underline text-sm font-medium"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Top Reviews Section */}
    <div>
      <h4 className="text-3xl extrabold mb-6 ml-40 text-orange-400">Top Reviews</h4>
      {[
        {
          name: "Aarav Patel",
          comment: "Loved the last weekend's Valorant showdown!",
          date: "January 8, 2025",
        },
        {
          name: "Sneha Kapoor",
          comment: "Team matchmaking helped us win our first trophy!",
          date: "January 5, 2025",
        },
        {
          name: "Rohan Das",
          comment: "Amazing live streams and commentary.",
          date: "January 3, 2025",
        },
      ].map((review, index) => (
        <div key={index} className="flex mb-6">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center shadow-md mr-4"
            style={{ backgroundImage: `url('/img/authors/reviewer-${index + 1}.jpg')` }}
          ></div>
          <div className="text-l">
            <p className="mb-2">
              <span className="text-orange-400 font-semibold">{review.name}</span>
              <span className="text-gray-300"> said: {review.comment}</span>
            </p>
            <div className="text-gray-400 text-xs">{review.date}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</footer>

    </div>
    
			{/* Work Section */}
      <section className="w-full py-20 px-6 text-center bg-gray-900 text-white relative" ref={sectionRef}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('/img/background.jpg')`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <h1 className="text-7xl font-extrabold text-white mb-4 animate-fadeIn">Our Works</h1>
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-7xl font-extrabold">
                {counts[index]}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Us Section */}	
    <section className="contact-us py-16 bg-gray-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
          <div className="text-white">
          <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text 
          bg-gradient-to-r from-orange-400 to-yellow-500 tracking-wide uppercase pixel-font flex animate-fadeInOut">
        Contact Us
      </h1>
            <p className="text-lg text-gray-300 mb-6">
              Have questions, feedback, or just want to chat? Send us a message
              and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-orange-500 outline-none"
                  // rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-600 text-white py-2 px-6  shadow-md transition-all duration-300 transform hover:scale-105"
              >
                
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/2 lg:w-6/12 flex flex-col items-center">
          <div className="relative group">
            {/* Gaming Image */}
            <img
              src="img/about_img.png"
              alt="Gaming Contact"
              className="w-full max-w-sm mx-auto lg:ml-auto transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:translate-y-2"
            />

            {/* Green Glow Effect */}
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 blur-3xl transform scale-75 group-hover:opacity-20 group-hover:scale-100 transition-all duration-500 ease-in-out"></div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 text-2xl transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 text-2xl transition-transform transform hover:scale-110"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </section>
    
				
<div className="relative w-full h-auto flex justify-center items-center">
<img src="/vdo4.gif" alt="animated gif"
    className="w-full h-l object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
    <div className="text-center p-8 rounded-lg max-w-xl">
      <h1 className="text-6xl font-extrabold mb-4 text-orange-600 animate-fadeIn">
        Weekend Knocks
      </h1>
      <p className="text-lg text-white font-extrabold  mb-6 animate-fadeIn delay-300">
			"Ready to take on the competition? Join the battle, form your squad, and rise to the top!"
			"Compete in epic tournaments and claim your victory now!"
      </p>
      <div className="flex justify-center gap-4">
          <a
            href="/events"
            className="bg-blue-600 px-6 py-3 shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Explore Events
          </a>
          <a
            href="/join"
            className="bg-green-600 px-6 py-3  shadow-lg hover:bg-green-700 transition duration-300"
          >
            Join Us Now
          </a>
        </div>
    </div>
  </div>
</div>



			<Footer />
		</>
	);
}
