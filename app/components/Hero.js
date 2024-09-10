import BaseButton from "@/components/base/BaseButton"

const Hero = async () => {
	return (
		<article className="h-[80svh] flex flex-col items-start justify-center">
			<section className="text-center">
				<h1 className="pb-8">
					Webseiten für dein Unternehmen.
					<br />
					Inhalt unter deiner Kontrolle.
				</h1>
				{/* <h2 className="mt-8 mb-2">Müde davon, bei jeder Änderung den Programmierer anzurufen?</h2> */}
				<strong>
					Verwalte deine Inhalte
					<br />
					einfach selbst.
				</strong>
			</section>
			<section className="mx-auto mt-24 px-3 py-1.5 rounded-xl bg-primary text-black">
				<BaseButton iconType="phone" width="2rem" height="2rem" link="0123456789">
					<span className="text-start">Lass uns kennenlernen</span>
				</BaseButton>
			</section>
		</article>
	)
}

export default Hero
