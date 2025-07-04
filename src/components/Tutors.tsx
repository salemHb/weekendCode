"use client";
import { motion } from "framer-motion";

export default function Tutors() {
	const tutors = [
		{
			name: "Hussein Salim",
			degree: "BSc Computer Science",
			image: "/tutors/hussein.jpeg", //
			github: "https://github.com/salemHb",
			portfolio: "https://babu-lake.vercel.app/",
		},
		{
			name: "Hamza Salim",
			degree: "BSc Information Technology",
			image: "/tutors/hamza.png", //
			github: "https://github.com/hummzer",
			portfolio: "https://github.com/hummzer",
		},
	];

	return (
		<section
			className="bg-gradient-to-b from-white to-gray-100 py-16 sm:py-20 lg:py-24 text-center"
			aria-labelledby="tutors-heading"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					id="tutors-heading"
					className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-10 sm:mb-12 lg:mb-16"
				>
					Meet Your Tutors
				</h2>

				<div className="flex flex-col md:flex-row flex-wrap gap-6 sm:gap-8 justify-center">
					{tutors.map((tutor) => (
						<motion.div
							key={tutor.name}
							className="bg-white border border-gray-200 rounded-xl p-6 w-full sm:w-80 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
							whileHover={{ scale: 1.05 }}
							aria-label={`${tutor.name} tutor profile`}
						>
							<img
								src={tutor.image}
								alt={`${tutor.name} profile`}
								className="w-32 h-32 mx-auto rounded-lg object-cover mb-4 border-2 border-black-600"
							/>
							<h3 className="text-lg sm:text-xl font-semibold text-black-700 mb-1">
								{tutor.name}
							</h3>
							<p className="text-sm sm:text-base text-gray-800 mb-4">
								{tutor.degree}
							</p>

							{/* GitHub & Portfolio links */}
							<div className="flex flex-col gap-2 mt-4 text-sm">
								{tutor.github && (
									<a
										href={tutor.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline hover:text-blue-800 transition"
									>
										GitHub ↗
									</a>
								)}
								{tutor.portfolio && (
									<a
										href={tutor.portfolio}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline hover:text-blue-800 transition"
									>
										Portfolio ↗
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
