'use client';

import Link from "next/link";
import { useState } from "react";

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
			className={`w-full fixed top-0 z-10 transition-all duration-300 ${isHovered ? "py-6" : "py-3"
				} bg-opacity-75 bg-black`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="container mx-auto flex items-center justify-between">
				<ul
					className={`flex space-x-4 ${isHovered ? "space-x-8" : "space-x-2"
						} transition-all duration-300`}
				>
					{navItems.map((item, index) => (
						<li key={index}>
							<Link href={item.link}>
								<span className="relative inline-block text-white font-semibold hover:translate-y-1 transition-all duration-300 cursor-pointer">
									{item.name}
									<span className="absolute inset-0 text-transparent hover:text-white transition-all duration-300 -translate-y-full hover:translate-y-0">
										{item.name}
									</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
				<div className="flex space-x-4">
					<Link href="/login">
						<button className="px-4 py-2 bg-blue-600 hover:bg-opacity-75 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
							Login
						</button>
					</Link>
					<Link href="/signup">
						<button className="px-4 py-2 bg-green-600 hover:bg-opacity-75 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300">
							Signup
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
