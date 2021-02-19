import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header isIndex={false}/>
			<BlankContentfiller height="2000px" color="rgb(25,25,25)" />
			<Footer />
		</>
	)
}
