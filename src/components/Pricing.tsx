"use client";
import { motion } from "framer-motion";

export default function Pricing() {
	return (
		<section
			className="bg-gradient-to-b from-white via-indigo-50 to-gray-100 py-16 sm:py-20 lg:py-24 text-center"
			aria-labelledby="pricing-heading"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					id="pricing-heading"
					className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-10 sm:mb-12 lg:mb-16"
				>
					codeX Tech
				</h2>

				<div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
					<motion.div
						className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 w-full sm:w-96 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						aria-label="Pricing details"
					>
						<h3 className="text-xl sm:text-2xl font-semibold text-black-700 mb-2">
							Every Saturday & Sunday
						</h3>
						<p className="text-lg sm:text-xl text-gray-800 mb-2">9AM – 6PM</p>
						<p className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6">
							KES 2000 / Hour
						</p>
						<a
							href="https://calendly.com/husseinsalim/60-minute-coding-lesson"
							className="inline-block bg-blue-600 text-white font-semibold py-3 px-6  hover:bg-gray-800 transition-colors duration-300"
							aria-label="Book a coding class"
						>
							Book Now
						</a>
						<a
							href="tel:+254740232415"
							className="inline-block bg-black text-white font-semibold px-6 py-3 shadow-md hover:bg-blue-800 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
						>
							Call Now
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
