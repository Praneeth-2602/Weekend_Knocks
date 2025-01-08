import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Game Development",
      description: "Custom game development services for multiple platforms including mobile, PC, and consoles. We specialize in both 2D and 3D game development.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9H6M7 8V10M18 9H15M12 12V15M12 18H12.01M12 21H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FF4F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Game Design",
      description: "Comprehensive game design services including mechanics, levels, UI/UX, and player experience optimization.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 7L7 17M17 17L7 7" stroke="#FF4F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Asset Creation",
      description: "High-quality game asset creation including 3D models, animations, textures, and special effects.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10L19.553 7.724C19.7054 7.64784 19.8748 7.61188 20.0466 7.61955C20.2184 7.62722 20.3834 7.67824 20.5275 7.76763C20.6716 7.85702 20.7902 7.98198 20.8726 8.13161C20.955 8.28124 20.9987 8.45061 21 8.623V15.377C20.9987 15.5494 20.955 15.7188 20.8726 15.8684C20.7902 16.018 20.6716 16.143 20.5275 16.2324C20.3834 16.3218 20.2184 16.3728 20.0466 16.3805C19.8748 16.3881 19.7054 16.3522 19.553 16.276L15 14M7 8H5C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H7L13 19V5L7 8Z" stroke="#FF4F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Sound Design",
      description: "Professional sound design and music composition for immersive gaming experiences.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18M3 18H21M3 18H2M21 18H22M12 22C10.8954 22 10 21.1046 10 20V16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V20C14 21.1046 13.1046 22 12 22Z" stroke="#FF4F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Multiplayer Integration",
      description: "Implementation of robust multiplayer functionality and networking solutions for online gaming.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="#FF4F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Live Operations",
      description: "Ongoing support and maintenance for live games including updates, events, and community management.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H5.24C5.37161 13 5.49822 13.0527 5.58926 13.1437L7.41074 14.8563C7.50178 14.9473 7.62839 15 7.76 15H12.24C12.3716 15 12.4982 14.9473 12.5893 14.8563L14.4107 13.1437C14.5018 13.0527 14.6284 13 14.76 13H17M9 17L11 15M9 9L7 7M15 9L17 7M15 17L13 15" stroke="#FF4F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#0A0F1C] text-white pt-40"> {/* Added pt-20 for top padding */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive gaming and entertainment solutions to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#0B1221] border-[#1E293B] hover:border-orange-500 transition-colors">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-mono">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}