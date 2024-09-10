const Testimonial = async ({ description, author }) => {
	return (
		<article>
			<p>{description}</p>
			<p>{author}</p>
		</article>
	)
}

export default Testimonial
