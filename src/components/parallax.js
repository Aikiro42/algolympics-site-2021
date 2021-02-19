import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./__component_template.scss"

function Subcomponent() {
	return (
		<p>I am a subcomponent</p>
	)
}

export default function Component({staticImgSrc}) {
	return (
		<p>I am the component</p>
		<Subcomponent />
	)
}
