'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export default function Navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navItems = [
		{ name: "Home", link: "/" },
		{ name: "About Us", link: "/about" },
		{ name: "Services", link: "/services" },
		{ name: "Our Work", link: "/ourwork" },
		{ name: "Contact", link: "/contact" },
		{ name: "Events", link: "/events" },
		{ name: "Search", link: "#" },
	];

	return (
		<nav
			className={`w-full fixed top-0 z-50 transition-all duration-300 border-red-50 ${
				isScrolled ? "bg-[#1c1c1c] bg-opacity-80 backdrop-blur-lg border-b border-white border-opacity-10 shadow-md" : "bg-background"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between px-6 md:px-10 py-4 md:py-6">
				{/* Logo Section */}
				<div className="flex items-center space-x-3">
					<a href="https://weekend-knocks.netlify.app/" target="_blank" rel="noopener noreferrer">
						<img src={logo.src} alt="Logo" className="h-14 md:h-16 w-auto" />
					</a>
					<div>
						<a href="https://weekend-knocks.netlify.app/" target="_blank" rel="noopener noreferrer">
							<h1 className="text-lg md:text-xl font-bold text-primary-foreground">
								Weekend Knocks
							</h1>
							<p className="text-xs md:text-sm font-medium text-muted-foreground">
								GAMING & ENTERTAINMENT
							</p>
						</a>
					</div>
				</div>

				{/* Navigation Links */}
				<ul className="hidden md:flex space-x-6 text-sm md:text-base font-semibold text-primary-foreground">
					{navItems.map((item, index) => (
						<li key={index}>
							<Link href={item.link}>
								<motion.span
									initial={{ y: 0 }}
									whileHover={{ y: -3 }}
									transition={{ type: "spring", stiffness: 300 }}
									className="hover:text-primary hover:underline underline-offset-4 decoration-primary transition duration-300 cursor-pointer"
								>
									{item.name}
								</motion.span>
							</Link>
						</li>
					))}
				</ul>

				{/* Buttons Section */}
				<div className="flex space-x-4">
					{isLoggedIn ? (
						<>
							<Link href="/account">
								<button className="px-4 py-2 text-sm md:text-base border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-shadow duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]">
									My Account
								</button>
							</Link>
							<Link href="/logout">
								<button className="px-4 py-2 text-sm md:text-base border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-shadow duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]">
									Logout
								</button>
							</Link>
						</>
					) : (
						<>
							<Link href="/login">
								<button className="px-4 py-2 text-sm md:text-base border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-shadow duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]">
									Login
								</button>
							</Link>
							<Link href="/signup">
								<button className="px-4 py-2 text-sm md:text-base border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-shadow duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]">
									Signup
								</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
