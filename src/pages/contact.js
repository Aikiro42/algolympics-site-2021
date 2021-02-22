import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import "../styles/global.scss"
import "./contact.scss"

export default function Contact() {
	return (
		<>
			<Header isIndex={false}/>
			<div class="content wrapper" id="contact">
				<BlankContentfiller height="2000px" color="none" />
			</div>
			<Footer />
		</>
	)
}
