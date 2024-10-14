import BaseIcons from "@/components/base/BaseIcons"

const Problem = async () => {
	return (
		<article className="mt-12">
			<h1>Sie haben eine Seite, auf der Sie nichts ändern können.</h1>
			<ul className="grid gap-4 my-8">
				<li className="flex gap-x-2 items-center">
					<BaseIcons width="2.8rem" height="2.8rem" type="problem" strokeColor="#008080" />
					Sie rufen den Programmierer bei jeder Änderung an.
				</li>
				<li className="flex gap-x-2 items-center">
					<BaseIcons width="2.8rem" height="2.8rem" type="problem" strokeColor="#008080" />
					Sie warten lange auf die Umsetzung einer Änderung.
				</li>
				<li className="flex gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Jede Änderung ist gebührenpflichtig.
				</li>
				<li className="flex gap-x-2 items-center">
					<BaseIcons width="2rem" height="2rem" type="problem" strokeColor="#008080" />
					Sie verschwenden Zeit und Energie.
				</li>
			</ul>
		</article>
	)
}

export default Problem
