import Hero from "@/components/Hero";
import Curriculum from "@/components/Curriculum";
import Tutors from "@/components/Tutors";
import Pricing from "@/components/Pricing";
import CalendarEmbed from "@/components/CalendarEmbed";

import Footer from "@/components/Footer";
import ChatFloat from "@/components/ChatFloat";
import CallFloat from "@/components/CallFloat";

export default function WeekendCoding() {
	return (
		<main className="bg-white text-gray-900">
			<Hero />
			<Curriculum />
			<Tutors />
			<Pricing />
			<CalendarEmbed />

			<Footer />
			<ChatFloat />
			<CallFloat />
		</main>
	);
}
