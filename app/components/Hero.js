import BaseButton from "@/components/base/BaseButton"
import BaseIcons from "@/components/base/BaseIcons"

const Hero = async () => {
	return (
		<article id="hero" className="h-[80svh] flex flex-col items-center justify-center">
			<BaseIcons type="revenue" width="12rem" height="8rem" />
			<section className="text-center mt-8">
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
				<BaseButton buttonType="reverse" iconType="phone" width="2rem" height="2rem" strokeWidth="3" strokeColor="#008080" link="0123456789">
					<span className="text-start">Lass uns kennenlernen</span>
				</BaseButton>
				<BaseButton
					iconType="meeting"
					link="https://cal.com/dariusz-legizynski-mqizpf"
					width="2rem"
					height="2rem"
					strokeWidth="1"
					fillColor="#FFF"
					strokeColor="#FFF"
				>
					<span className="text-start text-white">Gespräch vereinbaren</span>
				</BaseButton>
			</section>
		</article>
	)
}

export default Hero
