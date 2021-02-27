import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import Countdown from "../components/live/countdown.js"

import "../styles/global.scss"

export default function Live() {
	return (
		<>
			<Header isIndex={false}/>
			<div class="content wrapper incompressible">
				<BlankContentfiller height="100px" color="none" />
				<Countdown />
				<BlankContentfiller height="100px" color="none" />
			</div>
			<Footer />
		</>
	)
}
