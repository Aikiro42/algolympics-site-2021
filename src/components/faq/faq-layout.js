import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./faq-layout.scss"

export default function FaqLayout({children}) {
	return (
		<div id="faq-layout" class="md-layout">
		<h1 id="page-title">Frequently Asked Questions</h1>
		{children}
		</div>
	)
}
