import Image from "next/image"

const ProcessStep = async ({ title, description, time }) => {
	return (
		<article>
			<section>
				<h3>{title}</h3>
				<Image />
				<p>{description}</p>
				<p>{time}</p>
			</section>
		</article>
	)
}

export default ProcessStep
