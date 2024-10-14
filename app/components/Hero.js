import BaseButton from "@/components/base/BaseButton"

const Hero = async () => {
	return (
		<article className="h-[80svh] flex flex-col items-center justify-center">
			<section className="text-center">
				<h1 className="pb-8">
					Deine Webseite für dein Unternehmen.
					<br />
					Inhalt unter deiner Kontrolle.
				</h1>
				<strong>
					Verwalte deine Seite
					<br />
					einfach selbst.
				</strong>
			</section>
			<section className="mx-auto mt-24 grid gap-4">
				<BaseButton buttonType="reverse" iconType="phone" width="2rem" height="2rem" strokeWidth="3" strokeColor="#4CAF50" link="0123456789">
					<span className="text-start">Lass uns kennenlernen</span>
				</BaseButton>
				<BaseButton iconType="meeting" width="2rem" height="2rem" strokeWidth="1" fillColor="#FFF" strokeColor="#FFF">
					<span className="text-start text-white">Gespräch buchen</span>
				</BaseButton>
			</section>
		</article>
	)
}

export default Hero
