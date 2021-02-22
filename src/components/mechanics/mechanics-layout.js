import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./mechanics-layout.scss"

export default function MechanicsLayout({children}) {
	return (
		<div id="mechanics-layout" class="md-layout">
		<h1 id="page-title">Mechanics</h1>
		{children}
		</div>
	)
}
