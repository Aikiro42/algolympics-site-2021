import React, {useState, useEffect}  from "react"

import "./landing.scss"
import indexData from "../../json/index.json";

import AlgoYear from "../algo-year.js";

export default function Landing() {

	const [opaque, setOpaque] = useState(false);

	useEffect(() => {
		var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
			document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
		const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2;
		
		const handleScroll = () => {
			
			const isScrolled = window.scrollY > vh;
			
			if (isScrolled !== opaque) {
				setOpaque(!opaque);
			}
			
			var percent = window.scrollY * 100 / limit;
			percent = String(percent) + "%"
			document.getElementById("landing-image").style.objectPosition = "center " + percent;
		}

		document.addEventListener('scroll', handleScroll);
		return () => {document.removeEventListener('scroll', handleScroll);}
	});

	return (
		<>
			<img id="landing-image" class={opaque ? "scrolled" : ""} src={indexData.landing.staticBgSrc} />
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
