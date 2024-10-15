import Link from "next/link"

const Project = async ({ title, description, link, imagePath }) => {
	return (
		<Link href={link} className="relative h-[500px] bg-[50%_0%] bg-cover p-5 rounded-3xl" style={{ backgroundImage: `url('${imagePath}')` }}>
			<div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
			<div className="absolute top-10 text-white z-10">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</Link>
	)
}

export default Project
