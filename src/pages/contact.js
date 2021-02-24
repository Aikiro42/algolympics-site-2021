import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import "../styles/global.scss"
import "./contact.scss"
import ParallaxBackground from "../components/parallax-background.js"
import Map from "../components/contact/map.js"
import Social from "../components/contact/social.js"

export default function Contact() {
	return (
		<>
			<Header isIndex={false}/>
			<div class="content wrapper incompressible" id="contact">
				<ParallaxBackground parallaxSrc="/assets/img/background.png" />
				<Map />
				<Social />
			</div>
			<Footer />
		</>
	)
}
