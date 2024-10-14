const ProcessStep = async ({ step, title, description, time }) => {
	return (
		<section className="pt-8">
			<h3 className="flex py-4">
				<div className="text-primary">{step}</div>
				<div>.&nbsp;</div>
				<div>{title}</div>
			</h3>
			<p>{description}</p>
			<p>{time}</p>
		</section>
	)
}

export default ProcessStep
