import Testimonial from "./Testimonial"

const Testimonials = async () => {
	const testimonialsItems = [
		{
			imagePath: "/images/avatar_female.png",
			title: "2-3 word pull-quote!",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam nec purus gravida interdum. Donec sit amet odio vel nunc ultricies malesuada.",
			author: "John Doe",
			rating: 5,
		},
		{
			imagePath: "/images/companies/anexia.svg",
			title: "Auftretende Probleme konnte er stets einer zufriedenstellenden Lösung zuführen",
			description:
				"Dariusz Legizynski verfügt über eine rasche Auffassungsgabe und über logisches Denkvermögen. Beides führte dazu, dass er auftretende Probleme stets einer zufriedenstellende Lösung zuführen konnte.",
			author: "ANX Holding GmbH",
			rating: 5,
		},
		{
			imagePath: "/images/companies/logo-l42.svg",
			title: "Mehrere Kundenprojekte umgesetzt und abgeschlossen",
			description:
				"Dariusz Legizynski konnte seine Kenntnisse und Problemlösungfähigkeiten unter Beweis stellen. Durch sein großes Engagement konnten mehrere Kundenprojekte umgesetzt und abgeschlossen werden.",
			author: "Lemon42 GmbH",
			rating: 5,
		},
	]
	return (
		<article className="mt-36  lg:max-w-[1024px] lg:mx-auto">
			<h2 className="text-center mb-12">Kundenmeinungen</h2>
			<section className="lg:grid lg:grid-cols-3 lg:gap-x-4">
				{testimonialsItems.map((testimonialItem, index) => (
					<Testimonial
						key={`testimonial-${index}`}
						title={testimonialItem.title}
						description={testimonialItem.description}
						author={testimonialItem.author}
						imagePath={testimonialItem.imagePath}
						rating={testimonialItem.rating}
					/>
				))}
			</section>
		</article>
	)
}

export default Testimonials
