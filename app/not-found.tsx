"use client"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGamepad } from 'react-icons/fa';
export default function NotFound() {
    return (
      <>
        <div className="h-16">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center min-h-[80vh] px-4 pt-12 relative">
          <div className="absolute inset-0 pointer-events-none bg-repeat opacity-5" 
               style={{backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,.2) 50%, transparent 50%)', backgroundSize: '4px 4px'}} />
          
          <FaGamepad className="text-8xl text-orange-500 animate-bounce mb-6 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 
                         animate-pulse font-[Press_Start_2P] tracking-wider">
            GAME OVER
          </h1>
          
          <h2 className="text-2xl mb-6 bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text 
                         animate-pulse font-mono">
            Oops! You've Strayed Off The Map!
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 text-center mb-8 font-mono">
            This level doesn't exist! Time to head back to the main lobby.
          </p>
          
          <Link 
            href="/" 
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-none 
                     hover:from-orange-600 hover:to-orange-800 transition duration-300 
                     transform hover:scale-105 active:scale-95 shadow-lg
                     border-2 border-orange-500 hover:border-orange-600
                     font-[Press_Start_2P] text-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaGamepad className="text-xl animate-pulse" />
              RESPAWN AT LOBBY
            </span>
          </Link>
        </div>
        <Footer />
      </>
    );
}