"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Cookies from "js-cookie"

const ConsentBanner = () => {
	const [isBannerVisible, setIsBannerVisible] = useState(false)

	const isCookie = Cookies.get("cookieConsent")
	useEffect(() => {
		setIsBannerVisible(isCookie ? false : true)
	}, [isCookie])

	const handleConsent = () => {
		Cookies.set("cookieConsent", "true", { expires: 30 })
		setIsBannerVisible(false)
	}

	return (
		<>
			{isBannerVisible ? (
				<article className="fixed bottom-0 w-full bg-primary p-4 z-50">
					<div className="max-w-[1024px] mx-auto">
						<p className="text-white pb-4 text-sm">
							Um ein optimales Nutzererlebnis zu ermöglichen, werden Cookies gesetzt. Durch die weitere Nutzung dieser Website wird der{" "}
							<Link href="/privacypolicy" className="cursor-pointer text-accent">
								Datenschutzerklärung
							</Link>{" "}
							zugestimmt.
						</p>
						<div className="flex justify-center">
							<button onClick={handleConsent} className="bg-white px-3 py-2.5 rounded-xl text-primary max-w-44">
								Akzeptieren
							</button>
						</div>
					</div>
				</article>
			) : null}
		</>
	)
}

export default ConsentBanner
