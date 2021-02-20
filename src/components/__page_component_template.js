import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./__page_component_template.scss"
import pageData from "../../json/__page_data.json"

function Subcomponent() {
	return (
		<p>I am a subcomponent</p>
	)
}

export default function Component() {
	return (
		<p>I am the component</p>
		<Subcomponent />
	)
}
