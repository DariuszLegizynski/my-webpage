import BaseButton from "@/components/base/BaseButton"

const Header = async () => {
	return (
		<nav className="fixed top-0 flex items-center w-full p-4">
			<div className="bg-white px-1 py-1.5 rounded-xl" href="/#hero">
				<p>Logo</p>
			</div>
			<ul className="flex items-center gap-x-4 justify-end w-full">
				<li className="text-primary-dark">
					<div className="bg-white px-2 py-1.5 rounded-xl" href="/#about">
						<p>Über Mich</p>
					</div>
				</li>
				<li className="px-2 py-1 rounded-xl bg-primary text-black">
					<BaseButton iconType="phone" width="1.4rem" height="1.4rem" strokeWidth="3" strokeColor="#FFF" link="0123456789">
						<span className="text-start text-white">Anrufen</span>
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
