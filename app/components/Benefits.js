import Benefit from "./Benefit"

const Benefits = async () => {
	return (
		<article className="my-12">
			<Benefit
				iconType="webdevelopment"
				title="Webdesign & Webdevelopment"
				text="Ich habe mich darauf spezialisiert, maßgeschneiderte Websites zu erstellen, die nicht nur atemberaubend aussehen, sondern auch nahtlos funktionieren."
			/>
			<Benefit
				iconType="content"
				title="Inhalte für Ihre Webseite"
				text="Ich erstelle individuelle Inhalte für Webseiten, die Ihre Zielgruppe ansprechen und Ihr Unternehmen präsentieren."
			/>
			<Benefit
				iconType="control"
				title="Volle Kontrolle über Ihre Inhalte"
				text="Sie können die Inhalte Ihrer Webseite jederzeit selbst aktualisieren, ohne technische Vorkenntnisse zu benötigen."
			/>
		</article>
	)
}

export default Benefits
