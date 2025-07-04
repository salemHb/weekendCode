export default function Curriculum() {
	const items = [
		["Coding Fundamentals", "Logic, sequencing, syntax, algorithms."],
		["Web Development", "Build websites with HTML, CSS, JavaScript."],
		["Game & Animation Design", "Use Scratch to make interactive stories."],
		["Robotics & AI Concepts", "Intro to automation, voice & vision AI."],
		["Digital Problem Solving", "Solve real-world problems with tech."],
		["Typing and Keyboarding", "Learn 10x typing."],
	];

	return (
		<section
			className="bg-gradient-to-b from-white to-gray-100 py-16 sm:py-20 lg:py-24"
			aria-labelledby="curriculum-heading"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					id="curriculum-heading"
					className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight text-center mb-10 sm:mb-12 lg:mb-16"
				>
					What We Teach
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{items.map(([title, desc]) => (
						<div
							key={title}
							className="relative bg-white border border-gray-200 rounded-xl p-6 text-black shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
							aria-label={`${title} curriculum item`}
						>
							<h3 className="text-lg sm:text-xl font-semibold text-black-700 mb-2">
								{title}
							</h3>
							<p className="text-sm sm:text-base text-gray-800">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
