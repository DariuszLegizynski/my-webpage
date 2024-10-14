import BaseIcons from "@/components/base/BaseIcons"

const BaseButton = async ({ link, iconType, buttonType, width, heigth, strokeWidth, fillColor, strokeColor, children }) => {
	return (
		<a
			className={`flex items-center justify-center gap-x-3 bg-primary text-black px-3 py-2.5 rounded-xl ${
				buttonType === "reverse" ? "bg-white text-primary border-primary border-2" : null
			}`}
			href={`tel:${link}`}
		>
			<BaseIcons type={iconType} width={width} height={heigth} strokeWidth={strokeWidth} fillColor={fillColor} strokeColor={strokeColor} />
			{children}
		</a>
	)
}

export default BaseButton
