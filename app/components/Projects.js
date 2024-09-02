import Project from "./Project"

const Projects = async () => {
	const projectCards = [
		{ title: "Volksschule Föhrenwald", description: "Neue Website mit verwalterbaren Inhalten", link: "/" },
		{ title: "Beckenraum.at", description: "Physiotherapeutin", link: "/" },
		{ title: "E-commerce", description: "Premium Online-Shop", link: "/" },
	]
	return (
		<article>
			<h2 className="my-4 after:content-[':']">Projekte</h2>
			<section className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{projectCards.map((project, index) => (
					<Project key={`project-${index}`} title={project.title} description={project.description} link={project.link} />
				))}
			</section>
		</article>
	)
}

export default Projects
