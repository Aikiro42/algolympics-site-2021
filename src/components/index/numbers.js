import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./numbers.scss"
import indexData from "../../json/index.json"

import AOS from "aos"
import "aos/dist/aos.css"

function Number({value, desc, iconSrc, isSpecial}) {
	return (
		<div class={isSpecial ? "number special" : "number"}
			data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="650">
			<div class="val-container">
				<img class="icon" src={iconSrc} />
				<h1 class="value">{value}</h1>
			</div>
			<p class="description">{desc}</p>
		</div>
	)
}

export default function Numbers() {
	return (
		<div id="numbers-section">
			<Number iconSrc="/placeholder-logo.png" value="69" desc="Haha funi sex number hahaha"/>
			{indexData.numbers.map((number) => (
				<Number iconSrc={number.staticIconSrc} value={number.value} desc={number.description} />
			))}
			<Number isSpecial={true} iconSrc="/placeholder-logo.png" value="One goal" desc="Be the best team to win the competition."/>
		</div>
	)
}
