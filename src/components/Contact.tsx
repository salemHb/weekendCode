"use client";
import { motion } from "framer-motion";

export default function Contact() {
	const tutors = [
		{
			name: "Hussein Salim",
			email: "husseinsalim419@gmail.com",
			phone: "+254740232415",
			portfolio: {
				github: "https://github.com/husseinsalim",
				linkedin: "https://linkedin.com/in/husseinsalim",
			},
		},
		{
			name: "Hamza Salim",
			email: "hamzasalim@example.com",
			phone: "+254712345678",
			portfolio: {
				github: "https://github.com/hamzasalim",
				linkedin: "https://linkedin.com/in/hamzasalim",
			},
		},
	];

	return (
		<section
			className="bg-gradient-to-b from-purple-50 to-indigo-100 py-16 sm:py-20 lg:py-24 text-center"
			aria-labelledby="contact-heading"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					id="contact-heading"
					className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-10 sm:mb-12 lg:mb-16"
				>
					Contact Us
				</h2>
				<motion.div
					className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 w-full sm:w-96 mx-auto shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					aria-label="Main contact information"
				>
					<h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-4">
						Get in Touch
					</h3>
					<p className="text-lg sm:text-xl text-gray-700 mb-2">
						Email:{" "}
						<a
							href="mailto:husseinsalim419@gmail.com"
							className="text-primary-600 hover:underline"
							aria-label="Email Hussein Salim"
						>
							husseinsalim419@gmail.com
						</a>
					</p>
					<p className="text-lg sm:text-xl text-gray-700">
						Phone:{" "}
						<a
							href="tel:+254740232415"
							className="text-primary-600 hover:underline"
							aria-label="Call Hussein Salim"
						>
							0740 232 415
						</a>
					</p>
				</motion.div>
				<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12 mb-6">
					Meet Your Tutors
				</h3>
				<div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
					{tutors.map((tutor) => (
						<motion.div
							key={tutor.name}
							className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-full sm:w-80 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							aria-label={`${tutor.name} contact information`}
						>
							<h4 className="text-lg sm:text-xl font-semibold text-primary-600 mb-4">
								{tutor.name}
							</h4>
							<p className="text-sm sm:text-base text-gray-700 mb-2">
								Email:{" "}
								<a
									href={`mailto:${tutor.email}`}
									className="text-primary-600 hover:underline"
									aria-label={`Email ${tutor.name}`}
								>
									{tutor.email}
								</a>
							</p>
							<p className="text-sm sm:text-base text-gray-700 mb-4">
								Phone:{" "}
								<a
									href={`tel:${tutor.phone}`}
									className="text-primary-600 hover:underline"
									aria-label={`Call ${tutor.name}`}
								>
									{tutor.phone}
								</a>
							</p>
							<div className="flex justify-center gap-4">
								<a
									href={tutor.portfolio.github}
									className="text-primary-600 hover:underline text-sm sm:text-base"
									aria-label={`${tutor.name}'s GitHub profile`}
								>
									GitHub
								</a>
								<a
									href={tutor.portfolio.linkedin}
									className="text-primary-600 hover:underline text-sm sm:text-base"
									aria-label={`${tutor.name}'s LinkedIn profile`}
								>
									LinkedIn
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
