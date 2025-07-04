"use client";
import { motion } from "framer-motion";

export default function CalendarEmbed() {
	return (
		<section
			className="bg-gradient-to-b from-gray-50 to-indigo-100 py-16 sm:py-20 lg:py-24 text-center"
			aria-labelledby="calendar-heading"
		>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					id="calendar-heading"
					className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6 sm:mb-8"
				>
					Book a Lesson
				</h2>
				<p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
					Schedule your coding lesson with our expert tutors!
				</p>
				<motion.div
					className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:scale-[1.01] transition-transform duration-300 ease-in-out"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<iframe
						src="https://calendly.com/husseinsalim/60-minute-coding-lesson"
						width="100%"
						height="600"
						className="rounded-xl border-none"
						loading="lazy"
						title="Calendly booking for coding lessons"
					/>
					<div className="hidden aria-hidden:block text-gray-600 text-sm mt-4">
						Unable to load calendar. Please{" "}
						<a
							href="https://calendly.com/husseinsalim/60min"
							className="text-primary-600 hover:underline"
							aria-label="Book a lesson directly on Calendly"
						>
							book directly on Calendly
						</a>
						.
					</div>
				</motion.div>
			</div>
		</section>
	);
}
