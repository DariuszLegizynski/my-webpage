import Link from "next/link"
import BaseIcons from "@/components/base/BaseIcons"

const BaseButton = async ({ link, iconType, width, heigth, strokeWidth, children }) => {
	return (
		<a className="flex items-center gap-x-3" href={`tel:${link}`}>
			<BaseIcons type={iconType} width={width} height={heigth} strokeWidth={strokeWidth} fillColor="none" strokeColor="black" />
			{children}
		</a>
	)
}

export default BaseButton
