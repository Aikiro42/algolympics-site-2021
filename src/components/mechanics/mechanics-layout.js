import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./mechanics-layout.scss"

function Subcomponent() {
	return (
		<p>I am a subcomponent</p>
	)
}

export default function MechanicsLayout({children}) {
	return (
		<div id="mechanics-layout">
		<h1 id="page-title">Mechanics</h1>
		{children}
		</div>
	)
}
