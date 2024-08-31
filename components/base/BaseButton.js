import Link from "next/link"
import BaseIcons from "@/components/base/BaseIcons"

const BaseButton = async ({ text, link, iconType }) => {
	return (
		<a className="flex items-center gap-x-1" href={`tel:${link}`}>
			<BaseIcons type={iconType} width="1.2rem" height="1.2rem" fillColor="none" strokeColor="black" />
			{text}
		</a>
	)
}

export default BaseButton
