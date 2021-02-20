import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./__component_template.scss"

import componentData from "../json/componentData.json"

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
