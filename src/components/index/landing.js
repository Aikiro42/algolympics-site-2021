import React  from "react"

import "./landing.scss"
import indexData from "../../json/index.json";

import AlgoYear from "../algo-year.js";

export default function Landing() {
	return (
		<>
			<img id="landing-image" src={indexData.landing.staticBgSrc} />
			<div id="landing-text">
				<div class="wrapper">
					<h1>Algolympics <AlgoYear /></h1>
					<p id="algo-theme">{indexData.landing.algoTheme}</p>
				</div>
			</div>
			<div id="landing-spacer"></div>
		</>
	)
}
