import React  from "react"

import "./landing.scss"
import indexData from "../../json/index.json";

export default function Landing() {
	return (
		<>
			<img id="landing-image" src="/sample-bg.png"/>
			<div id="landing-text">
				<div class="wrapper">
					<h1>Algolympics <span class="year">{indexData.landing.year}</span></h1>
					<p id="algo-theme">{indexData.landing.algoTheme}</p>
				</div>
			</div>
			<div id="landing-spacer"></div>
		</>
	)
}
