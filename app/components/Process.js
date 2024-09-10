import ProcessStep from "./ProcessStep"

const Process = async () => {
	const ProcessCards = [
		{
			title: "Planung + Wireframe",
			img: "",
			description: "Ich skizziere alle Seiten und Abschnitte der Website, um eine klare Vorstellung davon zu bekommen, wie die Website aussehen wird.",
		},
		{ title: "Markenbildung + Inhalt", img: "", description: "Ich passe Ihre Website mit Ihrem Branding und Ihren Unternehmensinformationen an." },
		{ title: "Feedback + Überarbeitungen", img: "", description: "Wir sind von Anfang an im Kontakt und führen alle Anpassungen gemeinsam durch." },
		{
			title: "Starten + Schulung",
			img: "",
			description: "Nach abschließender Qualitätskontrolle verbinde ich Ihre Website mit Ihrer individuellen Domain und veröffentlichen sie!",
		},
	]
	return (
		<article>
			<section>
				<h2>Das bewährte aufbau System</h2>
				<h3>Ich habe genügend Websiten erstellt</h3>
				<h3>um zu wissen, wie es richtig funktioniert.</h3>
				<p>Wozu für jede kleine änderung bezahlen</p>
				<p>Wenn man es auch selber machen kann?</p>
			</section>
			{ProcessCards.map((card, index) => (
				<ProcessStep key={index} title={card.title} img={card.img} description={card.description} />
			))}
		</article>
	)
}

export default Process
