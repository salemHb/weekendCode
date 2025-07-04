import type { Metadata } from "next";
import React, { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Weekend Code Camp",
	description: "Come lets have fun coding this weekend!",
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
