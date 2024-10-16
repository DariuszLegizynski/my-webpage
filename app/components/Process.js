import BaseIcons from "@/components/base/BaseIcons"
import ProcessStep from "./ProcessStep"

const Process = async () => {
	const ProcessCards = [
		{
			step: "1",
			title: "Erstgespräch buchen",
			description: "Wir besprechen Ihre aktuelle Situation und wie die richtigen Mittel sie lösen können.",
		},
		{ step: "2", title: "Ich entwickle Ihre Seite", description: "Ich erstelle die richtige Botschaft, die auf Ihrer Website gut ankommt." },
		{
			step: "3",
			title: "Übergabe der Website",
			description: "Nach abschließender Qualitätskontrolle verbinde ich Ihre Website mit Ihrer individuellen Domain und veröffentliche sie!",
		},
	]
	return (
		<article className="mt-24 max-w-[800px] mx-auto">
			<h2 className="mb-8 text-center">Wie sieht der Ablauf aus?</h2>
			<div className="flex flex-col items-center">
				<BaseIcons type="solution" width="16rem" height="12rem" />
			</div>
			{ProcessCards.map((card, index) => (
				<ProcessStep key={index} step={card.step} title={card.title} img={card.img} description={card.description} />
			))}
		</article>
	)
}

export default Process
