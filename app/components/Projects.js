import Project from "./Project"

const Projects = async () => {
	const projectCards = [
		{
			title: "Volksschule Föhrenwald",
			description: "Website mit verwalterbaren Inhalten",
			link: "https://www.vs-foehrenwald.at/",
			imagePath: "/images/vs-foehrenwald.png",
		},
		{ title: "Beckenraum.at", description: "Physiotherapeutin", link: "https://raumbeck.netlify.app/", imagePath: "/images/beckenraum.png" },
		{
			title: "LegionMariens.at",
			description: "E-Commerce mit login und geolocation",
			link: "https://legion-mariens-test.at/",
			imagePath: "/images/legion-mariens.png",
		},
		{ title: "E-commerce", description: "Premium Online-Shop", link: "https://myamazingshop-ae51c.web.app/", imagePath: "/images/ecommerce.png" },
	]
	return (
		<article className="mt-24">
			<h2 className="mb-8 after:content-[':']">Einige der bisherigen Projekte</h2>
			<section className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{projectCards.map((projectCard, index) => (
					<Project
						key={`project-${index}`}
						title={projectCard.title}
						description={projectCard.description}
						link={projectCard.link}
						imagePath={projectCard.imagePath}
					/>
				))}
			</section>
		</article>
	)
}

export default Projects
