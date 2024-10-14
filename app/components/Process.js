import ProcessStep from "./ProcessStep"

const Process = async () => {
	const ProcessCards = [
		{
			title: "Buchen Sie ein Erstgespräch",
			description: "Wir besprechen Ihre aktuelle Situation und wie die richtigen Mittel sie lösen können.",
		},
		{ title: "Ich entwickle Ihre Mitteilung", description: "Ich erstelle die richtige Botschaft, die auf Ihrer Website gut ankommt." },
		{
			title: "Übergabe der Website",
			description: "Nach abschließender Qualitätskontrolle verbinde ich Ihre Website mit Ihrer individuellen Domain und veröffentliche sie!",
		},
	]
	return (
		<article className="mt-12">
			{ProcessCards.map((card, index) => (
				<ProcessStep key={index} title={card.title} img={card.img} description={card.description} />
			))}
		</article>
	)
}

export default Process
