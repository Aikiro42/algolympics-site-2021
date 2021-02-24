import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./footer.scss"

function Subcomponent() {
	return (
		<p>I am a subcomponent</p>
	)
}

export default function Component() {
	return (
		<div class="footer incompressible">
			<div class="wrapper">
			</div>
		</div>
	)
}
