import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import "../styles/global.scss"

export default function Test() {
	return (
		<>
			<Header isIndex={false}/>
			<div class="content wrapper">
				<BlankContentfiller height="2000px" color="rgb(25,25,25)" />
			</div>
			<Footer />
		</>
	)
}
