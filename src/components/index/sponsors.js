import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./sponsors.scss"

import indexData from "../../json/index.json"

function Sponsor({staticLogoSrc, sponsorLink}){
	return (
		<a class="sponsor" href={sponsorLink}>
			<img src={staticLogoSrc} />
		</a>
	)
}

export default function Sponsors() {
	return (
		<div id="sponsors-section">
			<h1>Our Sponsors</h1>
			<div id="sponsors-container">
			{indexData.sponsors.map((sponsor) => {
				return(
					<Sponsor staticLogoSrc={sponsor.staticLogoSrc} sponsorLink={sponsor.sponsorLink} />
				)
			})}
			</div>
		</div>
	)
}
