import BaseIcons from "@/components/base/BaseIcons"
import Image from "next/image"

const Testimonial = async ({ imagePath, title, description, author, rating }) => {
	return (
		<section className="pt-8 grid grid-cols-1">
			<div className="lg:grid lg:grid-rows-[128px_168px_auto] gap-y-4">
				<h3 className="break-words">{title}</h3>
				<p className="break-words pt-4">{description}</p>
			</div>
			<section className="grid grid-cols-[auto_1fr] gap-4 items-center mx-auto my-8 lg:mx-0">
				<Image className={`${author === "Lemon42 GmbH" ? "p-2 bg-primary" : null}`} src={`${imagePath}`} alt="Avator von einem Kunden" width={64} height={64} />
				<div className="grid grid-rows-2">
					<p className="pt-4 text-start">{author}</p>
					<div className="flex">
						{Array.from({ length: rating }).map((_, index) => (
							<BaseIcons key={index} type="star" width="2rem" height="2rem" />
						))}
					</div>
				</div>
			</section>
		</section>
	)
}

export default Testimonial
