import Testimonial from "./Testimonial"

const Testimonials = async () => {
	const testimonialsItems = [
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam nec purus gravida interdum. Donec sit amet odio vel nunc ultricies malesuada.",
			author: "John Doe",
		},
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam nec purus gravida interdum. Donec sit amet odio vel nunc ultricies malesuada.",
			author: "John Doe",
		},
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam nec purus gravida interdum. Donec sit amet odio vel nunc ultricies malesuada.",
			author: "John Doe",
		},
	]
	return (
		<article>
			<h1>Einige Meinungen</h1>
			{testimonialsItems.map((testimonialItem, index) => (
				<Testimonial key={`testimonial-${index}`} description={testimonialItem.description} author={testimonialItem.author} />
			))}
		</article>
	)
}

export default Testimonials
