import BaseIcons from "@/components/base/BaseIcons"

const Problem = async () => {
	return (
		<article className="mt-24">
			<h1 className="pt-12 lg:text-center">Sie brauchen eine Seite, auf der Sie Inhalte ändern wollen?</h1>
			<ul className="grid gap-4 my-8 justify-center">
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Es ist nicht notwendig, den Programmierer bei jeder Änderung anzurufen.
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Umsetzung der Inhalte in Sekundenschnelle.
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Keine gebührenpflichtigen Änderungen.
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Keine Zeit- und Energieverschwendung.
				</li>
			</ul>
		</article>
	)
}

export default Problem
