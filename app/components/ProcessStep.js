import Image from "next/image"

const ProcessStep = async ({ title, img, description, time }) => {
	return (
		<section className="pt-8">
			<Image src={img} alt="a nice process picture" width={640} height={480} />
			<h3 className="py-4">{title}</h3>
			<p>{description}</p>
			<p>{time}</p>
		</section>
	)
}

export default ProcessStep
