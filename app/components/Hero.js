import BaseButton from "@/components/base/BaseButton"
import BaseIcons from "@/components/base/BaseIcons"

const Hero = async () => {
	return (
		<article
			id="hero"
			className="h-[80svh] flex flex-col items-center justify-center pt-24 md:pt-0 md:grid md:grid-cols-2 md:gap-x-8 lg:max-w-[1024px] lg:mx-auto"
		>
			<section className="md:order-2">
				<BaseIcons type="revenue" className="md:w-12 md:h-8 lg:w-14 lg:h-10 xl:w-16 xl:h-12" />
			</section>
			<section className="md:order-1">
				<div className="text-center mt-8">
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
				</div>
				<div className="mx-auto mt-12 grid gap-4">
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
				</div>
			</section>
		</article>
	)
}

export default Hero
