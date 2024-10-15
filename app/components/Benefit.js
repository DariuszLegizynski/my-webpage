import BaseIcons from "@/components/base/BaseIcons"

const Benefit = async ({ iconType, title, text }) => {
	return (
		<section className="pt-16 pb-4 flex flex-col items-center lg:grid lg:grid-rows-[200px_auto_auto]">
			<BaseIcons type={iconType} width="16rem" />
			<h2 className="py-12 pb-4">{title}</h2>
			<p>{text}</p>
		</section>
	)
}

export default Benefit
