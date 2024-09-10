const Testimonial = async ({ description, author }) => {
	return (
		<section className="pt-8 grid grid-cols-1">
			<p>{description}</p>
			<p className="pt-4 text-center">{author}</p>
		</section>
	)
}

export default Testimonial
