import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./__component_template.scss"

function Subcomponent() {
	return (
		<p>I am a subcomponent</p>
	)
}

export default function BlankContentFiller({height, color}) {
	return (
		<div style={{height: height, background: color}}></div>
	)
}
