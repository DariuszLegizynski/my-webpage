import CookieBanner from "./components/CookieBanner"
import Header from "./components/Header"
import Link from "next/link"

import "@/styles/tailwind.css"

export const metadata = {
	title: "Webentwickler Dariusz Legizynski – Moderne Webseiten mit Strapi",
	description:
		"Professionelle Webentwicklung für maßgeschneiderte Webseiten mit einfacher Inhaltspflege durch Strapi. Ich helfe Ihnen, Ihre digitale Präsenz zu stärken – flexibel, benutzerfreundlich und individuell auf Ihre Bedürfnisse angepasst.",
}

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Header />
				<main className="mt-24 mb-12 px-4">{children}</main>
				<CookieBanner />
				<section className="flex flex-col md:flex-row md:justify-center items-center gap-4 py-8 text-white bg-primary">
					<Link href="/privacypolicy">Datenschutzerklärung</Link>
					<Link href="/impressum">Impressum</Link>
				</section>
			</body>
		</html>
	)
}

export default RootLayout

