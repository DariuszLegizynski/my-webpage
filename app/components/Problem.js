import BaseIcons from "@/components/base/BaseIcons"

const Problem = async () => {
	return (
		<article className="mt-24">
			<h1 className="pt-12 lg:text-center">Sie haben eine Seite, auf der Sie nichts ändern können?</h1>
			<ul className="grid gap-4 my-8 justify-center">
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Sie rufen den Programmierer bei jeder Änderung an.
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Sie warten lange auf die Umsetzung einer Änderung.
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Jede Änderung ist gebührenpflichtig.
				</li>
				<li className="grid grid-cols-[auto_1fr] gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Sie verschwenden Zeit und Energie.
				</li>
			</ul>
		</article>
	)
}

export default Problem
