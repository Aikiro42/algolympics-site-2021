import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./algo-year.scss"
import indexData from "../json/index.json"

export default function AlgoYear() {
	var year = indexData.landing.year
	return (
		<span class="algo-year">
			<span class="red">{year[0]}</span>
			<span class="yellow">{year[1]}</span>
			<span class="green">{year[2]}</span>
			<span class="blue">{year[3]}</span>
		</span>
	)
}
