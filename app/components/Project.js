import Link from "next/link"

const Project = async ({ title, description, link }) => {
	return (
		<Link
			href={link}
			className="h-[500px] bg-[0%_0%] bg-cover p-5 rounded-3xl"
			style={{ backgroundImage: `url('/images/olena-bohovyk-dIMJWLx1YbE-unsplash.jpg')` }}
		>
			<div className="text-white">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</Link>
	)
}

export default Project
