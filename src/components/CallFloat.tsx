"use client";

export default function CallFloat() {
	return (
		<a
			href="tel:+254740232415"
			className="fixed bottom-20 right-6 bg-black text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1f1f1f] transition-colors duration-200 z-50 flex items-center gap-2"
		>
			{/* Phone SVG Icon */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 24 24"
				className="w-5 h-5"
			>
				<path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.69.59 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A16 16 0 0 1 2 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.69 1 1 0 0 1-.24 1.01l-2.2 2.2z" />
			</svg>
		</a>
	);
}
