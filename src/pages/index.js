import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import Landing from "../components/index/landing.js"
import AlgoIntro from "../components/index/algo-intro.js"
import Numbers from "../components/index/numbers.js"
import Prizes from "../components/index/prizes.js"
import Sponsors from "../components/index/sponsors.js"

import "../styles/global.scss"

export default function Home() {
	var sectionSpacing = "100px";
	return (
		<>
			<Header isIndex={true} />
			<Landing />
			<div class="content wrapper incompressible">
				<BlankContentfiller height="50px" color="none" />

				<AlgoIntro />
				<BlankContentfiller height={sectionSpacing} color="none" />

				<Numbers />
				<BlankContentfiller height={sectionSpacing} color="none" />

				<Prizes />
				<BlankContentfiller height={sectionSpacing} color="none" />

				<Sponsors />
				<BlankContentfiller height={sectionSpacing} color="none" />

			</div>
			<Footer />
		</>
	)
}
