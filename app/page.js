import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Process from "./components/Process"
import Problem from "./components/Problem"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Benefits from "./components/Benefits"
import Testimonials from "./components/Testimonials"

const Home = async () => {
	return (
		<>
			<Hero />
			<Problem />
			<Services />
			<Benefits />
			<Process />
			<Projects />
			<Testimonials />
			<Contact />
		</>
	)
}

export default Home

