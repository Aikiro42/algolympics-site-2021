import React, {useEffect} from "react"

import "./algo-intro.scss"
import indexData from "../../json/index.json";

import AOS from "aos";
import "aos/dist/aos.css"


export default function Component() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	});
	return (
		<div id="algo-intro-section"
			data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="650">
			
			<img id="intro-image" src={indexData.intro.staticImageSrc} />
			<div id="intro-text">
				<h1>What is Algolympics?</h1>
				<p>{indexData.intro.introText}</p>
			</div>
		</div>
	)
}
