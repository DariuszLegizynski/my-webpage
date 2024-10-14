import Project from "./Project"

const Projects = async () => {
	const projectCards = [
		{ title: "Volksschule Föhrenwald", description: "Neue Website mit verwalterbaren Inhalten", link: "/" },
		{ title: "Beckenraum.at", description: "Physiotherapeutin", link: "/" },
		{ title: "testPage.at", description: "TestingTest", link: "/" },
		{ title: "E-commerce", description: "Premium Online-Shop", link: "/" },
	]
	return (
		<article className="mt-24">
			<h2 className="mb-8 after:content-[':']">Bisherige Projekte</h2>
			<section className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{projectCards.map((projectCard, index) => (
					<Project key={`project-${index}`} title={projectCard.title} description={projectCard.description} link={projectCard.link} />
				))}
			</section>
		</article>
	)
}

export default Projects
