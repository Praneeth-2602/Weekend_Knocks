'use client';

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Navbar() {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	const navItems = [
		{ name: "Home", link: "#" },
		{ name: "About Us", link: "#" },
		{ name: "Services", link: "#" },
		{ name: "Our Work", link: "#" },
		{ name: "Contact", link: "#" },
		{ name: "Events", link: "#" },
		{ name: "Search", link: "#" },
	];

	return (
		<nav
			className={`w-full fixed top-0 z-10 transition-all duration-300 bg-background bg-opacity-90`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="container mx-auto flex items-center justify-between px-8 py-6">
				{/* Logo Section (Left) */}
				<div className="flex items-center space-x-2">
					<img src="path/to/trident-logo.png" alt="" className="h-10 w-auto" />
					<div>
						<h1 className="text-lg font-bold tracking-wide text-primary-foreground">Weekend Knocks</h1>
						<p className="text-xs font-medium tracking-wider text-muted-foreground">GAMING & ENTERTAINMENT</p>
					</div>
				</div>

				{/* Navigation Links (Center) */}
				<ul className="flex space-x-6 text-sm font-semibold text-primary-foreground">
					{navItems.map((item, index) => (
						<li key={index}>
							<Link href={item.link}>
								<motion.span
									initial={{ y: -10 }} // Start from above
									whileHover={{ y: 5 }} // Move down on hover
									transition={{ type: "spring", stiffness: 300 }}
									className="hover:text-primary transition-all duration-300 cursor-pointer"
								>
									{item.name}
								</motion.span>
							</Link>
						</li>
					))}
				</ul>

				{/* Buttons (Right) with Glow Effect */}
				<div className="flex space-x-4">
					<Link href="/login">
						<button className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]">
							Login
						</button>
					</Link>
					<Link href="/signup">
						<button className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]">
							Signup
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
