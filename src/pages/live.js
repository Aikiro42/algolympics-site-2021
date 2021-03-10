import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import SpacedComponents from "../layouts/spaced-components.js"

import Countdown from "../components/live/countdown.js"
import Scoreboards from "../components/live/scoreboards.js"

import "../styles/global.scss"

export default function Live() {
	return (
		<>
			<Header isIndex={false}/>
			<div class="content wrapper incompressible">
				<SpacedComponents>
					<Countdown />
					<Scoreboards />
				</SpacedComponents>
			</div>
			<Footer />
		</>
	)
}
