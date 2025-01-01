import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Weekend Knocks",
	description: "Weekend Knocks Web App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			 <head>
        		<link rel="icon" href="/favicon.ico" />
      		</head>
			<body
				className={`${geistSans.className} ${geistMono.className} min-h-screen antialiased dark`}>
				{children}
			</body>
		</html>
	);
}
