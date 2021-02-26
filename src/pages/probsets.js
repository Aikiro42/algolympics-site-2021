import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"

import PrevAlgoProbsets from "../components/probsets/prev-algo-probsets.js"
import SampleProblems from "../components/probsets/sample-problems.js"
import PracticeRecommendations from "../components/probsets/practice-recommendations.js"

import "../styles/global.scss"

export default function Probsets() {
	return (
		<>
			<Header isIndex={false}/>
			<div class="content wrapper">
				<BlankContentfiller height="100px" color="none" />
				<SampleProblems />
				<PrevAlgoProbsets />
				<PracticeRecommendations />
				<BlankContentfiller height="100px" color="none" />
			</div>
			<Footer />
		</>
	)
}
