"use client";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="bg-[#2596BE] text-black py-16 lg:py-24 text-center">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/10 rounded-lg shadow-lg text-left"
			>
				<div className="space-y-6">
					{/* Logo SVG - larger, white, and left-aligned */}
					<div className="mb-4">
						<svg
							width="260"
							height="70"
							viewBox="0 0 300 60"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<text
								x="0"
								y="40"
								fontFamily="Segoe UI, sans-serif"
								fontSize="36"
								fontWeight="600"
								fill="#FFFFFF"
							>
								code
							</text>
							<text
								x="100"
								y="40"
								fontFamily="Segoe UI, sans-serif"
								fontSize="36"
								fontWeight="700"
								fill="#FFFFFF"
							>
								X
							</text>
							<text
								x="135"
								y="40"
								fontFamily="Segoe UI, sans-serif"
								fontSize="36"
								fontWeight="500"
								fill="#FFFFFF"
							>
								Tech
							</text>
							<line
								x1="102"
								y1="15"
								x2="118"
								y2="35"
								stroke="#FFFFFF"
								strokeWidth="2"
							/>
							<line
								x1="118"
								y1="15"
								x2="102"
								y2="35"
								stroke="#FFFFFF"
								strokeWidth="2"
							/>
						</svg>
					</div>

					{/* Main Heading */}
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						Weekend Coding Lessons
					</h1>

					<p className="text-lg sm:text-xl text-gray-100">
						Online Only! For Grades 3–9 · KES 2000/hr
					</p>

					{/* Buttons with spacing */}
					<div className="space-y-3">
						<a
							href="https://calendly.com/husseinsalim/60-minute-coding-lesson"
							className="inline-block bg-white text-black font-semibold px-6 py-3 shadow-md hover:bg-indigo-50 hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
						>
							Book a Lesson
						</a>

						<a
							href="tel:+254740232415"
							className="inline-block bg-black text-white font-semibold px-6 py-3 shadow-md hover:bg-gray-800 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
						>
							Call Now
						</a>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
