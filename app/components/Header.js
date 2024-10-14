import BaseButton from "@/components/base/BaseButton"
import BaseIcons from "@/components/base/BaseIcons"
import Link from "next/link"

const Header = async () => {
	return (
		<nav className="fixed top-0 flex items-center w-full p-4 z-50">
			<div className="bg-white px-1 py-1.5 rounded-xl" href="/#hero">
				<Link href="#hero">
					<BaseIcons type="logo" width="2rem" height="2rem" />
				</Link>
			</div>
			<ul className="flex items-center gap-x-4 justify-end w-full">
				<li className="px-2 py-1 rounded-xl bg-primary text-black">
					<BaseButton iconType="phone" width="1.4rem" height="1.4rem" strokeWidth="3" strokeColor="#FFF" link="0123456789">
						<span className="text-start text-white">Anrufen</span>
					</BaseButton>
				</li>
			</ul>
		</nav>
	)
}

export default Header
