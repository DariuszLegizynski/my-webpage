import BaseButton from "@/components/base/BaseButton"

const Header = async () => {
	return (
		<nav className="fixed top-0 flex items-center w-full p-4">
			<div href="/#hero">
				<p>Logo</p>
			</div>
			<ul className="flex items-center gap-x-4 justify-end w-full">
				<li className="text-primary-dark">
					<div href="/#about">
						<h3>Über Mich</h3>
					</div>
				</li>
				<li className="px-3 py-1.5 rounded-xl bg-primary text-black">
					<BaseButton iconType="phone" width="1.2rem" height="1.2rem" strokeWidth={3} link="0123456789">
						Anrufen
					</BaseButton>
				</li>
				{/* <li
          whileTap={{ scale: 0.9, y: 0 }}><Link href="/#services"><h3>Leistungsumfang</h3></Link></li>
				<li
          whileTap={{ scale: 0.9, y: 0 }}><Link href="/prices"><h3>Preise</h3></Link></li> */}
			</ul>
		</nav>
	)
}

export default Header
