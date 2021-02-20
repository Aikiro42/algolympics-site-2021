import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import Landing from "../components/index/landing.js"

import "../styles/global.scss"

export default function Home() {
	return (
		<>
			<Header isIndex={true} />
			<Landing />
			<div class="content wrapper">
				<BlankContentfiller height="2000px" color="rgba(25,25,25,0)" />
			</div>
			<Footer />
		</>
	)
}
