import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./prizes.scss"
import indexData from "../../json/index.json"

function Prize({place, amount}) {
	
	var prize_heading = "";
	switch(place){
		case "first":
			prize_heading = "1st place";
			break;
		case "second":
			prize_heading = "2nd place";
			break;
		case "third":
			prize_heading = "3rd place";
			break;
		default:
			prize_heading = ""
	}
	
	return (
		<div class="prize" id={place}>
			<h2>{prize_heading}</h2>
			<p>{amount}</p>
		</div>
	)
}

export default function Prizes() {
	return (
		<div id="prizes-section">
			<Prize place="second" amount={indexData.prizes.second} />
			<Prize place="first" amount={indexData.prizes.first} />
			<Prize place="third" amount={indexData.prizes.third} />
		</div>
	)
}
