import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import Landing from "../components/index/landing.js"
import AlgoIntro from "../components/index/algo-intro.js"
import Numbers from "../components/index/numbers.js"
import PrizesWinners from "../components/index/prizes-winners.js"
import Sponsors from "../components/index/sponsors.js"

import "../styles/global.scss"

export default function Home() {
	return (
		<>
			<Header isIndex={true} />
			<Landing />
			<div class="content wrapper">
				<AlgoIntro />
				<Numbers />
				<PrizesWinners />
				<Sponsors />
				<BlankContentfiller height="100px" color="rgba(25,25,25,0)" />
			</div>
			<Footer />
		</>
	)
}
