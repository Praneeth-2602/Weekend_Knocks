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
        <div className="flex flex-col justify-center items-center min-h-[80vh] px-4 pt-12">
          <FaGamepad className="text-8xl text-purple-600 animate-bounce mb-6" />
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            GAME OVER
          </h1>
          <h2 className="text-2xl mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Oops! You've Strayed Off The Map!
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-center mb-8">
            This level doesn't exist! Time to head back to the main lobby.
          </p>
          <Link 
            href="/" 
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg 
                     hover:from-purple-700 hover:to-blue-600 transition duration-300 
                     transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaGamepad className="text-xl" />
              RESPAWN AT LOBBY
            </span>
          </Link>
        </div>
        <Footer />
      </>
    );
}